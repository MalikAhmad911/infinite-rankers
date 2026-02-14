import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-background border border-border rounded-md shadow-lg overflow-hidden"
            data-testid="chatbot-window"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">AI Assistant</div>
                  <div className="text-xs text-white/70">Online</div>
                </div>
              </div>
              <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 no-default-hover-elevate">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 h-64 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">AI Chat Coming Soon</p>
                  <p className="text-xs text-muted-foreground">Our AI assistant is being trained to help you.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <Input
                  placeholder="Type a message..."
                  className="text-sm"
                  disabled
                  data-testid="input-chatbot"
                />
                <Button size="icon" disabled>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center"
        data-testid="button-chatbot-toggle"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </motion.button>
    </>
  );
}
