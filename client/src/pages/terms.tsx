import { motion } from "framer-motion";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import { COMPANY } from "@/lib/constants";

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service | Infinite Rankers"
        description="Terms of Service for Infinite Rankers AI Revenue Growth Agency. Read our terms and conditions for using our services and website."
        canonical="https://infiniterankers.io/terms"
      />

      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3" data-testid="text-terms-title">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: February 14, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-gray max-w-none space-y-8">

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the website at <strong>infiniterankers.io</strong> and our associated platform at{" "}
                <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">infiniterankers.com</a>,
                operated by {COMPANY.name} ("{COMPANY.name}," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY.name} provides AI-powered revenue growth services including but not limited to: AI automation, lead generation, social media marketing, content creation, web development, SEO optimization, paid advertising management, and marketing automation. Our services are delivered through our primary platform at <strong>infiniterankers.io</strong> and our marketing authority hub at{" "}
                <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">infiniterankers.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts & Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you submit a contact form, book a demo, or engage with our services, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Service Agreements & Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                All service engagements are subject to a separate service agreement or statement of work (SOW). Pricing displayed on our website is subject to change and serves as a general guideline. Final pricing will be confirmed in your individual service agreement. Payment terms, refund policies, and cancellation procedures are outlined in your specific service contract.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality on infiniterankers.io and infiniterankers.com — including but not limited to text, graphics, logos, icons, images, software, and the compilation thereof — are the exclusive property of {COMPANY.name} and are protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Client Deliverables</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, clients receive ownership of deliverables as specified in their service agreement. {COMPANY.name} reserves the right to showcase completed work in our portfolio and case studies unless otherwise agreed in writing. Any proprietary AI models, automation workflows, or tools developed by {COMPANY.name} remain our intellectual property.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1.5 text-muted-foreground">
                <li>Use our services for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems, servers, or networks</li>
                <li>Reproduce, duplicate, copy, sell, or exploit any portion of our services without express written permission</li>
                <li>Use our services to distribute spam, malware, or any harmful content</li>
                <li>Interfere with or disrupt the integrity or performance of our platforms</li>
                <li>Misrepresent your identity or affiliation with any person or organization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services may integrate with third-party platforms including but not limited to Google Ads, Meta Ads, CRM systems, and AI platforms. {COMPANY.name} is not responsible for the terms, privacy practices, or content of third-party services. Your use of third-party services is governed by their respective terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Results & Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to deliver measurable results, {COMPANY.name} does not guarantee specific outcomes, revenue increases, or ranking improvements. Results vary based on industry, market conditions, competition, and client cooperation. Case studies and testimonials on our website represent individual client results and are not guarantees of future performance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, {COMPANY.name}, its directors, employees, partners, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our services or websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless {COMPANY.name} and its officers, directors, employees, and agents from any claims, damages, obligations, losses, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Dover, Delaware.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. Material changes will be communicated through our website. Your continued use of our services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
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
                Also see our <Link href="/privacy" className="text-blue-600 hover:underline" data-testid="link-privacy-from-terms">Privacy Policy</Link> for information on how we handle your data.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
