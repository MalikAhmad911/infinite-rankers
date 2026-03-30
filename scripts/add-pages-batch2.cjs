const fs = require('fs');

function page(slug, type, seoTitle, seoDesc, seoKw, heroData, painData, aiData, pipeData, resData, featData, ecoData, tests, faqs, ctaData, related, relSvc, comLnks) {
  return { slug, type, seoTitle, seoDescription: seoDesc, seoKeywords: seoKw, canonical: `https://infiniterankers.io/${slug}`, hero: heroData, painPoints: painData, aiSystem: aiData, pipeline: pipeData, results: resData, features: featData, ecosystem: ecoData, testimonials: tests, faqs, cta: ctaData, relatedLandingPages: related, relatedServices: relSvc, comLinks: comLnks };
}

const COM = [
  { label: "Google Ads & PPC", url: "https://infiniterankers.com/google-ads-campaign-ppc-campaign/" },
  { label: "SEO Services", url: "https://infiniterankers.com/seo-services/" },
  { label: "Contact Us", url: "https://infiniterankers.com/contact-us/" }
];

const LOCAL_COM = [
  { label: "Local SEO", url: "https://infiniterankers.com/local-seo/" },
  { label: "Google Ads & PPC", url: "https://infiniterankers.com/google-ads-campaign-ppc-campaign/" },
  { label: "Contact Us", url: "https://infiniterankers.com/contact-us/" }
];

