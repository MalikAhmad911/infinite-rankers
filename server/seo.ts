const BASE = "https://infiniterankers.io";
const BRAND = "Infinite Rankers";

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SERVICES = [
  { slug: "ai-calling-agent", title: "AI Calling Agent", desc: "AI calling agent handles inbound and outbound calls 24/7 — qualifying leads and booking appointments without manual dialing. Integrates with your CRM and calendar on day one. Most clients 3x booked meetings within 60 days. Free strategy session.", faqs: [{ q: "Does the AI calling agent sound robotic?", a: "No. Our AI uses advanced natural language processing to deliver human-like conversations with natural pauses, tone variation, and contextual responses that callers rarely distinguish from a live rep." }, { q: "How many calls can the AI agent handle simultaneously?", a: "There is no practical limit. The AI handles hundreds of concurrent calls ensuring you never miss an opportunity during peak hours or after hours." }, { q: "What is the typical deployment timeline?", a: "Most clients are live within 5–7 business days including CRM integration, script configuration, and test call approval." }] },
  { slug: "ai-receptionist", title: "AI Receptionist", desc: "AI receptionist answers every inbound call within one ring — 24/7 — qualifying leads, answering FAQs, and routing to the right team member. Healthcare and legal clients eliminate 100% of missed-call revenue loss. Free setup.", faqs: [{ q: "Can the AI receptionist handle after-hours calls?", a: "Yes. It operates 24/7 with zero degradation in call quality, routing after-hours calls or taking detailed messages with priority flagging." }, { q: "How does it route calls to the right department?", a: "It uses intelligent routing logic based on caller intent, keywords, caller history, and configurable rules — including warm transfer with context." }, { q: "Can it schedule appointments directly?", a: "Yes. It integrates with your calendar system to book, reschedule, and confirm appointments in real-time during the call." }] },
  { slug: "ai-lead-qualification", title: "AI Lead Qualification Bot", desc: "AI lead qualification bot scores every prospect in real-time using behavioral, demographic, and intent signals — so your sales team only talks to buyers, not browsers. Sales teams close 2x more deals without adding headcount. Free audit.", faqs: [{ q: "How does the AI qualify leads?", a: "It scores leads across multiple signals simultaneously — form behavior, engagement depth, demographics, and intent — then only passes those meeting your defined threshold to sales." }, { q: "Can I customize the qualification criteria?", a: "Yes. We build scoring models around your specific ICP, product, and pipeline stage requirements. Criteria can be updated anytime." }, { q: "Does it integrate with my CRM?", a: "Yes. Qualified leads are automatically synced to your CRM with full scoring data, segment tags, and priority flags." }] },
  { slug: "ai-appointment-booking", title: "AI Appointment Booking System", desc: "AI appointment booking fills your calendar with qualified meetings via conversational AI across phone, chat, and SMS. Reduces no-shows by 40%+ with automated reminders. Integrates with Google Calendar, Outlook, and Calendly. Free demo.", faqs: [{ q: "Does it sync with my existing calendar?", a: "Yes. It syncs in real-time with Google Calendar, Outlook, Calendly, and all major scheduling platforms across your entire team." }, { q: "Can it handle rescheduling and cancellations?", a: "Yes. The AI manages the full appointment lifecycle — confirmations, reminders (24hr + 2hr), rescheduling, and cancellation with waitlist backfill." }, { q: "How quickly can it be deployed?", a: "Most clients are live within 5 business days including calendar integration, booking flow configuration, and reminder sequence setup." }] },
  { slug: "ai-follow-up", title: "AI Follow-Up Automation", desc: "AI follow-up automation responds to every new lead within seconds and nurtures them across email, SMS, and voice until they book or opt out. Clients convert 3x more leads without additional sales headcount. Free sequence audit.", faqs: [{ q: "How quickly does the AI follow up with leads?", a: "Instantly — within seconds of lead submission. The speed advantage alone recovers deals that would otherwise go to a faster-responding competitor." }, { q: "What channels does it use for follow-up?", a: "Email, SMS, voice calls, and messaging apps — all coordinated in a single intelligent sequence with behavioral branching." }, { q: "Can I customize the follow-up sequences?", a: "Yes. You control message content, channel order, timing intervals, and escalation rules. We build from your existing sales playbook." }] },
  { slug: "ai-sales-assistant", title: "AI Sales Assistant", desc: "Give your sales team an AI assistant that handles research, proposals & follow-ups. Teams using it close 40% more deals without adding headcount. Free trial.", faqs: [{ q: "Does the AI replace my sales team?", a: "No. It augments your team by handling research, follow-ups, and data entry so they focus on closing." }, { q: "Can it generate proposals and quotes?", a: "Yes. It can draft proposals, quotes, and follow-up emails based on conversation context." }, { q: "How does it learn my sales process?", a: "We train it on your sales playbook, objection handling, and winning patterns." }] },
  { slug: "ai-chatbot", title: "AI Chatbot", desc: "AI chatbot trained on your business — deployed on your website, WhatsApp, and Messenger — to capture leads, answer FAQs, and book meetings around the clock. Clients convert 78% more website visitors into leads. Live within 5–7 days. Free demo.", faqs: [{ q: "Which platforms does the AI chatbot support?", a: "We deploy on your website (as a widget), WhatsApp Business, Facebook Messenger, and Instagram DMs. All conversations sync to your CRM for unified tracking." }, { q: "Can the chatbot handle complex or multi-step conversations?", a: "Yes. The chatbot uses advanced NLP to understand context across multi-turn conversations — handling objections, recommending services, and qualifying leads before handing off to your team." }, { q: "How long does setup take?", a: "Most chatbots are live within 5–7 business days including knowledge base training, conversation flow design, platform integration, and test conversation approval." }] },
  { slug: "ai-email-automation", title: "AI Email Automation", desc: "AI email sequences that adapt to each prospect's behavior and maximize replies. Clients see 3-5x higher response rates vs manual campaigns. Free audit.", faqs: [{ q: "How does AI improve email campaigns?", a: "AI optimizes subject lines, send times, content, and follow-up triggers based on recipient behavior." }, { q: "Can it personalize emails at scale?", a: "Yes. Each email is dynamically personalized using prospect data and behavioral signals." }, { q: "What email platforms do you integrate with?", a: "We integrate with all major ESPs including Mailchimp, ActiveCampaign, HubSpot, and more." }] },
  { slug: "ai-sms-automation", title: "AI SMS Automation", desc: "High-response SMS campaigns powered by AI for instant engagement.", faqs: [{ q: "Is SMS marketing still effective?", a: "Yes. SMS has 98% open rates and 45% response rates — far higher than email." }, { q: "Is it compliant with regulations?", a: "Yes. We ensure full TCPA compliance with opt-in/opt-out management." }, { q: "Can it handle two-way conversations?", a: "Yes. The AI manages intelligent two-way SMS conversations." }] },
  { slug: "crm-automation", title: "CRM Automation", desc: "CRM automation eliminates manual data entry and pipeline management — auto-routing leads, triggering follow-ups, and updating deal stages inside HubSpot, Salesforce, GoHighLevel, or Pipedrive. Teams save 15–20 hours/week and double pipeline visibility. Free CRM audit.", faqs: [{ q: "Which CRMs do you support?", a: "We work with Salesforce, HubSpot, Zoho, Pipedrive, GoHighLevel, and most major CRMs — including custom-built solutions via API." }, { q: "Will automation break my existing workflows?", a: "No. We audit your current setup first and build automations that layer onto your existing processes without disrupting active deals or contacts." }, { q: "How much time does CRM automation save?", a: "Most teams save 15-20 hours per week on manual data entry, follow-up tasks, and reporting — time that goes directly back to selling." }] },
  { slug: "workflow-automation", title: "Workflow Automation", desc: "Connect and automate every tool in your sales and marketing stack.", faqs: [{ q: "How many tools can you connect?", a: "We integrate with 5,000+ apps through native integrations and automation platforms." }, { q: "Do I need technical knowledge?", a: "No. We handle all the technical setup, testing, and maintenance." }, { q: "What ROI can I expect?", a: "Most clients see 3-5x ROI within the first 90 days through time savings and increased efficiency." }] },
  { slug: "google-ads", title: "Google Ads Revenue Engine", desc: "Google Ads management engineered for revenue, not impressions — AI-optimized bidding, high-intent keyword targeting, and conversion tracking built for service businesses. Clients achieve 4–6x ROAS within 90 days. Minimum $2K ad spend. Free Google Ads audit.", faqs: [{ q: "What ROAS can I expect from Google Ads?", a: "Our clients typically achieve 4–6x ROAS within the first 90 days. We optimize for revenue-generating conversions, not vanity metrics like clicks or impressions." }, { q: "What is the minimum ad spend required?", a: "We recommend a minimum of $2,000/month in ad spend for meaningful, statistically significant results across your target keywords." }, { q: "What is included in your Google Ads management?", a: "Keyword research, campaign structure, ad copywriting, bid strategy, negative keyword management, conversion tracking setup, landing page recommendations, and monthly reporting." }] },
  { slug: "meta-ads", title: "Meta Ads Growth Engine", desc: "Facebook and Instagram ad campaigns built around audience-first creative and full-funnel targeting — from cold awareness to retargeting conversions. Average 3.2x ROAS within 60 days. Creative, copy, and targeting all managed for you. Free Meta audit.", faqs: [{ q: "Are Facebook ads still effective in 2025?", a: "Yes. Meta platforms reach 3.7 billion users and remain the most cost-effective channel for B2C lead generation, e-commerce, and local service businesses." }, { q: "What types of businesses benefit most from Meta Ads?", a: "Local services, e-commerce, SaaS, healthcare, real estate, coaching, and any B2C business where visual storytelling and audience targeting drive acquisition." }, { q: "Do you handle creative production and ad copy?", a: "Yes. We create all ad creatives, copy, and landing pages as part of the service — no external agency or designer needed." }] },
  { slug: "seo-authority", title: "SEO Authority Growth System", desc: "SEO strategy built to earn topical authority, fix technical foundations, and acquire links that move rankings — not just traffic. 90%+ of clients reach page 1 for primary keywords within 6 months. Includes technical audit, content, and link building. Free SEO audit.", faqs: [{ q: "How long does SEO take to show results?", a: "Most clients see meaningful ranking movement within 3–4 months and page-1 positioning for primary keywords within 6 months, depending on competition." }, { q: "What is included in your SEO authority system?", a: "Full technical audit and remediation, keyword strategy, on-page optimization, topical content creation, link acquisition, and monthly reporting with keyword rank tracking." }, { q: "Do you guarantee first-page rankings?", a: "We do not guarantee specific positions — no ethical agency can. Our track record shows 90%+ of clients achieve page-one rankings for their target keywords within 6 months." }] },
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
  "case-study-dental-practice-revenue-transformation": { title: "Local Dental Practice Revenue Transformation", desc: "How Premier Dental Care achieved 148% increase in new patients using AI Calling Agent and Google Ads." },
  "case-study-ecommerce-cart-recovery-scaling": { title: "E-Commerce Brand Scaling System", desc: "How LuxeHome Essentials achieved 62% cart recovery rate and 3.2x ROAS with AI Email Automation." },
  "case-study-real-estate-ai-lead-generation": { title: "Real Estate Lead Machine", desc: "How Metro Realty Group generated 45+ qualified buyer leads per month with AI Lead Qualification." },
  "case-study-saas-growth-acceleration": { title: "B2B SaaS Growth Engine", desc: "How CloudFlow Solutions achieved 145% increase in qualified demos with AI Sales Assistant." },
  "case-study-law-firm-client-intake-automation": { title: "Law Firm Client Acquisition System", desc: "How Sterling Legal Partners increased qualified consultations by 175% with AI intake automation." },
  "case-study-fitness-studio-membership-growth": { title: "Fitness Studio Membership Growth", desc: "How Elite Performance Studios increased membership signups by 142% with AI lead capture and nurturing." },
  "case-study-restaurant-chain-local-seo-transformation": { title: "Restaurant Chain Digital Transformation", desc: "How Sakura Dining Group boosted online orders by 165% with integrated AI marketing systems." },
  "case-study-medical-clinic-patient-acquisition": { title: "Multi-Specialty Clinic Patient Growth Engine", desc: "How Meridian Health Partners achieved 125% new patient volume growth using AI Receptionist and Google Ads." },
  "case-study-wealth-management-digital-lead-generation": { title: "Wealth Management Firm Digital Presence", desc: "How Crestview Capital Advisors generated 165% website lead increase with SEO and AI Lead Qualification." },
  "case-study-home-services-plumbing-hvac-lead-machine": { title: "Home Services Lead Machine", desc: "How TrueFlow Plumbing & HVAC achieved 190% lead volume increase and 3.9x return on ad spend." },
  "case-study-auto-dealership-ai-sales-acceleration": { title: "Auto Dealership Sales Acceleration", desc: "How Pinnacle Motors achieved 148% internet lead conversion increase with AI Chatbot and SMS Automation." },
  "case-study-online-coaching-enrollment-automation": { title: "Online Coaching Business Revenue System", desc: "How Apex Performance Academy achieved 175% enrollment growth with AI appointment booking automation." },
  "case-study-boutique-hotel-direct-booking-engine": { title: "Boutique Hotel Direct Booking Engine", desc: "How Shoreline Retreats grew direct bookings from 15% to 58% and achieved 4.1x Google Ads ROAS." },
  "case-study-insurance-agency-renewal-automation": { title: "Insurance Agency Lead & Retention System", desc: "How Guardian Shield Insurance raised policy renewal rate to 91% and grew new applications by 148%." },
  "case-study-commercial-contractor-brand-lead-growth": { title: "Commercial Contractor Brand & Lead System", desc: "How Ironclad Builders generated 14 inbound RFPs per month and 185% website traffic growth." },
  "case-study-cpa-firm-onboarding-automation": { title: "CPA Firm Client Growth & Automation", desc: "How Clearpath Accounting Group achieved 180% new client growth and reduced onboarding from 3 weeks to 3 days." },
  "case-study-luxury-salon-ai-booking-instagram-growth": { title: "Luxury Salon Booking & Brand Expansion", desc: "How Velour Beauty Lounge raised capacity utilization to 87% and gained 22K Instagram followers." },
  "case-study-immigration-law-multilingual-lead-generation": { title: "Immigration Law Firm Digital Acquisition", desc: "How Bridgepoint Immigration Law achieved 185% monthly lead increase with multilingual digital presence." },
  "case-study-freight-brokerage-workflow-automation": { title: "Freight Brokerage Efficiency & Growth", desc: "How Nexus Freight Solutions grew load volume by 135% and achieved 68% faster load matching." },
  "case-study-cnc-manufacturer-digital-lead-generation": { title: "Precision Parts Manufacturer Digital Transformation", desc: "How Apex Machining Works achieved 185% website RFQ submissions increase and ranked #1 for CNC keywords." },
  "case-study-veterinary-clinic-ai-appointment-growth": { title: "Veterinary Clinic Growth & Automation", desc: "How PawsCare Animal Hospital achieved 142% new client growth and 94% appointment show rate." },
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
  "b2b-lead-generation": { title: "B2B Lead Generation | 50-200 Qualified Leads/Month | Infinite Rankers", desc: "AI-powered B2B lead generation averaging 50-200 qualified prospects/month. LinkedIn, email, Google Ads & AI calling combined. Free B2B lead gen audit.", faqs: [{ q: "How does AI improve B2B lead generation?", a: "AI automates prospect research, personalizes outreach at scale, scores leads by intent signals, and triggers multi-channel follow-up sequences that convert." }, { q: "What channels do you use for B2B leads?", a: "We combine LinkedIn outreach, email sequences, Google Ads, content marketing, and AI calling agents to build a multi-channel B2B pipeline." }, { q: "How many leads can I expect per month?", a: "Results vary by industry, but most B2B clients generate 50-200 qualified leads per month within the first 90 days of campaign optimization." }] },
  "automation-agency": { title: "AI Automation Agency | Save 20hrs/Week | Infinite Rankers", desc: "Automate lead follow-up, appointment booking & workflows with AI. Clients reduce manual work by 60% and scale revenue without adding headcount. Free demo.", faqs: [{ q: "What does an automation agency do?", a: "An automation agency designs and implements intelligent workflows that automate repetitive tasks like lead follow-up, appointment booking, data entry, and reporting." }, { q: "How can automation help with recruitment?", a: "AI automation streamlines candidate sourcing, application screening, interview scheduling, and follow-up communications — reducing time-to-hire by up to 60%." }, { q: "How quickly can automation systems be implemented?", a: "Most automation workflows are designed, built, and live within 2-4 weeks, with immediate impact on efficiency and lead response times." }] },

  "ai-receptionist": { title: "AI Receptionist | 24/7 Call Answering & Lead Qualification | Infinite Rankers", desc: "AI receptionist answers every inbound call within one ring — 24/7 — qualifying leads, answering FAQs, and booking appointments. Eliminates 100% of missed-call revenue loss. Free setup.", faqs: [{ q: "Can the AI receptionist handle after-hours calls?", a: "Yes. It operates 24/7 with zero degradation in call quality, routing after-hours calls or taking detailed messages with priority flagging." }, { q: "How does it route calls to the right department?", a: "It uses intelligent routing logic based on caller intent, keywords, caller history, and configurable rules — including warm transfer with context." }, { q: "Can it schedule appointments directly?", a: "Yes. It integrates with your calendar system to book, reschedule, and confirm appointments in real-time during the call." }, { q: "Which industries benefit most from an AI receptionist?", a: "Healthcare, dental, legal, home services, med spas, real estate, and any service business that loses revenue to missed or mishandled calls." }] },
  "crm-automation": { title: "CRM Automation | Save 15–20hrs/Week & Double Pipeline Visibility | Infinite Rankers", desc: "CRM automation eliminates manual data entry — auto-routing leads, triggering follow-ups, and updating deal stages in HubSpot, Salesforce, GoHighLevel, or Pipedrive. Free CRM audit.", faqs: [{ q: "Which CRMs do you support?", a: "We work with Salesforce, HubSpot, Zoho, Pipedrive, GoHighLevel, and most major CRMs — including custom-built solutions via API." }, { q: "Will automation break my existing workflows?", a: "No. We audit your current setup first and build automations that layer onto your existing processes without disrupting active deals or contacts." }, { q: "How much time does CRM automation save?", a: "Most teams save 15-20 hours per week on manual data entry, follow-up tasks, and reporting — time that goes directly back to selling." }, { q: "How long does CRM automation implementation take?", a: "Most CRM automation projects are live within 2–3 weeks including workflow design, integration setup, testing, and team training." }] },
  "ai-automation-agency": { title: "#1 AI Automation Agency for Service Businesses | Free Demo | Infinite Rankers", desc: "AI automation agency building lead capture, appointment booking & follow-up systems. Clients average 3x revenue in 90 days without adding headcount. Free strategy demo.", faqs: [{ q: "What does an AI automation agency do?", a: "An AI automation agency builds intelligent systems that automate your lead capture, follow-up, appointment booking, CRM management, and customer communications — replacing manual workflows with 24/7 AI." }, { q: "How quickly can an AI automation system be deployed?", a: "Most complete AI automation systems are live within 10–14 business days including integrations, testing, and team onboarding." }, { q: "What ROI can I expect from AI automation?", a: "Clients typically 2-3x their booked meetings within 60 days and reduce manual operational time by 50–60%." }, { q: "Do you work with small and mid-size businesses?", a: "Yes. Our systems are designed for service businesses at any stage — from solo operators to multi-location enterprises." }] },
  "ai-agent-development": { title: "Custom AI Agent Development | Built for Your Business | Infinite Rankers", desc: "Custom AI agents built to qualify leads, book appointments, handle intake & automate customer communications. Deployed in 10 days. Free AI agent consultation.", faqs: [{ q: "What is a custom AI agent?", a: "A custom AI agent is an intelligent software system trained on your business to handle specific tasks — lead qualification, appointment booking, intake forms, customer support — without human intervention." }, { q: "Can AI agents integrate with my existing software?", a: "Yes. We integrate with your CRM, calendar, phone system, website, and any tools in your stack through native integrations and APIs." }, { q: "How long does it take to build a custom AI agent?", a: "Most custom AI agents are designed, built, and live within 10 business days of project kickoff." }, { q: "What makes your AI agents different from off-the-shelf chatbots?", a: "Our agents are trained on your specific business, services, and sales process — not generic templates — delivering human-like, context-aware responses that actually convert." }] },
  "ai-booking-agent": { title: "AI Booking Agent | Fill Your Calendar 24/7 | Infinite Rankers", desc: "AI booking agent fills your calendar with qualified appointments across phone, SMS & chat — 24/7, no staff required. Clients reduce no-shows 40%+. Free demo.", faqs: [{ q: "How does an AI booking agent work?", a: "It engages leads via call, SMS, or chat, qualifies their intent, checks your real-time calendar, books the appointment, and sends automatic reminders — all without human involvement." }, { q: "Which calendar systems does it integrate with?", a: "Google Calendar, Outlook, Calendly, Acuity, and most major scheduling platforms across your team." }, { q: "Can it handle rescheduling and cancellations?", a: "Yes. The AI manages the full appointment lifecycle — booking, confirmation, rescheduling, and cancellation with waitlist backfill." }, { q: "What industries does the AI booking agent work for?", a: "Healthcare, dental, legal, home services, med spas, real estate, coaching, and any service business that relies on scheduled appointments." }] },
  "ai-customer-support-agent": { title: "AI Customer Support Agent | 24/7 Resolution | Infinite Rankers", desc: "AI customer support agent resolves FAQs, handles complaints & escalates complex issues 24/7 — reducing support tickets by 60%+. Free support AI demo.", faqs: [{ q: "What can an AI customer support agent handle?", a: "FAQs, order status, appointment inquiries, complaint intake, refund requests, and escalation routing — covering 80–90% of typical support volume automatically." }, { q: "How does it handle issues it cannot resolve?", a: "The AI escalates to a human agent with full conversation context — so your team picks up seamlessly without the customer repeating themselves." }, { q: "Can the AI support agent be trained on our products and policies?", a: "Yes. We train it on your specific product catalog, service policies, FAQs, and brand voice before deployment." }, { q: "How quickly can it be deployed?", a: "Most AI support agents are live within 7–10 business days including knowledge base training and integration with your helpdesk or CRM." }] },
  "ai-sales-agent": { title: "AI Sales Agent | Qualify & Close More Deals | Infinite Rankers", desc: "AI sales agent qualifies leads, handles objections & books consultations 24/7 — so your closers only talk to buyers. Clients close 2x more deals. Free demo.", faqs: [{ q: "What does an AI sales agent do?", a: "It engages inbound leads immediately, qualifies them using your criteria, handles common objections, and books meetings with your sales team — all autonomously." }, { q: "Can the AI sales agent handle objections?", a: "Yes. It is trained on your specific objections and responses, engaging prospects conversationally to move them toward a booking or decision." }, { q: "Does it integrate with my CRM?", a: "Yes. Every interaction is logged to your CRM with qualification scores, contact data, and conversation summaries for your sales team." }, { q: "What is the typical ROI of an AI sales agent?", a: "Clients typically see 2x increase in booked meetings within 60 days, as the AI responds to every lead instantly and nurtures until they book or opt out." }] },
  "lead-capture-automation": { title: "Lead Capture Automation | Never Miss a Lead | Infinite Rankers", desc: "AI lead capture automation responds to every inquiry in under 60 seconds — via web form, phone, SMS & chat. Clients capture 3x more leads. Free audit.", faqs: [{ q: "What is lead capture automation?", a: "Lead capture automation uses AI to instantly respond to every new lead across all channels — web form, call, SMS, live chat — qualifying and routing them before your competitors can respond." }, { q: "How fast does it respond to new leads?", a: "Under 60 seconds. Speed-to-lead is the single biggest conversion factor — businesses that respond within 1 minute are 21x more likely to convert than those that wait 30 minutes." }, { q: "Which channels can it capture leads from?", a: "Website forms, landing pages, phone calls, SMS, Facebook Ads lead forms, Google Ads calls, and chat widgets — all unified in one system." }, { q: "Does it qualify leads automatically?", a: "Yes. The AI asks qualification questions, scores leads by intent, and routes only qualified prospects to your sales team." }] },
  "missed-call-text-back": { title: "Missed Call Text-Back System | Recover Lost Revenue | Infinite Rankers", desc: "Automatically text every missed caller within 30 seconds — capturing leads before they call your competitor. Clients recover 35%+ of missed-call revenue. Free setup.", faqs: [{ q: "How does missed call text-back work?", a: "When you miss a call, the system immediately sends a personalized SMS to the caller — starting a conversation, capturing their need, and booking a callback or appointment." }, { q: "How quickly does it send the text?", a: "Within 30 seconds of a missed call — while the caller is still thinking about your business rather than searching for alternatives." }, { q: "Can I customize the text message response?", a: "Yes. We configure the initial message and follow-up sequence to match your brand voice, services, and preferred call-to-action." }, { q: "Does it integrate with my phone system?", a: "Yes. It connects with most business phone systems and VoIP providers, requiring minimal setup." }] },
  "revenue-automation-systems": { title: "Revenue Automation Systems | 3x Revenue in 90 Days | Infinite Rankers", desc: "End-to-end revenue automation: lead capture, follow-up, booking & CRM — all on autopilot. Clients average 3x revenue growth in 90 days. Free revenue audit.", faqs: [{ q: "What is a revenue automation system?", a: "A revenue automation system integrates AI across your entire lead-to-close process — capturing leads, following up automatically, booking appointments, and managing your pipeline without manual effort." }, { q: "How does it differ from basic marketing automation?", a: "Revenue automation systems are built around measurable revenue outcomes — tracked by booked appointments, closed deals, and collected revenue — not just email opens or click rates." }, { q: "How long does it take to implement?", a: "Full revenue automation systems are typically live in 2–4 weeks depending on integration complexity and the number of channels configured." }, { q: "What kind of businesses benefit most?", a: "Service businesses with a defined sales process — healthcare, legal, real estate, home services, med spas, coaches — benefit most from automated revenue systems." }] },

  "saas-project-development": { title: "SaaS Project Development | Custom Software Built to Scale | Infinite Rankers", desc: "Custom SaaS application development from MVP to enterprise scale. AI-powered features, API integrations & scalable architecture. Free SaaS project consultation.", faqs: [{ q: "How long does it take to build a SaaS product?", a: "An MVP typically takes 8–16 weeks depending on feature complexity. We follow an agile approach so you can launch, test, and iterate rapidly." }, { q: "What technology stack do you use for SaaS development?", a: "We build with React, Node.js, Python, PostgreSQL, and cloud infrastructure on AWS or GCP — choosing the right stack for your specific product requirements." }, { q: "Can you add AI features to our SaaS product?", a: "Yes. We integrate LLMs, computer vision, predictive analytics, and automation into SaaS products to create differentiated, high-value AI-powered experiences." }, { q: "Do you handle post-launch maintenance?", a: "Yes. We offer ongoing development, infrastructure management, security updates, and feature expansion after your product launches." }] },
  "custom-saas-development": { title: "Custom SaaS Development | MVP to Enterprise | Infinite Rankers", desc: "End-to-end custom SaaS development: product strategy, UI/UX design, development & launch. AI-integrated. Used by 50+ SaaS businesses. Free project scope call.", faqs: [{ q: "What is included in custom SaaS development?", a: "Product strategy, technical architecture, UI/UX design, full-stack development, AI feature integration, QA testing, deployment, and post-launch support." }, { q: "How do you ensure the SaaS product is scalable?", a: "We architect for scale from day one — microservices, cloud-native infrastructure, horizontal scaling, and database optimization built into the foundation." }, { q: "Can you rebuild or improve our existing SaaS product?", a: "Yes. We handle legacy system modernization, performance optimization, feature expansion, and full product rebuilds for existing SaaS companies." }, { q: "Do you sign NDAs for SaaS development projects?", a: "Yes. All projects begin with an NDA and IP assignment agreement to protect your product concept and proprietary code." }] },
  "custom-ai-automation": { title: "Custom AI Automation | Built Around Your Business | Infinite Rankers", desc: "Bespoke AI automation systems designed for your unique workflows — not generic templates. Clients reduce manual work 60%+ in 30 days. Free automation audit.", faqs: [{ q: "What makes custom AI automation different from off-the-shelf tools?", a: "Custom AI automation is built around your specific workflows, data, and business logic — delivering higher accuracy, better integration, and results that generic tools cannot replicate." }, { q: "What processes can be automated with custom AI?", a: "Lead qualification, appointment booking, customer onboarding, document processing, invoice generation, reporting, CRM updates, and virtually any repeatable business process." }, { q: "How much does custom AI automation cost?", a: "Projects typically start at $3,000 for standalone automation workflows and scale based on complexity, integrations, and volume requirements." }, { q: "Can custom AI automation integrate with our existing software?", a: "Yes. We connect with your CRM, ERP, communication tools, databases, and third-party APIs to create a unified automation layer." }] },

  "ai-receptionist-for-dentists": { title: "AI Receptionist for Dental Offices | 24/7 Patient Booking | Infinite Rankers", desc: "AI receptionist answers every dental patient call, books appointments & handles FAQs 24/7. HIPAA-compliant. Dental clients see 148% more new patients. Free demo.", faqs: [{ q: "Is the AI receptionist HIPAA-compliant for dental offices?", a: "Yes. All patient interactions are handled in a HIPAA-compliant manner — no PHI stored in non-compliant systems, with consent flows and privacy controls built in." }, { q: "Can the AI book dental appointments directly into our schedule?", a: "Yes. It integrates with Dentrix, Eaglesoft, Open Dental, and other dental practice management software to book and confirm appointments in real-time." }, { q: "Will it handle insurance and billing questions?", a: "It handles common insurance questions and collects information for staff review, escalating complex billing questions to your front desk team." }, { q: "How does an AI receptionist help dental offices grow?", a: "It eliminates missed calls after hours and during busy periods — capturing every new patient inquiry and converting them to booked appointments around the clock." }] },
  "ai-receptionist-for-law-firms": { title: "AI Receptionist for Law Firms | 24/7 Client Intake | Infinite Rankers", desc: "AI receptionist answers every call, qualifies potential clients & schedules consultations 24/7. Law firms see 175% more qualified consultations. Free legal AI demo.", faqs: [{ q: "Is the AI receptionist compliant with legal ethics rules?", a: "Yes. It is configured to avoid creating attorney-client relationships, uses appropriate disclaimers, and routes all substantive legal questions to licensed staff." }, { q: "Can it qualify leads by practice area?", a: "Yes. We configure intake logic for your specific practice areas — PI, family law, criminal, immigration, estate — routing to the right attorney or intake specialist." }, { q: "Does it capture case details during the call?", a: "Yes. The AI collects key case information, incident dates, opposing parties, and contact details — delivering a complete intake summary to your team." }, { q: "How quickly can a law firm deploy the AI receptionist?", a: "Most law firm AI receptionist deployments are live within 7–10 business days including intake flow configuration, practice area training, and CRM integration." }] },
  "ai-booking-agent-for-med-spas": { title: "AI Booking Agent for Med Spas | Fill Your Schedule | Infinite Rankers", desc: "AI booking agent fills your med spa schedule 24/7 — handling consultations, treatments & follow-ups automatically. Med spa clients grow revenue 120%+. Free demo.", faqs: [{ q: "Can the AI booking agent handle multiple service types for med spas?", a: "Yes. It books Botox, fillers, laser treatments, consultations, and follow-up appointments — each with their appropriate duration and staff assignment." }, { q: "Does it reduce no-shows for med spa appointments?", a: "Yes. Automated confirmation and reminder sequences (24hr + 2hr) reduce no-show rates by 40%+ at most med spa clients." }, { q: "Can it upsell treatment packages during booking?", a: "Yes. The AI is trained to mention relevant treatment combinations and package promotions during the booking conversation to increase average booking value." }, { q: "How does it handle consultation vs. treatment bookings differently?", a: "We configure separate booking flows for consultations and treatments — with appropriate questions, duration, and follow-up sequences for each type." }] },
  "ai-automation-for-hvac-companies": { title: "AI Automation for HVAC Companies | 190% More Leads | Infinite Rankers", desc: "AI automation for HVAC companies: lead capture, after-hours booking & follow-up automation. HVAC clients average 190% more leads in 90 days. Free HVAC AI audit.", faqs: [{ q: "How does AI automation help HVAC companies get more jobs?", a: "AI captures every missed call and web inquiry 24/7, instantly follows up with scheduling options, and books service calls before the homeowner contacts a competitor." }, { q: "Can the AI handle emergency after-hours HVAC calls?", a: "Yes. It answers after-hours calls, captures the emergency details, and dispatches an alert to your on-call technician or books the next available slot." }, { q: "How does it manage seasonal volume spikes?", a: "AI scales instantly — handling hundreds of simultaneous inquiries during summer AC season or winter heating emergencies without added staffing costs." }, { q: "Can it integrate with service dispatch software?", a: "Yes. We integrate with ServiceTitan, Housecall Pro, Jobber, and most major field service management platforms." }] },
  "crm-automation-for-home-services": { title: "CRM Automation for Home Services | Save 15hrs/Week | Infinite Rankers", desc: "CRM automation built for home service businesses — auto-route leads, trigger follow-ups & update jobs without manual entry. Free home services CRM audit.", faqs: [{ q: "Which CRMs do you automate for home services companies?", a: "We work with ServiceTitan, Jobber, Housecall Pro, GoHighLevel, HubSpot, and most major home services CRM platforms." }, { q: "What manual tasks does CRM automation eliminate?", a: "Lead routing, follow-up scheduling, estimate reminders, job status updates, invoice generation, and review request triggers — typically saving 15–20 hours per week." }, { q: "How does CRM automation improve lead conversion for home services?", a: "Automated follow-up sequences engage every lead within 60 seconds and continue nurturing for 30+ days — capturing deals your team would otherwise let go cold." }, { q: "How long does CRM automation setup take for a home services business?", a: "Most home services CRM automations are built and live within 2–3 weeks including workflow design, integration, and team training." }] },
  "lead-capture-automation-for-plumbers": { title: "Lead Capture Automation for Plumbers | Never Miss a Job | Infinite Rankers", desc: "AI lead capture automation for plumbing companies — answer every call, capture every form & text back missed callers in 30 seconds. Free plumbing AI demo.", faqs: [{ q: "How does lead capture automation help plumbing businesses?", a: "It ensures every call, web form, and text inquiry is captured and responded to instantly — day, night, or weekend — so no job opportunity goes to a competitor." }, { q: "What happens when a plumber misses a call?", a: "The system automatically texts the caller within 30 seconds, starts a conversation to understand their need, and books them for the next available service slot." }, { q: "Can it handle emergency plumbing calls differently?", a: "Yes. Emergency calls are flagged and escalated immediately to your on-call plumber while the system keeps the customer engaged with an ETA update." }, { q: "Does it integrate with plumbing dispatch software?", a: "Yes. We connect with Jobber, ServiceTitan, Housecall Pro, and other platforms to flow leads directly into your dispatch system." }] },
  "follow-up-automation-for-roofers": { title: "Follow-Up Automation for Roofing Companies | 3x More Estimates | Infinite Rankers", desc: "Automated lead follow-up for roofing companies — convert more estimates to jobs with AI-powered SMS & email sequences. Roofers 3x booked jobs. Free roofing demo.", faqs: [{ q: "Why do roofing companies need automated follow-up?", a: "Most roofing leads require 5–8 follow-up touchpoints before booking — most companies give up after 1–2. Automation handles every touchpoint systematically until the lead converts or opts out." }, { q: "What channels does follow-up automation use for roofers?", a: "SMS, email, and voicemail drops — delivered in a coordinated sequence timed to maximize response rates without overwhelming the prospect." }, { q: "Can it follow up on storm damage leads differently?", a: "Yes. We build separate sequences for storm damage, insurance claims, and standard re-roof leads — each with tailored messaging and urgency levels." }, { q: "How does follow-up automation integrate with estimating software?", a: "We connect with JobNimbus, AccuLynx, RoofSnap, and most roofing CRMs to trigger follow-up sequences automatically when estimates are sent." }] },
  "customer-support-ai-for-auto-shops": { title: "AI Customer Support for Auto Shops | 24/7 Service Answering | Infinite Rankers", desc: "AI customer support for auto repair shops — answer service questions, book appointments & send estimates automatically. Auto shops see 65% fewer missed calls. Free demo.", faqs: [{ q: "What can AI customer support handle for auto shops?", a: "Service inquiries, appointment booking, status updates on vehicles in the shop, estimate follow-ups, and common questions about pricing, hours, and services offered." }, { q: "Can the AI provide repair estimates?", a: "It delivers standard service price ranges and books diagnostic appointments for complex repair estimates requiring technician inspection." }, { q: "Does it notify customers when their vehicle is ready?", a: "Yes. Automated pickup notifications and status updates can be triggered directly from your shop management software." }, { q: "How does it integrate with shop management software?", a: "We integrate with Mitchell 1, Shop-Ware, Tekmetric, and most major automotive shop management platforms." }] },
  "review-automation-for-dental-clinics": { title: "Review Automation for Dental Clinics | Get 5-Star Reviews | Infinite Rankers", desc: "Automated Google review requests for dental clinics — sent at the perfect moment after appointments. Dental clients average 4.8 stars and 300% more reviews. Free demo.", faqs: [{ q: "When does the review request get sent to dental patients?", a: "Automatically 2–4 hours after appointment completion — when patient satisfaction is highest and the experience is fresh in their memory." }, { q: "Which review platforms does it target?", a: "Primarily Google (the highest-impact for local search), with optional Yelp and Healthgrades flows based on your market." }, { q: "Is this HIPAA-compliant for dental patient communication?", a: "Yes. Review requests are sent via compliant channels without referencing specific treatment details — staying within HIPAA guidelines." }, { q: "Can it respond to reviews automatically?", a: "Yes. We configure AI-generated responses for common review types, with escalation alerts for negative reviews requiring personal attention." }] },
  "customer-reactivation-for-med-spas": { title: "Customer Reactivation for Med Spas | Win Back Past Clients | Infinite Rankers", desc: "AI reactivation campaigns for med spas that win back dormant clients with targeted offers. Med spa clients recover $50K+ in dormant revenue. Free reactivation audit.", faqs: [{ q: "How does customer reactivation work for med spas?", a: "We identify clients who haven't visited in 60–180 days, then deploy targeted SMS and email sequences with personalized treatment offers to bring them back in." }, { q: "What kind of offers work best for med spa reactivation?", a: "Seasonal treatment promotions, loyalty bonuses for lapsed clients, new treatment announcements, and limited-time package discounts consistently drive high reactivation rates." }, { q: "How many clients can be reactivated in the first campaign?", a: "Results vary, but most med spas see 15–35% reactivation rates on lapsed client lists — often generating $20,000–$80,000 in recovered revenue from dormant contacts." }, { q: "Can reactivation campaigns run automatically on an ongoing basis?", a: "Yes. We set up evergreen reactivation triggers — so any client who goes 60 days without a booking automatically enters the reactivation sequence." }] },
  "ai-sales-agent-for-real-estate": { title: "AI Sales Agent for Real Estate | 45+ Leads/Month | Infinite Rankers", desc: "AI sales agent qualifies buyer & seller leads 24/7, books showings & nurtures prospects for real estate agents and brokerages. Free real estate AI consultation.", faqs: [{ q: "How does an AI sales agent help real estate agents?", a: "It qualifies every inbound lead instantly — asking about timeline, pre-approval status, and search criteria — then books showing appointments with qualified prospects and nurtures others until they're ready." }, { q: "Can it integrate with real estate CRMs?", a: "Yes. We integrate with Follow Up Boss, LionDesk, BoomTown, kvCORE, Chime, and most major real estate CRM platforms." }, { q: "Does it generate leads or just qualify existing ones?", a: "It can do both — qualifying leads from your existing sources and powering outbound campaigns to generate new buyer and seller leads via Google Ads and Meta Ads." }, { q: "How does it handle buyer leads vs. seller leads differently?", a: "We build separate qualification flows for buyers and sellers — with buyer-specific questions about timeline and pre-approval, and seller flows capturing property details and motivation." }] },
  "ai-booking-agent-for-electricians": { title: "AI Booking Agent for Electricians | Book More Jobs | Infinite Rankers", desc: "AI booking agent for electrical contractors — answers calls 24/7, books service appointments & follows up on estimates automatically. Free electrician AI demo.", faqs: [{ q: "How does an AI booking agent help electrical contractors?", a: "It captures every call and web inquiry 24/7 — booking residential or commercial service appointments, sending estimate follow-ups, and managing the customer communication lifecycle automatically." }, { q: "Can it differentiate between emergency and standard electrical jobs?", a: "Yes. Emergency calls are flagged and escalated immediately, while routine service requests are booked into your next available scheduling slot." }, { q: "Does it integrate with electrical contractor software?", a: "Yes. We connect with Jobber, ServiceTitan, Housecall Pro, and other field service management platforms your team uses." }, { q: "How quickly can an electrician AI booking system be deployed?", a: "Most systems are live within 5–7 business days including phone integration, booking flow configuration, and team setup." }] },
  "ai-automation-for-law-firms": { title: "AI Automation for Law Firms | 175% More Consultations | Infinite Rankers", desc: "AI automation for law firms: intake, lead qualification, appointment booking & follow-up — all compliant with legal ethics. Free law firm automation demo.", faqs: [{ q: "What AI automation workflows are most valuable for law firms?", a: "Client intake automation, lead qualification by practice area, consultation booking, follow-up sequences for unresponsive leads, and document collection workflows deliver the highest ROI." }, { q: "Is AI intake automation ethical and compliant for law firms?", a: "Yes. We configure systems with appropriate disclaimers, avoid attorney-client relationship creation, and route all substantive legal discussions to licensed staff." }, { q: "Can it qualify leads by practice area automatically?", a: "Yes. Intake flows are configured for your specific practice areas — PI, family, criminal, estate, immigration — with appropriate questions and routing logic for each." }, { q: "How does AI automation scale a law firm's intake capacity?", a: "With AI handling initial qualification and follow-up, your intake team focuses only on qualified prospects — allowing the same headcount to process 3–5x more consultations." }] },
  "crm-automation-for-mortgage-brokers": { title: "CRM Automation for Mortgage Brokers | Close More Loans | Infinite Rankers", desc: "CRM automation for mortgage brokers — auto-route leads, trigger follow-up & track applications through closing. Brokers close 40% more loans. Free mortgage CRM demo.", faqs: [{ q: "Which CRMs do you automate for mortgage brokers?", a: "We work with Salesforce, HubSpot, Encompass, Calyx, Surefire, Total Expert, and most major mortgage-specific CRM platforms." }, { q: "How does CRM automation help mortgage brokers close more loans?", a: "Automated follow-up ensures no lead goes cold during the long mortgage decision cycle — keeping prospects engaged with educational content, rate updates, and timely check-ins." }, { q: "Can it automate document collection from borrowers?", a: "Yes. Automated document request sequences send reminders to borrowers until all required documents are collected — reducing processing delays." }, { q: "Is the automation RESPA and TILA compliant?", a: "We configure automation sequences to comply with relevant mortgage regulations — avoiding prohibited communications and maintaining required disclosures." }] },
  "ai-receptionist-for-home-services": { title: "AI Receptionist for Home Services | Never Miss a Job Call | Infinite Rankers", desc: "AI receptionist for home service businesses — answers every call 24/7, books appointments & captures leads automatically. Home services clients get 190% more jobs. Free demo.", faqs: [{ q: "What home service businesses benefit most from an AI receptionist?", a: "HVAC, plumbing, electrical, roofing, landscaping, pest control, cleaning services, and any home service business that loses jobs to missed calls." }, { q: "Can the AI receptionist dispatch emergency service calls?", a: "Yes. It identifies emergency requests, escalates to your on-call team immediately, and keeps the customer engaged with response time updates." }, { q: "Does it handle after-hours calls differently than business hours?", a: "Yes. After-hours calls receive a tailored response — booking next-morning slots or capturing emergency contact details based on your preferences." }, { q: "How does it integrate with home services dispatch software?", a: "We connect with Jobber, ServiceTitan, Housecall Pro, and other platforms to push booked appointments directly into your dispatch system." }] },

  "ai-automation-agency-california": { title: "#1 AI Automation Agency in California | Free Demo | Infinite Rankers", desc: "California businesses: AI automation for lead capture, appointment booking & follow-up. 45+ CA clients average 3x revenue in 90 days. Get your free strategy demo.", faqs: [{ q: "Do you serve businesses across all of California?", a: "Yes. We work with businesses statewide — from Los Angeles, San Diego, and San Francisco to Sacramento, Fresno, and smaller California markets." }, { q: "What industries in California benefit most from AI automation?", a: "Healthcare, real estate, legal, home services, dental, med spas, and professional services businesses across California generate the highest ROI from AI automation." }, { q: "How quickly can a California business deploy AI automation?", a: "Most California clients are live with fully deployed AI systems within 10–14 business days of project kickoff." }, { q: "Is there a local California team for support?", a: "Our team serves California businesses remotely with dedicated account management — delivering the same quality as a local agency with nationwide AI capabilities." }] },
  "ai-automation-agency-florida": { title: "#1 AI Automation Agency in Florida | Free Demo | Infinite Rankers", desc: "Florida businesses: AI automation systems for lead generation, booking & follow-up. 35+ FL clients. Average 3x revenue growth in 90 days. Free strategy session.", faqs: [{ q: "Do you work with businesses across all of Florida?", a: "Yes. We serve businesses statewide — Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and throughout Florida's markets." }, { q: "What Florida industries see the best results from AI automation?", a: "Home services, healthcare, legal, real estate, hospitality, dental, and med spa businesses in Florida generate strong ROI from AI automation and lead systems." }, { q: "Can AI automation help Florida businesses compete with larger companies?", a: "Yes. AI automation gives small and mid-size Florida businesses enterprise-level lead response speed and follow-up consistency — competing effectively against larger operations." }, { q: "How long does deployment take for a Florida business?", a: "Most Florida clients have fully deployed AI systems within 10–14 business days including integrations, testing, and go-live." }] },
  "ai-automation-agency-texas": { title: "#1 AI Automation Agency in Texas | Free Demo | Infinite Rankers", desc: "Texas businesses: AI automation for lead capture, follow-up & appointment booking. 40+ TX clients average 3x revenue in 90 days. Free Texas AI strategy call.", faqs: [{ q: "Do you serve businesses across all of Texas?", a: "Yes. We work with businesses in Houston, Dallas, Austin, San Antonio, Fort Worth, and throughout Texas — including smaller markets across the state." }, { q: "What Texas industries benefit most from AI automation?", a: "Home services, real estate, legal, healthcare, oil & gas support services, roofing, HVAC, and professional services businesses in Texas see the strongest results." }, { q: "Can AI automation help Texas businesses handle high lead volume?", a: "Yes. AI scales instantly — handling hundreds of simultaneous lead inquiries during peak periods without adding staffing costs, regardless of growth rate." }, { q: "How does Infinite Rankers support Texas clients remotely?", a: "Dedicated account managers, real-time reporting dashboards, and responsive support — delivering the same quality as a local Texas agency with broader AI capabilities." }] },
  "ai-automation-agency-usa": { title: "#1 AI Automation Agency in the USA | Free Demo | Infinite Rankers", desc: "The #1 AI automation agency for US service businesses. 100+ clients. Lead capture, booking & follow-up systems that average 3x revenue in 90 days. Free demo.", faqs: [{ q: "Do you work with businesses in all 50 states?", a: "Yes. We serve businesses across the entire United States — from major metropolitan areas to regional markets — with the same dedicated account management and AI capabilities." }, { q: "What makes Infinite Rankers the top AI automation agency in the USA?", a: "We build revenue-generating AI systems — not just software tools — with a proven track record of 3x revenue results, transparent reporting, and dedicated account management for every client." }, { q: "Which industries do you serve across the USA?", a: "Healthcare, legal, real estate, home services, dental, med spas, financial services, SaaS, restaurants, and professional services businesses nationwide." }, { q: "How do I get started with the AI automation agency?", a: "Book a free strategy call to get a custom AI automation roadmap, ROI projection, and live demo specific to your industry and business model." }] },
  "ai-receptionist-service-usa": { title: "AI Receptionist Service USA | 24/7 Call Answering | Infinite Rankers", desc: "Nationwide AI receptionist service — answers every call, qualifies leads & books appointments 24/7. US businesses eliminate 100% missed-call revenue loss. Free demo.", faqs: [{ q: "Does the AI receptionist service work for businesses in any US state?", a: "Yes. We deploy AI receptionist systems for businesses across all 50 states, handling local area codes, time zones, and region-specific scheduling requirements." }, { q: "Can it replace a traditional answering service?", a: "Yes — and it outperforms traditional answering services by qualifying leads, booking appointments, and integrating with your CRM rather than just taking messages." }, { q: "How does the AI receptionist handle multiple simultaneous calls?", a: "There is no call limit. The AI handles unlimited concurrent calls — ensuring every caller gets an immediate, intelligent response regardless of call volume." }, { q: "What is the typical cost saving vs. a human receptionist?", a: "Most businesses save $30,000–$50,000 per year in receptionist labor while improving coverage from 8 hours/day to 24/7 — with higher consistency and zero sick days." }] },

  "podium-alternative": { title: "Best Podium Alternative | More Power, Less Cost | Infinite Rankers", desc: "Looking for a Podium alternative? Our AI system delivers missed-call text-back, reviews & messaging at lower cost with more automation. Free comparison call.", faqs: [{ q: "Why do businesses switch from Podium to Infinite Rankers?", a: "Businesses switch for deeper AI automation, lower pricing, better CRM integration, and a system built around booking appointments and generating revenue — not just collecting reviews." }, { q: "Does your system include missed call text-back like Podium?", a: "Yes. Missed-call text-back is included — plus AI-powered follow-up sequences, lead qualification, and appointment booking that Podium does not offer." }, { q: "Can you migrate our existing Podium contacts and reviews?", a: "Yes. We handle data migration and configure your new system to match your existing workflows during the transition." }, { q: "Is your system cheaper than Podium?", a: "Most clients reduce their messaging and review software costs by 30–50% while gaining more functionality — particularly around AI automation and lead conversion." }] },
  "podium-alternative-for-home-services": { title: "Podium Alternative for Home Services | Infinite Rankers", desc: "The best Podium alternative for home service businesses — AI booking, text-back, reviews & CRM integration. Home services clients 3x booked jobs vs. Podium. Free demo.", faqs: [{ q: "Why is this better than Podium for home service businesses?", a: "Unlike Podium, our system books appointments directly from missed calls, qualifies leads automatically, and integrates with ServiceTitan, Jobber, and Housecall Pro for seamless dispatch." }, { q: "Does it include review generation like Podium?", a: "Yes — and it goes further with automated post-job review requests triggered directly from your job completion status, generating more reviews with less manual effort." }, { q: "Can it handle the volume of a multi-location home services business?", a: "Yes. The system scales across multiple locations with location-specific phone numbers, routing rules, and reporting — without additional per-location Podium pricing." }, { q: "How quickly can we switch from Podium?", a: "Most transitions are complete within 5–7 business days including contact migration, integration setup, and team training." }] },
  "podium-vs-custom-ai-system": { title: "Podium vs. Custom AI System | Which Wins for Your Business?", desc: "Podium vs. a custom AI automation system — see how features, ROI & pricing compare. Most businesses save $300+/mo with more power. Free side-by-side analysis.", faqs: [{ q: "What does Podium do that a custom AI system also does?", a: "Missed call text-back, review requests, webchat, and SMS messaging are all included in our custom AI systems — plus appointment booking, lead qualification, and deeper CRM integration." }, { q: "What can a custom AI system do that Podium cannot?", a: "Outbound lead follow-up sequences, AI-powered lead qualification, appointment booking automation, CRM pipeline management, and custom workflow triggers based on your specific business logic." }, { q: "Which is better for a high-volume service business?", a: "Custom AI systems deliver higher ROI for service businesses generating 50+ leads per month — where automated qualification, booking, and follow-up sequences make a significant revenue impact." }, { q: "How much does a custom AI system cost vs. Podium?", a: "Podium plans typically run $400–$800/month. Our custom systems often cost less while delivering 3–5x more functionality and measurable revenue impact." }] },
  "best-ai-automation-agency-for-local-businesses": { title: "Best AI Automation Agency for Local Businesses | Infinite Rankers", desc: "The best AI automation agency for local service businesses — missed-call text-back, booking AI, CRM & reviews. 100+ local business clients. Free local AI audit.", faqs: [{ q: "What AI automation tools are most impactful for local businesses?", a: "Missed-call text-back, AI booking agents, CRM automation, and automated review requests deliver the highest ROI for local service businesses because they directly capture and convert more leads." }, { q: "How does AI automation help a local business compete with large chains?", a: "AI gives local businesses enterprise-level response speed and follow-up consistency — answering calls instantly, booking 24/7, and nurturing leads with the same precision as large operations." }, { q: "What is the minimum budget for AI automation for a local business?", a: "Our entry-level local business AI packages start at $997/month, with ROI typically achieved within the first 30–60 days from captured leads that would otherwise be lost." }, { q: "Do you help local businesses with Google reviews as part of AI automation?", a: "Yes. Automated review requests are included — triggered after every completed service to consistently build your Google rating and local search visibility." }] },
  "ai-voice-agent": { title: "AI Voice Agent for Business | 24/7 Phone Automation | Infinite Rankers", desc: "Deploy an AI voice agent that answers calls, qualifies leads, and books appointments 24/7. Never miss another call. Businesses capture 67% more leads with AI voice agents.", faqs: [{ q: "Does the AI voice agent sound human?", a: "Yes. Our AI uses advanced neural voice synthesis that sounds natural and conversational. Most callers don't realize they're speaking with AI." }, { q: "What phone system does it work with?", a: "Works with virtually all systems including traditional landlines, VoIP (RingCentral, Grasshopper, Google Voice), and mobile numbers. Setup takes 1–3 days." }, { q: "Can it handle complex conversations?", a: "Absolutely. It handles multi-step qualification, pricing questions, objections, and appointment rescheduling with custom scripts built for your specific business flow." }, { q: "How long does setup take?", a: "Most businesses are live within 7–14 business days including script development, voice tuning, CRM integration, and quality testing." }] },
  "ai-appointment-setter": { title: "AI Appointment Setter | Book 3x More Meetings Automatically | Infinite Rankers", desc: "AI appointment setter that qualifies leads and fills your calendar 24/7. Clients book 3x more appointments without adding staff. See a live demo today.", faqs: [{ q: "How is an AI appointment setter different from a booking widget?", a: "A booking widget is passive — it just shows available times. Our AI actively reaches out to leads, qualifies them, overcomes objections, and guides them to book — like a skilled SDR, but 24/7 at a fraction of the cost." }, { q: "Which calendar systems does it integrate with?", a: "Google Calendar, Outlook, Apple Calendar, Calendly, Acuity Scheduling, HubSpot Meetings, and most CRM-native scheduling tools." }, { q: "What's the average reduction in no-show rates?", a: "Clients typically see no-show rates drop from 20–30% down to 8–12% using our multi-touch reminder and confirmation system." }, { q: "How fast does the AI respond to new leads?", a: "Within 60 seconds of a new inquiry via SMS, email, or both. Leads contacted within 5 minutes are 9x more likely to convert than those contacted after 30 minutes." }] },
  "ai-answering-service": { title: "AI Answering Service | 24/7 Live Call Handling for Business | Infinite Rankers", desc: "AI answering service that handles every business call 24/7 — qualifies leads, books appointments, and takes messages. Replace your answering service at 80% less cost.", faqs: [{ q: "Is it really better than a live answering service?", a: "In most cases, yes. Our AI knows your business better than a generic answering service agent, is available 24/7 without overtime charges, and integrates directly with your CRM — something live services cannot do." }, { q: "How is pricing different from traditional answering services?", a: "Traditional services charge per minute ($0.75–$1.50). Our AI is a flat monthly fee with unlimited call capacity — so your costs are predictable regardless of call volume." }, { q: "Can it work with my existing phone number?", a: "Yes. We forward your existing business number to the AI system or set up a new dedicated number. The switch is seamless for your callers." }, { q: "What industries does AI answering work best for?", a: "Home services, medical and dental practices, law firms, real estate, med spas, contractors, and any service business that receives inbound phone inquiries." }] },
  "ai-for-small-business": { title: "AI for Small Business | Automate & Grow Without Hiring | Infinite Rankers", desc: "AI tools built specifically for small businesses — capture more leads, book more appointments, and grow revenue without adding headcount. Starting at $997/month.", faqs: [{ q: "Is AI automation affordable for a small business?", a: "Yes. Our small business plans start at $997/month — less than the cost of a part-time employee — and typically deliver $5,000–$20,000 in additional monthly revenue within the first 90 days." }, { q: "Do I need technical knowledge to use AI automation?", a: "None at all. We handle all the setup, integration, and ongoing management. You just see the results — more leads, more appointments, more revenue — through a simple dashboard." }, { q: "How quickly will I see results?", a: "Most small businesses see their first AI-captured leads within 24 hours of launch. Measurable revenue impact typically shows in the first 30 days." }, { q: "What if I already have a CRM or booking system?", a: "We integrate with your existing tools — HubSpot, Salesforce, Go High Level, Calendly, Google Calendar, and more. No need to switch systems." }] },
  "ai-workflow-automation": { title: "AI Workflow Automation for Business | Save 40+ Hours/Week | Infinite Rankers", desc: "AI workflow automation that eliminates manual tasks, connects your tools, and runs your business operations on autopilot. Clients save 40+ hours per week. Free audit.", faqs: [{ q: "What kinds of workflows can be automated?", a: "Any repeatable, rule-based process — lead routing, CRM data entry, email follow-ups, appointment reminders, invoice generation, document requests, reporting, status updates, onboarding sequences, and more." }, { q: "Do I need to replace my existing software?", a: "No. We work with your existing tools — HubSpot, Salesforce, QuickBooks, Slack, Google Workspace, Microsoft 365, Calendly, and hundreds more. Automation connects what you have." }, { q: "How long does it take to see ROI?", a: "Most clients see measurable time savings within the first week. Revenue impact from faster follow-ups and fewer dropped balls typically shows in the first 30 days." }, { q: "Can AI handle complex, multi-step business processes?", a: "Yes. Our AI workflows handle complex conditional logic — different paths based on lead quality, deal size, industry, and hundreds of other variables." }] },
  "ai-for-business": { title: "AI for Business | Revenue Growth Systems That Work 24/7 | Infinite Rankers", desc: "AI built for business revenue growth — lead capture, appointment booking, CRM automation, and customer support AI. Used by 70+ USA businesses. Free strategy call.", faqs: [{ q: "What makes AI Revenue Systems different from regular AI tools?", a: "AI tools like ChatGPT are general-purpose. AI Revenue Systems are purpose-built, custom-configured workflows that automatically capture leads, qualify prospects, book appointments, and manage your pipeline — integrated with your specific business and tools." }, { q: "Which businesses get the best results from AI?", a: "Any business that generates revenue from leads and appointments — home services, healthcare, dental, legal, real estate, med spas, financial services, education, and professional services." }, { q: "What's the typical ROI timeline?", a: "Most clients see measurable revenue impact within 30 days. Full ROI on the investment typically takes 60–90 days. Year 1 clients average 3.2x growth in revenue attributable to AI systems." }, { q: "Do you work with businesses outside the USA?", a: "Our primary focus is USA-based businesses in English-speaking markets. We serve clients across all 50 states." }] },
  "pipeline-automation": { title: "Pipeline Automation | Self-Managing Revenue Pipeline | Infinite Rankers", desc: "AI pipeline automation that moves deals through your CRM automatically — no manual updates, no dropped balls. Clients close 40% more deals with pipeline automation.", faqs: [{ q: "Which CRM systems does pipeline automation work with?", a: "HubSpot, Salesforce, Go High Level, Pipedrive, Zoho CRM, Monday.com, and most other major CRM platforms. We also work with custom CRM setups." }, { q: "Do we need to change our sales process?", a: "No. We automate your existing sales process — not replace it. The same stages, same qualification criteria, same deal flow — just running automatically instead of manually." }, { q: "How long until deals start moving faster?", a: "Most clients see faster deal velocity within the first week as automatic follow-up sequences engage stalled deals. Measurable revenue impact shows in the first 30 days." }, { q: "What happens if automation sends the wrong message to a prospect?", a: "All automation sequences are reviewed and approved by your team before launch. You can override, pause, or adjust any automation at any time through a simple dashboard." }] },
  "ai-for-sales": { title: "AI for Sales | Close More Deals With Less Effort | Infinite Rankers", desc: "AI sales tools that qualify leads, follow up automatically, and help your team close 40% more deals. Trusted by 70+ USA sales teams. Free sales AI audit today.", faqs: [{ q: "Will AI replace our sales team?", a: "No. AI handles the manual work — prospecting, scheduling, CRM updates, follow-up — so your sales team can focus exclusively on conversations and closing. Most clients find their team is more motivated after deploying AI." }, { q: "How does AI personalize outreach at scale?", a: "AI uses prospect data — industry, company size, recent activity, pain points — to personalize every message. Outreach feels human and relevant because it is — just generated and sent automatically at perfect timing." }, { q: "What CRMs does the AI sales system work with?", a: "HubSpot, Salesforce, Pipedrive, Go High Level, Zoho, Close.com, and most other major CRM platforms. AI reads and writes data directly in your existing CRM." }, { q: "How long until our sales team sees results?", a: "Most sales teams see measurable improvement within 2 weeks — faster response times, more booked meetings, and cleaner CRM data. Revenue impact typically shows in the first 30–60 days." }] },

  "stop-missing-leads-after-hours": { title: "Stop Missing Leads After Hours | 24/7 AI Lead Capture | Infinite Rankers", desc: "AI systems that capture, qualify & respond to every lead after business hours — so you wake up to booked appointments, not missed opportunities. Free audit.", faqs: [{ q: "How many leads do businesses lose after hours?", a: "Studies show 40–60% of inbound leads contact businesses outside business hours. Without a 24/7 system, those leads go unanswered and book with a competitor by morning." }, { q: "What happens to an after-hours lead with your system?", a: "The AI responds instantly — via phone, SMS, or chat — qualifies the lead, and books an appointment or schedules a callback. Your team wakes up to a fully booked schedule." }, { q: "Is the after-hours AI response truly instant?", a: "Yes. Response time is under 60 seconds — significantly faster than any human team and fast enough to engage leads before they contact an alternative provider." }, { q: "Can the after-hours system handle emergency inquiries differently?", a: "Yes. Emergency contacts are flagged and escalated immediately to your on-call team, while standard inquiries are queued for next-business-day scheduling." }] },
  "automate-appointment-booking": { title: "Automate Appointment Booking | Fill Your Calendar 24/7 | Infinite Rankers", desc: "Automate appointment booking across phone, SMS, chat & web — AI fills your calendar without staff involvement. Clients book 3x more appointments. Free demo.", faqs: [{ q: "How does automated appointment booking work?", a: "AI engages incoming leads across all channels, qualifies their intent, checks your real-time calendar availability, books the appointment, and sends automatic confirmations and reminders — all without human involvement." }, { q: "Which booking channels can be automated?", a: "Phone calls, SMS, website chat, Facebook Messenger, Instagram DMs, and web forms — creating a unified omnichannel booking experience." }, { q: "Can automated booking handle complex scheduling requirements?", a: "Yes. Multi-service businesses with different appointment types, durations, and staff assignments are fully supported with custom booking logic." }, { q: "How much time does appointment booking automation save?", a: "Most service businesses save 10–20 hours per week in receptionist and admin time previously spent on phone-based scheduling." }] },
  "missed-call-to-booking-system": { title: "Missed Call to Booking System | Turn Every Missed Call Into a Job | Infinite Rankers", desc: "AI system converts missed calls into booked appointments automatically — text-back within 30 seconds, qualify & schedule without staff. Free missed-call audit.", faqs: [{ q: "How does the missed call to booking system work?", a: "When a call is missed, the system immediately sends a personalized text to the caller, starts an AI conversation to capture their need, and books them into your calendar — often before you even see the missed call notification." }, { q: "What percentage of missed calls can be recovered?", a: "Most clients recover 35–55% of missed calls as booked appointments — turning previously lost revenue into scheduled jobs." }, { q: "Can it handle different business types calling for different services?", a: "Yes. The AI identifies the service needed, books the appropriate appointment type, and routes to the right team member or location." }, { q: "Does it work with my existing phone system?", a: "Yes. It integrates with most business phone systems, VoIP providers, and virtual numbers without requiring a full system replacement." }] },
  "automate-customer-follow-up": { title: "Automate Customer Follow-Up | Convert 3x More Leads | Infinite Rankers", desc: "AI follow-up automation engages every lead across SMS, email & phone until they book or opt out — clients convert 3x more leads without more staff. Free audit.", faqs: [{ q: "How many follow-ups does it take to convert most leads?", a: "Research shows 80% of sales require 5–12 follow-up touches, yet most businesses give up after 1–2. Automation ensures every lead receives the full follow-up sequence needed to convert." }, { q: "What channels does automated follow-up use?", a: "SMS, email, voicemail drops, and AI phone calls — coordinated in a multi-channel sequence with behavioral branching based on lead response." }, { q: "How long does a follow-up sequence run?", a: "We typically configure 30-day sequences with increasing intervals — daily for the first week, every 2–3 days after — ensuring long-term nurturing without overwhelming prospects." }, { q: "Can follow-up be personalized per lead?", a: "Yes. Sequences are personalized with the lead's name, service interest, location, and previous touchpoints — making each message feel relevant rather than generic." }] },
  "reactivate-old-leads": { title: "Reactivate Old Leads | Win Back Dormant Prospects | Infinite Rankers", desc: "AI reactivation campaigns win back leads that went cold — SMS & email sequences that revive dormant prospects. Clients recover $20K–$100K in lost revenue. Free audit.", faqs: [{ q: "How does lead reactivation work?", a: "We identify leads in your CRM that went cold — no response in 30–180 days — and deploy targeted AI sequences via SMS and email to re-engage them with fresh offers and renewed outreach." }, { q: "What response rates do lead reactivation campaigns achieve?", a: "Most reactivation campaigns achieve 10–25% response rates from dormant leads — significantly higher than cold outreach because these prospects already know your business." }, { q: "Can old leads really still convert after months of silence?", a: "Yes. Buying decisions are often delayed rather than dead. Re-engaging at the right moment — with the right message — regularly recovers leads that simply needed more time or a different trigger." }, { q: "How many leads can be reactivated in one campaign?", a: "Campaigns scale to any list size. Most businesses run reactivation on lists of 200–2,000+ contacts, generating immediate bookings from a database they had already written off." }] },
  "ai-intake-system-for-law-firms": { title: "AI Intake System for Law Firms | 175% More Consultations | Infinite Rankers", desc: "AI intake system for law firms — qualifies leads 24/7, captures case details & books consultations automatically. Law firms see 175% more qualified consultations. Free demo.", faqs: [{ q: "What information does the AI intake system collect from potential clients?", a: "It captures contact information, case type, incident details, injury or damage description, opposing parties, urgency level, and preferred consultation time — all before the attorney is involved." }, { q: "How does it qualify leads by practice area?", a: "We configure qualification logic for each practice area — PI, criminal, family, immigration, estate — routing leads to the appropriate attorney or intake specialist based on case type." }, { q: "Is the AI intake system compliant with bar association rules?", a: "Yes. It includes appropriate disclaimers, avoids attorney-client relationship creation, and routes all substantive legal guidance to licensed staff." }, { q: "Can it handle intake in multiple languages?", a: "Yes. Spanish and other language support is available depending on your market — enabling you to capture leads your English-only competitors miss." }] },
  "automate-review-requests": { title: "Automate Review Requests | Build Your 5-Star Reputation | Infinite Rankers", desc: "Automated review request system sends Google review asks at the perfect moment — clients average 4.8 stars and 300% more reviews in 90 days. Free demo.", faqs: [{ q: "When is the best time to send automated review requests?", a: "Immediately after a positive service completion — within 2–4 hours. We trigger requests from your job completion status or appointment records to maximize response rates." }, { q: "Which review platforms do you target?", a: "Primarily Google (highest local SEO impact), with optional Yelp, Facebook, and industry-specific platform flows." }, { q: "What review request response rates are typical?", a: "Automated review requests achieve 15–30% response rates — significantly higher than manual asks because timing is optimized and the request is delivered via SMS for maximum visibility." }, { q: "Can the system detect unhappy customers and avoid asking them for reviews?", a: "Yes. We configure sentiment filters that identify negative feedback signals before sending the public review request — routing dissatisfied customers to a private feedback flow instead." }] },
  "book-more-estimates-with-ai": { title: "Book More Estimates with AI | Fill Your Pipeline | Infinite Rankers", desc: "AI systems that convert inquiries into booked estimates automatically — phone, SMS & web. Home services clients book 3x more estimates. Free estimate funnel audit.", faqs: [{ q: "How does AI help service businesses book more estimates?", a: "AI responds to every inquiry instantly — capturing the job details, confirming availability, and booking the estimate before the homeowner has a chance to call a competitor." }, { q: "Can it handle the back-and-forth of scheduling estimate appointments?", a: "Yes. The AI manages the full scheduling conversation — proposing times, handling objections, and confirming the appointment with reminders to reduce no-shows." }, { q: "Does it work for emergency and non-emergency estimate requests differently?", a: "Yes. Emergency requests are escalated immediately while routine estimates are scheduled efficiently within your available slots." }, { q: "Can it follow up on estimates that haven't been accepted?", a: "Yes. Automated estimate follow-up sequences check in at 24 hours, 3 days, and 7 days after sending — converting significantly more estimates into booked jobs." }] },
  "automate-front-desk-workflows": { title: "Automate Front Desk Workflows | Save 20hrs/Week | Infinite Rankers", desc: "AI front desk automation handles calls, booking, reminders & intake — replacing manual reception tasks. Clients save 20+ hours/week and miss zero leads. Free audit.", faqs: [{ q: "What front desk tasks can be fully automated with AI?", a: "Inbound call answering, appointment booking, lead qualification, reminder sending, intake form collection, FAQ responses, and routing to the right team member — all without human staff involvement." }, { q: "Will front desk automation work alongside our human receptionists?", a: "Yes. AI handles overflow calls, after-hours, and repetitive tasks — freeing your human receptionists to handle complex situations that require personal attention." }, { q: "How much time does front desk automation save per week?", a: "Most service businesses save 15–25 hours of front desk time per week — equivalent to a part-time receptionist — while increasing lead capture rates significantly." }, { q: "Is it difficult to train staff on the new automated system?", a: "No. Staff interact with a simple dashboard showing all AI-handled conversations, bookings, and escalations. Training typically takes less than 2 hours." }] },
  "improve-lead-response-time": { title: "Improve Lead Response Time | Respond in Under 60 Seconds | Infinite Rankers", desc: "AI systems that respond to every new lead in under 60 seconds — before your competitor. Businesses that respond in 1 min are 21x more likely to convert. Free audit.", faqs: [{ q: "How much does lead response time affect conversion rates?", a: "Research shows businesses that respond within 1 minute are 21x more likely to qualify a lead compared to those that respond after 30 minutes. Speed is the single biggest conversion lever." }, { q: "How does AI achieve sub-60-second lead response?", a: "The AI monitors all lead channels in real-time and triggers an immediate personalized response the moment a lead submits — no human action required." }, { q: "What channels can have sub-60-second AI response enabled?", a: "Web forms, phone calls, SMS inquiries, Facebook Lead Ads, Google Ads calls, chat widgets, and any digital channel where leads make contact with your business." }, { q: "Won't leads know they're talking to AI?", a: "Our AI communicates in a natural, conversational style that focuses on their need first. Most prospects appreciate the instant response regardless of source." }] },
};

