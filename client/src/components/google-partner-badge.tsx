import { SiGoogle } from "react-icons/si";

interface GooglePartnerBadgeProps {
  variant?: "footer" | "inline" | "compact";
}

export function GooglePartnerBadge({ variant = "inline" }: GooglePartnerBadgeProps) {
  if (variant === "footer") {
    return (
      <div data-testid="badge-google-partner-footer">
        <div className="bg-white rounded-lg p-4 sm:p-5 inline-flex flex-col items-center gap-2 w-[130px] sm:w-[140px]">
          <SiGoogle className="w-8 h-8 sm:w-10 sm:h-10 text-[#4285F4]" />
          <span className="text-[#5F6368] font-medium text-xs sm:text-sm">Google Partner</span>
        </div>
        <p className="text-blue-400 font-semibold text-sm sm:text-base mt-3">We're Google Partners!</p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 bg-white rounded-md px-3 py-1.5" data-testid="badge-google-partner-compact">
        <SiGoogle className="w-4 h-4 text-[#4285F4]" />
        <span className="text-[#5F6368] font-medium text-xs">Google Partner</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm" data-testid="badge-google-partner">
      <SiGoogle className="w-5 h-5 text-[#4285F4]" />
      <span className="text-gray-700 font-semibold text-sm">Google Partner</span>
    </div>
  );
}
