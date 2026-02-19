import { motion } from "framer-motion";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import RelatedLinks from "@/components/related-links";
import { COMPANY } from "@/lib/constants";

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Infinite Rankers"
        description="Privacy Policy for Infinite Rankers AI Revenue Growth Agency. Learn how we collect, use, and protect your personal information."
        canonical="https://infiniterankers.io/privacy"
      />

      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3" data-testid="text-privacy-title">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: February 14, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-gray max-w-none space-y-8">

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.name} ("we," "us," or "our") operates the websites <strong>infiniterankers.io</strong> and{" "}
                <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">infiniterankers.com</a>.
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our websites, use our services, or interact with us. Please read this policy carefully.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of information:</p>
              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
                <li>Name, email address, phone number</li>
                <li>Company name and website URL</li>
                <li>Business revenue and industry information (when voluntarily provided through demo bookings)</li>
                <li>Messages and communications submitted through contact forms</li>
                <li>Service preferences and project requirements</li>
              </ul>
              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
                <li>IP address, browser type, and operating system</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referring website addresses and search terms</li>
                <li>Device identifiers and cookie data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to inquiries, demo requests, and customer service needs</li>
                <li>Send service-related communications and updates</li>
                <li>Personalize your experience and deliver relevant content</li>
                <li>Analyze website usage to improve our platforms and services</li>
                <li>Process transactions and manage client accounts</li>
                <li>Comply with legal obligations and protect against fraud</li>
                <li>Send marketing communications (with your consent, where required)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our websites and delivering services (e.g., hosting providers, email services, analytics tools)</li>
                <li><strong>Business Partners:</strong> With our partner platform at infiniterankers.com for integrated service delivery</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies & Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our websites use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings. Note that disabling cookies may affect certain features of our websites.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our sites</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption, secure servers, and access controls. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security. We encourage you to use strong passwords and protect your account credentials.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Contact form submissions and demo booking data are retained for the duration of our business relationship and for a reasonable period thereafter.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise any of these rights, please contact us at <strong>{COMPANY.email}</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. California Privacy Rights (CCPA)</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are a California resident, you have the right to request disclosure of the categories and specific pieces of personal information we have collected, the categories of sources, the business purpose for collecting your information, and the categories of third parties with whom we share your data. California residents may submit a verifiable consumer request by contacting us at {COMPANY.email}.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our websites may contain links to third-party websites, including our partner platform at{" "}
                <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">infiniterankers.com</a>{" "}
                and other external services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to the United States and other jurisdictions where we operate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">14. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none mt-3 space-y-1.5 text-muted-foreground">
                <li><strong>Email:</strong> {COMPANY.email}</li>
                <li><strong>Phone:</strong> {COMPANY.phone}</li>
                <li><strong>Address:</strong> {COMPANY.address}</li>
                <li><strong>Website:</strong> infiniterankers.io | <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">infiniterankers.com</a></li>
              </ul>
            </div>

            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                Also see our <Link href="/terms" className="text-blue-600 hover:underline" data-testid="link-terms-from-privacy">Terms of Service</Link> for the terms governing your use of our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <RelatedLinks currentPath="/privacy" type="page" />
    </>
  );
}
