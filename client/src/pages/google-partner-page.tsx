import SEOHead from "@/components/seo-head";
import { ExternalLink } from "lucide-react";

function GoogleLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export default function GooglePartnerPage() {
  return (
    <>
      <SEOHead
        title="Google Partner | Infinite Rankers"
        description="Infinite Rankers LLC is a certified Google Partner agency. Verified performance, ad spend management, and Google Ads certifications."
      />
      <div className="min-h-screen bg-[#f8f9fa]">
        <div className="bg-white border-b border-gray-200 py-3 sm:py-4 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex items-center gap-2">
            <GoogleLogo size={28} />
            <span className="text-[#5F6368] text-lg sm:text-xl font-normal tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#5F6368] ml-1">Partners</span>
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl font-normal text-[#202124] mb-6" data-testid="heading-company-name">
            Infinite Rankers LLC
          </h1>

          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-normal text-[#202124] mb-2">Google Partner</h2>
            <div className="w-12 h-[3px] bg-[#4285F4] mb-6"></div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <a
                  href="https://www.google.com/partners/agency?id=3886498963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 relative group"
                  data-testid="link-google-partner-badge"
                >
                  <div className="border border-gray-300 rounded-md p-4 flex flex-col items-center gap-2 w-[110px] hover:shadow-md transition-shadow cursor-pointer relative">
                    <ExternalLink className="absolute top-2 right-2 text-[#1a73e8] opacity-70 group-hover:opacity-100 transition-opacity" size={14} />
                    <GoogleLogo size={40} />
                    <span className="text-[#5F6368] font-medium text-xs text-center leading-tight">Google Partner</span>
                  </div>
                </a>
                <p className="text-[#5F6368] text-sm leading-relaxed pt-0 sm:pt-2" data-testid="text-partner-description">
                  Infinite Rankers LLC has met all of the requirements to be a Google Partner.{" "}
                  <a
                    href="https://support.google.com/google-ads/answer/9702452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Learn more
                  </a>{" "}
                  about the Google Partners program and the requirements to become a Partner or Premier Partner.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-[#202124] mb-2 sm:mb-3" data-testid="heading-performance">Performance</h3>
                <p className="text-[#5F6368] text-xs sm:text-sm leading-relaxed" data-testid="text-performance">
                  Infinite Rankers LLC has maintained an optimization score of at least 70%, indicating that they've set up their clients' accounts to perform well.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-[#202124] mb-2 sm:mb-3" data-testid="heading-spend">Spend</h3>
                <p className="text-[#5F6368] text-xs sm:text-sm leading-relaxed" data-testid="text-spend">
                  Infinite Rankers LLC has managed at least $10,000 USD in ad spend in the past 90 days, which shows its ability to help clients consistently identify new growth opportunities and sustain their success on an ongoing basis.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-[#202124] mb-2 sm:mb-3" data-testid="heading-certifications">Certifications</h3>
              <p className="text-[#5F6368] text-xs sm:text-sm leading-relaxed" data-testid="text-certifications">
                Infinite Rankers LLC has specified that they have at least 1 account strategist(s), and at least 50% of them have demonstrated proficiency in Google Ads by earning Google Ads certifications.
              </p>
            </div>

            <p className="text-[#9aa0a6] text-[11px] sm:text-xs" data-testid="text-disclaimer">
              Some aspects of this company may be self-reported, including name and number of account strategists.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
