import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEOHead from "@/components/seo-head";
import GlassCard from "@/components/glass-card";
import { COMPANY } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { Mail, Phone, MapPin, ArrowRight, Send, Clock, CheckCircle2, CalendarCheck, MessageSquare } from "lucide-react";

const NEXT_STEPS = [
  {
    icon: MessageSquare,
    step: "We review your message",
    desc: "A strategist reads your inquiry and identifies the best-fit solution for your industry and goals.",
  },
  {
    icon: CalendarCheck,
    step: "We schedule your session",
    desc: "We send a calendar link to book a 30-minute strategy call at a time that works for you.",
  },
  {
    icon: CheckCircle2,
    step: "You get a custom growth plan",
    desc: "On the call, we present a tailored AI revenue growth roadmap — at no cost and no obligation.",
  },
];

export default function Contact() {
  const seo = (
    <SEOHead
      title="Contact Us - Infinite Rankers | Get in Touch"
      description="Have a question or ready to get started? Contact Infinite Rankers and our team will respond within 1 business hour."
    />
  );
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({ title: "Message Sent!", description: "We'll get back to you within 1 business hour." });
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    },
  });

  return (
    <div className="overflow-x-hidden">
      {seo}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Contact Us
            </span>
            <h1 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Revenue Engine</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              Have a question or ready to get started? Reach out and our team will respond within 1 business hour.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <GlassCard>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-5">What Happens Next</h3>
                <div className="space-y-5">
                  {NEXT_STEPS.map((item, i) => (
                    <div key={i} className="flex items-start gap-3" data-testid={`next-step-${i}`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-0.5">{item.step}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact-email">
                    <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="break-all">{COMPANY.email}</span>
                  </a>
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact-phone">
                    <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    {COMPANY.phone}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    {COMPANY.address}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Response Within 1 Business Hour</span>
                      <p className="text-xs text-muted-foreground mt-0.5">24/7 support available for active clients</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="bg-gradient-to-br from-blue-600 to-purple-700 border-0">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Book a Free Strategy Session</h3>
                <p className="text-sm text-white/80 mb-4">
                  Get a personalized AI revenue growth plan for your business. No obligation.
                </p>
                <Link href="/book-demo">
                  <Button variant="secondary" className="w-full sm:w-auto" data-testid="button-contact-book-demo">
                    Book Demo <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </GlassCard>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <GlassCard>
                <h2 className="font-bold text-foreground mb-6" style={{ fontSize: "clamp(1.125rem, 3vw, 1.25rem)" }}>Send Us a Message</h2>
                <form
                  onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                  className="space-y-5"
                  data-testid="form-contact"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-sm mb-1.5 block">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        className="w-full"
                        {...form.register("name")}
                        data-testid="input-contact-name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-xs text-red-500 mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm mb-1.5 block">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="w-full"
                        {...form.register("email")}
                        data-testid="input-contact-email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-xs text-red-500 mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone" className="text-sm mb-1.5 block">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="(555) 123-4567"
                        className="w-full"
                        {...form.register("phone")}
                        data-testid="input-contact-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm mb-1.5 block">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="w-full"
                        {...form.register("company")}
                        data-testid="input-contact-company"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm mb-1.5 block">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business and goals..."
                      className="resize-none min-h-[120px] w-full"
                      {...form.register("message")}
                      data-testid="input-contact-message"
                    />
                    {form.formState.errors.message && (
                      <p className="text-xs text-red-500 mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
                    disabled={mutation.isPending}
                    data-testid="button-contact-submit"
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-1" />
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-md overflow-hidden border border-border h-[300px] sm:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.4567!2d-75.5243!3d39.1582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c764a5ae02a53d%3A0x0!2s203+N+Caroline+Pl%2C+Dover%2C+DE+19904!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infinite Rankers Location"
              data-testid="map-embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
