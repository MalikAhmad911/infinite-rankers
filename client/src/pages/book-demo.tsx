import { useState } from "react";
import { motion } from "framer-motion";
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
import { CalendarCheck, CheckCircle2, ArrowRight, Clock, Star } from "lucide-react";

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
      revenue: "", service: "", date: "", time: "", message: "",
    },
  });

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
    <div>
      {seo}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-white dark:from-blue-950/30 dark:via-purple-950/20 dark:to-background" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Book a Demo
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Get Your Free{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strategy Session</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how our AI revenue systems can be customized for your business. 30-minute strategy call — no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <GlassCard>
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Schedule Your Session
                </h2>

                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="form-demo"
                >
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Select a Date *</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => {
                            setSelectedDate(d.value);
                            form.setValue("date", d.value);
                          }}
                          className={`p-3 rounded-md text-sm text-center border transition-all ${
                            selectedDate === d.value
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500"
                              : "border-border/50 text-muted-foreground bg-white/50 dark:bg-white/5 hover:border-blue-500/30"
                          }`}
                          data-testid={`button-date-${d.value}`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <Label className="text-sm font-medium mb-3 block">Select a Time *</Label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => {
                              setSelectedTime(t);
                              form.setValue("time", t);
                            }}
                            className={`p-2 rounded-md text-xs text-center border transition-all ${
                              selectedTime === t
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500"
                                : "border-border/50 text-muted-foreground bg-white/50 dark:bg-white/5 hover:border-blue-500/30"
                            }`}
                            data-testid={`button-time-${t.replace(/\s/g, "-")}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="border-t border-border/50 pt-6">
                    <h3 className="text-sm font-semibold text-foreground mb-4">Your Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="demo-name" className="text-sm mb-1.5 block">Full Name *</Label>
                        <Input id="demo-name" placeholder="John Smith" {...form.register("name")} data-testid="input-demo-name" />
                        {form.formState.errors.name && <p className="text-xs text-red-500 mt-1">{form.formState.errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="demo-email" className="text-sm mb-1.5 block">Email *</Label>
                        <Input id="demo-email" type="email" placeholder="john@company.com" {...form.register("email")} data-testid="input-demo-email" />
                        {form.formState.errors.email && <p className="text-xs text-red-500 mt-1">{form.formState.errors.email.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="demo-phone" className="text-sm mb-1.5 block">Phone</Label>
                        <Input id="demo-phone" placeholder="(555) 123-4567" {...form.register("phone")} data-testid="input-demo-phone" />
                      </div>
                      <div>
                        <Label htmlFor="demo-company" className="text-sm mb-1.5 block">Company</Label>
                        <Input id="demo-company" placeholder="Your Company" {...form.register("company")} data-testid="input-demo-company" />
                      </div>
                      <div>
                        <Label htmlFor="demo-website" className="text-sm mb-1.5 block">Website</Label>
                        <Input id="demo-website" placeholder="www.yourcompany.com" {...form.register("website")} data-testid="input-demo-website" />
                      </div>
                      <div>
                        <Label htmlFor="demo-revenue" className="text-sm mb-1.5 block">Monthly Revenue</Label>
                        <Controller
                          control={form.control}
                          name="revenue"
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <SelectTrigger data-testid="select-demo-revenue">
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
                      <Label htmlFor="demo-service" className="text-sm mb-1.5 block">Interested Service</Label>
                      <Controller
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value || ""}>
                            <SelectTrigger data-testid="select-demo-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ai-automation">AI & Automation Systems</SelectItem>
                              <SelectItem value="lead-generation">Lead Generation Systems</SelectItem>
                              <SelectItem value="social-content">Social Media & Content</SelectItem>
                              <SelectItem value="development">Development & Technology</SelectItem>
                              <SelectItem value="full-stack">Full Revenue System</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="demo-message" className="text-sm mb-1.5 block">Additional Notes</Label>
                      <Textarea
                        id="demo-message"
                        placeholder="Tell us about your biggest growth challenge..."
                        className="resize-none min-h-[80px]"
                        {...form.register("message")}
                        data-testid="input-demo-message"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
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
                <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "30-minute strategy call with an AI growth expert",
                    "Custom revenue growth analysis for your business",
                    "AI automation opportunities identification",
                    "Actionable growth roadmap — even if you don't sign up",
                    "No hard sell, no obligation, no pressure",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
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
                  <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">Limited Availability</h3>
                  <p className="text-xs text-muted-foreground">We take on a limited number of new clients each month to ensure quality results.</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
