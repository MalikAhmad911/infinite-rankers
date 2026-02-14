import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  glow?: boolean;
}

export default function GlassCard({ children, className, hover = true, delay = 0, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative rounded-md p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]",
        hover && "transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06]",
        glow && "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