const INDUSTRY_VERTICAL_PAGES: Record<string, {
  title: string;
  desc: string;
  serviceName: string;
  audience: string;
  areaServed: string;
  faqs: { q: string; a: string }[];
}> = {
  "dental-ai": {
    title: "AI Marketing for Dental Practices | 148% More Patients | Infinite Rankers",
    desc: "Dental AI marketing system: AI calling agent, Google Ads & appointment booking. Dental practices average 148% more new patients in 90 days. Free strategy call.",
    serviceName: "AI Marketing for Dental Practices",
    audience: "Dental practice owners and office managers in the United States",
    areaServed: "United States",
    faqs: [
      { q: "Is AI calling HIPAA-compliant for dental practices?", a: "Yes. Our AI calling and appointment booking systems are configured to meet HIPAA standards — no PHI is stored in non-compliant systems and all patient interactions follow privacy protocols." },
      { q: "How fast can a dental practice go live with AI?", a: "Most dental practices are fully live — AI receptionist, appointment booking, and Google Ads optimized — within 2–3 weeks of kickoff." },
      { q: "Will AI replace my front desk staff?", a: "No. AI handles overflow calls, after-hours inquiries, and follow-up sequences — freeing your team to deliver better in-practice service rather than replacing them." },
    ],
  },
  "hvac-ai": {
    title: "AI Marketing for HVAC & Plumbing | 190% More Leads | Infinite Rankers",
    desc: "HVAC and plumbing AI lead generation: Google Ads, AI calling & local SEO. Home services companies average 190% lead volume increase and 3.9x ROAS. Free audit.",
    serviceName: "AI Marketing for HVAC & Plumbing Companies",
    audience: "HVAC contractors, plumbers, and home services business owners in the United States",
    areaServed: "United States",
    faqs: [
      { q: "How do you target homeowners in our service area specifically?", a: "We use geo-targeted Google Ads combined with local SEO optimizations for your specific zip codes — ensuring spend is concentrated in areas your technicians actually serve." },
      { q: "Can AI handle after-hours emergency calls?", a: "Yes. The AI calling agent answers 24/7, captures job details, and can dispatch an emergency callback or book next-morning service automatically." },
      { q: "How do you generate leads during the off-season?", a: "We build preventive maintenance and tune-up campaigns that generate consistent bookings in slow months — smoothing your revenue curve year-round." },
    ],
  },
  "law-firm-ai": {
    title: "AI Marketing for Law Firms | 175% More Consultations | Infinite Rankers",
    desc: "Law firm AI client acquisition: AI receptionist, SEO & lead qualification. Law firms average 175% more qualified consultations without adding intake staff. Free audit.",
    serviceName: "AI Marketing for Law Firms",
    audience: "Law firm partners, attorneys, and legal marketing managers in the United States",
    areaServed: "United States",
    faqs: [
      { q: "Is AI intake compliant with legal ethics rules?", a: "Yes. Our AI intake system is configured to avoid creating attorney-client relationships, uses compliant disclaimers, and routes to licensed staff for all substantive legal discussion." },
      { q: "Can the AI qualify leads by practice area?", a: "Absolutely. We configure qualification logic for your specific practice areas — PI, family, criminal, immigration — routing leads to the right attorney or intake specialist." },
      { q: "How do you handle multilingual potential clients?", a: "Our AI systems support Spanish and other languages depending on your market, enabling you to capture leads your competitors miss." },
    ],
  },
  "real-estate-ai": {
    title: "AI Marketing for Real Estate | 45+ Qualified Leads/Month | Infinite Rankers",
    desc: "Real estate AI lead generation: AI qualification, Google Ads & automated follow-up. Agents and brokerages average 45+ qualified buyer & seller leads per month. Free audit.",
    serviceName: "AI Lead Generation for Real Estate Agents & Brokerages",
    audience: "Real estate agents, brokerages, and property management companies in the United States",
    areaServed: "United States",
    faqs: [
      { q: "How do you separate motivated buyers from casual browsers?", a: "Our AI qualification system scores leads across 14 behavioral and demographic signals — timeline, pre-approval status, search depth, engagement — and only routes leads meeting your threshold to agents." },
      { q: "Can you integrate with our CRM like Follow Up Boss or LionDesk?", a: "Yes. We integrate with Follow Up Boss, LionDesk, BoomTown, kvCORE, and most major real estate CRMs to ensure leads flow directly into your existing system." },
      { q: "Do you generate buyer leads, seller leads, or both?", a: "Both. We build separate campaigns targeting buyers at different funnel stages and seller leads through home valuation landing pages — each with tailored qualification flows." },
    ],
  },
  "medical-ai": {
    title: "AI Marketing for Medical Clinics | 125% Patient Growth | Infinite Rankers",
    desc: "Medical clinic AI patient acquisition: AI receptionist, Google Ads & appointment booking. Clinics average 125% new patient volume growth. HIPAA-compliant. Free audit.",
    serviceName: "AI Marketing for Medical Clinics & Healthcare Providers",
    audience: "Medical clinic owners, healthcare practice managers, and physicians in the United States",
    areaServed: "United States",
    faqs: [
      { q: "How does AI handle HIPAA compliance for patient inquiries?", a: "Our AI systems are configured to meet HIPAA standards — no PHI is transmitted through non-compliant channels, consent flows are built in, and all data handling follows healthcare privacy requirements." },
      { q: "Can AI handle insurance verification questions?", a: "Yes. The AI can answer common insurance network questions, collect insurance information for staff review, and route complex coverage questions to your billing team." },
      { q: "Will this work for specialty clinics like dermatology or orthopedics?", a: "Absolutely. We configure the AI and ad campaigns specifically for your specialty — targeting procedures, patient demographics, and search intent relevant to your services." },
    ],
  },
  "ecommerce-ai": {
    title: "AI Marketing for E-Commerce | 62% Cart Recovery | Infinite Rankers",
    desc: "E-commerce AI revenue system: Meta Ads, CRM automation & AI email sequences. Brands average 62% cart recovery rate and 180% revenue growth in 6 months. Free audit.",
    serviceName: "AI Revenue System for E-Commerce Brands",
    audience: "E-commerce store owners and DTC brand founders in the United States",
    areaServed: "United States",
    faqs: [
      { q: "Which e-commerce platforms do you work with?", a: "We integrate with Shopify, WooCommerce, BigCommerce, Magento, and custom platforms — connecting your store data to Meta Ads, email automation, and CRM for unified attribution." },
      { q: "How does AI improve cart abandonment recovery?", a: "Instead of fixed-timer emails, our AI triggers recovery sequences based on individual abandonment behavior — adjusting timing, offer, and channel (email vs SMS) dynamically to maximize conversion." },
      { q: "Can you help with Amazon or just our direct store?", a: "We focus on direct-to-consumer growth — driving traffic and revenue to your owned store — though we can advise on cross-channel strategy including Amazon brand presence." },
    ],
  },
};

