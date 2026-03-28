export const COMPANY = {
  name: "Infinite Rankers",
  domain: "infiniterankers.io",
  email: "contact@infiniterankers.io",
  phone: "(703) 415-9373",
  address: "203 N Caroline Pl, Dover, DE 19904, USA",
  tagline: "AI Revenue Growth Agency",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    title: "AI & Automation Systems",
    description: "Intelligent automation that works 24/7 to capture, qualify, and convert leads into paying customers.",
    icon: "Bot",
    services: [
      { slug: "ai-calling-agent", title: "AI Calling Agent", shortDesc: "Automated outbound and inbound calls that qualify leads and book appointments around the clock.", icon: "Phone" },
      { slug: "ai-receptionist", title: "AI Receptionist", shortDesc: "Never miss a call again. AI answers, qualifies, and routes every inquiry instantly.", icon: "Headphones" },
      { slug: "ai-lead-qualification", title: "AI Lead Qualification Bot", shortDesc: "Automatically score and qualify leads so your sales team only talks to buyers.", icon: "UserCheck" },
      { slug: "ai-appointment-booking", title: "AI Appointment Booking System", shortDesc: "Let AI fill your calendar with qualified prospects while you focus on closing.", icon: "CalendarCheck" },
      { slug: "ai-follow-up", title: "AI Follow-Up Automation", shortDesc: "Never lose a lead to poor follow-up. AI nurtures every prospect automatically.", icon: "MailCheck" },
      { slug: "ai-sales-assistant", title: "AI Sales Assistant", shortDesc: "AI-powered sales support that helps your team close more deals faster.", icon: "TrendingUp" },
      { slug: "ai-chatbot", title: "AI Chatbot", shortDesc: "Website, WhatsApp, and Messenger chatbot that engages visitors 24/7.", icon: "MessageSquare" },
      { slug: "ai-email-automation", title: "AI Email Automation", shortDesc: "Smart email sequences that adapt to prospect behavior and maximize replies.", icon: "Mail" },
      { slug: "ai-sms-automation", title: "AI SMS Automation", shortDesc: "High-response SMS campaigns powered by AI for instant engagement.", icon: "Smartphone" },
      { slug: "crm-automation", title: "CRM Automation", shortDesc: "Automate your entire CRM workflow from lead entry to deal closure.", icon: "Database" },
      { slug: "workflow-automation", title: "Workflow Automation", shortDesc: "Connect and automate every tool in your sales and marketing stack.", icon: "Workflow" },
    ],
  },
  {
    id: "lead-generation",
    title: "Lead Generation Systems",
    description: "High-performance advertising and SEO systems that drive qualified traffic and revenue.",
    icon: "Target",
    services: [
      { slug: "google-ads", title: "Google Ads Revenue Engine", shortDesc: "Data-driven Google Ads campaigns that maximize ROI and revenue.", icon: "Search" },
      { slug: "meta-ads", title: "Meta Ads Growth Engine", shortDesc: "Facebook and Instagram advertising that generates qualified leads at scale.", icon: "Megaphone" },
      { slug: "seo-authority", title: "SEO Authority Growth System", shortDesc: "Dominate search rankings and build organic traffic that converts.", icon: "BarChart3" },
      { slug: "local-seo", title: "Local SEO & Google Business", shortDesc: "Own your local market with optimized Google Business and local search presence.", icon: "MapPin" },
      { slug: "conversion-funnels", title: "Conversion Funnel Building", shortDesc: "Multi-step funnels designed to turn cold traffic into paying customers.", icon: "Filter" },
      { slug: "landing-page-optimization", title: "Landing Page Optimization", shortDesc: "High-converting landing pages that turn visitors into leads and revenue.", icon: "MousePointer" },
      { slug: "conversion-rate-optimization", title: "Conversion Rate Optimization", shortDesc: "Data-backed testing and optimization to maximize every visitor's value.", icon: "Percent" },
    ],
  },
  {
    id: "social-content",
    title: "Social Media & Content",
    description: "Strategic content and social media presence that builds authority and drives engagement.",
    icon: "Share2",
    services: [
      { slug: "social-media-marketing", title: "Social Media Marketing", shortDesc: "Strategic social presence across platforms to build brand authority.", icon: "Globe" },
      { slug: "instagram-growth", title: "Instagram Growth & Posting", shortDesc: "Consistent, engaging Instagram content that grows your audience organically.", icon: "Camera" },
      { slug: "facebook-growth", title: "Facebook Growth & Posting", shortDesc: "Facebook content strategy that builds community and drives leads.", icon: "ThumbsUp" },
      { slug: "content-writing", title: "Content Writing & Strategy", shortDesc: "Authority-building content that positions you as the industry leader.", icon: "FileText" },
      { slug: "branding-design", title: "Branding & Creative Design", shortDesc: "Premium brand identity that commands trust and recognition.", icon: "Palette" },
      { slug: "video-marketing", title: "Short Form Video Marketing", shortDesc: "Scroll-stopping video content optimized for engagement and reach.", icon: "Video" },
    ],
  },
  {
    id: "development",
    title: "Development & Technology",
    description: "Custom-built technology solutions that power your growth infrastructure.",
    icon: "Code",
    services: [
      { slug: "website-development", title: "Website Development", shortDesc: "High-performance websites designed for conversion and growth.", icon: "Monitor" },
      { slug: "landing-page-development", title: "Landing Page Development", shortDesc: "Fast, responsive landing pages built to convert traffic into leads.", icon: "Layout" },
      { slug: "crm-setup", title: "CRM Setup & Integration", shortDesc: "Professional CRM implementation customized for your sales process.", icon: "Settings" },
      { slug: "saas-integrations", title: "SaaS Integrations", shortDesc: "Seamless integration between your tools for unified data flow.", icon: "Plug" },
      { slug: "marketing-automation-setup", title: "Marketing Automation Setup", shortDesc: "End-to-end marketing automation configured for maximum impact.", icon: "Zap" },
      { slug: "analytics-dashboard", title: "Dashboard & Analytics Setup", shortDesc: "Real-time dashboards and analytics to track every metric that matters.", icon: "PieChart" },
    ],
  },
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(cat =>
  cat.services.map(s => ({ ...s, category: cat.title, categoryId: cat.id }))
);

