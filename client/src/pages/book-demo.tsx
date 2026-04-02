import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearch } from "wouter";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GlassCard from "@/components/glass-card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertDemoBookingSchema } from "@shared/schema";
import type { InsertDemoBooking } from "@shared/schema";
import { CalendarCheck, CheckCircle2, ArrowRight, Clock, Star, Mail } from "lucide-react";

const BREVO_REF = "https://get.brevo.com/sy6bleulv8gn";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

function generateDates() {
  const dates: { label: string; value: string }[] = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    dates.push({
      label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      value: d.toISOString().split("T")[0],
    });
  }
  return dates;
}

export default function BookDemo() {
  const searchString = useSearch();
  const urlParams = new URLSearchParams(searchString);
  const serviceFromUrl = urlParams.get("service") || "";

  const seo = (
    <SEOHead
      title="Book a Demo - Infinite Rankers | Free Strategy Session"
      description="Book a free 30-minute strategy session with an AI growth expert. Get a custom revenue growth plan for your business."
    />
  );
  const { toast } = useToast();
  const dates = generateDates();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const form = useForm<InsertDemoBooking>({
    resolver: zodResolver(insertDemoBookingSchema),
    defaultValues: {
      name: "", email: "", phone: "", company: "", website: "",
      revenue: "", service: serviceFromUrl, date: "", time: "", message: "",
    },
  });

  useEffect(() => {
    if (serviceFromUrl) {
      form.setValue("service", serviceFromUrl);
    }
  }, [serviceFromUrl, form]);

  const mutation = useMutation({
    mutationFn: async (data: InsertDemoBooking) => {
      return apiRequest("POST", "/api/demo-bookings", data);
    },
    onSuccess: () => {
      toast({ title: "Demo Booked!", description: "We'll send you a confirmation email shortly." });
      form.reset();
      setSelectedDate("");
      setSelectedTime("");
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to book demo. Please try again.", variant: "destructive" });
    },
  });

  const onSubmit = (data: InsertDemoBooking) => {
    if (!selectedDate || !selectedTime) {
      toast({ title: "Please select a date and time", variant: "destructive" });
      return;
    }
    mutation.mutate({ ...data, date: selectedDate, time: selectedTime });
  };

  return (
    <div className="overflow-x-hidden">
      {seo}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Book a Demo
            </span>
            <h1 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
              Get Your Free{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strategy Session</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              See how our AI revenue systems can be customized for your business. 30-minute strategy call — no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <GlassCard>
                <h2 className="font-bold text-foreground mb-6 flex items-center gap-2" style={{ fontSize: "clamp(1.125rem, 3vw, 1.25rem)" }}>
                  <CalendarCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Schedule Your Session
                </h2>

                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="form-demo"
                >
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Select a Date *</Label>
                    <div className="flex flex-wrap gap-2">
                      {dates.map((d) => (
                        <Button
                          key={d.value}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedDate(d.value);
                            form.setValue("date", d.value);
                          }}
                          className={`toggle-elevate ${selectedDate === d.value ? "toggle-elevated" : ""}`}
                          data-testid={`button-date-${d.value}`}
                        >
                          {d.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <Label className="text-sm font-medium mb-3 block">Select a Time *</Label>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((t) => (
                          <Button
                            key={t}
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedTime(t);
                              form.setValue("time", t);
                            }}
                            className={`text-xs toggle-elevate ${selectedTime === t ? "toggle-elevated" : ""}`}
                            data-testid={`button-time-${t.replace(/\s/g, "-")}`}
                          >
                            {t}
                          </Button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="border-t border-border/50 pt-6">
                    <h3 className="text-sm font-semibold text-foreground mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="demo-name" className="text-sm mb-1.5 block">Full Name *</Label>
                        <Input id="demo-name" placeholder="John Smith" className="w-full" {...form.register("name")} data-testid="input-demo-name" />
                        {form.formState.errors.name && <p className="text-xs text-red-500 mt-1">{form.formState.errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="demo-email" className="text-sm mb-1.5 block">Email *</Label>
                        <Input id="demo-email" type="email" placeholder="john@company.com" className="w-full" {...form.register("email")} data-testid="input-demo-email" />
                        {form.formState.errors.email && <p className="text-xs text-red-500 mt-1">{form.formState.errors.email.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="demo-phone" className="text-sm mb-1.5 block">Phone</Label>
                        <Input id="demo-phone" placeholder="(555) 123-4567" className="w-full" {...form.register("phone")} data-testid="input-demo-phone" />
                      </div>
                      <div>
                        <Label htmlFor="demo-company" className="text-sm mb-1.5 block">Company</Label>
                        <Input id="demo-company" placeholder="Your Company" className="w-full" {...form.register("company")} data-testid="input-demo-company" />
                      </div>
                      <div>
                        <Label htmlFor="demo-website" className="text-sm mb-1.5 block">Website</Label>
                        <Input id="demo-website" placeholder="www.yourcompany.com" className="w-full" {...form.register("website")} data-testid="input-demo-website" />
                      </div>
                      <div>
                        <Label htmlFor="demo-revenue" className="text-sm mb-1.5 block">Monthly Revenue</Label>
                        <Controller
                          control={form.control}
                          name="revenue"
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <SelectTrigger className="w-full" data-testid="select-demo-revenue">
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-10k">Under $10K</SelectItem>
                                <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                                <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                                <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                                <SelectItem value="500k-plus">$500K+</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="demo-service" className="text-sm mb-1.5 block">What Service Are You Looking For?</Label>
                      <Input
                        id="demo-service"
                        placeholder="e.g. AI Calling Agent, Lead Generation, SEO..."
                        className="w-full"
                        {...form.register("service")}
                        data-testid="input-demo-service"
                      />
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="demo-message" className="text-sm mb-1.5 block">Additional Notes</Label>
                      <Textarea
                        id="demo-message"
                        placeholder="Tell us about your biggest growth challenge..."
                        className="resize-none min-h-[80px] w-full"
                        {...form.register("message")}
                        data-testid="input-demo-message"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={mutation.isPending || !selectedDate || !selectedTime}
                    data-testid="button-demo-submit"
                  >
                    {mutation.isPending ? "Booking..." : "Book Strategy Session"} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </form>
              </GlassCard>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <GlassCard>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "30-minute strategy call with an AI growth expert",
                    "Custom revenue growth analysis for your business",
                    "AI automation opportunities identification",
                    "Actionable growth roadmap — even if you don't sign up",
                    "No hard sell, no obligation, no pressure",
                    "24/7 support team — we respond on weekends too",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "The strategy session alone was worth more than what we paid our previous agency for a full month. Incredible insights."
                </p>
                <div className="text-sm font-semibold text-foreground">Michael Chen</div>
                <div className="text-xs text-muted-foreground">CEO, Premier Dental Care</div>
              </GlassCard>

              <GlassCard>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">Limited Availability</h3>
                  <p className="text-xs text-muted-foreground">We take on a limited number of new clients each month to ensure quality results.</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ background: "linear-gradient(to right, #0B2A6B, #1246B4, #0B2A6B)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base sm:text-lg leading-snug">
                  Need email marketing too?
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#93c5fd" }}>
                  Start free with Brevo — unlimited contacts, email + SMS, built-in CRM.
                </p>
              </div>
            </div>
            <a
              href={BREVO_REF}
              target="_blank"
              rel="noopener noreferrer sponsored"
              data-testid="link-brevo-book-demo"
              className="flex-shrink-0 inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg whitespace-nowrap"
              style={{ backgroundColor: "#ffffff", color: "#0B2A6B" }}
            >
              Start Free with Brevo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
