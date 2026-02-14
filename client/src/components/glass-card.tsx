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
        "relative rounded-md p-6 bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm",
        hover && "transition-all duration-300 hover:border-blue-300/50 hover:shadow-md hover:shadow-blue-100/30",
        glow && "hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