const PARTNER_PAGES: Record<string, { title: string; desc: string }> = {
  "infinite-rankers-agency": { title: `Full-Service AI Marketing Agency | 4,000+ Clients | ${BRAND}`, desc: "Infinite Rankers is a full-service AI marketing agency providing automation, lead generation, and revenue growth systems for businesses across the USA." },
  "infinite-rankers-seo-services": { title: `SEO Services That Rank — 158% Avg Traffic Growth | ${BRAND}`, desc: "Professional SEO services by Infinite Rankers. We help businesses dominate Google search rankings with data-driven SEO strategies and AI-powered optimization." },
  "infinite-rankers-paid-advertising": { title: `Google & Meta Ads Management | 4-6x ROAS | ${BRAND}`, desc: "Expert paid advertising management by Infinite Rankers. Google Ads, Meta Ads, and multi-channel campaigns that maximize ROI and revenue growth." },
  "infinite-rankers-ai-automation": { title: `AI Business Automation | 30+ Intelligent Systems | ${BRAND}`, desc: "AI automation solutions by Infinite Rankers. Chatbots, calling agents, email automation, CRM systems, and workflow automation that scale your business." },
};

const SERVICE_PILLAR_SEO: Record<string, {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
  howToSteps: { name: string; text: string }[];
}> = {
  "ai-lead-capture": {
    title: "AI Lead Capture Systems | Never Miss a Lead Again | Infinite Rankers",
    description: "AI-powered lead capture across website chat, phone, SMS, and WhatsApp — routes every inquiry to your CRM within 60 seconds, 24/7. Businesses capture 40–60% more inbound leads. Free audit.",
    faqs: [
      { q: "What channels can the AI lead capture system cover?", a: "We deploy capture across website chat, phone (missed-call text-back), SMS, WhatsApp, Instagram DMs, Facebook Messenger, and contact forms — all routed into a single CRM pipeline." },
      { q: "How fast does the system respond to a new lead?", a: "Within 60 seconds or less for missed calls, and within a few seconds for website and social inquiries. Speed to lead is the #1 factor in conversion rates." },
      { q: "Does it integrate with my existing CRM?", a: "Yes. We integrate with HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho, and most other CRMs. If you don't have a CRM, we'll recommend and set one up for you." },
      { q: "Can it handle leads coming in after business hours?", a: "Yes. The AI capture systems run 24/7 with zero degradation. Every lead, regardless of time, is captured, qualified, and queued for your team." },
    ],
    howToSteps: [
      { name: "Lead Flow Audit", text: "We map every channel where leads arrive and identify where they're being lost today." },
      { name: "System Architecture", text: "We design the capture flows for web, phone, SMS, and social channels specific to your business." },
      { name: "Build & Connect", text: "We deploy the AI agents, connect your CRM, and test every capture path end-to-end." },
      { name: "Launch & Optimize", text: "We go live, monitor lead flow, and refine qualification scripts based on real data." },
    ],
  },
  "ai-appointment-agents": {
    title: "AI Appointment & Sales Agents | Book 3x More Meetings | Infinite Rankers",
    description: "AI agents that follow up within 60 seconds, qualify leads across SMS, email, and voice, and book appointments directly into your calendar — 24/7, without human intervention. Free demo.",
    faqs: [
      { q: "How does the AI appointment agent book appointments?", a: "The AI agent reaches out via SMS, email, or voice within 60 seconds of a new lead, qualifies them through conversation, and books directly into your connected calendar — no human involvement needed." },
      { q: "Can the AI handle objections during booking?", a: "Yes. We train the AI on your common objections and FAQs so it can address concerns, handle pushback, and still move toward booking completion." },
      { q: "How many follow-up attempts does the AI make?", a: "We configure multi-step sequences — typically 6–10 touchpoints across SMS, email, and voice over 5–14 days — until the lead books, opts out, or is marked lost." },
      { q: "What calendar systems does it integrate with?", a: "Google Calendar, Outlook, Calendly, Acuity, and GoHighLevel. We can also build custom integrations for industry-specific scheduling tools." },
    ],
    howToSteps: [
      { name: "Lead & Booking Audit", text: "We audit your current lead response time and booking conversion rates to find where meetings are lost." },
      { name: "Sequence Design", text: "We design multi-channel follow-up sequences: SMS, email, and voice — tuned to your specific ICP and sales cycle." },
      { name: "Build & Integrate", text: "We connect the AI to your calendar, CRM, and communication tools and test end-to-end booking flows." },
      { name: "Launch & Tune", text: "We launch, monitor booking rates, and continuously tune message sequences for higher conversion." },
    ],
  },
  "crm-pipeline-automation": {
    title: "CRM & Pipeline Automation | Self-Managing Revenue Pipeline | Infinite Rankers",
    description: "Turn your CRM into a self-managing revenue machine — automatic lead entry, deal-stage movement, tagging, and real-time reporting inside HubSpot, Salesforce, GoHighLevel, or Pipedrive. Free CRM audit.",
    faqs: [
      { q: "Which CRMs do you support for pipeline automation?", a: "We work with HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho, and most major CRMs — including custom-built solutions via API." },
      { q: "Will CRM automation break my existing workflows?", a: "No. We audit your current setup first and build automations that layer onto your existing processes without disrupting active deals or contacts." },
      { q: "How much time does CRM automation save?", a: "Most teams save 15–20 hours per week on manual data entry, follow-up tasks, and reporting — time that goes directly back to selling." },
      { q: "Can I see real-time pipeline visibility after automation?", a: "Yes. We build live dashboards showing pipeline value by stage, deal velocity, lead source ROI, and forecasted close rates — all updated automatically." },
    ],
    howToSteps: [
      { name: "CRM Audit", text: "We audit your current CRM data quality, workflow gaps, and manual processes consuming your team's time." },
      { name: "Pipeline Architecture", text: "We design the automated pipeline stages, tagging logic, and deal-movement rules specific to your sales process." },
      { name: "Build & Automate", text: "We build all workflows inside your CRM, connect data sources, and test end-to-end pipeline automation." },
      { name: "Train & Optimize", text: "We train your team on the new system and monitor data quality, pipeline velocity, and automation performance." },
    ],
  },
  "customer-support-ai": {
    title: "Customer Support & Operations AI | 24/7 Support Without Headcount | Infinite Rankers",
    description: "AI agents that resolve tier-1 support instantly, route complex cases to the right human, and reduce support tickets by 60–80% — 24/7, without adding staff. Free support audit.",
    faqs: [
      { q: "What types of support issues can the AI handle?", a: "Tier-1 support: FAQs, order status, appointment questions, account lookups, and routine troubleshooting. Complex or escalated issues are routed to a human with full context." },
      { q: "Does the AI support voice and chat?", a: "Yes. We deploy across your website chat, email inbox, phone system, WhatsApp, and SMS — wherever your customers reach out." },
      { q: "How is the AI trained on my business?", a: "We build a knowledge base from your existing documentation, SOPs, FAQs, and product/service details — and train the AI to respond as your brand would." },
      { q: "Can it escalate to a human when needed?", a: "Yes. The AI detects frustration signals and complex queries and routes to a human with full conversation context — no customer has to repeat themselves." },
    ],
    howToSteps: [
      { name: "Support Audit", text: "We analyze your top support categories, ticket volume, and current resolution times to identify AI-ready workflows." },
      { name: "Knowledge Base Build", text: "We build a comprehensive knowledge base from your documentation, FAQs, and product/service details." },
      { name: "AI Agent Deployment", text: "We deploy the AI across your chat, email, voice, and messaging channels with escalation logic configured." },
      { name: "Monitor & Improve", text: "We track resolution rates, escalation triggers, and CSAT scores and retrain the AI continuously." },
    ],
  },
  "reviews-reactivation-retention": {
    title: "Reviews, Reactivation & Retention | Turn Customers Into Revenue | Infinite Rankers",
    description: "Automated systems that generate Google reviews, reactivate cold leads with proven sequences, and bring past customers back — without manual effort. Businesses see 3–5x more reviews in 30 days. Free audit.",
    faqs: [
      { q: "When is the best time to send a review request?", a: "Typically 1–4 hours after service completion for local services, or immediately after purchase for e-commerce. We A/B test timing for each client to find the highest response rate." },
      { q: "What if a customer had a bad experience?", a: "Our system includes a satisfaction filter — customers indicating a negative experience are routed to a private feedback flow, not a public platform, giving you a chance to resolve the issue first." },
      { q: "How large does my cold lead database need to be for reactivation?", a: "Reactivation campaigns work well with as few as 200 cold leads. Even a 5–10% response rate on a database of 500 can generate significant revenue, especially for high-ticket services." },
      { q: "Does this work with Google Business Profile?", a: "Yes. We connect directly to Google and generate a specific review link for your business that makes the review process as easy as possible for customers." },
    ],
    howToSteps: [
      { name: "Reputation & Database Audit", text: "We assess your current review volume, ratings, cold lead database size, and existing retention touchpoints." },
      { name: "System Design", text: "We map the triggers for review requests, reactivation, and retention based on your service timeline and customer lifecycle." },
      { name: "Build & Launch", text: "We deploy all automation sequences, connect your CRM or job management system, and launch campaigns." },
      { name: "Monitor & Optimize", text: "We track review growth, reactivation response rates, and retention metrics and refine continuously." },
    ],
  },
  "custom-saas-tools": {
    title: "Custom SaaS & Internal Tools | Software Built for Your Workflow | Infinite Rankers",
    description: "Custom-built dashboards, internal portals, white-label tools, and mini SaaS products designed for your exact business workflow — not off-the-shelf approximations. Free consultation.",
    faqs: [
      { q: "What kinds of custom tools do you build?", a: "Custom admin dashboards, white-label client portals, internal automation tools, industry-specific CRM builds, reporting platforms, and full mini SaaS products with user auth and billing." },
      { q: "How long does it take to build a custom tool?", a: "Simple dashboards and internal tools typically take 2–4 weeks. More complex SaaS products with multi-user auth, billing, and API integrations typically take 6–12 weeks." },
      { q: "What technologies do you use?", a: "We build primarily with React, TypeScript, Node.js, and PostgreSQL — with integrations to your existing stack via REST API, webhooks, or native connectors." },
      { q: "Do you provide ongoing maintenance?", a: "Yes. We offer maintenance and hosting packages to keep your tool running, secure, and updated as your business needs evolve." },
    ],
    howToSteps: [
      { name: "Discovery & Scoping", text: "We map your exact workflow needs, user roles, and integration requirements through a structured discovery process." },
      { name: "Design & Architecture", text: "We design the data model, user flows, and UI architecture before writing a single line of code." },
      { name: "Build & Integrate", text: "We build iteratively with regular demos, connecting your tool to your existing stack at each milestone." },
      { name: "Launch & Support", text: "We handle deployment, training, and provide ongoing support and feature development as your needs evolve." },
    ],
  },
  "revenue-automation-consulting": {
    title: "Revenue Automation Consulting | AI Strategy & Implementation Roadmap | Infinite Rankers",
    description: "Strategic consulting that audits your revenue gaps, prioritizes high-ROI automation, and builds a 90-day AI implementation roadmap — so you invest in systems that actually move the needle. Free strategy call.",
    faqs: [
      { q: "What does a revenue automation consulting engagement include?", a: "A full audit of your lead flow, follow-up processes, CRM, and tech stack — followed by a prioritized 90-day implementation roadmap that identifies the highest-ROI automation opportunities specific to your business." },
      { q: "How long does the consulting engagement take?", a: "Initial strategy sessions are typically 2–3 hours. Full audit and roadmap delivery takes 1–2 weeks depending on business complexity." },
      { q: "Do you implement the automation after consulting?", a: "Yes. Most consulting clients move into a full implementation engagement with Infinite Rankers after the strategy phase — with the roadmap as the guide." },
      { q: "Who is this consulting service right for?", a: "Growth-stage businesses unsure where AI will move the needle, teams burned by past automation investments, and any leadership team that wants strategy before spending on implementation." },
    ],
    howToSteps: [
      { name: "Revenue Gap Audit", text: "We audit your full revenue flow — lead sources, response processes, CRM, pipeline, and retention — to identify where money is being lost." },
      { name: "Automation Prioritization", text: "We score every automation opportunity by ROI potential, implementation complexity, and time-to-value to build your priority stack." },
      { name: "Roadmap Delivery", text: "We deliver a 90-day implementation roadmap with specific systems, tools, costs, and expected outcomes for each initiative." },
      { name: "Implementation Kickoff", text: "We transition into implementation — building and deploying each system in priority order with clear milestones and accountability." },
    ],
  },
};