export const CASE_STUDIES = [
  {
    id: "1",
    slug: "case-study-dental-practice-revenue-transformation",
    title: "Local Dental Practice Revenue Transformation",
    business: "Premier Dental Care — Multi-location dental practice",
    challenge: "Struggling with inconsistent patient flow and relying on word-of-mouth referrals. Monthly new patient count had plateaued at 15-20.",
    solution: "Deployed AI Calling Agent + Google Ads Revenue Engine + AI Appointment Booking System. Built automated follow-up sequences and optimized Google Business profile.",
    results: { metric1: "145%", label1: "Increase in New Patients", metric2: "$14.2K", label2: "Monthly Revenue Growth", metric3: "89%", label3: "Appointment Show Rate", metric4: "3.8x", label4: "Return on Ad Spend" },
    tags: ["AI Automation", "Google Ads", "Local SEO"],
    label: "Sample Case Study",
    industry: "Healthcare",
    services: ["AI Calling Agent", "Google Ads", "AI Appointment Booking", "Local SEO"],
    duration: "6 months",
    teamSize: "4 specialists",
    testimonial: { quote: "We went from struggling to fill chairs to having a 3-week waitlist. The AI calling system alone doubled our bookings in the first 60 days.", author: "Dr. Sarah Mitchell", role: "Owner, Premier Dental Care" },
    workflow: [
      { step: "Audit & Strategy", description: "Comprehensive review of patient acquisition channels, call handling, and local search presence across all locations." },
      { step: "AI System Deployment", description: "Configured AI calling agent with dental-specific scripts, integrated appointment booking with practice management software." },
      { step: "Ads & SEO Launch", description: "Launched geo-targeted Google Ads campaigns and optimized Google Business profiles for each location." },
      { step: "Optimization & Scale", description: "Refined ad targeting based on conversion data, expanded to new service keywords, and automated patient follow-ups." },
    ],
    beforeAfter: [
      { metric: "New Patients/Month", before: "18", after: "44" },
      { metric: "Monthly Revenue", before: "$62K", after: "$86K" },
      { metric: "Appointment Show Rate", before: "61%", after: "89%" },
    ],
  },
  {
    id: "2",
    slug: "case-study-ecommerce-cart-recovery-scaling",
    title: "E-Commerce Brand Scaling System",
    business: "LuxeHome Essentials — Premium home goods e-commerce",
    challenge: "High cart abandonment rate of 78%, low repeat customer rate, and inefficient ad spend across Meta and Google platforms.",
    solution: "Implemented AI Email Automation + Meta Ads Growth Engine + Conversion Funnel Building. Created personalized retargeting sequences and abandoned cart recovery flows.",
    results: { metric1: "62%", label1: "Cart Recovery Rate", metric2: "3.4x", label2: "ROAS Improvement", metric3: "$12.8K", label3: "Monthly Revenue Increase", metric4: "38%", label4: "Repeat Purchase Rate" },
    tags: ["Meta Ads", "Email Automation", "CRO"],
    label: "Sample Case Study",
    industry: "E-Commerce",
    services: ["AI Email Automation", "Meta Ads", "Conversion Funnel Building", "Conversion Rate Optimization"],
    duration: "4 months",
    teamSize: "3 specialists",
    testimonial: { quote: "Our abandoned cart recovery alone is generating an extra $12K per month. The retargeting funnels they built are incredibly profitable.", author: "James Thornton", role: "CEO, LuxeHome Essentials" },
    workflow: [
      { step: "Data Analysis", description: "Deep dive into cart abandonment patterns, customer behavior analytics, and existing ad account audit." },
      { step: "Funnel Architecture", description: "Built multi-step conversion funnels with personalized product recommendations and urgency triggers." },
      { step: "Email & Retargeting", description: "Deployed AI-powered email sequences and dynamic Meta retargeting ads matched to browsing behavior." },
      { step: "Revenue Optimization", description: "Continuous A/B testing of ad creatives, email subject lines, and funnel pages to maximize ROAS." },
    ],
    beforeAfter: [
      { metric: "Cart Abandonment Rate", before: "78%", after: "38%" },
      { metric: "Return on Ad Spend", before: "1.4x", after: "3.4x" },
      { metric: "Repeat Purchase Rate", before: "12%", after: "38%" },
    ],
  },
  {
    id: "3",
    slug: "case-study-real-estate-ai-lead-generation",
    title: "Real Estate Agency Lead Generation",
    business: "Skyline Realty Group — Luxury real estate brokerage",
    challenge: "Generating only 30 leads per month with a 5% conversion rate. Sales team spent 60% of time on unqualified prospects.",
    solution: "Built AI Lead Qualification Bot + AI SMS Automation + Landing Page Optimization. Automated lead scoring and instant response system.",
    results: { metric1: "135%", label1: "Lead Volume Increase", metric2: "28%", label2: "Lead-to-Client Rate", metric3: "12min", label3: "Avg Response Time", metric4: "$11.5K", label4: "Monthly Revenue Growth" },
    tags: ["AI Qualification", "SMS Automation", "Landing Pages"],
    label: "Sample Case Study",
    industry: "Real Estate",
    services: ["AI Lead Qualification Bot", "AI SMS Automation", "Landing Page Optimization"],
    duration: "6 months",
    teamSize: "3 specialists",
    testimonial: { quote: "Our agents now only talk to serious buyers. The AI qualification system filters out tire-kickers before they ever reach our team.", author: "Michael Reeves", role: "Managing Broker, Skyline Realty Group" },
    workflow: [
      { step: "Lead Audit", description: "Analyzed existing lead sources, response times, and qualification criteria to identify bottlenecks." },
      { step: "AI Qualification Setup", description: "Built intelligent lead scoring model with property-specific criteria and instant SMS engagement triggers." },
      { step: "Landing Page Overhaul", description: "Redesigned property landing pages with AI chatbot integration and smart lead capture forms." },
      { step: "Performance Tracking", description: "Implemented real-time dashboards tracking lead quality, agent response times, and conversion rates." },
    ],
    beforeAfter: [
      { metric: "Qualified Leads/Month", before: "30", after: "71" },
      { metric: "Lead-to-Client Rate", before: "5%", after: "28%" },
      { metric: "Avg Response Time", before: "4 hours", after: "12 minutes" },
    ],
  },
  {
    id: "4",
    slug: "case-study-saas-growth-acceleration",
    title: "SaaS Company Growth Acceleration",
    business: "CloudSync Pro — B2B SaaS platform",
    challenge: "High churn rate of 8% monthly, lengthy sales cycle of 45 days, and inefficient demo booking process losing 40% of interested prospects.",
    solution: "Deployed AI Sales Assistant + AI Chatbot + Workflow Automation + CRM Automation. Created intelligent demo scheduling and onboarding sequences.",
    results: { metric1: "67%", label1: "Churn Reduction", metric2: "18 days", label2: "Sales Cycle Shortened", metric3: "165%", label3: "Demo Bookings Increase", metric4: "$9.8K", label4: "Monthly Revenue Growth" },
    tags: ["AI Chatbot", "CRM Automation", "Sales Assistant"],
    label: "Sample Case Study",
    industry: "Technology",
    services: ["AI Sales Assistant", "AI Chatbot", "Workflow Automation", "CRM Automation"],
    duration: "5 months",
    teamSize: "5 specialists",
    testimonial: { quote: "Our demo-to-close rate jumped from 15% to 32%. The AI chatbot qualifies prospects before they even speak to a rep, so every demo is high-intent.", author: "Priya Kapoor", role: "VP of Sales, CloudSync Pro" },
    workflow: [
      { step: "Sales Process Mapping", description: "Documented the entire sales funnel from first touch to closed deal, identifying friction points and drop-off stages." },
      { step: "AI Chatbot & Demo Automation", description: "Deployed website chatbot with product-aware responses and instant calendar integration for demo scheduling." },
      { step: "CRM & Workflow Integration", description: "Automated lead assignment, follow-up sequences, and pipeline stage transitions within their CRM." },
      { step: "Churn Prevention System", description: "Built automated health scoring and proactive outreach triggers for at-risk accounts." },
    ],
    beforeAfter: [
      { metric: "Monthly Churn Rate", before: "8%", after: "2.6%" },
      { metric: "Sales Cycle Length", before: "45 days", after: "18 days" },
      { metric: "Monthly Recurring Revenue", before: "$120K", after: "$162K" },
    ],
  },
  {
    id: "5",
    slug: "case-study-law-firm-client-intake-automation",
    title: "Law Firm Client Acquisition System",
    business: "Sterling & Associates — Personal injury law firm",
    challenge: "Inconsistent case intake process, missed calls during off-hours, and no systematic follow-up resulting in lost potential clients.",
    solution: "Implemented AI Receptionist + AI Follow-Up Automation + SEO Authority Growth System. Built 24/7 intake system with automated case qualification.",
    results: { metric1: "145%", label1: "Case Intake Increase", metric2: "24/7", label2: "Response Coverage", metric3: "$14.2K", label3: "Monthly Revenue Growth", metric4: "92%", label4: "Client Satisfaction" },
    tags: ["AI Receptionist", "SEO", "Follow-Up Automation"],
    label: "Sample Case Study",
    industry: "Legal",
    services: ["AI Receptionist", "AI Follow-Up Automation", "SEO Authority Growth System"],
    duration: "4 months",
    teamSize: "3 specialists",
    testimonial: { quote: "We used to miss 30% of after-hours calls. Now every single inquiry gets an immediate, professional response. Our caseload has grown significantly.", author: "David Sterling", role: "Managing Partner, Sterling & Associates" },
    workflow: [
      { step: "Intake Analysis", description: "Reviewed call logs, intake forms, and follow-up processes to quantify missed opportunities." },
      { step: "AI Receptionist Deployment", description: "Configured 24/7 AI receptionist with legal-specific scripts and case qualification criteria." },
      { step: "SEO & Content Strategy", description: "Built authority content targeting high-value personal injury keywords with local search optimization." },
      { step: "Follow-Up Automation", description: "Created multi-channel follow-up sequences for leads at every stage of the intake process." },
    ],
    beforeAfter: [
      { metric: "Cases Intake/Month", before: "22", after: "64" },
      { metric: "After-Hours Call Capture", before: "0%", after: "100%" },
      { metric: "Quarterly Revenue", before: "$170K", after: "$265K" },
    ],
  },
  {
    id: "6",
    slug: "case-study-fitness-studio-membership-growth",
    title: "Fitness Studio Membership Growth",
    business: "FitCore Studios — Boutique fitness chain",
    challenge: "Membership growth stagnated at 200 active members. Social media presence was minimal and paid advertising had low ROI.",
    solution: "Built Social Media Marketing + Instagram Growth + Meta Ads Growth Engine + AI Appointment Booking. Created community-driven content strategy with automated trial booking.",
    results: { metric1: "340", label1: "Active Members (from 200)", metric2: "8.5K", label2: "Instagram Followers Gained", metric3: "68%", label3: "Trial-to-Member Rate", metric4: "1.9x", label4: "Revenue Growth" },
    tags: ["Social Media", "Meta Ads", "AI Booking"],
    label: "Sample Case Study",
    industry: "Fitness",
    services: ["Social Media Marketing", "Instagram Growth", "Meta Ads", "AI Appointment Booking"],
    duration: "8 months",
    teamSize: "4 specialists",
    testimonial: { quote: "Instagram went from a dead account to our number one lead source. We now get 20+ trial bookings per week, all automated.", author: "Rachel Torres", role: "Owner, FitCore Studios" },
    workflow: [
      { step: "Brand & Content Audit", description: "Evaluated existing social media presence, brand positioning, and competitive landscape in the fitness market." },
      { step: "Content & Community Strategy", description: "Developed transformation-focused content calendar with member spotlights, workout clips, and nutrition tips." },
      { step: "Paid Acquisition Launch", description: "Launched Meta Ads campaigns targeting fitness-interested audiences within a 10-mile radius of each location." },
      { step: "Booking Automation", description: "Integrated AI booking system with social ads for seamless trial class scheduling directly from Instagram and Facebook." },
    ],
    beforeAfter: [
      { metric: "Active Members", before: "200", after: "340" },
      { metric: "Instagram Followers", before: "800", after: "9,300" },
      { metric: "Monthly Revenue", before: "$28K", after: "$52K" },
    ],
  },
  {
    id: "7",
    slug: "case-study-restaurant-chain-local-seo-transformation",
    title: "Restaurant Chain Digital Transformation",
    business: "Harvest Kitchen — Farm-to-table restaurant group",
    challenge: "No online ordering system, poor local visibility, and zero automated marketing. Each location managed marketing independently with inconsistent results.",
    solution: "Deployed Website Development + Local SEO & Google Business + AI SMS Automation + Content Writing & Strategy. Unified marketing across all locations.",
    results: { metric1: "135%", label1: "Online Orders Increase", metric2: "#1", label2: "Local Search Rankings", metric3: "1,800", label3: "Monthly SMS Subscribers", metric4: "$8.6K", label4: "Monthly Revenue Growth" },
    tags: ["Local SEO", "Web Development", "SMS Automation"],
    label: "Sample Case Study",
    industry: "Food & Beverage",
    services: ["Website Development", "Local SEO & Google Business", "AI SMS Automation", "Content Writing & Strategy"],
    duration: "5 months",
    teamSize: "4 specialists",
    testimonial: { quote: "Our online orders went from almost nothing to 35% of total revenue. The unified marketing system finally made our brand consistent across all three locations.", author: "Chef Marco Delgado", role: "Founder, Harvest Kitchen" },
    workflow: [
      { step: "Multi-Location Audit", description: "Assessed each location's online presence, Google Business profiles, and current marketing efforts." },
      { step: "Website & Ordering System", description: "Built a unified website with location-specific online ordering, menu management, and reservation system." },
      { step: "Local SEO Optimization", description: "Optimized all Google Business profiles, built local citation network, and launched review generation campaigns." },
      { step: "SMS & Content Engine", description: "Deployed weekly SMS promotions and seasonal content strategy to drive repeat visits and online orders." },
    ],
    beforeAfter: [
      { metric: "Online Orders/Week", before: "25", after: "59" },
      { metric: "Google Search Ranking", before: "Page 3", after: "#1 Local" },
      { metric: "SMS Subscriber List", before: "0", after: "1,800" },
    ],
  },
  {
    id: "8",
    slug: "case-study-medical-clinic-patient-acquisition",
    title: "Multi-Specialty Clinic Patient Growth Engine",
    business: "Meridian Health Partners — Multi-specialty medical clinic",
    challenge: "Patient acquisition cost was $280 per new patient. Website generated minimal traffic, and the front desk missed 35% of calls during peak hours.",
    solution: "Deployed AI Receptionist + Google Ads Revenue Engine + Local SEO & Google Business + AI Appointment Booking. Built an integrated patient acquisition and intake system.",
    results: { metric1: "125%", label1: "New Patient Volume", metric2: "$95", label2: "Cost Per Acquisition", metric3: "96%", label3: "Call Answer Rate", metric4: "$11.4K", label4: "Monthly Revenue Growth" },
    tags: ["AI Receptionist", "Google Ads", "Local SEO", "AI Booking"],
    label: "Sample Case Study",
    industry: "Healthcare",
    services: ["AI Receptionist", "Google Ads", "Local SEO & Google Business", "AI Appointment Booking"],
    duration: "6 months",
    teamSize: "4 specialists",
    testimonial: { quote: "The AI receptionist paid for itself in the first week. We stopped losing patients to voicemail, and our Google Ads are generating appointments at a third of the old cost.", author: "Dr. Alan Whitfield", role: "Medical Director, Meridian Health Partners" },
    workflow: [
      { step: "Practice Assessment", description: "Analyzed call volume patterns, website traffic, patient demographics, and existing marketing spend." },
      { step: "AI Phone System", description: "Deployed AI receptionist trained on clinic services, insurance questions, and appointment availability." },
      { step: "Digital Advertising", description: "Launched Google Ads campaigns targeting high-intent medical searches in the service area." },
      { step: "Local Dominance", description: "Optimized Google Business profile, built medical citation network, and implemented review generation." },
    ],
    beforeAfter: [
      { metric: "Patient Acquisition Cost", before: "$280", after: "$82" },
      { metric: "Calls Answered", before: "65%", after: "96%" },
      { metric: "New Patients/Month", before: "40", after: "90" },
    ],
  },
  {
    id: "9",
    slug: "case-study-wealth-management-digital-lead-generation",
    title: "Wealth Management Firm Digital Presence",
    business: "Crestview Capital Advisors — Independent wealth management firm",
    challenge: "Relied entirely on referrals for new clients. Had no digital marketing, outdated website, and zero online lead generation pipeline.",
    solution: "Built Website Development + SEO Authority Growth System + AI Lead Qualification Bot + Content Writing & Strategy. Created a trust-building digital presence with automated prospect qualification.",
    results: { metric1: "165%", label1: "Website Lead Increase", metric2: "$12.8K", label2: "Monthly Revenue Growth", metric3: "42%", label3: "Lead Qualification Rate", metric4: "14", label4: "New HNW Clients in 6 Months" },
    tags: ["SEO", "Web Development", "AI Qualification", "Content Strategy"],
    label: "Sample Case Study",
    industry: "Financial Services",
    services: ["Website Development", "SEO Authority Growth System", "AI Lead Qualification Bot", "Content Writing & Strategy"],
    duration: "7 months",
    teamSize: "4 specialists",
    testimonial: { quote: "For 15 years we relied solely on referrals. Now our website brings in 4-6 qualified prospects monthly, and the AI bot filters out people who aren't a good fit before we ever pick up the phone.", author: "Thomas Hargrove", role: "Managing Partner, Crestview Capital Advisors" },
    workflow: [
      { step: "Brand & Compliance Review", description: "Assessed existing brand assets, compliance requirements, and competitive positioning in the wealth management space." },
      { step: "Authority Website Build", description: "Designed and developed a premium website with thought leadership content, advisor profiles, and secure contact forms." },
      { step: "SEO & Content Program", description: "Launched ongoing SEO strategy with financial planning articles, market commentary, and retirement guides." },
      { step: "Lead Qualification Automation", description: "Deployed AI bot to pre-qualify prospects based on investable assets, financial goals, and timeline." },
    ],
    beforeAfter: [
      { metric: "Monthly Website Leads", before: "2", after: "11" },
      { metric: "Organic Search Traffic", before: "120/mo", after: "1,450/mo" },
      { metric: "AUM Growth (6 months)", before: "$0", after: "$1.8M" },
    ],
  },
  {
    id: "10",
    slug: "case-study-home-services-plumbing-hvac-lead-machine",
    title: "Home Services Lead Machine",
    business: "TrueFlow Plumbing & HVAC — Residential plumbing and HVAC services",
    challenge: "Seasonal revenue swings of 40%, no recurring customer base, and spending $6,000/month on underperforming ads with no tracking in place.",
    solution: "Implemented Google Ads Revenue Engine + Local SEO & Google Business + AI Calling Agent + AI Follow-Up Automation. Built year-round lead generation system with maintenance plan upsells.",
    results: { metric1: "190%", label1: "Lead Volume Increase", metric2: "$13.6K", label2: "Monthly Revenue Growth", metric3: "3.9x", label3: "Return on Ad Spend", metric4: "340", label4: "Maintenance Plan Sign-Ups" },
    tags: ["Google Ads", "Local SEO", "AI Calling", "Follow-Up Automation"],
    label: "Sample Case Study",
    industry: "Home Services",
    services: ["Google Ads", "Local SEO & Google Business", "AI Calling Agent", "AI Follow-Up Automation"],
    duration: "5 months",
    teamSize: "3 specialists",
    testimonial: { quote: "We used to dread the slow season. Now we have a waiting list in January. The maintenance plan upsell alone added $8K in predictable monthly revenue.", author: "Greg Paulson", role: "Owner, TrueFlow Plumbing & HVAC" },
    workflow: [
      { step: "Revenue & Lead Audit", description: "Analyzed seasonal patterns, existing ad performance, customer lifetime value, and service area coverage." },
      { step: "Ad Campaign Rebuild", description: "Restructured Google Ads with service-specific campaigns, call tracking, and proper conversion attribution." },
      { step: "Local SEO Domination", description: "Optimized Google Business, built service-area pages, and launched review generation for each service category." },
      { step: "AI Follow-Up & Upsell", description: "Deployed AI calling agent for estimate follow-ups and automated maintenance plan offers to past customers." },
    ],
    beforeAfter: [
      { metric: "Monthly Leads", before: "45", after: "130" },
      { metric: "Revenue (Slow Season)", before: "$22K", after: "$48K" },
      { metric: "Ad Spend ROI", before: "1.2x", after: "3.9x" },
    ],
  },
  {
    id: "11",
    slug: "case-study-auto-dealership-ai-sales-acceleration",
    title: "Auto Dealership Sales Acceleration",
    business: "Pinnacle Motors — Pre-owned vehicle dealership",
    challenge: "Internet leads had a 6% close rate, response times averaged 4 hours, and the BDC team could not keep up with inbound inquiries during peak hours.",
    solution: "Deployed AI Chatbot + AI SMS Automation + Meta Ads Growth Engine + CRM Automation. Created instant engagement system with automated test drive scheduling.",
    results: { metric1: "148%", label1: "Internet Lead Conversion", metric2: "< 2 min", label2: "Average Response Time", metric3: "$14.5K", label3: "Monthly Revenue Growth", metric4: "62%", label4: "Test Drive Show Rate" },
    tags: ["AI Chatbot", "SMS Automation", "Meta Ads", "CRM Automation"],
    label: "Sample Case Study",
    industry: "Auto Dealership",
    services: ["AI Chatbot", "AI SMS Automation", "Meta Ads", "CRM Automation"],
    duration: "4 months",
    teamSize: "4 specialists",
    testimonial: { quote: "The AI chatbot handles 200+ conversations a day and books test drives while our team focuses on closing. Our internet close rate went from 6% to nearly 19%.", author: "Tony Marchetti", role: "General Manager, Pinnacle Motors" },
    workflow: [
      { step: "BDC Process Audit", description: "Mapped the entire customer journey from online inquiry to vehicle delivery, identifying response gaps and drop-offs." },
      { step: "AI Engagement System", description: "Deployed AI chatbot on website and Facebook with vehicle-specific inventory integration and test drive scheduling." },
      { step: "Multi-Channel Ads", description: "Launched Meta Ads campaigns showcasing inventory with dynamic creative and instant messenger engagement." },
      { step: "CRM Pipeline Automation", description: "Automated lead assignment, follow-up cadences, and pipeline stage tracking within their dealership CRM." },
    ],
    beforeAfter: [
      { metric: "Internet Lead Close Rate", before: "6%", after: "18.6%" },
      { metric: "Response Time", before: "4 hours", after: "< 2 minutes" },
      { metric: "Monthly Vehicle Sales", before: "85", after: "118" },
    ],
  },
  {
    id: "12",
    slug: "case-study-online-coaching-enrollment-automation",
    title: "Online Coaching Business Revenue System",
    business: "Apex Performance Academy — Executive coaching & leadership training",
    challenge: "Inconsistent enrollment with feast-or-famine cycles. No automated funnel, manual onboarding, and course completion rates below 40%.",
    solution: "Built Conversion Funnel Building + AI Email Automation + AI Appointment Booking + Landing Page Development. Created end-to-end enrollment and engagement automation.",
    results: { metric1: "175%", label1: "Enrollment Growth", metric2: "$10.9K", label2: "Monthly Revenue Growth", metric3: "82%", label3: "Course Completion Rate", metric4: "94%", label4: "Student Satisfaction" },
    tags: ["Conversion Funnels", "Email Automation", "AI Booking", "Landing Pages"],
    label: "Sample Case Study",
    industry: "Education & Coaching",
    services: ["Conversion Funnel Building", "AI Email Automation", "AI Appointment Booking", "Landing Page Development"],
    duration: "90 days",
    teamSize: "3 specialists",
    testimonial: { quote: "I went from manually chasing every lead to having a waitlist for my coaching program. The automated funnel does the selling while I focus on delivering results.", author: "Dr. Natasha Williams", role: "Founder, Apex Performance Academy" },
    workflow: [
      { step: "Offer & Funnel Strategy", description: "Refined coaching program positioning, pricing tiers, and mapped the ideal enrollment journey." },
      { step: "Funnel & Landing Pages", description: "Built high-converting webinar funnel with application landing page and automated scheduling for discovery calls." },
      { step: "Email Nurture System", description: "Created 14-day email nurture sequence with value-driven content, social proof, and urgency triggers." },
      { step: "Engagement Automation", description: "Deployed onboarding sequences and progress-based email triggers to boost course completion and retention." },
    ],
    beforeAfter: [
      { metric: "Monthly Enrollments", before: "8", after: "22" },
      { metric: "Course Completion Rate", before: "38%", after: "82%" },
      { metric: "Monthly Revenue", before: "$12K", after: "$33K" },
    ],
  },
  {
    id: "13",
    slug: "case-study-boutique-hotel-direct-booking-engine",
    title: "Boutique Hotel Direct Booking Engine",
    business: "Shoreline Retreats — Boutique coastal hotel collection",
    challenge: "85% of bookings came through OTAs (Booking.com, Expedia) with 18-22% commission fees. Direct website bookings were nearly nonexistent.",
    solution: "Deployed Website Development + Google Ads Revenue Engine + AI Email Automation + Social Media Marketing. Built a direct booking funnel with loyalty incentives and retargeting.",
    results: { metric1: "58%", label1: "Direct Booking Rate (from 15%)", metric2: "$16.1K", label2: "Monthly Revenue Growth", metric3: "4.1x", label3: "Google Ads ROAS", metric4: "38%", label4: "Repeat Guest Rate" },
    tags: ["Web Development", "Google Ads", "Email Automation", "Social Media"],
    label: "Sample Case Study",
    industry: "Travel & Hospitality",
    services: ["Website Development", "Google Ads", "AI Email Automation", "Social Media Marketing"],
    duration: "6 months",
    teamSize: "5 specialists",
    testimonial: { quote: "We were paying over $85K a year in OTA commissions. Now more than half our guests book direct, and the savings go straight to our bottom line.", author: "Claire Jennings", role: "Director of Revenue, Shoreline Retreats" },
    workflow: [
      { step: "Revenue Channel Analysis", description: "Audited booking sources, OTA commission costs, and identified the highest-value guest segments for direct targeting." },
      { step: "Direct Booking Website", description: "Redesigned website with immersive photography, best-rate guarantee messaging, and frictionless booking engine." },
      { step: "Paid & Social Campaigns", description: "Launched Google Ads for branded and destination keywords, plus Instagram content showcasing the guest experience." },
      { step: "Guest Retention System", description: "Built automated email sequences for pre-arrival, post-stay reviews, loyalty offers, and seasonal promotions." },
    ],
    beforeAfter: [
      { metric: "Direct Booking Rate", before: "15%", after: "58%" },
      { metric: "Annual OTA Commissions", before: "$140K", after: "$58K" },
      { metric: "Repeat Guest Rate", before: "12%", after: "38%" },
    ],
  },
  {
    id: "14",
    slug: "case-study-insurance-agency-renewal-automation",
    title: "Insurance Agency Lead & Retention System",
    business: "Guardian Shield Insurance — Independent insurance agency",
    challenge: "Policy renewal rate dropping to 72%, no digital lead generation, and agents spent most of their time on manual quoting and follow-ups.",
    solution: "Implemented AI Calling Agent + AI Follow-Up Automation + Google Ads Revenue Engine + CRM Automation. Automated renewal outreach and built a new policy acquisition funnel.",
    results: { metric1: "91%", label1: "Policy Renewal Rate", metric2: "148%", label2: "New Policy Applications", metric3: "$11.2K", label3: "Monthly Revenue Growth", metric4: "2.8x", label4: "Agent Productivity" },
    tags: ["AI Calling", "Follow-Up Automation", "Google Ads", "CRM Automation"],
    label: "Sample Case Study",
    industry: "Insurance",
    services: ["AI Calling Agent", "AI Follow-Up Automation", "Google Ads", "CRM Automation"],
    duration: "5 months",
    teamSize: "3 specialists",
    testimonial: { quote: "Our renewal rate jumped from 72% to 91% just from the automated calling system. Agents now spend their time selling instead of chasing renewals.", author: "Patricia Nguyen", role: "Agency Owner, Guardian Shield Insurance" },
    workflow: [
      { step: "Book of Business Analysis", description: "Reviewed policy portfolio, renewal patterns, lapse reasons, and agent workflow inefficiencies." },
      { step: "Renewal Automation", description: "Deployed AI calling agent for renewal reminders 60, 30, and 7 days before expiration with personalized scripts." },
      { step: "New Business Funnel", description: "Launched Google Ads campaigns for auto, home, and life insurance quotes with landing page integration." },
      { step: "CRM & Pipeline Setup", description: "Configured CRM automation for lead tracking, quote follow-ups, and cross-sell opportunity identification." },
    ],
    beforeAfter: [
      { metric: "Policy Renewal Rate", before: "72%", after: "91%" },
      { metric: "New Applications/Month", before: "18", after: "45" },
      { metric: "Agent Productivity", before: "8 policies/agent/mo", after: "26 policies/agent/mo" },
    ],
  },
  {
    id: "15",
    slug: "case-study-commercial-contractor-brand-lead-growth",
    title: "Commercial Contractor Brand & Lead System",
    business: "Ironclad Builders — Commercial construction & renovation",
    challenge: "Zero online presence beyond a basic one-page website. All leads came from networking and referrals, limiting growth to $1.8M annually.",
    solution: "Built Website Development + SEO Authority Growth System + Google Ads Revenue Engine + Branding & Creative Design. Established digital authority in the commercial construction space.",
    results: { metric1: "$15.4K", label1: "Monthly Revenue Growth", metric2: "14", label2: "Inbound RFPs Per Month", metric3: "#2", label3: "Google Ranking for Key Terms", metric4: "185%", label4: "Website Traffic Growth" },
    tags: ["Web Development", "SEO", "Google Ads", "Branding"],
    label: "Sample Case Study",
    industry: "Construction",
    services: ["Website Development", "SEO Authority Growth System", "Google Ads", "Branding & Creative Design"],
    duration: "8 months",
    teamSize: "5 specialists",
    testimonial: { quote: "We went from being invisible online to getting called for projects we never would have known about. The website alone has brought in over $380K in new contracts.", author: "Robert Casillas", role: "President, Ironclad Builders" },
    workflow: [
      { step: "Brand Strategy", description: "Developed premium brand identity, messaging framework, and project portfolio showcasing commercial capabilities." },
      { step: "Authority Website", description: "Built project-portfolio-driven website with case studies, certifications, and service area pages optimized for SEO." },
      { step: "SEO Campaign", description: "Targeted commercial construction keywords with technical content, project case studies, and local authority building." },
      { step: "Paid Lead Generation", description: "Launched Google Ads targeting commercial renovation, tenant improvement, and new construction searches." },
    ],
    beforeAfter: [
      { metric: "Annual Revenue", before: "$1.8M", after: "$2.6M" },
      { metric: "Inbound RFPs/Month", before: "2", after: "14" },
      { metric: "Monthly Website Visitors", before: "90", after: "890" },
    ],
  },
  {
    id: "16",
    slug: "case-study-cpa-firm-onboarding-automation",
    title: "CPA Firm Client Growth & Automation",
    business: "Clearpath Accounting Group — Full-service CPA firm",
    challenge: "Client onboarding took 3 weeks on average, tax season overwhelmed the team, and the firm had no marketing beyond word-of-mouth referrals.",
    solution: "Deployed AI Email Automation + Workflow Automation + Landing Page Development + Content Writing & Strategy. Streamlined onboarding and built a year-round client acquisition system.",
    results: { metric1: "180%", label1: "New Client Growth", metric2: "3 days", label2: "Onboarding Time (from 3 weeks)", metric3: "$11.7K", label3: "Monthly Revenue Growth", metric4: "96%", label4: "Client Retention Rate" },
    tags: ["Email Automation", "Workflow Automation", "Landing Pages", "Content Strategy"],
    label: "Sample Case Study",
    industry: "Accounting & CPA",
    services: ["AI Email Automation", "Workflow Automation", "Landing Page Development", "Content Writing & Strategy"],
    duration: "4 months",
    teamSize: "3 specialists",
    testimonial: { quote: "Client onboarding used to be our biggest bottleneck. Now it takes 3 days instead of 3 weeks, and we have a steady stream of new businesses finding us through our content.", author: "Linda Zhao", role: "Managing Partner, Clearpath Accounting Group" },
    workflow: [
      { step: "Process Mapping", description: "Documented the entire client onboarding workflow, identifying manual steps, bottlenecks, and document collection delays." },
      { step: "Workflow Automation", description: "Built automated onboarding sequences with document request emails, e-signature integration, and checklist tracking." },
      { step: "Content & SEO", description: "Created tax planning guides, small business accounting tips, and industry-specific content for organic lead generation." },
      { step: "Landing Page Funnels", description: "Built service-specific landing pages for tax preparation, bookkeeping, and business advisory with consultation booking." },
    ],
    beforeAfter: [
      { metric: "Client Onboarding Time", before: "3 weeks", after: "3 days" },
      { metric: "New Clients/Quarter", before: "12", after: "34" },
      { metric: "Client Retention", before: "82%", after: "96%" },
    ],
  },
  {
    id: "17",
    slug: "case-study-luxury-salon-ai-booking-instagram-growth",
    title: "Luxury Salon Booking & Brand Expansion",
    business: "Velour Beauty Lounge — High-end hair and beauty salon",
    challenge: "No-show rate of 28%, inconsistent social media presence, and the booking system was manual (phone and walk-in only), limiting capacity utilization to 55%.",
    solution: "Implemented AI Appointment Booking + Instagram Growth & Posting + AI SMS Automation + Landing Page Optimization. Built an automated booking ecosystem with social proof engine.",
    results: { metric1: "87%", label1: "Capacity Utilization (from 55%)", metric2: "6%", label2: "No-Show Rate (from 28%)", metric3: "22K", label3: "Instagram Followers Gained", metric4: "$13.2K", label4: "Monthly Revenue Growth" },
    tags: ["AI Booking", "Social Media", "SMS Automation", "Landing Pages"],
    label: "Sample Case Study",
    industry: "Beauty & Salon",
    services: ["AI Appointment Booking", "Instagram Growth & Posting", "AI SMS Automation", "Landing Page Optimization"],
    duration: "4 months",
    teamSize: "3 specialists",
    testimonial: { quote: "Our no-show rate dropped from 28% to 6% overnight with the automated reminders. And Instagram is now our biggest source of new clients.", author: "Vanessa Okafor", role: "Owner, Velour Beauty Lounge" },
    workflow: [
      { step: "Booking & Revenue Audit", description: "Analyzed appointment patterns, no-show data, peak hours, and revenue per chair to identify optimization opportunities." },
      { step: "Online Booking System", description: "Deployed AI-powered booking with automated confirmations, reminders (24hr + 2hr), and waitlist management." },
      { step: "Instagram Content Engine", description: "Created transformation-focused content strategy with before/after posts, reels, stylist spotlights, and booking CTAs." },
      { step: "SMS Retention System", description: "Built automated rebooking reminders, birthday offers, and loyalty rewards triggered by appointment history." },
    ],
    beforeAfter: [
      { metric: "Capacity Utilization", before: "55%", after: "87%" },
      { metric: "No-Show Rate", before: "28%", after: "6%" },
      { metric: "Monthly Revenue", before: "$42K", after: "$66K" },
    ],
  },
  {
    id: "18",
    slug: "case-study-immigration-law-multilingual-lead-generation",
    title: "Immigration Law Firm Digital Acquisition",
    business: "Bridgepoint Immigration Law — Immigration and visa law firm",
    challenge: "Competing with large national firms for visibility. Website was not multilingual, had no online consultation booking, and generated fewer than 5 leads per month.",
    solution: "Deployed Website Development + Google Ads Revenue Engine + AI Chatbot + AI Follow-Up Automation. Built multilingual digital presence with automated consultation pipeline.",
    results: { metric1: "185%", label1: "Monthly Lead Increase", metric2: "18", label2: "Consultations Booked/Month", metric3: "$12.6K", label3: "Monthly Revenue Growth", metric4: "3.6x", label4: "Return on Ad Spend" },
    tags: ["Web Development", "Google Ads", "AI Chatbot", "Follow-Up Automation"],
    label: "Sample Case Study",
    industry: "Legal (Immigration)",
    services: ["Website Development", "Google Ads", "AI Chatbot", "AI Follow-Up Automation"],
    duration: "5 months",
    teamSize: "4 specialists",
    testimonial: { quote: "The multilingual chatbot handles inquiries in English, Spanish, and Portuguese 24/7. We went from 5 consultations a month to over 18, and our close rate actually improved.", author: "Attorney Maria Santos", role: "Founding Partner, Bridgepoint Immigration Law" },
    workflow: [
      { step: "Market & Competitor Analysis", description: "Researched immigration law search trends, competitor ad strategies, and underserved language communities in the service area." },
      { step: "Multilingual Website", description: "Built professional website in English, Spanish, and Portuguese with visa category pages and online consultation scheduling." },
      { step: "AI Chatbot & Ads", description: "Deployed multilingual chatbot for instant visa eligibility pre-screening and launched targeted Google Ads for high-intent immigration queries." },
      { step: "Lead Nurture System", description: "Created follow-up automation with case-type-specific email sequences and document preparation guides." },
    ],
    beforeAfter: [
      { metric: "Monthly Leads", before: "5", after: "18" },
      { metric: "Consultation Close Rate", before: "22%", after: "38%" },
      { metric: "Monthly Revenue", before: "$28K", after: "$52K" },
    ],
  },
  {
    id: "19",
    slug: "case-study-freight-brokerage-workflow-automation",
    title: "Freight Brokerage Efficiency & Growth",
    business: "Nexus Freight Solutions — Third-party logistics and freight brokerage",
    challenge: "Manual carrier matching taking 45 minutes per load, no CRM in place, and client communication relied on scattered emails and phone calls.",
    solution: "Implemented CRM Automation + Workflow Automation + AI Email Automation + Dashboard & Analytics Setup. Built operational efficiency system with automated client reporting.",
    results: { metric1: "68%", label1: "Faster Load Matching", metric2: "135%", label2: "Load Volume Growth", metric3: "$11.8K", label3: "Monthly Revenue Growth", metric4: "94%", label4: "Client Retention Rate" },
    tags: ["CRM Automation", "Workflow Automation", "Email Automation", "Analytics"],
    label: "Sample Case Study",
    industry: "Logistics & Shipping",
    services: ["CRM Automation", "Workflow Automation", "AI Email Automation", "Dashboard & Analytics Setup"],
    duration: "6 months",
    teamSize: "4 specialists",
    testimonial: { quote: "Load matching went from 45 minutes to under 15. Our brokers handle triple the volume now, and clients get automated tracking updates without us lifting a finger.", author: "Derek Osman", role: "CEO, Nexus Freight Solutions" },
    workflow: [
      { step: "Operations Audit", description: "Mapped the entire load lifecycle from customer request to delivery confirmation, identifying manual bottlenecks." },
      { step: "CRM & Pipeline Setup", description: "Configured logistics CRM with automated load tracking, carrier databases, and client communication workflows." },
      { step: "Workflow Automation", description: "Built automated carrier matching, rate confirmation, and shipment status update sequences." },
      { step: "Reporting & Analytics", description: "Deployed real-time dashboards for load performance, margin analysis, and automated weekly client reports." },
    ],
    beforeAfter: [
      { metric: "Load Matching Time", before: "45 min", after: "14 min" },
      { metric: "Loads Brokered/Month", before: "120", after: "282" },
      { metric: "Client Retention", before: "78%", after: "94%" },
    ],
  },
  {
    id: "20",
    slug: "case-study-cnc-manufacturer-digital-lead-generation",
    title: "Precision Parts Manufacturer Digital Transformation",
    business: "Apex Machining Works — CNC precision parts manufacturer",
    challenge: "No digital marketing presence, 100% reliance on trade shows and existing relationships. RFQ pipeline was feast-or-famine with long gaps between contracts.",
    solution: "Built Website Development + SEO Authority Growth System + Google Ads Revenue Engine + AI Lead Qualification Bot. Created an industrial-grade digital lead generation engine.",
    results: { metric1: "185%", label1: "Website RFQ Submissions", metric2: "$13.2K", label2: "Monthly Revenue Growth", metric3: "12", label3: "New Manufacturing Clients", metric4: "#1", label4: "Google Rank for CNC Keywords" },
    tags: ["Web Development", "SEO", "Google Ads", "AI Qualification"],
    label: "Sample Case Study",
    industry: "Manufacturing",
    services: ["Website Development", "SEO Authority Growth System", "Google Ads", "AI Lead Qualification Bot"],
    duration: "9 months",
    teamSize: "4 specialists",
    testimonial: { quote: "We used to fly to 6 trade shows a year hoping to meet the right buyer. Now qualified RFQs come to us every week through the website. It completely changed our business model.", author: "Karl Brennan", role: "VP of Business Development, Apex Machining Works" },
    workflow: [
      { step: "Industry Research", description: "Analyzed target industries, competitor digital presence, and high-value CNC machining search terms." },
      { step: "Technical Website", description: "Built capabilities-focused website with material specs, tolerance charts, certifications, and RFQ submission portal." },
      { step: "Industrial SEO", description: "Targeted long-tail manufacturing keywords with technical content, case studies, and capabilities pages." },
      { step: "Lead Qualification & Ads", description: "Launched Google Ads for CNC machining queries and deployed AI qualification bot to filter RFQs by volume, material, and timeline." },
    ],
    beforeAfter: [
      { metric: "Monthly RFQ Submissions", before: "3", after: "12" },
      { metric: "New Clients (Year 1)", before: "4", after: "12" },
      { metric: "Trade Show Dependency", before: "100%", after: "15%" },
    ],
  },
  {
    id: "21",
    slug: "case-study-veterinary-clinic-ai-appointment-growth",
    title: "Veterinary Clinic Growth & Automation",
    business: "PawsCare Animal Hospital — Multi-vet companion animal clinic",
    challenge: "Appointment scheduling was entirely phone-based causing 40% of calls to go unanswered during peak hours. No online presence beyond a basic Facebook page, and client retention dropped to 60%.",
    solution: "Deployed AI Appointment Booking + Google Ads Revenue Engine + AI SMS Automation + Local SEO & Google Business. Built a complete digital client acquisition and retention system with automated appointment reminders.",
    results: { metric1: "142%", label1: "New Client Growth", metric2: "$11.8K", label2: "Monthly Revenue Growth", metric3: "94%", label3: "Appointment Show Rate", metric4: "3.8x", label4: "Return on Ad Spend" },
    tags: ["AI Booking", "Google Ads", "SMS Automation", "Local SEO"],
    label: "Sample Case Study",
    industry: "Veterinary",
    services: ["AI Appointment Booking", "Google Ads", "AI SMS Automation", "Local SEO & Google Business"],
    duration: "5 months",
    teamSize: "3 specialists",
    testimonial: { quote: "We were losing clients simply because they could not reach us by phone. Now 70% of appointments are booked online, our no-show rate dropped from 22% to 6%, and we have a steady flow of new pet owners finding us through Google every week.", author: "Dr. Natalie Reeves", role: "Owner, PawsCare Animal Hospital" },
    workflow: [
      { step: "Practice Analysis", description: "Audited patient flow, scheduling bottlenecks, call handling capacity, and existing marketing channels." },
      { step: "Online Booking System", description: "Deployed AI appointment booking with automated confirmations, reminders, and rescheduling via SMS." },
      { step: "Digital Visibility", description: "Optimized Google Business profile, launched targeted Google Ads, and built local SEO presence for pet care keywords." },
      { step: "Retention Automation", description: "Created automated vaccination reminders, wellness check sequences, and loyalty program communications." },
    ],
    beforeAfter: [
      { metric: "Monthly New Clients", before: "18", after: "44" },
      { metric: "Phone Call Answer Rate", before: "60%", after: "99% (AI + Online)" },
      { metric: "Client Retention Rate", before: "60%", after: "91%" },
    ],
  },
];

