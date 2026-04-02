const BASE = "https://infiniterankers.io";
const BRAND = "Infinite Rankers";

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SERVICES = [
  { slug: "ai-calling-agent", title: "AI Calling Agent", desc: "AI calling agent handles inbound and outbound calls 24/7 — qualifying leads and booking appointments without manual dialing. Integrates with your CRM. Free demo.", faqs: [{ q: "Does the AI calling agent sound robotic?", a: "No. Our AI uses advanced natural language processing to deliver human-like conversations with natural pauses, tone variation, and contextual responses that callers rarely distinguish from a live rep." }, { q: "How many calls can the AI agent handle simultaneously?", a: "There is no practical limit. The AI handles hundreds of concurrent calls ensuring you never miss an opportunity during peak hours or after hours." }, { q: "What is the typical deployment timeline?", a: "Most clients are live within 5–7 business days including CRM integration, script configuration, and test call approval." }] },
  { slug: "ai-receptionist", title: "AI Receptionist", desc: "AI receptionist answers every inbound call within one ring — 24/7 — qualifying leads, answering FAQs, and routing to the right team member. Free demo.", faqs: [{ q: "Can the AI receptionist handle after-hours calls?", a: "Yes. It operates 24/7 with zero degradation in call quality, routing after-hours calls or taking detailed messages with priority flagging." }, { q: "How does it route calls to the right department?", a: "It uses intelligent routing logic based on caller intent, keywords, caller history, and configurable rules — including warm transfer with context." }, { q: "Can it schedule appointments directly?", a: "Yes. It integrates with your calendar system to book, reschedule, and confirm appointments in real-time during the call." }] },
  { slug: "ai-lead-qualification", title: "AI Lead Qualification Bot", desc: "AI lead qualification bot scores every prospect in real-time using behavioral, demographic, and intent signals — so your sales team only talks to buyers.", faqs: [{ q: "How does the AI qualify leads?", a: "It scores leads across multiple signals simultaneously — form behavior, engagement depth, demographics, and intent — then only passes those meeting your defined threshold to sales." }, { q: "Can I customize the qualification criteria?", a: "Yes. We build scoring models around your specific ICP, product, and pipeline stage requirements. Criteria can be updated anytime." }, { q: "Does it integrate with my CRM?", a: "Yes. Qualified leads are automatically synced to your CRM with full scoring data, segment tags, and priority flags." }] },
  { slug: "ai-appointment-booking", title: "AI Appointment Booking System", desc: "AI appointment booking fills your calendar with qualified meetings via conversational AI across phone, chat, and SMS. Reduces no-shows by 40%+ with. Free demo.", faqs: [{ q: "Does it sync with my existing calendar?", a: "Yes. It syncs in real-time with Google Calendar, Outlook, Calendly, and all major scheduling platforms across your entire team." }, { q: "Can it handle rescheduling and cancellations?", a: "Yes. The AI manages the full appointment lifecycle — confirmations, reminders (24hr + 2hr), rescheduling, and cancellation with waitlist backfill." }, { q: "How quickly can it be deployed?", a: "Most clients are live within 5 business days including calendar integration, booking flow configuration, and reminder sequence setup." }] },
  { slug: "ai-follow-up", title: "AI Follow-Up Automation", desc: "AI follow-up automation responds to every new lead within seconds and nurtures them across email, SMS, and voice until they book or opt out. Clients. Free demo.", faqs: [{ q: "How quickly does the AI follow up with leads?", a: "Instantly — within seconds of lead submission. The speed advantage alone recovers deals that would otherwise go to a faster-responding competitor." }, { q: "What channels does it use for follow-up?", a: "Email, SMS, voice calls, and messaging apps — all coordinated in a single intelligent sequence with behavioral branching." }, { q: "Can I customize the follow-up sequences?", a: "Yes. You control message content, channel order, timing intervals, and escalation rules. We build from your existing sales playbook." }] },
  { slug: "ai-sales-assistant", title: "AI Sales Assistant", desc: "Give your sales team an AI assistant that handles research, proposals & follow-ups. Teams using it close 40% more deals without adding headcount. Free trial.", faqs: [{ q: "Does the AI replace my sales team?", a: "No. It augments your team by handling research, follow-ups, and data entry so they focus on closing." }, { q: "Can it generate proposals and quotes?", a: "Yes. It can draft proposals, quotes, and follow-up emails based on conversation context." }, { q: "How does it learn my sales process?", a: "We train it on your sales playbook, objection handling, and winning patterns." }] },
  { slug: "ai-chatbot", title: "AI Chatbot", desc: "AI chatbot trained on your business — deployed on your website, WhatsApp, and Messenger — to capture leads, answer FAQs, and book meetings around. Free demo.", faqs: [{ q: "Which platforms does the AI chatbot support?", a: "We deploy on your website (as a widget), WhatsApp Business, Facebook Messenger, and Instagram DMs. All conversations sync to your CRM for unified tracking." }, { q: "Can the chatbot handle complex or multi-step conversations?", a: "Yes. The chatbot uses advanced NLP to understand context across multi-turn conversations — handling objections, recommending services, and qualifying leads before handing off to your team." }, { q: "How long does setup take?", a: "Most chatbots are live within 5–7 business days including knowledge base training, conversation flow design, platform integration, and test conversation approval." }] },
  { slug: "ai-email-automation", title: "AI Email Automation", desc: "AI email sequences that adapt to each prospect's behavior and maximize replies. Clients see 3-5x higher response rates vs manual campaigns. Free audit.", faqs: [{ q: "How does AI improve email campaigns?", a: "AI optimizes subject lines, send times, content, and follow-up triggers based on recipient behavior." }, { q: "Can it personalize emails at scale?", a: "Yes. Each email is dynamically personalized using prospect data and behavioral signals." }, { q: "What email platforms do you integrate with?", a: "We integrate with all major ESPs including Mailchimp, ActiveCampaign, HubSpot, and more." }] },
  { slug: "ai-sms-automation", title: "AI SMS Automation", desc: "High-response SMS campaigns powered by AI for instant engagement. Free demo.", faqs: [{ q: "Is SMS marketing still effective?", a: "Yes. SMS has 98% open rates and 45% response rates — far higher than email." }, { q: "Is it compliant with regulations?", a: "Yes. We ensure full TCPA compliance with opt-in/opt-out management." }, { q: "Can it handle two-way conversations?", a: "Yes. The AI manages intelligent two-way SMS conversations." }] },
  { slug: "crm-automation", title: "CRM Automation", desc: "CRM automation eliminates manual data entry and pipeline management — auto-routing leads, triggering follow-ups, and updating deal stages inside. Free demo.", faqs: [{ q: "Which CRMs do you support?", a: "We work with Salesforce, HubSpot, Zoho, Pipedrive, GoHighLevel, and most major CRMs — including custom-built solutions via API." }, { q: "Will automation break my existing workflows?", a: "No. We audit your current setup first and build automations that layer onto your existing processes without disrupting active deals or contacts." }, { q: "How much time does CRM automation save?", a: "Most teams save 15-20 hours per week on manual data entry, follow-up tasks, and reporting — time that goes directly back to selling." }] },
  { slug: "workflow-automation", title: "Workflow Automation", desc: "Connect and automate every tool in your sales and marketing stack. Free demo.", faqs: [{ q: "How many tools can you connect?", a: "We integrate with 5,000+ apps through native integrations and automation platforms." }, { q: "Do I need technical knowledge?", a: "No. We handle all the technical setup, testing, and maintenance." }, { q: "What ROI can I expect?", a: "Most clients see 3-5x ROI within the first 90 days through time savings and increased efficiency." }] },
  { slug: "google-ads", title: "Google Ads Revenue Engine", desc: "Google Ads management engineered for revenue, not impressions — AI-optimized bidding, high-intent keyword targeting, and conversion tracking built. Free demo.", faqs: [{ q: "What ROAS can I expect from Google Ads?", a: "Our clients typically achieve 4–6x ROAS within the first 90 days. We optimize for revenue-generating conversions, not vanity metrics like clicks or impressions." }, { q: "What is the minimum ad spend required?", a: "We recommend a minimum of $2,000/month in ad spend for meaningful, statistically significant results across your target keywords." }, { q: "What is included in your Google Ads management?", a: "Keyword research, campaign structure, ad copywriting, bid strategy, negative keyword management, conversion tracking setup, landing page recommendations, and monthly reporting." }] },
  { slug: "meta-ads", title: "Meta Ads Growth Engine", desc: "Facebook and Instagram ad campaigns built around audience-first creative and full-funnel targeting — from cold awareness to retargeting conversions. Free demo.", faqs: [{ q: "Are Facebook ads still effective in 2025?", a: "Yes. Meta platforms reach 3.7 billion users and remain the most cost-effective channel for B2C lead generation, e-commerce, and local service businesses." }, { q: "What types of businesses benefit most from Meta Ads?", a: "Local services, e-commerce, SaaS, healthcare, real estate, coaching, and any B2C business where visual storytelling and audience targeting drive acquisition." }, { q: "Do you handle creative production and ad copy?", a: "Yes. We create all ad creatives, copy, and landing pages as part of the service — no external agency or designer needed." }] },
  { slug: "seo-authority", title: "SEO Authority Growth System", desc: "SEO strategy built to earn topical authority, fix technical foundations, and acquire links that move rankings — not just traffic. 90%+ of clients reach.", faqs: [{ q: "How long does SEO take to show results?", a: "Most clients see meaningful ranking movement within 3–4 months and page-1 positioning for primary keywords within 6 months, depending on competition." }, { q: "What is included in your SEO authority system?", a: "Full technical audit and remediation, keyword strategy, on-page optimization, topical content creation, link acquisition, and monthly reporting with keyword rank tracking." }, { q: "Do you guarantee first-page rankings?", a: "We do not guarantee specific positions — no ethical agency can. Our track record shows 90%+ of clients achieve page-one rankings for their target keywords within 6 months." }] },
  { slug: "local-seo", title: "Local SEO & Google Business", desc: "Dominate local search and Google Maps. We optimize your Google Business Profile and build local citations that drive foot traffic and calls. Free audit.", faqs: [{ q: "How important is Google Business Profile?", a: "Critical. 46% of all Google searches are looking for local information, and GBP is the primary driver." }, { q: "Can you help with review management?", a: "Yes. We implement review generation systems and manage your online reputation." }, { q: "Do you optimize for map pack results?", a: "Yes. Map pack optimization is a core part of our local SEO strategy." }] },
  { slug: "conversion-funnels", title: "Conversion Funnel Building", desc: "Multi-step funnels designed to turn cold traffic into paying customers. Free demo.", faqs: [{ q: "What conversion rates can I expect?", a: "Our funnels typically achieve 15-35% opt-in rates and 3-8% purchase conversion rates." }, { q: "How many funnel stages do you build?", a: "We build complete funnels from awareness to purchase, typically 4-7 stages." }, { q: "Do you A/B test the funnels?", a: "Yes. Continuous testing and optimization is built into every funnel." }] },
  { slug: "landing-page-optimization", title: "Landing Page Optimization", desc: "High-converting landing pages that turn visitors into leads and revenue. Free demo.", faqs: [{ q: "What makes a high-converting landing page?", a: "Clear value proposition, strong CTA, social proof, fast load times, and mobile optimization." }, { q: "How much can conversion rates improve?", a: "We typically achieve 50-200% improvement in conversion rates through optimization." }, { q: "Do you provide ongoing optimization?", a: "Yes. We continuously test and improve landing pages based on data." }] },
  { slug: "conversion-rate-optimization", title: "Conversion Rate Optimization", desc: "Data-backed testing and optimization to maximize every visitor's value. Free demo.", faqs: [{ q: "How do you test changes?", a: "We use A/B testing, multivariate testing, and user behavior analysis to validate improvements." }, { q: "What tools do you use for CRO?", a: "Google Optimize, Hotjar, Crazy Egg, and proprietary AI analysis tools." }, { q: "How long does a CRO program take?", a: "CRO is ongoing, but most clients see significant improvements within 60-90 days." }] },
  { slug: "social-media-marketing", title: "Social Media Marketing", desc: "Strategic social presence across platforms to build brand authority. Free demo.", faqs: [{ q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and YouTube." }, { q: "How often do you post?", a: "We typically create 12-20 posts per month across platforms, customized to your strategy." }, { q: "Do you handle community management?", a: "Yes. We manage comments, DMs, and community engagement as part of our service." }] },
  { slug: "instagram-growth", title: "Instagram Growth & Posting", desc: "Consistent, engaging Instagram content that grows your audience organically. Free demo.", faqs: [{ q: "How fast can I grow my Instagram?", a: "Most clients see 500-2,000 new targeted followers per month through organic strategies." }, { q: "Do you create all the content?", a: "Yes. We handle content creation, scheduling, hashtag strategy, and engagement." }, { q: "Do you use bots or fake followers?", a: "Never. We only use organic growth strategies that build real, engaged audiences." }] },
  { slug: "facebook-growth", title: "Facebook Growth & Posting", desc: "Facebook content strategy that builds community and drives leads.", faqs: [{ q: "Is Facebook still relevant for business?", a: "Yes. Facebook has 3 billion users and remains the largest social platform for business." }, { q: "Do you manage Facebook Groups?", a: "Yes. We can create and manage branded Facebook Groups to build community." }, { q: "How do you measure Facebook ROI?", a: "We track engagement, reach, lead generation, and revenue attribution from Facebook." }] },
  { slug: "content-writing", title: "Content Writing & Strategy", desc: "Authority-building content that positions you as the industry leader. Free demo.", faqs: [{ q: "What types of content do you create?", a: "Blog posts, articles, whitepapers, case studies, email copy, and social media content." }, { q: "How do you ensure content quality?", a: "Every piece goes through research, writing, editing, and SEO optimization before publishing." }, { q: "Can you write for technical industries?", a: "Yes. Our writers specialize in various industries including tech, healthcare, legal, and finance." }] },
  { slug: "branding-design", title: "Branding & Creative Design", desc: "Premium brand identity that commands trust and recognition. Free demo.", faqs: [{ q: "What's included in a branding package?", a: "Logo design, color palette, typography, brand guidelines, and collateral templates." }, { q: "How long does a branding project take?", a: "Typically 2-4 weeks from discovery to final deliverables." }, { q: "Can you rebrand an existing business?", a: "Yes. We handle both new brand creation and strategic rebranding." }] },
  { slug: "video-marketing", title: "Short Form Video Marketing", desc: "Scroll-stopping video content optimized for engagement and reach. Free demo.", faqs: [{ q: "What platforms do you create videos for?", a: "TikTok, Instagram Reels, YouTube Shorts, and Facebook Stories." }, { q: "How many videos do you produce monthly?", a: "Typically 8-20 short-form videos per month depending on your plan." }, { q: "Do you handle filming and editing?", a: "Yes. We manage the complete production process from concept to final edit." }] },
  { slug: "website-development", title: "Website Development", desc: "High-performance websites designed for conversion and growth. Free demo.", faqs: [{ q: "What platforms do you build on?", a: "We build custom solutions using React, Next.js, WordPress, and Shopify depending on your needs." }, { q: "How long does a website take to build?", a: "Typically 4-8 weeks from design approval to launch." }, { q: "Do you provide hosting and maintenance?", a: "Yes. We offer managed hosting, security updates, and ongoing maintenance." }] },
  { slug: "landing-page-development", title: "Landing Page Development", desc: "Fast, responsive landing pages built to convert traffic into leads. Free demo.", faqs: [{ q: "How fast can you build a landing page?", a: "We can deliver high-converting landing pages in 3-5 business days." }, { q: "Are landing pages mobile-optimized?", a: "Yes. Every landing page is fully responsive and optimized for mobile devices." }, { q: "Do you include A/B testing?", a: "Yes. We set up A/B testing to continuously optimize conversion rates." }] },
  { slug: "crm-setup", title: "CRM Setup & Integration", desc: "Professional CRM implementation customized for your sales process. Free demo.", faqs: [{ q: "Which CRM is best for my business?", a: "We evaluate your needs and recommend the best CRM — whether HubSpot, Salesforce, GoHighLevel, or others." }, { q: "Can you migrate data from my current system?", a: "Yes. We handle complete data migration with zero data loss." }, { q: "Do you provide CRM training?", a: "Yes. We provide comprehensive training for your team on the new system." }] },
  { slug: "saas-integrations", title: "SaaS Integrations", desc: "Seamless integration between your tools for unified data flow. Free demo.", faqs: [{ q: "How many tools can you integrate?", a: "We connect 5,000+ apps including payment systems, CRMs, email platforms, and more." }, { q: "Will integrations slow down my systems?", a: "No. We build efficient integrations that actually speed up your workflows." }, { q: "Do you provide ongoing support?", a: "Yes. We monitor integrations and provide ongoing maintenance and support." }] },
  { slug: "marketing-automation-setup", title: "Marketing Automation Setup", desc: "End-to-end marketing automation configured for maximum impact. Free demo.", faqs: [{ q: "What does marketing automation include?", a: "Email sequences, lead scoring, segmentation, triggered campaigns, and reporting." }, { q: "How long does setup take?", a: "Typically 2-4 weeks for complete marketing automation implementation." }, { q: "Can I manage it myself after setup?", a: "Yes. We train your team and provide documentation for self-management." }] },
  { slug: "analytics-dashboard", title: "Dashboard & Analytics Setup", desc: "Real-time dashboards and analytics to track every metric that matters. Free demo.", faqs: [{ q: "What metrics do you track?", a: "Revenue, leads, conversion rates, ad spend, ROI, traffic, and custom KPIs specific to your business." }, { q: "Which analytics tools do you use?", a: "Google Analytics, Looker Studio, custom dashboards, and your existing tools." }, { q: "Can I access dashboards on mobile?", a: "Yes. All dashboards are fully responsive and accessible from any device." }] },
];

const BLOG_POSTS = [
  { slug: "ai-automation-revenue-growth-2025", title: "How AI Automation Is Driving 10x Revenue Growth in 2025", desc: "Discover how forward-thinking businesses are leveraging AI automation systems to generate customers and revenue on autopilot. Free demo." },
  { slug: "google-ads-roi-local-business", title: "Google Ads for Local Businesses: A Data-Driven ROI Framework", desc: "Learn the exact framework we use to generate 4-6x ROAS for local businesses using AI-optimized Google Ads campaigns." },
  { slug: "ai-chatbot-lead-conversion", title: "AI Chatbots: Converting 78% More Website Visitors Into Leads", desc: "How intelligent chatbots are revolutionizing lead capture and qualification for businesses across every industry. Free demo." },
  { slug: "crm-automation-sales-pipeline", title: "The Ultimate CRM Automation Playbook for Sales Teams", desc: "Stop losing deals to manual processes. Here is how to automate your entire sales pipeline from lead to close. Free demo." },
  { slug: "seo-vs-paid-ads-strategy", title: "SEO vs Paid Ads: Building a Unified Revenue Strategy", desc: "Why the best growth strategies combine organic search dominance with paid advertising for maximum market capture. Free demo." },
  { slug: "ai-follow-up-sequences", title: "AI Follow-Up Sequences That Close 3x More Deals", desc: "The science behind AI-powered follow-up automation and how it is helping sales teams dramatically increase close rates. Free demo." },
  { slug: "social-media-marketing-strategy-2025", title: "Social Media Marketing Strategy: The 2025 Playbook for Business Growth", desc: "Build a social media strategy that actually drives revenue. Platform-specific tactics for Instagram, Facebook, LinkedIn, and TikTok." },
  { slug: "local-business-digital-marketing", title: "Digital Marketing for Local Businesses: The Complete 2025 Guide", desc: "Everything a local business needs to dominate their market online — from Google Business Profile to local SEO to targeted advertising. Free demo." },
  { slug: "lead-generation-strategies-2025", title: "15 Lead Generation Strategies That Actually Work in 2025", desc: "Proven lead generation tactics backed by data from campaigns generating thousands of leads for businesses across the USA. Free demo." },
  { slug: "website-conversion-optimization", title: "Website Conversion Optimization: Turn More Visitors Into Paying Customers", desc: "Data-backed strategies to increase your website conversion rate by 200% or more without increasing traffic. Free demo." },
  { slug: "content-marketing-seo-guide", title: "Content Marketing for SEO: How to Create Content That Ranks and Converts", desc: "The complete guide to creating SEO-optimized content that ranks on Google page one and turns organic traffic into revenue. Free demo." },
  { slug: "ecommerce-growth-strategies", title: "E-Commerce Growth: 10 AI-Powered Strategies to Scale Your Online Store", desc: "How AI and automation are helping e-commerce brands achieve 80-180% growth through personalization and intelligent marketing. Free demo." },
  { slug: "brand-identity-business-growth", title: "How Strong Brand Identity Drives Revenue Growth: A Strategic Guide", desc: "Why branding is not just about logos — how strategic brand identity directly impacts customer acquisition, retention, and revenue. Free demo." },
  { slug: "healthcare-marketing-patient-acquisition", title: "Healthcare Marketing: How to Acquire More Patients with AI and Digital Strategy", desc: "HIPAA-compliant digital marketing strategies that help medical practices attract and retain patients. Free demo." },
  { slug: "real-estate-lead-generation-ai", title: "Real Estate Lead Generation: How AI Is Transforming Agent Success", desc: "AI-powered strategies that help real estate agents and brokerages generate, qualify, and convert more leads. Free demo." },
  { slug: "brevo-review-2025", title: "Brevo Review 2025: Best Free Email Marketing Software for Small Business", desc: "Complete Brevo review 2025: features, pricing, pros & cons. See why 500,000+ businesses choose Brevo as their #1 email marketing platform." },
  { slug: "best-email-marketing-tool-local-business", title: "Best Email Marketing Tool for Local Business in 2025 (Free Options Compared)", desc: "Compare the best email marketing tools for local businesses in 2025. Free plans, pricing, automation & deliverability reviewed." },
];

const CASE_STUDIES: Record<string, { title: string; desc: string }> = {
  "case-study-dental-practice-revenue-transformation": { title: "Local Dental Practice Revenue Transformation", desc: "How Premier Dental Care achieved 148% increase in new patients using AI Calling Agent and Google Ads." },
  "case-study-ecommerce-cart-recovery-scaling": { title: "E-Commerce Brand Scaling System", desc: "How LuxeHome Essentials achieved 62% cart recovery rate and 3.2x ROAS with AI Email Automation. Free demo." },
  "case-study-real-estate-ai-lead-generation": { title: "Real Estate Lead Machine", desc: "How Metro Realty Group generated 45+ qualified buyer leads per month with AI Lead Qualification. Free demo." },
  "case-study-saas-growth-acceleration": { title: "B2B SaaS Growth Engine", desc: "How CloudFlow Solutions achieved 145% increase in qualified demos with AI Sales Assistant." },
  "case-study-law-firm-client-intake-automation": { title: "Law Firm Client Acquisition System", desc: "How Sterling Legal Partners increased qualified consultations by 175% with AI intake automation. Free demo." },
  "case-study-fitness-studio-membership-growth": { title: "Fitness Studio Membership Growth", desc: "How Elite Performance Studios increased membership signups by 142% with AI lead capture and nurturing. Free demo." },
  "case-study-restaurant-chain-local-seo-transformation": { title: "Restaurant Chain Digital Transformation", desc: "How Sakura Dining Group boosted online orders by 165% with integrated AI marketing systems. Free demo." },
  "case-study-medical-clinic-patient-acquisition": { title: "Multi-Specialty Clinic Patient Growth Engine", desc: "How Meridian Health Partners achieved 125% new patient volume growth using AI Receptionist and Google Ads. Free demo." },
  "case-study-wealth-management-digital-lead-generation": { title: "Wealth Management Firm Digital Presence", desc: "How Crestview Capital Advisors generated 165% website lead increase with SEO and AI Lead Qualification. Free demo." },
  "case-study-home-services-plumbing-hvac-lead-machine": { title: "Home Services Lead Machine", desc: "How TrueFlow Plumbing & HVAC achieved 190% lead volume increase and 3.9x return on ad spend. Free demo." },
  "case-study-auto-dealership-ai-sales-acceleration": { title: "Auto Dealership Sales Acceleration", desc: "How Pinnacle Motors achieved 148% internet lead conversion increase with AI Chatbot and SMS Automation. Free demo." },
  "case-study-online-coaching-enrollment-automation": { title: "Online Coaching Business Revenue System", desc: "How Apex Performance Academy achieved 175% enrollment growth with AI appointment booking automation. Free demo." },
  "case-study-boutique-hotel-direct-booking-engine": { title: "Boutique Hotel Direct Booking Engine", desc: "How Shoreline Retreats grew direct bookings from 15% to 58% and achieved 4.1x Google Ads ROAS. Free demo." },
  "case-study-insurance-agency-renewal-automation": { title: "Insurance Agency Lead & Retention System", desc: "How Guardian Shield Insurance raised policy renewal rate to 91% and grew new applications by 148%. Free demo." },
  "case-study-commercial-contractor-brand-lead-growth": { title: "Commercial Contractor Brand & Lead System", desc: "How Ironclad Builders generated 14 inbound RFPs per month and 185% website traffic growth. Free demo." },
  "case-study-cpa-firm-onboarding-automation": { title: "CPA Firm Client Growth & Automation", desc: "How Clearpath Accounting Group achieved 180% new client growth and reduced onboarding from 3 weeks to 3 days. Free demo." },
  "case-study-luxury-salon-ai-booking-instagram-growth": { title: "Luxury Salon Booking & Brand Expansion", desc: "How Velour Beauty Lounge raised capacity utilization to 87% and gained 22K Instagram followers. Free demo." },
  "case-study-immigration-law-multilingual-lead-generation": { title: "Immigration Law Firm Digital Acquisition", desc: "How Bridgepoint Immigration Law achieved 185% monthly lead increase with multilingual digital presence. Free demo." },
  "case-study-freight-brokerage-workflow-automation": { title: "Freight Brokerage Efficiency & Growth", desc: "How Nexus Freight Solutions grew load volume by 135% and achieved 68% faster load matching. Free demo." },
  "case-study-cnc-manufacturer-digital-lead-generation": { title: "Precision Parts Manufacturer Digital Transformation", desc: "How Apex Machining Works achieved 185% website RFQ submissions increase and ranked #1 for CNC keywords. Free demo." },
  "case-study-veterinary-clinic-ai-appointment-growth": { title: "Veterinary Clinic Growth & Automation", desc: "How PawsCare Animal Hospital achieved 142% new client growth and 94% appointment show rate. Free demo." },
};

const LANDING_PAGES: Record<string, { title: string; desc: string; faqs?: { q: string; a: string }[] }> = {
  "ai-automation-new-york": { title: "#1 AI Automation Agency in New York | Free Demo", desc: "New York businesses: automate lead generation, appointment booking & follow-up with AI. 45+ NYC clients. Avg 3x revenue in 90 days. Get a free demo." },
  "ai-automation-los-angeles": { title: "#1 AI Automation Agency in Los Angeles | Free Demo", desc: "Los Angeles businesses: AI automation that generates leads and books appointments 24/7. 35+ LA clients. 3-5x ROI in 90 days. Book your free strategy demo." },
  "ai-automation-chicago": { title: "#1 AI Automation Agency in Chicago | Free Demo", desc: "Chicago businesses: AI systems for lead generation, follow-up & booking automation. 30+ Chicagoland clients. Free AI strategy consultation available today." },
  "ai-revenue-growth-real-estate": { title: "AI Revenue Growth for Real Estate | 45+ Leads/Month", desc: "Real estate agents: AI-powered lead generation averages 45+ buyer leads/month. Automate qualification, follow-up & booking. Free real estate AI audit." },
  "ai-revenue-growth-healthcare": { title: "AI Revenue Growth for Healthcare | HIPAA-Compliant", desc: "HIPAA-compliant AI for medical practices: automate patient intake, appointment booking & follow-up. Clients grow new patients 125%+. Free healthcare AI demo." },
  "ai-revenue-growth-law-firms": { title: "AI Revenue Growth for Law Firms | 175% More Consultations", desc: "Law firms: AI intake automation increases qualified consultations by 175%. Automate lead qualification, follow-up & case intake. Free law firm AI demo." },
  "ai-revenue-growth-ecommerce": { title: "AI Revenue Growth for E-Commerce | 62% Cart Recovery", desc: "E-commerce brands: AI automation for 62% cart recovery, personalized retention & 3.2x ROAS. Scale revenue without adding headcount. Free ecom AI audit." },
  "ai-revenue-growth-restaurants": { title: "AI Revenue Growth for Restaurants | 165% More Orders", desc: "Restaurants: AI marketing automation increases online orders by 165% and builds loyal repeat customers. Free restaurant growth strategy demo available." },
  "ai-lead-generation-usa": { title: "AI Lead Generation for Small Business | 50-200 Leads/Month", desc: "Small businesses across the USA generate 50-200 qualified leads/month with AI automation. 24/7 capture, qualify & convert. Free lead generation audit." },
  "ai-marketing-automation-usa": { title: "AI Marketing Automation USA | Save 20hrs/Week", desc: "Complete AI marketing automation for US businesses: email, social, ads & customer journeys on autopilot. Save 20+ hours/week. Free automation strategy call." },
  "b2b-lead-generation": { title: "B2B Lead Generation | 50-200 Qualified Leads/Month", desc: "AI-powered B2B lead generation averaging 50-200 qualified prospects/month. LinkedIn, email, Google Ads & AI calling combined. Free B2B lead gen audit.", faqs: [{ q: "How does AI improve B2B lead generation?", a: "AI automates prospect research, personalizes outreach at scale, scores leads by intent signals, and triggers multi-channel follow-up sequences that convert." }, { q: "What channels do you use for B2B leads?", a: "We combine LinkedIn outreach, email sequences, Google Ads, content marketing, and AI calling agents to build a multi-channel B2B pipeline." }, { q: "How many leads can I expect per month?", a: "Results vary by industry, but most B2B clients generate 50-200 qualified leads per month within the first 90 days of campaign optimization." }] },
  "automation-agency": { title: "AI Automation Agency | Save 20hrs/Week | Infinite Rankers", desc: "Automate lead follow-up, appointment booking & workflows with AI. Clients reduce manual work by 60% and scale revenue without adding headcount. Free demo.", faqs: [{ q: "What does an automation agency do?", a: "An automation agency designs and implements intelligent workflows that automate repetitive tasks like lead follow-up, appointment booking, data entry, and reporting." }, { q: "How can automation help with recruitment?", a: "AI automation streamlines candidate sourcing, application screening, interview scheduling, and follow-up communications — reducing time-to-hire by up to 60%." }, { q: "How quickly can automation systems be implemented?", a: "Most automation workflows are designed, built, and live within 2-4 weeks, with immediate impact on efficiency and lead response times." }] },

  "ai-receptionist": { title: "AI Receptionist | 24/7 Call Answering & Lead Qualification", desc: "AI receptionist answers every inbound call within one ring — 24/7 — qualifying leads, answering FAQs, and booking appointments. Eliminates 100% of. Free demo.", faqs: [{ q: "Can the AI receptionist handle after-hours calls?", a: "Yes. It operates 24/7 with zero degradation in call quality, routing after-hours calls or taking detailed messages with priority flagging." }, { q: "How does it route calls to the right department?", a: "It uses intelligent routing logic based on caller intent, keywords, caller history, and configurable rules — including warm transfer with context." }, { q: "Can it schedule appointments directly?", a: "Yes. It integrates with your calendar system to book, reschedule, and confirm appointments in real-time during the call." }, { q: "Which industries benefit most from an AI receptionist?", a: "Healthcare, dental, legal, home services, med spas, real estate, and any service business that loses revenue to missed or mishandled calls." }] },
  "crm-automation": { title: "CRM Automation | Save 15–20hrs/Week & Double Pipeline", desc: "CRM automation eliminates manual data entry — auto-routing leads, triggering follow-ups, and updating deal stages in HubSpot, Salesforce. Free demo.", faqs: [{ q: "Which CRMs do you support?", a: "We work with Salesforce, HubSpot, Zoho, Pipedrive, GoHighLevel, and most major CRMs — including custom-built solutions via API." }, { q: "Will automation break my existing workflows?", a: "No. We audit your current setup first and build automations that layer onto your existing processes without disrupting active deals or contacts." }, { q: "How much time does CRM automation save?", a: "Most teams save 15-20 hours per week on manual data entry, follow-up tasks, and reporting — time that goes directly back to selling." }, { q: "How long does CRM automation implementation take?", a: "Most CRM automation projects are live within 2–3 weeks including workflow design, integration setup, testing, and team training." }] },
  "ai-automation-agency": { title: "#1 AI Automation Agency for Service Businesses | Free Demo", desc: "AI automation agency building lead capture, appointment booking & follow-up systems. Clients average 3x revenue in 90 days without adding headcount. Free.", faqs: [{ q: "What does an AI automation agency do?", a: "An AI automation agency builds intelligent systems that automate your lead capture, follow-up, appointment booking, CRM management, and customer communications — replacing manual workflows with 24/7 AI." }, { q: "How quickly can an AI automation system be deployed?", a: "Most complete AI automation systems are live within 10–14 business days including integrations, testing, and team onboarding." }, { q: "What ROI can I expect from AI automation?", a: "Clients typically 2-3x their booked meetings within 60 days and reduce manual operational time by 50–60%." }, { q: "Do you work with small and mid-size businesses?", a: "Yes. Our systems are designed for service businesses at any stage — from solo operators to multi-location enterprises." }] },
  "ai-agent-development": { title: "Custom AI Agent Development | Built for Your Business", desc: "Custom AI agents built to qualify leads, book appointments, handle intake & automate customer communications. Deployed in 10 days. Free AI agent consultation.", faqs: [{ q: "What is a custom AI agent?", a: "A custom AI agent is an intelligent software system trained on your business to handle specific tasks — lead qualification, appointment booking, intake forms, customer support — without human intervention." }, { q: "Can AI agents integrate with my existing software?", a: "Yes. We integrate with your CRM, calendar, phone system, website, and any tools in your stack through native integrations and APIs." }, { q: "How long does it take to build a custom AI agent?", a: "Most custom AI agents are designed, built, and live within 10 business days of project kickoff." }, { q: "What makes your AI agents different from off-the-shelf chatbots?", a: "Our agents are trained on your specific business, services, and sales process — not generic templates — delivering human-like, context-aware responses that actually convert." }] },
  "ai-booking-agent": { title: "AI Booking Agent | Fill Your Calendar 24/7", desc: "AI booking agent fills your calendar with qualified appointments across phone, SMS & chat — 24/7, no staff required. Clients reduce no-shows 40%+. Free demo.", faqs: [{ q: "How does an AI booking agent work?", a: "It engages leads via call, SMS, or chat, qualifies their intent, checks your real-time calendar, books the appointment, and sends automatic reminders — all without human involvement." }, { q: "Which calendar systems does it integrate with?", a: "Google Calendar, Outlook, Calendly, Acuity, and most major scheduling platforms across your team." }, { q: "Can it handle rescheduling and cancellations?", a: "Yes. The AI manages the full appointment lifecycle — booking, confirmation, rescheduling, and cancellation with waitlist backfill." }, { q: "What industries does the AI booking agent work for?", a: "Healthcare, dental, legal, home services, med spas, real estate, coaching, and any service business that relies on scheduled appointments." }] },
  "ai-customer-support-agent": { title: "AI Customer Support Agent | 24/7 Resolution", desc: "AI customer support agent resolves FAQs, handles complaints & escalates complex issues 24/7 — reducing support tickets by 60%+. Free support AI demo.", faqs: [{ q: "What can an AI customer support agent handle?", a: "FAQs, order status, appointment inquiries, complaint intake, refund requests, and escalation routing — covering 80–90% of typical support volume automatically." }, { q: "How does it handle issues it cannot resolve?", a: "The AI escalates to a human agent with full conversation context — so your team picks up seamlessly without the customer repeating themselves." }, { q: "Can the AI support agent be trained on our products and policies?", a: "Yes. We train it on your specific product catalog, service policies, FAQs, and brand voice before deployment." }, { q: "How quickly can it be deployed?", a: "Most AI support agents are live within 7–10 business days including knowledge base training and integration with your helpdesk or CRM." }] },
  "ai-sales-agent": { title: "AI Sales Agent | Qualify & Close More Deals", desc: "AI sales agent qualifies leads, handles objections & books consultations 24/7 — so your closers only talk to buyers. Clients close 2x more deals. Free demo.", faqs: [{ q: "What does an AI sales agent do?", a: "It engages inbound leads immediately, qualifies them using your criteria, handles common objections, and books meetings with your sales team — all autonomously." }, { q: "Can the AI sales agent handle objections?", a: "Yes. It is trained on your specific objections and responses, engaging prospects conversationally to move them toward a booking or decision." }, { q: "Does it integrate with my CRM?", a: "Yes. Every interaction is logged to your CRM with qualification scores, contact data, and conversation summaries for your sales team." }, { q: "What is the typical ROI of an AI sales agent?", a: "Clients typically see 2x increase in booked meetings within 60 days, as the AI responds to every lead instantly and nurtures until they book or opt out." }] },
  "lead-capture-automation": { title: "Lead Capture Automation | Never Miss a Lead", desc: "AI lead capture automation responds to every inquiry in under 60 seconds — via web form, phone, SMS & chat. Clients capture 3x more leads. Free audit.", faqs: [{ q: "What is lead capture automation?", a: "Lead capture automation uses AI to instantly respond to every new lead across all channels — web form, call, SMS, live chat — qualifying and routing them before your competitors can respond." }, { q: "How fast does it respond to new leads?", a: "Under 60 seconds. Speed-to-lead is the single biggest conversion factor — businesses that respond within 1 minute are 21x more likely to convert than those that wait 30 minutes." }, { q: "Which channels can it capture leads from?", a: "Website forms, landing pages, phone calls, SMS, Facebook Ads lead forms, Google Ads calls, and chat widgets — all unified in one system." }, { q: "Does it qualify leads automatically?", a: "Yes. The AI asks qualification questions, scores leads by intent, and routes only qualified prospects to your sales team." }] },
  "missed-call-text-back": { title: "Missed Call Text-Back System | Recover Lost Revenue", desc: "Automatically text every missed caller within 30 seconds — capturing leads before they call your competitor. Clients recover 35%+ of missed-call. Free demo.", faqs: [{ q: "How does missed call text-back work?", a: "When you miss a call, the system immediately sends a personalized SMS to the caller — starting a conversation, capturing their need, and booking a callback or appointment." }, { q: "How quickly does it send the text?", a: "Within 30 seconds of a missed call — while the caller is still thinking about your business rather than searching for alternatives." }, { q: "Can I customize the text message response?", a: "Yes. We configure the initial message and follow-up sequence to match your brand voice, services, and preferred call-to-action." }, { q: "Does it integrate with my phone system?", a: "Yes. It connects with most business phone systems and VoIP providers, requiring minimal setup." }] },
  "revenue-automation-systems": { title: "Revenue Automation Systems | 3x Revenue in 90 Days", desc: "End-to-end revenue automation: lead capture, follow-up, booking & CRM — all on autopilot. Clients average 3x revenue growth in 90 days. Free revenue audit.", faqs: [{ q: "What is a revenue automation system?", a: "A revenue automation system integrates AI across your entire lead-to-close process — capturing leads, following up automatically, booking appointments, and managing your pipeline without manual effort." }, { q: "How does it differ from basic marketing automation?", a: "Revenue automation systems are built around measurable revenue outcomes — tracked by booked appointments, closed deals, and collected revenue — not just email opens or click rates." }, { q: "How long does it take to implement?", a: "Full revenue automation systems are typically live in 2–4 weeks depending on integration complexity and the number of channels configured." }, { q: "What kind of businesses benefit most?", a: "Service businesses with a defined sales process — healthcare, legal, real estate, home services, med spas, coaches — benefit most from automated revenue systems." }] },

  "saas-project-development": { title: "SaaS Project Development | Custom Software to Scale", desc: "Custom SaaS application development from MVP to enterprise scale. AI-powered features, API integrations & scalable architecture. Free SaaS project.", faqs: [{ q: "How long does it take to build a SaaS product?", a: "An MVP typically takes 8–16 weeks depending on feature complexity. We follow an agile approach so you can launch, test, and iterate rapidly." }, { q: "What technology stack do you use for SaaS development?", a: "We build with React, Node.js, Python, PostgreSQL, and cloud infrastructure on AWS or GCP — choosing the right stack for your specific product requirements." }, { q: "Can you add AI features to our SaaS product?", a: "Yes. We integrate LLMs, computer vision, predictive analytics, and automation into SaaS products to create differentiated, high-value AI-powered experiences." }, { q: "Do you handle post-launch maintenance?", a: "Yes. We offer ongoing development, infrastructure management, security updates, and feature expansion after your product launches." }] },
  "custom-saas-development": { title: "Custom SaaS Development | MVP to Enterprise", desc: "End-to-end custom SaaS development: product strategy, UI/UX design, development & launch. AI-integrated. Used by 50+ SaaS businesses. Free project scope call.", faqs: [{ q: "What is included in custom SaaS development?", a: "Product strategy, technical architecture, UI/UX design, full-stack development, AI feature integration, QA testing, deployment, and post-launch support." }, { q: "How do you ensure the SaaS product is scalable?", a: "We architect for scale from day one — microservices, cloud-native infrastructure, horizontal scaling, and database optimization built into the foundation." }, { q: "Can you rebuild or improve our existing SaaS product?", a: "Yes. We handle legacy system modernization, performance optimization, feature expansion, and full product rebuilds for existing SaaS companies." }, { q: "Do you sign NDAs for SaaS development projects?", a: "Yes. All projects begin with an NDA and IP assignment agreement to protect your product concept and proprietary code." }] },
  "custom-ai-automation": { title: "Custom AI Automation | Built Around Your Business", desc: "Bespoke AI automation systems designed for your unique workflows — not generic templates. Clients reduce manual work 60%+ in 30 days. Free automation audit.", faqs: [{ q: "What makes custom AI automation different from off-the-shelf tools?", a: "Custom AI automation is built around your specific workflows, data, and business logic — delivering higher accuracy, better integration, and results that generic tools cannot replicate." }, { q: "What processes can be automated with custom AI?", a: "Lead qualification, appointment booking, customer onboarding, document processing, invoice generation, reporting, CRM updates, and virtually any repeatable business process." }, { q: "How much does custom AI automation cost?", a: "Projects typically start at $3,000 for standalone automation workflows and scale based on complexity, integrations, and volume requirements." }, { q: "Can custom AI automation integrate with our existing software?", a: "Yes. We connect with your CRM, ERP, communication tools, databases, and third-party APIs to create a unified automation layer." }] },

  "ai-receptionist-for-dentists": { title: "AI Receptionist for Dental Offices | 24/7 Patient Booking", desc: "AI receptionist answers every dental patient call, books appointments & handles FAQs 24/7. HIPAA-compliant. Dental clients see 148% more new patients. Free.", faqs: [{ q: "Is the AI receptionist HIPAA-compliant for dental offices?", a: "Yes. All patient interactions are handled in a HIPAA-compliant manner — no PHI stored in non-compliant systems, with consent flows and privacy controls built in." }, { q: "Can the AI book dental appointments directly into our schedule?", a: "Yes. It integrates with Dentrix, Eaglesoft, Open Dental, and other dental practice management software to book and confirm appointments in real-time." }, { q: "Will it handle insurance and billing questions?", a: "It handles common insurance questions and collects information for staff review, escalating complex billing questions to your front desk team." }, { q: "How does an AI receptionist help dental offices grow?", a: "It eliminates missed calls after hours and during busy periods — capturing every new patient inquiry and converting them to booked appointments around the clock." }] },
  "ai-receptionist-for-law-firms": { title: "AI Receptionist for Law Firms | 24/7 Client Intake", desc: "AI receptionist answers every call, qualifies potential clients & schedules consultations 24/7. Law firms see 175% more qualified consultations. Free legal.", faqs: [{ q: "Is the AI receptionist compliant with legal ethics rules?", a: "Yes. It is configured to avoid creating attorney-client relationships, uses appropriate disclaimers, and routes all substantive legal questions to licensed staff." }, { q: "Can it qualify leads by practice area?", a: "Yes. We configure intake logic for your specific practice areas — PI, family law, criminal, immigration, estate — routing to the right attorney or intake specialist." }, { q: "Does it capture case details during the call?", a: "Yes. The AI collects key case information, incident dates, opposing parties, and contact details — delivering a complete intake summary to your team." }, { q: "How quickly can a law firm deploy the AI receptionist?", a: "Most law firm AI receptionist deployments are live within 7–10 business days including intake flow configuration, practice area training, and CRM integration." }] },
  "ai-booking-agent-for-med-spas": { title: "AI Booking Agent for Med Spas | Fill Your Schedule", desc: "AI booking agent fills your med spa schedule 24/7 — handling consultations, treatments & follow-ups automatically. Med spa clients grow revenue 120%+. Free.", faqs: [{ q: "Can the AI booking agent handle multiple service types for med spas?", a: "Yes. It books Botox, fillers, laser treatments, consultations, and follow-up appointments — each with their appropriate duration and staff assignment." }, { q: "Does it reduce no-shows for med spa appointments?", a: "Yes. Automated confirmation and reminder sequences (24hr + 2hr) reduce no-show rates by 40%+ at most med spa clients." }, { q: "Can it upsell treatment packages during booking?", a: "Yes. The AI is trained to mention relevant treatment combinations and package promotions during the booking conversation to increase average booking value." }, { q: "How does it handle consultation vs. treatment bookings differently?", a: "We configure separate booking flows for consultations and treatments — with appropriate questions, duration, and follow-up sequences for each type." }] },
  "ai-automation-for-hvac-companies": { title: "AI Automation for HVAC Companies | 190% More Leads", desc: "AI automation for HVAC companies: lead capture, after-hours booking & follow-up automation. HVAC clients average 190% more leads in 90 days. Free HVAC AI.", faqs: [{ q: "How does AI automation help HVAC companies get more jobs?", a: "AI captures every missed call and web inquiry 24/7, instantly follows up with scheduling options, and books service calls before the homeowner contacts a competitor." }, { q: "Can the AI handle emergency after-hours HVAC calls?", a: "Yes. It answers after-hours calls, captures the emergency details, and dispatches an alert to your on-call technician or books the next available slot." }, { q: "How does it manage seasonal volume spikes?", a: "AI scales instantly — handling hundreds of simultaneous inquiries during summer AC season or winter heating emergencies without added staffing costs." }, { q: "Can it integrate with service dispatch software?", a: "Yes. We integrate with ServiceTitan, Housecall Pro, Jobber, and most major field service management platforms." }] },
  "crm-automation-for-home-services": { title: "CRM Automation for Home Services | Save 15hrs/Week", desc: "CRM automation built for home service businesses — auto-route leads, trigger follow-ups & update jobs without manual entry. Free home services CRM audit.", faqs: [{ q: "Which CRMs do you automate for home services companies?", a: "We work with ServiceTitan, Jobber, Housecall Pro, GoHighLevel, HubSpot, and most major home services CRM platforms." }, { q: "What manual tasks does CRM automation eliminate?", a: "Lead routing, follow-up scheduling, estimate reminders, job status updates, invoice generation, and review request triggers — typically saving 15–20 hours per week." }, { q: "How does CRM automation improve lead conversion for home services?", a: "Automated follow-up sequences engage every lead within 60 seconds and continue nurturing for 30+ days — capturing deals your team would otherwise let go cold." }, { q: "How long does CRM automation setup take for a home services business?", a: "Most home services CRM automations are built and live within 2–3 weeks including workflow design, integration, and team training." }] },
  "lead-capture-automation-for-plumbers": { title: "Lead Capture Automation for Plumbers | Never Miss a Job", desc: "AI lead capture automation for plumbing companies — answer every call, capture every form & text back missed callers in 30 seconds. Free plumbing AI demo.", faqs: [{ q: "How does lead capture automation help plumbing businesses?", a: "It ensures every call, web form, and text inquiry is captured and responded to instantly — day, night, or weekend — so no job opportunity goes to a competitor." }, { q: "What happens when a plumber misses a call?", a: "The system automatically texts the caller within 30 seconds, starts a conversation to understand their need, and books them for the next available service slot." }, { q: "Can it handle emergency plumbing calls differently?", a: "Yes. Emergency calls are flagged and escalated immediately to your on-call plumber while the system keeps the customer engaged with an ETA update." }, { q: "Does it integrate with plumbing dispatch software?", a: "Yes. We connect with Jobber, ServiceTitan, Housecall Pro, and other platforms to flow leads directly into your dispatch system." }] },
  "follow-up-automation-for-roofers": { title: "Follow-Up Automation for Roofers | 3x More Estimates", desc: "Automated lead follow-up for roofing companies — convert more estimates to jobs with AI-powered SMS & email sequences. Roofers 3x booked jobs. Free roofing.", faqs: [{ q: "Why do roofing companies need automated follow-up?", a: "Most roofing leads require 5–8 follow-up touchpoints before booking — most companies give up after 1–2. Automation handles every touchpoint systematically until the lead converts or opts out." }, { q: "What channels does follow-up automation use for roofers?", a: "SMS, email, and voicemail drops — delivered in a coordinated sequence timed to maximize response rates without overwhelming the prospect." }, { q: "Can it follow up on storm damage leads differently?", a: "Yes. We build separate sequences for storm damage, insurance claims, and standard re-roof leads — each with tailored messaging and urgency levels." }, { q: "How does follow-up automation integrate with estimating software?", a: "We connect with JobNimbus, AccuLynx, RoofSnap, and most roofing CRMs to trigger follow-up sequences automatically when estimates are sent." }] },
  "customer-support-ai-for-auto-shops": { title: "AI Customer Support for Auto Shops | 24/7 Answering", desc: "AI customer support for auto repair shops — answer service questions, book appointments & send estimates automatically. Auto shops see 65% fewer. Free demo.", faqs: [{ q: "What can AI customer support handle for auto shops?", a: "Service inquiries, appointment booking, status updates on vehicles in the shop, estimate follow-ups, and common questions about pricing, hours, and services offered." }, { q: "Can the AI provide repair estimates?", a: "It delivers standard service price ranges and books diagnostic appointments for complex repair estimates requiring technician inspection." }, { q: "Does it notify customers when their vehicle is ready?", a: "Yes. Automated pickup notifications and status updates can be triggered directly from your shop management software." }, { q: "How does it integrate with shop management software?", a: "We integrate with Mitchell 1, Shop-Ware, Tekmetric, and most major automotive shop management platforms." }] },
  "review-automation-for-dental-clinics": { title: "Review Automation for Dental Clinics | 5-Star Reviews", desc: "Automated Google review requests for dental clinics — sent at the perfect moment after appointments. Dental clients average 4.8 stars and 300% more. Free demo.", faqs: [{ q: "When does the review request get sent to dental patients?", a: "Automatically 2–4 hours after appointment completion — when patient satisfaction is highest and the experience is fresh in their memory." }, { q: "Which review platforms does it target?", a: "Primarily Google (the highest-impact for local search), with optional Yelp and Healthgrades flows based on your market." }, { q: "Is this HIPAA-compliant for dental patient communication?", a: "Yes. Review requests are sent via compliant channels without referencing specific treatment details — staying within HIPAA guidelines." }, { q: "Can it respond to reviews automatically?", a: "Yes. We configure AI-generated responses for common review types, with escalation alerts for negative reviews requiring personal attention." }] },
  "customer-reactivation-for-med-spas": { title: "Customer Reactivation for Med Spas | Win Back Clients", desc: "AI reactivation campaigns for med spas that win back dormant clients with targeted offers. Med spa clients recover $50K+ in dormant revenue. Free.", faqs: [{ q: "How does customer reactivation work for med spas?", a: "We identify clients who haven't visited in 60–180 days, then deploy targeted SMS and email sequences with personalized treatment offers to bring them back in." }, { q: "What kind of offers work best for med spa reactivation?", a: "Seasonal treatment promotions, loyalty bonuses for lapsed clients, new treatment announcements, and limited-time package discounts consistently drive high reactivation rates." }, { q: "How many clients can be reactivated in the first campaign?", a: "Results vary, but most med spas see 15–35% reactivation rates on lapsed client lists — often generating $20,000–$80,000 in recovered revenue from dormant contacts." }, { q: "Can reactivation campaigns run automatically on an ongoing basis?", a: "Yes. We set up evergreen reactivation triggers — so any client who goes 60 days without a booking automatically enters the reactivation sequence." }] },
  "ai-sales-agent-for-real-estate": { title: "AI Sales Agent for Real Estate | 45+ Leads/Month", desc: "AI sales agent qualifies buyer & seller leads 24/7, books showings & nurtures prospects for real estate agents and brokerages. Free real estate AI.", faqs: [{ q: "How does an AI sales agent help real estate agents?", a: "It qualifies every inbound lead instantly — asking about timeline, pre-approval status, and search criteria — then books showing appointments with qualified prospects and nurtures others until they're ready." }, { q: "Can it integrate with real estate CRMs?", a: "Yes. We integrate with Follow Up Boss, LionDesk, BoomTown, kvCORE, Chime, and most major real estate CRM platforms." }, { q: "Does it generate leads or just qualify existing ones?", a: "It can do both — qualifying leads from your existing sources and powering outbound campaigns to generate new buyer and seller leads via Google Ads and Meta Ads." }, { q: "How does it handle buyer leads vs. seller leads differently?", a: "We build separate qualification flows for buyers and sellers — with buyer-specific questions about timeline and pre-approval, and seller flows capturing property details and motivation." }] },
  "ai-booking-agent-for-electricians": { title: "AI Booking Agent for Electricians | Book More Jobs", desc: "AI booking agent for electrical contractors — answers calls 24/7, books service appointments & follows up on estimates automatically. Free electrician AI demo.", faqs: [{ q: "How does an AI booking agent help electrical contractors?", a: "It captures every call and web inquiry 24/7 — booking residential or commercial service appointments, sending estimate follow-ups, and managing the customer communication lifecycle automatically." }, { q: "Can it differentiate between emergency and standard electrical jobs?", a: "Yes. Emergency calls are flagged and escalated immediately, while routine service requests are booked into your next available scheduling slot." }, { q: "Does it integrate with electrical contractor software?", a: "Yes. We connect with Jobber, ServiceTitan, Housecall Pro, and other field service management platforms your team uses." }, { q: "How quickly can an electrician AI booking system be deployed?", a: "Most systems are live within 5–7 business days including phone integration, booking flow configuration, and team setup." }] },
  "ai-automation-for-law-firms": { title: "AI Automation for Law Firms | 175% More Consultations", desc: "AI automation for law firms: intake, lead qualification, appointment booking & follow-up — all compliant with legal ethics. Free law firm automation demo.", faqs: [{ q: "What AI automation workflows are most valuable for law firms?", a: "Client intake automation, lead qualification by practice area, consultation booking, follow-up sequences for unresponsive leads, and document collection workflows deliver the highest ROI." }, { q: "Is AI intake automation ethical and compliant for law firms?", a: "Yes. We configure systems with appropriate disclaimers, avoid attorney-client relationship creation, and route all substantive legal discussions to licensed staff." }, { q: "Can it qualify leads by practice area automatically?", a: "Yes. Intake flows are configured for your specific practice areas — PI, family, criminal, estate, immigration — with appropriate questions and routing logic for each." }, { q: "How does AI automation scale a law firm's intake capacity?", a: "With AI handling initial qualification and follow-up, your intake team focuses only on qualified prospects — allowing the same headcount to process 3–5x more consultations." }] },
  "crm-automation-for-mortgage-brokers": { title: "CRM Automation for Mortgage Brokers | Close More Loans", desc: "CRM automation for mortgage brokers — auto-route leads, trigger follow-up & track applications through closing. Brokers close 40% more loans. Free mortgage.", faqs: [{ q: "Which CRMs do you automate for mortgage brokers?", a: "We work with Salesforce, HubSpot, Encompass, Calyx, Surefire, Total Expert, and most major mortgage-specific CRM platforms." }, { q: "How does CRM automation help mortgage brokers close more loans?", a: "Automated follow-up ensures no lead goes cold during the long mortgage decision cycle — keeping prospects engaged with educational content, rate updates, and timely check-ins." }, { q: "Can it automate document collection from borrowers?", a: "Yes. Automated document request sequences send reminders to borrowers until all required documents are collected — reducing processing delays." }, { q: "Is the automation RESPA and TILA compliant?", a: "We configure automation sequences to comply with relevant mortgage regulations — avoiding prohibited communications and maintaining required disclosures." }] },
  "ai-receptionist-for-home-services": { title: "AI Receptionist for Home Services | Never Miss a Job", desc: "AI receptionist for home service businesses — answers every call 24/7, books appointments & captures leads automatically. Home services clients get. Free demo.", faqs: [{ q: "What home service businesses benefit most from an AI receptionist?", a: "HVAC, plumbing, electrical, roofing, landscaping, pest control, cleaning services, and any home service business that loses jobs to missed calls." }, { q: "Can the AI receptionist dispatch emergency service calls?", a: "Yes. It identifies emergency requests, escalates to your on-call team immediately, and keeps the customer engaged with response time updates." }, { q: "Does it handle after-hours calls differently than business hours?", a: "Yes. After-hours calls receive a tailored response — booking next-morning slots or capturing emergency contact details based on your preferences." }, { q: "How does it integrate with home services dispatch software?", a: "We connect with Jobber, ServiceTitan, Housecall Pro, and other platforms to push booked appointments directly into your dispatch system." }] },

  "ai-automation-agency-california": { title: "#1 AI Automation Agency in California | Free Demo", desc: "California businesses: AI automation for lead capture, appointment booking & follow-up. 45+ CA clients average 3x revenue in 90 days. Get your free.", faqs: [{ q: "Do you serve businesses across all of California?", a: "Yes. We work with businesses statewide — from Los Angeles, San Diego, and San Francisco to Sacramento, Fresno, and smaller California markets." }, { q: "What industries in California benefit most from AI automation?", a: "Healthcare, real estate, legal, home services, dental, med spas, and professional services businesses across California generate the highest ROI from AI automation." }, { q: "How quickly can a California business deploy AI automation?", a: "Most California clients are live with fully deployed AI systems within 10–14 business days of project kickoff." }, { q: "Is there a local California team for support?", a: "Our team serves California businesses remotely with dedicated account management — delivering the same quality as a local agency with nationwide AI capabilities." }] },
  "ai-automation-agency-florida": { title: "#1 AI Automation Agency in Florida | Free Demo", desc: "Florida businesses: AI automation systems for lead generation, booking & follow-up. 35+ FL clients. Average 3x revenue growth in 90 days. Free strategy.", faqs: [{ q: "Do you work with businesses across all of Florida?", a: "Yes. We serve businesses statewide — Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and throughout Florida's markets." }, { q: "What Florida industries see the best results from AI automation?", a: "Home services, healthcare, legal, real estate, hospitality, dental, and med spa businesses in Florida generate strong ROI from AI automation and lead systems." }, { q: "Can AI automation help Florida businesses compete with larger companies?", a: "Yes. AI automation gives small and mid-size Florida businesses enterprise-level lead response speed and follow-up consistency — competing effectively against larger operations." }, { q: "How long does deployment take for a Florida business?", a: "Most Florida clients have fully deployed AI systems within 10–14 business days including integrations, testing, and go-live." }] },
  "ai-automation-agency-texas": { title: "#1 AI Automation Agency in Texas | Free Demo", desc: "Texas businesses: AI automation for lead capture, follow-up & appointment booking. 40+ TX clients average 3x revenue in 90 days. Free Texas AI strategy call.", faqs: [{ q: "Do you serve businesses across all of Texas?", a: "Yes. We work with businesses in Houston, Dallas, Austin, San Antonio, Fort Worth, and throughout Texas — including smaller markets across the state." }, { q: "What Texas industries benefit most from AI automation?", a: "Home services, real estate, legal, healthcare, oil & gas support services, roofing, HVAC, and professional services businesses in Texas see the strongest results." }, { q: "Can AI automation help Texas businesses handle high lead volume?", a: "Yes. AI scales instantly — handling hundreds of simultaneous lead inquiries during peak periods without adding staffing costs, regardless of growth rate." }, { q: "How does Infinite Rankers support Texas clients remotely?", a: "Dedicated account managers, real-time reporting dashboards, and responsive support — delivering the same quality as a local Texas agency with broader AI capabilities." }] },
  "ai-automation-agency-usa": { title: "#1 AI Automation Agency in the USA | Free Demo", desc: "The #1 AI automation agency for US service businesses. 100+ clients. Lead capture, booking & follow-up systems that average 3x revenue in 90 days. Free demo.", faqs: [{ q: "Do you work with businesses in all 50 states?", a: "Yes. We serve businesses across the entire United States — from major metropolitan areas to regional markets — with the same dedicated account management and AI capabilities." }, { q: "What makes Infinite Rankers the top AI automation agency in the USA?", a: "We build revenue-generating AI systems — not just software tools — with a proven track record of 3x revenue results, transparent reporting, and dedicated account management for every client." }, { q: "Which industries do you serve across the USA?", a: "Healthcare, legal, real estate, home services, dental, med spas, financial services, SaaS, restaurants, and professional services businesses nationwide." }, { q: "How do I get started with the AI automation agency?", a: "Book a free strategy call to get a custom AI automation roadmap, ROI projection, and live demo specific to your industry and business model." }] },
  "ai-receptionist-service-usa": { title: "AI Receptionist Service USA | 24/7 Call Answering", desc: "Nationwide AI receptionist service — answers every call, qualifies leads & books appointments 24/7. US businesses eliminate 100% missed-call revenue. Free demo.", faqs: [{ q: "Does the AI receptionist service work for businesses in any US state?", a: "Yes. We deploy AI receptionist systems for businesses across all 50 states, handling local area codes, time zones, and region-specific scheduling requirements." }, { q: "Can it replace a traditional answering service?", a: "Yes — and it outperforms traditional answering services by qualifying leads, booking appointments, and integrating with your CRM rather than just taking messages." }, { q: "How does the AI receptionist handle multiple simultaneous calls?", a: "There is no call limit. The AI handles unlimited concurrent calls — ensuring every caller gets an immediate, intelligent response regardless of call volume." }, { q: "What is the typical cost saving vs. a human receptionist?", a: "Most businesses save $30,000–$50,000 per year in receptionist labor while improving coverage from 8 hours/day to 24/7 — with higher consistency and zero sick days." }] },

  "podium-alternative": { title: "Best Podium Alternative | More Power, Less Cost", desc: "Looking for a Podium alternative? Our AI system delivers missed-call text-back, reviews & messaging at lower cost with more automation. Free comparison call.", faqs: [{ q: "Why do businesses switch from Podium to Infinite Rankers?", a: "Businesses switch for deeper AI automation, lower pricing, better CRM integration, and a system built around booking appointments and generating revenue — not just collecting reviews." }, { q: "Does your system include missed call text-back like Podium?", a: "Yes. Missed-call text-back is included — plus AI-powered follow-up sequences, lead qualification, and appointment booking that Podium does not offer." }, { q: "Can you migrate our existing Podium contacts and reviews?", a: "Yes. We handle data migration and configure your new system to match your existing workflows during the transition." }, { q: "Is your system cheaper than Podium?", a: "Most clients reduce their messaging and review software costs by 30–50% while gaining more functionality — particularly around AI automation and lead conversion." }] },
  "podium-alternative-for-home-services": { title: "Podium Alternative for Home Services | Infinite Rankers", desc: "The best Podium alternative for home service businesses — AI booking, text-back, reviews & CRM integration. Home services clients 3x booked jobs vs. Free demo.", faqs: [{ q: "Why is this better than Podium for home service businesses?", a: "Unlike Podium, our system books appointments directly from missed calls, qualifies leads automatically, and integrates with ServiceTitan, Jobber, and Housecall Pro for seamless dispatch." }, { q: "Does it include review generation like Podium?", a: "Yes — and it goes further with automated post-job review requests triggered directly from your job completion status, generating more reviews with less manual effort." }, { q: "Can it handle the volume of a multi-location home services business?", a: "Yes. The system scales across multiple locations with location-specific phone numbers, routing rules, and reporting — without additional per-location Podium pricing." }, { q: "How quickly can we switch from Podium?", a: "Most transitions are complete within 5–7 business days including contact migration, integration setup, and team training." }] },
  "podium-vs-custom-ai-system": { title: "Podium vs. Custom AI System | Which Wins for Your Business?", desc: "Podium vs. a custom AI automation system — see how features, ROI & pricing compare. Most businesses save $300+/mo with more power. Free side-by-side analysis.", faqs: [{ q: "What does Podium do that a custom AI system also does?", a: "Missed call text-back, review requests, webchat, and SMS messaging are all included in our custom AI systems — plus appointment booking, lead qualification, and deeper CRM integration." }, { q: "What can a custom AI system do that Podium cannot?", a: "Outbound lead follow-up sequences, AI-powered lead qualification, appointment booking automation, CRM pipeline management, and custom workflow triggers based on your specific business logic." }, { q: "Which is better for a high-volume service business?", a: "Custom AI systems deliver higher ROI for service businesses generating 50+ leads per month — where automated qualification, booking, and follow-up sequences make a significant revenue impact." }, { q: "How much does a custom AI system cost vs. Podium?", a: "Podium plans typically run $400–$800/month. Our custom systems often cost less while delivering 3–5x more functionality and measurable revenue impact." }] },
  "best-ai-automation-agency-for-local-businesses": { title: "Best AI Automation Agency for Local Businesses", desc: "The best AI automation agency for local service businesses — missed-call text-back, booking AI, CRM & reviews. 100+ local business clients. Free local AI.", faqs: [{ q: "What AI automation tools are most impactful for local businesses?", a: "Missed-call text-back, AI booking agents, CRM automation, and automated review requests deliver the highest ROI for local service businesses because they directly capture and convert more leads." }, { q: "How does AI automation help a local business compete with large chains?", a: "AI gives local businesses enterprise-level response speed and follow-up consistency — answering calls instantly, booking 24/7, and nurturing leads with the same precision as large operations." }, { q: "What is the minimum budget for AI automation for a local business?", a: "Our entry-level local business AI packages start at $997/month, with ROI typically achieved within the first 30–60 days from captured leads that would otherwise be lost." }, { q: "Do you help local businesses with Google reviews as part of AI automation?", a: "Yes. Automated review requests are included — triggered after every completed service to consistently build your Google rating and local search visibility." }] },
  "ai-voice-agent": { title: "AI Voice Agent for Business | 24/7 Phone Automation", desc: "Deploy an AI voice agent that answers calls, qualifies leads, and books appointments 24/7. Never miss another call. Businesses capture 67% more leads. Free demo.", faqs: [{ q: "Does the AI voice agent sound human?", a: "Yes. Our AI uses advanced neural voice synthesis that sounds natural and conversational. Most callers don't realize they're speaking with AI." }, { q: "What phone system does it work with?", a: "Works with virtually all systems including traditional landlines, VoIP (RingCentral, Grasshopper, Google Voice), and mobile numbers. Setup takes 1–3 days." }, { q: "Can it handle complex conversations?", a: "Absolutely. It handles multi-step qualification, pricing questions, objections, and appointment rescheduling with custom scripts built for your specific business flow." }, { q: "How long does setup take?", a: "Most businesses are live within 7–14 business days including script development, voice tuning, CRM integration, and quality testing." }] },
  "ai-appointment-setter": { title: "AI Appointment Setter | Book 3x More Meetings", desc: "AI appointment setter that qualifies leads and fills your calendar 24/7. Clients book 3x more appointments without adding staff. See a live demo today.", faqs: [{ q: "How is an AI appointment setter different from a booking widget?", a: "A booking widget is passive — it just shows available times. Our AI actively reaches out to leads, qualifies them, overcomes objections, and guides them to book — like a skilled SDR, but 24/7 at a fraction of the cost." }, { q: "Which calendar systems does it integrate with?", a: "Google Calendar, Outlook, Apple Calendar, Calendly, Acuity Scheduling, HubSpot Meetings, and most CRM-native scheduling tools." }, { q: "What's the average reduction in no-show rates?", a: "Clients typically see no-show rates drop from 20–30% down to 8–12% using our multi-touch reminder and confirmation system." }, { q: "How fast does the AI respond to new leads?", a: "Within 60 seconds of a new inquiry via SMS, email, or both. Leads contacted within 5 minutes are 9x more likely to convert than those contacted after 30 minutes." }] },
  "ai-answering-service": { title: "AI Answering Service | 24/7 Live Call Handling", desc: "AI answering service that handles every business call 24/7 — qualifies leads, books appointments, and takes messages. Replace your answering service. Free demo.", faqs: [{ q: "Is it really better than a live answering service?", a: "In most cases, yes. Our AI knows your business better than a generic answering service agent, is available 24/7 without overtime charges, and integrates directly with your CRM — something live services cannot do." }, { q: "How is pricing different from traditional answering services?", a: "Traditional services charge per minute ($0.75–$1.50). Our AI is a flat monthly fee with unlimited call capacity — so your costs are predictable regardless of call volume." }, { q: "Can it work with my existing phone number?", a: "Yes. We forward your existing business number to the AI system or set up a new dedicated number. The switch is seamless for your callers." }, { q: "What industries does AI answering work best for?", a: "Home services, medical and dental practices, law firms, real estate, med spas, contractors, and any service business that receives inbound phone inquiries." }] },
  "ai-for-small-business": { title: "AI for Small Business | Automate & Grow Without Hiring", desc: "AI tools built specifically for small businesses — capture more leads, book more appointments, and grow revenue without adding headcount. Starting at.", faqs: [{ q: "Is AI automation affordable for a small business?", a: "Yes. Our small business plans start at $997/month — less than the cost of a part-time employee — and typically deliver $5,000–$20,000 in additional monthly revenue within the first 90 days." }, { q: "Do I need technical knowledge to use AI automation?", a: "None at all. We handle all the setup, integration, and ongoing management. You just see the results — more leads, more appointments, more revenue — through a simple dashboard." }, { q: "How quickly will I see results?", a: "Most small businesses see their first AI-captured leads within 24 hours of launch. Measurable revenue impact typically shows in the first 30 days." }, { q: "What if I already have a CRM or booking system?", a: "We integrate with your existing tools — HubSpot, Salesforce, Go High Level, Calendly, Google Calendar, and more. No need to switch systems." }] },
  "ai-workflow-automation": { title: "AI Workflow Automation for Business | Save 40+ Hours/Week", desc: "AI workflow automation that eliminates manual tasks, connects your tools, and runs your business operations on autopilot. Clients save 40+ hours per. Free demo.", faqs: [{ q: "What kinds of workflows can be automated?", a: "Any repeatable, rule-based process — lead routing, CRM data entry, email follow-ups, appointment reminders, invoice generation, document requests, reporting, status updates, onboarding sequences, and more." }, { q: "Do I need to replace my existing software?", a: "No. We work with your existing tools — HubSpot, Salesforce, QuickBooks, Slack, Google Workspace, Microsoft 365, Calendly, and hundreds more. Automation connects what you have." }, { q: "How long does it take to see ROI?", a: "Most clients see measurable time savings within the first week. Revenue impact from faster follow-ups and fewer dropped balls typically shows in the first 30 days." }, { q: "Can AI handle complex, multi-step business processes?", a: "Yes. Our AI workflows handle complex conditional logic — different paths based on lead quality, deal size, industry, and hundreds of other variables." }] },
  "ai-for-business": { title: "AI for Business | Revenue Growth Systems 24/7", desc: "AI built for business revenue growth — lead capture, appointment booking, CRM automation, and customer support AI. Used by 70+ USA businesses. Free.", faqs: [{ q: "What makes AI Revenue Systems different from regular AI tools?", a: "AI tools like ChatGPT are general-purpose. AI Revenue Systems are purpose-built, custom-configured workflows that automatically capture leads, qualify prospects, book appointments, and manage your pipeline — integrated with your specific business and tools." }, { q: "Which businesses get the best results from AI?", a: "Any business that generates revenue from leads and appointments — home services, healthcare, dental, legal, real estate, med spas, financial services, education, and professional services." }, { q: "What's the typical ROI timeline?", a: "Most clients see measurable revenue impact within 30 days. Full ROI on the investment typically takes 60–90 days. Year 1 clients average 3.2x growth in revenue attributable to AI systems." }, { q: "Do you work with businesses outside the USA?", a: "Our primary focus is USA-based businesses in English-speaking markets. We serve clients across all 50 states." }] },
  "pipeline-automation": { title: "Pipeline Automation | Self-Managing Revenue Pipeline", desc: "AI pipeline automation that moves deals through your CRM automatically — no manual updates, no dropped balls. Clients close 40% more deals with. Free demo.", faqs: [{ q: "Which CRM systems does pipeline automation work with?", a: "HubSpot, Salesforce, Go High Level, Pipedrive, Zoho CRM, Monday.com, and most other major CRM platforms. We also work with custom CRM setups." }, { q: "Do we need to change our sales process?", a: "No. We automate your existing sales process — not replace it. The same stages, same qualification criteria, same deal flow — just running automatically instead of manually." }, { q: "How long until deals start moving faster?", a: "Most clients see faster deal velocity within the first week as automatic follow-up sequences engage stalled deals. Measurable revenue impact shows in the first 30 days." }, { q: "What happens if automation sends the wrong message to a prospect?", a: "All automation sequences are reviewed and approved by your team before launch. You can override, pause, or adjust any automation at any time through a simple dashboard." }] },
  "ai-for-sales": { title: "AI for Sales | Close More Deals With Less Effort", desc: "AI sales tools that qualify leads, follow up automatically, and help your team close 40% more deals. Trusted by 70+ USA sales teams. Free sales AI audit today.", faqs: [{ q: "Will AI replace our sales team?", a: "No. AI handles the manual work — prospecting, scheduling, CRM updates, follow-up — so your sales team can focus exclusively on conversations and closing. Most clients find their team is more motivated after deploying AI." }, { q: "How does AI personalize outreach at scale?", a: "AI uses prospect data — industry, company size, recent activity, pain points — to personalize every message. Outreach feels human and relevant because it is — just generated and sent automatically at perfect timing." }, { q: "What CRMs does the AI sales system work with?", a: "HubSpot, Salesforce, Pipedrive, Go High Level, Zoho, Close.com, and most other major CRM platforms. AI reads and writes data directly in your existing CRM." }, { q: "How long until our sales team sees results?", a: "Most sales teams see measurable improvement within 2 weeks — faster response times, more booked meetings, and cleaner CRM data. Revenue impact typically shows in the first 30–60 days." }] },

  "stop-missing-leads-after-hours": { title: "Stop Missing Leads After Hours | 24/7 AI Lead Capture", desc: "AI systems that capture, qualify & respond to every lead after business hours — so you wake up to booked appointments, not missed opportunities. Free audit.", faqs: [{ q: "How many leads do businesses lose after hours?", a: "Studies show 40–60% of inbound leads contact businesses outside business hours. Without a 24/7 system, those leads go unanswered and book with a competitor by morning." }, { q: "What happens to an after-hours lead with your system?", a: "The AI responds instantly — via phone, SMS, or chat — qualifies the lead, and books an appointment or schedules a callback. Your team wakes up to a fully booked schedule." }, { q: "Is the after-hours AI response truly instant?", a: "Yes. Response time is under 60 seconds — significantly faster than any human team and fast enough to engage leads before they contact an alternative provider." }, { q: "Can the after-hours system handle emergency inquiries differently?", a: "Yes. Emergency contacts are flagged and escalated immediately to your on-call team, while standard inquiries are queued for next-business-day scheduling." }] },
  "automate-appointment-booking": { title: "Automate Appointment Booking | Fill Your Calendar 24/7", desc: "Automate appointment booking across phone, SMS, chat & web — AI fills your calendar without staff involvement. Clients book 3x more appointments. Free demo.", faqs: [{ q: "How does automated appointment booking work?", a: "AI engages incoming leads across all channels, qualifies their intent, checks your real-time calendar availability, books the appointment, and sends automatic confirmations and reminders — all without human involvement." }, { q: "Which booking channels can be automated?", a: "Phone calls, SMS, website chat, Facebook Messenger, Instagram DMs, and web forms — creating a unified omnichannel booking experience." }, { q: "Can automated booking handle complex scheduling requirements?", a: "Yes. Multi-service businesses with different appointment types, durations, and staff assignments are fully supported with custom booking logic." }, { q: "How much time does appointment booking automation save?", a: "Most service businesses save 10–20 hours per week in receptionist and admin time previously spent on phone-based scheduling." }] },
  "missed-call-to-booking-system": { title: "Missed Call to Booking System | Turn Every Call Into a Job", desc: "AI system converts missed calls into booked appointments automatically — text-back within 30 seconds, qualify & schedule without staff. Free missed-call audit.", faqs: [{ q: "How does the missed call to booking system work?", a: "When a call is missed, the system immediately sends a personalized text to the caller, starts an AI conversation to capture their need, and books them into your calendar — often before you even see the missed call notification." }, { q: "What percentage of missed calls can be recovered?", a: "Most clients recover 35–55% of missed calls as booked appointments — turning previously lost revenue into scheduled jobs." }, { q: "Can it handle different business types calling for different services?", a: "Yes. The AI identifies the service needed, books the appropriate appointment type, and routes to the right team member or location." }, { q: "Does it work with my existing phone system?", a: "Yes. It integrates with most business phone systems, VoIP providers, and virtual numbers without requiring a full system replacement." }] },
  "automate-customer-follow-up": { title: "Automate Customer Follow-Up | Convert 3x More Leads", desc: "AI follow-up automation engages every lead across SMS, email & phone until they book or opt out — clients convert 3x more leads without more staff. Free audit.", faqs: [{ q: "How many follow-ups does it take to convert most leads?", a: "Research shows 80% of sales require 5–12 follow-up touches, yet most businesses give up after 1–2. Automation ensures every lead receives the full follow-up sequence needed to convert." }, { q: "What channels does automated follow-up use?", a: "SMS, email, voicemail drops, and AI phone calls — coordinated in a multi-channel sequence with behavioral branching based on lead response." }, { q: "How long does a follow-up sequence run?", a: "We typically configure 30-day sequences with increasing intervals — daily for the first week, every 2–3 days after — ensuring long-term nurturing without overwhelming prospects." }, { q: "Can follow-up be personalized per lead?", a: "Yes. Sequences are personalized with the lead's name, service interest, location, and previous touchpoints — making each message feel relevant rather than generic." }] },
  "reactivate-old-leads": { title: "Reactivate Old Leads | Win Back Dormant Prospects", desc: "AI reactivation campaigns win back leads that went cold — SMS & email sequences that revive dormant prospects. Clients recover $20K–$100K in lost. Free demo.", faqs: [{ q: "How does lead reactivation work?", a: "We identify leads in your CRM that went cold — no response in 30–180 days — and deploy targeted AI sequences via SMS and email to re-engage them with fresh offers and renewed outreach." }, { q: "What response rates do lead reactivation campaigns achieve?", a: "Most reactivation campaigns achieve 10–25% response rates from dormant leads — significantly higher than cold outreach because these prospects already know your business." }, { q: "Can old leads really still convert after months of silence?", a: "Yes. Buying decisions are often delayed rather than dead. Re-engaging at the right moment — with the right message — regularly recovers leads that simply needed more time or a different trigger." }, { q: "How many leads can be reactivated in one campaign?", a: "Campaigns scale to any list size. Most businesses run reactivation on lists of 200–2,000+ contacts, generating immediate bookings from a database they had already written off." }] },
  "ai-intake-system-for-law-firms": { title: "AI Intake System for Law Firms | 175% More Consultations", desc: "AI intake system for law firms — qualifies leads 24/7, captures case details & books consultations automatically. Law firms see 175% more qualified. Free demo.", faqs: [{ q: "What information does the AI intake system collect from potential clients?", a: "It captures contact information, case type, incident details, injury or damage description, opposing parties, urgency level, and preferred consultation time — all before the attorney is involved." }, { q: "How does it qualify leads by practice area?", a: "We configure qualification logic for each practice area — PI, criminal, family, immigration, estate — routing leads to the appropriate attorney or intake specialist based on case type." }, { q: "Is the AI intake system compliant with bar association rules?", a: "Yes. It includes appropriate disclaimers, avoids attorney-client relationship creation, and routes all substantive legal guidance to licensed staff." }, { q: "Can it handle intake in multiple languages?", a: "Yes. Spanish and other language support is available depending on your market — enabling you to capture leads your English-only competitors miss." }] },
  "automate-review-requests": { title: "Automate Review Requests | Build Your 5-Star Reputation", desc: "Automated review request system sends Google review asks at the perfect moment — clients average 4.8 stars and 300% more reviews in 90 days. Free demo.", faqs: [{ q: "When is the best time to send automated review requests?", a: "Immediately after a positive service completion — within 2–4 hours. We trigger requests from your job completion status or appointment records to maximize response rates." }, { q: "Which review platforms do you target?", a: "Primarily Google (highest local SEO impact), with optional Yelp, Facebook, and industry-specific platform flows." }, { q: "What review request response rates are typical?", a: "Automated review requests achieve 15–30% response rates — significantly higher than manual asks because timing is optimized and the request is delivered via SMS for maximum visibility." }, { q: "Can the system detect unhappy customers and avoid asking them for reviews?", a: "Yes. We configure sentiment filters that identify negative feedback signals before sending the public review request — routing dissatisfied customers to a private feedback flow instead." }] },
  "book-more-estimates-with-ai": { title: "Book More Estimates with AI | Fill Your Pipeline", desc: "AI systems that convert inquiries into booked estimates automatically — phone, SMS & web. Home services clients book 3x more estimates. Free estimate.", faqs: [{ q: "How does AI help service businesses book more estimates?", a: "AI responds to every inquiry instantly — capturing the job details, confirming availability, and booking the estimate before the homeowner has a chance to call a competitor." }, { q: "Can it handle the back-and-forth of scheduling estimate appointments?", a: "Yes. The AI manages the full scheduling conversation — proposing times, handling objections, and confirming the appointment with reminders to reduce no-shows." }, { q: "Does it work for emergency and non-emergency estimate requests differently?", a: "Yes. Emergency requests are escalated immediately while routine estimates are scheduled efficiently within your available slots." }, { q: "Can it follow up on estimates that haven't been accepted?", a: "Yes. Automated estimate follow-up sequences check in at 24 hours, 3 days, and 7 days after sending — converting significantly more estimates into booked jobs." }] },
  "automate-front-desk-workflows": { title: "Automate Front Desk Workflows | Save 20hrs/Week", desc: "AI front desk automation handles calls, booking, reminders & intake — replacing manual reception tasks. Clients save 20+ hours/week and miss zero. Free demo.", faqs: [{ q: "What front desk tasks can be fully automated with AI?", a: "Inbound call answering, appointment booking, lead qualification, reminder sending, intake form collection, FAQ responses, and routing to the right team member — all without human staff involvement." }, { q: "Will front desk automation work alongside our human receptionists?", a: "Yes. AI handles overflow calls, after-hours, and repetitive tasks — freeing your human receptionists to handle complex situations that require personal attention." }, { q: "How much time does front desk automation save per week?", a: "Most service businesses save 15–25 hours of front desk time per week — equivalent to a part-time receptionist — while increasing lead capture rates significantly." }, { q: "Is it difficult to train staff on the new automated system?", a: "No. Staff interact with a simple dashboard showing all AI-handled conversations, bookings, and escalations. Training typically takes less than 2 hours." }] },
  "improve-lead-response-time": { title: "Improve Lead Response Time | Respond in 60 Seconds", desc: "AI systems that respond to every new lead in under 60 seconds — before your competitor. Businesses that respond in 1 min are 21x more likely to. Free demo.", faqs: [{ q: "How much does lead response time affect conversion rates?", a: "Research shows businesses that respond within 1 minute are 21x more likely to qualify a lead compared to those that respond after 30 minutes. Speed is the single biggest conversion lever." }, { q: "How does AI achieve sub-60-second lead response?", a: "The AI monitors all lead channels in real-time and triggers an immediate personalized response the moment a lead submits — no human action required." }, { q: "What channels can have sub-60-second AI response enabled?", a: "Web forms, phone calls, SMS inquiries, Facebook Lead Ads, Google Ads calls, chat widgets, and any digital channel where leads make contact with your business." }, { q: "Won't leads know they're talking to AI?", a: "Our AI communicates in a natural, conversational style that focuses on their need first. Most prospects appreciate the instant response regardless of source." }] },
  "podium-competitors": { title: "Podium Competitors & Alternatives 2025 | Infinite Rankers", desc: "Compare the top Podium competitors in 2025. See which platform delivers more AI automation, better pricing, and real revenue growth for your. Free demo.", faqs: [{ q: "What is the best Podium competitor?", a: "For messaging and reviews alone, Birdeye and Reputation.com are strong alternatives. For complete AI Revenue Systems — lead capture, qualification, booking, and pipeline automation — Infinite Rankers delivers capabilities no messaging platform can match." }, { q: "Is Podium worth the price?", a: "For basic messaging and review requests, Podium works. But at $400+/month on annual contracts with limited AI automation, most growing service businesses find they outgrow Podium's capabilities without getting proportional value." }, { q: "Can I switch from Podium without losing my data?", a: "Yes. We handle full data migration — contacts, review history, conversation data — typically within 5–7 business days with zero disruption to ongoing customer conversations." }, { q: "Do you have a contract like Podium?", a: "No. Infinite Rankers operates on month-to-month pricing with no cancellation penalties. We believe you should stay because of the results, not because of contract terms." }] },
  "podium-vs-birdeye": { title: "Podium vs Birdeye 2025 | Which Platform Wins?", desc: "Podium vs Birdeye compared on pricing, features, AI automation, and ROI. See which wins for your business — or why both miss what growing businesses. Free demo.", faqs: [{ q: "Is Podium or Birdeye better for reviews?", a: "Both are strong for review management. Birdeye has a slight edge in multi-platform review monitoring while Podium's SMS-first approach typically generates higher review response rates. For most local businesses, either works well for reviews specifically." }, { q: "Which is cheaper — Podium or Birdeye?", a: "Birdeye typically starts slightly lower (~$350/month) vs. Podium (~$400/month), but both require annual contracts and pricing varies significantly by feature tier and number of locations." }, { q: "Can either platform replace a full AI automation system?", a: "No. Both Podium and Birdeye handle messaging and reviews but do not offer true AI lead qualification, automated appointment booking, pipeline automation, or outbound AI lead capture — capabilities that Infinite Rankers specializes in." }, { q: "Do Podium and Birdeye have free trials?", a: "Neither offers a traditional free trial for their paid plans. Both require demos and typically push toward annual contract commitments before you can fully evaluate the platform." }] },
  "podium-pricing-too-expensive": { title: "Podium Too Expensive? Better Alternatives at Lower Cost", desc: "Podium pricing starts at $400+/month with forced annual contracts. See what you actually get — and discover better alternatives that deliver more for less.", faqs: [{ q: "How much does Podium actually cost?", a: "Podium's pricing starts around $249/month for a very basic 2-location plan, scaling to $399/month for the Core plan and $599–$799/month for higher tiers. All plans require annual contracts and prices have reportedly increased for existing customers mid-contract." }, { q: "Can you negotiate Podium pricing?", a: "Yes, sometimes — especially at renewal or if you're a new customer with multiple locations. However, you're still committing to an annual contract with cancellation penalties regardless of the negotiated rate." }, { q: "What happens if I cancel Podium early?", a: "Multiple verified customer reviews confirm that canceling Podium before your contract expires results in being billed the full remaining balance immediately. There is no prorated refund policy." }, { q: "Is there a Podium alternative without a contract?", a: "Yes. Infinite Rankers operates on month-to-month pricing with no cancellation fees. We offer all the capabilities of Podium plus true AI lead qualification and appointment booking, without the annual commitment." }] },
  "best-podium-alternative-2025": { title: "Best Podium Alternative 2025 | Top AI Revenue Systems", desc: "The best Podium alternatives in 2025 compared: features, pricing, AI automation, and real ROI. Find the platform that replaces Podium and grows your revenue.", faqs: [{ q: "What is the absolute best Podium alternative in 2025?", a: "For businesses focused on revenue growth through AI automation, Infinite Rankers leads the category — offering AI lead qualification, automated appointment booking, review generation, and pipeline automation on month-to-month pricing. For businesses that only need messaging and reviews, Birdeye is the strongest traditional alternative." }, { q: "Has Podium improved in 2025?", a: "Podium has added AI features through their 'Jerry AI' product, but the platform remains primarily messaging and review focused. Contract terms and pricing structures have not improved significantly as of 2025." }, { q: "What do Podium alternatives cost in 2025?", a: "Quality Podium alternatives range from $200–$600/month depending on features and volume. Infinite Rankers pricing is based on your specific business needs — most clients find our complete AI systems deliver higher ROI than Podium at comparable price points." }, { q: "How long does it take to switch from Podium?", a: "Most transitions from Podium to Infinite Rankers complete within 7–14 business days, including full data migration and AI system configuration. We manage the entire transition — you don't need to touch any technical setup." }] },
  "podium-alternative-no-contract": { title: "Podium Alternative No Contract | Month-to-Month AI Tools", desc: "Find a Podium alternative with no annual contract. Month-to-month AI review management, texting, and lead automation — cancel anytime with no. Free demo.", faqs: [{ q: "Is there really no contract with Infinite Rankers?", a: "Correct. All Infinite Rankers AI Revenue System plans are month-to-month with 30 days cancellation notice. No annual contract, no early termination fee, no hidden minimum periods." }, { q: "What happens to my data if I cancel?", a: "All your data — contacts, conversation history, review records, automation settings — is fully exportable and belongs to you at all times. We provide a complete data export upon request." }, { q: "How does Infinite Rankers make money without contracts?", a: "We make money by delivering results that make clients want to stay. Our retention comes from ROI — not legal commitments. This model forces us to perform every single month." }, { q: "Can I pause my Infinite Rankers account instead of canceling?", a: "Yes. If your business is seasonal or you need a temporary pause, we offer flexible pause options rather than full cancellation — maintaining your AI system configuration without the monthly cost." }] },
};

const INDUSTRY_VERTICAL_PAGES: Record<string, {
  title: string;
  desc: string;
  serviceName?: string;
  audience?: string;
  areaServed?: string;
  faqs: { q: string; a: string }[];
}> = {
  "dental-ai": {
    title: "AI Marketing for Dental Practices | 148% More Patients",
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
    title: "AI Marketing for HVAC & Plumbing | 190% More Leads",
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
    title: "AI Marketing for Law Firms | 175% More Consultations",
    desc: "Law firm AI client acquisition: AI receptionist, SEO & lead qualification. Law firms average 175% more qualified consultations without adding intake. Free demo.",
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
    title: "AI Marketing for Real Estate | 45+ Leads/Month",
    desc: "Real estate AI lead generation: AI qualification, Google Ads & automated follow-up. Agents and brokerages average 45+ qualified buyer & seller leads. Free demo.",
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
    title: "AI Marketing for Medical Clinics | 125% Patient Growth",
    desc: "Medical clinic AI patient acquisition: AI receptionist, Google Ads & appointment booking. Clinics average 125% new patient volume growth. Free demo.",
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
    title: "AI Marketing for E-Commerce | 62% Cart Recovery",
    desc: "E-commerce AI revenue system: Meta Ads, CRM automation & AI email sequences. Brands average 62% cart recovery rate and 180% revenue growth in 6. Free demo.",
    serviceName: "AI Revenue System for E-Commerce Brands",
    audience: "E-commerce store owners and DTC brand founders in the United States",
    areaServed: "United States",
    faqs: [
      { q: "Which e-commerce platforms do you work with?", a: "We integrate with Shopify, WooCommerce, BigCommerce, Magento, and custom platforms — connecting your store data to Meta Ads, email automation, and CRM for unified attribution." },
      { q: "How does AI improve cart abandonment recovery?", a: "Instead of fixed-timer emails, our AI triggers recovery sequences based on individual abandonment behavior — adjusting timing, offer, and channel (email vs SMS) dynamically to maximize conversion." },
      { q: "Can you help with Amazon or just our direct store?", a: "We focus on direct-to-consumer growth — driving traffic and revenue to your owned store — though we can advise on cross-channel strategy including Amazon brand presence." },
    ],
  },
  "cancel-podium-contract": { title: "How to Cancel Podium Contract | Switch to Better AI Platform", desc: "Trying to cancel your Podium contract? Learn your options, timeline, and how to migrate to a better no-contract AI revenue platform without losing your data.", faqs: [{ q: "Can I cancel my Podium contract early without penalty?", a: "Generally no — Podium's standard contracts require payment of the full remaining balance upon early cancellation. Some businesses have successfully negotiated exits by citing service failures or billing discrepancies, but this is not guaranteed." }, { q: "How much does it cost to cancel Podium early?", a: "Typically the full remaining contract balance — if you have 8 months left at $400/month, expect a $3,200 cancellation bill. Podium does not prorate early exits in most standard contract scenarios." }, { q: "Does Podium offer a free trial before committing?", a: "Podium does not offer a traditional free trial for paid plans. They do offer demos, but these typically lead directly into annual contract proposals." }] },
  "podium-alternative-cheaper": { title: "Cheaper Podium Alternative | More AI, Lower Cost", desc: "Podium costs $400+/month with annual contracts. See affordable alternatives that deliver more automation and better ROI at a fraction of Podium's. Free demo.", faqs: [{ q: "Why is Podium so expensive?", a: "Podium's pricing reflects their enterprise positioning, brand investment, and VC-backed growth model. However, the feature set — primarily messaging and review management — doesn't always justify the $400–$800/month price tag for most local service businesses." }, { q: "What is the cheapest Podium alternative?", a: "Budget alternatives include NiceJob (~$75/mo for reviews only) and Signpost. For a complete AI Revenue System, Infinite Rankers delivers significantly more functionality than Podium at a lower total cost and without annual contract commitments." }, { q: "Do cheaper alternatives sacrifice quality?", a: "Not necessarily. Pricing depends on business model more than quality. Infinite Rankers charges less than Podium while delivering more AI functionality because our model is built around revenue-sharing outcomes — not software subscription tiers." }] },
  "podium-alternative-for-dentists": { title: "Best Podium Alternative for Dentists | Dental AI Review", desc: "The best Podium alternative for dental practices — AI review automation, patient texting, appointment booking, and reputation management. No annual contract.", faqs: [{ q: "Does the dental AI system integrate with Dentrix?", a: "Yes. We integrate with Dentrix, Eaglesoft, Open Dental, Curve Dental, and most other major practice management systems — allowing AI automations to trigger from real appointment and treatment data." }, { q: "Is the patient communication system HIPAA compliant?", a: "Our systems are built with HIPAA considerations in mind, including BAA agreements where appropriate, secure messaging infrastructure, and compliant data handling protocols. We work with your privacy officer to ensure proper implementation." }, { q: "How many more Google reviews can I expect?", a: "Most dental practices see review volume increase 200–400% within the first 60 days of deploying automated post-visit review requests. Review ratings also improve as the volume of positive reviews outweighs occasional negatives." }] },
  "podium-alternative-for-auto-shops": { title: "Podium Alternative for Auto Shops | AI Review & Booking", desc: "The best Podium alternative for auto repair shops — AI review automation, service booking, customer follow-up, and reputation management without. Free demo.", faqs: [{ q: "Does the auto shop AI integrate with shop management software?", a: "Yes. We integrate with AutoRepair Cloud, Mitchell, Shop-Ware, and other major auto shop management systems — triggering communications from actual service status and vehicle data." }, { q: "How many more reviews will my auto shop get?", a: "Most auto shops see review volume increase 200–350% within 60 days of deploying post-pickup review automation. Because requests fire at pickup — not days later — response rates are 2-3x higher than scheduled blasts." }, { q: "Can the AI handle service estimate inquiries after hours?", a: "Yes. The AI handles after-hours service inquiries, answers common questions about services and pricing, and books appointments directly into your shop calendar — capturing customers who would otherwise call a competitor that answers." }] },
  "podium-alternative-for-contractors": { title: "Podium Alternative for Contractors | AI Lead & Review System", desc: "Best Podium alternative for contractors — AI lead capture, estimate booking, review automation, and follow-up. Stop losing jobs to faster. Free demo.", faqs: [{ q: "How does the AI handle contractor calls when I'm on a job site?", a: "Your business number forwards to the AI when unanswered. The AI greets callers professionally, gathers job details, answers common questions, and books estimate appointments — sending you a notification with full details while you stay focused on the current job." }, { q: "Can the AI qualify job types automatically?", a: "Yes. We configure qualification criteria specific to your contracting specialty — job size, service area, job type, urgency level, and homeowner vs. commercial — so you only receive leads that match your ideal job profile." }, { q: "Does the estimate follow-up system handle price objections?", a: "The AI can address common price objections with pre-configured responses, value explanations, and alternative package options. Complex pricing negotiations are escalated to you with full context from the conversation." }] },
  "podium-alternative-for-hvac": { title: "Best Podium Alternative for HVAC Companies | AI Automation", desc: "Best Podium alternative for HVAC companies — AI dispatch, service booking, review automation, and seasonal campaigns. More jobs booked, better. Free demo.", faqs: [{ q: "Can the AI handle after-hours HVAC emergency calls?", a: "Yes. The AI answers emergency calls 24/7, gathers the problem description, customer address, and availability, then notifies your on-call technician with full details — ensuring you never lose an emergency job to voicemail." }, { q: "Does HVAC AI integrate with ServiceTitan or Housecall Pro?", a: "Yes. We integrate with ServiceTitan, Housecall Pro, FieldEdge, and other major HVAC software — triggering automations from actual job status, service agreement data, and customer history." }, { q: "How do seasonal campaigns work?", a: "We build pre-configured spring and fall campaigns tailored to your market. These go out to your customer list 4-6 weeks before peak season, booking tune-up appointments before your competitors reach the same customers." }] },
  "google-review-software": { title: "Google Review Software | AI-Powered Review Generation", desc: "AI-powered Google review software that generates 5-star reviews automatically. Get 300%+ more Google reviews with our automated review request system.", faqs: [{ q: "How does AI know when to send a review request?", a: "The system connects to your booking platform, CRM, or job management software to identify service completion events — triggering requests based on actual signals, not time-based schedules." }, { q: "Which platforms does the software support?", a: "Google Business Profile, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, Angi, BBB, and any industry-specific review platform relevant to your business. Priority platforms are configurable." }, { q: "What response rates should I expect?", a: "Most clients achieve 40-67% SMS review response rates compared to 8-15% for email-only requests. Combined SMS + email sequences typically hit 55-70% with the right personalization and timing." }] },
  "get-more-google-reviews": { title: "How to Get More Google Reviews | Automated Review System", desc: "Get more Google reviews automatically with AI-timed review requests. Our system generates 300%+ more reviews — boosting your local search ranking and star.", faqs: [{ q: "How many more reviews will I get per month?", a: "Most businesses see review volume increase 200-400% within 60 days. A typical client going from 5 reviews/month reaches 20-50+/month depending on service volume and customer response rates." }, { q: "Will this work for any type of business?", a: "Yes. The system works for any service business — dental, auto repair, HVAC, plumbing, roofing, med spa, restaurants, law firms, and more. We customize timing and messaging for each industry." }, { q: "How do I get customers to actually click the review link?", a: "SMS review requests with personalized content and direct Google review links achieve 40-67% click-through rates. The combination of timing, personalization, and the direct link eliminates every friction point." }] },
  "automated-review-requests": { title: "Automated Review Requests | AI-Powered Review Generation", desc: "Automated review request system that sends personalized SMS and email requests at the perfect moment — generating 3x more reviews with zero manual. Free demo.", faqs: [{ q: "What systems does it connect to for completion triggers?", a: "We integrate with major CRMs (HubSpot, Salesforce, GoHighLevel), booking platforms (Calendly, Acuity), job management software (ServiceTitan, Jobber, Housecall Pro), and most POS systems — or via Zapier/webhook for custom setups." }, { q: "Can I customize the review request messages?", a: "Yes. We build custom templates for each service type you offer, with AI personalization adding service-specific details automatically. You approve all templates before launch." }, { q: "What happens if a customer leaves a bad review?", a: "The system monitors for negative reviews in real-time. When one appears, you're notified immediately with an AI-generated response suggestion. Responding quickly and professionally significantly reduces the impact on your overall rating." }] },
  "review-management-software": { title: "Review Management Software | AI-Powered Platform", desc: "AI review management software that generates reviews, monitors all platforms, and helps you respond — all in one dashboard. 4.8+ star ratings for 90%. Free demo.", faqs: [{ q: "How many review platforms does the software monitor?", a: "We monitor 20+ platforms including Google, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, Angi, Houzz, TripAdvisor, BBB, and industry-specific platforms relevant to your business type." }, { q: "Does the AI response feature post responses automatically?", a: "No — and intentionally. AI generates suggestions that your team reviews and approves before posting. This maintains quality control while dramatically reducing the time to respond from minutes to seconds." }, { q: "Can I use this for multiple business locations?", a: "Yes. The platform supports multi-location management with individual and aggregate dashboards — ideal for businesses with 2-50+ locations that need centralized review oversight with location-level detail." }] },
  "reputation-management-for-small-business": { title: "Reputation Management for Small Business | AI Review System", desc: "AI reputation management for small businesses — automate review generation, monitor all platforms, and build a 4.8+ star rating. Trusted by 500+. Free demo.", faqs: [{ q: "Is reputation management affordable for a small business?", a: "Yes. Infinite Rankers' small business plans start at pricing accessible to most service businesses. The ROI is immediate — most clients see the investment recouped within the first month through new customer inquiries driven by improved ratings." }, { q: "Do I need technical knowledge to set this up?", a: "None at all. We handle all setup, integration, and configuration. You participate in a 30-minute onboarding call, approve your request templates, and the system runs automatically from there." }, { q: "What if my business only gets 20-30 customers per month?", a: "The system works for any volume. At 20 customers per month with a 50% response rate, you'll generate 10 new reviews monthly — which is excellent for a small business and will dramatically improve your local search ranking." }] },
  "reputation-management-platform": { title: "Reputation Management Platform | AI Review & Rating System", desc: "Full-featured reputation management platform that generates reviews, monitors all platforms, and tracks revenue impact. Trusted by 70+ USA businesses. Free.", faqs: [{ q: "What makes this different from Birdeye or Podium?", a: "Both platforms focus on messaging and basic review monitoring. Infinite Rankers centers on active review generation triggered by business events, AI response quality, and — crucially — connecting reputation metrics to revenue outcomes. The revenue attribution capability alone is unique." }, { q: "How does multi-location reputation management work?", a: "Each location has its own monitoring, generation, and reporting — all visible in a single group dashboard. You can compare location performance and apply best practices from top-performing locations to underperforming ones." }, { q: "What is the implementation timeline?", a: "Complete platform implementation typically takes 7-14 business days including all system integrations, platform configuration, team training, and soft launch testing period before full activation." }] },
  "google-review-management-tool": { title: "Google Review Management Tool | Monitor & Generate Reviews", desc: "The Google review management tool that generates more reviews, monitors in real-time, and helps you respond professionally. 4.8+ star ratings for 90%. Free demo.", faqs: [{ q: "Does the Google review tool work for any type of business?", a: "Yes. The tool is configured for any service business — dental, auto repair, home services, restaurants, fitness, healthcare, legal, and more. Review request timing and messaging are customized per business type." }, { q: "How does the tool generate more Google reviews?", a: "By connecting to your business systems and sending personalized review requests triggered by actual service completion. Timing reviews to peak satisfaction and personalizing messages to the specific service generates 3x more responses than generic blasts." }, { q: "Can the tool help me respond to negative Google reviews?", a: "Yes. When a negative review appears, you're instantly notified and AI generates a professional, empathetic response suggestion within 60 seconds." }] },
  "review-request-software": { title: "Review Request Software | AI-Automated Review Generation", desc: "Review request software that sends personalized SMS and email requests automatically — generating 3x more reviews than manual requests. Setup in 24. Free demo.", faqs: [{ q: "What response rates should I expect?", a: "SMS review requests typically achieve 40-67% response rates when personalized and timed correctly. Email-only requests average 8-15%. Our combined SMS + email sequences achieve 55-70% average response rates — 3-5x industry average for generic software." }, { q: "How is this different from just texting customers manually?", a: "Manual texting is inconsistent — you forget, you send at wrong times, you send generic messages. Our software ensures 100% of customers receive personalized, perfectly-timed requests automatically, every single time." }, { q: "Can I use my existing customer list to generate reviews?", a: "Yes. We can run a one-time reactivation campaign to your existing customer list to generate reviews from past customers — in addition to ongoing automation for new customers." }] },
  "local-business-reputation-management": { title: "Local Business Reputation Management | AI Review System", desc: "AI reputation management for local businesses — generate more reviews, monitor all platforms, and dominate local search. 500+ local business clients. Free.", faqs: [{ q: "How important are Google reviews for local search rankings?", a: "Extremely important. Google uses review count, rating, review velocity, and response rate as local search ranking factors. Businesses that consistently generate reviews hold significant ranking advantages over those that don't." }, { q: "Which review platforms matter most for local businesses?", a: "Google reviews have the highest impact on local search rankings. Beyond Google: Yelp matters for restaurants and some home services, Facebook for trust signals, and industry-specific platforms (Healthgrades for healthcare, HomeAdvisor for contractors, Avvo for legal)." }, { q: "How do I respond to negative reviews?", a: "The key is speed and professionalism. AI-generated response suggestions provide a starting point within 60 seconds of a negative review appearing. Professional, empathetic responses frequently prompt customers to update their rating." }] },
  "business-texting-software": { title: "Business Texting Software | AI Two-Way SMS for Business", desc: "AI-powered business texting software that handles two-way SMS conversations, automates follow-ups, and books appointments via text. No annual. Free demo.", faqs: [{ q: "Can the AI really handle full SMS conversations?", a: "Yes. Our AI uses advanced natural language processing to handle multi-turn SMS conversations — answering questions, addressing objections, and booking appointments through natural text exchanges that customers rarely distinguish from a human." }, { q: "Is business texting TCPA compliant?", a: "Yes. Our system includes built-in TCPA compliance features — opt-in capture, opt-out management, consent timestamp recording, and compliant messaging flows." }, { q: "What CRMs does the SMS system integrate with?", a: "HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho, Close.com, and most other major CRM platforms with bi-directional sync." }] },
  "text-message-marketing-for-small-business": { title: "Text Message Marketing for Small Business | AI SMS", desc: "Text message marketing for small businesses — AI-powered SMS campaigns with 98% open rates that drive real revenue. No annual contract. Free campaign demo.", faqs: [{ q: "Is text message marketing legal for small businesses?", a: "Yes, with proper consent management. TCPA requires prior consent from customers before texting them for marketing. Our system includes opt-in collection, consent timestamping, and opt-out management to maintain compliance." }, { q: "How do I build my SMS marketing list?", a: "We help you collect opt-ins through your website, at point of sale, on your invoices, and via keyword campaigns. Most businesses collect 50-200 new opt-ins per month depending on customer volume." }, { q: "What kinds of SMS campaigns work best for small business?", a: "Reactivation campaigns (reaching lapsed customers) typically generate the highest ROI. Seasonal promotions, appointment reminders, and flash sales are also highly effective. We build campaign templates specific to your business type." }] },
  "two-way-text-messaging-for-business": { title: "Two-Way Text Messaging for Business | AI SMS System", desc: "Two-way text messaging for business powered by AI — handle customer conversations, qualify leads, and book appointments via SMS automatically. Free demo.", faqs: [{ q: "Can the AI maintain conversation context across multiple texts?", a: "Yes. Our AI tracks conversation history and maintains full context across multi-turn exchanges — so customers can ask follow-up questions naturally and the AI responds coherently." }, { q: "What happens if a text is too complex for the AI?", a: "For complex scenarios outside the AI's configured scope, the system escalates to a human team member with full conversation context — ensuring no lead is lost due to complexity." }, { q: "How does the AI know what appointment times to offer?", a: "The AI integrates with your calendar in real-time — only offering times that are actually available for the appropriate service type and technician." }] },
  "automated-text-messages-for-business": { title: "Automated Text Messages for Business | AI SMS Sequences", desc: "Automated text messages for business — AI-powered SMS sequences for follow-up, reminders, review requests, and lead nurturing. Set it up once. Free demo.", faqs: [{ q: "What types of automated text sequences work best?", a: "The most impactful sequences vary by industry: Appointment businesses need reminders most urgently. Service businesses need post-service review requests. Sales-heavy businesses need lead follow-up sequences. Membership businesses need reactivation campaigns. We audit your situation and recommend the highest-ROI sequences first." }, { q: "Can I customize the automated message content?", a: "Yes. All message templates are customized for your business, service types, and brand voice. You approve all templates before launch. AI adds personalization dynamically." }, { q: "How long until automated sequences start generating results?", a: "Appointment reminder sequences show impact immediately — typically reducing no-shows within the first week. Review request sequences generate first automated reviews within 24 hours. Lead nurture sequences show conversion improvements within 30 days." }] },
  "sms-marketing-platform": { title: "SMS Marketing Platform | AI-Powered Business SMS", desc: "AI-powered SMS marketing platform for local businesses — manage campaigns, automate responses, and book appointments via text. 98% open rates. Free demo.", faqs: [{ q: "What's included in the SMS marketing platform?", a: "Our platform includes campaign builder, audience segmentation, automated sequence library, AI two-way reply management, review request campaigns, revenue attribution dashboard, compliance management, and a dedicated marketing strategist — all in one package." }, { q: "How is this different from a basic SMS tool like SlickText or SimpleTexting?", a: "Basic SMS tools manage delivery and contacts. Infinite Rankers' platform adds AI two-way conversation management, business system integration for automated triggers, revenue attribution, and full marketing strategy support — transforming SMS from a channel into a revenue system." }, { q: "Can I migrate my existing contact list?", a: "Yes. We handle full contact list migration from any existing SMS platform — including all opt-in records, contact details, and history." }] },
  "automated-customer-texting": { title: "Automated Customer Texting | AI SMS for Business", desc: "Automated customer texting that follows up with every lead, reminds every appointment, and requests every review — automatically. Zero manual effort. Free.", faqs: [{ q: "How is automated customer texting different from manual texting?", a: "The difference is consistency, timing, and scale. Automated texting covers 100% of customers, at exactly the right moment, every single time — without anyone remembering to send it. Manual texting covers whoever staff remember, when they have time, with inconsistent timing." }, { q: "Can I see all automated texts before they go out?", a: "Yes. All templates are approved by you before launch. You can also review sent messages and conversation logs from the dashboard at any time." }, { q: "What happens when a customer replies to an automated text?", a: "AI handles the reply conversationally. It answers questions, addresses concerns, and advances toward the next stage. Complex conversations are flagged for human review when outside the AI's configured scope." }] },
  "sms-customer-follow-up": { title: "SMS Customer Follow-Up | AI Automated Text Follow-Up", desc: "SMS customer follow-up that never misses a lead — AI sends personalized follow-up texts after estimates, appointments, and services automatically. 3x. Free demo.", faqs: [{ q: "How many follow-up texts are in a typical sequence?", a: "We configure sequences based on your industry and sales cycle. Most sequences include 3-5 texts over 7-14 days — enough to reach the majority of convertible prospects without being excessive. All sequences stop immediately when a prospect books or opts out." }, { q: "What tone should follow-up texts use?", a: "We build follow-up sequences in your brand voice — professional but warm, persistent but not pushy. AI adds personalization referencing the specific estimate or conversation to make each follow-up feel relevant." }, { q: "Can the AI handle price objections via text?", a: "Yes. We configure AI responses to common objections — price concerns, timing delays, comparison shopping. The AI addresses these naturally via text, often rescuing leads that would have gone to competitors." }] },
  "ai-for-small-business": { title: "AI for Small Business | Automate Leads, Bookings & Reviews", desc: "AI Revenue Systems for small businesses — automate lead capture, appointment booking, review generation, and customer follow-up. Save 20+ hours/week. Free.", faqs: [{ q: "Is AI affordable for a small business?", a: "Yes. Infinite Rankers' AI Revenue Systems for small businesses are priced based on your revenue goals and employee count — not enterprise software tiers. Most small businesses see full ROI within the first 30 days from additional leads captured alone." }, { q: "Do I need technical knowledge to use an AI Revenue System?", a: "None. We handle all setup, integration, and ongoing management. You participate in a 30-minute onboarding call, approve your templates, and the system runs automatically from there." }, { q: "How long until I see results from AI?", a: "Most clients see results within the first week — typically through after-hours lead captures that would have previously been lost. Meaningful revenue growth typically shows within 30-60 days as review generation and follow-up sequences take effect." }] },
  "ai-for-local-business": { title: "AI for Local Business | Revenue Automation System", desc: "AI Revenue Systems for local businesses — capture more leads, book more appointments, generate more reviews, and outrank competitors on Google. Free local.", faqs: [{ q: "How does AI help local businesses specifically?", a: "AI helps local businesses in 3 primary ways: (1) Faster lead response — capturing local customers before competitors call back. (2) More Google reviews — generating consistent review volume that improves local search rankings. (3) 24/7 coverage — capturing after-hours local leads that manual businesses miss entirely." }, { q: "How long until AI improves my local Google ranking?", a: "Most clients see measurable local ranking improvement within 60-90 days — driven by increased review volume and response rate. Significant map pack position improvement typically shows in 3-4 months for moderate-competition local markets." }, { q: "What local industries is AI Revenue Systems best suited for?", a: "AI Revenue Systems work particularly well for local service businesses — HVAC, plumbing, dental, auto repair, roofing, landscaping, cleaning, chiropractic, med spa, legal, and many others. Any local business with phone, text, or web-based customer inquiries is an excellent candidate." }] },
  "ai-receptionist-for-small-business": { title: "AI Receptionist for Small Business | 24/7 Call Answering", desc: "AI receptionist for small businesses — answers every call, qualifies every lead, and books every appointment 24/7. No missed calls, no missed revenue. Free.", faqs: [{ q: "How realistic does the AI receptionist sound?", a: "Very realistic. Our AI uses advanced voice synthesis that callers regularly mistake for human — with natural pauses, appropriate responses to unexpected questions, and the ability to maintain conversation flow across complex multi-turn exchanges." }, { q: "What happens if a caller asks something the AI can't handle?", a: "The AI is configured to handle a broad range of your specific business scenarios. For truly out-of-scope situations, it warmly transfers the caller or takes a detailed message for human callback — never leaving a caller stranded." }, { q: "Can the AI handle emergency service calls?", a: "Yes. We configure emergency protocols for businesses that handle after-hours emergencies — HVAC, plumbing, electrical, medical. Emergency calls are handled with appropriate urgency, and your on-call team is notified via text with full call details." }] },
  "ai-lead-generation-for-local-business": { title: "AI Lead Generation for Local Business | Capture More Leads", desc: "AI lead generation for local businesses — capture, qualify, and convert local leads automatically. 24/7 lead coverage across phone, SMS, and web. Free audit.", faqs: [{ q: "What's the difference between AI lead generation and a lead generation agency?", a: "A lead generation agency generates leads and sends them to you. AI lead generation captures and qualifies the leads your marketing already generates — while also capturing after-hours leads your competitors miss. The two work together: better marketing drives more leads, AI captures and converts more of them." }, { q: "How does AI lead generation integrate with my existing marketing?", a: "AI lead generation connects to your existing phone line, web forms, and SMS number — capturing leads from all your current marketing activities without requiring any changes to your advertising or website traffic sources." }, { q: "Can AI lead generation work without a website or marketing?", a: "It's more effective with active marketing, but even without advertising, AI lead generation significantly improves conversion of organic search and referral traffic by ensuring every inquiry is captured and qualified immediately." }] },
  "ai-for-dental-practice": { title: "AI for Dental Practices | Automated Patient Communication", desc: "AI Revenue Systems for dental practices — automate new patient capture, appointment reminders, post-visit review requests, and patient reactivation. Free.", faqs: [{ q: "Does dental AI integrate with Dentrix and other practice management software?", a: "Yes. We integrate with Dentrix, Eaglesoft, Open Dental, Curve Dental, and most other major practice management systems — allowing AI automations to trigger from actual appointment and treatment data." }, { q: "Is the patient communication system HIPAA compliant?", a: "Our systems are built with HIPAA considerations including BAA agreements where appropriate, secure messaging infrastructure, and compliant data handling protocols. We work with your privacy officer to ensure proper implementation." }, { q: "How many more new patients can I expect per month?", a: "Based on client averages, most dental practices see new patient growth of 50-150% within 90 days — primarily from capturing after-hours inquiries that were previously lost and improving Google rankings through automated review generation." }] },
  "ai-appointment-booking-software": { title: "AI Appointment Booking Software | Automate Scheduling", desc: "AI appointment booking software that books appointments through phone and SMS conversations automatically. No more phone tag. 3x more bookings. Free demo.", faqs: [{ q: "Does the AI booking integrate with my existing calendar?", a: "Yes. We integrate with Google Calendar, Outlook, Calendly, Acuity, and most CRM-embedded scheduling systems. For practice management software (dental, medical, chiropractic), we integrate directly with Dentrix, Eaglesoft, Jane App, ChiroTouch, and others." }, { q: "Can the AI handle booking for multiple service types with different durations?", a: "Yes. We configure service-type-specific booking rules — different time blocks, different technicians, different preparation requirements — so every booking is accurate for the service being scheduled." }, { q: "What happens if all time slots are full?", a: "The AI offers the next available date and time, takes the customer's preferred time range, and can add them to a waitlist with automated notification when a slot opens." }] },
  "improve-lead-response-time": { title: "Improve Lead Response Time | AI Instant Lead Response", desc: "Improve your lead response time from hours to 30 seconds with AI. Businesses that respond within 5 minutes convert 9x more leads. Start responding.", faqs: [{ q: "What's the research behind 5-minute lead response time?", a: "Multiple studies — including MIT/InsideSales and HBR research — show that businesses responding to leads within 5 minutes are 9x more likely to qualify the lead compared to 10 minutes. After 1 hour, odds drop by 90%. The data consistently supports that speed-to-lead is the most important variable in lead conversion." }, { q: "Does AI response time really make that much difference?", a: "Yes. When a potential customer submits an inquiry, they're typically comparing 3-5 businesses simultaneously. The first to respond with a personalized, helpful message starts the relationship — and most customers don't wait for slower competitors to call back." }, { q: "How does AI maintain a 30-second response time?", a: "AI monitors all lead channels simultaneously in real-time. When a new lead is detected — phone call, SMS, form submission — AI generates and sends a personalized response immediately. There's no queue, no staffing constraints, no business hours limitations." }] },
  "ai-chatbot-for-local-business": { title: "AI Chatbot for Local Business | 24/7 Lead Capture", desc: "AI chatbot for local businesses — capture website visitors, qualify leads, answer questions, and book appointments 24/7. Convert more visitors into. Free demo.", faqs: [{ q: "How is an AI chatbot different from a basic contact form?", a: "A contact form captures visitors who are already decided — typically 1-2% of visitors. An AI chatbot proactively engages visitors mid-research, provides immediate value, qualifies their needs, and books appointments — converting 5-8% of visitors who would otherwise leave without contacting you." }, { q: "Will website visitors find the AI chatbot annoying?", a: "Only if it's intrusive. We configure chatbots to engage at the right moment — typically after 30-60 seconds on page or on exit intent — and with a helpful offer, not a disruptive pop-up. Most visitors respond positively to chatbots that offer genuine value." }, { q: "Can the chatbot handle pricing questions?", a: "Yes. We configure the chatbot with your pricing ranges, service packages, and any promotional offers — allowing it to provide helpful pricing context while setting appropriate expectations and qualifying the lead." }] },
  "hvac-marketing-automation": { title: "HVAC Marketing Automation | AI Revenue System for HVAC", desc: "HVAC marketing automation — AI captures every service call, books seasonal maintenance, generates reviews, and dominates local search. Built for. Free demo.", faqs: [{ q: "Does the AI system work for both residential and commercial HVAC?", a: "Yes. We configure separate workflows for residential (higher volume, emergency-focused) and commercial (contract-focused, longer relationships) HVAC business models. Mixed residential/commercial HVAC companies are our most common client profile." }, { q: "Can the AI handle emergency dispatch at 2am?", a: "Yes. We configure emergency protocols with your on-call technician schedule, emergency service areas, and urgency thresholds. The AI handles the initial call, triages emergency vs. routine, and dispatches your on-call team with full job details." }, { q: "How does the seasonal campaign system work?", a: "We build your spring (AC tune-up) and fall (furnace check) campaigns in advance with your pricing and offers. AI sends personalized SMS campaigns to your customer list, handles scheduling conversations, and books your entire maintenance calendar — typically filling the season within 2-3 weeks of campaign launch." }] },
  "plumber-marketing-software": { title: "Plumber Marketing Software | AI Revenue System for Plumbers", desc: "Plumber marketing software powered by AI — capture emergency calls 24/7, generate more Google reviews, and dominate local plumbing search. Free plumber.", faqs: [{ q: "Does plumber marketing software work for single-technician operations?", a: "Yes. Even a solo plumber benefits significantly from AI — capturing after-hours emergency calls, automating review requests, and responding instantly to web and SMS inquiries. The revenue impact is often highest for smaller operations where every missed call is a significant loss." }, { q: "How does the AI handle plumbing emergency calls differently from routine service calls?", a: "We configure emergency protocols — burst pipes, sewage backups, flooded basements — with different urgency thresholds, on-call dispatch procedures, and availability windows. Emergency calls are handled with appropriate urgency and dispatched to your on-call team immediately." }, { q: "What's the typical ROI for a plumbing company?", a: "Most plumbing clients see full ROI within the first month from captured emergency calls alone — typically 3-5 emergency jobs that would have gone to voicemail. Monthly ROI compounds as review generation improves local search ranking and drives organic lead volume." }] },
  "missed-call-text-back": { title: "Missed Call Text Back | AI Instant Text Response", desc: "Missed call text back service — AI instantly texts back every missed call within 30 seconds, qualifying the lead and booking appointments. Never lose. Free demo.", faqs: [{ q: "How fast does the missed call text-back happen?", a: "The text-back fires within 30 seconds of a missed call detection — before the caller has time to dial the next business on their list." }, { q: "What does the AI say in the text-back message?", a: "We configure a personalized text-back message in your brand voice — typically something like 'Hi, this is [Business Name]! Sorry we missed your call — we'd love to help. What's going on?' The AI then manages the response conversation." }, { q: "Does missed call text-back work for after-hours calls?", a: "Yes. The system operates 24/7 — after-hours, weekends, holidays. Every missed call gets a text-back regardless of when it occurs." }] },
  "ai-answering-service": { title: "AI Answering Service | 24/7 Business Call Handling", desc: "AI answering service for local businesses — answers every call professionally, qualifies every lead, and books every appointment 24/7. No missed. Free demo.", faqs: [{ q: "How does AI answering service compare to traditional live answering services?", a: "Traditional answering services take messages and relay them — at $200-500+/month for limited call volumes. AI answering service takes messages AND books appointments at significantly lower cost, 24/7, with consistent quality. The appointment booking capability alone typically generates enough additional revenue to pay for the entire system." }, { q: "Will callers know they're talking to AI?", a: "Our AI uses advanced voice technology that callers frequently don't recognize as AI — especially for routine inquiries. For businesses that prefer transparency, we configure the AI to identify itself as a virtual assistant while maintaining professional service quality." }, { q: "Can the AI handle industry-specific terminology and questions?", a: "Yes. We configure comprehensive industry-specific knowledge — your service types, pricing ranges, common questions, insurance handling, service area, and policies — so the AI answers calls with the depth of knowledge a well-trained human would have." }] },
  "customer-retention-ai": { title: "Customer Retention AI | Automated Reactivation System", desc: "Customer retention AI — automated reactivation campaigns, loyalty follow-up, and lapsed customer recovery. Reduce churn and grow revenue from your. Free demo.", faqs: [{ q: "What is 'churn prediction' and how does AI identify at-risk customers?", a: "Churn prediction analyzes customer behavior patterns — time since last visit, visit frequency changes, service value trends — to identify customers showing signs of disengagement before they fully stop returning. This allows us to send reactivation campaigns while the customer relationship is still warm." }, { q: "How personalized are the reactivation campaigns?", a: "Very personalized. AI references the customer's specific service history, last visit details, and appropriate reactivation offer — making each message feel individually crafted rather than mass marketing." }, { q: "What reactivation rate should I expect?", a: "Most clients see 30-50% reactivation rates for at-risk customers contacted within 60 days of their last visit. Fully lapsed customers (90+ days) typically reactivate at 15-25%. The earlier the intervention, the higher the recovery rate." }] },
  "ai-for-home-services": { title: "AI Revenue System for Home Services | Capture & Book", desc: "AI for home services businesses — capture every estimate request, book every job, generate reviews after every service. Built for HVAC, plumbing. Free demo.", faqs: [{ q: "Which home service trades does this system work for?", a: "HVAC, plumbing, electrical, roofing, landscaping, painting, pest control, cleaning services, pool services, and most other home service trades. We have trade-specific configurations with appropriate seasonal campaigns, service terminology, and review platforms for each." }, { q: "How does the system handle seasonal business patterns?", a: "We build pre-season outreach campaigns that run automatically before your peak season — typically 6-8 weeks before. These campaigns reach your entire customer base with maintenance offers, filling your schedule in advance and smoothing the transition from slow to peak season." }, { q: "Does the review automation work with job management software?", a: "Yes. We integrate with ServiceTitan, Housecall Pro, Jobber, and most other home services job management platforms — triggering review requests based on actual job completion events from your software." }] },
  "podium-alternative-new-york": { title: "Podium Alternative in New York | AI Revenue System", desc: "Looking for a Podium alternative in New York? Infinite Rankers delivers more features — AI lead capture, two-way SMS, review automation, and no. Free demo.", faqs: [{ q: "How is Infinite Rankers different from Podium specifically?", a: "The key differences: (1) AI phone answering — Podium doesn't answer calls, Infinite Rankers does. (2) No annual contract — Podium requires annual commitments, we're month-to-month. (3) Complete lead capture — Podium focuses on messaging and reviews; we capture phone, SMS, and web leads with 30-second AI response. (4) Appointment booking — Podium's AI doesn't book appointments through voice; ours does." }, { q: "Can I switch from Podium to Infinite Rankers without losing my review history?", a: "Yes. Your Google reviews belong to your Google Business Profile — they stay regardless of which platform you use. We migrate your contact lists and review request templates, so you don't lose any customer data or review momentum." }, { q: "How long does migration from Podium take?", a: "Most migrations complete within 5-7 business days — including contact list import, template migration, phone integration, and team training on the new system." }] },
  "podium-alternative-texas": { title: "Podium Alternative in Texas | AI Revenue System", desc: "Looking for a Podium alternative in Texas? Infinite Rankers delivers complete AI Revenue Systems — more features, no annual contract, and built for. Free demo.", faqs: [{ q: "Does Infinite Rankers have Texas-specific support?", a: "Yes. We serve Texas businesses throughout Dallas-Fort Worth, Houston, Austin, San Antonio, and across the state. Our team understands Texas business cycles — hail season roofing, summer HVAC, and the specific competitive dynamics of each major Texas market." }, { q: "How does the seasonal business model work with month-to-month pricing?", a: "Month-to-month pricing means you can scale up during peak season (storm season, summer HVAC) and adjust during slower periods — without being locked into an annual contract that doesn't reflect your actual seasonal revenue." }, { q: "Can the system handle multiple Texas locations?", a: "Yes. Multi-location Texas businesses get centralized dashboard reporting with location-specific AI configurations — separate phone numbers, review requests, and lead routing for each location." }] },
  "podium-alternative-florida": { title: "Podium Alternative in Florida | AI Revenue System", desc: "Looking for a Podium alternative in Florida? Infinite Rankers delivers complete AI Revenue Systems for Florida local businesses — more features, no. Free demo.", faqs: [{ q: "Does Infinite Rankers serve all Florida markets?", a: "Yes. We serve businesses throughout Miami-Dade, Broward, Palm Beach, Tampa Bay, Orlando, Jacksonville, and all of Florida. We understand the different competitive dynamics of each major Florida market." }, { q: "How does the system handle hurricane season surge volume?", a: "Our system scales to handle surge volume without additional cost — capturing every call and web inquiry during storm season when local businesses have the highest-value repair and restoration opportunities." }, { q: "Can the AI handle Spanish-speaking customers?", a: "Yes. We configure initial AI responses in Spanish for Florida businesses in markets with significant Spanish-speaking populations — providing appropriate responses and routing to bilingual team members when needed." }] },
  "podium-vs-reputation-com": { title: "Podium vs Reputation.com | AI Revenue Alternative", desc: "Comparing Podium vs Reputation.com? Infinite Rankers delivers everything both platforms offer — plus AI phone answering, appointment booking, and. Free demo.", faqs: [{ q: "How does Infinite Rankers compare to Podium's specific features?", a: "Infinite Rankers matches Podium on: two-way SMS messaging, review request automation, Google Business Profile messaging, and payment collection. Infinite Rankers exceeds Podium with: AI phone answering and appointment booking, 24/7 lead capture across all channels, advanced AI conversation handling, and month-to-month pricing." }, { q: "How does Infinite Rankers compare to Reputation.com?", a: "Infinite Rankers matches Reputation.com on: multi-platform review management, review request automation, reputation monitoring, and response management. Infinite Rankers exceeds Reputation.com with: AI phone answering, 24/7 lead capture, appointment booking, lower cost, and no annual commitment." }, { q: "Can I get out of my current Podium or Reputation.com contract to switch?", a: "Contact your current providers about early termination options. Most annual contracts have provisions for early termination with fees. Many clients find the revenue increase from switching covers any termination costs within the first 1-2 months." }] },
  "podium-vs-thryv": { title: "Podium vs Thryv | AI Revenue System Alternative", desc: "Comparing Podium vs Thryv? Infinite Rankers delivers everything both platforms offer plus AI phone answering, 24/7 lead capture, and no annual. Free demo.", faqs: [{ q: "What does Thryv offer that Podium doesn't?", a: "Thryv offers a more complete CRM — contact management, invoicing, scheduling, and client communication history — while Podium focuses on messaging and review management. Neither offers AI phone answering or 24/7 automated lead capture from phone inquiries." }, { q: "What does Podium offer that Thryv doesn't?", a: "Podium offers better review request automation, more sophisticated messaging workflows, and a wider range of messaging channel integrations. Thryv's messaging capabilities are more basic. Again, neither answers phones or captures leads through AI." }, { q: "How does Infinite Rankers combine both without being too complex?", a: "Infinite Rankers integrates CRM, messaging, review automation, and AI lead capture into one unified workflow — where every action updates the CRM automatically. This eliminates the integration friction between Podium and Thryv that creates data gaps and manual reconciliation work." }] },
};

const PARTNER_PAGES: Record<string, { title: string; desc: string }> = {
  "infinite-rankers-agency": { title: `AI Marketing Agency USA | ${BRAND}`, desc: "Infinite Rankers is a full-service AI marketing agency providing automation, lead generation, and revenue growth systems for businesses across the. Free demo." },
  "infinite-rankers-seo-services": { title: `SEO Services | 158% Avg Traffic Growth | ${BRAND}`, desc: "Professional SEO services by Infinite Rankers. We help businesses dominate Google search rankings with data-driven SEO strategies and AI-powered optimization." },
  "infinite-rankers-paid-advertising": { title: `Google & Meta Ads Management | 4-6x ROAS | ${BRAND}`, desc: "Expert paid advertising management by Infinite Rankers. Google Ads, Meta Ads, and multi-channel campaigns that maximize ROI and revenue growth. Free demo." },
  "infinite-rankers-ai-automation": { title: `AI Business Automation | ${BRAND}`, desc: "AI automation solutions by Infinite Rankers. Chatbots, calling agents, email automation, CRM systems, and workflow automation that scale your. Free demo." },
};

const SERVICE_PILLAR_SEO: Record<string, {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
  howToSteps: { name: string; text: string }[];
}> = {
  "ai-lead-capture": {
    title: "AI Lead Capture Systems | Never Miss a Lead Again",
    description: "AI-powered lead capture across website chat, phone, SMS, and WhatsApp — routes every inquiry to your CRM within 60 seconds, 24/7. Businesses capture. Free demo.",
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
    title: "AI Appointment & Sales Agents | Book 3x More Meetings",
    description: "AI agents that follow up within 60 seconds, qualify leads across SMS, email, and voice, and book appointments directly into your calendar — 24/7. Free demo.",
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
    title: "CRM & Pipeline Automation | Self-Managing Pipeline",
    description: "Turn your CRM into a self-managing revenue machine — automatic lead entry, deal-stage movement, tagging, and real-time reporting inside HubSpot. Free demo.",
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
    title: "Customer Support & Operations AI | 24/7, No Headcount",
    description: "AI agents that resolve tier-1 support instantly, route complex cases to the right human, and reduce support tickets by 60–80% — 24/7, without adding. Free demo.",
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
    title: "Reviews, Reactivation & Retention | Grow Revenue",
    description: "Automated systems that generate Google reviews, reactivate cold leads with proven sequences, and bring past customers back — without manual effort. Free demo.",
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
    title: "Custom SaaS & Internal Tools | Built for Your Workflow",
    description: "Custom-built dashboards, internal portals, white-label tools, and mini SaaS products designed for your exact business workflow — not off-the-shelf. Free demo.",
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
    title: "Revenue Automation Consulting | AI Strategy Roadmap",
    description: "Strategic consulting that audits your revenue gaps, prioritizes high-ROI automation, and builds a 90-day AI implementation roadmap — so you invest in.",
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
  "/": { title: "Infinite Rankers | AI Revenue Systems Agency USA", description: "Infinite Rankers builds and deploys AI Revenue Systems — lead capture, appointment agents, CRM automation, customer support AI, and custom SaaS tools. Free demo.", canonical: `${BASE}/` },
  "/about": { title: `About Infinite Rankers LLC | AI Revenue Systems Agency USA`, description: "Infinite Rankers LLC is a Delaware-registered AI Revenue Systems Agency. We build and deploy AI-powered lead capture, appointment booking, CRM. Free demo.", canonical: `${BASE}/about` },
  "/services": { title: "7 AI Revenue Systems | Full-Stack Automation Services", description: "Explore Infinite Rankers' 7 AI Revenue Systems: lead capture, appointment agents, CRM automation, customer support AI, reviews & retention, custom. Free demo.", canonical: `${BASE}/services` },
  "/portfolio": { title: `21 Case Studies | Proven Results | ${BRAND}`, description: "Real results from real businesses. 21 case studies showing 100-195% revenue growth across healthcare, real estate, law firms & e-commerce. See proof.", canonical: `${BASE}/portfolio` },
  "/pricing": { title: `Pricing Plans from $1,599/mo | No Hidden Fees`, description: "Transparent pricing with no contracts or hidden fees. Growth, Scale & Enterprise plans. Calculate your ROI before you buy. Book a free consultation.", canonical: `${BASE}/pricing` },
  "/contact": { title: `Contact Us — Get a Free Strategy Call | ${BRAND}`, description: "Book a free 30-minute strategy call with our AI marketing experts. No pitch — just a custom growth plan. We respond within 1 business hour.", canonical: `${BASE}/contact` },
  "/blog": { title: `AI Marketing & Automation Blog | ${BRAND}`, description: "Actionable insights on AI automation, SEO, Google Ads, lead generation & digital marketing. Updated weekly with tactics that drive real revenue growth.", canonical: `${BASE}/blog` },
  "/book-demo": { title: `Book Your Free 30-Min Strategy Call | ${BRAND}`, description: "See exactly how AI automation can grow your business. Get a custom growth plan, live demo & ROI projection — completely free. Book your slot today.", canonical: `${BASE}/book-demo` },
  "/sitemap": { title: `Sitemap - ${BRAND}`, description: "Browse all pages on infiniterankers.io — AI marketing services, blog posts, case studies, and landing pages.", canonical: `${BASE}/sitemap` },
  "/roi-calculator": { title: `ROI Calculator | Estimate Revenue Uplift | ${BRAND}`, description: "Calculate how much revenue you're losing to missed leads and slow follow-up — and how much AI automation can recover. Free, instant estimate.", canonical: `${BASE}/roi-calculator` },
  "/content-methodology": { title: `How We Create Content - ${BRAND}`, description: "Learn how Infinite Rankers creates and reviews content using expert research, editorial checks, and responsible AI assistance.", canonical: `${BASE}/content-methodology` },
  "/terms": { title: `Terms of Service - ${BRAND}`, description: "Terms of Service for Infinite Rankers AI Revenue Growth Agency. Read our terms governing use of infiniterankers.io.", canonical: `${BASE}/terms` },
  "/privacy": { title: `Privacy Policy - ${BRAND}`, description: "Privacy Policy for Infinite Rankers. Learn how we collect, use, and protect your data.", canonical: `${BASE}/privacy` },
  "/google-partner": { title: "Google Partner Agency USA | Certified Google Ads Expert", description: "Infinite Rankers is a certified Google Partner agency. Expert Google Ads management with exclusive tools access.", canonical: `${BASE}/google-partner` },

  // 7 AI Revenue System pillar pages
  "/ai-lead-capture": { title: SERVICE_PILLAR_SEO["ai-lead-capture"].title, description: SERVICE_PILLAR_SEO["ai-lead-capture"].description, canonical: `${BASE}/ai-lead-capture` },
  "/ai-appointment-agents": { title: SERVICE_PILLAR_SEO["ai-appointment-agents"].title, description: SERVICE_PILLAR_SEO["ai-appointment-agents"].description, canonical: `${BASE}/ai-appointment-agents` },
  "/crm-pipeline-automation": { title: SERVICE_PILLAR_SEO["crm-pipeline-automation"].title, description: SERVICE_PILLAR_SEO["crm-pipeline-automation"].description, canonical: `${BASE}/crm-pipeline-automation` },
  "/customer-support-ai": { title: SERVICE_PILLAR_SEO["customer-support-ai"].title, description: SERVICE_PILLAR_SEO["customer-support-ai"].description, canonical: `${BASE}/customer-support-ai` },
  "/reviews-reactivation-retention": { title: SERVICE_PILLAR_SEO["reviews-reactivation-retention"].title, description: SERVICE_PILLAR_SEO["reviews-reactivation-retention"].description, canonical: `${BASE}/reviews-reactivation-retention` },
  "/custom-saas-tools": { title: SERVICE_PILLAR_SEO["custom-saas-tools"].title, description: SERVICE_PILLAR_SEO["custom-saas-tools"].description, canonical: `${BASE}/custom-saas-tools` },
  "/revenue-automation-consulting": { title: SERVICE_PILLAR_SEO["revenue-automation-consulting"].title, description: SERVICE_PILLAR_SEO["revenue-automation-consulting"].description, canonical: `${BASE}/revenue-automation-consulting` },

  // Service pages
  "/workflow-automation": { title: "Workflow Automation Services | Save 20hrs/Week", description: "Complete workflow automation using n8n, Make.com, Zapier. Automate repetitive tasks and save 20+ hours per week.", canonical: `${BASE}/workflow-automation` },
  "/saas-integrations": { title: "SaaS Integrations & API Connections | Infinite Rankers", description: "Connect your business tools: CRM, email, ads, analytics. Expert SaaS integration services for USA businesses.", canonical: `${BASE}/saas-integrations` },
  "/video-marketing": { title: "Video Marketing Services USA | YouTube & Social", description: "Professional video marketing for YouTube, Instagram, TikTok. Strategy, production, distribution for USA businesses.", canonical: `${BASE}/video-marketing` },
  "/facebook-growth": { title: "Facebook Marketing & Growth Services | Infinite Rankers", description: "Organic and paid Facebook marketing that builds brand authority and generates qualified leads for USA businesses.", canonical: `${BASE}/facebook-growth` },
  "/local-seo": { title: "Local SEO Services USA | Google Maps Rankings", description: "Expert local SEO services ranking businesses in Google Maps and local search. 300+ businesses in top 3.", canonical: `${BASE}/local-seo` },
  "/seo-authority": { title: "SEO Authority Building | Domain Authority Growth", description: "Build domain authority through strategic link building, content marketing, and technical SEO optimization.", canonical: `${BASE}/seo-authority` },
  "/conversion-funnels": { title: "Conversion Funnel Optimization | 2x More Sales", description: "Build high-converting sales funnels with AI optimization. Landing pages, email sequences, retargeting.", canonical: `${BASE}/conversion-funnels` },
  "/analytics-dashboard": { title: "Marketing Analytics Dashboard | Real-Time Reporting", description: "Custom marketing analytics dashboards showing real-time performance across all channels. Data-driven decisions.", canonical: `${BASE}/analytics-dashboard` },
  "/branding-design": { title: "Branding & Design Services | Visual Identity", description: "Complete branding and design services. Logo design, brand guidelines, marketing materials for USA businesses.", canonical: `${BASE}/branding-design` },

};

export function getSEOForRoute(url: string): SEOMeta | null {
  const path = url.split("?")[0].split("#")[0];

  if (STATIC_PAGES[path]) {
    return STATIC_PAGES[path];
  }

  const slug = path.replace(/^\//, "");

  if (LANDING_PAGES[slug]) {
    const lp = LANDING_PAGES[slug];
    // Canonical overrides to prevent keyword cannibalization
    let canonical = `${BASE}/${slug}`;
    if (slug === "ai-receptionist-service-usa" || slug === "ai-receptionist-for-small-business") {
      canonical = `${BASE}/ai-receptionist`;
    } else if (slug === "automation-agency") {
      canonical = `${BASE}/ai-automation-agency`;
    }
    return {
      title: lp.title,
      description: lp.desc,
      canonical,
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
      "sameAs": ["https://www.linkedin.com/company/infinite-rankers", "https://www.facebook.com/infiniterankers", "https://www.instagram.com/infiniterankers"]
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
      "inLanguage": "en-US",
      "publisher": ORG_SCHEMA
    };
    const getServiceType = (slug: string): string => {
      if (slug.startsWith("podium") || slug.includes("birdeye") || slug.includes("reputation-com") || slug.includes("thryv")) return "Business Software Alternative";
      if (slug.includes("review") || slug.includes("reputation") || slug.includes("google-review")) return "Review Management Service";
      if (slug.startsWith("sms") || slug.startsWith("text") || slug.includes("texting") || slug.includes("messaging")) return "Business Text Messaging Service";
      if (slug.includes("ai-receptionist") || slug.includes("ai-answering") || slug.includes("ai-calling")) return "AI Phone Answering Service";
      if (slug.includes("ai-booking") || slug.includes("appointment") || slug.includes("booking")) return "AI Appointment Booking Service";
      if (slug.includes("crm") || slug.includes("pipeline")) return "CRM Automation Service";
      if (slug.includes("lead-generation") || slug.includes("lead-capture")) return "AI Lead Generation Service";
      if (slug.includes("automation")) return "AI Business Automation Service";
      return "AI Revenue Systems Service";
    };
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "inLanguage": "en-US",
      "provider": ORG_SCHEMA,
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": getServiceType(ssSlug),
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "USD", "url": `${BASE_URL}/pricing` }
    };
    const parts: object[] = [mainSchema, serviceSchema, breadcrumb, SITE_NAV_SCHEMA];
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
      parts.splice(2, 0, faqSchema);
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
  const ogImageUrl = `${BASE}/images/logo-full.png`;
  extraTags.push(`<meta property="og:image" content="${ogImageUrl}" />`);
  extraTags.push(`<meta property="og:image:width" content="1200" />`);
  extraTags.push(`<meta property="og:image:height" content="630" />`);
  extraTags.push(`<meta property="og:image:type" content="image/png" />`);
  extraTags.push(`<meta property="og:image:alt" content="${escapeAttr(seo.title)}" />`);
  extraTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  extraTags.push(`<meta name="twitter:site" content="@infiniterankers" />`);
  extraTags.push(`<meta name="twitter:creator" content="@infiniterankers" />`);
  extraTags.push(`<meta name="twitter:image" content="${ogImageUrl}" />`);
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