const STATIC_PAGES: Record<string, SEOMeta> = {
  "/": { title: "Infinite Rankers | AI Revenue Systems Agency — Build & Deploy AI That Grows Revenue", description: "Infinite Rankers builds and deploys AI Revenue Systems — lead capture, appointment agents, CRM automation, customer support AI, and custom SaaS tools for USA businesses. Google Partner. Free strategy call.", canonical: `${BASE}/` },
  "/about": { title: `About Infinite Rankers LLC | AI Revenue Systems Agency USA`, description: "Infinite Rankers LLC is a Delaware-registered AI Revenue Systems Agency. We build and deploy AI-powered lead capture, appointment booking, CRM automation, and customer support systems for USA businesses.", canonical: `${BASE}/about` },
  "/services": { title: "7 AI Revenue Systems | Full-Stack Automation Services | Infinite Rankers", description: "Explore Infinite Rankers' 7 AI Revenue Systems: lead capture, appointment agents, CRM automation, customer support AI, reviews & retention, custom SaaS tools, and revenue consulting.", canonical: `${BASE}/services` },
  "/portfolio": { title: `21 Client Case Studies — Real Proven Results | ${BRAND}`, description: "Real results from real businesses. 21 case studies showing 100-195% revenue growth across healthcare, real estate, law firms & e-commerce. See proof.", canonical: `${BASE}/portfolio` },
  "/pricing": { title: `Pricing Plans from $1,599/mo | No Hidden Fees | ${BRAND}`, description: "Transparent pricing with no contracts or hidden fees. Growth, Scale & Enterprise plans. Calculate your ROI before you buy. Book a free consultation.", canonical: `${BASE}/pricing` },
  "/contact": { title: `Contact Us — Get a Free Strategy Call | ${BRAND}`, description: "Book a free 30-minute strategy call with our AI marketing experts. No pitch — just a custom growth plan. We respond within 1 business hour.", canonical: `${BASE}/contact` },
  "/blog": { title: `AI Marketing & Automation Blog | ${BRAND}`, description: "Actionable insights on AI automation, SEO, Google Ads, lead generation & digital marketing. Updated weekly with tactics that drive real revenue growth.", canonical: `${BASE}/blog` },
  "/book-demo": { title: `Book Your Free 30-Min Strategy Call | ${BRAND}`, description: "See exactly how AI automation can grow your business. Get a custom growth plan, live demo & ROI projection — completely free. Book your slot today.", canonical: `${BASE}/book-demo` },
  "/sitemap": { title: `Sitemap - ${BRAND}`, description: "Browse all pages on infiniterankers.io — AI marketing services, blog posts, case studies, and landing pages.", canonical: `${BASE}/sitemap` },
  "/roi-calculator": { title: `AI Revenue ROI Calculator — Estimate Your Revenue Uplift | ${BRAND}`, description: "Calculate how much revenue you're losing to missed leads and slow follow-up — and how much AI automation can recover. Free, instant estimate.", canonical: `${BASE}/roi-calculator` },
  "/content-methodology": { title: `How We Create Content - ${BRAND}`, description: "Learn how Infinite Rankers creates and reviews content using expert research, editorial checks, and responsible AI assistance.", canonical: `${BASE}/content-methodology` },
  "/terms": { title: `Terms of Service - ${BRAND}`, description: "Terms of Service for Infinite Rankers AI Revenue Growth Agency. Read our terms governing use of infiniterankers.io.", canonical: `${BASE}/terms` },
  "/privacy": { title: `Privacy Policy - ${BRAND}`, description: "Privacy Policy for Infinite Rankers. Learn how we collect, use, and protect your data.", canonical: `${BASE}/privacy` },
  "/google-partner": { title: "Google Partner Agency USA | Certified Google Ads Expert | Infinite Rankers", description: "Infinite Rankers is a certified Google Partner agency. Expert Google Ads management with exclusive tools access.", canonical: `${BASE}/google-partner` },

  // 7 AI Revenue System pillar pages
  "/ai-lead-capture": { title: SERVICE_PILLAR_SEO["ai-lead-capture"].title, description: SERVICE_PILLAR_SEO["ai-lead-capture"].description, canonical: `${BASE}/ai-lead-capture` },
  "/ai-appointment-agents": { title: SERVICE_PILLAR_SEO["ai-appointment-agents"].title, description: SERVICE_PILLAR_SEO["ai-appointment-agents"].description, canonical: `${BASE}/ai-appointment-agents` },
  "/crm-pipeline-automation": { title: SERVICE_PILLAR_SEO["crm-pipeline-automation"].title, description: SERVICE_PILLAR_SEO["crm-pipeline-automation"].description, canonical: `${BASE}/crm-pipeline-automation` },
  "/customer-support-ai": { title: SERVICE_PILLAR_SEO["customer-support-ai"].title, description: SERVICE_PILLAR_SEO["customer-support-ai"].description, canonical: `${BASE}/customer-support-ai` },
  "/reviews-reactivation-retention": { title: SERVICE_PILLAR_SEO["reviews-reactivation-retention"].title, description: SERVICE_PILLAR_SEO["reviews-reactivation-retention"].description, canonical: `${BASE}/reviews-reactivation-retention` },
  "/custom-saas-tools": { title: SERVICE_PILLAR_SEO["custom-saas-tools"].title, description: SERVICE_PILLAR_SEO["custom-saas-tools"].description, canonical: `${BASE}/custom-saas-tools` },
  "/revenue-automation-consulting": { title: SERVICE_PILLAR_SEO["revenue-automation-consulting"].title, description: SERVICE_PILLAR_SEO["revenue-automation-consulting"].description, canonical: `${BASE}/revenue-automation-consulting` },

  // Service pages
  "/workflow-automation": { title: "Workflow Automation Services | Save 20hrs/Week | Infinite Rankers", description: "Complete workflow automation using n8n, Make.com, Zapier. Automate repetitive tasks and save 20+ hours per week.", canonical: `${BASE}/workflow-automation` },
  "/saas-integrations": { title: "SaaS Integrations & API Connections | Infinite Rankers", description: "Connect your business tools: CRM, email, ads, analytics. Expert SaaS integration services for USA businesses.", canonical: `${BASE}/saas-integrations` },
  "/video-marketing": { title: "Video Marketing Services USA | YouTube & Social | Infinite Rankers", description: "Professional video marketing for YouTube, Instagram, TikTok. Strategy, production, distribution for USA businesses.", canonical: `${BASE}/video-marketing` },
  "/facebook-growth": { title: "Facebook Marketing & Growth Services | Infinite Rankers", description: "Organic and paid Facebook marketing that builds brand authority and generates qualified leads for USA businesses.", canonical: `${BASE}/facebook-growth` },
  "/local-seo": { title: "Local SEO Services USA | Google Maps Rankings | Infinite Rankers", description: "Expert local SEO services ranking businesses in Google Maps and local search. 300+ businesses in top 3.", canonical: `${BASE}/local-seo` },
  "/seo-authority": { title: "SEO Authority Building | Domain Authority Growth | Infinite Rankers", description: "Build domain authority through strategic link building, content marketing, and technical SEO optimization.", canonical: `${BASE}/seo-authority` },
  "/conversion-funnels": { title: "Conversion Funnel Optimization | 2x More Sales | Infinite Rankers", description: "Build high-converting sales funnels with AI optimization. Landing pages, email sequences, retargeting.", canonical: `${BASE}/conversion-funnels` },
  "/analytics-dashboard": { title: "Marketing Analytics Dashboard | Real-Time Reporting | Infinite Rankers", description: "Custom marketing analytics dashboards showing real-time performance across all channels. Data-driven decisions.", canonical: `${BASE}/analytics-dashboard` },
  "/branding-design": { title: "Branding & Design Services | Visual Identity | Infinite Rankers", description: "Complete branding and design services. Logo design, brand guidelines, marketing materials for USA businesses.", canonical: `${BASE}/branding-design` },

};

