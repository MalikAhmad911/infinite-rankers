import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative rounded-md p-6 bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10",
        hover && "transition-all duration-300 hover:border-blue-500/30 hover:bg-white/80 dark:hover:bg-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
