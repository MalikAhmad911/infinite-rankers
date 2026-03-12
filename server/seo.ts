const BASE = "https://infiniterankers.io";
const BRAND = "Infinite Rankers";

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SERVICES = [
  { slug: "ai-calling-agent", title: "AI Calling Agent", desc: "AI calling agent qualifies leads and books appointments 24/7 — no manual dialing. Most clients 3x booked meetings in 60 days. Free trial available.", faqs: [{ q: "Does the AI calling agent sound robotic?", a: "No. Our AI uses advanced natural language processing to deliver human-like conversations with natural pauses, tone variation, and contextual responses." }, { q: "How many calls can the AI agent handle simultaneously?", a: "There is no practical limit. The AI agent can handle hundreds of concurrent calls, ensuring you never miss an opportunity." }, { q: "Does it integrate with my existing phone system?", a: "Yes. We integrate with all major VoIP providers, phone systems, and can provision dedicated numbers." }] },
  { slug: "ai-receptionist", title: "AI Receptionist", desc: "Never miss a call again. AI answers every call 24/7, qualifies leads & routes to your team instantly. Stop losing business to voicemail. Free setup.", faqs: [{ q: "Can the AI receptionist handle after-hours calls?", a: "Yes. It operates 24/7, ensuring every call is answered professionally regardless of time." }, { q: "How does it route calls to the right department?", a: "It uses intelligent routing logic based on caller intent, keywords, and your custom rules." }, { q: "Can it schedule appointments directly?", a: "Yes. It integrates with your calendar system to book appointments in real-time." }] },
  { slug: "ai-lead-qualification", title: "AI Lead Qualification Bot", desc: "Stop wasting time on bad leads. Our AI scores and qualifies every prospect so your sales team only talks to ready buyers. Clients close 2x more deals.", faqs: [{ q: "How does the AI qualify leads?", a: "It asks pre-configured qualifying questions, scores responses, and only passes leads that meet your criteria." }, { q: "Can I customize the qualification criteria?", a: "Yes. You define the exact criteria, questions, and scoring thresholds for your business." }, { q: "Does it integrate with my CRM?", a: "Yes. Qualified leads are automatically pushed to your CRM with full qualification data." }] },
  { slug: "ai-appointment-booking", title: "AI Appointment Booking System", desc: "Let AI fill your calendar with qualified appointments automatically. Integrates with Google Calendar, Outlook & more. Reduce no-shows by 40%+. Free demo.", faqs: [{ q: "Does it sync with my existing calendar?", a: "Yes. It syncs with Google Calendar, Outlook, Calendly, and all major scheduling platforms." }, { q: "Can it handle rescheduling and cancellations?", a: "Yes. The AI manages the full booking lifecycle including confirmations, reminders, and rescheduling." }, { q: "Does it send appointment reminders?", a: "Yes. Automated reminders via SMS, email, and voice to minimize no-shows." }] },
  { slug: "ai-follow-up", title: "AI Follow-Up Automation", desc: "79% of leads never convert because of slow follow-up. Our AI responds within seconds and nurtures every prospect across email, SMS & calls automatically.", faqs: [{ q: "How quickly does the AI follow up with leads?", a: "Instantly. Leads receive their first follow-up within seconds of inquiry." }, { q: "What channels does it use for follow-up?", a: "Email, SMS, voice calls, and messaging apps — all coordinated in intelligent sequences." }, { q: "Can I customize the follow-up sequences?", a: "Yes. You control the messaging, timing, and escalation rules." }] },
  { slug: "ai-sales-assistant", title: "AI Sales Assistant", desc: "Give your sales team an AI assistant that handles research, proposals & follow-ups. Teams using it close 40% more deals without adding headcount. Free trial.", faqs: [{ q: "Does the AI replace my sales team?", a: "No. It augments your team by handling research, follow-ups, and data entry so they focus on closing." }, { q: "Can it generate proposals and quotes?", a: "Yes. It can draft proposals, quotes, and follow-up emails based on conversation context." }, { q: "How does it learn my sales process?", a: "We train it on your sales playbook, objection handling, and winning patterns." }] },
  { slug: "ai-chatbot", title: "AI Chatbot", desc: "AI chatbot for website, WhatsApp & Messenger that captures leads 24/7. Clients convert 78% more visitors into leads. Live in 5-7 days. Free demo.", faqs: [{ q: "Which platforms does the chatbot support?", a: "Website, WhatsApp, Facebook Messenger, Instagram DMs, and SMS." }, { q: "Can the chatbot handle complex conversations?", a: "Yes. It uses advanced NLP to understand context and handle multi-turn conversations." }, { q: "How long does setup take?", a: "Most chatbots are live within 5-7 business days including training and testing." }] },
  { slug: "ai-email-automation", title: "AI Email Automation", desc: "AI email sequences that adapt to each prospect's behavior and maximize replies. Clients see 3-5x higher response rates vs manual campaigns. Free audit.", faqs: [{ q: "How does AI improve email campaigns?", a: "AI optimizes subject lines, send times, content, and follow-up triggers based on recipient behavior." }, { q: "Can it personalize emails at scale?", a: "Yes. Each email is dynamically personalized using prospect data and behavioral signals." }, { q: "What email platforms do you integrate with?", a: "We integrate with all major ESPs including Mailchimp, ActiveCampaign, HubSpot, and more." }] },
  { slug: "ai-sms-automation", title: "AI SMS Automation", desc: "High-response SMS campaigns powered by AI for instant engagement.", faqs: [{ q: "Is SMS marketing still effective?", a: "Yes. SMS has 98% open rates and 45% response rates — far higher than email." }, { q: "Is it compliant with regulations?", a: "Yes. We ensure full TCPA compliance with opt-in/opt-out management." }, { q: "Can it handle two-way conversations?", a: "Yes. The AI manages intelligent two-way SMS conversations." }] },
  { slug: "crm-automation", title: "CRM Automation", desc: "Automate your entire CRM workflow from lead entry to deal closure.", faqs: [{ q: "Which CRMs do you support?", a: "We work with Salesforce, HubSpot, Zoho, Pipedrive, GoHighLevel, and most major CRMs." }, { q: "Will automation break my existing workflows?", a: "No. We build around your existing processes and enhance them without disruption." }, { q: "How much time does CRM automation save?", a: "Most teams save 15-20 hours per week on manual data entry and follow-up tasks." }] },
  { slug: "workflow-automation", title: "Workflow Automation", desc: "Connect and automate every tool in your sales and marketing stack.", faqs: [{ q: "How many tools can you connect?", a: "We integrate with 5,000+ apps through native integrations and automation platforms." }, { q: "Do I need technical knowledge?", a: "No. We handle all the technical setup, testing, and maintenance." }, { q: "What ROI can I expect?", a: "Most clients see 3-5x ROI within the first 90 days through time savings and increased efficiency." }] },
  { slug: "google-ads", title: "Google Ads Revenue Engine", desc: "AI-optimized Google Ads delivering 4-6x ROAS for our clients. We handle strategy, copy, bids & conversion tracking. Get a free Google Ads audit today.", faqs: [{ q: "What ROAS can I expect from Google Ads?", a: "Our clients typically achieve 4-6x ROAS within the first 90 days of optimization." }, { q: "How much should I budget for Google Ads?", a: "We recommend a minimum of $2,000/month in ad spend for meaningful results." }, { q: "How quickly will I see results?", a: "Most campaigns show significant improvement within 30-60 days." }] },
  { slug: "meta-ads", title: "Meta Ads Growth Engine", desc: "Facebook & Instagram ads that generate qualified leads at scale. Avg 3.2x ROAS in 60 days. Creative + copy + targeting all handled for you. Free audit.", faqs: [{ q: "Are Facebook ads still effective?", a: "Yes. Meta platforms have 3.7 billion users and remain the most cost-effective lead generation channels." }, { q: "What types of businesses benefit most?", a: "Local services, e-commerce, SaaS, healthcare, real estate, and B2C businesses see the best results." }, { q: "Do you handle creative and copy?", a: "Yes. We create all ad creatives, copy, and landing pages as part of our service." }] },
  { slug: "seo-authority", title: "SEO Authority Growth System", desc: "Rank #1 on Google and build organic traffic that converts. 90%+ of clients hit page-1 for target keywords within 6 months. Free SEO audit available.", faqs: [{ q: "How long does SEO take to show results?", a: "Most clients see meaningful ranking improvements within 3-6 months." }, { q: "Do you guarantee first-page rankings?", a: "We don't guarantee specific positions, but our track record shows 90%+ of clients achieve page-one rankings for target keywords." }, { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content strategy, link building, and monthly reporting." }] },
  { slug: "local-seo", title: "Local SEO & Google Business", desc: "Dominate local search and Google Maps. We optimize your Google Business Profile and build local citations that drive foot traffic and calls. Free audit.", faqs: [{ q: "How important is Google Business Profile?", a: "Critical. 46% of all Google searches are looking for local information, and GBP is the primary driver." }, { q: "Can you help with review management?", a: "Yes. We implement review generation systems and manage your online reputation." }, { q: "Do you optimize for map pack results?", a: "Yes. Map pack optimization is a core part of our local SEO strategy." }] },
  { slug: "conversion-funnels", title: "Conversion Funnel Building", desc: "Multi-step funnels designed to turn cold traffic into paying customers.", faqs: [{ q: "What conversion rates can I expect?", a: "Our funnels typically achieve 15-35% opt-in rates and 3-8% purchase conversion rates." }, { q: "How many funnel stages do you build?", a: "We build complete funnels from awareness to purchase, typically 4-7 stages." }, { q: "Do you A/B test the funnels?", a: "Yes. Continuous testing and optimization is built into every funnel." }] },
  { slug: "landing-page-optimization", title: "Landing Page Optimization", desc: "High-converting landing pages that turn visitors into leads and revenue.", faqs: [{ q: "What makes a high-converting landing page?", a: "Clear value proposition, strong CTA, social proof, fast load times, and mobile optimization." }, { q: "How much can conversion rates improve?", a: "We typically achieve 50-200% improvement in conversion rates through optimization." }, { q: "Do you provide ongoing optimization?", a: "Yes. We continuously test and improve landing pages based on data." }] },
  { slug: "conversion-rate-optimization", title: "Conversion Rate Optimization", desc: "Data-backed testing and optimization to maximize every visitor's value.", faqs: [{ q: "How do you test changes?", a: "We use A/B testing, multivariate testing, and user behavior analysis to validate improvements." }, { q: "What tools do you use for CRO?", a: "Google Optimize, Hotjar, Crazy Egg, and proprietary AI analysis tools." }, { q: "How long does a CRO program take?", a: "CRO is ongoing, but most clients see significant improvements within 60-90 days." }] },
  { slug: "social-media-marketing", title: "Social Media Marketing", desc: "Strategic social presence across platforms to build brand authority.", faqs: [{ q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and YouTube." }, { q: "How often do you post?", a: "We typically create 12-20 posts per month across platforms, customized to your strategy." }, { q: "Do you handle community management?", a: "Yes. We manage comments, DMs, and community engagement as part of our service." }] },
  { slug: "instagram-growth", title: "Instagram Growth & Posting", desc: "Consistent, engaging Instagram content that grows your audience organically.", faqs: [{ q: "How fast can I grow my Instagram?", a: "Most clients see 500-2,000 new targeted followers per month through organic strategies." }, { q: "Do you create all the content?", a: "Yes. We handle content creation, scheduling, hashtag strategy, and engagement." }, { q: "Do you use bots or fake followers?", a: "Never. We only use organic growth strategies that build real, engaged audiences." }] },
  { slug: "facebook-growth", title: "Facebook Growth & Posting", desc: "Facebook content strategy that builds community and drives leads.", faqs: [{ q: "Is Facebook still relevant for business?", a: "Yes. Facebook has 3 billion users and remains the largest social platform for business." }, { q: "Do you manage Facebook Groups?", a: "Yes. We can create and manage branded Facebook Groups to build community." }, { q: "How do you measure Facebook ROI?", a: "We track engagement, reach, lead generation, and revenue attribution from Facebook." }] },
  { slug: "content-writing", title: "Content Writing & Strategy", desc: "Authority-building content that positions you as the industry leader.", faqs: [{ q: "What types of content do you create?", a: "Blog posts, articles, whitepapers, case studies, email copy, and social media content." }, { q: "How do you ensure content quality?", a: "Every piece goes through research, writing, editing, and SEO optimization before publishing." }, { q: "Can you write for technical industries?", a: "Yes. Our writers specialize in various industries including tech, healthcare, legal, and finance." }] },
  { slug: "branding-design", title: "Branding & Creative Design", desc: "Premium brand identity that commands trust and recognition.", faqs: [{ q: "What's included in a branding package?", a: "Logo design, color palette, typography, brand guidelines, and collateral templates." }, { q: "How long does a branding project take?", a: "Typically 2-4 weeks from discovery to final deliverables." }, { q: "Can you rebrand an existing business?", a: "Yes. We handle both new brand creation and strategic rebranding." }] },
  { slug: "video-marketing", title: "Short Form Video Marketing", desc: "Scroll-stopping video content optimized for engagement and reach.", faqs: [{ q: "What platforms do you create videos for?", a: "TikTok, Instagram Reels, YouTube Shorts, and Facebook Stories." }, { q: "How many videos do you produce monthly?", a: "Typically 8-20 short-form videos per month depending on your plan." }, { q: "Do you handle filming and editing?", a: "Yes. We manage the complete production process from concept to final edit." }] },
  { slug: "website-development", title: "Website Development", desc: "High-performance websites designed for conversion and growth.", faqs: [{ q: "What platforms do you build on?", a: "We build custom solutions using React, Next.js, WordPress, and Shopify depending on your needs." }, { q: "How long does a website take to build?", a: "Typically 4-8 weeks from design approval to launch." }, { q: "Do you provide hosting and maintenance?", a: "Yes. We offer managed hosting, security updates, and ongoing maintenance." }] },
  { slug: "landing-page-development", title: "Landing Page Development", desc: "Fast, responsive landing pages built to convert traffic into leads.", faqs: [{ q: "How fast can you build a landing page?", a: "We can deliver high-converting landing pages in 3-5 business days." }, { q: "Are landing pages mobile-optimized?", a: "Yes. Every landing page is fully responsive and optimized for mobile devices." }, { q: "Do you include A/B testing?", a: "Yes. We set up A/B testing to continuously optimize conversion rates." }] },
  { slug: "crm-setup", title: "CRM Setup & Integration", desc: "Professional CRM implementation customized for your sales process.", faqs: [{ q: "Which CRM is best for my business?", a: "We evaluate your needs and recommend the best CRM — whether HubSpot, Salesforce, GoHighLevel, or others." }, { q: "Can you migrate data from my current system?", a: "Yes. We handle complete data migration with zero data loss." }, { q: "Do you provide CRM training?", a: "Yes. We provide comprehensive training for your team on the new system." }] },
  { slug: "saas-integrations", title: "SaaS Integrations", desc: "Seamless integration between your tools for unified data flow.", faqs: [{ q: "How many tools can you integrate?", a: "We connect 5,000+ apps including payment systems, CRMs, email platforms, and more." }, { q: "Will integrations slow down my systems?", a: "No. We build efficient integrations that actually speed up your workflows." }, { q: "Do you provide ongoing support?", a: "Yes. We monitor integrations and provide ongoing maintenance and support." }] },
  { slug: "marketing-automation-setup", title: "Marketing Automation Setup", desc: "End-to-end marketing automation configured for maximum impact.", faqs: [{ q: "What does marketing automation include?", a: "Email sequences, lead scoring, segmentation, triggered campaigns, and reporting." }, { q: "How long does setup take?", a: "Typically 2-4 weeks for complete marketing automation implementation." }, { q: "Can I manage it myself after setup?", a: "Yes. We train your team and provide documentation for self-management." }] },
  { slug: "analytics-dashboard", title: "Dashboard & Analytics Setup", desc: "Real-time dashboards and analytics to track every metric that matters.", faqs: [{ q: "What metrics do you track?", a: "Revenue, leads, conversion rates, ad spend, ROI, traffic, and custom KPIs specific to your business." }, { q: "Which analytics tools do you use?", a: "Google Analytics, Looker Studio, custom dashboards, and your existing tools." }, { q: "Can I access dashboards on mobile?", a: "Yes. All dashboards are fully responsive and accessible from any device." }] },
];

const BLOG_POSTS = [
  { slug: "ai-automation-revenue-growth-2025", title: "How AI Automation Is Driving 10x Revenue Growth in 2025", desc: "Discover how forward-thinking businesses are leveraging AI automation systems to generate customers and revenue on autopilot." },
  { slug: "google-ads-roi-local-business", title: "Google Ads for Local Businesses: A Data-Driven ROI Framework", desc: "Learn the exact framework we use to generate 4-6x ROAS for local businesses using AI-optimized Google Ads campaigns." },
  { slug: "ai-chatbot-lead-conversion", title: "AI Chatbots: Converting 78% More Website Visitors Into Leads", desc: "How intelligent chatbots are revolutionizing lead capture and qualification for businesses across every industry." },
  { slug: "crm-automation-sales-pipeline", title: "The Ultimate CRM Automation Playbook for Sales Teams", desc: "Stop losing deals to manual processes. Here is how to automate your entire sales pipeline from lead to close." },
  { slug: "seo-vs-paid-ads-strategy", title: "SEO vs Paid Ads: Building a Unified Revenue Strategy", desc: "Why the best growth strategies combine organic search dominance with paid advertising for maximum market capture." },
  { slug: "ai-follow-up-sequences", title: "AI Follow-Up Sequences That Close 3x More Deals", desc: "The science behind AI-powered follow-up automation and how it is helping sales teams dramatically increase close rates." },
  { slug: "social-media-marketing-strategy-2025", title: "Social Media Marketing Strategy: The 2025 Playbook for Business Growth", desc: "Build a social media strategy that actually drives revenue. Platform-specific tactics for Instagram, Facebook, LinkedIn, and TikTok." },
  { slug: "local-business-digital-marketing", title: "Digital Marketing for Local Businesses: The Complete 2025 Guide", desc: "Everything a local business needs to dominate their market online — from Google Business Profile to local SEO to targeted advertising." },
  { slug: "lead-generation-strategies-2025", title: "15 Lead Generation Strategies That Actually Work in 2025", desc: "Proven lead generation tactics backed by data from campaigns generating thousands of leads for businesses across the USA." },
  { slug: "website-conversion-optimization", title: "Website Conversion Optimization: Turn More Visitors Into Paying Customers", desc: "Data-backed strategies to increase your website conversion rate by 200% or more without increasing traffic." },
  { slug: "content-marketing-seo-guide", title: "Content Marketing for SEO: How to Create Content That Ranks and Converts", desc: "The complete guide to creating SEO-optimized content that ranks on Google page one and turns organic traffic into revenue." },
  { slug: "ecommerce-growth-strategies", title: "E-Commerce Growth: 10 AI-Powered Strategies to Scale Your Online Store", desc: "How AI and automation are helping e-commerce brands achieve 80-180% growth through personalization and intelligent marketing." },
  { slug: "brand-identity-business-growth", title: "How Strong Brand Identity Drives Revenue Growth: A Strategic Guide", desc: "Why branding is not just about logos — how strategic brand identity directly impacts customer acquisition, retention, and revenue." },
  { slug: "healthcare-marketing-patient-acquisition", title: "Healthcare Marketing: How to Acquire More Patients with AI and Digital Strategy", desc: "HIPAA-compliant digital marketing strategies that help medical practices attract and retain patients." },
  { slug: "real-estate-lead-generation-ai", title: "Real Estate Lead Generation: How AI Is Transforming Agent Success", desc: "AI-powered strategies that help real estate agents and brokerages generate, qualify, and convert more leads." },
];

const CASE_STUDIES: Record<string, { title: string; desc: string }> = {
  "1": { title: "Local Dental Practice Revenue Transformation", desc: "How Premier Dental Care achieved 148% increase in new patients using AI Calling Agent and Google Ads." },
  "2": { title: "E-Commerce Brand Scaling System", desc: "How LuxeHome Essentials achieved 62% cart recovery rate and 3.2x ROAS with AI Email Automation." },
  "3": { title: "Real Estate Lead Machine", desc: "How Metro Realty Group generated 45+ qualified buyer leads per month with AI Lead Qualification." },
  "4": { title: "B2B SaaS Growth Engine", desc: "How CloudFlow Solutions achieved 145% increase in qualified demos with AI Sales Assistant." },
  "5": { title: "Restaurant Chain Digital Transformation", desc: "How Sakura Dining Group boosted online orders by 165% with integrated AI marketing systems." },
  "6": { title: "Healthcare Practice Scaling", desc: "How Advanced Wellness Centers grew patient acquisition by 125% with HIPAA-compliant AI automation." },
  "7": { title: "Law Firm Client Acquisition System", desc: "How Sterling Legal Partners increased qualified consultations by 175% with AI intake automation." },
  "8": { title: "Insurance Agency Growth System", desc: "How SecureLife Insurance grew policy sales by 135% with AI-powered lead nurturing and follow-up." },
  "9": { title: "Home Services Lead Generation", desc: "How ProElite Contractors achieved 145% increase in booked estimates with AI scheduling and follow-up." },
  "10": { title: "Financial Advisory Client Acquisition", desc: "How Pinnacle Financial Advisors generated 28 qualified high-net-worth leads monthly with AI systems." },
  "11": { title: "Fitness Studio Membership Growth", desc: "How Elite Performance Studios increased membership signups by 142% with AI lead capture and nurturing." },
  "12": { title: "Auto Dealership Lead System", desc: "How Premier Auto Group boosted qualified test drive appointments by 118% with AI calling and SMS." },
  "13": { title: "Property Management Growth Engine", desc: "How Urban Living Properties increased tenant applications by 155% with automated marketing systems." },
  "14": { title: "Veterinary Practice Patient Acquisition", desc: "How PawCare Veterinary grew new patient appointments by 148% with AI receptionist and follow-up." },
  "15": { title: "Accounting Firm Client Growth", desc: "How Summit Accounting Partners increased qualified consultations by 195% with AI intake systems." },
  "16": { title: "Spa & Wellness Booking System", desc: "How Serenity Wellness Spa boosted appointment bookings by 152% with AI chatbot and SMS automation." },
  "17": { title: "Education Center Enrollment Growth", desc: "How BrightMinds Learning increased student enrollments by 128% with AI-powered parent engagement." },
  "18": { title: "Roofing Company Lead Engine", desc: "How StormShield Roofing generated 42 qualified estimates monthly with AI calling and Google Ads." },
  "19": { title: "Wedding Venue Booking System", desc: "How GrandView Estates increased venue tour bookings by 138% with AI follow-up and social media." },
  "20": { title: "Pest Control Service Growth", desc: "How SafeGuard Pest Control grew service appointments by 142% with AI scheduling and local SEO." },
  "21": { title: "Mortgage Broker Lead System", desc: "How Premier Mortgage Solutions increased qualified applications by 125% with AI pre-qualification." },
};

const LANDING_PAGES: Record<string, { title: string; desc: string; faqs?: { q: string; a: string }[] }> = {
  "ai-automation-new-york": { title: "#1 AI Automation Agency in New York | Free Demo | Infinite Rankers", desc: "New York businesses: automate lead generation, appointment booking & follow-up with AI. 45+ NYC clients. Avg 3x revenue in 90 days. Get a free demo." },
  "ai-automation-los-angeles": { title: "#1 AI Automation Agency in Los Angeles | Free Demo | Infinite Rankers", desc: "Los Angeles businesses: AI automation that generates leads and books appointments 24/7. 35+ LA clients. 3-5x ROI in 90 days. Book your free strategy demo." },
  "ai-automation-chicago": { title: "#1 AI Automation Agency in Chicago | Free Demo | Infinite Rankers", desc: "Chicago businesses: AI systems for lead generation, follow-up & booking automation. 30+ Chicagoland clients. Free AI strategy consultation available today." },
  "ai-revenue-growth-real-estate": { title: "AI Revenue Growth for Real Estate | 45+ Qualified Leads/Month | Infinite Rankers", desc: "Real estate agents: AI-powered lead generation averages 45+ buyer leads/month. Automate qualification, follow-up & booking. Free real estate AI audit." },
  "ai-revenue-growth-healthcare": { title: "AI Revenue Growth for Healthcare | HIPAA-Compliant | Infinite Rankers", desc: "HIPAA-compliant AI for medical practices: automate patient intake, appointment booking & follow-up. Clients grow new patients 125%+. Free healthcare AI demo." },
  "ai-revenue-growth-law-firms": { title: "AI Revenue Growth for Law Firms | 175% More Consultations | Infinite Rankers", desc: "Law firms: AI intake automation increases qualified consultations by 175%. Automate lead qualification, follow-up & case intake. Free law firm AI demo." },
  "ai-revenue-growth-ecommerce": { title: "AI Revenue Growth for E-Commerce | 62% Cart Recovery | Infinite Rankers", desc: "E-commerce brands: AI automation for 62% cart recovery, personalized retention & 3.2x ROAS. Scale revenue without adding headcount. Free ecom AI audit." },
  "ai-revenue-growth-restaurants": { title: "AI Revenue Growth for Restaurants | 165% More Orders | Infinite Rankers", desc: "Restaurants: AI marketing automation increases online orders by 165% and builds loyal repeat customers. Free restaurant growth strategy demo available." },
  "ai-lead-generation-usa": { title: "AI Lead Generation for Small Business USA | 50-200 Leads/Month | Infinite Rankers", desc: "Small businesses across the USA generate 50-200 qualified leads/month with AI automation. 24/7 capture, qualify & convert. Free lead generation audit." },
  "ai-marketing-automation-usa": { title: "AI Marketing Automation USA | Save 20hrs/Week | Infinite Rankers", desc: "Complete AI marketing automation for US businesses: email, social, ads & customer journeys on autopilot. Save 20+ hours/week. Free automation strategy call." },
  "seo-agency": { title: "Top SEO Agency | 158% Avg Traffic Growth | Infinite Rankers", desc: "AI-powered SEO agency delivering 158% average traffic growth in 6 months. 70+ businesses. Transparent reporting, no long-term contracts. Free SEO audit.", faqs: [{ q: "What does an SEO agency do?", a: "An SEO agency optimizes your website to rank higher on Google through technical improvements, content strategy, link building, and ongoing performance tracking." }, { q: "How long does it take to see SEO results?", a: "Most businesses see meaningful ranking improvements within 3-6 months, with compounding traffic growth continuing over 12-18 months." }, { q: "How much does SEO cost?", a: "Our SEO services start at $1,599/month and scale based on competition, industry, and the scope of optimization required." }] },
  "seo-consultant": { title: "Expert SEO Consultant | Free Audit | Infinite Rankers", desc: "Expert SEO consulting delivering custom audits, keyword strategy & actionable growth roadmaps. 65+ businesses ranking on page 1. Free SEO consultation.", faqs: [{ q: "What does an SEO consultant do?", a: "An SEO consultant analyzes your website, identifies ranking opportunities, builds a keyword strategy, and provides a roadmap to improve your organic search visibility." }, { q: "Do I need an SEO consultant or an SEO agency?", a: "If you need strategy and guidance, a consultant is ideal. If you need full execution — content, links, and technical fixes — an agency delivers end-to-end results." }, { q: "How do you measure SEO consulting success?", a: "We track keyword rankings, organic traffic growth, lead volume from search, and revenue attributed to organic channels." }] },
  "ppc-agency": { title: "PPC Agency | 4-6x ROAS Guaranteed Results | Infinite Rankers", desc: "High-performance PPC agency managing Google Ads & Meta Ads. Clients average 4-6x ROAS in 90 days. No wasted ad spend. Get a free PPC audit today.", faqs: [{ q: "What is a PPC agency?", a: "A PPC agency manages pay-per-click advertising campaigns on platforms like Google Ads and Meta Ads, optimizing bids, targeting, and creatives to maximize return on ad spend." }, { q: "What ROAS can I expect from PPC?", a: "Our clients typically achieve 4-6x ROAS within 90 days through AI-optimized bidding, audience targeting, and continuous creative testing." }, { q: "How much should I spend on PPC?", a: "We recommend a minimum monthly ad spend of $2,000 for Google Ads and $1,500 for Meta Ads to generate statistically significant data and meaningful results." }] },
  "digital-marketing-agency": { title: "Full-Service Digital Marketing Agency | Free Strategy Call | Infinite Rankers", desc: "AI-powered digital marketing agency combining SEO, PPC, social media & automation for 3-5x ROI. 70+ clients. No contracts. Free strategy call today.", faqs: [{ q: "What services does a digital marketing agency provide?", a: "We provide SEO, paid advertising, social media marketing, content creation, email automation, CRM setup, conversion optimization, and AI-powered lead generation." }, { q: "How is Infinite Rankers different from other agencies?", a: "We integrate AI automation into every marketing channel — from AI calling agents to smart email sequences — delivering higher efficiency and ROI than traditional agencies." }, { q: "Do you work with small businesses?", a: "Yes. We serve businesses of all sizes with scalable plans starting at $1,599/month, designed to deliver measurable growth regardless of company size." }] },
  "social-media-marketing-agency": { title: "Social Media Marketing Agency | Grow & Convert | Infinite Rankers", desc: "Strategic social media agency managing Instagram, Facebook, LinkedIn & TikTok. Organic growth + paid campaigns + AI DM automation. Free social media audit.", faqs: [{ q: "Which social media platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and YouTube — creating platform-specific content strategies for each." }, { q: "How many posts do you create per month?", a: "Depending on your plan, we create 12-20 posts per month across platforms, including graphics, short-form video, and copywriting." }, { q: "Can social media marketing generate leads?", a: "Absolutely. We combine organic content with paid social campaigns and AI-powered DM automation to turn followers into qualified leads." }] },
  "content-marketing-services": { title: "Content Marketing Services | Rank & Convert | Infinite Rankers", desc: "SEO-driven content that ranks on Google and converts visitors into leads. Blog posts, guides & authority content that builds your brand. Free content audit.", faqs: [{ q: "What is content marketing?", a: "Content marketing is the creation and distribution of valuable, relevant content — blog posts, guides, videos, and more — designed to attract and convert your target audience." }, { q: "How does content marketing improve SEO?", a: "High-quality content targets search keywords, earns backlinks, and builds topical authority — all signals Google uses to rank your site higher." }, { q: "How often should I publish new content?", a: "We recommend 4-8 optimized pieces per month for most businesses, with frequency adjusted based on your industry competition and growth goals." }] },
  "email-marketing-services": { title: "Email Marketing Services | $36 ROI Per $1 | Infinite Rankers", desc: "Email marketing that delivers $36 ROI for every $1 spent. AI-powered sequences, automation & list management. Free email strategy audit today.", faqs: [{ q: "Is email marketing still effective?", a: "Yes. Email marketing delivers an average ROI of $36 for every $1 spent, making it one of the highest-returning digital channels available." }, { q: "What email platforms do you work with?", a: "We integrate with Mailchimp, ActiveCampaign, HubSpot, Klaviyo, GoHighLevel, and all major email service providers." }, { q: "How does AI improve email marketing?", a: "AI optimizes send times, personalizes subject lines and content dynamically, segments audiences automatically, and triggers follow-ups based on recipient behavior." }] },
  "branding-agency": { title: "Premium Branding Agency | Logo + Strategy | Infinite Rankers", desc: "Premium branding agency crafting identities that command trust and drive revenue. Logo, strategy, guidelines & full visual systems. Free brand consultation.", faqs: [{ q: "What does a branding agency do?", a: "A branding agency develops your brand identity — logo, color palette, typography, messaging, and brand guidelines — to create a cohesive, memorable market presence." }, { q: "How long does a branding project take?", a: "Typically 2-4 weeks from discovery workshops to final deliverables, including logo design, brand guidelines, and collateral templates." }, { q: "Can you rebrand an existing business?", a: "Yes. We handle strategic rebranding including market research, competitive analysis, new visual identity, and brand rollout planning." }] },
  "b2b-lead-generation": { title: "B2B Lead Generation | 50-200 Qualified Leads/Month | Infinite Rankers", desc: "AI-powered B2B lead generation averaging 50-200 qualified prospects/month. LinkedIn, email, Google Ads & AI calling combined. Free B2B lead gen audit.", faqs: [{ q: "How does AI improve B2B lead generation?", a: "AI automates prospect research, personalizes outreach at scale, scores leads by intent signals, and triggers multi-channel follow-up sequences that convert." }, { q: "What channels do you use for B2B leads?", a: "We combine LinkedIn outreach, email sequences, Google Ads, content marketing, and AI calling agents to build a multi-channel B2B pipeline." }, { q: "How many leads can I expect per month?", a: "Results vary by industry, but most B2B clients generate 50-200 qualified leads per month within the first 90 days of campaign optimization." }] },
  "seo-services": { title: "Professional SEO Services | Free Audit | Infinite Rankers", desc: "Get page-1 Google rankings with AI-powered SEO. 72+ businesses. Avg 158% traffic growth in 6 months. No contracts. Get your free SEO audit today.", faqs: [{ q: "What SEO services do you offer?", a: "We provide technical SEO audits, on-page optimization, keyword research, content strategy, link building, and monthly performance reporting." }, { q: "How soon will I see results from SEO services?", a: "Most clients see measurable ranking improvements within 3-6 months, with organic traffic compounding steadily over 12+ months." }, { q: "How much do your SEO services cost?", a: "Our SEO services start at $1,599/month with plans that scale based on your industry competition and growth objectives." }] },
  "google-seo": { title: "Google SEO Agency | Get to Page 1 in 90 Days | Infinite Rankers", desc: "Dominate Google with AI-enhanced SEO. 90%+ of clients reach page 1 for target keywords. Free Google SEO analysis — see your ranking opportunities.", faqs: [{ q: "How do you improve Google rankings?", a: "We optimize technical site health, build topical authority through content, earn quality backlinks, and align your site with Google's ranking signals." }, { q: "Can you guarantee first-page Google rankings?", a: "No ethical SEO provider can guarantee exact positions, but our data-driven approach achieves page-one rankings for 90%+ of targeted keywords." }, { q: "What is the difference between Google SEO and paid ads?", a: "SEO builds sustainable organic traffic that compounds over time without per-click costs, while paid ads deliver immediate visibility that stops when you stop paying." }] },
  "seo-specialist": { title: "Dedicated SEO Specialist | Custom Strategy | Infinite Rankers", desc: "Work 1-on-1 with a certified SEO specialist who builds a custom ranking strategy for your business. 65+ clients served. Free consultation available.", faqs: [{ q: "What does an SEO specialist do?", a: "An SEO specialist analyzes your website, researches keywords, optimizes content and technical elements, builds links, and tracks performance to grow organic visibility." }, { q: "How is an SEO specialist different from an SEO agency?", a: "A specialist provides focused, hands-on expertise on your account, while an agency offers a full team across strategy, content, and technical execution." }, { q: "How do you track SEO specialist performance?", a: "We provide monthly reports covering keyword rankings, organic traffic, leads generated from search, and revenue attributed to organic channels." }] },
  "best-seo-companies": { title: "Best SEO Company in the USA | Infinite Rankers", desc: "Ranked among the best SEO companies in the USA. AI-powered strategies, transparent reporting & proven results. Get a free SEO audit — no commitment.", faqs: [{ q: "What makes Infinite Rankers one of the best SEO companies?", a: "We combine AI-powered analysis with proven SEO tactics, delivering faster insights, smarter keyword targeting, and measurable revenue growth for every client." }, { q: "How do I choose the best SEO company for my business?", a: "Look for transparent reporting, proven case studies, realistic timelines, and a strategy tailored to your industry rather than one-size-fits-all packages." }, { q: "What results do your SEO clients typically see?", a: "Our clients average 85% increase in organic traffic within 6 months and significant improvement in qualified lead volume from search." }] },
  "search-engine-marketing": { title: "Search Engine Marketing Agency | Free SEM Audit | Infinite Rankers", desc: "Dominate Google with expert SEM — combining SEO and Google Ads. Clients average 3.4x ROI within 90 days. Free search engine marketing audit today.", faqs: [{ q: "What is search engine marketing?", a: "Search engine marketing (SEM) encompasses both SEO for organic rankings and paid search advertising like Google Ads to capture traffic from search engines." }, { q: "Should I invest in SEO or PPC for search engine marketing?", a: "The most effective strategy combines both — SEO builds long-term organic traffic while PPC delivers immediate leads, and together they dominate search results." }, { q: "How do you measure search engine marketing success?", a: "We track keyword rankings, organic and paid traffic, cost per lead, ROAS, and total revenue generated from search channels." }] },
  "website-ranking": { title: "Website Ranking Experts | Page 1 in 90 Days | Infinite Rankers", desc: "Stop losing customers to competitors ranking above you. Our proven website ranking strategies get you to page 1 on Google. Free site audit available.", faqs: [{ q: "How do I improve my website ranking on Google?", a: "Improving website ranking requires technical optimization, quality content targeting relevant keywords, authoritative backlinks, and strong user experience signals." }, { q: "How long does it take to improve website ranking?", a: "Most websites see noticeable ranking improvements within 3-6 months with consistent optimization, though competitive keywords may take longer." }, { q: "What factors affect website ranking the most?", a: "Content relevance, backlink quality, technical site health, page speed, mobile usability, and user engagement signals are the primary ranking factors." }] },
  "seo-agency-near-me": { title: "Top SEO Agency Near Me | Free Audit | Infinite Rankers", desc: "Find a top-rated SEO agency that delivers real results. Serving businesses nationwide with AI-powered SEO that drives traffic & revenue. Free audit.", faqs: [{ q: "Do I need a local SEO agency near me?", a: "Not necessarily. What matters is expertise and results. We serve clients nationwide with the same hands-on attention as a local agency, plus AI-enhanced capabilities." }, { q: "How does your SEO agency help local businesses?", a: "We optimize Google Business Profile, build local citations, target geo-specific keywords, and manage reviews to help you dominate local search results." }, { q: "Can a remote SEO agency deliver the same results as a local one?", a: "Yes. SEO is digital by nature, and our remote team uses the same tools and strategies with full transparency through real-time reporting dashboards." }] },
  "seo-keywords": { title: "SEO Keyword Research Services | Find & Rank | Infinite Rankers", desc: "Identify the exact keywords your customers search for. AI-powered keyword research that uncovers high-intent, low-competition opportunities. Free analysis.", faqs: [{ q: "How do you find the right SEO keywords for my business?", a: "We analyze search volume, competition, user intent, and your business goals to identify keywords that drive qualified traffic and conversions." }, { q: "How many keywords should I target for SEO?", a: "We typically start with 20-50 primary keywords grouped by topic clusters, then expand as your site builds authority and rankings improve." }, { q: "What is the difference between short-tail and long-tail keywords?", a: "Short-tail keywords are broad with high volume but more competition, while long-tail keywords are specific phrases with lower volume but higher conversion intent." }] },
  "digital-marketing-company": { title: "Best Digital Marketing Company | Free Consult | Infinite Rankers", desc: "AI-powered digital marketing that drives real revenue. SEO, PPC, social media & automation combined for maximum growth. Free strategy consultation.", faqs: [{ q: "What services does a digital marketing company provide?", a: "We deliver SEO, paid advertising, social media management, content marketing, email automation, CRM integration, and AI-powered lead generation systems." }, { q: "How do I choose the right digital marketing company?", a: "Evaluate their case studies, transparency in reporting, range of services, industry experience, and whether they offer customized strategies for your goals." }, { q: "What ROI can I expect from a digital marketing company?", a: "Our clients typically see 3-5x return on their marketing investment within the first 6 months through combined organic and paid channel growth." }] },
  "digital-marketing-services": { title: "Top Digital Marketing Services | Results in 30 Days | Infinite Rankers", desc: "Full-service digital marketing: SEO, Google Ads, social media & AI automation. 4,000+ clients worldwide. Get a free strategy session today.", faqs: [{ q: "What digital marketing services do you offer?", a: "We offer SEO, Google Ads, Meta Ads, social media marketing, content creation, email automation, CRM setup, conversion optimization, and AI lead generation." }, { q: "Which digital marketing service is best for my business?", a: "It depends on your goals. We recommend a free strategy call to identify the highest-impact channels for your industry and budget." }, { q: "How quickly do digital marketing services show results?", a: "Paid campaigns can generate leads within days, while SEO and content marketing build momentum over 3-6 months for long-term compounding growth." }] },
  "marketing-agency-near-me": { title: "Top Marketing Agency Near Me | AI-Powered | Infinite Rankers", desc: "Looking for a results-driven marketing agency? We serve businesses nationwide with AI-powered strategies that outperform local agencies. Free call.", faqs: [{ q: "Why choose Infinite Rankers as my marketing agency?", a: "We combine AI automation with proven marketing strategies, delivering higher efficiency and measurable ROI compared to traditional local agencies." }, { q: "Do you serve businesses outside my city?", a: "Yes. We serve clients across the entire USA with dedicated account managers and real-time reporting, regardless of your location." }, { q: "What industries does your marketing agency specialize in?", a: "We work with healthcare, real estate, legal, e-commerce, SaaS, home services, restaurants, and professional services businesses of all sizes." }] },
  "best-digital-marketing-agencies": { title: "Best Digital Marketing Agency in USA | Infinite Rankers", desc: "Ranked among the best digital marketing agencies in the USA. AI-driven SEO, PPC & automation delivering 3-5x ROI for 65+ clients. Free consultation.", faqs: [{ q: "What makes Infinite Rankers one of the best digital marketing agencies?", a: "We integrate AI automation into every channel — from smart ad bidding to AI follow-up sequences — delivering higher efficiency and ROI than traditional agencies." }, { q: "How do the best digital marketing agencies measure success?", a: "Top agencies track revenue impact, not just vanity metrics. We report on leads generated, cost per acquisition, ROAS, and total revenue growth." }, { q: "What should I expect when working with a top digital marketing agency?", a: "Expect a dedicated strategist, transparent reporting, data-driven decisions, regular optimization, and measurable improvements in leads and revenue." }] },
  "paid-media-agency": { title: "Paid Media Agency | 3.8x Avg ROAS | Infinite Rankers", desc: "Expert paid media management for Google Ads & Meta Ads. Clients average 3.8x ROAS in 90 days. No long-term contracts. Get a free paid media audit.", faqs: [{ q: "What does a paid media agency do?", a: "A paid media agency plans, creates, and manages advertising campaigns across platforms like Google, Facebook, Instagram, and LinkedIn to generate leads and sales." }, { q: "How much should I budget for paid media?", a: "We recommend a minimum of $2,000/month in ad spend to generate meaningful data and results, with budgets scaling as ROAS proves out." }, { q: "What ROAS can I expect from paid media?", a: "Our clients typically achieve 3-6x ROAS within 90 days through AI-optimized bidding, audience targeting, and continuous creative testing." }] },
  "ppc-management-services": { title: "PPC Management Services | 4-6x ROAS | Infinite Rankers", desc: "AI-optimized PPC management for Google Ads & Meta Ads. Clients average 4-6x ROAS in 60 days. Reduce cost per lead by 40%+. Free PPC audit today.", faqs: [{ q: "What is included in PPC management services?", a: "Campaign strategy, keyword research, ad creation, bid management, landing page optimization, A/B testing, conversion tracking, and monthly reporting." }, { q: "How do you optimize PPC campaigns?", a: "We use AI-powered bid optimization, negative keyword management, audience refinement, ad copy testing, and landing page improvements to maximize every dollar." }, { q: "How quickly can PPC management generate leads?", a: "Most campaigns start generating qualified leads within the first 1-2 weeks, with optimization improving cost per lead over the first 60-90 days." }] },
  "digital-marketing-seo": { title: "Digital Marketing & SEO Agency | Free Strategy Call | Infinite Rankers", desc: "Combine SEO and digital marketing for 40-60% lower cost per lead. Full-service strategies dominating both organic and paid search. Free strategy call.", faqs: [{ q: "How do digital marketing and SEO work together?", a: "SEO builds sustainable organic traffic while digital marketing channels like PPC and social media amplify reach — together they create a comprehensive growth engine." }, { q: "Should I invest in SEO or other digital marketing first?", a: "We recommend starting both simultaneously. PPC delivers immediate leads while SEO compounds over time, creating a balanced pipeline of short and long-term growth." }, { q: "What results can I expect from combined digital marketing and SEO?", a: "Clients using integrated strategies typically see 40-60% lower overall cost per lead compared to relying on a single channel." }] },
  "online-marketing-company": { title: "Online Marketing Company | Proven Results | Infinite Rankers", desc: "Drive leads and revenue with proven online marketing. SEO, paid ads, social media & AI automation all under one roof. Book a free strategy call today.", faqs: [{ q: "What does an online marketing company do?", a: "An online marketing company manages your digital presence across search engines, social media, email, and paid advertising to generate leads and grow revenue." }, { q: "How is Infinite Rankers different from other online marketing companies?", a: "We integrate AI automation into every marketing channel, delivering smarter targeting, faster follow-up, and higher conversion rates than traditional approaches." }, { q: "How do you measure online marketing success?", a: "We track leads generated, cost per acquisition, conversion rates, ROAS, organic traffic growth, and total revenue attributed to marketing efforts." }] },
  "digital-marketing-firms": { title: "Top Digital Marketing Firms | Infinite Rankers", desc: "Searching for the best digital marketing firm? We combine AI automation with proven marketing strategies for 3-5x ROI. Free strategy consultation.", faqs: [{ q: "What should I look for in a digital marketing firm?", a: "Look for proven case studies, transparent reporting, a data-driven approach, industry experience, and the ability to scale strategies as your business grows." }, { q: "How do digital marketing firms charge for their services?", a: "Most firms offer monthly retainer packages. Our plans start at $1,599/month and scale based on the channels and complexity your business requires." }, { q: "Can a digital marketing firm help a small business?", a: "Absolutely. We design scalable strategies that deliver ROI for businesses of all sizes, starting with the highest-impact channels for your budget." }] },
  "social-media-marketing-agency-near-me": { title: "Social Media Marketing Agency | Real Results | Infinite Rankers", desc: "Find a social media agency that drives real business results. Instagram, Facebook, LinkedIn & TikTok managed for businesses nationwide. Free audit.", faqs: [{ q: "Do I need a local social media marketing agency?", a: "Not necessarily. Social media management is fully digital, and our nationwide team delivers the same quality with real-time collaboration and transparent reporting." }, { q: "Which social media platforms should my business be on?", a: "It depends on your audience. We help you identify the highest-impact platforms and build platform-specific strategies for Instagram, Facebook, LinkedIn, or TikTok." }, { q: "How does social media marketing generate leads?", a: "We combine organic content strategy with paid campaigns and AI-powered DM automation to convert followers and visitors into qualified leads for your business." }] },
  "automation-agency": { title: "AI Automation Agency | Save 20hrs/Week | Infinite Rankers", desc: "Automate lead follow-up, appointment booking & workflows with AI. Clients reduce manual work by 60% and scale revenue without adding headcount. Free demo.", faqs: [{ q: "What does an automation agency do?", a: "An automation agency designs and implements intelligent workflows that automate repetitive tasks like lead follow-up, appointment booking, data entry, and reporting." }, { q: "How can automation help with recruitment?", a: "AI automation streamlines candidate sourcing, application screening, interview scheduling, and follow-up communications — reducing time-to-hire by up to 60%." }, { q: "How quickly can automation systems be implemented?", a: "Most automation workflows are designed, built, and live within 2-4 weeks, with immediate impact on efficiency and lead response times." }] },
};

const PARTNER_PAGES: Record<string, { title: string; desc: string }> = {
  "infinite-rankers-agency": { title: `Full-Service AI Marketing Agency | 4,000+ Clients | ${BRAND}`, desc: "Infinite Rankers is a full-service AI marketing agency providing automation, lead generation, and revenue growth systems for businesses across the USA." },
  "infinite-rankers-seo-services": { title: `SEO Services That Rank — 158% Avg Traffic Growth | ${BRAND}`, desc: "Professional SEO services by Infinite Rankers. We help businesses dominate Google search rankings with data-driven SEO strategies and AI-powered optimization." },
  "infinite-rankers-paid-advertising": { title: `Google & Meta Ads Management | 4-6x ROAS | ${BRAND}`, desc: "Expert paid advertising management by Infinite Rankers. Google Ads, Meta Ads, and multi-channel campaigns that maximize ROI and revenue growth." },
  "infinite-rankers-ai-automation": { title: `AI Business Automation | 30+ Intelligent Systems | ${BRAND}`, desc: "AI automation solutions by Infinite Rankers. Chatbots, calling agents, email automation, CRM systems, and workflow automation that scale your business." },
};

const STATIC_PAGES: Record<string, SEOMeta> = {
  "/": { title: `${BRAND} | #1 AI Revenue Growth Agency — Free Strategy Call`, description: "Join 4,000+ businesses using AI automation to generate leads, book appointments & grow revenue 24/7. Free strategy call — see results in 30 days.", canonical: `${BASE}/` },
  "/about": { title: `About ${BRAND} | AI Revenue Growth Experts Since 2020`, description: "Meet the AI marketing team behind 4,000+ business transformations. We build revenue-generating automation systems so you can focus on what you do best.", canonical: `${BASE}/about` },
  "/services": { title: `30+ AI Marketing & Automation Services | ${BRAND}`, description: "Explore 30+ AI-powered services: Google Ads, SEO, AI lead generation, CRM automation & more. Every service built to drive measurable revenue. Free consult.", canonical: `${BASE}/services` },
  "/portfolio": { title: `21 Client Case Studies — Real Proven Results | ${BRAND}`, description: "Real results from real businesses. 21 case studies showing 100-195% revenue growth across healthcare, real estate, law firms & e-commerce. See proof.", canonical: `${BASE}/portfolio` },
  "/pricing": { title: `Pricing Plans from $1,599/mo | No Hidden Fees | ${BRAND}`, description: "Transparent pricing with no contracts or hidden fees. Growth, Scale & Enterprise plans. Calculate your ROI before you buy. Book a free consultation.", canonical: `${BASE}/pricing` },
  "/contact": { title: `Contact Us — Get a Free Strategy Call | ${BRAND}`, description: "Book a free 30-minute strategy call with our AI marketing experts. No pitch — just a custom growth plan. We respond within 1 business hour.", canonical: `${BASE}/contact` },
  "/blog": { title: `AI Marketing & Automation Blog | ${BRAND}`, description: "Actionable insights on AI automation, SEO, Google Ads, lead generation & digital marketing. Updated weekly with tactics that drive real revenue growth.", canonical: `${BASE}/blog` },
  "/book-demo": { title: `Book Your Free 30-Min Strategy Call | ${BRAND}`, description: "See exactly how AI automation can grow your business. Get a custom growth plan, live demo & ROI projection — completely free. Book your slot today.", canonical: `${BASE}/book-demo` },
  "/sitemap": { title: `Sitemap - ${BRAND}`, description: "Browse all pages on infiniterankers.io — AI marketing services, blog posts, case studies, and landing pages.", canonical: `${BASE}/sitemap` },
  "/terms": { title: `Terms of Service - ${BRAND}`, description: "Terms of Service for Infinite Rankers AI Revenue Growth Agency. Read our terms governing use of infiniterankers.io.", canonical: `${BASE}/terms` },
  "/privacy": { title: `Privacy Policy - ${BRAND}`, description: "Privacy Policy for Infinite Rankers. Learn how we collect, use, and protect your data.", canonical: `${BASE}/privacy` },
  "/google-partner": { title: `Certified Google Partner Agency | ${BRAND}`, description: "Infinite Rankers LLC is a certified Google Partner with verified performance, $10K+ monthly ad spend management, and Google Ads certified strategists.", canonical: `${BASE}/google-partner` },
};

export function getSEOForRoute(url: string): SEOMeta | null {
  const path = url.split("?")[0].split("#")[0];

  if (STATIC_PAGES[path]) {
    return STATIC_PAGES[path];
  }

  const slug = path.replace(/^\//, "");

  const svc = SERVICES.find(s => s.slug === slug);
  if (svc) {
    return {
      title: (svc as any).seoTitle || `${svc.title} | Free Demo — ${BRAND}`,
      description: svc.desc,
      canonical: `${BASE}/${svc.slug}`,
    };
  }

  const post = BLOG_POSTS.find(b => b.slug === slug);
  if (post) {
    return {
      title: `${post.title} | ${BRAND}`,
      description: post.desc,
      canonical: `${BASE}/${post.slug}`,
    };
  }

  const cs = CASE_STUDIES[slug];
  if (cs) {
    return {
      title: `${cs.title} - Case Study | ${BRAND}`,
      description: cs.desc,
      canonical: `${BASE}/${slug}`,
    };
  }

  if (PARTNER_PAGES[slug]) {
    const pp = PARTNER_PAGES[slug];
    return {
      title: pp.title,
      description: pp.desc,
      canonical: `${BASE}/${slug}`,
    };
  }

  if (LANDING_PAGES[slug]) {
    const lp = LANDING_PAGES[slug];
    return {
      title: lp.title,
      description: lp.desc,
      canonical: `${BASE}/${slug}`,
    };
  }

  return null;
}

function getBreadcrumbs(path: string, seo: SEOMeta): object {
  const BASE_URL = "https://infiniterankers.io";
  const items: { name: string; url: string }[] = [{ name: "Home", url: BASE_URL }];

  const slug = path.replace(/^\//, "");
  const isService = SERVICES.some(s => s.slug === slug);
  const isBlog = BLOG_POSTS.some(b => b.slug === slug);
  const isCase = !!CASE_STUDIES[slug];

  if (isService) {
    items.push({ name: "Services", url: `${BASE_URL}/services` });
    items.push({ name: seo.title.replace(" - Infinite Rankers", ""), url: seo.canonical });
  } else if (isBlog) {
    items.push({ name: "Blog", url: `${BASE_URL}/blog` });
    items.push({ name: seo.title.replace(" | Infinite Rankers", ""), url: seo.canonical });
  } else if (isCase) {
    items.push({ name: "Portfolio", url: `${BASE_URL}/portfolio` });
    items.push({ name: seo.title.replace(" - Case Study | Infinite Rankers", ""), url: seo.canonical });
  } else if (path !== "/") {
    const name = seo.title.replace(/ [-|] Infinite Rankers$/, "").replace(/ \| Infinite Rankers$/, "");
    items.push({ name, url: seo.canonical });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => {
      const isLast = i === items.length - 1;
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
      };
      if (!isLast) {
        entry["item"] = item.url;
      }
      return entry;
    }),
  };
}

function getStructuredData(url: string, seo: SEOMeta): string {
  const path = url.split("?")[0].split("#")[0];
  const BASE_URL = "https://infiniterankers.io";
  const ORG_SCHEMA = {
    "@type": "Organization",
    "name": "Infinite Rankers",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "description": "AI Revenue Growth Agency providing 30+ AI-powered marketing and automation services for businesses across the USA and worldwide.",
    "sameAs": ["https://infiniterankers.com", "https://infiniterankers.com/blog", "https://infiniterankers.com/about"],
    "address": { "@type": "PostalAddress", "streetAddress": "203 N Caroline Pl", "addressLocality": "Dover", "addressRegion": "DE", "postalCode": "19904", "addressCountry": "US" },
    "contactPoint": { "@type": "ContactPoint", "telephone": "(703) 415-9373", "contactType": "sales", "email": "contact@infiniterankers.io", "availableLanguage": "English", "areaServed": "US" },
    "knowsAbout": ["AI Automation", "Lead Generation", "Google Ads", "SEO", "CRM Automation", "AI Chatbot", "Digital Marketing", "Social Media Marketing", "Website Development"]
  };

  const breadcrumb = getBreadcrumbs(path, seo);
  let mainSchema: object;

  const SITE_NAV_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "hasPart": [
      { "@type": "WebPage", "name": "Services", "description": "30+ AI-powered marketing and automation services to grow your business revenue.", "url": `${BASE_URL}/services` },
      { "@type": "WebPage", "name": "Portfolio", "description": "Case studies and success stories from businesses we've helped grow with AI automation.", "url": `${BASE_URL}/portfolio` },
      { "@type": "WebPage", "name": "Blog", "description": "Expert insights on AI automation, digital marketing, lead generation, and revenue growth strategies.", "url": `${BASE_URL}/blog` },
      { "@type": "WebPage", "name": "About", "description": "Learn about Infinite Rankers — AI Revenue Growth Agency helping businesses across the USA.", "url": `${BASE_URL}/about` },
      { "@type": "WebPage", "name": "Contact Us", "description": "Get in touch with Infinite Rankers for AI automation and digital marketing solutions.", "url": `${BASE_URL}/contact` },
      { "@type": "WebPage", "name": "Pricing", "description": "Transparent pricing plans for AI automation, marketing, and lead generation services.", "url": `${BASE_URL}/pricing` },
      { "@type": "WebPage", "name": "Book a Demo", "description": "Schedule a free strategy call to see how AI automation can grow your business.", "url": `${BASE_URL}/book-demo` }
    ]
  };

  if (path === "/") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Infinite Rankers",
      "alternateName": "Infinite Rankers AI Agency",
      "url": BASE_URL,
      "description": seo.description,
      "publisher": ORG_SCHEMA,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/services?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };
    const LOCAL_BUSINESS_SCHEMA = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Infinite Rankers",
      "description": "AI Revenue Growth Agency providing AI automation, SEO, Google Ads, lead generation, and full-service digital marketing for businesses across the USA.",
      "url": BASE_URL,
      "logo": `${BASE_URL}/images/logo-full.png`,
      "image": `${BASE_URL}/images/logo-full.png`,
      "telephone": "(703) 415-9373",
      "email": "contact@infiniterankers.io",
      "address": { "@type": "PostalAddress", "streetAddress": "203 N Caroline Pl", "addressLocality": "Dover", "addressRegion": "DE", "postalCode": "19904", "addressCountry": "US" },
      "geo": { "@type": "GeoCoordinates", "latitude": "39.1582", "longitude": "-75.5244" },
      "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
      "priceRange": "$$$",
      "areaServed": { "@type": "Country", "name": "United States" },
      "hasOfferCatalog": { "@type": "OfferCatalog", "name": "AI Marketing & Automation Services", "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Calling Agent" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Authority Growth System" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Revenue Engine" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Lead Qualification" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Automation" } }
      ]},
      "sameAs": ["https://infiniterankers.com", "https://www.linkedin.com/company/infinite-rankers", "https://www.facebook.com/infiniterankers"],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "87", "bestRating": "5" }
    };
    const SPEAKABLE_SCHEMA = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": BASE_URL,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".hero-headline", ".hero-subheadline", ".kpi-stats", ".value-proposition"]
      }
    };
    return `${JSON.stringify(mainSchema)}</script><script type="application/ld+json">${JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script><script type="application/ld+json">${JSON.stringify(SPEAKABLE_SCHEMA)}</script><script type="application/ld+json">${JSON.stringify(SITE_NAV_SCHEMA)}`;
  }

  const ssSlug = path.replace(/^\//, "");
  const isServicePage = SERVICES.some(s => s.slug === ssSlug);
  const isBlogPage = BLOG_POSTS.some(b => b.slug === ssSlug);
  const isCasePage = !!CASE_STUDIES[ssSlug];

  if (isServicePage) {
    const serviceName = seo.title.replace(" - Infinite Rankers", "");
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": seo.description,
      "url": seo.canonical,
      "provider": ORG_SCHEMA,
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": "AI Marketing & Automation",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "USD", "url": `${BASE_URL}/pricing` }
    };
    const svc = SERVICES.find(s => s.slug === ssSlug);
    const faqSchema = svc?.faqs?.length ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": svc.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    } : null;
    const parts = [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)];
    if (faqSchema) parts.push(JSON.stringify(faqSchema));
    return parts.join('</script><script type="application/ld+json">');
  }

  if (isBlogPage) {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seo.title.replace(" | Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "image": `${BASE_URL}/images/logo-full.png`,
      "publisher": { ...ORG_SCHEMA, "@context": undefined },
      "author": { "@type": "Organization", "name": "Infinite Rankers", "url": BASE_URL },
      "datePublished": "2025-01-15",
      "dateModified": new Date().toISOString().split("T")[0],
      "mainEntityOfPage": { "@type": "WebPage", "@id": seo.canonical }
    };
    return [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)].join('</script><script type="application/ld+json">');
  }

  if (isCasePage) {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": seo.title.replace(" - Case Study | Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "author": ORG_SCHEMA
    };
    return [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)].join('</script><script type="application/ld+json">');
  }

  if (path === "/about") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": ORG_SCHEMA
    };
    return [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)].join('</script><script type="application/ld+json">');
  }

  if (path === "/contact") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": ORG_SCHEMA
    };
    return [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)].join('</script><script type="application/ld+json">');
  }

  if (path === "/pricing") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "Offer", "name": "Growth Plan", "price": "1599", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Scale Plan", "price": "2999", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Enterprise Plan", "price": "5999", "priceCurrency": "USD" }
        ]
      }
    };
    return [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)].join('</script><script type="application/ld+json">');
  }

  const lpData = LANDING_PAGES[ssSlug];
  if (lpData) {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "publisher": ORG_SCHEMA
    };
    const parts = [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)];
    if (lpData.faqs?.length) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": lpData.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      };
      parts.push(JSON.stringify(faqSchema));
    }
    return parts.join('</script><script type="application/ld+json">');
  }

  mainSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seo.title,
    "description": seo.description,
    "url": seo.canonical,
    "publisher": ORG_SCHEMA
  };
  return [JSON.stringify(mainSchema), JSON.stringify(breadcrumb), JSON.stringify(SITE_NAV_SCHEMA)].join('</script><script type="application/ld+json">');
}

