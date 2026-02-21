import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Loader2, Phone, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
const botLogo = "/images/logo-icon.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  budget?: string;
  service?: string;
}

const QUICK_ACTIONS = [
  { label: "Our Services", message: "What services do you offer?" },
  { label: "Get Pricing", message: "What are your pricing plans?" },
  { label: "See Results", message: "Can you show me some case study results?" },
  { label: "Book a Call", message: "I'd like to book a strategy call" },
];

const GREETING_MESSAGE: Message = {
  id: "greeting",
  role: "assistant",
  content: `Hi there! I'm the Infinite Rankers AI Assistant.\n\nI help businesses like yours grow revenue with AI-powered automation, lead generation, and digital marketing.\n\nHow can I help you today?`,
  timestamp: new Date(),
};

function extractLeadInfo(messages: Message[]): LeadData {
  const lead: LeadData = {};
  const allText = messages
    .filter(m => m.role === "user")
    .map(m => m.content)
    .join(" ");

  const emailMatch = allText.match(/[\w.+-]+@[\w-]+\.[\w.]+/);
  if (emailMatch) lead.email = emailMatch[0];

  const phoneMatch = allText.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
  if (phoneMatch) lead.phone = phoneMatch[0];

  return lead;
}

async function submitLead(lead: LeadData, chatSummary: string) {
  if (!lead.name || !lead.email) return;
  try {
    await fetch("/api/chatbot/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email,
        phone: lead.phone || null,
        company: lead.company || null,
        message: chatSummary,
      }),
    });
  } catch {}
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const leadDataRef = useRef<LeadData>({});
  const leadSubmittedRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bubbleDismissed || isOpen) return;
    const timer = setTimeout(() => setShowBubble(true), 2500);
    return () => clearTimeout(timer);
  }, [bubbleDismissed, isOpen]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (leadSubmittedRef.current) return;
    const extracted = extractLeadInfo(messages);
    const updatedLead = { ...leadDataRef.current, ...extracted };

    const userMessages = messages.filter(m => m.role === "user");
    if (userMessages.length >= 1 && !updatedLead.name) {
      const firstMsg = userMessages[0].content;
      if (firstMsg.split(" ").length <= 4 && !firstMsg.includes("?") && !firstMsg.includes("@")) {
        updatedLead.name = firstMsg;
      }
    }

    leadDataRef.current = updatedLead;

    if (updatedLead.name && updatedLead.email) {
      const chatSummary = messages
        .filter(m => m.role === "user")
        .map(m => m.content)
        .join(" | ");
      submitLead(updatedLead, chatSummary);
      leadSubmittedRef.current = true;
    }
  }, [messages]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isStreaming) return;

    setShowBubble(false);
    setBubbleDismissed(true);
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsStreaming(true);

    const assistantId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
    }]);

    try {
      const apiMessages = updatedMessages.map(m => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) throw new Error("Failed");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const event = JSON.parse(line.slice(6));
            if (event.done) break;
            if (event.content) {
              setMessages(prev =>
                prev.map(m =>
                  m.id === assistantId
                    ? { ...m, content: m.content + event.content }
                    : m
                )
              );
            }
          } catch {}
        }
      }
    } catch {
      setMessages(prev =>
        prev.map(m =>
          m.id === assistantId
            ? { ...m, content: "I'm having trouble connecting right now. Please try again, or reach us at contact@infiniterankers.io or call (703) 415-9373." }
            : m
        )
      );
    } finally {
      setIsStreaming(false);
    }
  }, [messages, isStreaming]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i < content.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
    setBubbleDismissed(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-background border border-border rounded-md shadow-xl overflow-hidden flex flex-col"
            style={{ maxHeight: "min(560px, calc(100vh - 8rem))" }}
            data-testid="chatbot-window"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-white/30 overflow-hidden shrink-0 flex items-center justify-center">
                  <img src={botLogo} alt="Infinite Rankers" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">INFINITE RANKERS</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-white"
                aria-label="Close chat"
                data-testid="button-chatbot-close"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0" data-testid="chatbot-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center overflow-hidden ${
                    msg.role === "assistant"
                      ? "bg-white border border-gray-200"
                      : "bg-muted"
                  }`}>
                    {msg.role === "assistant" ? (
                      <img src={botLogo} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-md px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-muted text-foreground"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    }`}
                  >
                    {msg.content ? formatContent(msg.content) : (
                      <span className="flex items-center gap-1.5">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span className="text-muted-foreground text-xs">Thinking...</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && !isStreaming && (
              <div className="px-4 pb-2 shrink-0">
                <div className="grid grid-cols-2 gap-1.5">
                  {QUICK_ACTIONS.map((action) => (
                    <Button
                      key={action.label}
                      variant="outline"
                      size="sm"
                      onClick={() => sendMessage(action.message)}
                      className="text-xs justify-start"
                      data-testid={`button-quick-${action.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="px-3 pb-2 pt-1 shrink-0">
              <div className="flex items-center justify-center gap-3 pb-1.5 flex-wrap">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-1 text-xs text-muted-foreground"
                  data-testid="link-chatbot-phone"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Us</span>
                </a>
                <span className="text-muted-foreground/40">|</span>
                <a
                  href="/book-demo"
                  className="flex items-center gap-1 text-xs text-muted-foreground"
                  data-testid="link-chatbot-book"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book Demo</span>
                </a>
                <span className="text-muted-foreground/40">|</span>
                <a
                  href="/pricing"
                  className="flex items-center gap-1 text-xs text-muted-foreground"
                  data-testid="link-chatbot-pricing"
                >
                  <DollarSign className="w-3 h-3" />
                  <span>Pricing</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-3 pb-3 shrink-0">
              <div className="flex items-center gap-2 border border-border rounded-md px-3 py-1.5 bg-background focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground/60"
                  disabled={isStreaming}
                  data-testid="input-chatbot-message"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  disabled={!input.trim() || isStreaming}
                  className="shrink-0"
                  aria-label="Send message"
                  data-testid="button-chatbot-send"
                >
                  {isStreaming ? (
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="w-4 h-4" aria-hidden="true" />
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50"
            data-testid="chatbot-bubble"
          >
            <div className="relative bg-white rounded-md shadow-lg border border-gray-200 px-4 py-3 max-w-[220px]">
              <button
                onClick={(e) => { e.stopPropagation(); setShowBubble(false); setBubbleDismissed(true); }}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs leading-none"
                aria-label="Dismiss notification"
                data-testid="button-bubble-close"
              >
                <X className="w-3 h-3" aria-hidden="true" />
              </button>
              <p
                className="text-sm text-gray-800 font-medium cursor-pointer"
                onClick={handleOpen}
              >
                Hi, How can I help you today?
              </p>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        role="button"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        tabIndex={0}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        onClick={() => { if (isOpen) { setIsOpen(false); } else { handleOpen(); } }}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-[60px] h-[60px] rounded-full bg-white border-2 border-blue-500/30 shadow-lg cursor-pointer overflow-hidden flex items-center justify-center"
        data-testid="button-chatbot-toggle"
      >
        {!isOpen && !bubbleDismissed && (
          <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" />
        )}
        {isOpen ? (
          <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <X className="w-5 h-5 text-white" />
          </div>
        ) : (
          <img src={botLogo} alt="Chat with us" className="w-[52px] h-[52px] object-cover rounded-full" />
        )}
      </motion.div>
    </>
  );
}