const NEW_PAGES = [
  page(
    "virtual-ai-receptionist", "service",
    "Virtual AI Receptionist | Smart Front Desk Automation | Infinite Rankers",
    "Virtual AI receptionist answers calls, qualifies leads, and books appointments 24/7. Costs 80% less than a human receptionist. Free demo for your business.",
    "virtual ai receptionist, ai virtual receptionist, virtual receptionist ai, ai front desk, automated receptionist",
    {
      badge: "Your 24/7 Virtual Receptionist — Never Off Sick, Never Late",
      title: "Virtual AI Receptionist That",
      titleHighlight: "Never Misses a Caller",
      subtitle: "A virtual AI receptionist handles every call, every chat, and every inquiry — greeting callers professionally, qualifying them intelligently, and booking appointments automatically at 80% less cost than a human hire.",
      stats: [
        { value: "80%", label: "Less Than Human Hire" },
        { value: "100%", label: "Calls Answered" },
        { value: "24/7", label: "Availability" },
        { value: "4.9★", label: "Avg Caller Rating" }
      ]
    },
    {
      title: "The Real Cost of Your Current Front Desk Setup",
      subtitle: "Whether you have staff or nobody answering — both scenarios are costing you revenue",
      points: [
        { title: "Human Receptionists Are Expensive", description: "A full-time receptionist costs $38K–$55K per year in salary alone, plus benefits, training, and coverage gaps. AI does the same job for a fraction of the cost.", icon: "DollarSign" },
        { title: "Calls Missed During Busy Hours", description: "Even the best receptionist handles one call at a time. Peak-hour overflow sends leads straight to voicemail and competitors.", icon: "PhoneOff" },
        { title: "Inconsistent First Impressions", description: "Staff quality varies by day and mood. AI delivers a consistently professional, warm greeting every single call — no bad days.", icon: "ThumbsDown" },
        { title: "Zero After-Hours Coverage", description: "At 6pm your receptionist goes home. At 6pm your competitors' AI keeps answering. Every after-hours call you miss is revenue walking out.", icon: "Moon" }
      ]
    },
    {
      title: "A Virtual Receptionist Smarter Than the Real Thing",
      subtitle: "Trained on your business — not a generic script",
      description: "Our virtual AI receptionist is trained specifically on your business — your services, pricing, team, FAQs, scheduling rules, and brand voice. Every caller receives accurate, professional responses that reflect your business perfectly.",
      capabilities: [
        { title: "Custom Greeting & Brand Voice", description: "Greets callers by your business name with a warm, professional tone that matches your brand identity.", icon: "Mic" },
        { title: "Intelligent Call Routing", description: "Routes calls to the right team member or department based on the caller's purpose — instantly and accurately.", icon: "GitBranch" },
        { title: "Live Appointment Booking", description: "Books directly into your calendar in real time during the call — no callback, no hold, no friction.", icon: "CalendarCheck" },
        { title: "CRM & Notes Integration", description: "Every caller logged with name, number, purpose, and action taken — automatically in your CRM.", icon: "Database" }
      ]
    },
    {
      title: "From Ringing Phone to Happy Customer in Seconds",
      subtitle: "A seamless caller experience that converts at every touchpoint",
      steps: [
        { step: "1", title: "Call Answered Instantly", description: "Every call answered within 2 rings with a professional greeting customized to your business name and brand.", icon: "Phone" },
        { step: "2", title: "Purpose Identified", description: "AI asks the right questions to understand why they're calling — new patient, existing customer, emergency, general inquiry.", icon: "HelpCircle" },
        { step: "3", title: "Need Fulfilled", description: "Appointment booked, question answered, message taken, or call transferred — the caller's need is handled completely.", icon: "CheckCircle" },
        { step: "4", title: "Follow-Up Triggered", description: "Confirmation texts, calendar invites, and CRM entries fire automatically after every call interaction.", icon: "Send" }
      ]
    },
    {
      title: "Businesses That Replaced Human Receptionists With AI",
      subtitle: "Better service, lower cost, higher revenue",
      cases: [
        { business: "Radiant Skin Clinic", industry: "Med Spa / Aesthetics", metrics: [{ value: "127%", label: "Consultation Bookings" }, { value: "$34K", label: "Monthly Revenue Added" }, { value: "4.9★", label: "Google Rating" }], quote: "We cut our receptionist costs in half and doubled our bookings. The AI is more professional than any human we've hired and never has an off day." },
        { business: "Bluestone Chiropractic", industry: "Healthcare", metrics: [{ value: "100%", label: "Calls Answered" }, { value: "89%", label: "Booking Rate" }, { value: "$21K", label: "Revenue Month 2" }], quote: "Patients call expecting immediate help. Our AI delivers — books their appointment, answers their questions, and sends confirmation texts. New patient volume up 89%." },
        { business: "Coastal Realty Group", industry: "Real Estate", metrics: [{ value: "3.1x", label: "Lead Calls Captured" }, { value: "$680K", label: "Closed Deals" }, { value: "18s", label: "Avg Answer Time" }], quote: "Real estate moves fast. Our AI answers every call in seconds and books showings on the spot. We captured 3x more buyer leads than before." }
      ]
    },
    {
      title: "Everything Your Virtual AI Receptionist Does",
      subtitle: "A complete front-desk operation — without the overhead",
      items: [
        { title: "Inbound Call Handling", description: "Professional greeting, purpose identification, and resolution on every single inbound call — 24/7.", icon: "Phone" },
        { title: "Appointment Scheduling", description: "Real-time calendar booking during the call with automatic confirmation texts sent immediately.", icon: "Calendar" },
        { title: "Message Taking & Routing", description: "Detailed messages taken and routed to the right team member with urgency flags and context.", icon: "Mail" },
        { title: "FAQ & Information Delivery", description: "Trained on your services, hours, pricing, and policies to answer common questions accurately.", icon: "HelpCircle" },
        { title: "Spam & Robocall Filtering", description: "AI detects and blocks spam calls — only real inquiries reach your team's attention.", icon: "Shield" },
        { title: "Call Summaries & Reporting", description: "Daily summary of all calls handled — bookings made, messages left, and team alerts triggered.", icon: "FileText" }
      ]
    },
    {
      title: "Virtual Receptionist + Complete Revenue Automation",
      subtitle: "Your front desk is the entry point to a complete AI revenue system",
      description: "Every call your virtual AI receptionist handles feeds into a complete automation chain — CRM entry, follow-up sequences, appointment reminders, and review requests — creating a seamless customer journey from first call to loyal client.",
      ioFeatures: [
        { title: "Virtual AI Receptionist", description: "24/7 professional call answering, booking, and message handling." },
        { title: "CRM Auto-Entry", description: "Every caller's details and call summary logged automatically." },
        { title: "Follow-Up Automation", description: "Automated sequences after every call to nurture leads to conversion." }
      ],
      comFeatures: [
        { title: "Local SEO", description: "Drive more inbound calls through local Google search domination." },
        { title: "Google Ads", description: "Target ready-to-call prospects searching for your service now." },
        { title: "Reputation Management", description: "Turn every satisfied caller into a 5-star Google review automatically." }
      ],
      comLinks: LOCAL_COM
    },
    [
      { name: "Tanya Rhodes", role: "Owner", company: "Radiant Skin Clinic", quote: "I was paying $42K a year for a receptionist who missed calls and gave inconsistent service. The AI costs a fraction, never misses a call, and books more consultations. Should have done this years ago.", rating: 5 },
      { name: "Dr. Paul Erikson", role: "Chiropractor", company: "Bluestone Chiropractic", quote: "Patient experience starts the moment they call. Our AI creates a perfect first impression every time — professional, warm, and efficient. New patients up 89% in 60 days.", rating: 5 },
      { name: "Christine Blake", role: "Broker", company: "Coastal Realty Group", quote: "In real estate, you lose a buyer the second they go to voicemail. AI answers in 18 seconds and books showings on the spot. We captured $680K in deals that would have gone elsewhere.", rating: 5 }
    ],
    [
      { q: "How is a virtual AI receptionist different from a regular AI receptionist?", a: "A virtual AI receptionist operates digitally across phone, SMS, web chat, and email — making it more versatile than a single-channel AI. It's a complete virtual front desk, not just a call answering service." },
      { q: "Can the AI handle multiple calls at the same time?", a: "Yes. Unlike a human receptionist who handles one call at a time, the AI handles unlimited simultaneous calls — so you never send a caller to voicemail during busy hours." },
      { q: "What if a caller is upset or frustrated?", a: "The AI is trained to de-escalate professionally, acknowledge the caller's concern, and route to a human team member when appropriate. It handles difficult callers better than most humans." },
      { q: "Will my existing clients know they're talking to AI?", a: "Most callers don't notice the difference and rate the experience highly. The AI always discloses it's automated if directly asked, maintaining transparency while delivering an excellent experience." },
      { q: "How do I monitor what the AI is doing?", a: "Through a real-time dashboard showing every call handled, every booking made, and every message taken. Daily email summaries and instant alerts keep you fully informed." }
    ],
    { title: "Deploy Your Virtual AI Receptionist Today", subtitle: "Stop paying for missed calls and inconsistent service. Your virtual AI receptionist answers every call, books every appointment, and costs 80% less than a human hire.", buttonText: "Get My Virtual AI Receptionist" },
    ["ai-receptionist", "ai-answering-service", "ai-voice-agent", "missed-call-text-back"],
    ["ai-calling-agent", "ai-receptionist", "crm-automation"],
    LOCAL_COM
  ),
  page(
    "ai-call-answering", "service",
    "AI Call Answering for Business | 24/7 Inbound Call Handling | Infinite Rankers",
    "AI call answering that handles every inbound business call automatically — 24/7, professionally, and at a fraction of staff cost. Book 50% more appointments from the same call volume.",
    "ai call answering, ai call handler, automated call answering, ai inbound calls, automatic call answering",
    {
      badge: "Every Call Answered — Zero Calls to Voicemail",
      title: "AI Call Answering That",
      titleHighlight: "Converts Every Caller",
      subtitle: "Stop losing revenue to voicemail. AI call answering handles every inbound call automatically — qualifying the caller, answering their questions, booking their appointment, and logging everything to your CRM.",
      stats: [
        { value: "100%", label: "Calls Answered" },
        { value: "50%", label: "More Appointments Booked" },
        { value: "24/7", label: "Coverage" },
        { value: "2 Rings", label: "Avg Answer Time" }
      ]
    },
    {
      title: "Every Unanswered Call Is Money Left on the Table",
      subtitle: "The math is simple — missed calls equal missed revenue",
      points: [
        { title: "42% of Calls Go Unanswered", description: "Industry data shows the average business misses 42% of inbound calls during business hours. Each one is a lead choosing your competitor instead.", icon: "PhoneOff" },
        { title: "Voicemail Has a 20% Return Rate", description: "Only 1 in 5 callers who leave a voicemail receive a callback. The other 80% have already moved on to the next business on their list.", icon: "PhoneOff" },
        { title: "Peak-Hour Overflow", description: "Your busiest hours are when most calls come in — and when staff is least available to answer. AI handles unlimited simultaneous calls with no overflow.", icon: "Activity" },
        { title: "After-Hours Revenue Loss", description: "Prospects call during lunch breaks, evenings, and weekends. Without AI, you're only accessible during the hours your competitors are too.", icon: "Moon" }
      ]
    },
    {
      title: "AI Call Answering Built for Business Revenue",
      subtitle: "Every call handled like your best team member answered",
      description: "Our AI call answering system is trained on your business, scripted for your common caller types, and integrated with your calendar and CRM. Every caller gets a professional, helpful experience that ends with their question answered or appointment booked.",
      capabilities: [
        { title: "Instant Answer — Every Time", description: "Answers within 2 rings regardless of call volume or time of day. No hold queues, no busy signals, no voicemail.", icon: "Zap" },
        { title: "Intent Recognition", description: "AI identifies the caller's purpose in the first 10 seconds and routes them to the optimal resolution path.", icon: "Brain" },
        { title: "Booking Integration", description: "Real-time calendar access allows AI to check availability and book appointments during the call — confirmed before hanging up.", icon: "Calendar" },
        { title: "Warm Transfer", description: "High-priority calls transferred instantly to a live team member with full context and caller summary.", icon: "PhoneForwarded" }
      ]
    },
    {
      title: "How AI Call Answering Works in Practice",
      subtitle: "From first ring to CRM entry in under 3 minutes",
      steps: [
        { step: "1", title: "Call Answered", description: "AI picks up within 2 rings with a customized greeting that matches your brand name and industry.", icon: "Phone" },
        { step: "2", title: "Caller Qualified", description: "Smart questions determine the caller's need, urgency, and service type — in natural conversation, not a phone tree.", icon: "Filter" },
        { step: "3", title: "Action Completed", description: "Appointment booked, question answered, information provided, or transfer initiated — based on caller need.", icon: "CheckCircle" },
        { step: "4", title: "Data Logged", description: "Caller name, number, purpose, and outcome automatically entered in your CRM with follow-up tasks created.", icon: "Database" }
      ]
    },
    {
      title: "What Businesses Gain When Every Call Gets Answered",
      subtitle: "The revenue impact of zero missed calls",
      cases: [
        { business: "Signature Roofing", industry: "Roofing / Construction", metrics: [{ value: "3.7x", label: "More Estimates Booked" }, { value: "$48K", label: "Monthly Revenue Added" }, { value: "0", label: "Calls to Voicemail" }], quote: "Storm season used to mean missed calls and lost jobs. AI answers everything instantly — we booked 3.7x more storm-damage estimates last spring and revenue jumped $48K per month." },
        { business: "Renewal Med Spa", industry: "Aesthetics", metrics: [{ value: "91%", label: "Call-to-Booking Rate" }, { value: "$26K", label: "New Revenue Month 1" }, { value: "4.8★", label: "Caller Satisfaction" }], quote: "91% of callers who reached our AI booked an appointment. Before, that number was maybe 40% because staff was often busy. Remarkable difference." },
        { business: "Express Legal Services", industry: "Law Firm", metrics: [{ value: "100%", label: "After-Hours Calls Captured" }, { value: "78%", label: "More Consultations" }, { value: "$82K", label: "Case Revenue Gained" }], quote: "Legal emergencies don't happen at 10am. Our AI captures every after-hours call, qualifies urgency, and books consultations. We were leaving $82K per quarter on the table before this." }
      ]
    },
    {
      title: "Complete AI Call Answering Feature Set",
      subtitle: "Everything you need to capture 100% of your inbound calls",
      items: [
        { title: "Unlimited Call Capacity", description: "Handle any call volume simultaneously — 1 call or 100 at the same time — no overflow, no busy signals.", icon: "Infinity" },
        { title: "Business-Specific Training", description: "AI trained on your exact services, pricing, team availability, and common questions before going live.", icon: "Cpu" },
        { title: "After-Hours Handling", description: "Different scripts for business hours vs. after-hours vs. weekends — always appropriate and professional.", icon: "Clock" },
        { title: "Multilingual Capability", description: "AI answers in English and Spanish automatically, with additional languages available for your market.", icon: "Globe" },
        { title: "Instant Notifications", description: "Real-time SMS and email alerts when important calls come in — large opportunities, urgent issues, or VIP clients.", icon: "Bell" },
        { title: "Call Analytics", description: "Track answer rate, booking conversion, caller intent distribution, and revenue attribution from call traffic.", icon: "BarChart2" }
      ]
    },
    {
      title: "AI Call Answering + Complete Lead Conversion System",
      subtitle: "Answered calls are the beginning — conversion is the full system",
      description: "AI call answering captures every lead. Paired with follow-up automation, CRM pipeline management, and appointment reminders, it creates a full conversion system that turns every caller into a booked client.",
      ioFeatures: [
        { title: "AI Call Answering", description: "100% call answer rate with qualification, booking, and CRM logging." },
        { title: "Follow-Up Automation", description: "Post-call sequences that convert inquiries into confirmed appointments." },
        { title: "CRM Integration", description: "Every call logged with full context and next-step automation triggered." }
      ],
      comFeatures: [
        { title: "Local SEO", description: "Drive more inbound call traffic from local Google searches." },
        { title: "Google Ads", description: "Call-focused ad campaigns that send high-intent prospects straight to your AI." },
        { title: "Call Tracking", description: "Attribution analytics showing which marketing channels drive the highest-value calls." }
      ],
      comLinks: LOCAL_COM
    },
    [
      { name: "Dave Thornton", role: "Owner", company: "Signature Roofing", quote: "I never realized how many calls I was missing until AI started answering them all. We recovered 3.7x more jobs and $48K more per month. My competition has no idea what hit them.", rating: 5 },
      { name: "Victoria Lane", role: "Director", company: "Renewal Med Spa", quote: "91% call-to-booking rate sounds impossible but that's what we achieved. The AI handles callers better than most humans — patient, professional, and knowledgeable about our services.", rating: 5 },
      { name: "Richard Avery", role: "Managing Attorney", company: "Express Legal Services", quote: "People in legal trouble call at all hours. We were losing cases worth tens of thousands because nobody answered at 9pm. AI captures every call and we've gained $82K in quarterly revenue.", rating: 5 }
    ],
    [
      { q: "How does AI know what to say when it answers my calls?", a: "Before going live, we train the AI on your business — your services, pricing, team, hours, FAQs, and booking process. It's not a generic script; it knows your business specifically." },
      { q: "Can AI handle calls for multiple locations?", a: "Yes. AI can answer calls for multiple locations with different scripts, calendars, and routing rules for each. Multi-location businesses are a specialty." },
      { q: "What happens to very complex calls that AI can't fully handle?", a: "AI handles 85–95% of calls completely. For complex situations, it captures full details and routes to your team with a complete summary — you only deal with calls that truly need human expertise." },
      { q: "How is this different from a traditional call center?", a: "Call centers use human agents who don't know your business, cost $15–$25/hour per agent, and only work during staffed hours. AI knows your business perfectly, costs a flat monthly fee, and works 24/7." },
      { q: "Can the AI follow up with callers who didn't book during the call?", a: "Yes. Callers who don't book can automatically receive an SMS or email follow-up sequence that re-engages them and drives them back to book — typically within 24 hours." }
    ],
    { title: "Answer Every Call — Starting This Week", subtitle: "Stop sending revenue to voicemail. AI call answering captures every inbound call, books every appointment, and costs less than one missed deal per month.", buttonText: "Set Up AI Call Answering" },
    ["ai-voice-agent", "ai-answering-service", "ai-receptionist", "missed-call-text-back"],
    ["ai-calling-agent", "ai-receptionist", "crm-automation"],
    LOCAL_COM
  ),
  page(
    "automated-lead-generation", "service",
    "Automated Lead Generation | AI That Captures Leads 24/7 | Infinite Rankers",
    "Automated lead generation systems that capture, qualify, and route high-intent leads 24/7. Clients see 148% more qualified leads in 90 days. Free lead audit today.",
    "automated lead generation, ai lead generation, lead generation automation, automated lead capture, ai lead capture system",
    {
      badge: "148% More Qualified Leads — Without More Ad Spend",
      title: "Automated Lead Generation That",
      titleHighlight: "Never Stops Working",
      subtitle: "Manual lead generation is slow, expensive, and inconsistent. AI-powered automated lead generation captures every prospect across every channel — website, phone, social, ads — qualifies them instantly, and routes them to your pipeline 24/7.",
      stats: [
        { value: "148%", label: "Avg Lead Increase" },
        { value: "60s", label: "Lead Response Time" },
        { value: "24/7", label: "Lead Capture Active" },
        { value: "3.4x", label: "Avg ROI in 90 Days" }
      ]
    },
    {
      title: "Why Manual Lead Generation Fails at Scale",
      subtitle: "The harder you try manually, the more leads still fall through the cracks",
      points: [
        { title: "Leads Arrive and Nobody's Ready", description: "40% of high-intent prospects reach out after 5pm. Without automation, they get silence and book with your competitor who responded instantly.", icon: "Moon" },
        { title: "Follow-Up Is Inconsistent", description: "Sales teams follow up with some leads and forget others. Studies show 80% of deals require 5+ touches — most teams give up after 2.", icon: "AlertCircle" },
        { title: "Unqualified Leads Clog the Pipeline", description: "Without AI qualification, your sales team spends half their time on leads with no budget, wrong fit, or zero intent — burning time and morale.", icon: "Filter" },
        { title: "No Multi-Channel Capture", description: "Leads come from Google, Meta, organic, referrals, and phone simultaneously. Manual systems miss leads from channels that aren't actively monitored.", icon: "Layers" }
      ]
    },
    {
      title: "Automated Lead Generation That Runs While You Sleep",
      subtitle: "Every lead captured, qualified, and routed — automatically",
      description: "We build and deploy end-to-end automated lead generation systems that capture prospects from every channel, qualify them on 15+ criteria, and route only sales-ready leads to your team — with follow-up sequences for leads not yet ready to buy.",
      capabilities: [
        { title: "Omnichannel Lead Capture", description: "Capture leads from website forms, live chat, Google ads, Meta ads, phone calls, SMS, and social media — all in one unified system.", icon: "Layers" },
        { title: "AI Qualification Engine", description: "Every lead scored on budget, timeline, intent, and fit within minutes of first contact — routing hot leads to sales and nurturing warm leads automatically.", icon: "Filter" },
        { title: "Instant Lead Response", description: "AI engages every new lead within 60 seconds via their preferred channel — before your competitors even know the lead exists.", icon: "Zap" },
        { title: "Multi-Touch Nurture", description: "Leads not ready to buy enter automated nurture sequences — personalized emails, SMS, and calls over 30–90 days until they're sales-ready.", icon: "Send" }
      ]
    },
    {
      title: "Your Automated Lead Generation System in 4 Steps",
      subtitle: "From zero to fully automated lead flow in 14 days",
      steps: [
        { step: "1", title: "Lead Flow Audit", description: "We audit every channel where leads come from — or should — and identify where prospects are currently being lost.", icon: "Search" },
        { step: "2", title: "Capture System Build", description: "AI lead capture is deployed on your website, phone system, and ad channels with optimized forms, chat, and call routing.", icon: "Cpu" },
        { step: "3", title: "Qualification & Routing", description: "Automated qualification workflows score every lead and route them to the right team member or nurture sequence instantly.", icon: "GitBranch" },
        { step: "4", title: "Optimize & Scale", description: "Monthly analysis of lead quality, source ROI, and conversion rates drives continual improvement in volume and quality.", icon: "TrendingUp" }
      ]
    },
    {
      title: "Automated Lead Generation Results",
      subtitle: "What 148% more leads actually does to your revenue",
      cases: [
        { business: "GreenLeaf Landscaping", industry: "Landscaping / Home Services", metrics: [{ value: "211%", label: "More Qualified Leads" }, { value: "$62K", label: "Monthly Revenue Added" }, { value: "8min", label: "Avg Lead Response" }], quote: "We were generating 40 leads per month manually. Automated lead generation brought that to 124 qualified leads — with no increase in ad spend. Revenue more than doubled." },
        { business: "Pacific Coast Implant Center", industry: "Dental Implants", metrics: [{ value: "167%", label: "New Patient Leads" }, { value: "$41K", label: "Revenue in 60 Days" }, { value: "91%", label: "Lead Qualification Rate" }], quote: "Our automated system captures every inquiry instantly and qualifies them before my team ever gets involved. Results in 60 days were extraordinary." },
        { business: "Summit B2B Partners", industry: "B2B Sales", metrics: [{ value: "3.9x", label: "Outbound Lead Volume" }, { value: "44%", label: "Meeting Book Rate" }, { value: "$1.8M", label: "Pipeline Generated" }], quote: "B2B lead gen was our biggest bottleneck. Automated prospecting added $1.8M to our pipeline in 6 months. We now have more leads than we can humanly handle." }
      ]
    },
    {
      title: "Complete Automated Lead Generation System",
      subtitle: "Every tool to capture, qualify, and convert more leads on autopilot",
      items: [
        { title: "Website Lead Capture", description: "AI-optimized forms, exit-intent popups, and live chat that convert traffic into leads at 2–3x the industry average.", icon: "Globe" },
        { title: "AI Chat Qualification", description: "24/7 website chat that qualifies leads with smart questions before routing to your sales team.", icon: "MessageSquare" },
        { title: "Phone Lead Capture", description: "Every inbound call captured, qualified, and logged — with instant follow-up if call isn't answered.", icon: "Phone" },
        { title: "Lead Scoring Dashboard", description: "Real-time view of all leads ranked by quality, source, intent score, and recommended next action.", icon: "BarChart2" },
        { title: "CRM Auto-Populate", description: "Every new lead creates a contact, deal, and task in your CRM automatically — zero manual data entry.", icon: "Database" },
        { title: "Source Attribution", description: "Track exactly which channels generate your best leads by volume, quality, and revenue conversion.", icon: "PieChart" }
      ]
    },
    {
      title: "Automated Lead Generation + Full Revenue System",
      subtitle: "More leads feed into a system designed to convert every one of them",
      description: "Automated lead generation fills your pipeline. Pair it with AI appointment setting, pipeline automation, and follow-up sequences for a complete system that turns every captured lead into booked revenue.",
      ioFeatures: [
        { title: "Automated Lead Generation", description: "24/7 lead capture across all channels with instant qualification." },
        { title: "AI Appointment Setting", description: "Qualified leads booked into your calendar automatically within minutes of capture." },
        { title: "Pipeline Automation", description: "Every lead managed through your CRM automatically — from first touch to closed deal." }
      ],
      comFeatures: [
        { title: "SEO Lead Generation", description: "Organic lead flow from high-intent Google searches targeting your ideal clients." },
        { title: "Google & Meta Ads", description: "Paid lead generation campaigns optimized for your specific audience and service." },
        { title: "Landing Page Design", description: "High-converting landing pages designed to maximize lead capture from every traffic source." }
      ],
      comLinks: COM
    },
    [
      { name: "Maria Torres", role: "Owner", company: "GreenLeaf Landscaping", quote: "I doubled my ad budget last year and got 10% more leads. Then I added automated lead generation and tripled leads from the same spend. The system captures leads I never knew I was losing.", rating: 5 },
      { name: "Dr. James Whitfield", role: "Practice Owner", company: "Pacific Coast Implant Center", quote: "Dental implants are high-consideration purchases. Our AI nurtures leads for months until they're ready — and our implant revenue increased $41K in just the first 60 days.", rating: 5 },
      { name: "Kevin Park", role: "Managing Director", company: "Summit B2B Partners", quote: "B2B lead gen is expensive and slow manually. Automated prospecting changed the economics completely — $1.8M pipeline generated and our cost per qualified lead dropped 70%.", rating: 5 }
    ],
    [
      { q: "How is automated lead generation different from just running ads?", a: "Ads drive traffic. Automated lead generation captures, qualifies, responds to, and nurtures that traffic into sales-ready prospects. Without automation, most of your ad spend generates leads that slip through the cracks." },
      { q: "What channels does automated lead generation work across?", a: "Website (forms, chat, popups), Google Ads, Meta Ads, phone/SMS, email, LinkedIn, and organic search. We capture leads from every channel into one unified pipeline." },
      { q: "How fast do leads get a response?", a: "Within 60 seconds of any lead action — form submit, chat message, ad click, or call. Speed to lead is the single biggest driver of conversion rates." },
      { q: "Can the system qualify leads before they reach my sales team?", a: "Yes — that's a core function. AI qualifies every lead on budget, timeline, service fit, and intent. Only leads meeting your minimum criteria are routed to your team. The rest enter nurture sequences." },
      { q: "How long until I see more leads coming in?", a: "Lead capture improvements show results within 24–48 hours of deployment. Full optimization typically shows 30–60% lead increases within the first 30 days." }
    ],
    { title: "Stop Letting Leads Slip Through the Cracks", subtitle: "Free lead generation audit showing exactly where you're losing prospects today — with a custom AI automation plan to capture 148% more leads in 90 days.", buttonText: "Get My Free Lead Audit" },
    ["lead-capture-automation", "ai-lead-generation-usa", "ai-for-sales", "pipeline-automation"],
    ["ai-calling-agent", "ai-receptionist", "crm-automation"],
    COM
  ),
  page(
    "ai-crm-software", "service",
    "AI CRM Software | Self-Managing CRM for Revenue Teams | Infinite Rankers",
    "AI CRM software that updates itself, follows up automatically, and scores every deal for your team. Stop doing CRM admin — start closing more deals. Free CRM audit.",
    "ai crm software, ai crm, ai powered crm, crm with ai, intelligent crm software",
    {
      badge: "The CRM That Runs Itself — Zero Manual Updates",
      title: "AI CRM Software That",
      titleHighlight: "Manages Itself",
      subtitle: "Your CRM should work for you — not the other way around. AI CRM software automatically updates deals, triggers follow-ups, scores prospects, and gives your team real-time intelligence on exactly where to focus for maximum revenue.",
      stats: [
        { value: "0", label: "Manual CRM Updates" },
        { value: "40%", label: "More Deals Closed" },
        { value: "94%", label: "Data Accuracy" },
        { value: "68%", label: "Faster Sales Cycles" }
      ]
    },
    {
      title: "Why Your CRM Isn't Delivering on Its Promise",
      subtitle: "Most CRMs are expensive databases that nobody keeps updated",
      points: [
        { title: "Nobody Updates the CRM", description: "Sales reps avoid CRM data entry because it's tedious and takes time away from selling. The result: stale data, invisible pipeline, and missed follow-ups.", icon: "Database" },
        { title: "Deals Die in Silence", description: "Hot leads go cold and nobody notices until the deal is gone. Without AI monitoring, there's no alert system for at-risk opportunities.", icon: "AlertCircle" },
        { title: "No Deal Intelligence", description: "Standard CRMs show you data. AI CRM tells you what to do with it — which deals to prioritize, which to accelerate, which to write off.", icon: "Brain" },
        { title: "Follow-Up Gaps Kill Revenue", description: "The average deal requires 8 follow-up touches. Without automation, most reps give up after 2 — losing 80% of potential deals.", icon: "XCircle" }
      ]
    },
    {
      title: "A CRM That Works As Hard As Your Best Salesperson",
      subtitle: "Self-managing, self-updating, and intelligently guiding every deal to close",
      description: "We implement and customize AI-powered CRM systems that update automatically from call, email, and meeting data — score every deal with AI intelligence — and trigger the right actions at the right time, keeping your pipeline healthy without manual intervention.",
      capabilities: [
        { title: "Auto-Update From Interactions", description: "Every email, call, and meeting updates the CRM automatically — deal stage, contact info, and next steps logged without human input.", icon: "RefreshCw" },
        { title: "AI Deal Scoring", description: "Every deal scored on 40+ intent and engagement signals — giving your team a daily ranked priority list of where to focus first.", icon: "Target" },
        { title: "Automated Follow-Up Triggers", description: "AI detects when a deal has gone dormant and automatically triggers follow-up sequences — email, SMS, or call task — to revive it.", icon: "Zap" },
        { title: "Revenue Forecasting", description: "AI analyzes deal velocity, stage probability, and historical patterns to generate accurate weekly revenue forecasts.", icon: "TrendingUp" }
      ]
    },
    {
      title: "CRM Implementation + AI Layer in 2 Weeks",
      subtitle: "A better CRM experience — or supercharging your existing one",
      steps: [
        { step: "1", title: "CRM Audit", description: "We audit your existing CRM setup — what's being used, what's ignored, where deals are stalling, and what data is missing or inaccurate.", icon: "Search" },
        { step: "2", title: "AI Configuration", description: "Automation triggers, scoring models, follow-up sequences, and reporting dashboards configured for your sales process.", icon: "Cpu" },
        { step: "3", title: "Integration Setup", description: "AI connects your CRM to email, calendar, phone, and marketing platforms — auto-capturing interaction data from every touchpoint.", icon: "Plug" },
        { step: "4", title: "Team Onboarding", description: "2-hour team training on the new AI CRM experience. Reps immediately spend less time on admin and more time selling.", icon: "Users" }
      ]
    },
    {
      title: "Revenue Teams That Upgraded to AI CRM",
      subtitle: "What happens when your CRM stops being a chore and starts being an asset",
      cases: [
        { business: "Apex Technology Solutions", industry: "B2B SaaS / Tech", metrics: [{ value: "52%", label: "More Deals Closed" }, { value: "100%", label: "CRM Data Accuracy" }, { value: "$1.9M", label: "Additional ARR Y1" }], quote: "Our sales team was entering maybe 40% of their activities in the CRM. AI fixed that — automatically capturing everything. Pipeline visibility went to 100% and we closed 52% more deals." },
        { business: "Meridian Mortgage Group", industry: "Mortgage / Finance", metrics: [{ value: "3.1x", label: "More Loans in Pipeline" }, { value: "67%", label: "Faster Processing" }, { value: "$4.2M", label: "Additional Loan Volume" }], quote: "Mortgage pipelines are incredibly complex. AI CRM tracks every condition, sends follow-ups at the right time, and flags stalled files instantly. We tripled pipeline volume with the same team." },
        { business: "Envoy Staffing Partners", industry: "Staffing / HR", metrics: [{ value: "44%", label: "Faster Placements" }, { value: "89%", label: "Client Retention Rate" }, { value: "$620K", label: "Revenue Recovered" }], quote: "Staffing is all about relationship speed. AI CRM tracks every touchpoint and alerts us when relationships need attention. Placements accelerated 44% in the first quarter." }
      ]
    },
    {
      title: "AI CRM Software Full Feature Set",
      subtitle: "Every capability your revenue team needs to close more deals",
      items: [
        { title: "Automatic Activity Logging", description: "Calls, emails, and meetings logged automatically with AI-generated summaries — zero manual CRM entry ever.", icon: "Activity" },
        { title: "AI Lead & Deal Scoring", description: "Every contact and deal scored on engagement, intent, and fit — so your team always knows where to focus next.", icon: "Target" },
        { title: "Automated Follow-Up Sequences", description: "Multi-touch follow-up triggered automatically at every deal stage — emails, SMS, and call reminders.", icon: "Send" },
        { title: "Deal Health Monitoring", description: "Real-time alerts when deals show risk indicators — no activity, declining engagement, or stalled stage progression.", icon: "AlertTriangle" },
        { title: "Revenue Pipeline Analytics", description: "Accurate pipeline reports, conversion rates, deal velocity metrics, and revenue forecasts updated in real-time.", icon: "BarChart2" },
        { title: "Custom Workflow Automation", description: "Build any CRM workflow — onboarding, renewal, upsell, or recovery — that triggers automatically based on deal events.", icon: "Cpu" }
      ]
    },
    {
      title: "AI CRM + Complete Revenue Automation",
      subtitle: "Your CRM is the hub — AI makes every connection work better",
      description: "AI CRM software is most powerful as part of a complete revenue system — connected to lead capture, calling agents, email automation, and analytics. Every tool talking to every other tool, with your CRM at the center.",
      ioFeatures: [
        { title: "AI CRM Software", description: "Self-managing CRM with automatic updates, scoring, and follow-up triggers." },
        { title: "Lead Capture Integration", description: "Every new lead enters your CRM automatically from every channel." },
        { title: "AI Sales Agents", description: "Calling and email agents that log all interactions directly in your CRM." }
      ],
      comFeatures: [
        { title: "Marketing Automation", description: "CRM-connected campaigns that trigger based on deal stage and contact behavior." },
        { title: "Lead Generation", description: "SEO and paid ad leads flowing directly into your AI CRM pipeline." },
        { title: "Analytics Integration", description: "Complete visibility from first marketing touch to closed revenue in one dashboard." }
      ],
      comLinks: COM
    },
    [
      { name: "Marcus Chen", role: "CRO", company: "Apex Technology Solutions", quote: "Our CRM was a $30K/year liability. Nobody trusted the data, nobody updated it, and deals fell through constantly. AI CRM fixed everything — 100% accuracy, zero admin, 52% more deals closed.", rating: 5 },
      { name: "Jennifer Walsh", role: "VP Operations", company: "Meridian Mortgage Group", quote: "Mortgage files have hundreds of moving parts. AI CRM tracks all of it and flags problems before they become deal killers. $4.2M more loan volume in year one.", rating: 5 },
      { name: "Carlos Mendez", role: "Managing Director", company: "Envoy Staffing Partners", quote: "Staffing is a speed game. AI CRM gives us real-time intelligence on every relationship so we always know what needs attention and when. Placements up 44% and client retention near 90%.", rating: 5 }
    ],
    [
      { q: "Do I need to replace my current CRM?", a: "Usually not. We add an AI layer on top of your existing CRM — HubSpot, Salesforce, Go High Level, Pipedrive — automating data entry, triggering follow-ups, and adding intelligence without replacing what you have." },
      { q: "How does AI update the CRM without human input?", a: "AI reads your email, calendar, and call data in real time. Every email sent, meeting held, and call made is detected, summarized, and logged automatically in the correct deal or contact record." },
      { q: "What if the AI makes a CRM update incorrectly?", a: "All automated entries are clearly marked as AI-generated and can be reviewed and corrected easily. Over time, AI accuracy improves from your feedback and gets better every week." },
      { q: "Can AI CRM work for non-sales teams like account management?", a: "Absolutely. AI CRM improves any team managing ongoing customer relationships — account management, customer success, partnerships, and renewals all benefit from automated activity tracking and health monitoring." },
      { q: "How long before my team actually uses the CRM regularly?", a: "Adoption skyrockets immediately because AI eliminates the work reps hate — data entry. When the CRM updates itself, teams actually log in, trust the data, and use the deal intelligence we provide." }
    ],
    { title: "Make Your CRM Work For You Instead of Against You", subtitle: "Free CRM audit showing your current adoption rate, data quality issues, and deal leakage — with a specific AI automation plan to fix every gap and close 40% more deals.", buttonText: "Book My Free CRM Audit" },
    ["crm-automation", "pipeline-automation", "ai-for-sales", "revenue-automation-systems"],
    ["crm-automation", "ai-calling-agent", "revenue-automation"],
    COM
  ),
  page(
    "sales-automation-ai", "service",
    "Sales Automation AI | Automate Your Entire Sales Process | Infinite Rankers",
    "Sales automation AI handles prospecting, follow-up, and pipeline management automatically. Sales teams close 40% more deals spending 60% less time on admin. Free audit.",
    "sales automation ai, ai sales automation, automated sales process, sales process automation, ai sales tool",
    {
      badge: "Sales Teams Close 40% More With the Same Headcount",
      title: "Sales Automation AI That",
      titleHighlight: "Sells While You Sleep",
      subtitle: "Sales automation AI handles the manual parts of selling — prospecting, follow-up, scheduling, CRM updates, and reporting — so your team spends 100% of their time on conversations that actually close deals.",
      stats: [
        { value: "40%", label: "More Deals Closed" },
        { value: "60%", label: "Less Admin Time" },
        { value: "9x", label: "Faster Lead Response" },
        { value: "3.2x", label: "Pipeline Growth" }
      ]
    },
    {
      title: "The Manual Sales Problem Costing You Revenue",
      subtitle: "Your sales team is capable of so much more — if they're not buried in admin",
      points: [
        { title: "34% of Time Actually Selling", description: "Sales reps spend only 34% of their time on actual selling activities. The other 66% goes to admin, data entry, scheduling, and reporting that automation can handle.", icon: "Clock" },
        { title: "Slow Follow-Up Loses Deals", description: "80% of sales require 5+ follow-ups. Manual follow-up is inconsistent, delayed, and abandoned too early — handing deals to competitors who persist.", icon: "XCircle" },
        { title: "Leads Leaked Before They're Worked", description: "Leads arrive from multiple sources simultaneously. Without automation to capture and route instantly, leads sit unworked while your reps handle other calls.", icon: "AlertCircle" },
        { title: "No Visibility Into Pipeline Health", description: "Without real-time pipeline intelligence, managers can't see where deals are stalling or which reps need coaching until it's too late to intervene.", icon: "Eye" }
      ]
    },
    {
      title: "Sales Automation AI Across Your Entire Revenue Process",
      subtitle: "From first lead to closed deal — every manual step automated",
      description: "We design and deploy sales automation AI systems that handle every repetitive sales task automatically — from the moment a lead enters your pipeline to the moment the contract is signed — so your team focuses exclusively on high-value selling moments.",
      capabilities: [
        { title: "Automated Lead Engagement", description: "Every new lead receives an AI-powered outreach within 60 seconds — personalized to their source, industry, and pain point.", icon: "Zap" },
        { title: "AI Follow-Up Sequences", description: "Persistent, multi-channel follow-up that runs for 30–90 days automatically — calibrated to buying stage and engagement level.", icon: "Send" },
        { title: "Meeting & Demo Scheduling", description: "AI books discovery calls and demos directly into rep calendars — no back-and-forth, no scheduling friction, no no-shows.", icon: "Calendar" },
        { title: "Automated CRM Management", description: "Calls, emails, and meetings logged automatically. Deals updated. Tasks assigned. Pipeline always current — without manual entry.", icon: "Database" }
      ]
    },
    {
      title: "How Sales Automation AI Is Deployed