export function injectSEO(html: string, url: string): string {
  const seo = getSEOForRoute(url);
  if (!seo) return html;

  const headEnd = html.indexOf("</head>");
  if (headEnd === -1) return html;

  let result = html;
  const extraTags: string[] = [];

  const titleTag = `<title>${escapeHtml(seo.title)}</title>`;
  const descTag = `<meta name="description" content="${escapeAttr(seo.description)}" />`;
  const ogTitleTag = `<meta property="og:title" content="${escapeAttr(seo.title)}" />`;
  const ogDescTag = `<meta property="og:description" content="${escapeAttr(seo.description)}" />`;
  const canonicalTag = `<link rel="canonical" href="${escapeAttr(seo.canonical)}" />`;
  const ogUrlTag = `<meta property="og:url" content="${escapeAttr(seo.canonical)}" />`;

  if (/<title>[^<]*<\/title>/.test(result)) {
    result = result.replace(/<title>[^<]*<\/title>/, titleTag);
  } else {
    extraTags.push(titleTag);
  }

  if (/<meta\s+name="description"/.test(result)) {
    result = result.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, descTag);
  } else {
    extraTags.push(descTag);
  }

  if (/property="og:title"/.test(result)) {
    result = result.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, ogTitleTag);
  } else {
    extraTags.push(ogTitleTag);
  }

  if (/property="og:description"/.test(result)) {
    result = result.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, ogDescTag);
  } else {
    extraTags.push(ogDescTag);
  }

  if (/<link\s+rel="canonical"/.test(result)) {
    result = result.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, canonicalTag);
  } else {
    extraTags.push(canonicalTag);
  }

  if (/property="og:url"/.test(result)) {
    result = result.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, ogUrlTag);
  } else {
    extraTags.push(ogUrlTag);
  }

  const noindexPaths = ["/sitemap", "/crawl-hub"];
  const urlPath = url.split("?")[0];
  const isAdminPath = urlPath.startsWith("/admin");
  if (noindexPaths.includes(urlPath) || isAdminPath) {
    extraTags.push(`<meta name="robots" content="noindex, nofollow" />`);
  } else if (!result.includes('name="robots"')) {
    extraTags.push(`<meta name="robots" content="index, follow" />`);
  }
  extraTags.push(`<meta property="og:type" content="website" />`);
  extraTags.push(`<meta property="og:site_name" content="Infinite Rankers" />`);
  extraTags.push(`<meta property="og:image" content="${BASE}/images/logo-full.png" />`);
  extraTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  extraTags.push(`<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`);
  extraTags.push(`<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`);
  extraTags.push(`<link rel="alternate" type="application/rss+xml" title="Infinite Rankers Blog" href="${BASE}/rss.xml" />`);

  const jsonLd = getStructuredData(url, seo);
  extraTags.push(`<script type="application/ld+json">${jsonLd}</script>`);

  if (extraTags.length > 0) {
    const insertion = extraTags.map(t => `    ${t}`).join("\n");
    result = result.replace("</head>", `${insertion}\n  </head>`);
  }

  return result;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
