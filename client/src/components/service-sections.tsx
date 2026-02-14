import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, ChevronDown, ArrowDown } from "lucide-react";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";

interface ProblemSolutionProps {
  problems: string[];
  solutions: string[];
  serviceTitle: string;
  accentFrom: string;
  accentTo: string;
  variant: "A" | "B" | "C";
}

export function ProblemSolutionSection({ problems, solutions, serviceTitle, accentFrom, accentTo, variant }: ProblemSolutionProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={serviceTitle}
          title="Problems We Solve"
        />
        {variant === "A" && (
          <ProblemSolutionA problems={problems} solutions={solutions} accentFrom={accentFrom} accentTo={accentTo} />
        )}
        {variant === "B" && (
          <ProblemSolutionB problems={problems} solutions={solutions} accentFrom={accentFrom} accentTo={accentTo} />
        )}
        {variant === "C" && (
          <ProblemSolutionC problems={problems} solutions={solutions} accentFrom={accentFrom} accentTo={accentTo} />
        )}
      </div>
    </section>
  );
}

function ProblemSolutionA({ problems, solutions, accentFrom, accentTo }: { problems: string[]; solutions: string[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-red-500 mb-6">Without Us</h3>
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-3 p-4 rounded-md bg-red-50/80 border border-red-200/60"
          >
            <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{problem}</span>
          </motion.div>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className={`text-xl font-semibold bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent mb-6`}>With Us</h3>
        {solutions.map((solution, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-3 p-4 rounded-md bg-white/80 border border-gray-200/60 shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-600" />
            <span className="text-muted-foreground">{solution}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProblemSolutionB({ problems, solutions, accentFrom, accentTo }: { problems: string[]; solutions: string[]; accentFrom: string; accentTo: string }) {
  const pairs = problems.map((p, i) => ({ problem: p, solution: solutions[i] || "" }));
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b ${accentFrom} ${accentTo} opacity-30`} />
      {pairs.map((pair, i) => (
        <div key={i} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 mb-6 md:mb-12 last:mb-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex items-start gap-3 p-4 rounded-md bg-red-50/80 border border-red-200/60"
          >
            <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">{pair.problem}</span>
          </motion.div>
          <div className="hidden md:flex relative items-center justify-center w-10">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`} />
            <div className="absolute left-0 right-0 h-px bg-gray-200/60" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
            className="flex items-start gap-3 p-4 rounded-md bg-white/80 border border-gray-200/60 shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">{pair.solution}</span>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function ProblemSolutionC({ problems, solutions, accentFrom, accentTo }: { problems: string[]; solutions: string[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="space-y-0">
      <motion.div
        initial={{ opacity: 0, rotateX: 10 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-lg font-semibold text-red-500 mb-4 text-center">Before</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 p-4 rounded-md bg-red-50/80 border border-red-200/60"
            >
              <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm">{problem}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex items-center justify-center py-8">
        <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${accentFrom} ${accentTo} to-transparent opacity-40`} />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-4"
        >
          <ArrowDown className="w-8 h-8 text-gray-400" />
        </motion.div>
        <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${accentFrom} ${accentTo} to-transparent opacity-40`} />
      </div>

      <motion.div
        initial={{ opacity: 0, rotateX: -10 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className={`text-lg font-semibold bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent mb-4 text-center`}>After</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
              className="flex items-start gap-3 p-4 rounded-md bg-white/80 border border-gray-200/60 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm">{solution}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

interface FeaturesSectionProps {
  features: string[];
  accentFrom: string;
  accentTo: string;
  variant: "A" | "B" | "C";
}

export function FeaturesSection({ features, accentFrom, accentTo, variant }: FeaturesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Features" title="What's Included" />
        {variant === "A" && (
          <FeaturesA features={features} accentFrom={accentFrom} accentTo={accentTo} />
        )}
        {variant === "B" && (
          <FeaturesB features={features} accentFrom={accentFrom} accentTo={accentTo} />
        )}
        {variant === "C" && (
          <FeaturesC features={features} accentFrom={accentFrom} accentTo={accentTo} />
        )}
      </div>
    </section>
  );
}

function FeaturesA({ features, accentFrom, accentTo }: { features: string[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="flex items-start gap-3 p-4 rounded-md bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm"
        >
          <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 text-emerald-600`} />
          <span className="text-muted-foreground text-sm">{feature}</span>
        </motion.div>
      ))}
    </div>
  );
}

function FeaturesB({ features, accentFrom, accentTo }: { features: string[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, i) => {
        const isLarge = i < 2;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className={`p-5 rounded-md bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm ${isLarge ? "sm:col-span-2 flex flex-col items-center text-center py-8" : ""}`}
          >
            {isLarge ? (
              <>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center mb-4`}>
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-foreground font-medium text-base">{feature}</span>
              </>
            ) : (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-600" />
                <span className="text-muted-foreground text-sm">{feature}</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function FeaturesC({ features, accentFrom, accentTo }: { features: string[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "thin", WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="flex-none w-56 sm:w-64 snap-start rounded-md bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm p-4 sm:p-5 flex flex-col"
        >
          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r ${accentFrom} ${accentTo} text-white text-sm font-bold mb-4`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-foreground text-sm font-medium flex-1">{feature}</span>
          <div className={`h-1 w-full mt-4 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} opacity-30`} />
        </motion.div>
      ))}
    </div>
  );
}

interface WorkflowSectionProps {
  steps: { step: string; desc: string }[];
  accentFrom: string;
  accentTo: string;
  variant: "A" | "B" | "C";
}

export function WorkflowSection({ steps, accentFrom, accentTo, variant }: WorkflowSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="How It Works" title="Implementation Workflow" />
        {variant === "A" && (
          <WorkflowA steps={steps} accentFrom={accentFrom} accentTo={accentTo} />
        )}
        {variant === "B" && (
          <WorkflowB steps={steps} accentFrom={accentFrom} accentTo={accentTo} />
        )}
        {variant === "C" && (
          <WorkflowC steps={steps} accentFrom={accentFrom} accentTo={accentTo} />
        )}
      </div>
    </section>
  );
}

function WorkflowA({ steps, accentFrom, accentTo }: { steps: { step: string; desc: string }[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="relative">
      <div className={`hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r ${accentFrom} ${accentTo} opacity-30`} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <GlassCard className="text-center relative">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white font-bold text-sm mx-auto mb-4`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="text-foreground font-semibold mb-2">{s.step}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkflowB({ steps, accentFrom, accentTo }: { steps: { step: string; desc: string }[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b ${accentFrom} ${accentTo} opacity-30 md:-translate-x-1/2`} />
      {steps.map((s, i) => {
        const isLeft = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`relative flex items-center mb-8 md:mb-12 last:mb-0 pl-10 md:pl-0 ${isLeft ? "md:justify-start" : "md:justify-end"}`}
          >
            <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} z-10`} />
            <div className={`w-full md:w-5/12 p-5 rounded-md bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm text-left ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
              <span className={`inline-block text-xs font-bold bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent mb-2`}>
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="text-foreground font-semibold mb-1">{s.step}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function WorkflowC({ steps, accentFrom, accentTo }: { steps: { step: string; desc: string }[]; accentFrom: string; accentTo: string }) {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          style={{ marginLeft: `min(${i * 1.5}rem, ${i * 2}vw)` }}
          className="flex items-stretch rounded-md bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm overflow-hidden"
        >
          <div className={`w-1 bg-gradient-to-b ${accentFrom} ${accentTo} shrink-0`} />
          <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 flex-1 min-w-0">
            <span className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent shrink-0`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h4 className="text-foreground font-semibold mb-1">{s.step}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

interface FAQSectionProps {
  faqs: { q: string; a: string }[];
  accentFrom: string;
  accentTo: string;
  variant: "A" | "B" | "C";
}

export function FAQSection({ faqs, accentFrom, accentTo, variant }: FAQSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" />
        {variant === "A" && (
          <FAQA faqs={faqs} />
        )}
        {variant === "B" && (
          <FAQB faqs={faqs} accentFrom={accentFrom} accentTo={accentTo} />
        )}
        {variant === "C" && (
          <FAQC faqs={faqs} accentFrom={accentFrom} accentTo={accentTo} />
        )}
      </div>
    </section>
  );
}

function FAQA({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <GlassCard key={i} delay={i * 0.1}>
          <h4 className="text-foreground font-semibold mb-2">{faq.q}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
        </GlassCard>
      ))}
    </div>
  );
}

function FAQB({ faqs, accentFrom, accentTo }: { faqs: { q: string; a: string }[]; accentFrom: string; accentTo: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-md bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
            data-testid={`faq-toggle-${i}`}
          >
            <span className="text-foreground font-semibold pr-4">{faq.q}</span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5">
                  <div className={`h-px w-full bg-gradient-to-r ${accentFrom} ${accentTo} opacity-20 mb-4`} />
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

function FAQC({ faqs, accentFrom, accentTo }: { faqs: { q: string; a: string }[]; accentFrom: string; accentTo: string }) {
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  const renderFaq = (faq: { q: string; a: string }, i: number) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="flex rounded-md bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm overflow-hidden"
    >
      <div className={`w-[2px] bg-gradient-to-b ${accentFrom} ${accentTo} shrink-0`} />
      <div className="p-5">
        <h4 className="text-foreground font-semibold mb-2 text-sm">{faq.q}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-4 items-start">
      <div className="space-y-4">
        {leftFaqs.map((faq, i) => renderFaq(faq, i))}
      </div>
      <div className="space-y-4">
        {rightFaqs.map((faq, i) => renderFaq(faq, i))}
      </div>
    </div>
  );
}