export const PRICING_TIERS = [
  {
    name: "Growth",
    price: "$1,599",
    period: "/month",
    description: "Perfect for small businesses ready to automate their first revenue systems.",
    features: [
      "AI Chatbot (Website)",
      "Basic CRM Setup & Automation",
      "Email Automation (up to 1,000 contacts)",
      "SMS Automation (up to 500 contacts)",
      "1 Landing Page",
      "Basic SEO Audit & Optimization",
      "Google Business Optimization",
      "Monthly Performance Report",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
    discount: null,
  },
  {
    name: "Scale",
    price: "$2,999",
    period: "/month",
    description: "For growing businesses that need a complete AI-powered revenue engine.",
    features: [
      "Everything in Growth, plus:",
      "AI Calling Agent",
      "AI Lead Qualification Bot",
      "AI Appointment Booking",
      "AI Follow-Up Automation",
      "Google Ads Management",
      "Meta Ads Management",
      "Full CRM Automation",
      "3 Conversion Funnels",
      "Social Media (2 Platforms)",
      "Content Writing & Strategy",
      "Weekly Strategy Calls",
      "Priority Support",
    ],
    cta: "Scale Now",
    popular: true,
    discount: "Save 20%",
  },
  {
    name: "Enterprise",
    price: "$5,999",
    period: "/month",
    description: "Enterprise-grade AI automation for businesses ready to dominate their market.",
    features: [
      "Everything in Scale, plus:",
      "AI Receptionist (24/7)",
      "AI Sales Assistant",
      "Full Workflow Automation",
      "Advanced Analytics Dashboard",
      "SEO Authority Growth System",
      "Local SEO & Google Business",
      "Video Marketing",
      "Unlimited Landing Pages",
      "Social Media (All Platforms)",
      "SaaS Integrations",
      "Dedicated Account Manager",
      "Daily Reporting",
    ],
    cta: "Dominate Your Market",
    popular: false,
    discount: "Save 35%",
  },
];

export interface ServicePricing {
  slug: string;
  title: string;
  tiers: {
    name: string;
    price: number;
    features: string[];
  }[];
  unit: string;
  combinedNote?: string;
}

export const SERVICE_PRICING: ServicePricing[] = [
  {
    slug: "ai-calling-agent",
    title: "AI Calling Agent",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 399, features: ["Up to 200 calls/mo", "Basic call scripts", "Call recording", "Lead capture", "Email notifications"] },
      { name: "Scale", price: 599, features: ["Up to 500 calls/mo", "Custom call scripts", "Call recording & analytics", "CRM integration", "SMS follow-ups", "Priority support"] },
      { name: "Enterprise", price: 999, features: ["Unlimited calls", "Advanced AI scripts", "Full analytics dashboard", "Multi-CRM integration", "SMS + email follow-ups", "Dedicated account manager", "Custom integrations"] },
    ],
  },
  {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 399, features: ["24/7 call answering", "Basic call routing", "Message taking", "Call transcripts", "Email notifications"] },
      { name: "Scale", price: 599, features: ["24/7 call answering", "Smart call routing", "Appointment scheduling", "CRM integration", "Call analytics", "Priority support"] },
      { name: "Enterprise", price: 999, features: ["24/7 call answering", "Advanced AI routing", "Full scheduling integration", "Multi-location support", "Custom workflows", "Dedicated manager", "API access"] },
    ],
  },
  {
    slug: "ai-lead-qualification",
    title: "AI Lead Qualification Bot",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 299, features: ["Up to 500 leads/mo", "Basic scoring model", "Email notifications", "Lead capture forms", "Monthly reports"] },
      { name: "Scale", price: 399, features: ["Up to 2,000 leads/mo", "Advanced scoring", "CRM sync", "Custom qualification criteria", "Real-time alerts", "Weekly reports"] },
      { name: "Enterprise", price: 599, features: ["Unlimited leads", "AI-powered scoring", "Multi-CRM sync", "Custom workflows", "API access", "Dedicated manager", "Daily reports"] },
    ],
  },
  {
    slug: "ai-appointment-booking",
    title: "AI Appointment Booking System",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 399, features: ["Calendar integration", "Automated reminders", "Basic booking page", "Email confirmations", "Up to 100 bookings/mo"] },
      { name: "Scale", price: 599, features: ["Multi-calendar sync", "SMS + email reminders", "Custom booking pages", "CRM integration", "Up to 500 bookings/mo", "Rescheduling automation"] },
      { name: "Enterprise", price: 999, features: ["Unlimited bookings", "Multi-location calendars", "Advanced reminders", "Full CRM integration", "Custom workflows", "API access", "Dedicated support"] },
    ],
  },
  {
    slug: "ai-follow-up",
    title: "AI Follow-Up Automation",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 299, features: ["Up to 500 contacts", "Email sequences (3 steps)", "Basic templates", "Open tracking", "Monthly reports"] },
      { name: "Scale", price: 399, features: ["Up to 2,000 contacts", "Email + SMS sequences", "Custom templates", "Behavior triggers", "A/B testing", "Weekly reports"] },
      { name: "Enterprise", price: 599, features: ["Unlimited contacts", "Multi-channel sequences", "AI-optimized timing", "Advanced triggers", "Full analytics", "API access", "Dedicated manager"] },
    ],
  },
  {
    slug: "ai-sales-assistant",
    title: "AI Sales Assistant",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 399, features: ["Lead research", "Email drafting", "Basic objection handling", "CRM updates", "Sales script templates"] },
      { name: "Scale", price: 599, features: ["Advanced lead research", "Personalized outreach", "Objection handling AI", "Pipeline analytics", "CRM automation", "Deal scoring"] },
      { name: "Enterprise", price: 999, features: ["Full AI sales co-pilot", "Multi-channel outreach", "Advanced deal scoring", "Revenue forecasting", "Custom integrations", "Team analytics", "Dedicated support"] },
    ],
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 99, features: ["Website chatbot", "Basic Q&A responses", "Lead capture", "Email notifications", "Up to 500 conversations/mo"] },
      { name: "Scale", price: 199, features: ["Website + WhatsApp", "Smart AI responses", "Appointment booking", "CRM integration", "Up to 2,000 conversations/mo", "Custom branding"] },
      { name: "Enterprise", price: 299, features: ["All channels (Web, WhatsApp, Messenger, SMS)", "Advanced AI engine", "Full CRM sync", "Custom workflows", "Unlimited conversations", "Multi-language", "API access"] },
    ],
  },
  {
    slug: "ai-email-automation",
    title: "AI Email Automation",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 299, features: ["Up to 1,000 contacts", "5 email sequences", "Basic templates", "Open & click tracking", "Monthly reports"] },
      { name: "Scale", price: 399, features: ["Up to 5,000 contacts", "15 email sequences", "Custom templates", "A/B testing", "Behavior triggers", "Weekly reports"] },
      { name: "Enterprise", price: 599, features: ["Unlimited contacts", "Unlimited sequences", "AI-optimized content", "Advanced segmentation", "Revenue attribution", "API access", "Dedicated manager"] },
    ],
  },
  {
    slug: "ai-sms-automation",
    title: "AI SMS Automation",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 299, features: ["Up to 500 SMS/mo", "Basic campaigns", "Opt-in management", "Delivery reports", "Template library"] },
      { name: "Scale", price: 399, features: ["Up to 2,000 SMS/mo", "Automated sequences", "Personalization", "CRM integration", "Click tracking", "A/B testing"] },
      { name: "Enterprise", price: 599, features: ["Up to 10,000 SMS/mo", "AI-optimized timing", "Multi-step campaigns", "Advanced analytics", "API access", "Dedicated number", "Priority support"] },
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 499, features: ["Basic pipeline setup", "Lead auto-assignment", "Email sync", "Task automation", "Up to 1,000 contacts", "Monthly reports"] },
      { name: "Scale", price: 999, features: ["Advanced pipelines", "Multi-stage automation", "Full email/SMS sync", "Custom fields & tags", "Up to 10,000 contacts", "Weekly reports"] },
      { name: "Enterprise", price: 1499, features: ["Enterprise pipelines", "AI-powered automation", "Multi-team setup", "Revenue forecasting", "Unlimited contacts", "Custom integrations", "Dedicated manager"] },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 399, features: ["Up to 5 workflows", "Basic triggers", "Email notifications", "2 app integrations", "Monthly reports"] },
      { name: "Scale", price: 599, features: ["Up to 20 workflows", "Advanced triggers", "Multi-step automations", "10 app integrations", "Error handling", "Weekly reports"] },
      { name: "Enterprise", price: 999, features: ["Unlimited workflows", "AI-powered triggers", "Complex logic branches", "Unlimited integrations", "Custom API connectors", "Dedicated support"] },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Revenue Engine",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 199, features: ["Up to $2K ad spend management", "Keyword research", "Ad copywriting", "Basic bid optimization", "Monthly reporting"] },
      { name: "Scale", price: 299, features: ["Up to $10K ad spend management", "Advanced keyword strategy", "A/B ad testing", "Conversion tracking", "Landing page recommendations", "Bi-weekly reports"] },
      { name: "Enterprise", price: 399, features: ["Unlimited ad spend management", "Full-funnel strategy", "AI bid optimization", "Custom audiences", "Multi-campaign management", "Weekly strategy calls", "Dedicated manager"] },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Growth Engine",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 199, features: ["Up to $2K ad spend management", "Audience targeting", "Ad creative design", "Basic retargeting", "Monthly reporting"] },
      { name: "Scale", price: 299, features: ["Up to $10K ad spend management", "Lookalike audiences", "Dynamic creatives", "Full retargeting funnel", "Conversion optimization", "Bi-weekly reports"] },
      { name: "Enterprise", price: 399, features: ["Unlimited ad spend management", "Full-funnel campaigns", "AI audience optimization", "Cross-platform sync", "Custom dashboards", "Weekly strategy calls", "Dedicated manager"] },
    ],
  },
  {
    slug: "seo-authority",
    title: "SEO Authority Growth System",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 399, features: ["Technical SEO audit", "On-page optimization (10 pages)", "Keyword research", "Monthly content plan", "Basic link building", "Monthly reports"] },
      { name: "Scale", price: 499, features: ["Full technical SEO", "On-page optimization (25 pages)", "Advanced keyword strategy", "Content creation (4 articles/mo)", "Link building outreach", "Bi-weekly reports"] },
      { name: "Enterprise", price: 799, features: ["Enterprise technical SEO", "Unlimited page optimization", "AI content strategy", "Content creation (8+ articles/mo)", "Premium link building", "Schema markup", "Weekly strategy calls"] },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO & Google Business",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 399, features: ["Google Business optimization", "Local citation building", "Review management", "Local keyword targeting", "Monthly reports"] },
      { name: "Scale", price: 499, features: ["Multi-location GBP management", "Advanced citation network", "Review generation system", "Local content strategy", "Competitor analysis", "Bi-weekly reports"] },
      { name: "Enterprise", price: 799, features: ["Enterprise multi-location", "Full local authority building", "AI review management", "Local PR & link building", "Custom local landing pages", "Weekly strategy calls", "Dedicated manager"] },
    ],
  },
  {
    slug: "conversion-funnels",
    title: "Conversion Funnel Building",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 499, features: ["1 conversion funnel", "Landing page design", "Email sequence (5 emails)", "Basic A/B testing", "Conversion tracking", "Monthly optimization"] },
      { name: "Scale", price: 699, features: ["3 conversion funnels", "Custom design & copy", "Email + SMS sequences", "Advanced A/B testing", "Retargeting integration", "Bi-weekly optimization"] },
      { name: "Enterprise", price: 999, features: ["Unlimited funnels", "Premium design & copy", "Multi-channel sequences", "AI-powered optimization", "Revenue attribution", "Weekly strategy calls", "Dedicated manager"] },
    ],
  },
  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 99, features: ["1 landing page audit", "Conversion recommendations", "Heatmap analysis", "Basic A/B test setup", "Monthly report"] },
      { name: "Scale", price: 150, features: ["3 landing page audits", "Full UX optimization", "Heatmap + session recording", "A/B testing (3 variants)", "CRO recommendations", "Bi-weekly reports"] },
      { name: "Enterprise", price: 199, features: ["Unlimited page audits", "AI-powered optimization", "Advanced testing framework", "Personalization setup", "Revenue tracking", "Weekly optimization calls"] },
    ],
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 99, features: ["Site-wide CRO audit", "Top 3 quick wins", "Heatmap setup", "Basic testing plan", "Monthly report"] },
      { name: "Scale", price: 150, features: ["Full CRO strategy", "User behavior analysis", "Multivariate testing", "Form optimization", "Checkout optimization", "Bi-weekly reports"] },
      { name: "Enterprise", price: 199, features: ["Enterprise CRO program", "AI-powered testing", "Personalization engine", "Revenue optimization", "Custom dashboards", "Weekly strategy calls"] },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    unit: "/mo",
    combinedNote: "Includes Instagram Growth & Posting, Facebook Growth & Posting, Branding & Creative Design, and Short Form Video Marketing",
    tiers: [
      { name: "Growth", price: 399, features: ["2 platforms", "12 posts/mo", "Basic content calendar", "Community management", "Monthly analytics", "Includes Instagram & Facebook posting"] },
      { name: "Scale", price: 499, features: ["4 platforms", "20 posts/mo", "Content strategy & calendar", "Community management", "Graphic design & branding", "Short-form video (4/mo)", "Bi-weekly reports"] },
      { name: "Enterprise", price: 599, features: ["All platforms", "30+ posts/mo", "Full content strategy", "Brand identity management", "Short-form video (8+/mo)", "Influencer coordination", "Paid social amplification", "Weekly strategy calls"] },
    ],
  },
  {
    slug: "instagram-growth",
    title: "Instagram Growth & Posting",
    unit: "/mo",
    combinedNote: "Combined into Social Media Marketing package",
    tiers: [
      { name: "Growth", price: 399, features: ["Included in Social Media Marketing Growth plan"] },
      { name: "Scale", price: 499, features: ["Included in Social Media Marketing Scale plan"] },
      { name: "Enterprise", price: 599, features: ["Included in Social Media Marketing Enterprise plan"] },
    ],
  },
  {
    slug: "facebook-growth",
    title: "Facebook Growth & Posting",
    unit: "/mo",
    combinedNote: "Combined into Social Media Marketing package",
    tiers: [
      { name: "Growth", price: 399, features: ["Included in Social Media Marketing Growth plan"] },
      { name: "Scale", price: 499, features: ["Included in Social Media Marketing Scale plan"] },
      { name: "Enterprise", price: 599, features: ["Included in Social Media Marketing Enterprise plan"] },
    ],
  },
  {
    slug: "branding-design",
    title: "Branding & Creative Design",
    unit: "/mo",
    combinedNote: "Combined into Social Media Marketing package",
    tiers: [
      { name: "Growth", price: 399, features: ["Included in Social Media Marketing Growth plan"] },
      { name: "Scale", price: 499, features: ["Included in Social Media Marketing Scale plan"] },
      { name: "Enterprise", price: 599, features: ["Included in Social Media Marketing Enterprise plan"] },
    ],
  },
  {
    slug: "video-marketing",
    title: "Short Form Video Marketing",
    unit: "/mo",
    combinedNote: "Combined into Social Media Marketing package",
    tiers: [
      { name: "Growth", price: 399, features: ["Included in Social Media Marketing Growth plan"] },
      { name: "Scale", price: 499, features: ["Included in Social Media Marketing Scale plan"] },
      { name: "Enterprise", price: 599, features: ["Included in Social Media Marketing Enterprise plan"] },
    ],
  },
  {
    slug: "content-writing",
    title: "Content Writing & Strategy",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 199, features: ["2 blog articles/mo", "Basic keyword targeting", "Content calendar", "Social media snippets", "Monthly strategy"] },
      { name: "Scale", price: 299, features: ["4 blog articles/mo", "SEO-optimized content", "Content strategy", "Email newsletter copy", "Social media content", "Bi-weekly reports"] },
      { name: "Enterprise", price: 399, features: ["8+ articles/mo", "Full content engine", "Thought leadership pieces", "Whitepapers & guides", "Multi-channel distribution", "Weekly strategy calls"] },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 299, features: ["5-page responsive website", "Mobile optimization", "Basic SEO setup", "Contact form integration", "SSL & security", "30 days support"] },
      { name: "Scale", price: 499, features: ["10-page custom website", "Advanced animations", "CRM integration", "Blog setup", "Speed optimization", "Analytics setup", "60 days support"] },
      { name: "Enterprise", price: 799, features: ["Unlimited pages", "Custom design & UX", "E-commerce capability", "Full CRM integration", "Advanced SEO", "Custom API integrations", "Ongoing support"] },
    ],
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 199, features: ["5 area pages", "Responsive design", "Lead capture forms", "Basic A/B testing", "Speed optimization", "30 days support"] },
      { name: "Scale", price: 299, features: ["8 area pages", "Custom design", "Advanced forms", "CRM integration", "Conversion tracking", "A/B testing", "60 days support"] },
      { name: "Enterprise", price: 399, features: ["12 area pages", "Premium design & copy", "Multi-step forms", "Full CRM integration", "Advanced analytics", "Personalization", "Ongoing support"] },
    ],
  },
  {
    slug: "saas-integrations",
    title: "SaaS Integrations",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 999, features: ["Up to 5 integrations", "Basic API connections", "Data sync setup", "Error monitoring", "Documentation", "30 days support"] },
      { name: "Scale", price: 1999, features: ["Up to 15 integrations", "Advanced API workflows", "Real-time data sync", "Custom middleware", "Error handling & alerts", "60 days support"] },
      { name: "Enterprise", price: 2999, features: ["Unlimited integrations", "Enterprise API architecture", "Custom connectors", "Data transformation", "24/7 monitoring", "Dedicated engineer", "Ongoing support"] },
    ],
  },
  {
    slug: "crm-setup",
    title: "CRM Setup & Integration",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 999, features: ["CRM selection & setup", "Basic pipeline configuration", "Contact import", "Team training (2 hrs)", "Email integration", "30 days support"] },
      { name: "Scale", price: 1499, features: ["Advanced CRM setup", "Multi-pipeline config", "Custom fields & automation", "Data migration", "Team training (5 hrs)", "Marketing integration", "60 days support"] },
      { name: "Enterprise", price: 1999, features: ["Enterprise CRM deployment", "Complex automation rules", "Multi-team setup", "Full data migration", "Custom reporting", "Ongoing training", "Dedicated support"] },
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "Dashboard & Analytics Setup",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 299, features: ["Google Analytics setup", "Basic KPI dashboard", "Monthly report template", "Conversion tracking", "3 data sources"] },
      { name: "Scale", price: 399, features: ["Advanced analytics suite", "Custom KPI dashboards", "Real-time reporting", "Attribution modeling", "10 data sources", "Bi-weekly insights"] },
      { name: "Enterprise", price: 499, features: ["Enterprise analytics", "AI-powered insights", "Custom data warehouse", "Unlimited data sources", "Predictive analytics", "Revenue attribution", "Weekly strategy calls"] },
    ],
  },
  {
    slug: "marketing-automation-setup",
    title: "Marketing Automation Setup",
    unit: "/mo",
    tiers: [
      { name: "Growth", price: 299, features: ["Platform setup", "3 automation workflows", "Email template design", "Lead scoring basics", "Integration (2 tools)", "30 days support"] },
      { name: "Scale", price: 399, features: ["Advanced platform config", "10 automation workflows", "Custom templates", "Advanced lead scoring", "Integration (5 tools)", "A/B testing", "60 days support"] },
      { name: "Enterprise", price: 499, features: ["Enterprise automation", "Unlimited workflows", "AI-optimized journeys", "Multi-channel orchestration", "Unlimited integrations", "Revenue tracking", "Ongoing support"] },
    ],
  },
];