export function getSEOForRoute(url: string): SEOMeta | null {
  const path = url.split("?")[0].split("#")[0];

  if (STATIC_PAGES[path]) {
    return STATIC_PAGES[path];
  }

  const slug = path.replace(/^\//, "");

  if (LANDING_PAGES[slug]) {
    const lp = LANDING_PAGES[slug];
    return {
      title: lp.title,
      description: lp.desc,
      canonical: `${BASE}/${slug}`,
    };
  }

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

  if (INDUSTRY_VERTICAL_PAGES[slug]) {
    const iv = INDUSTRY_VERTICAL_PAGES[slug];
    return {
      title: iv.title,
      description: iv.desc,
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
  const isCase = !!CASE_STUDIES[slug] || slug.startsWith("case-study-");

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

function getStructuredData(url: string, seo: SEOMeta): object[] {
  const path = url.split("?")[0].split("#")[0];
  const BASE_URL = "https://infiniterankers.io";
  const ORG_SCHEMA = {
    "@type": ["Organization", "LocalBusiness"],
    "name": "Infinite Rankers",
    "legalName": "Infinite Rankers LLC",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "description": "AI Revenue Systems Agency that builds and deploys AI-powered lead capture, appointment agents, CRM automation, customer support AI, and custom SaaS tools for businesses across the USA.",
    "sameAs": [
      "https://www.linkedin.com/company/infinite-rankers",
      "https://www.facebook.com/infiniterankers"
    ],
    "address": { "@type": "PostalAddress", "streetAddress": "203 N Caroline Pl", "addressLocality": "Dover", "addressRegion": "DE", "postalCode": "19904", "addressCountry": "US" },
    "telephone": "(703) 415-9373",
    "email": "contact@infiniterankers.io",
    "contactPoint": { "@type": "ContactPoint", "telephone": "(703) 415-9373", "contactType": "sales", "email": "contact@infiniterankers.io", "availableLanguage": ["English"], "areaServed": "US" },
    "areaServed": { "@type": "Country", "name": "United States" }
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
      "inLanguage": "en-US",
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
      "description": "AI Revenue Systems Agency that builds and deploys AI-powered lead capture, appointment agents, CRM automation, customer support AI, and custom SaaS tools for businesses across the USA.",
      "url": BASE_URL,
      "inLanguage": "en-US",
      "logo": `${BASE_URL}/images/logo-full.png`,
      "image": `${BASE_URL}/images/logo-full.png`,
      "telephone": "(703) 415-9373",
      "email": "contact@infiniterankers.io",
      "address": { "@type": "PostalAddress", "streetAddress": "203 N Caroline Pl", "addressLocality": "Dover", "addressRegion": "DE", "postalCode": "19904", "addressCountry": "US" },
      "geo": { "@type": "GeoCoordinates", "latitude": "39.1582", "longitude": "-75.5244" },
      "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
      "priceRange": "$$$",
      "areaServed": { "@type": "Country", "name": "United States" },
      "hasOfferCatalog": { "@type": "OfferCatalog", "name": "AI Revenue Systems", "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Lead Capture Systems", "url": `${BASE_URL}/ai-lead-capture` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Appointment & Sales Agents", "url": `${BASE_URL}/ai-appointment-agents` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & Pipeline Automation", "url": `${BASE_URL}/crm-pipeline-automation` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Support & Operations AI", "url": `${BASE_URL}/customer-support-ai` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reviews, Reactivation & Retention", "url": `${BASE_URL}/reviews-reactivation-retention` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom SaaS & Internal Tools", "url": `${BASE_URL}/custom-saas-tools` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revenue Automation Consulting", "url": `${BASE_URL}/revenue-automation-consulting` } }
      ]},
      "sameAs": ["https://www.linkedin.com/company/infinite-rankers", "https://www.facebook.com/infiniterankers"],
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
    return [mainSchema, LOCAL_BUSINESS_SCHEMA, SPEAKABLE_SCHEMA, SITE_NAV_SCHEMA];
  }

  const ssSlug = path.replace(/^\//, "");
  const isPillarPage = ssSlug in SERVICE_PILLAR_SEO;
  const isServicePage = SERVICES.some(s => s.slug === ssSlug);
  const isBlogPage = BLOG_POSTS.some(b => b.slug === ssSlug);
  const isCasePage = !!CASE_STUDIES[ssSlug];

  if (isPillarPage) {
    const pillarData = SERVICE_PILLAR_SEO[ssSlug];
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": pillarData.title.replace(" | Infinite Rankers", "").replace(/ \|.*$/, ""),
      "description": pillarData.description,
      "url": seo.canonical,
      "inLanguage": "en-US",
      "provider": ORG_SCHEMA,
      "areaServed": { "@type": "Country", "name": "United States" },
      "audience": [
        { "@type": "BusinessAudience", "name": "Enterprise companies in the USA" },
        { "@type": "BusinessAudience", "name": "Small and mid-size businesses in the USA" }
      ],
      "serviceType": "AI Revenue Automation",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "USD", "url": `${BASE_URL}/pricing` }
    };
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How ${pillarData.title.replace(" | Infinite Rankers", "").replace(/ \|.*$/, "")} Works`,
      "description": pillarData.description,
      "step": pillarData.howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": s.name,
        "text": s.text
      }))
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pillarData.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".hero-headline", ".hero-subheadline", ".pillar-description"]
      },
      "publisher": { ...ORG_SCHEMA, "@context": undefined }
    };
    return [webPageSchema, serviceSchema, howToSchema, faqSchema, breadcrumb, SITE_NAV_SCHEMA];
  }

  if (isServicePage) {
    const serviceName = seo.title.replace(" - Infinite Rankers", "");
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": seo.description,
      "url": seo.canonical,
      "inLanguage": "en-US",
      "provider": ORG_SCHEMA,
      "areaServed": { "@type": "Country", "name": "United States" },
      "audience": [
        { "@type": "BusinessAudience", "name": "Enterprise companies in the USA" },
        { "@type": "BusinessAudience", "name": "Local businesses in the USA" }
      ],
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
    const parts: object[] = [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
    if (faqSchema) parts.push(faqSchema);
    return parts;
  }

  if (isBlogPage) {
    const blogMeta = BLOG_POSTS.find(b => b.slug === ssSlug);
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": seo.title.replace(" | Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "inLanguage": "en-US",
      "image": `${BASE_URL}/images/logo-full.png`,
      "publisher": { ...ORG_SCHEMA, "@context": undefined },
      "author": { "@type": "Organization", "name": "Infinite Rankers", "legalName": "Infinite Rankers LLC", "url": BASE_URL },
      "about": [
        "AI automation for business growth",
        "SEO and paid media strategy",
        "USA enterprise and local business marketing"
      ],
      "keywords": blogMeta ? `${blogMeta.slug.replace(/-/g, ", ")}, USA marketing, enterprise growth, local business growth` : "USA marketing, AI automation",
      "datePublished": "2025-01-15",
      "dateModified": new Date().toISOString().split("T")[0],
      "mainEntityOfPage": { "@type": "WebPage", "@id": seo.canonical }
    };
    return [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
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
    return [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
  }

  if (path === "/services") {
    const serviceListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Infinite Rankers AI Revenue Systems",
      "description": "7 AI Revenue Systems built to automate lead capture, appointments, CRM, support, retention, custom tools, and strategy for USA businesses.",
      "numberOfItems": 7,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "AI Lead Capture Systems", "url": `${BASE_URL}/ai-lead-capture`, "description": "Capture every lead automatically across website, phone, SMS, and WhatsApp — 24/7." },
        { "@type": "ListItem", "position": 2, "name": "AI Appointment & Sales Agents", "url": `${BASE_URL}/ai-appointment-agents`, "description": "AI agents that book 3x more appointments without human involvement." },
        { "@type": "ListItem", "position": 3, "name": "CRM & Pipeline Automation", "url": `${BASE_URL}/crm-pipeline-automation`, "description": "Self-managing revenue pipeline with automatic lead entry and deal movement." },
        { "@type": "ListItem", "position": 4, "name": "Customer Support & Operations AI", "url": `${BASE_URL}/customer-support-ai`, "description": "24/7 AI support agents that resolve tier-1 issues without adding headcount." },
        { "@type": "ListItem", "position": 5, "name": "Reviews, Reactivation & Retention", "url": `${BASE_URL}/reviews-reactivation-retention`, "description": "Automated systems to generate reviews, reactivate cold leads, and retain customers." },
        { "@type": "ListItem", "position": 6, "name": "Custom SaaS & Internal Tools", "url": `${BASE_URL}/custom-saas-tools`, "description": "Custom dashboards, portals, and mini SaaS products built for your exact workflow." },
        { "@type": "ListItem", "position": 7, "name": "Revenue Automation Consulting", "url": `${BASE_URL}/revenue-automation-consulting`, "description": "Strategic audit and 90-day AI implementation roadmap for highest-ROI automation." }
      ]
    };
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "publisher": { ...ORG_SCHEMA, "@context": undefined }
    };
    return [mainSchema, serviceListSchema, breadcrumb, SITE_NAV_SCHEMA];
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
    return [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
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
    return [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
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
    return [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
  }

  const ivData = INDUSTRY_VERTICAL_PAGES[ssSlug];
  if (ivData) {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "publisher": ORG_SCHEMA
    };
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": ivData.serviceName,
      "description": seo.description,
      "url": seo.canonical,
      "provider": ORG_SCHEMA,
      "areaServed": {
        "@type": "Country",
        "name": ivData.areaServed
      },
      "audience": {
        "@type": "Audience",
        "audienceType": ivData.audience
      }
    };
    const parts: object[] = [mainSchema, serviceSchema, breadcrumb, SITE_NAV_SCHEMA];
    if (ivData.faqs?.length) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": ivData.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      };
      parts.push(faqSchema);
    }
    return parts;
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
    const parts: object[] = [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
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
      parts.push(faqSchema);
    }
    return parts;
  }

  mainSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seo.title,
    "description": seo.description,
    "url": seo.canonical,
    "publisher": ORG_SCHEMA
  };
  return [mainSchema, breadcrumb, SITE_NAV_SCHEMA];
}

export function injectSEO(html: string, url: string): string {
  const seo = getSEOForRoute(url);
  if (!seo) return html;

  const headEnd = html.indexOf("</head>");
  if (headEnd === -1) return html;
  const headOpenMatch = html.match(/<head[^>]*>/i);

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

  const noindexPaths = [
    "/crawl-hub",
    "/ai-automation-new-york",
    "/ai-automation-los-angeles",
    "/ai-automation-chicago",
    "/ai-revenue-growth-real-estate",
    "/ai-revenue-growth-healthcare",
    "/ai-revenue-growth-law-firms",
    "/ai-revenue-growth-ecommerce",
    "/ai-revenue-growth-restaurants",
    // Old SEO-era blog posts intentionally noindexed (thin/off-brand content)
    "/content-marketing-seo-guide",
    "/local-business-digital-marketing",
    "/seo-vs-paid-ads-strategy",
    "/social-media-marketing-strategy-2025",
    "/brand-identity-business-growth",
  ];
  const urlPath = url.split("?")[0];
  const isAdminPath = urlPath.startsWith("/admin");
  if (noindexPaths.includes(urlPath) || isAdminPath) {
    extraTags.push(`<meta name="robots" content="noindex, follow" />`);
  } else if (!result.includes('name="robots"')) {
    extraTags.push(`<meta name="robots" content="index, follow" />`);
  }
  if (!/property="og:type"/.test(result)) {
    extraTags.push(`<meta property="og:type" content="website" />`);
  }
  if (!/property="og:site_name"/.test(result)) {
    extraTags.push(`<meta property="og:site_name" content="Infinite Rankers" />`);
  }
  extraTags.push(`<meta property="og:image" content="${BASE}/images/logo-full.png" />`);
  extraTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  extraTags.push(`<meta name="twitter:site" content="@infiniterankers" />`);
  extraTags.push(`<meta name="twitter:creator" content="@infiniterankers" />`);
  extraTags.push(`<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`);
  extraTags.push(`<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`);
  extraTags.push(`<link rel="alternate" type="application/rss+xml" title="Infinite Rankers Blog" href="${BASE}/rss.xml" />`);

  const jsonLdBlocks = getStructuredData(url, seo);
  for (const block of jsonLdBlocks) {
    extraTags.push(`<script type="application/ld+json">${JSON.stringify(block)}</script>`);
  }

  if (extraTags.length > 0) {
    const insertion = extraTags.map(t => `    ${t}`).join("\n");
    if (headOpenMatch) {
      const headOpenTag = headOpenMatch[0];
      result = result.replace(headOpenTag, `${headOpenTag}\n${insertion}`);
    } else {
      result = result.replace("</head>", `${insertion}\n  </head>`);
    }
  }

  return result;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