export function getServicePricing(slug: string): ServicePricing | undefined {
  return SERVICE_PRICING.find(sp => sp.slug === slug);
}

export const TESTIMONIALS = [
  {
    name: "Michael Chen",
    role: "CEO, Premier Dental Care",
    text: "Infinite Rankers transformed our patient acquisition. The AI calling agent alone books 25+ appointments per week without any human involvement. Our revenue has grown significantly.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Founder, LuxeHome Essentials",
    text: "The AI email automation and retargeting system they built recovered over $65K in abandoned carts in just 3 months. The ROI is incredible.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Managing Partner, Sterling & Associates",
    text: "We never miss a potential client call now. The AI receptionist handles intake 24/7 and the follow-up automation has increased our case conversion by 145%.",
    rating: 5,
  },
  {
    name: "Jennifer Park",
    role: "Owner, FitCore Studios",
    text: "From 200 to 340 active members in 6 months. The combination of social media marketing and AI booking automation changed everything for our studios.",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    role: "VP Sales, CloudSync Pro",
    text: "Our sales cycle went from 45 days to 18 days. The AI sales assistant and automated demo booking system have completely revolutionized our pipeline.",
    rating: 5,
  },
];

export const BLOG_POSTS = [
  { id: "1", slug: "ai-automation-revenue-growth-2025", title: "How AI Automation Is Driving 10x Revenue Growth in 2025", excerpt: "Discover how forward-thinking businesses are leveraging AI automation systems to generate customers and revenue on autopilot.", category: "AI Automation", readTime: "8 min read", date: "Feb 14, 2026", image: "/images/blog/blog-ai-automation.jpg" },
  { id: "2", slug: "google-ads-roi-local-business", title: "Google Ads for Local Businesses: A Data-Driven ROI Framework", excerpt: "Learn the exact framework we use to generate 4-6x ROAS for local businesses using AI-optimized Google Ads campaigns.", category: "Lead Generation", readTime: "12 min read", date: "Feb 3, 2026", image: "/images/blog/blog-google-ads.jpg" },
  { id: "3", slug: "ai-chatbot-lead-conversion", title: "AI Chatbots: Converting 78% More Website Visitors Into Leads", excerpt: "How intelligent chatbots are revolutionizing lead capture and qualification for businesses across every industry.", category: "AI Automation", readTime: "6 min read", date: "Jan 22, 2026", image: "/images/blog/blog-chatbot.jpg" },
  { id: "4", slug: "crm-automation-sales-pipeline", title: "The Ultimate CRM Automation Playbook for Sales Teams", excerpt: "Stop losing deals to manual processes. Here is how to automate your entire sales pipeline from lead to close.", category: "Sales Automation", readTime: "10 min read", date: "Jan 10, 2026", image: "/images/blog/blog-crm.jpg" },
  { id: "5", slug: "seo-vs-paid-ads-strategy", title: "SEO vs Paid Ads: Building a Unified Revenue Strategy", excerpt: "Why the best growth strategies combine organic search dominance with paid advertising for maximum market capture.", category: "Strategy", readTime: "9 min read", date: "Dec 28, 2025", image: "/images/blog/blog-seo-strategy.jpg" },
  { id: "6", slug: "ai-follow-up-sequences", title: "AI Follow-Up Sequences That Close 3x More Deals", excerpt: "The science behind AI-powered follow-up automation and how it is helping sales teams dramatically increase close rates.", category: "AI Automation", readTime: "7 min read", date: "Dec 15, 2025", image: "/images/blog/blog-follow-up.jpg" },
  { id: "7", slug: "social-media-marketing-strategy-2025", title: "Social Media Marketing Strategy: The 2025 Playbook for Business Growth", excerpt: "Build a social media strategy that actually drives revenue. Platform-specific tactics for Instagram, Facebook, LinkedIn, and TikTok.", category: "Social Media", readTime: "11 min read", date: "Dec 1, 2025", image: "/images/blog/blog-social-media.jpg" },
  { id: "8", slug: "local-business-digital-marketing", title: "Digital Marketing for Local Businesses: The Complete 2025 Guide", excerpt: "Everything a local business needs to dominate their market online — from Google Business Profile to local SEO to targeted advertising.", category: "Local Marketing", readTime: "14 min read", date: "Nov 18, 2025", image: "/images/blog/blog-local-business.jpg" },
  { id: "9", slug: "lead-generation-strategies-2025", title: "15 Lead Generation Strategies That Actually Work in 2025", excerpt: "Proven lead generation tactics backed by data from campaigns generating thousands of leads for businesses across the USA.", category: "Lead Generation", readTime: "13 min read", date: "Nov 5, 2025", image: "/images/blog/blog-lead-gen.jpg" },
  { id: "10", slug: "website-conversion-optimization", title: "Website Conversion Optimization: Turn More Visitors Into Paying Customers", excerpt: "Data-backed strategies to increase your website conversion rate by 200% or more without increasing traffic.", category: "Web Development", readTime: "10 min read", date: "Oct 22, 2025", image: "/images/blog/blog-web-design.jpg" },
  { id: "11", slug: "content-marketing-seo-guide", title: "Content Marketing for SEO: How to Create Content That Ranks and Converts", excerpt: "The complete guide to creating SEO-optimized content that ranks on Google page one and turns organic traffic into revenue.", category: "Content Marketing", readTime: "11 min read", date: "Oct 8, 2025", image: "/images/blog/blog-analytics.jpg" },
  { id: "12", slug: "ecommerce-growth-strategies", title: "E-Commerce Growth: 10 AI-Powered Strategies to Scale Your Online Store", excerpt: "How AI and automation are helping e-commerce brands achieve significant growth through personalization and intelligent marketing.", category: "E-Commerce", readTime: "12 min read", date: "Sep 24, 2025", image: "/images/blog/blog-ecommerce.jpg" },
  { id: "13", slug: "brand-identity-business-growth", title: "How Strong Brand Identity Drives Revenue Growth: A Strategic Guide", excerpt: "Why branding is not just about logos — how strategic brand identity directly impacts customer acquisition, retention, and revenue.", category: "Branding", readTime: "8 min read", date: "Sep 10, 2025", image: "/images/blog/blog-branding.jpg" },
  { id: "14", slug: "healthcare-marketing-patient-acquisition", title: "Healthcare Marketing: How to Acquire More Patients with AI and Digital Strategy", excerpt: "HIPAA-compliant digital marketing strategies that help medical practices attract and retain patients.", category: "Healthcare", readTime: "10 min read", date: "Aug 28, 2025", image: "/images/blog/blog-healthcare.jpg" },
  { id: "15", slug: "real-estate-lead-generation-ai", title: "Real Estate Lead Generation: How AI Is Transforming Agent Success", excerpt: "AI-powered strategies that help real estate agents and brokerages generate, qualify, and convert more leads.", category: "Real Estate", readTime: "9 min read", date: "Aug 14, 2025", image: "/images/blog/blog-real-estate.jpg" },
];

export const HOW_IT_WORKS_STEPS = [
  { step: 1, title: "Traffic Generation", description: "We drive qualified traffic through AI-optimized ads, SEO, and content strategies.", icon: "Globe" },
  { step: 2, title: "AI Qualification", description: "Our AI systems instantly engage, qualify, and score every lead automatically.", icon: "Bot" },
  { step: 3, title: "Smart Routing", description: "Qualified leads are routed to your CRM with full context and priority scoring.", icon: "ArrowRight" },
  { step: 4, title: "Automated Booking", description: "AI books appointments directly into your calendar — no manual scheduling.", icon: "CalendarCheck" },
  { step: 5, title: "Revenue Growth", description: "Close more deals with AI-assisted sales and automated follow-up sequences.", icon: "DollarSign" },
];

export const ACHIEVEMENTS = [
  { value: "4000+", label: "Businesses Transformed" },
  { value: "$4.8M+", label: "Revenue Generated" },
  { value: "85K+", label: "Leads Qualified by AI" },
  { value: "94%", label: "Client Retention Rate" },
];

export interface ServiceContent {
  icp?: string;
  longDesc: string;
  problems: string[];
  solutions: string[];
  features: string[];
  deliverables?: { item: string; timeline: string }[];
  workflowSteps: { step: string; desc: string }[];
  industries: { name: string; icon: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "ai-calling-agent": {
    icp: "Best for service businesses with high call volume — healthcare practices, legal firms, home services, real estate brokerages, and auto dealerships — where a missed call means a lost client.",
    longDesc: "Our AI Calling Agent handles inbound and outbound calls with human-like conversation, qualifying leads and booking appointments 24/7. It integrates directly with your CRM and calendar to ensure every opportunity is captured and acted upon instantly, eliminating missed calls and slow response times that cost you revenue.",
    problems: [
      "Missing 40%+ of inbound calls during off-hours and peak periods",
      "Sales reps spending hours on cold calls with low connect rates",
      "Slow lead response times causing prospects to choose competitors",
      "Inconsistent call quality and qualification across your team"
    ],
    solutions: [
      "24/7 automated call handling with natural, human-like AI voice",
      "Intelligent outbound dialing that reaches prospects at optimal times",
      "Instant lead qualification and appointment booking on every call",
      "Consistent messaging and data capture across every interaction"
    ],
    features: [
      "Natural language AI voice with customizable tone and personality",
      "Real-time CRM integration and contact record updates",
      "Automated appointment scheduling with calendar sync",
      "Call recording, transcription, and sentiment analysis",
      "Multi-language support for diverse markets",
      "Smart call routing based on lead score and intent",
      "Voicemail detection and automated follow-up triggers",
      "Live call transfer to human agents when needed"
    ],
    deliverables: [
      { item: "AI call script and conversation flows built to your offer", timeline: "Days 1–3" },
      { item: "CRM integration and calendar sync configured", timeline: "Days 3–5" },
      { item: "Test calls approved and agent live on your number", timeline: "Days 5–7" },
      { item: "Performance dashboard showing call volume, bookings, and outcomes", timeline: "Day 7+" },
      { item: "30-day optimization report with booking rate benchmarks", timeline: "Day 30" },
    ],
    workflowSteps: [
      { step: "Discovery & Script Design", desc: "We analyze your sales process and build custom AI call scripts tailored to your offer and audience." },
      { step: "AI Voice Configuration", desc: "Configure the AI voice agent with your brand tone, objection handling, and qualification criteria." },
      { step: "Integration & Testing", desc: "Connect to your CRM, calendar, and phone systems with thorough testing across call scenarios." },
      { step: "Launch & Optimization", desc: "Go live with real calls, monitor performance, and continuously optimize scripts for higher conversion." }
    ],
    industries: [
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Legal Services", icon: "Scale" },
      { name: "Home Services", icon: "Hammer" },
      { name: "Automotive", icon: "Car" },
      { name: "Financial Services", icon: "Landmark" }
    ],
    faqs: [
      { q: "Does the AI calling agent sound robotic?", a: "No. Our AI uses advanced natural language processing to deliver human-like conversations with natural pauses, tone variation, and contextual responses that callers rarely distinguish from a live person." },
      { q: "Can the AI handle objections and complex questions?", a: "Yes. We program your AI agent with detailed objection handling scripts and FAQ responses specific to your business, and it can seamlessly transfer to a live agent for complex scenarios." },
      { q: "How many calls can the AI agent handle simultaneously?", a: "There is no practical limit. The AI agent can handle hundreds of concurrent calls, ensuring you never miss an opportunity regardless of call volume." },
      { q: "Does it integrate with my existing phone system?", a: "Yes. We integrate with all major VoIP providers, phone systems, and can provision dedicated numbers. Setup typically takes 3-5 business days." },
      { q: "What languages does the AI calling agent support?", a: "Our AI agent supports English, Spanish, French, and several other languages with native-level fluency, allowing you to serve diverse markets." }
    ],
    relatedServices: ["ai-receptionist", "ai-appointment-booking", "ai-lead-qualification", "crm-automation"]
  },
  "ai-receptionist": {
    icp: "Ideal for appointment-driven businesses — law firms, medical clinics, dental practices, and home services — where every unanswered call represents a lost consultation or service booking.",
    longDesc: "Our AI Receptionist ensures every inbound call is answered instantly with a professional, friendly voice that qualifies callers, answers FAQs, and routes inquiries to the right team member. Never lose a potential client to voicemail again, even outside business hours or during peak call times.",
    problems: [
      "Potential clients hanging up when reaching voicemail or long hold times",
      "Front desk staff overwhelmed during peak hours, missing important calls",
      "After-hours calls going unanswered, losing urgent leads to competitors",
      "Inconsistent caller experience depending on who answers the phone"
    ],
    solutions: [
      "Instant call answering with zero hold time, 24 hours a day",
      "Intelligent call screening and routing to the right department or person",
      "Professional FAQ handling that resolves common inquiries without human involvement",
      "Consistent, branded caller experience on every single interaction"
    ],
    features: [
      "Instant call pickup with zero wait time",
      "Customizable greeting and brand voice",
      "Intelligent call routing and department transfer",
      "Automated FAQ and common inquiry handling",
      "Appointment scheduling and confirmation",
      "Real-time message transcription and delivery",
      "After-hours coverage with full functionality",
      "Caller identification and CRM lookup"
    ],
    deliverables: [
      { item: "AI receptionist script configured with your FAQs and routing rules", timeline: "Days 1–3" },
      { item: "Phone number provisioned or existing number ported", timeline: "Days 2–4" },
      { item: "Live call testing and tone approval", timeline: "Days 4–5" },
      { item: "24/7 go-live with full after-hours coverage", timeline: "Day 5–7" },
      { item: "Weekly call summary reports with missed-lead tracking", timeline: "Ongoing" },
    ],
    workflowSteps: [
      { step: "Business Analysis", desc: "Map your call flow, common inquiries, team structure, and routing rules for optimal setup." },
      { step: "Voice & Script Setup", desc: "Design your AI receptionist's greeting, FAQ responses, and routing logic to match your brand." },
      { step: "System Integration", desc: "Connect with your phone system, CRM, calendar, and messaging tools for seamless operation." },
      { step: "Go Live & Monitor", desc: "Activate the AI receptionist with real-time monitoring and weekly optimization of call handling." }
    ],
    industries: [
      { name: "Legal Services", icon: "Scale" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Restaurants", icon: "Utensils" },
      { name: "Home Services", icon: "Hammer" },
      { name: "Fitness & Wellness", icon: "Dumbbell" }
    ],
    faqs: [
      { q: "How quickly does the AI receptionist answer calls?", a: "Instantly. The AI receptionist picks up within the first ring, ensuring zero hold time and no missed calls, even during the busiest periods." },
      { q: "Can it transfer calls to specific team members?", a: "Yes. The AI receptionist can route calls based on department, inquiry type, caller history, or custom rules you define, including warm transfers with context." },
      { q: "Will callers know they're speaking to an AI?", a: "Our AI receptionist uses natural conversational language that most callers find indistinguishable from a human receptionist. You can choose to disclose or not based on your preference." },
      { q: "Can it handle appointment scheduling?", a: "Absolutely. The AI receptionist integrates with your calendar to book, reschedule, and confirm appointments in real-time during the call." },
      { q: "What happens if the AI can't handle a request?", a: "The system gracefully transfers to an available team member with full call context, or takes a detailed message with callback priority flagging." }
    ],
    relatedServices: ["ai-calling-agent", "ai-appointment-booking", "ai-follow-up", "workflow-automation"]
  },
  "ai-lead-qualification": {
    icp: "Built for sales teams handling 50+ inbound leads per month across real estate, financial services, e-commerce, and B2B — where separating serious buyers from browsers is the difference between a profitable pipeline and a burned-out team.",
    longDesc: "Our AI Lead Qualification Bot automatically scores, segments, and qualifies every lead the moment they enter your pipeline. Using behavioral data, demographic signals, and engagement patterns, it ensures your sales team only spends time on prospects most likely to convert, dramatically increasing close rates and revenue per rep.",
    problems: [
      "Sales reps wasting 60%+ of their time on unqualified prospects",
      "No consistent lead scoring framework causing missed high-value opportunities",
      "Manual lead review creating bottlenecks and delayed follow-up",
      "Inability to prioritize leads effectively across multiple channels"
    ],
    solutions: [
      "Automated lead scoring using AI-driven behavioral and demographic analysis",
      "Instant lead segmentation and priority routing to the right sales rep",
      "Real-time qualification across all channels including web, phone, email, and chat",
      "Dynamic scoring models that continuously improve based on conversion data"
    ],
    features: [
      "Multi-factor AI lead scoring algorithm",
      "Real-time qualification via chat, forms, and calls",
      "Behavioral tracking and engagement scoring",
      "Custom qualification criteria per service or product",
      "Automated lead routing based on score thresholds",
      "CRM enrichment with qualification data",
      "Lead nurture triggers for unqualified prospects",
      "Conversion analytics and scoring model optimization"
    ],
    deliverables: [
      { item: "Lead scoring model built around your ICP and pipeline stages", timeline: "Days 1–4" },
      { item: "All lead sources connected and scoring in real-time", timeline: "Days 4–7" },
      { item: "CRM enriched with qualification flags and segment tags", timeline: "Day 7" },
      { item: "Unqualified lead nurture sequences activated", timeline: "Day 7–10" },
      { item: "Bi-weekly scoring accuracy report with conversion tracking", timeline: "Ongoing" },
    ],
    workflowSteps: [
      { step: "Qualification Criteria Design", desc: "Define your ideal customer profile and scoring criteria based on your sales history and conversion data." },
      { step: "AI Model Configuration", desc: "Build and train the qualification model with your specific scoring weights and segmentation rules." },
      { step: "Channel Integration", desc: "Connect all lead sources — forms, chat, ads, referrals — to the unified qualification engine." },
      { step: "Optimize & Scale", desc: "Monitor qualification accuracy, refine scoring models, and scale across new channels and markets." }
    ],
    industries: [
      { name: "Real Estate", icon: "Building2" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Legal Services", icon: "Scale" },
      { name: "Automotive", icon: "Car" },
      { name: "Professional Services", icon: "Briefcase" }
    ],
    faqs: [
      { q: "How does AI lead qualification differ from traditional lead scoring?", a: "AI qualification uses machine learning to analyze dozens of signals simultaneously — behavior, engagement, demographics, and timing — and continuously improves its accuracy based on actual conversion outcomes, unlike static rule-based scoring." },
      { q: "How quickly are leads scored after they enter the system?", a: "Leads are scored in real-time, typically within seconds of entering your pipeline, ensuring your sales team can act immediately on high-priority prospects." },
      { q: "Can I customize the qualification criteria?", a: "Yes. We build scoring models tailored to your specific business, products, and sales process. Criteria can be adjusted anytime as your business evolves." },
      { q: "What happens to leads that don't qualify?", a: "Unqualified leads are automatically placed into nurture sequences designed to warm them up over time, so no potential revenue is lost." },
      { q: "Does it work with leads from all sources?", a: "Yes. The system qualifies leads from web forms, paid ads, social media, referrals, phone calls, and any other source connected to your pipeline." }
    ],
    relatedServices: ["ai-calling-agent", "ai-follow-up", "crm-automation", "ai-chatbot"]
  },
  "ai-appointment-booking": {
    icp: "Perfect for service professionals who sell via discovery calls, demos, or consultations — dentists, HVAC companies, coaches, agencies, and SaaS teams — where booked calendar slots equal revenue.",
    longDesc: "Our AI Appointment Booking System eliminates scheduling friction by letting prospects book qualified meetings directly into your calendar through AI-driven conversations. Whether via phone, chat, or SMS, the system handles availability, confirmations, reminders, and rescheduling automatically, filling your calendar with ready-to-buy prospects.",
    problems: [
      "Manual scheduling creating delays that cause prospects to lose interest",
      "High no-show rates from lack of automated reminders and confirmations",
      "Calendar conflicts and double-bookings frustrating your sales team",
      "Prospects dropping off during multi-step booking processes"
    ],
    solutions: [
      "AI-driven conversational booking via phone, chat, SMS, and web",
      "Automated confirmation sequences and smart reminder cadences that cut no-shows",
      "Real-time calendar sync preventing conflicts across your entire team",
      "One-step booking flow that captures and schedules in a single interaction"
    ],
    features: [
      "Conversational AI booking via chat, phone, and SMS",
      "Real-time calendar availability and sync",
      "Automated confirmation emails and SMS reminders",
      "Intelligent rescheduling and cancellation handling",
      "Round-robin and priority-based rep assignment",
      "Pre-meeting qualification questionnaires",
      "Time zone detection and automatic adjustment",
      "Integration with Google Calendar, Outlook, and Calendly"
    ],
    deliverables: [
      { item: "Booking flow configured across chat, phone, or SMS (your choice)", timeline: "Days 1–3" },
      { item: "Calendar integration and round-robin assignment live", timeline: "Days 3–4" },
      { item: "Automated confirmation and reminder sequences enabled", timeline: "Days 4–5" },
      { item: "Go-live with full no-show protection", timeline: "Day 5" },
      { item: "Monthly show-rate and booking volume report", timeline: "Monthly" },
    ],
    workflowSteps: [
      { step: "Calendar & Team Setup", desc: "Configure team calendars, availability windows, meeting types, and assignment rules." },
      { step: "Booking Flow Design", desc: "Design the conversational booking experience including qualification questions and confirmation messaging." },
      { step: "Integration & Automation", desc: "Connect calendars, CRM, and communication channels with automated reminder sequences." },
      { step: "Launch & Reduce No-Shows", desc: "Go live with AI booking and optimize reminder timing and frequency to maximize show rates." }
    ],
    industries: [
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Automotive", icon: "Car" },
      { name: "Education", icon: "GraduationCap" }
    ],
    faqs: [
      { q: "How does AI booking reduce no-show rates?", a: "The system sends strategically timed confirmation and reminder sequences via email and SMS, and allows easy rescheduling. Our clients typically see no-show rates drop by 40-60%." },
      { q: "Can prospects book outside of business hours?", a: "Yes. The AI booking system operates 24/7, allowing prospects to schedule meetings anytime through chat, SMS, or your website, with appointments placed into your available slots." },
      { q: "Does it work with my existing calendar?", a: "Yes. We integrate with Google Calendar, Outlook, Calendly, and most scheduling tools to ensure real-time availability sync and zero double-bookings." },
      { q: "Can it assign appointments to specific team members?", a: "Absolutely. The system supports round-robin distribution, priority-based assignment, territory matching, and custom routing rules." },
      { q: "What if a prospect needs to reschedule?", a: "The AI handles rescheduling and cancellations automatically via a simple link or conversational interaction, updating your calendar and notifying the assigned rep." }
    ],
    relatedServices: ["ai-calling-agent", "ai-receptionist", "ai-follow-up", "crm-automation"]
  },
  "ai-follow-up": {
    icp: "Designed for any business generating inbound leads that require multiple touchpoints to close — especially B2B services, consultancies, home improvement, and healthcare practices where the average prospect needs 5–8 follow-ups before committing.",
    longDesc: "Our AI Follow-Up Automation ensures no lead ever slips through the cracks by deploying intelligent, multi-channel follow-up sequences that adapt to prospect behavior. From email to SMS to phone, the system nurtures every lead with the right message at the right time, turning cold prospects into booked appointments and closed deals.",
    problems: [
      "80% of deals require 5+ follow-ups but reps stop after 1-2 attempts",
      "Leads going cold due to inconsistent and delayed manual follow-up",
      "No visibility into which prospects need attention and when",
      "One-size-fits-all follow-up sequences that ignore prospect behavior"
    ],
    solutions: [
      "Automated multi-touch sequences across email, SMS, and phone channels",
      "Behavior-triggered follow-ups that adapt to prospect engagement signals",
      "Intelligent timing optimization to reach prospects at peak response windows",
      "Full pipeline visibility with automated alerts for hot leads and stalled deals"
    ],
    features: [
      "Multi-channel follow-up across email, SMS, and phone",
      "Behavior-triggered sequence branching",
      "AI-optimized send timing for maximum response rates",
      "Personalized messaging using lead data and engagement history",
      "Automatic escalation for hot leads",
      "Drip campaign management with A/B testing",
      "Engagement tracking and response monitoring",
      "CRM status updates and pipeline progression triggers"
    ],
    deliverables: [
      { item: "Multi-channel follow-up sequences built from your sales playbook", timeline: "Days 1–5" },
      { item: "Behavior triggers and sequence branches live across email, SMS, phone", timeline: "Days 5–7" },
      { item: "CRM pipeline stage automation and hot-lead alerts active", timeline: "Day 7–10" },
      { item: "A/B test setup on subject lines and send times", timeline: "Day 10" },
      { item: "Monthly response rate and conversion report", timeline: "Monthly" },
    ],
    workflowSteps: [
      { step: "Sequence Strategy", desc: "Map your follow-up sequences based on lead source, qualification level, and sales cycle stage." },
      { step: "Content & Messaging", desc: "Create personalized follow-up templates for each sequence stage and channel." },
      { step: "Automation Setup", desc: "Build triggers, timing rules, and branching logic based on prospect behavior." },
      { step: "Monitor & Optimize", desc: "Track response rates, optimize messaging and timing, and scale winning sequences." }
    ],
    industries: [
      { name: "Real Estate", icon: "Building2" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Legal Services", icon: "Scale" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Home Services", icon: "Hammer" }
    ],
    faqs: [
      { q: "How many follow-up touches does the system automate?", a: "We typically build sequences of 8-15 touches over 30-90 days across multiple channels. The exact cadence is customized based on your sales cycle and industry." },
      { q: "Can the AI adapt follow-ups based on how a prospect responds?", a: "Yes. The system monitors opens, clicks, replies, and other engagement signals to dynamically adjust messaging, timing, and channel for each individual prospect." },
      { q: "Will prospects feel spammed by automated follow-ups?", a: "No. Our sequences are designed with natural spacing and personalized content that feels like genuine outreach. We also implement smart frequency caps and opt-out handling." },
      { q: "Does it work with leads from different sources?", a: "Absolutely. Whether leads come from ads, organic search, referrals, or events, the system tailors follow-up sequences based on source, intent level, and qualification data." },
      { q: "How quickly do I see results from follow-up automation?", a: "Most clients see a measurable increase in response rates and booked meetings within the first 2-3 weeks of activation." }
    ],
    relatedServices: ["ai-email-automation", "ai-sms-automation", "ai-lead-qualification", "crm-automation"]
  },
  "ai-sales-assistant": {
    longDesc: "Our AI Sales Assistant empowers your sales team with real-time intelligence, deal coaching, and automated task management. It analyzes conversations, suggests next steps, prepares meeting briefs, and handles administrative tasks so your reps spend more time selling and less time on busywork, closing more deals faster.",
    problems: [
      "Sales reps spending only 35% of their time actually selling",
      "Inconsistent sales methodology and deal execution across the team",
      "Lack of real-time coaching causing reps to miss key buying signals",
      "Manual CRM updates and admin tasks draining productivity"
    ],
    solutions: [
      "AI-powered task automation that eliminates repetitive sales admin work",
      "Real-time deal coaching with suggested next steps and talk tracks",
      "Automated meeting prep with prospect research and conversation summaries",
      "Intelligent pipeline management with risk alerts and deal progression insights"
    ],
    features: [
      "Real-time conversation intelligence and coaching",
      "Automated CRM data entry and activity logging",
      "AI-generated meeting briefs and prospect research",
      "Deal risk scoring and pipeline health alerts",
      "Suggested next steps and talk track recommendations",
      "Email and proposal drafting assistance",
      "Win/loss analysis and performance insights",
      "Competitive intelligence and objection handling guides"
    ],
    workflowSteps: [
      { step: "Sales Process Mapping", desc: "Document your sales stages, methodologies, and best practices to train the AI assistant." },
      { step: "AI Assistant Configuration", desc: "Configure coaching triggers, automation rules, and integration with your sales tools." },
      { step: "Team Onboarding", desc: "Train your sales team on leveraging the AI assistant for maximum productivity gains." },
      { step: "Performance Optimization", desc: "Analyze adoption metrics and continuously improve AI recommendations based on win data." }
    ],
    industries: [
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Automotive", icon: "Car" },
      { name: "Education", icon: "GraduationCap" }
    ],
    faqs: [
      { q: "How does the AI Sales Assistant help reps close more deals?", a: "It provides real-time coaching during calls, automates administrative tasks, prepares meeting briefs, and surfaces deal risks early — allowing reps to focus purely on selling and relationship building." },
      { q: "Does it replace my sales team?", a: "Not at all. The AI Sales Assistant augments your team's capabilities by handling busywork and providing intelligence, making each rep significantly more productive and effective." },
      { q: "How does it integrate with our existing CRM?", a: "We integrate directly with Salesforce, HubSpot, Pipedrive, and other major CRMs to automatically log activities, update records, and surface insights within your existing workflow." },
      { q: "Can it help with email and proposal writing?", a: "Yes. The AI assistant drafts personalized emails and proposals based on deal context, prospect data, and your winning templates, significantly reducing prep time." },
      { q: "How long does it take for the AI to learn our sales process?", a: "The initial setup takes 1-2 weeks. The AI begins providing valuable insights immediately and becomes increasingly accurate as it learns from your team's interactions and outcomes." }
    ],
    relatedServices: ["crm-automation", "ai-lead-qualification", "ai-follow-up", "ai-calling-agent"]
  },
  "ai-chatbot": {
    icp: "Best for businesses with high website traffic and repetitive inquiry patterns — e-commerce stores, SaaS companies, dental practices, law firms, and any brand with a 24/7 audience — where speed of first response is the primary conversion driver.",
    longDesc: "Our AI Chatbot engages every website visitor, WhatsApp contact, and Messenger user with intelligent, personalized conversations that capture leads, answer questions, and book meetings 24/7. It learns your business inside and out to provide accurate, helpful responses that build trust and drive conversions from every digital touchpoint.",
    problems: [
      "Website visitors leaving without engaging or providing contact information",
      "Support team overwhelmed with repetitive questions that could be automated",
      "No engagement channel for after-hours visitors who want instant answers",
      "Slow response times on messaging platforms causing prospect drop-off"
    ],
    solutions: [
      "24/7 intelligent chat engagement across website, WhatsApp, and Messenger",
      "Automated FAQ handling that resolves 80%+ of common inquiries instantly",
      "Conversational lead capture that feels natural and drives form completions",
      "Instant response on all messaging platforms with sub-second reply times"
    ],
    features: [
      "Multi-platform deployment (website, WhatsApp, Messenger)",
      "Natural language understanding with contextual responses",
      "Lead capture with conversational form replacement",
      "Appointment booking directly within chat",
      "Product and service recommendation engine",
      "Live agent handoff with full conversation context",
      "Custom knowledge base training",
      "Analytics dashboard with conversation insights"
    ],
    workflowSteps: [
      { step: "Knowledge Base Building", desc: "Train the chatbot on your products, services, FAQs, pricing, and brand voice." },
      { step: "Conversation Flow Design", desc: "Design chat flows for lead capture, FAQ handling, booking, and support scenarios." },
      { step: "Platform Deployment", desc: "Deploy across your website, WhatsApp, and Messenger with branded design and UX." },
      { step: "Learn & Improve", desc: "Monitor conversations, identify gaps, and continuously improve response accuracy and conversion." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Restaurants", icon: "Utensils" },
      { name: "Professional Services", icon: "Briefcase" }
    ],
    faqs: [
      { q: "How accurate is the AI chatbot at answering questions?", a: "After training on your business data, the chatbot typically achieves 90%+ accuracy on common inquiries. It continuously improves through conversation analysis and knowledge base updates." },
      { q: "Can the chatbot book appointments?", a: "Yes. The chatbot integrates with your calendar to offer available slots, collect necessary information, and confirm bookings — all within the chat conversation." },
      { q: "What platforms does the chatbot support?", a: "We deploy on your website, WhatsApp Business, Facebook Messenger, and Instagram DMs. All conversations sync to your CRM for unified tracking." },
      { q: "Can it hand off to a live agent?", a: "Absolutely. When the chatbot detects a complex inquiry or high-value prospect, it seamlessly transfers to a live agent with the full conversation history and context." },
      { q: "How long does it take to set up?", a: "A fully trained and deployed chatbot typically takes 5-7 business days. This includes knowledge base training, flow design, platform integration, and testing." }
    ],
    relatedServices: ["ai-lead-qualification", "ai-appointment-booking", "ai-follow-up", "website-development"]
  },
  "ai-email-automation": {
    longDesc: "Our AI Email Automation creates intelligent, behavior-driven email sequences that adapt in real-time to how each prospect engages. From welcome sequences to re-engagement campaigns, every email is personalized, timed for maximum impact, and optimized to drive opens, clicks, and conversions at scale.",
    problems: [
      "Low email open rates from generic, one-size-fits-all messaging",
      "Manual email campaigns that take hours to create and schedule",
      "No personalization beyond basic name merge fields",
      "Inability to scale email outreach while maintaining quality"
    ],
    solutions: [
      "AI-driven personalization that tailors subject lines, content, and offers per recipient",
      "Automated sequence building with behavior-triggered branching",
      "Send-time optimization that delivers emails when each prospect is most likely to engage",
      "Scalable email infrastructure handling thousands of personalized emails daily"
    ],
    features: [
      "AI-generated subject lines and email copy",
      "Behavior-triggered email sequences",
      "Send-time optimization per recipient",
      "Dynamic content personalization",
      "A/B testing with automatic winner selection",
      "Deliverability monitoring and optimization",
      "Engagement scoring and list segmentation",
      "Revenue attribution and conversion tracking"
    ],
    workflowSteps: [
      { step: "Email Strategy & Audit", desc: "Audit existing email performance and design a comprehensive automation strategy aligned with your revenue goals." },
      { step: "Sequence & Content Creation", desc: "Build email sequences with AI-optimized copy, personalization tokens, and branching logic." },
      { step: "Technical Setup", desc: "Configure email infrastructure, deliverability settings, tracking, and CRM integration." },
      { step: "Launch & Optimize", desc: "Deploy sequences, monitor performance metrics, and continuously A/B test for higher conversions." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Real Estate", icon: "Building2" }
    ],
    faqs: [
      { q: "How does AI improve email performance over traditional automation?", a: "AI analyzes each recipient's behavior to personalize content, optimize send times, and select the best subject lines — resulting in 2-3x higher open and click rates compared to static email campaigns." },
      { q: "Will my emails end up in spam?", a: "We implement comprehensive deliverability best practices including domain authentication, list hygiene, warm-up protocols, and content optimization to ensure inbox placement." },
      { q: "Can it handle different email sequences for different audiences?", a: "Yes. The system supports unlimited segments and sequences, each with unique content, timing, and branching logic tailored to specific audience profiles." },
      { q: "How many emails can the system send per day?", a: "Our infrastructure handles thousands of personalized emails daily with proper warm-up and deliverability management. Volume scales with your list size and sending reputation." },
      { q: "Does it integrate with my email marketing platform?", a: "We integrate with all major platforms including Mailchimp, ActiveCampaign, Klaviyo, HubSpot, and can work with custom SMTP setups." }
    ],
    relatedServices: ["ai-follow-up", "ai-sms-automation", "crm-automation", "workflow-automation"]
  },
  "ai-sms-automation": {
    longDesc: "Our AI SMS Automation delivers high-impact text message campaigns that achieve 98% open rates and drive instant engagement. From appointment reminders to promotional offers and lead nurture sequences, AI-powered SMS reaches your audience where they're most responsive, generating faster replies and higher conversion rates than any other channel.",
    problems: [
      "Email campaigns generating declining open rates below 20%",
      "No direct mobile engagement channel for time-sensitive communications",
      "Manual texting that doesn't scale beyond a handful of contacts",
      "Missed revenue from lack of instant promotional and reminder channels"
    ],
    solutions: [
      "Automated SMS campaigns with 98% open rates and rapid response times",
      "AI-personalized text messages that feel like one-on-one conversations",
      "Scalable SMS infrastructure handling thousands of messages while staying compliant",
      "Behavior-triggered texts that reach prospects at the perfect moment"
    ],
    features: [
      "AI-crafted personalized text messages",
      "Two-way conversational SMS capabilities",
      "Automated appointment reminders and confirmations",
      "Promotional campaign scheduling and automation",
      "Compliance management (TCPA, opt-in/opt-out)",
      "SMS drip sequences with smart timing",
      "MMS support for images and rich media",
      "Response tracking and conversion attribution"
    ],
    workflowSteps: [
      { step: "Compliance & Setup", desc: "Register your business for SMS, set up opt-in flows, and ensure full TCPA compliance." },
      { step: "Campaign Strategy", desc: "Design SMS campaigns and sequences for reminders, promotions, nurture, and re-engagement." },
      { step: "AI Messaging & Automation", desc: "Build automated triggers, personalized templates, and two-way conversation flows." },
      { step: "Scale & Optimize", desc: "Monitor delivery rates, optimize message timing, and expand SMS usage across your customer journey." }
    ],
    industries: [
      { name: "Restaurants", icon: "Utensils" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Home Services", icon: "Hammer" },
      { name: "Automotive", icon: "Car" }
    ],
    faqs: [
      { q: "What kind of open rates does SMS automation achieve?", a: "SMS consistently achieves 95-98% open rates with most messages read within 3 minutes of delivery, making it the highest-engagement channel available." },
      { q: "Is SMS automation compliant with regulations?", a: "Yes. We implement full TCPA compliance including proper opt-in collection, opt-out handling, message frequency disclosures, and consent documentation." },
      { q: "Can customers reply to automated texts?", a: "Absolutely. Our two-way SMS system allows natural text conversations. AI can handle responses automatically or route complex replies to your team." },
      { q: "What types of SMS campaigns work best?", a: "Appointment reminders, flash sales, abandoned cart recovery, review requests, and lead follow-up sequences consistently deliver the highest ROI across industries." },
      { q: "How does pricing work for SMS campaigns?", a: "SMS pricing is based on message volume and included in your service package. We optimize message frequency and segmentation to maximize ROI per message sent." }
    ],
    relatedServices: ["ai-email-automation", "ai-follow-up", "ai-appointment-booking", "workflow-automation"]
  },
  "crm-automation": {
    icp: "Ideal for growing companies with an existing CRM (HubSpot, Salesforce, GoHighLevel, Pipedrive) generating 20+ leads per month — where the bottleneck is pipeline visibility, data hygiene, and manual task overhead rather than lead volume.",
    longDesc: "Our CRM Automation transforms your customer relationship management from a manual data entry tool into an intelligent revenue engine. We automate lead capture, deal progression, task assignment, follow-up triggers, and reporting so your team spends zero time on admin and 100% of their effort on closing deals and growing accounts.",
    problems: [
      "Sales reps entering data manually, leading to incomplete and inaccurate CRM records",
      "Deals stalling in the pipeline with no automated alerts or next-step triggers",
      "Management lacking real-time visibility into pipeline health and team performance",
      "Disconnected tools creating data silos between marketing, sales, and support"
    ],
    solutions: [
      "Automated data capture and CRM updates from all customer touchpoints",
      "Intelligent deal progression triggers that keep pipeline moving forward",
      "Real-time dashboards and automated reports for pipeline visibility",
      "Unified data flow connecting marketing, sales, and support in one platform"
    ],
    features: [
      "Automated lead capture and record creation",
      "Deal stage progression automation",
      "Task and follow-up assignment triggers",
      "Pipeline health scoring and alerts",
      "Automated activity logging from email, calls, and meetings",
      "Custom workflow builders for unique sales processes",
      "Revenue forecasting and pipeline reports",
      "Multi-platform data sync and deduplication"
    ],
    deliverables: [
      { item: "CRM audit report with automation opportunity map", timeline: "Days 1–3" },
      { item: "Core workflows built (lead routing, deal progression, task triggers)", timeline: "Days 3–10" },
      { item: "All tools integrated and data syncing cleanly", timeline: "Days 10–14" },
      { item: "Team training session and workflow documentation", timeline: "Day 14" },
      { item: "Monthly pipeline health and time-savings report", timeline: "Monthly" },
    ],
    workflowSteps: [
      { step: "CRM Audit & Strategy", desc: "Evaluate your current CRM setup, data quality, and sales process to identify automation opportunities." },
      { step: "Workflow Design", desc: "Map and build automated workflows for lead routing, deal progression, task assignment, and reporting." },
      { step: "Data Migration & Integration", desc: "Clean existing data, configure integrations, and ensure seamless data flow across all connected tools." },
      { step: "Training & Activation", desc: "Train your team on the automated workflows and monitor adoption to ensure maximum productivity impact." }
    ],
    industries: [
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Automotive", icon: "Car" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "E-Commerce", icon: "ShoppingCart" }
    ],
    faqs: [
      { q: "Which CRM platforms do you automate?", a: "We work with all major CRMs including HubSpot, Salesforce, Pipedrive, GoHighLevel, Zoho, and others. Our automation approach adapts to your specific platform." },
      { q: "How much time does CRM automation save?", a: "Our clients typically save 10-15 hours per rep per week on manual data entry, task management, and reporting — time that goes directly back into selling." },
      { q: "Will automation work with our custom sales process?", a: "Absolutely. We map automation to your specific stages, fields, and rules. No matter how unique your process, we build workflows that match exactly how your team sells." },
      { q: "Can it automate lead assignment and routing?", a: "Yes. Leads are automatically assigned based on territory, round-robin, lead score, or custom criteria with instant notification to the assigned rep." },
      { q: "Do you provide ongoing CRM optimization?", a: "Yes. We continuously monitor automation performance, refine workflows, and add new automations as your sales process evolves and new opportunities emerge." }
    ],
    relatedServices: ["workflow-automation", "ai-lead-qualification", "ai-follow-up", "crm-setup"]
  },
  "workflow-automation": {
    longDesc: "Our Workflow Automation connects and automates every tool in your sales and marketing stack, eliminating manual handoffs and data entry across platforms. From lead capture to deal closure, we build intelligent workflows that trigger the right actions at the right time, ensuring nothing falls through the cracks while saving your team hours of repetitive work daily.",
    problems: [
      "Manual data transfer between tools causing errors and wasted time",
      "Disconnected systems creating information silos across departments",
      "Repetitive tasks consuming hours that should be spent on revenue activities",
      "Complex multi-step processes prone to human error and missed steps"
    ],
    solutions: [
      "Automated cross-platform data sync eliminating manual data transfers",
      "End-to-end workflow orchestration connecting every tool in your stack",
      "Trigger-based task automation that executes complex processes flawlessly",
      "Centralized workflow management with monitoring and error handling"
    ],
    features: [
      "Cross-platform automation (Zapier, Make, native APIs)",
      "Trigger-based workflow orchestration",
      "Multi-step process automation with conditional logic",
      "Error handling and failure notification systems",
      "Data transformation and mapping between platforms",
      "Scheduled and event-driven automation triggers",
      "Workflow monitoring dashboard",
      "Custom API integrations for proprietary tools"
    ],
    workflowSteps: [
      { step: "Process Audit", desc: "Document all manual processes, tool connections, and data flows to identify automation opportunities." },
      { step: "Workflow Architecture", desc: "Design automated workflows with triggers, actions, conditions, and error handling for each process." },
      { step: "Build & Connect", desc: "Build automations using the optimal platform (Zapier, Make, or native APIs) and connect all tools." },
      { step: "Monitor & Expand", desc: "Deploy monitoring, track automation performance, and expand to new workflows as needs evolve." }
    ],
    industries: [
      { name: "Professional Services", icon: "Briefcase" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Financial Services", icon: "Landmark" }
    ],
    faqs: [
      { q: "What tools can you connect with workflow automation?", a: "We connect virtually any tool with an API or integration capability — CRMs, email platforms, ad networks, payment processors, spreadsheets, project management tools, and more." },
      { q: "How complex can the automations get?", a: "There is no practical limit. We build multi-step workflows with conditional branching, data transformations, error handling, and cross-platform orchestration handling hundreds of steps." },
      { q: "What platforms do you use to build automations?", a: "We use the best tool for each job — Zapier, Make (Integromat), n8n, or direct API integrations depending on complexity, volume, and cost requirements." },
      { q: "How do you handle automation failures?", a: "Every workflow includes error detection, retry logic, and failure notifications. We monitor automations proactively and resolve issues before they impact your operations." },
      { q: "Can automations be modified after launch?", a: "Yes. Workflows are designed to be modular and adaptable. We can add new steps, modify logic, or connect additional tools anytime as your business needs change." }
    ],
    relatedServices: ["crm-automation", "ai-email-automation", "ai-sms-automation", "marketing-automation-setup"]
  },
  "google-ads": {
    icp: "Best for local and regional service businesses spending at least $2,000/month on ads — particularly home services, healthcare, legal, and insurance — where Google's high-intent search traffic converts at 3–5x the rate of social platforms.",
    longDesc: "Our Google Ads Revenue Engine builds and manages data-driven campaigns that put your business in front of high-intent buyers at the exact moment they're searching for your services. We combine AI-powered bidding, precision targeting, and continuous optimization to maximize every dollar of ad spend and deliver measurable ROI.",
    problems: [
      "Wasting ad budget on irrelevant clicks and unqualified traffic",
      "No clear attribution between ad spend and actual revenue generated",
      "Competitors outbidding you on your most valuable keywords",
      "Campaigns plateauing with declining performance and rising costs"
    ],
    solutions: [
      "AI-optimized bidding strategies that maximize conversions per dollar spent",
      "Precision keyword targeting focused on high-intent, revenue-driving searches",
      "Full-funnel conversion tracking linking every click to revenue outcomes",
      "Continuous campaign optimization with weekly performance improvements"
    ],
    features: [
      "AI-powered Smart Bidding and budget optimization",
      "High-intent keyword research and negative keyword management",
      "Ad copy A/B testing with AI-generated variations",
      "Landing page alignment and quality score optimization",
      "Conversion tracking and revenue attribution",
      "Competitor analysis and market positioning",
      "Remarketing and audience segmentation",
      "Monthly ROI reporting with actionable insights"
    ],
    deliverables: [
      { item: "Keyword strategy and campaign architecture document", timeline: "Days 1–5" },
      { item: "Ad copy variants and landing page recommendations", timeline: "Days 5–7" },
      { item: "Campaigns live with conversion tracking verified", timeline: "Day 7–10" },
      { item: "30-day performance benchmark report (ROAS, CPL, CTR)", timeline: "Day 30" },
      { item: "Monthly optimization report with scaling recommendations", timeline: "Monthly" },
    ],
    workflowSteps: [
      { step: "Market & Keyword Research", desc: "Deep-dive into your market, competitors, and high-value keyword opportunities with search volume and cost analysis." },
      { step: "Campaign Architecture", desc: "Build campaign structure with ad groups, targeting, bidding strategy, and conversion tracking." },
      { step: "Creative & Landing Pages", desc: "Develop high-converting ad copy and ensure landing pages align for maximum quality scores and conversions." },
      { step: "Optimize & Scale", desc: "Continuously optimize bids, keywords, and creative based on performance data to scale profitable campaigns." }
    ],
    industries: [
      { name: "Legal Services", icon: "Scale" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Home Services", icon: "Hammer" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Automotive", icon: "Car" },
      { name: "E-Commerce", icon: "ShoppingCart" }
    ],
    faqs: [
      { q: "What's a realistic ROAS to expect from Google Ads?", a: "Our clients typically achieve 3-6x ROAS depending on industry and offer. Some high-ticket service businesses see 10x+ returns. We establish benchmarks in the first 30 days and optimize from there." },
      { q: "How much should I budget for Google Ads?", a: "We recommend a minimum of $2,000-3,000/month in ad spend for meaningful results. Your optimal budget depends on your market, competition, and revenue goals." },
      { q: "How quickly will I see results?", a: "Initial results begin within the first 1-2 weeks of launch. Campaigns typically reach optimal performance within 60-90 days as the AI bidding algorithms learn and optimize." },
      { q: "Do you manage both Search and Display campaigns?", a: "Yes. We manage Search, Display, Shopping, YouTube, and Performance Max campaigns based on what's most effective for your specific business and goals." },
      { q: "How do you prevent wasted ad spend?", a: "Through aggressive negative keyword management, audience exclusions, bid adjustments, placement monitoring, and conversion-focused optimization that eliminates low-quality clicks." }
    ],
    relatedServices: ["meta-ads", "landing-page-optimization", "conversion-rate-optimization", "conversion-funnels"]
  },
  "meta-ads": {
    icp: "Ideal for B2C brands, e-commerce stores, local services, and coaching businesses where visual storytelling and audience targeting — not keyword intent — are the primary levers for customer acquisition at scale.",
    longDesc: "Our Meta Ads Growth Engine leverages Facebook and Instagram's powerful targeting to reach your ideal customers with scroll-stopping creative and precision audience building. We deploy AI-driven campaigns across the entire funnel — from awareness to conversion — generating qualified leads at scale while maintaining profitable cost-per-acquisition.",
    problems: [
      "Ad fatigue causing declining performance on Facebook and Instagram",
      "Inability to scale campaigns without costs spiraling out of control",
      "Poor audience targeting resulting in low-quality leads that don't convert",
      "No systematic creative testing process to identify winning ads"
    ],
    solutions: [
      "AI-powered audience building and lookalike expansion for precise targeting",
      "Systematic creative testing framework that identifies winners quickly",
      "Full-funnel campaign architecture from awareness to retargeting to conversion",
      "Cost-per-acquisition optimization that maintains profitability at scale"
    ],
    features: [
      "Custom and lookalike audience building",
      "Creative testing framework with rapid iteration",
      "Full-funnel campaign architecture",
      "Dynamic creative optimization",
      "Retargeting and remarketing sequences",
      "Conversion API and pixel optimization",
      "Budget allocation across campaign objectives",
      "Detailed performance reporting and insights"
    ],
    deliverables: [
      { item: "Audience research report and creative strategy brief", timeline: "Days 1–4" },
      { item: "3–5 initial ad concepts produced (static, video, or carousel)", timeline: "Days 4–7" },
      { item: "Full-funnel campaigns live with pixel and Conversion API verified", timeline: "Day 7–10" },
      { item: "Creative performance report with winning ad identification", timeline: "Day 21" },
      { item: "Monthly ROAS, CPA, and scale-readiness report", timeline: "Monthly" },
    ],
    workflowSteps: [
      { step: "Audience & Creative Strategy", desc: "Research your ideal audience segments and develop a creative strategy with multiple ad concepts for testing." },
      { step: "Campaign Build", desc: "Build full-funnel campaign structure with audience targeting, placement optimization, and conversion tracking." },
      { step: "Creative Production & Testing", desc: "Launch multiple ad variations, test systematically, and identify top-performing creative and audience combinations." },
      { step: "Scale Profitably", desc: "Scale winning campaigns with budget increases, audience expansion, and new creative while maintaining target CPA." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "Restaurants", icon: "Utensils" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Healthcare", icon: "Heart" }
    ],
    faqs: [
      { q: "How does Meta Ads targeting work for my business?", a: "We build custom audiences from your customer data, website visitors, and engagement, then create lookalike audiences to find similar high-value prospects across Facebook and Instagram." },
      { q: "What types of ad creative do you produce?", a: "We create and test static images, carousels, video ads, and story-format content. Our creative testing framework rapidly identifies the best-performing formats for your audience." },
      { q: "How much should I spend on Meta Ads?", a: "We recommend starting with $1,500-3,000/month in ad spend. This provides enough data for AI optimization while generating meaningful lead volume." },
      { q: "How do you handle iOS tracking changes?", a: "We implement Meta's Conversions API alongside the pixel, use UTM tracking, and build server-side event tracking to maintain accurate attribution despite iOS privacy changes." },
      { q: "Can you run ads on both Facebook and Instagram?", a: "Yes. We manage campaigns across both platforms with placement optimization that automatically allocates budget to the best-performing placements." }
    ],
    relatedServices: ["google-ads", "conversion-funnels", "landing-page-optimization", "social-media-marketing"]
  },
  "seo-authority": {
    icp: "Built for established businesses (12+ months old) with existing websites who want to own their category in Google search — professional services, healthcare groups, SaaS companies, and agencies where organic traffic compounds into durable competitive advantage.",
    longDesc: "Our SEO Authority Growth System builds your organic search dominance through technical optimization, authority-building content, and strategic link acquisition. We position your business to rank for high-value keywords that drive consistent, qualified traffic without ongoing ad spend, creating a compounding asset that generates leads and revenue month after month.",
    problems: [
      "Invisible on Google for your most valuable service and product keywords",
      "Over-reliance on paid advertising with no organic traffic foundation",
      "Competitors ranking above you and capturing your potential customers",
      "Previous SEO efforts that produced no measurable business results"
    ],
    solutions: [
      "Comprehensive technical SEO optimization for crawlability and performance",
      "Strategic content creation targeting high-intent, revenue-driving keywords",
      "Authority-building link acquisition from relevant, high-quality sources",
      "Consistent ranking improvements that compound organic traffic over time"
    ],
    features: [
      "Technical SEO audit and optimization",
      "Keyword research and content strategy",
      "On-page optimization for target keywords",
      "Authority link building campaigns",
      "Content creation and optimization",
      "Schema markup and structured data",
      "Core Web Vitals optimization",
      "Monthly ranking and traffic reporting"
    ],
    deliverables: [
      { item: "Full technical SEO audit with prioritized fix list", timeline: "Days 1–7" },
      { item: "Keyword strategy and content map (primary + supporting terms)", timeline: "Days 7–14" },
      { item: "Technical fixes implemented (Core Web Vitals, schema, crawl)", timeline: "Days 14–21" },
      { item: "First 2 authority content pieces published and indexed", timeline: "Month 1" },
      { item: "Monthly rank tracking report (keyword positions + traffic growth)", timeline: "Monthly" },
    ],
    workflowSteps: [
      { step: "SEO Audit & Strategy", desc: "Comprehensive audit of your site's technical health, content gaps, backlink profile, and competitive landscape." },
      { step: "Technical Optimization", desc: "Fix technical issues, improve site speed, implement structured data, and optimize crawlability." },
      { step: "Content & On-Page SEO", desc: "Create and optimize content targeting high-value keywords with on-page SEO best practices." },
      { step: "Authority Building", desc: "Execute link-building campaigns and ongoing optimization to grow domain authority and rankings." }
    ],
    industries: [
      { name: "Legal Services", icon: "Scale" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Home Services", icon: "Hammer" },
      { name: "Financial Services", icon: "Landmark" }
    ],
    faqs: [
      { q: "How long does it take to see SEO results?", a: "Most clients see measurable ranking improvements within 3-4 months, with significant traffic and lead increases by month 6. SEO is a compounding investment that grows stronger over time." },
      { q: "How is your SEO different from other agencies?", a: "We focus exclusively on revenue-driving keywords and measure success by leads and revenue generated, not vanity metrics like impressions or keyword counts." },
      { q: "Do you guarantee first-page rankings?", a: "We don't guarantee specific positions (no legitimate agency can), but our track record shows consistent first-page rankings for our clients' most valuable keywords within 6-12 months." },
      { q: "Do you create content as part of the SEO service?", a: "Yes. Content creation is a core component. We produce SEO-optimized blog posts, service pages, and landing pages designed to rank and convert." },
      { q: "Can SEO replace our paid advertising?", a: "SEO complements paid advertising by building a sustainable organic traffic foundation. Over time, organic traffic reduces your dependency on ad spend while both channels work together." }
    ],
    relatedServices: ["local-seo", "content-writing", "website-development", "google-ads"]
  },
  "local-seo": {
    longDesc: "Our Local SEO & Google Business service ensures your business dominates the local search results and Google Maps in your service areas. We optimize your Google Business Profile, build local citations, manage reviews, and implement geo-targeted strategies that put you at the top of local searches when nearby customers are ready to buy.",
    problems: [
      "Not appearing in Google Maps or local pack results for your services",
      "Competitors with more reviews and higher ratings stealing your local customers",
      "Inconsistent business information across directories hurting your visibility",
      "No strategy to capture 'near me' searches that drive immediate foot traffic"
    ],
    solutions: [
      "Complete Google Business Profile optimization for maximum local visibility",
      "Review generation and reputation management to build trust and rankings",
      "Citation building and NAP consistency across all major directories",
      "Geo-targeted content and optimization for local search domination"
    ],
    features: [
      "Google Business Profile optimization",
      "Review generation and management system",
      "Local citation building and NAP consistency",
      "Geo-targeted keyword optimization",
      "Local link building from community sources",
      "Google Maps ranking optimization",
      "Competitor local presence analysis",
      "Monthly local ranking and visibility reports"
    ],
    workflowSteps: [
      { step: "Local SEO Audit", desc: "Audit your Google Business Profile, citations, reviews, and local rankings against competitors." },
      { step: "GBP & Citation Optimization", desc: "Fully optimize your Google Business Profile and build consistent citations across key directories." },
      { step: "Review & Content Strategy", desc: "Implement review generation systems and create locally-focused content for your target areas." },
      { step: "Ongoing Local Domination", desc: "Monitor local rankings, manage reviews, and continuously optimize for expanding local visibility." }
    ],
    industries: [
      { name: "Restaurants", icon: "Utensils" },
      { name: "Home Services", icon: "Hammer" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Automotive", icon: "Car" },
      { name: "Legal Services", icon: "Scale" },
      { name: "Fitness & Wellness", icon: "Dumbbell" }
    ],
    faqs: [
      { q: "How important is Google Business Profile for local businesses?", a: "Critically important. Google Business Profile drives the majority of local discovery. Businesses with optimized profiles receive 7x more clicks than those without and appear prominently in Maps and local search results." },
      { q: "How do you help us get more reviews?", a: "We implement automated review request sequences via email and SMS after service completion, making it easy for satisfied customers to leave reviews on Google and other key platforms." },
      { q: "Can you help with multiple business locations?", a: "Yes. We manage multi-location Local SEO with individual profile optimization, location-specific content, and area-targeted strategies for each location." },
      { q: "How long does it take to rank in the local pack?", a: "Initial improvements are often visible within 4-8 weeks. Achieving consistent local pack placement typically takes 3-6 months depending on market competition." },
      { q: "Do you handle negative reviews?", a: "Yes. We provide review monitoring and response strategies for both positive and negative reviews, helping you maintain a strong reputation and address concerns professionally." }
    ],
    relatedServices: ["seo-authority", "google-ads", "website-development", "content-writing"]
  },
  "conversion-funnels": {
    longDesc: "Our Conversion Funnel Building service creates multi-step marketing funnels that systematically turn cold traffic into paying customers. From awareness to consideration to purchase, each funnel stage is optimized with compelling messaging, strategic offers, and automated nurture sequences that guide prospects through a predictable path to conversion.",
    problems: [
      "Sending paid traffic directly to your homepage with no conversion path",
      "No systematic process to move prospects from interest to purchase",
      "High cost-per-acquisition from single-step sales processes",
      "Losing warm prospects who aren't ready to buy immediately"
    ],
    solutions: [
      "Multi-step funnels that warm up cold traffic before asking for the sale",
      "Strategic lead magnets and tripwire offers that build trust progressively",
      "Automated email and retargeting sequences between funnel stages",
      "Optimized conversion paths that reduce CPA and increase customer lifetime value"
    ],
    features: [
      "Custom funnel strategy and architecture design",
      "Lead magnet and tripwire offer creation",
      "Landing page design for each funnel stage",
      "Email nurture sequences between stages",
      "Retargeting pixel and audience setup",
      "Upsell and cross-sell page building",
      "Funnel analytics and conversion tracking",
      "A/B testing at every funnel stage"
    ],
    workflowSteps: [
      { step: "Funnel Strategy", desc: "Design the funnel architecture with stages, offers, and conversion goals based on your product and audience." },
      { step: "Page & Offer Creation", desc: "Build landing pages, lead magnets, tripwires, and core offers for each funnel stage." },
      { step: "Automation & Sequences", desc: "Configure email sequences, retargeting audiences, and automated transitions between funnel stages." },
      { step: "Test & Optimize", desc: "Launch, track conversion metrics at every stage, and optimize for higher throughput and lower CPA." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "Heart" }
    ],
    faqs: [
      { q: "What is a conversion funnel and why do I need one?", a: "A conversion funnel is a multi-step process that guides prospects from initial awareness to purchase. It's essential because most buyers need multiple touchpoints before they're ready to buy, and a funnel systematizes this journey." },
      { q: "How does a funnel differ from a landing page?", a: "A landing page is a single step. A funnel is a connected series of pages, emails, and offers that nurture prospects through each buying stage, resulting in significantly higher overall conversion rates." },
      { q: "What types of funnels do you build?", a: "We build lead generation funnels, webinar funnels, product launch funnels, e-commerce funnels, and high-ticket application funnels — each customized to your specific business model." },
      { q: "How long does it take to build a funnel?", a: "A complete funnel including strategy, design, copy, automation, and testing typically takes 2-4 weeks to build and launch." },
      { q: "What results should I expect from a funnel?", a: "Well-built funnels typically reduce cost-per-acquisition by 30-50% compared to direct-to-sale approaches while increasing average customer value through strategic upsells." }
    ],
    relatedServices: ["landing-page-optimization", "google-ads", "meta-ads", "ai-email-automation"]
  },
  "landing-page-optimization": {
    longDesc: "Our Landing Page Optimization service transforms underperforming pages into high-converting assets through data-driven design, compelling copy, and systematic A/B testing. We analyze visitor behavior, identify conversion barriers, and implement targeted improvements that dramatically increase the percentage of visitors who take action.",
    problems: [
      "Low conversion rates despite spending thousands on driving traffic",
      "High bounce rates indicating poor page-message match with ad campaigns",
      "No systematic testing process to identify what's killing conversions",
      "Generic landing pages that fail to differentiate you from competitors"
    ],
    solutions: [
      "Data-driven page redesign based on heatmaps, recordings, and analytics",
      "Compelling copy and offer positioning that addresses specific audience pain points",
      "Systematic A/B testing framework that continuously improves conversion rates",
      "Message-match optimization ensuring landing pages align perfectly with ad campaigns"
    ],
    features: [
      "Heatmap and session recording analysis",
      "Conversion-focused copy optimization",
      "A/B and multivariate testing",
      "Mobile responsiveness optimization",
      "Page speed and Core Web Vitals improvement",
      "Form optimization and friction reduction",
      "Trust element and social proof placement",
      "Ad-to-page message match alignment"
    ],
    workflowSteps: [
      { step: "Conversion Audit", desc: "Analyze current page performance with heatmaps, recordings, analytics, and user behavior data." },
      { step: "Hypothesis Development", desc: "Identify conversion barriers and develop data-backed hypotheses for improvement." },
      { step: "Design & Testing", desc: "Create optimized page variations and run structured A/B tests to validate improvements." },
      { step: "Implement & Iterate", desc: "Roll out winning variations and continue testing new elements for ongoing conversion gains." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Financial Services", icon: "Landmark" }
    ],
    faqs: [
      { q: "What conversion rate improvement should I expect?", a: "Most of our landing page optimization projects achieve 30-100% conversion rate improvements. The exact lift depends on your starting point and traffic quality." },
      { q: "How do you determine what to change on a page?", a: "We use a combination of analytics data, heatmaps, session recordings, user surveys, and competitive analysis to identify the highest-impact opportunities for improvement." },
      { q: "How long does A/B testing take?", a: "Each test typically runs 2-4 weeks to reach statistical significance. We run tests continuously, implementing winners and testing new hypotheses." },
      { q: "Do you write the copy for landing pages?", a: "Yes. Conversion-focused copywriting is a core part of our optimization process. We write headlines, body copy, CTAs, and supporting content based on proven persuasion frameworks." },
      { q: "Can you optimize pages on any platform?", a: "Yes. We optimize landing pages built on any platform including WordPress, Webflow, Unbounce, ClickFunnels, custom-built sites, and more." }
    ],
    relatedServices: ["conversion-rate-optimization", "conversion-funnels", "landing-page-development", "google-ads"]
  },
  "conversion-rate-optimization": {
    longDesc: "Our Conversion Rate Optimization service applies rigorous data analysis and testing methodology to maximize the value of every visitor across your entire website. From homepage to checkout, we identify and fix conversion bottlenecks using behavioral analytics, A/B testing, and UX improvements that compound into significant revenue growth.",
    problems: [
      "Spending on traffic that doesn't convert into leads or sales",
      "No insight into why visitors leave without taking action",
      "Making website changes based on opinions instead of data",
      "Checkout or form abandonment rates eating into your revenue"
    ],
    solutions: [
      "Full-site conversion audit identifying every friction point and drop-off",
      "Behavioral analytics revealing exactly how visitors interact with your pages",
      "Structured testing program that validates changes with statistical confidence",
      "Iterative optimization that compounds conversion improvements over time"
    ],
    features: [
      "Full-site conversion funnel analysis",
      "User behavior analytics and heatmaps",
      "Structured A/B and multivariate testing",
      "Form and checkout flow optimization",
      "UX/UI improvement recommendations",
      "Personalization and dynamic content testing",
      "Revenue impact modeling and reporting",
      "Continuous testing roadmap and prioritization"
    ],
    workflowSteps: [
      { step: "Data Collection & Analysis", desc: "Install tracking, collect behavioral data, and analyze the full conversion funnel to identify key drop-off points." },
      { step: "Testing Roadmap", desc: "Prioritize testing opportunities by potential revenue impact and build a structured testing roadmap." },
      { step: "Test Execution", desc: "Design, develop, and run A/B tests with proper statistical methodology and tracking." },
      { step: "Scale Wins", desc: "Implement winning tests, document learnings, and continuously refine the testing pipeline for compounding gains." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Healthcare", icon: "Heart" },
      { name: "Real Estate", icon: "Building2" }
    ],
    faqs: [
      { q: "What's the difference between CRO and landing page optimization?", a: "Landing page optimization focuses on individual pages. CRO analyzes and optimizes your entire website experience — from traffic entry points through final conversion — for holistic revenue improvement." },
      { q: "How much traffic do I need for CRO?", a: "For statistically valid A/B testing, we recommend at least 5,000 monthly visitors. For lower-traffic sites, we use qualitative methods and best-practice implementations." },
      { q: "What tools do you use for CRO?", a: "We use Google Analytics, Hotjar, VWO or Optimizely for A/B testing, session recording tools, and custom analytics setups based on your tech stack." },
      { q: "How do you measure CRO success?", a: "We measure primary conversions (leads, sales, sign-ups), micro-conversions (clicks, form starts, page depth), and ultimately revenue impact per visitor." },
      { q: "Can CRO help with mobile conversion rates?", a: "Absolutely. Mobile optimization is a major focus area. We analyze mobile-specific user behavior and run tests tailored to mobile experiences where conversion patterns differ significantly." }
    ],
    relatedServices: ["landing-page-optimization", "conversion-funnels", "analytics-dashboard", "website-development"]
  },
  "social-media-marketing": {
    longDesc: "Our Social Media Marketing service builds a strategic presence across platforms that drives brand awareness, engagement, and lead generation. We create platform-specific content strategies, manage your accounts, and grow your audience with consistent, high-quality posting that positions your brand as the authority in your industry.",
    problems: [
      "Inconsistent posting leading to declining reach and engagement",
      "No clear social media strategy tied to business revenue goals",
      "Spending time on social without generating measurable leads or sales",
      "Falling behind competitors who have strong, active social presence"
    ],
    solutions: [
      "Comprehensive social media strategy aligned with your revenue objectives",
      "Consistent, high-quality content creation and scheduling across platforms",
      "Audience growth tactics that attract your ideal customers organically",
      "Performance tracking linking social activity to leads and revenue"
    ],
    features: [
      "Multi-platform content strategy and calendar",
      "Professional content creation and design",
      "Community management and engagement",
      "Hashtag research and optimization",
      "Audience growth and follower campaigns",
      "Social listening and brand monitoring",
      "Influencer identification and outreach",
      "Monthly analytics and performance reporting"
    ],
    workflowSteps: [
      { step: "Brand & Audience Audit", desc: "Analyze your current social presence, audience demographics, and competitive landscape." },
      { step: "Strategy & Content Calendar", desc: "Develop a content strategy with posting frequency, content themes, and platform-specific approaches." },
      { step: "Content Production & Scheduling", desc: "Create, design, and schedule content across all platforms with consistent brand voice." },
      { step: "Engage & Grow", desc: "Manage community engagement, execute growth tactics, and report on performance metrics monthly." }
    ],
    industries: [
      { name: "Restaurants", icon: "Utensils" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Healthcare", icon: "Heart" },
      { name: "Education", icon: "GraduationCap" }
    ],
    faqs: [
      { q: "Which social media platforms should my business be on?", a: "It depends on your audience. We analyze where your ideal customers are most active and focus your resources on 2-3 platforms for maximum impact rather than spreading thin across all of them." },
      { q: "How many posts per week do you create?", a: "Depending on your plan, we create 3-7 posts per week per platform, including a mix of educational, engaging, and promotional content optimized for each platform's algorithm." },
      { q: "Can social media actually generate leads?", a: "Absolutely. With the right strategy, social media drives direct inquiries, website traffic, and lead form submissions. We track every lead source to measure social's revenue contribution." },
      { q: "Do you handle customer comments and messages?", a: "Yes. Community management is included in our service. We respond to comments and messages promptly, escalating sales opportunities and support issues as needed." },
      { q: "How do you measure social media ROI?", a: "We track engagement rates, audience growth, website traffic from social, lead generation, and revenue attribution. Monthly reports show exactly how social contributes to your bottom line." }
    ],
    relatedServices: ["instagram-growth", "facebook-growth", "content-writing", "video-marketing"]
  },
  "instagram-growth": {
    longDesc: "Our Instagram Growth & Posting service builds your brand's Instagram presence with consistent, visually compelling content that attracts your ideal audience. We handle everything from content creation to hashtag strategy to engagement tactics, growing your follower base with potential customers who are genuinely interested in your products and services.",
    problems: [
      "Instagram profile stagnant with low followers and minimal engagement",
      "Inconsistent posting causing algorithm penalties and declining reach",
      "No cohesive visual brand identity on your Instagram grid",
      "Spending time on Instagram without generating any business results"
    ],
    solutions: [
      "Consistent, scheduled posting with algorithm-optimized timing and frequency",
      "Professional visual content that creates a cohesive, branded grid aesthetic",
      "Strategic hashtag and engagement tactics that attract your ideal followers",
      "Content strategy that converts followers into website visitors and leads"
    ],
    features: [
      "Custom content calendar with daily posting",
      "Professional graphic design and visual branding",
      "Strategic hashtag research and rotation",
      "Instagram Stories and Reels creation",
      "Engagement strategy and community building",
      "Bio and profile optimization",
      "Audience growth tactics and campaigns",
      "Weekly performance analytics"
    ],
    workflowSteps: [
      { step: "Profile & Brand Audit", desc: "Analyze your current Instagram presence, brand aesthetics, audience, and competitors." },
      { step: "Content Strategy & Design", desc: "Develop visual brand guidelines, content themes, and a monthly content calendar." },
      { step: "Content Creation & Scheduling", desc: "Create posts, stories, and reels with professional design and strategic scheduling." },
      { step: "Growth & Engagement", desc: "Execute growth strategies, manage engagement, and optimize based on weekly analytics." }
    ],
    industries: [
      { name: "Restaurants", icon: "Utensils" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Healthcare", icon: "Heart" },
      { name: "Automotive", icon: "Car" }
    ],
    faqs: [
      { q: "How quickly can I expect to see follower growth?", a: "With consistent posting and strategic engagement, most accounts see noticeable growth within the first month, with significant audience building over 3-6 months." },
      { q: "Do you create the content or do I need to provide it?", a: "We handle all content creation including design, copywriting, and scheduling. We may request product photos or behind-the-scenes content to supplement professional designs." },
      { q: "How often do you post on Instagram?", a: "We post 4-7 times per week on your feed, plus daily stories and 2-3 reels per week. Frequency is optimized based on your audience's engagement patterns." },
      { q: "Do you use bots or fake followers?", a: "Never. We grow your audience organically through quality content, strategic hashtags, genuine engagement, and platform-compliant growth tactics. Every follower is real." },
      { q: "Can Instagram drive actual business leads?", a: "Yes. With strategic CTAs, link-in-bio optimization, and story-driven promotions, Instagram becomes a consistent source of website traffic, inquiries, and sales." }
    ],
    relatedServices: ["social-media-marketing", "facebook-growth", "video-marketing", "branding-design"]
  },
  "facebook-growth": {
    longDesc: "Our Facebook Growth & Posting service builds an active, engaged community around your brand on the world's largest social platform. We create content strategies that leverage Facebook's unique features — groups, events, long-form posts, and video — to build audience trust and drive consistent lead generation for your business.",
    problems: [
      "Organic reach on Facebook has dropped dramatically with no strategy to recover",
      "Facebook page sitting dormant with no consistent posting or engagement",
      "No community-building strategy to leverage Facebook Groups for leads",
      "Competitors building engaged audiences while your page collects dust"
    ],
    solutions: [
      "Algorithm-optimized posting strategy that maximizes organic reach",
      "Consistent content creation with engagement-driving formats and topics",
      "Community building through Facebook Groups and interactive content",
      "Lead generation tactics integrated into your organic content strategy"
    ],
    features: [
      "Facebook page content strategy and calendar",
      "Community management and engagement",
      "Facebook Groups creation and management",
      "Video and live streaming content",
      "Event creation and promotion",
      "Page optimization for discoverability",
      "Content performance analytics",
      "Lead generation post strategies"
    ],
    workflowSteps: [
      { step: "Page & Audience Analysis", desc: "Audit your Facebook page, audience demographics, content performance, and competitive landscape." },
      { step: "Content & Community Strategy", desc: "Build a content strategy including Groups, events, and formats that drive engagement on Facebook." },
      { step: "Content Production", desc: "Create and schedule diverse content — posts, videos, stories, events — tailored for Facebook's algorithm." },
      { step: "Community Growth", desc: "Build and engage your community, manage Groups, respond to interactions, and optimize for lead generation." }
    ],
    industries: [
      { name: "Home Services", icon: "Hammer" },
      { name: "Restaurants", icon: "Utensils" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "Healthcare", icon: "Stethoscope" }
    ],
    faqs: [
      { q: "Is Facebook still relevant for business marketing?", a: "Absolutely. Facebook remains the largest social platform with 3+ billion users. When leveraged properly with Groups, video, and community building, it's one of the most powerful organic lead generation tools available." },
      { q: "How do you combat declining organic reach?", a: "We focus on engagement-driving content formats that the algorithm favors — video, interactive posts, Groups content, and community discussions — and optimize posting times and frequency." },
      { q: "Should my business have a Facebook Group?", a: "For most service businesses, yes. A Facebook Group creates a community around your brand that drives organic engagement, builds trust, and generates referrals at a rate far exceeding page posts alone." },
      { q: "How often do you post on Facebook?", a: "We typically post 3-5 times per week on your page and facilitate daily engagement within Groups. Quality and engagement rate matter more than raw volume on Facebook." },
      { q: "Can you manage our Facebook alongside other platforms?", a: "Yes. We often manage Facebook as part of a comprehensive social strategy that includes Instagram and other platforms with coordinated messaging across all channels." }
    ],
    relatedServices: ["social-media-marketing", "instagram-growth", "meta-ads", "content-writing"]
  },
  "content-writing": {
    longDesc: "Our Content Writing & Strategy service creates authority-building content that positions your brand as the go-to expert in your industry. From blog posts and articles to case studies and email copy, every piece is strategically crafted to rank in search engines, engage your audience, and move prospects closer to a purchasing decision.",
    problems: [
      "No consistent content production causing stagnant organic growth",
      "Content that doesn't rank in search engines or drive any traffic",
      "Inability to articulate your expertise in a way that builds trust",
      "Relying entirely on paid channels with no content-driven inbound strategy"
    ],
    solutions: [
      "Strategic content calendar aligned with SEO keywords and audience interests",
      "SEO-optimized articles and blog posts that rank and drive organic traffic",
      "Authority-building content that establishes your brand as the industry expert",
      "Diverse content types from blogs to case studies to email copy for full-funnel coverage"
    ],
    features: [
      "Content strategy and editorial calendar",
      "SEO-optimized blog posts and articles",
      "Case study and whitepaper creation",
      "Email copy and newsletter writing",
      "Website copy and service page content",
      "Social media content writing",
      "Content performance tracking",
      "Topic research and keyword integration"
    ],
    workflowSteps: [
      { step: "Content Audit & Strategy", desc: "Analyze existing content, identify gaps, research keywords, and build a strategic content calendar." },
      { step: "Content Creation", desc: "Write and produce SEO-optimized content aligned with your brand voice and strategic goals." },
      { step: "Publishing & Distribution", desc: "Publish content across your channels with proper SEO formatting and promotion strategy." },
      { step: "Performance & Iteration", desc: "Track content performance, identify top performers, and refine the strategy for continued growth." }
    ],
    industries: [
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Legal Services", icon: "Scale" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Real Estate", icon: "Building2" }
    ],
    faqs: [
      { q: "How many pieces of content do you produce per month?", a: "Depending on your plan, we produce 4-12 pieces per month including blog posts, articles, case studies, and supporting social content. Each piece is strategically planned and SEO-optimized." },
      { q: "Do you write in our brand voice?", a: "Yes. We develop a comprehensive brand voice guide during onboarding and write all content to match your tone, style, and messaging standards." },
      { q: "How does content drive revenue?", a: "Content builds organic search traffic, establishes authority, nurtures leads through the funnel, and improves conversion rates — all contributing directly to revenue growth over time." },
      { q: "Can you handle technical or specialized topics?", a: "Yes. Our writers research thoroughly and work with your subject matter experts to produce accurate, authoritative content even in highly specialized industries." },
      { q: "Do you handle content distribution?", a: "Yes. We publish content to your blog, optimize for SEO, create social media excerpts, and can repurpose into email content and other formats for maximum reach." }
    ],
    relatedServices: ["seo-authority", "social-media-marketing", "branding-design", "video-marketing"]
  },
  "branding-design": {
    longDesc: "Our Branding & Creative Design service creates a premium visual identity that commands trust, recognition, and authority in your market. From logo design to full brand systems, we build cohesive visual identities that differentiate you from competitors and create the professional perception that drives higher-value clients and premium pricing.",
    problems: [
      "Inconsistent visual identity across your website, social media, and materials",
      "Outdated branding that doesn't reflect the quality of your services",
      "Blending in with competitors due to generic, templated design",
      "Inability to charge premium prices due to unprofessional brand perception"
    ],
    solutions: [
      "Cohesive brand identity system that creates consistency across every touchpoint",
      "Modern, premium design that positions your business as the market leader",
      "Distinctive visual identity that sets you apart from every competitor",
      "Professional brand perception that justifies premium pricing and attracts ideal clients"
    ],
    features: [
      "Logo design and brand mark creation",
      "Brand color palette and typography system",
      "Brand style guide and usage guidelines",
      "Social media template designs",
      "Business card and stationery design",
      "Presentation and proposal templates",
      "Marketing collateral design",
      "Brand photography direction"
    ],
    workflowSteps: [
      { step: "Brand Discovery", desc: "Deep-dive into your business values, audience, competitors, and brand positioning to define the creative direction." },
      { step: "Concept Development", desc: "Create multiple brand concepts including logo options, color palettes, and typography for your review." },
      { step: "Brand System Build", desc: "Develop the complete brand identity system with guidelines, templates, and asset library." },
      { step: "Brand Rollout", desc: "Implement the new brand across your website, social media, and marketing materials for a cohesive launch." }
    ],
    industries: [
      { name: "Professional Services", icon: "Briefcase" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Restaurants", icon: "Utensils" },
      { name: "Healthcare", icon: "Heart" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "Real Estate", icon: "Building2" }
    ],
    faqs: [
      { q: "What's included in a full branding package?", a: "Our full package includes logo design, color palette, typography, brand style guide, social media templates, business card design, and marketing collateral templates — everything you need for a cohesive brand." },
      { q: "How long does the branding process take?", a: "A complete brand identity project typically takes 3-4 weeks from discovery to final delivery, including revision rounds and brand guide documentation." },
      { q: "Can you rebrand our existing business?", a: "Absolutely. We specialize in rebranding projects that modernize and elevate your visual identity while maintaining brand equity you've already built." },
      { q: "How many logo concepts do you present?", a: "We present 3-5 unique logo concepts in the initial round, each with a clear rationale. From there, we refine your preferred direction through 2-3 revision rounds." },
      { q: "Do you provide all the source files?", a: "Yes. You receive all source files (AI, EPS, SVG, PNG) plus a comprehensive brand guide with usage examples, color codes, and typography specifications." }
    ],
    relatedServices: ["website-development", "social-media-marketing", "content-writing", "video-marketing"]
  },
  "video-marketing": {
    longDesc: "Our Short Form Video Marketing service creates scroll-stopping video content optimized for TikTok, Instagram Reels, YouTube Shorts, and other platforms. We handle concept development, filming direction, editing, and publishing to build your brand's video presence and drive massive organic reach and engagement with content that resonates.",
    problems: [
      "Missing out on the massive organic reach that short-form video provides",
      "No video content strategy or production capability in-house",
      "Videos that get no views because they're not optimized for platform algorithms",
      "Competitors gaining market share through viral video content"
    ],
    solutions: [
      "Platform-optimized short-form videos designed for maximum algorithm reach",
      "Professional editing and post-production that makes every video polished",
      "Trend-aware content strategy that leverages what's working right now",
      "Consistent publishing cadence that builds momentum and audience growth"
    ],
    features: [
      "Short-form video concept and script development",
      "Professional video editing and post-production",
      "Platform-specific optimization (TikTok, Reels, Shorts)",
      "Trending audio and format integration",
      "Caption and hook writing for engagement",
      "Multi-platform publishing and scheduling",
      "Video performance analytics",
      "Content repurposing across formats"
    ],
    workflowSteps: [
      { step: "Video Strategy", desc: "Define your video content pillars, target platforms, posting frequency, and style based on audience research." },
      { step: "Content Planning", desc: "Develop monthly video concepts, scripts, and shooting guides aligned with trends and your brand message." },
      { step: "Production & Editing", desc: "Produce and edit videos with professional quality, platform-optimized formatting, and engaging hooks." },
      { step: "Publish & Analyze", desc: "Schedule and publish across platforms, track performance metrics, and iterate on top-performing formats." }
    ],
    industries: [
      { name: "Restaurants", icon: "Utensils" },
      { name: "Fitness & Wellness", icon: "Dumbbell" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Automotive", icon: "Car" },
      { name: "Education", icon: "GraduationCap" }
    ],
    faqs: [
      { q: "How many videos do you produce per month?", a: "Depending on your plan, we produce 8-20 short-form videos per month. Each video is concept-driven, professionally edited, and optimized for maximum platform performance." },
      { q: "Do I need to be on camera?", a: "Not necessarily. We can create effective videos using product shots, screen recordings, text overlays, stock footage, and other formats. However, personal brand videos tend to perform best." },
      { q: "Which platforms do you publish to?", a: "We optimize and publish to TikTok, Instagram Reels, YouTube Shorts, and Facebook Reels. Each video is formatted specifically for the platform it's published on." },
      { q: "How do you ensure videos get views?", a: "We optimize hooks (first 3 seconds), use trending audio and formats, write engaging captions, post at optimal times, and leverage platform-specific SEO techniques." },
      { q: "Can video marketing drive business leads?", a: "Absolutely. Short-form video is the highest organic reach channel available. Combined with strategic CTAs and profile optimization, it consistently drives website traffic, inquiries, and sales." }
    ],
    relatedServices: ["social-media-marketing", "instagram-growth", "content-writing", "branding-design"]
  },
  "website-development": {
    longDesc: "Our Website Development service builds high-performance, conversion-optimized websites that serve as the foundation of your digital revenue engine. Every site we build combines stunning design with strategic UX, fast load times, and SEO best practices to turn visitors into leads and customers from the moment they land on your page.",
    problems: [
      "Outdated website that doesn't reflect the quality of your business",
      "Slow-loading site causing visitor drop-off and lower search rankings",
      "Website that looks great but generates zero leads or conversions",
      "No mobile optimization despite 60%+ of traffic coming from mobile devices"
    ],
    solutions: [
      "Modern, responsive design that looks stunning on every device and screen size",
      "Performance-optimized build with sub-2-second load times",
      "Conversion-focused UX with strategic CTAs, forms, and user flow design",
      "SEO-ready architecture with proper structure, metadata, and schema markup"
    ],
    features: [
      "Custom responsive website design",
      "Mobile-first development approach",
      "SEO-optimized site architecture",
      "Conversion-focused UX and CTA placement",
      "Fast load times and Core Web Vitals optimization",
      "CMS integration for easy content management",
      "SSL security and performance hosting",
      "Analytics and tracking integration"
    ],
    workflowSteps: [
      { step: "Discovery & Planning", desc: "Define site goals, structure, content requirements, and design direction based on your business objectives." },
      { step: "Design & Prototyping", desc: "Create visual designs and interactive prototypes for your review and approval before development." },
      { step: "Development & Testing", desc: "Build the site with clean code, responsiveness, speed optimization, and thorough cross-browser testing." },
      { step: "Launch & Optimization", desc: "Deploy the site, configure analytics, submit to search engines, and provide training on content management." }
    ],
    industries: [
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Real Estate", icon: "Building2" },
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Legal Services", icon: "Scale" },
      { name: "Restaurants", icon: "Utensils" }
    ],
    faqs: [
      { q: "How long does a website project take?", a: "Most websites take 4-8 weeks from kickoff to launch depending on complexity. We provide a detailed timeline during the planning phase." },
      { q: "What platform do you build websites on?", a: "We build on the platform that best fits your needs — WordPress, Webflow, custom React/Next.js, or Shopify for e-commerce. Each project is matched to the ideal technology." },
      { q: "Do you provide hosting?", a: "Yes. We offer high-performance hosting with SSL, CDN, daily backups, and uptime monitoring as part of our web development packages." },
      { q: "Can I update the website content myself?", a: "Absolutely. Every site includes a user-friendly CMS and training so you can update text, images, and blog posts without any technical knowledge." },
      { q: "Is the website optimized for SEO?", a: "Yes. Every site includes SEO fundamentals — proper URL structure, meta tags, schema markup, image optimization, sitemap, and fast load times — as standard." }
    ],
    relatedServices: ["landing-page-development", "seo-authority", "branding-design", "analytics-dashboard"]
  },
  "landing-page-development": {
    longDesc: "Our Landing Page Development service builds fast, responsive, high-converting landing pages purpose-built to capture leads from your ad campaigns and marketing efforts. Every page is designed with a single conversion goal in mind, using proven design patterns, persuasive copy, and technical optimization to maximize your return on ad spend.",
    problems: [
      "Sending ad traffic to your homepage instead of a dedicated conversion page",
      "Landing pages that take too long to build, delaying campaign launches",
      "Pages that look good but have poor conversion rates due to weak UX",
      "No A/B testing capability to optimize page performance over time"
    ],
    solutions: [
      "Purpose-built landing pages designed around a single conversion objective",
      "Rapid development and deployment to support fast campaign launches",
      "Conversion-optimized design with proven layouts, copy, and CTA placement",
      "Built-in A/B testing infrastructure for continuous performance improvement"
    ],
    features: [
      "Conversion-focused page design and layout",
      "Mobile-responsive development",
      "Fast page load optimization",
      "A/B testing capability built-in",
      "Form and CTA optimization",
      "Ad platform tracking pixel integration",
      "Social proof and trust element placement",
      "Dynamic content for personalized experiences"
    ],
    workflowSteps: [
      { step: "Goal & Offer Definition", desc: "Define the page's conversion goal, offer, audience, and message alignment with your campaign." },
      { step: "Design & Copy", desc: "Create the page design with conversion-focused layout, persuasive copy, and strategic CTA placement." },
      { step: "Development & Tracking", desc: "Build the page with mobile responsiveness, speed optimization, and full tracking integration." },
      { step: "Launch & Test", desc: "Deploy the page, connect to your campaigns, and begin A/B testing to optimize conversion rates." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Home Services", icon: "Hammer" }
    ],
    faqs: [
      { q: "How fast can you build a landing page?", a: "We can deliver a fully designed and developed landing page in 5-7 business days. Rush delivery in 3 days is available for time-sensitive campaigns." },
      { q: "What makes a landing page different from a regular website page?", a: "Landing pages are designed with a single conversion goal and no distracting navigation. This focused approach typically converts 3-5x better than sending traffic to a general website page." },
      { q: "Do you write the copy for landing pages?", a: "Yes. Every landing page includes conversion-focused copywriting — headlines, body copy, CTAs, and supporting text — all written to maximize conversions." },
      { q: "Can you build landing pages for different campaigns?", a: "Absolutely. We build unique landing pages for each campaign, audience segment, or ad group to ensure perfect message match and maximum conversion rates." },
      { q: "Do you include A/B testing?", a: "Yes. Every landing page is built with A/B testing capability. We set up initial tests and provide ongoing optimization recommendations based on performance data." }
    ],
    relatedServices: ["landing-page-optimization", "conversion-funnels", "google-ads", "website-development"]
  },
  "crm-setup": {
    longDesc: "Our CRM Setup & Integration service implements and configures a professional CRM system customized to your exact sales process. We handle platform selection, data migration, pipeline design, and team training to give your sales organization a powerful, organized system that tracks every lead and deal from first touch to close.",
    problems: [
      "Leads tracked in spreadsheets, sticky notes, and scattered emails",
      "No visibility into your sales pipeline or deal progression",
      "Sales team using the CRM inconsistently or not at all",
      "Current CRM poorly configured and not matching your actual sales process"
    ],
    solutions: [
      "Professional CRM implementation customized to match your exact sales workflow",
      "Clean data migration from spreadsheets and existing tools with zero data loss",
      "Custom pipeline design that mirrors your real sales stages and reporting needs",
      "Comprehensive team training ensuring full adoption and consistent usage"
    ],
    features: [
      "CRM platform selection and setup",
      "Custom pipeline and stage configuration",
      "Data migration and deduplication",
      "Custom fields and property setup",
      "Email and calendar integration",
      "Report and dashboard configuration",
      "User permissions and team structure",
      "Comprehensive training and documentation"
    ],
    workflowSteps: [
      { step: "Sales Process Mapping", desc: "Document your sales stages, data requirements, team structure, and reporting needs." },
      { step: "CRM Configuration", desc: "Set up the CRM with custom pipelines, fields, automations, and integrations specific to your process." },
      { step: "Data Migration", desc: "Import and clean your existing data from spreadsheets, email, and other sources into the new CRM." },
      { step: "Training & Adoption", desc: "Train your team on using the CRM effectively and provide documentation for ongoing reference." }
    ],
    industries: [
      { name: "Real Estate", icon: "Building2" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Automotive", icon: "Car" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Home Services", icon: "Hammer" }
    ],
    faqs: [
      { q: "Which CRM platform do you recommend?", a: "We recommend based on your needs — HubSpot for inbound-focused businesses, Salesforce for enterprise, GoHighLevel for agencies, and Pipedrive for simplicity. We help you choose the right fit." },
      { q: "Can you migrate data from our existing system?", a: "Yes. We handle complete data migration from spreadsheets, other CRMs, or any existing system with data cleaning and deduplication included." },
      { q: "How long does CRM setup take?", a: "A full CRM setup including configuration, migration, and training typically takes 2-3 weeks depending on data complexity and customization requirements." },
      { q: "Do you provide CRM training for our team?", a: "Yes. We provide comprehensive live training sessions plus recorded tutorials and written documentation so your team can reference materials anytime." },
      { q: "Can you integrate the CRM with our other tools?", a: "Absolutely. We integrate your CRM with email, calendar, marketing tools, accounting software, and any other platforms in your tech stack." }
    ],
    relatedServices: ["crm-automation", "workflow-automation", "saas-integrations", "marketing-automation-setup"]
  },
  "saas-integrations": {
    longDesc: "Our SaaS Integrations service connects all the tools in your business ecosystem for seamless, automated data flow. From CRM to marketing platforms to payment processors, we build reliable integrations that eliminate manual data entry, prevent data silos, and ensure every system in your stack works together as a unified revenue engine.",
    problems: [
      "Data trapped in separate tools with no connection between them",
      "Manual copy-pasting of information between platforms wasting hours daily",
      "Inconsistent data across systems leading to errors and missed opportunities",
      "New tools purchased but never properly connected to existing workflow"
    ],
    solutions: [
      "Seamless API integrations connecting all your business tools bidirectionally",
      "Automated data sync that keeps every system up-to-date in real-time",
      "Unified data architecture that eliminates silos and inconsistencies",
      "Proper onboarding of new tools with integration into your existing stack"
    ],
    features: [
      "API integration development and configuration",
      "Real-time data synchronization between platforms",
      "Custom webhook and trigger setup",
      "Data mapping and transformation between systems",
      "Error handling and sync monitoring",
      "Authentication and security configuration",
      "Integration documentation and maintenance",
      "Scalable architecture for future tool additions"
    ],
    workflowSteps: [
      { step: "Integration Audit", desc: "Map your current tool ecosystem, identify disconnected systems, and prioritize integration opportunities." },
      { step: "Architecture Design", desc: "Design the integration architecture with data flows, sync frequency, and transformation logic." },
      { step: "Build & Connect", desc: "Build integrations using APIs, webhooks, or integration platforms, with proper error handling and monitoring." },
      { step: "Test & Document", desc: "Thoroughly test all data flows, document the integration setup, and provide ongoing monitoring." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Real Estate", icon: "Building2" }
    ],
    faqs: [
      { q: "What tools and platforms can you integrate?", a: "We integrate virtually any platform with an API — CRMs, marketing tools, payment processors, accounting software, project management tools, and custom applications." },
      { q: "How do you handle integrations when there's no native connection?", a: "We use middleware platforms like Zapier or Make for simpler connections, and build custom API integrations for complex or high-volume data flows." },
      { q: "What happens if an integration breaks?", a: "We build error handling and monitoring into every integration. If a sync fails, the system retries automatically and alerts us for intervention if needed." },
      { q: "Can you integrate legacy or custom-built systems?", a: "Yes. As long as the system has an API or can export data, we can build integrations. For systems without APIs, we explore alternative approaches like database connections or file-based syncs." },
      { q: "How long do integrations take to set up?", a: "Simple integrations take 1-3 days. Complex multi-platform integrations with custom logic typically take 1-3 weeks depending on scope and API complexity." }
    ],
    relatedServices: ["workflow-automation", "crm-setup", "marketing-automation-setup", "analytics-dashboard"]
  },
  "marketing-automation-setup": {
    longDesc: "Our Marketing Automation Setup service configures end-to-end marketing automation systems that nurture leads, trigger campaigns, and drive conversions without manual intervention. We build the infrastructure that powers your email sequences, lead scoring, campaign triggers, and reporting, turning your marketing from manual effort into an automated revenue machine.",
    problems: [
      "Marketing campaigns requiring manual execution for every send and trigger",
      "No automated nurture sequences for leads who aren't ready to buy yet",
      "Disconnected marketing tools preventing coordinated, automated campaigns",
      "Inability to segment and personalize marketing at scale"
    ],
    solutions: [
      "End-to-end marketing automation infrastructure across all channels",
      "Automated lead nurture sequences that warm prospects over time",
      "Connected marketing stack with automated triggers and data flow",
      "Advanced segmentation enabling personalized marketing at scale"
    ],
    features: [
      "Marketing automation platform setup and configuration",
      "Automated email and SMS sequence building",
      "Lead scoring and segmentation setup",
      "Campaign trigger and workflow automation",
      "Landing page and form integration",
      "A/B testing infrastructure",
      "Reporting and attribution setup",
      "Multi-channel campaign orchestration"
    ],
    workflowSteps: [
      { step: "Marketing Process Audit", desc: "Document your current marketing workflows, tools, and campaigns to identify automation opportunities." },
      { step: "Platform Configuration", desc: "Set up and configure your marketing automation platform with segments, properties, and channel connections." },
      { step: "Workflow Building", desc: "Build automated workflows, sequences, triggers, and scoring rules for your key marketing campaigns." },
      { step: "Launch & Optimize", desc: "Activate automations, monitor performance, and optimize workflows for maximum marketing efficiency." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Education", icon: "GraduationCap" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "Heart" },
      { name: "Real Estate", icon: "Building2" }
    ],
    faqs: [
      { q: "What marketing automation platforms do you work with?", a: "We set up and configure HubSpot, ActiveCampaign, Mailchimp, Klaviyo, GoHighLevel, Marketo, and others. We recommend the best platform based on your needs and budget." },
      { q: "What types of automations do you build?", a: "We build welcome sequences, lead nurture campaigns, abandoned cart flows, re-engagement campaigns, event triggers, lead scoring rules, and any custom workflow your marketing strategy requires." },
      { q: "How long does marketing automation setup take?", a: "Initial setup takes 2-4 weeks including platform configuration, workflow building, and testing. Complex multi-channel setups may take longer." },
      { q: "Do you provide training on the automation platform?", a: "Yes. We provide comprehensive training for your marketing team on managing, monitoring, and extending the automations we build." },
      { q: "Can you automate across email, SMS, and other channels?", a: "Yes. We build multi-channel automations that coordinate messaging across email, SMS, push notifications, and retargeting for a unified customer experience." }
    ],
    relatedServices: ["workflow-automation", "ai-email-automation", "crm-setup", "crm-automation"]
  },
  "analytics-dashboard": {
    longDesc: "Our Dashboard & Analytics Setup service gives you real-time visibility into every metric that matters for your business growth. We build custom dashboards that consolidate data from all your marketing, sales, and revenue tools into clear, actionable visualizations so you can make data-driven decisions with confidence and speed.",
    problems: [
      "No centralized view of marketing, sales, and revenue performance",
      "Spending hours compiling reports from multiple platforms manually",
      "Making business decisions based on gut feeling instead of data",
      "Inability to attribute revenue back to specific marketing channels"
    ],
    solutions: [
      "Unified dashboard consolidating all critical business metrics in one view",
      "Automated reporting that delivers insights without manual compilation",
      "Revenue attribution tracking connecting marketing spend to actual revenue",
      "Real-time data visualization enabling fast, confident decision-making"
    ],
    features: [
      "Custom dashboard design and development",
      "Multi-source data integration and consolidation",
      "Real-time data syncing and visualization",
      "Revenue attribution and ROI tracking",
      "Automated report generation and delivery",
      "KPI monitoring with alert thresholds",
      "Historical trend analysis and forecasting",
      "Team and individual performance tracking"
    ],
    workflowSteps: [
      { step: "KPI & Data Source Mapping", desc: "Define your key metrics, data sources, and reporting requirements for the dashboard." },
      { step: "Data Architecture", desc: "Design the data pipeline connecting all sources with proper tracking and attribution models." },
      { step: "Dashboard Build", desc: "Build custom dashboards with real-time visualizations, filters, and drill-down capabilities." },
      { step: "Deploy & Train", desc: "Deploy dashboards, configure automated reports, set up alerts, and train your team on usage." }
    ],
    industries: [
      { name: "E-Commerce", icon: "ShoppingCart" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "Stethoscope" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Education", icon: "GraduationCap" }
    ],
    faqs: [
      { q: "What data sources can you connect to the dashboard?", a: "We connect Google Analytics, Google Ads, Meta Ads, CRM data, email platforms, payment processors, social media analytics, and virtually any tool with an API or data export capability." },
      { q: "What platform do you build dashboards on?", a: "We use Google Looker Studio, Databox, or custom-built solutions depending on your complexity needs, data volume, and budget. Each project is matched to the ideal platform." },
      { q: "How often does the dashboard data update?", a: "Most dashboards update in real-time or near-real-time depending on the data source. Some platforms refresh hourly. We configure the optimal refresh rate for each data source." },
      { q: "Can the dashboard show ROI per marketing channel?", a: "Yes. Revenue attribution is a core capability. We track leads and revenue from first touch through conversion, showing exactly which channels and campaigns drive results." },
      { q: "Do you provide automated reports?", a: "Yes. We configure automated report delivery — daily, weekly, or monthly — directly to your inbox with the metrics and insights you need to make decisions." }
    ],
    relatedServices: ["conversion-rate-optimization", "google-ads", "crm-setup", "marketing-automation-setup"]
  },
};

export type HeroMockupType = "analytics-dashboard" | "chat-interface" | "phone-ui" | "ad-performance" | "funnel-diagram" | "code-editor" | "social-feed" | "calendar-ui";
export type SectionLayoutVariant = "A" | "B" | "C";

export interface ServiceVisualTheme {
  heroMockup: HeroMockupType;
  accentFrom: string;
  accentTo: string;
  accentGlow: string;
  heroGradient: string;
  problemSolutionLayout: SectionLayoutVariant;
  featuresLayout: SectionLayoutVariant;
  workflowLayout: SectionLayoutVariant;
  faqLayout: SectionLayoutVariant;
}

export const SERVICE_VISUAL_THEMES: Record<string, ServiceVisualTheme> = {
  "ai-calling-agent": {
    heroMockup: "phone-ui",
    accentFrom: "from-blue-500", accentTo: "to-cyan-400", accentGlow: "blue-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "A", workflowLayout: "A", faqLayout: "A",
  },
  "ai-receptionist": {
    heroMockup: "phone-ui",
    accentFrom: "from-cyan-500", accentTo: "to-blue-400", accentGlow: "cyan-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "B", workflowLayout: "B", faqLayout: "B",
  },
  "ai-lead-qualification": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-indigo-500", accentTo: "to-blue-400", accentGlow: "indigo-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "A", workflowLayout: "C", faqLayout: "A",
  },
  "ai-appointment-booking": {
    heroMockup: "calendar-ui",
    accentFrom: "from-violet-500", accentTo: "to-purple-400", accentGlow: "violet-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "ai-follow-up": {
    heroMockup: "chat-interface",
    accentFrom: "from-blue-600", accentTo: "to-indigo-400", accentGlow: "blue-600",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "C",
  },
  "ai-sales-assistant": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-emerald-500", accentTo: "to-teal-400", accentGlow: "emerald-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "A",
  },
  "ai-chatbot": {
    heroMockup: "chat-interface",
    accentFrom: "from-cyan-500", accentTo: "to-teal-400", accentGlow: "cyan-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "ai-email-automation": {
    heroMockup: "chat-interface",
    accentFrom: "from-purple-500", accentTo: "to-pink-400", accentGlow: "purple-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "ai-sms-automation": {
    heroMockup: "chat-interface",
    accentFrom: "from-green-500", accentTo: "to-emerald-400", accentGlow: "green-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "C",
  },
  "crm-automation": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-purple-500", accentTo: "to-violet-400", accentGlow: "purple-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "workflow-automation": {
    heroMockup: "funnel-diagram",
    accentFrom: "from-blue-500", accentTo: "to-purple-500", accentGlow: "blue-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "google-ads": {
    heroMockup: "ad-performance",
    accentFrom: "from-green-500", accentTo: "to-emerald-400", accentGlow: "green-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "C",
  },
  "meta-ads": {
    heroMockup: "ad-performance",
    accentFrom: "from-blue-600", accentTo: "to-sky-400", accentGlow: "blue-600",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "seo-authority": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-emerald-500", accentTo: "to-green-400", accentGlow: "emerald-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "local-seo": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-teal-500", accentTo: "to-cyan-400", accentGlow: "teal-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "C",
  },
  "conversion-funnels": {
    heroMockup: "funnel-diagram",
    accentFrom: "from-amber-500", accentTo: "to-orange-400", accentGlow: "amber-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "landing-page-optimization": {
    heroMockup: "code-editor",
    accentFrom: "from-orange-500", accentTo: "to-amber-400", accentGlow: "orange-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "conversion-rate-optimization": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-lime-500", accentTo: "to-green-400", accentGlow: "lime-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "C",
  },
  "social-media-marketing": {
    heroMockup: "social-feed",
    accentFrom: "from-orange-500", accentTo: "to-pink-500", accentGlow: "orange-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "instagram-growth": {
    heroMockup: "social-feed",
    accentFrom: "from-pink-500", accentTo: "to-rose-400", accentGlow: "pink-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "facebook-growth": {
    heroMockup: "social-feed",
    accentFrom: "from-blue-600", accentTo: "to-indigo-400", accentGlow: "blue-600",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "C",
  },
  "content-writing": {
    heroMockup: "code-editor",
    accentFrom: "from-amber-500", accentTo: "to-yellow-400", accentGlow: "amber-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "branding-design": {
    heroMockup: "social-feed",
    accentFrom: "from-fuchsia-500", accentTo: "to-purple-400", accentGlow: "fuchsia-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "video-marketing": {
    heroMockup: "social-feed",
    accentFrom: "from-red-500", accentTo: "to-rose-400", accentGlow: "red-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "C",
  },
  "website-development": {
    heroMockup: "code-editor",
    accentFrom: "from-violet-500", accentTo: "to-indigo-400", accentGlow: "violet-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "landing-page-development": {
    heroMockup: "code-editor",
    accentFrom: "from-sky-500", accentTo: "to-blue-400", accentGlow: "sky-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "crm-setup": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-indigo-500", accentTo: "to-violet-400", accentGlow: "indigo-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "B", workflowLayout: "C", faqLayout: "C",
  },
  "saas-integrations": {
    heroMockup: "funnel-diagram",
    accentFrom: "from-purple-500", accentTo: "to-blue-400", accentGlow: "purple-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "A", featuresLayout: "C", workflowLayout: "A", faqLayout: "B",
  },
  "marketing-automation-setup": {
    heroMockup: "funnel-diagram",
    accentFrom: "from-teal-500", accentTo: "to-blue-400", accentGlow: "teal-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "B", featuresLayout: "A", workflowLayout: "B", faqLayout: "A",
  },
  "analytics-dashboard": {
    heroMockup: "analytics-dashboard",
    accentFrom: "from-blue-500", accentTo: "to-purple-500", accentGlow: "blue-500",
    heroGradient: "from-gray-50/80 via-blue-50/30 to-white",
    problemSolutionLayout: "C", featuresLayout: "C", workflowLayout: "C", faqLayout: "C",
  },
};
