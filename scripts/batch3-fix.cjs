const fs = require("fs");

// Helper to write pages to the 3 files
function addPages(pages) {
  // 1. landing-pages.ts
  let lp = fs.readFileSync("client/src/lib/landing-pages.ts", "utf8");
  const lpIdx = lp.lastIndexOf("\n];\n\nexport const ALL_LANDING_PAGES");
  if (lpIdx === -1) { console.error("LP insertion point not found"); process.exit(1); }
  const lpJson = ",\n" + pages.map(p => JSON.stringify(p, null, 2)).join(",\n");
  lp = lp.slice(0, lpIdx) + lpJson + lp.slice(lpIdx);
  fs.writeFileSync("client/src/lib/landing-pages.ts", lp, "utf8");

  // 2. sitemap.ts
  let sm = fs.readFileSync("server/sitemap.ts", "utf8");
  const smIdx = sm.lastIndexOf('\n];');
  sm = sm.slice(0, smIdx) + ",\n" + pages.map(p=>`  "${p.slug}"`).join(",\n") + sm.slice(smIdx);
  fs.writeFileSync("server/sitemap.ts", sm, "utf8");

  // 3. seo.ts
  let seo = fs.readFileSync("server/seo.ts", "utf8");
  const seoIdx = seo.indexOf('\n};\n\nconst PARTNER');
  const entries = "\n" + pages.map(p => {
    const faqs = (p.faqs||[]).slice(0,3).map(f=>`{ q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} }`).join(", ");
    return `  ${JSON.stringify(p.slug)}: { title: ${JSON.stringify(p.seoTitle)}, desc: ${JSON.stringify(p.seoDescription)}, faqs: [${faqs}] },`;
  }).join("\n");
  seo = seo.slice(0, seoIdx) + entries + seo.slice(seoIdx);
  fs.writeFileSync("server/seo.ts", seo, "utf8");

  console.log(`Added ${pages.length} pages`);
}

const BASE = "https://infiniterankers.io";
const COM_LINKS = [
  { label: "SEO Services", url: "https://infiniterankers.com/seo-services/" },
  { label: "Google Ads", url: "https://infiniterankers.com/google-ads-campaign-ppc-campaign/" },
  { label: "Contact Us", url: "https://infiniterankers.com/contact-us/" }
];
const BASE_SERVICES = ["ai-receptionist","crm-automation","ai-sms-automation"];

function page(slug, type, seoTitle, seoDescription, seoKeywords, heroData, painPointsData, aiSystemData, pipelineData, resultsData, featuresData, ecoData, testimonialData, faqData, ctaData, related) {
  return {
    slug, type, seoTitle, seoDescription, seoKeywords,
    canonical: `${BASE}/${slug}`,
    hero: heroData,
    painPoints: painPointsData,
    aiSystem: aiSystemData,
    pipeline: pipelineData,
    results: resultsData,
    features: featuresData,
    ecosystem: { ...ecoData, comLinks: COM_LINKS },
    testimonials: testimonialData,
    faqs: faqData,
    cta: ctaData,
    relatedLandingPages: related || [],
    relatedServices: BASE_SERVICES,
    comLinks: COM_LINKS
  };
}

const pages = [
// ====== REVIEW MANAGEMENT PAGES ======
page("google-review-software","service",
  "Google Review Software | AI-Powered Review Generation | Infinite Rankers",
  "AI-powered Google review software that generates 5-star reviews automatically. Get 300%+ more Google reviews with our automated review request system.",
  "google review software, google review management software, automated google reviews, get more google reviews software",
  { badge:"300%+ More Google Reviews", title:"Google Review Software", titleHighlight:"That Actually Gets Reviews",
    subtitle:"Generic review software sends requests. Ours converts them — with AI-timed requests that trigger at peak satisfaction, achieving 300%+ more monthly reviews than scheduled blasts.",
    stats:[{value:"300%",label:"More Reviews Generated"},{value:"4.8★",label:"Avg. Rating Achieved"},{value:"67%",label:"Review Response Rate"},{value:"60 days",label:"To Full Impact"}]},
  { title:"Why Most Review Software Fails", subtitle:"4 reasons your current tool isn't getting enough reviews",
    points:[
      {title:"Wrong Timing",description:"Generic software sends requests on schedules — not when customers are most satisfied. Peak satisfaction timing is the single biggest driver of response rates.",icon:"Clock"},
      {title:"One-Channel Requests",description:"Email-only review requests get 8-12% open rates. SMS + email + personalization achieves 40-67%. Most software ignores SMS entirely.",icon:"MessageSquare"},
      {title:"No Follow-Up Sequence",description:"A single review request captures 20-30% of potential reviews. A 3-touch sequence captures 60-70%. Most tools send once and stop.",icon:"TrendingDown"},
      {title:"Generic Messaging",description:"'How was your experience?' gets ignored. Personalized, service-specific requests referencing the actual job generate 3x more responses.",icon:"FileText"}]},
  { title:"AI Google Review Software That Works", subtitle:"AI-powered timing and personalization drives results",
    description:"Infinite Rankers uses AI to identify optimal request timing from service completion data, personalizes every request with service-specific content, and runs multi-touch sequences that capture reviews missed by the first message.",
    capabilities:[
      {title:"AI-Optimized Timing",description:"Review requests trigger based on service completion signals — not arbitrary schedules — for maximum response rates.",icon:"Clock"},
      {title:"SMS + Email Sequences",description:"Multi-channel review requests with intelligent follow-up capturing 3x more reviews than single-touch email tools.",icon:"MessageSquare"},
      {title:"Personalized Request Copy",description:"Every request references the specific service performed for dramatically higher response rates than generic templates.",icon:"FileText"},
      {title:"Multi-Platform Coverage",description:"Google, Facebook, Yelp, Healthgrades, and industry-specific review platforms all covered in one system.",icon:"Globe"}]},
  { title:"How Our Google Review Software Works", subtitle:"4 steps from service completion to five-star review",
    steps:[
      {step:"1",title:"Service Completion Signal",description:"Your CRM or booking system signals completion — triggering the review request sequence automatically.",icon:"CheckCircle"},
      {step:"2",title:"Personalized SMS Sent",description:"AI generates a personalized review request referencing the specific service — sent via SMS within 30 minutes of completion.",icon:"MessageSquare"},
      {step:"3",title:"Intelligent Email Follow-Up",description:"Non-responders receive a personalized email at 72 hours with a direct link to your Google review page.",icon:"Mail"},
      {step:"4",title:"Review Monitoring & Response",description:"All new reviews monitored in real-time with AI-suggested responses for your team to approve and post.",icon:"Star"}]},
  { title:"Real Results From Our Google Review Software", subtitle:"Businesses growing ratings and review volume",
    cases:[
      {business:"Perfect Smile Dental",industry:"Dental",metrics:[{value:"4.9★",label:"From 3.7 Stars"},{value:"312%",label:"More Monthly Reviews"},{value:"89%",label:"Response Rate"}],quote:"We went from 45 Google reviews to 200+ in 90 days. Our rating jumped from 3.7 to 4.9 and we're consistently in the top 3 local search results. The timing feature alone tripled our response rate."},
      {business:"Apex Home Services",industry:"Home Services",metrics:[{value:"4.8★",label:"Achieved Rating"},{value:"289%",label:"Review Volume Growth"},{value:"67%",label:"Response Rate"}],quote:"We generate 30-40 new Google reviews every month automatically. Local search ranking went from page 2 to the map pack within 60 days."},
      {business:"Northview Auto Repair",industry:"Auto Repair",metrics:[{value:"4.9★",label:"Google Rating"},{value:"267%",label:"More Reviews"},{value:"44%",label:"More New Customers"}],quote:"Personalized review requests mentioning the specific service make a huge difference. Response rates went from 12% with our old software to 58% with Infinite Rankers."}]},
  { title:"Complete Google Review Software Features", subtitle:"Everything you need to dominate your Google rating",
    items:[
      {title:"AI-Timed Requests",description:"Requests fire at service completion — not scheduled blasts — capturing customers at peak satisfaction.",icon:"Clock"},
      {title:"SMS + Email Delivery",description:"Multi-channel delivery doubles reach compared to email-only review tools.",icon:"MessageSquare"},
      {title:"Personalized Request Copy",description:"Service-specific messaging referencing what you actually did — not generic templates.",icon:"FileText"},
      {title:"Multi-Platform Support",description:"Google, Facebook, Yelp, Healthgrades, and industry-specific review platforms all covered.",icon:"Globe"},
      {title:"Review Response AI",description:"AI-generated response suggestions for every review — positive and negative — for quick professional engagement.",icon:"MessageCircle"},
      {title:"Real-Time Monitoring",description:"Instant alerts for new reviews across all platforms with dashboard tracking of ratings and volume.",icon:"Bell"}]},
  { title:"Google Review Software Built for Revenue", subtitle:"More reviews = better rankings = more customers",
    description:"Google reviews directly impact local search rankings, click-through rates, and customer trust. Our AI-powered software treats review generation as a revenue activity — building systems that consistently generate reviews driving measurable business growth.",
    ioFeatures:[
      {title:"Revenue-Linked Reviews",description:"Every review generated is tied to a customer journey stage and revenue outcome."},
      {title:"Local SEO Integration",description:"Reviews tracked against local search ranking movement — showing the direct correlation."},
      {title:"Competitive Review Analysis",description:"Monitor competitor review volume and ratings to identify ranking opportunities."}],
    comFeatures:[
      {title:"Local SEO",description:"Combine review growth with local SEO optimization for maximum map pack domination."},
      {title:"Google Ads",description:"Leverage improved ratings in Google Ads — higher ratings increase ad click-through rates."},
      {title:"Web Design",description:"Landing pages showcasing reviews prominently to maximize conversion from organic and paid traffic."}]},
  [{name:"Rachel Kim",role:"Practice Owner",company:"Kim Family Dental",quote:"Our Google rating went from 3.8 to 4.9 in 3 months. We generate 25+ new reviews every month automatically. Personalized SMS requests get responses from patients who would never reply to an email.",rating:5},
   {name:"Marcus Johnson",role:"Owner",company:"Johnson's HVAC",quote:"After-service review requests hit customers when their house is perfectly comfortable — peak satisfaction. Response rates are 58% for SMS vs. 12% we got from email. Night and day.",rating:5},
   {name:"Amy Torres",role:"GM",company:"Torres Auto Center",quote:"The AI review response suggestions save us 20 minutes a day. We respond to 100% of reviews now. Before, we responded to maybe 20%.",rating:5}],
  [{q:"How does AI know when to send a review request?",a:"The system connects to your booking platform, CRM, or job management software to identify service completion events — triggering requests based on actual signals, not time-based schedules."},
   {q:"Which platforms does the software support?",a:"Google Business Profile, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, Angi, BBB, and any industry-specific review platform relevant to your business. Priority platforms are configurable."},
   {q:"What response rates should I expect?",a:"Most clients achieve 40-67% SMS review response rates compared to 8-15% for email-only requests. Combined SMS + email sequences typically hit 55-70% with the right personalization and timing."},
   {q:"Does it monitor and respond to negative reviews?",a:"Yes. The system monitors all review platforms in real-time and generates AI-suggested responses for every review. Your team reviews and approves responses before posting."},
   {q:"How long until I see my Google rating improve?",a:"Most clients see measurable rating improvement within 30-60 days. The combination of increased positive review volume and consistent professional responses typically lifts ratings 0.5-1.5 stars within 90 days."}],
  {title:"Stop Begging for Reviews. Start Generating Them Automatically.",subtitle:"Free 30-minute review software demo — see your current review volume, response rate gap, and the system we'd build to get your Google rating to 4.8+ within 90 days.",buttonText:"Book My Free Review Software Demo"},
  ["get-more-google-reviews","review-management-software","automated-review-requests","local-business-reputation-management"]),

page("get-more-google-reviews","service",
  "How to Get More Google Reviews | Automated Review System | Infinite Rankers",
  "Get more Google reviews automatically with AI-timed review requests. Our system generates 300%+ more reviews — boosting your local search ranking and star rating.",
  "get more google reviews, how to get more google reviews, increase google reviews, more google reviews",
  { badge:"20-50+ Reviews Per Month", title:"Get More Google Reviews", titleHighlight:"Without Asking Manually",
    subtitle:"Most businesses get 2-5 Google reviews per month. Businesses using our automated system generate 20-50+ monthly — boosting local search rankings and converting more browsers into customers.",
    stats:[{value:"300%",label:"More Monthly Reviews"},{value:"4.8★",label:"Average Rating Achieved"},{value:"60 days",label:"To Top Local Rankings"},{value:"Zero",label:"Manual Review Chasing"}]},
  { title:"Why You're Not Getting Enough Google Reviews", subtitle:"The 4 barriers between you and a 4.9-star rating",
    points:[
      {title:"You Forget to Ask",description:"When you're busy running a business, asking customers for reviews falls to the bottom of the list. Automation eliminates this — every completed service triggers a request automatically.",icon:"Clock"},
      {title:"Manual Requests Feel Awkward",description:"Directly asking customers for reviews feels uncomfortable for most business owners. An automated professional request feels natural and achieves better response rates.",icon:"MessageSquare"},
      {title:"Email Requests Get Ignored",description:"Email review requests get 8-12% open rates. SMS requests get 40-67% — and we send both. You're missing 80% of your review potential with email-only approaches.",icon:"Mail"},
      {title:"The Competition Is Pulling Ahead",description:"While you have 50 reviews, your top competitor has 400. Google's algorithm favors review volume and recency — every month without a system widens that gap.",icon:"TrendingDown"}]},
  { title:"The System That Gets You 20-50+ Reviews Per Month", subtitle:"Automated, personalized, and timed for maximum response",
    description:"Our automated review system connects to your service completion data, sends personalized SMS and email review requests at the optimal moment, follows up with non-responders, and monitors all incoming reviews across every major platform. Most clients see review volume increase 200-400% within 60 days.",
    capabilities:[
      {title:"Service Completion Triggers",description:"Reviews requested automatically when service is marked complete — at actual peak satisfaction moments, not on a schedule.",icon:"CheckCircle"},
      {title:"Personalized SMS Requests",description:"AI writes personalized review requests mentioning the specific service performed — achieving 58% response rates vs. 12% for generic requests.",icon:"MessageSquare"},
      {title:"3-Touch Follow-Up",description:"SMS → Email → Final reminder captures 3x more reviews than a single request — reaching customers who missed the first message.",icon:"TrendingUp"},
      {title:"Review Page Direct Links",description:"One-click links to your Google review form eliminate the biggest friction point in the review process.",icon:"Link"}]},
  { title:"Your Path to 50+ Google Reviews Per Month", subtitle:"4 steps from installation to ranking #1 locally",
    steps:[
      {step:"1",title:"Connect Your Systems",description:"We connect to your booking platform, CRM, or point-of-sale system to identify completed service events automatically.",icon:"Database"},
      {step:"2",title:"Configure Your Requests",description:"Personalized review request templates built for each service type — customized messaging that feels authentic, not automated.",icon:"FileText"},
      {step:"3",title:"Launch & Monitor",description:"The system goes live, requests begin flowing, and you see reviews accumulate on a real-time dashboard updated hourly.",icon:"Rocket"},
      {step:"4",title:"Optimize & Scale",description:"Monthly optimization reviews identify response rate improvements, timing adjustments, and new platform opportunities.",icon:"TrendingUp"}]},
  { title:"Businesses That Transformed Their Google Reviews", subtitle:"Real review growth from real clients",
    cases:[
      {business:"Shine On Dental",industry:"Dentistry",metrics:[{value:"4.9★",label:"From 3.4 Stars"},{value:"425%",label:"More Monthly Reviews"},{value:"Top 3",label:"Local Search Position"}],quote:"We had 38 Google reviews after 8 years in business. Infinite Rankers got us to 200+ in 90 days. Local search ranking jumped from page 3 to the map pack. New patient calls doubled."},
      {business:"Peak Performance Auto",industry:"Auto Repair",metrics:[{value:"50+",label:"Monthly Reviews"},{value:"4.8★",label:"Google Rating"},{value:"62%",label:"More New Customers"}],quote:"We went from 4 reviews/month to 55/month. The consistency matters as much as volume — Google's algorithm rewards regular new reviews, and our AI keeps the stream constant."},
      {business:"Comfort Air HVAC",industry:"HVAC",metrics:[{value:"4.9★",label:"Rating Achieved"},{value:"312%",label:"More Reviews"},{value:"$24K",label:"Monthly Revenue Increase"}],quote:"After 3 months of automated review generation, we rank #1 on Google Maps for HVAC in our city. That ranking alone generates 15-20 new customer calls per month we weren't getting before."}]},
  { title:"Everything You Need to Get More Google Reviews", subtitle:"The complete automated review generation system",
    items:[
      {title:"Automated Review Requests",description:"Every completed service triggers a review request automatically — no manual effort required.",icon:"Cpu"},
      {title:"SMS + Email Delivery",description:"Double your reach with multi-channel requests — SMS for instant response, email for follow-up.",icon:"MessageSquare"},
      {title:"Personalized Copy",description:"AI writes service-specific request messages — not generic templates — for dramatically higher response rates.",icon:"FileText"},
      {title:"Review Link Generator",description:"Direct, one-click links to your Google review form eliminate the biggest friction point.",icon:"Link"},
      {title:"Review Monitoring Dashboard",description:"Real-time tracking of all reviews across Google, Facebook, Yelp, and other platforms in one dashboard.",icon:"BarChart3"},
      {title:"Response Suggestion AI",description:"AI generates professional responses to every review — making consistent engagement effortless.",icon:"MessageCircle"}]},
  { title:"More Reviews = Better Rankings = More Revenue", subtitle:"The compound effect of automated review generation",
    description:"Google reviews are the highest-impact, lowest-cost local SEO lever available to service businesses. Every review improves your local search ranking, click-through rate, and customer trust — creating a compounding effect where better rankings bring more customers, who generate more reviews.",
    ioFeatures:[
      {title:"Review-to-Ranking Connection",description:"We track how review growth correlates to ranking improvements — showing the direct revenue impact."},
      {title:"Competitive Gap Analysis",description:"Monitor competitors' review velocity to stay ahead — identify opportunities where a surge closes ranking gaps."},
      {title:"Review Quality Signals",description:"AI flags reviews Google values most — detailed, service-specific reviews that carry more ranking weight."}],
    comFeatures:[
      {title:"Local SEO",description:"Combine review growth with citation building and GBP optimization for maximum impact."},
      {title:"Paid Local Ads",description:"Use improved star ratings in Google Ads extensions — higher ratings increase CTR by 15-25%."},
      {title:"Website Design",description:"Display growing review count prominently on your site — social proof that converts visitors."}]},
  [{name:"Dr. James Park",role:"Practice Owner",company:"Park Chiropractic",quote:"We went from 22 reviews to 180+ in 4 months. Our Google ranking for 'chiropractor near me' went from position 8 to position 2. New patient bookings increased 65%.",rating:5},
   {name:"Sandra Williams",role:"Owner",company:"Williams Plumbing",quote:"The system sends review requests automatically when we mark a job complete. We generate 40+ reviews per month now — without anyone on my team doing anything manually.",rating:5},
   {name:"Kevin Ross",role:"GM",company:"Ross Family Dental",quote:"Our 4.9-star rating with 300+ reviews is our best marketing asset. Every new patient tells us they found us through Google reviews. The system paid for itself in month one.",rating:5}],
  [{q:"How many more reviews will I get per month?",a:"Most businesses see review volume increase 200-400% within 60 days. A typical client going from 5 reviews/month reaches 20-50+/month depending on service volume and customer response rates."},
   {q:"Will this work for any type of business?",a:"Yes. The system works for any service business — dental, auto repair, HVAC, plumbing, roofing, med spa, restaurants, law firms, and more. We customize timing and messaging for each industry."},
   {q:"How do I get customers to actually click the review link?",a:"SMS review requests with personalized content and direct Google review links achieve 40-67% click-through rates. The combination of timing, personalization, and the direct link eliminates every friction point."},
   {q:"What if I get a negative review?",a:"The system monitors all reviews in real-time. When a negative review appears, you're immediately notified with an AI-generated professional response suggestion. Quick, thoughtful responses to negative reviews actually improve your overall rating."},
   {q:"How long before I see my Google ranking improve?",a:"Most clients see ranking improvement within 60-90 days. Consistent monthly review generation produces sustained ranking improvements — Google responds to review velocity and recency."}],
  {title:"Start Generating 20-50+ Google Reviews Every Month",subtitle:"Free review system demo — see exactly how many reviews you're losing and what a 3-month automated system would do to your Google rating and local search ranking.",buttonText:"Book My Free Review Demo"},
  ["google-review-software","review-management-software","automated-review-requests","local-business-reputation-management"]),

page("automated-review-requests","service",
  "Automated Review Requests | AI-Powered Review Generation | Infinite Rankers",
  "Automated review request system that sends personalized SMS and email requests at the perfect moment — generating 3x more reviews with zero manual effort.",
  "automated review requests, automatic review requests, review request automation, automate review requests",
  { badge:"3x More Reviews, Zero Manual Work", title:"Automated Review Requests", titleHighlight:"That Get 3x More Responses",
    subtitle:"Send review requests at the perfect moment, with personalized content, across SMS and email — automatically. Our system generates 3x more reviews than manual requests or scheduled blasts.",
    stats:[{value:"3x",label:"More Reviews Than Manual"},{value:"58%",label:"Avg. SMS Response Rate"},{value:"Zero",label:"Manual Review Chasing"},{value:"7 days",label:"To First Automated Reviews"}]},
  { title:"Why Manual Review Requests Don't Scale", subtitle:"Problems that automated review requests solve permanently",
    points:[
      {title:"You Forget to Ask",description:"When you have 10 jobs to manage, asking for reviews gets forgotten. Automation ensures 100% of completed jobs trigger a review request — no exceptions.",icon:"Clock"},
      {title:"Inconsistent Timing",description:"Manual requests happen when you remember — often days after service. Automated requests go out within 30 minutes of completion, at peak satisfaction.",icon:"Timer"},
      {title:"Generic Templates Ignored",description:"'Please leave us a review' gets ignored. AI-personalized requests mentioning the specific service performed get 3x better response rates.",icon:"FileText"},
      {title:"Single Channel Limits Reach",description:"Email-only review requests miss 60% of customers who don't open emails. SMS + email automation captures responses from both groups.",icon:"MessageSquare"}]},
  { title:"Automated Review Requests That Actually Work", subtitle:"AI that knows when, how, and what to send",
    description:"Our automated review request system uses service completion signals to trigger perfectly-timed, personalized requests via SMS and email — with intelligent follow-up sequences that capture reviews from customers who missed the first message.",
    capabilities:[
      {title:"Completion-Triggered Requests",description:"Requests fire automatically when your system marks a job complete — not on a schedule, but at the actual optimal moment.",icon:"CheckCircle"},
      {title:"AI-Personalized Messaging",description:"Each request is personalized with the specific service, date, and team member — making it feel human, not automated.",icon:"FileText"},
      {title:"Multi-Touch Sequences",description:"SMS first, email follow-up at 72 hours, final reminder at 5 days — capturing 3x more reviews than single-touch requests.",icon:"TrendingUp"},
      {title:"Direct Review Links",description:"One-click links take customers directly to your Google review form — eliminating the #1 drop-off point.",icon:"Link"}]},
  { title:"How Automated Review Requests Work", subtitle:"From service completion to five-star review in 4 automated steps",
    steps:[
      {step:"1",title:"Job Completion Detected",description:"Your CRM or booking platform signals job completion — triggering the review sequence automatically with zero manual input.",icon:"CheckCircle"},
      {step:"2",title:"Personalized SMS Sent",description:"Within 30 minutes, a personalized SMS goes out referencing the specific service with a direct link to your review page.",icon:"MessageSquare"},
      {step:"3",title:"Email Follow-Up",description:"Non-responders receive a personalized email at 72 hours — different channel, slightly different message, same direct link.",icon:"Mail"},
      {step:"4",title:"Sequence Stops When Review Submitted",description:"The moment a review is submitted, the sequence stops — preventing duplicate requests and annoying satisfied customers.",icon:"Star"}]},
  { title:"Automated Review Results Across Industries", subtitle:"Clients generating more reviews with zero manual effort",
    cases:[
      {business:"Blue Sky Roofing",industry:"Roofing",metrics:[{value:"312%",label:"More Monthly Reviews"},{value:"4.8★",label:"Google Rating"},{value:"100%",label:"Request Coverage"}],quote:"Every completed roofing job now gets a review request automatically. We went from 3 reviews/month to 35/month. Google ranking jumped from position 9 to the map pack in 4 months."},
      {business:"Family Vision Center",industry:"Optometry",metrics:[{value:"4.9★",label:"Patient Rating"},{value:"267%",label:"Review Growth"},{value:"89%",label:"Delivery Rate"}],quote:"Automated requests go out after every eye exam. Patients receive them while still in the parking lot — still thinking about their experience. Our response rate is 62%."},
      {business:"Metro Maid Service",industry:"Home Cleaning",metrics:[{value:"289%",label:"More Reviews"},{value:"4.8★",label:"Cleaning Rating"},{value:"55",label:"Reviews Generated/Month"}],quote:"The personalized requests mention the specific cleaning service and team name. Customers feel individually recognized. Response rates are incredible."}]},
  { title:"Complete Automated Review Request System", subtitle:"Every feature you need to automate review generation",
    items:[
      {title:"Service Completion Triggers",description:"Connect to your existing systems to trigger review requests based on real completion events — not time delays.",icon:"CheckCircle"},
      {title:"Personalized AI Messaging",description:"AI generates unique, service-specific request messages — not templates customers recognize and ignore.",icon:"FileText"},
      {title:"SMS + Email Automation",description:"Multi-channel delivery sequences reaching customers on their preferred communication channel.",icon:"MessageSquare"},
      {title:"Direct Review Link Generation",description:"Custom short links taking customers directly to your review page — eliminating navigation friction.",icon:"Link"},
      {title:"Sequence Management",description:"Automated follow-up sequences that stop the moment a review is submitted — no annoying repeat requests.",icon:"Settings"},
      {title:"Review Volume Reporting",description:"Monthly reports showing review volume growth, response rates, and rating trends across all platforms.",icon:"BarChart3"}]},
  { title:"Automated Review Requests as a Revenue Strategy", subtitle:"Turn customer satisfaction into Google ranking and new customers",
    description:"Every automated review request is an investment in your local search ranking, customer trust, and new customer acquisition cost. Businesses with 200+ Google reviews convert 35% more website visitors than those with 50 reviews — making review automation one of the highest-ROI activities for local service businesses.",
    ioFeatures:[
      {title:"Review-to-Revenue Tracking",description:"Monitor how review volume growth correlates to ranking improvement and new customer inquiries."},
      {title:"Rating Trend Analysis",description:"Track your star rating trajectory and project when you'll hit target ratings based on current velocity."},
      {title:"Competitor Review Monitoring",description:"See how your review growth compares to competitors — identify when you're pulling ahead on local search."}],
    comFeatures:[
      {title:"Local SEO",description:"Amplify review growth with citation building and Google Business Profile optimization."},
      {title:"Paid Advertising",description:"Higher ratings improve Google Ads performance — better CTR means lower cost per conversion."},
      {title:"Web Presence",description:"Showcase your review count and rating across all digital touchpoints."}]},
  [{name:"Steve Miller",role:"Owner",company:"Miller's Landscaping",quote:"The automated requests go out the moment we finish a job. Customers are still walking around admiring the work when the review request hits their phone. Our response rate is 71%.",rating:5},
   {name:"Dr. Lisa Park",role:"Dentist",company:"Park Dental",quote:"Every patient gets a review request automatically after their appointment. We generate 30+ reviews monthly with zero effort from our front desk. Our practice rating went from 3.9 to 4.8 in 5 months.",rating:5},
   {name:"Robert Chen",role:"Owner",company:"Chen Contracting",quote:"Before automation, we asked maybe 20% of customers for reviews. Now 100% get a personalized request. Our review volume increased 400%. The consistency is what makes it powerful.",rating:5}],
  [{q:"What systems does it connect to for completion triggers?",a:"We integrate with major CRMs (HubSpot, Salesforce, GoHighLevel), booking platforms (Calendly, Acuity), job management software (ServiceTitan, Jobber, Housecall Pro), and most POS systems — or via Zapier/webhook for custom setups."},
   {q:"Can I customize the review request messages?",a:"Yes. We build custom templates for each service type you offer, with AI personalization adding service-specific details automatically. You approve all templates before launch."},
   {q:"What happens if a customer leaves a bad review?",a:"The system monitors for negative reviews in real-time. When one appears, you're notified immediately with an AI-generated response suggestion. Responding quickly and professionally significantly reduces the impact on your overall rating."},
   {q:"How do I stop the sequence once a customer reviews?",a:"Automatically. The moment a customer submits a review on any platform, the system detects it and stops the sequence — preventing duplicate requests and annoying satisfied customers."},
   {q:"How long until I see more reviews?",a:"Most clients receive their first automated review within 24 hours of launch. Meaningful volume increases — 200-300% more reviews per month — typically show by the end of the first 30 days."}],
  {title:"Automate Your Review Requests — Start Generating 20-50 Reviews/Month",subtitle:"Free review automation demo showing your service completion triggers, personalized request templates, and projected review volume increase in your first 90 days.",buttonText:"Book My Free Review Automation Demo"},
  ["google-review-software","get-more-google-reviews","review-management-software","google-review-management-tool"]),

page("review-management-software","service",
  "Review Management Software | AI-Powered Platform | Infinite Rankers",
  "AI review management software that generates reviews, monitors all platforms, and helps you respond — all in one dashboard. 4.8+ star ratings for 90% of clients.",
  "review management software, online review management, reputation management software, review management platform",
  { badge:"4.8+ Stars Achieved for 90% of Clients", title:"Review Management Software", titleHighlight:"Built for Revenue",
    subtitle:"Track, generate, and respond to reviews across every platform from one AI-powered dashboard. 90% of clients reach a 4.8+ star rating within 90 days.",
    stats:[{value:"20+",label:"Platforms Monitored"},{value:"4.8+",label:"Star Rating Achieved"},{value:"90%",label:"Client Success Rate"},{value:"90 days",label:"Avg. to Target Rating"}]},
  { title:"What Most Review Management Software Gets Wrong", subtitle:"The 4 gaps in typical review tools",
    points:[
      {title:"Monitoring Without Generation",description:"Most review management software monitors reviews — it doesn't actively generate them. Monitoring without generation is defensive. Generation is offensive.",icon:"BarChart3"},
      {title:"No AI-Powered Responses",description:"Manual review responses take time. Most software doesn't suggest AI responses, leaving teams not responding or copy-pasting generic templates.",icon:"MessageCircle"},
      {title:"Platform Fragmentation",description:"Reviews come in across Google, Facebook, Yelp, and industry-specific sites. Most tools monitor 3-5 platforms — missing critical industry-specific review sites.",icon:"Globe"},
      {title:"No Revenue Attribution",description:"Knowing you have 4.2 stars is useful. Knowing that going to 4.7 stars generated $8,000/month in additional revenue is actionable. Most tools don't connect reviews to revenue.",icon:"DollarSign"}]},
  { title:"AI Review Management That Generates AND Manages", subtitle:"Offensive and defensive review strategy in one platform",
    description:"Infinite Rankers' platform combines automated review generation, real-time monitoring across 20+ platforms, AI-powered response suggestions, and revenue attribution — turning review management from a passive activity into an active revenue driver.",
    capabilities:[
      {title:"Active Review Generation",description:"AI-timed review requests generate 3x more reviews per month — transforming review management from defensive to offensive.",icon:"TrendingUp"},
      {title:"20+ Platform Monitoring",description:"Google, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, and 15+ other platforms monitored in one dashboard.",icon:"Globe"},
      {title:"AI Response Suggestions",description:"AI generates professional, personalized responses to every review — positive and negative — for your team to approve and post.",icon:"MessageCircle"},
      {title:"Revenue Impact Tracking",description:"See how rating improvements correlate to ranking changes, traffic increases, and new customer acquisition.",icon:"DollarSign"}]},
  { title:"How Our Review Management Platform Works", subtitle:"Generation, monitoring, response, and reporting in one system",
    steps:[
      {step:"1",title:"Generate Reviews",description:"Automated review requests triggered by service completion generate consistent monthly review volume across all target platforms.",icon:"Star"},
      {step:"2",title:"Monitor All Platforms",description:"Real-time monitoring across 20+ review platforms with instant alerts for new reviews — especially critical negative reviews.",icon:"Bell"},
      {step:"3",title:"Respond Intelligently",description:"AI generates response suggestions for every review — your team approves and posts in seconds, not minutes.",icon:"MessageCircle"},
      {step:"4",title:"Track Revenue Impact",description:"Monthly reporting connects review volume and rating changes to ranking improvements and revenue growth.",icon:"BarChart3"}]},
  { title:"Review Management Results Across Industries", subtitle:"Real outcomes from clients using full review management",
    cases:[
      {business:"Summit Dental Group",industry:"Multi-Location Dental",metrics:[{value:"4.9★",label:"Group Rating"},{value:"400%",label:"Review Growth"},{value:"28",label:"Locations Managed"}],quote:"Managing reviews across 28 dental locations was a nightmare. Now I see all reviews in one dashboard, AI handles responses, and our group rating is 4.9 across every location."},
      {business:"Highpoint Home Services",industry:"Home Services",metrics:[{value:"4.8★",label:"Company Rating"},{value:"289%",label:"More Monthly Reviews"},{value:"$31K",label:"Monthly Revenue Growth"}],quote:"Our review management was completely reactive — responding when we noticed a review, often days later. The AI monitoring and response system makes us look incredibly professional."},
      {business:"Elite Chiropractic Group",industry:"Chiropractic",metrics:[{value:"4.9★",label:"Patient Rating"},{value:"312%",label:"Review Volume"},{value:"91%",label:"Response Rate"}],quote:"The AI response suggestions are genuinely good — they reference specific details from the review and sound human. We respond to 100% of reviews now. Before, maybe 20%."}]},
  { title:"Complete Review Management Platform Features", subtitle:"All the tools for managing your online reputation",
    items:[
      {title:"Automated Review Generation",description:"Trigger-based requests generating consistent monthly review volume without manual effort.",icon:"Star"},
      {title:"20+ Platform Monitoring",description:"Real-time monitoring across all major review platforms with unified dashboard view.",icon:"Globe"},
      {title:"AI Response Suggestions",description:"Professionally-written response suggestions for every review — approve and post in seconds.",icon:"MessageCircle"},
      {title:"Sentiment Analysis",description:"AI categorizes review themes — identifying common praise and consistent complaints for operational improvement.",icon:"BarChart3"},
      {title:"Competitive Benchmarking",description:"Compare your rating and review velocity to local competitors — identify when you're winning.",icon:"Target"},
      {title:"Revenue Attribution",description:"Connect review improvement to ranking changes, traffic growth, and new customer acquisition for full ROI visibility.",icon:"DollarSign"}]},
  { title:"Review Management as a Revenue Strategy", subtitle:"Why managing reviews is actually about growing revenue",
    description:"The businesses ranking #1 in local search aren't just good at what they do — they're systematic about managing their online reputation. Review management software that actively generates and intelligently manages reviews compounds over time, building a reputation asset that drives organic growth for years.",
    ioFeatures:[
      {title:"Reputation Asset Building",description:"Every review generated is a permanent asset improving your ranking, trust, and conversion rate."},
      {title:"Compound Ranking Effect",description:"More reviews → better local rankings → more customers → more reviews. The flywheel accelerates over time."},
      {title:"Churn Reduction",description:"Businesses with 4.7+ star ratings retain customers 40% better — reviews drive loyalty, not just acquisition."}],
    comFeatures:[
      {title:"Local SEO",description:"Technical optimization, citation building, and GBP management complement your review strategy."},
      {title:"Paid Advertising",description:"Higher ratings improve paid ad performance — Google shows star ratings in ads, improving CTR by 15-25%."},
      {title:"Content Marketing",description:"Blog content leveraging your expertise and reviews to build topical authority and organic rankings."}]},
  [{name:"Patricia Walsh",role:"Owner",company:"Walsh Med Spa",quote:"The AI response suggestions are the feature I didn't know I needed. We respond to every review within 24 hours now. Google loves it, and customers notice. Our response rate went from 15% to 100% literally overnight.",rating:5},
   {name:"Alex Thompson",role:"GM",company:"Thompson Auto Group",quote:"Managing reviews across 3 locations was impossible before. One dashboard, AI responses, automated generation — we went from 180 total reviews to 800+ in 6 months and our group rating hit 4.8.",rating:5},
   {name:"Dr. Emma Liu",role:"Practice Owner",company:"Liu Orthopedics",quote:"The competitor benchmarking showed us losing ground to a nearby practice with 3x our review count. Within 90 days of launching automated generation, we closed the gap completely.",rating:5}],
  [{q:"How many review platforms does the software monitor?",a:"We monitor 20+ platforms including Google, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, Angi, Houzz, TripAdvisor, BBB, and industry-specific platforms relevant to your business type."},
   {q:"Does the AI response feature post responses automatically?",a:"No — and intentionally. AI generates suggestions that your team reviews and approves before posting. This maintains quality control while dramatically reducing the time to respond from minutes to seconds."},
   {q:"Can I use this for multiple business locations?",a:"Yes. The platform supports multi-location management with individual and aggregate dashboards — ideal for businesses with 2-50+ locations that need centralized review oversight with location-level detail."},
   {q:"How is this different from Birdeye or Podium?",a:"Both Birdeye and Podium offer review management but focus primarily on monitoring and request sending. Our platform adds AI-powered response suggestions, revenue attribution tracking, and deeper integration with your business systems for trigger-based generation."},
   {q:"What's the setup and onboarding process?",a:"Setup typically takes 5-7 business days including platform integrations, completion trigger configuration, request template customization, and team training on the dashboard. We manage all technical setup."}],
  {title:"Take Control of Your Online Reputation — Start Generating and Managing Reviews Automatically",subtitle:"Free reputation audit showing your current review position across all platforms, competitor comparison, and a 90-day roadmap to a 4.8+ star rating.",buttonText:"Book My Free Reputation Audit"},
  ["google-review-software","get-more-google-reviews","automated-review-requests","reputation-management-platform"]),

page("reputation-management-for-small-business","service",
  "Reputation Management for Small Business | AI Review System | Infinite Rankers",
  "AI reputation management for small businesses — automate review generation, monitor all platforms, and build a 4.8+ star rating. Trusted by 500+ small businesses.",
  "reputation management small business, online reputation management small business, small business review management",
  { badge:"Trusted by 500+ Small Businesses", title:"Reputation Management", titleHighlight:"for Small Business",
    subtitle:"Small businesses can't afford dedicated reputation managers — but they also can't afford bad reviews. Our AI system manages your entire online reputation automatically for less than the cost of one employee.",
    stats:[{value:"500+",label:"Small Business Clients"},{value:"4.8+",label:"Average Rating Achieved"},{value:"$0",label:"Staff Overhead Required"},{value:"30 days",label:"To First Results"}]},
  { title:"The Small Business Reputation Challenge", subtitle:"Why most small businesses lose the review battle",
    points:[
      {title:"No Time to Chase Reviews",description:"Small business owners handle operations, customers, and finances simultaneously. Manually requesting reviews after every interaction simply doesn't happen.",icon:"Clock"},
      {title:"One Bad Review Can Hurt Badly",description:"For a small business with 30 reviews, one 1-star review drops your rating by 0.1 stars. For a business with 300 reviews, the same review barely moves the needle. Volume protects you.",icon:"AlertTriangle"},
      {title:"Competitors Are Outpacing You",description:"Large chains and franchise competitors have marketing teams generating reviews systematically. Small businesses competing manually are fighting a losing battle.",icon:"TrendingDown"},
      {title:"Too Many Platforms to Monitor",description:"Managing Google, Facebook, Yelp, and industry-specific sites manually takes hours per week. Most small business owners monitor none — discovering negative reviews days after they appear.",icon:"Globe"}]},
  { title:"Automated Reputation Management Built for Small Business", subtitle:"Enterprise-level review management at small business pricing",
    description:"Infinite Rankers gives small businesses the same automated review generation and reputation monitoring that enterprise brands use — at pricing designed for businesses with 1-10 employees. You get more reviews, better ratings, and full platform monitoring without a single new hire.",
    capabilities:[
      {title:"Automated Review Generation",description:"Every completed sale or service triggers a review request automatically — 100% of customers asked, 100% of the time.",icon:"CheckCircle"},
      {title:"All-Platform Monitoring",description:"Google, Facebook, Yelp, and your industry platforms all monitored in one dashboard — catch every review the moment it posts.",icon:"Globe"},
      {title:"AI Response Drafts",description:"Professional response suggestions for every review — approve in seconds from your phone, without writing a word.",icon:"MessageCircle"},
      {title:"Simple Dashboard",description:"Easy-to-use dashboard designed for busy owners, not marketing teams — everything you need, nothing you don't.",icon:"Smartphone"}]},
  { title:"Simple 4-Step Launch for Small Businesses", subtitle:"Get your reputation management running in under a week",
    steps:[
      {step:"1",title:"Quick Setup",description:"We connect to your booking or CRM system and configure automated review requests in 1-3 business days.",icon:"Rocket"},
      {step:"2",title:"Templates Built",description:"Your personalized review request templates are built, reviewed, and approved — ready to send automatically.",icon:"FileText"},
      {step:"3",title:"Go Live",description:"Your reputation management system activates — every future customer automatically gets a well-timed review request.",icon:"CheckCircle"},
      {step:"4",title:"Monthly Reporting",description:"Simple monthly reports showing your review growth, rating change, and platform performance — no analytics degree required.",icon:"BarChart3"}]},
  { title:"Small Businesses With AI Reputation Management", subtitle:"Real results from real small business clients",
    cases:[
      {business:"Corner Bakery & Cafe",industry:"Food Service",metrics:[{value:"4.8★",label:"Google Rating"},{value:"212%",label:"More Monthly Reviews"},{value:"#1",label:"Local Search Position"}],quote:"We had 45 reviews after 6 years in business. In 3 months with Infinite Rankers we reached 180+ reviews and hit 4.8 stars. We're now the top-rated bakery in our area on Google Maps."},
      {business:"Family Plumbing Plus",industry:"Plumbing",metrics:[{value:"4.9★",label:"Service Rating"},{value:"178%",label:"More Reviews"},{value:"40%",label:"More Phone Calls"}],quote:"My reputation management used to be 'hope for the best.' Now reviews come in every week automatically. I respond to all of them from my phone with AI suggestions. Looks very professional."},
      {business:"Mountain View Chiropractic",industry:"Chiropractic",metrics:[{value:"4.8★",label:"Patient Rating"},{value:"300%",label:"Review Growth"},{value:"65%",label:"More New Patients"}],quote:"Small practices can't afford reputation management agencies. The automated system does the same thing and costs less than one hour of my time per month to manage. Results speak for themselves."}]},
  { title:"Small Business Reputation Management Features", subtitle:"Everything you need, nothing you don't",
    items:[
      {title:"Automated Review Requests",description:"100% coverage — every customer gets a perfectly-timed review request without any manual effort from you.",icon:"CheckCircle"},
      {title:"Multi-Platform Monitoring",description:"Google, Facebook, Yelp, and your industry platforms — all in one feed so you never miss a review.",icon:"Globe"},
      {title:"Mobile-First Dashboard",description:"Manage your entire reputation from your phone — review alerts, response approvals, and monthly stats all mobile-accessible.",icon:"Smartphone"},
      {title:"AI Response Suggestions",description:"Professional response drafts for every review — positive and negative — that take 10 seconds to approve and post.",icon:"MessageCircle"},
      {title:"Simple Monthly Reports",description:"One-page monthly summaries showing review count, rating trend, and top platform performance.",icon:"FileText"},
      {title:"Transparent Pricing",description:"Fixed monthly fee with no hidden costs, no per-review charges, no overage fees — predictable billing for budget-conscious businesses.",icon:"DollarSign"}]},
  { title:"Reputation Management That Fits a Small Business Budget", subtitle:"Enterprise results at small business pricing",
    description:"Large businesses invest thousands per month in reputation management staff and agencies. Infinite Rankers delivers the same automated review generation and monitoring for a fraction of that cost — making enterprise-quality reputation management accessible to every small business.",
    ioFeatures:[
      {title:"Right-Sized for Small Business",description:"Features and pricing designed for 1-10 employee businesses — not enterprise platforms dumbed down for small accounts."},
      {title:"No Minimum Review Volume",description:"Works equally well whether you serve 20 or 200 customers per month — reviews generated proportionally from your actual customer base."},
      {title:"Owner-Friendly Interface",description:"Designed for busy owners who check their phone between jobs — not marketing teams with dedicated software time."}],
    comFeatures:[
      {title:"Local SEO for Small Business",description:"Organic rankings that put your small business in front of local customers without ongoing ad spend."},
      {title:"Affordable Paid Ads",description:"Google Ads management designed for small business budgets — starting at $500/month ad spend."},
      {title:"Small Business Website",description:"Professional websites designed for small businesses with lead capture and review showcase built in."}]},
  [{name:"Joe Peretti",role:"Owner",company:"Peretti's Pizza",quote:"Managing reviews used to take 2 hours a week. Now I get a text when a review comes in, tap to approve the AI response, done. 5 minutes a week max.",rating:5},
   {name:"Sarah Kim",role:"Owner",company:"Kim Nails & Spa",quote:"One bad review almost destroyed us — we went from 4.6 to 4.3 in one day. Infinite Rankers helped us generate 50 new positive reviews in 30 days. We're back at 4.7 and growing.",rating:5},
   {name:"Bill Hooper",role:"Owner",company:"Hooper's Heating & Air",quote:"Small HVAC companies can't afford marketing departments. The automated system handles our reviews better than any employee could — more consistent, faster responses, and it works 24/7.",rating:5}],
  [{q:"Is reputation management affordable for a small business?",a:"Yes. Infinite Rankers' small business plans start at pricing accessible to most service businesses. The ROI is immediate — most clients see the investment recouped within the first month through new customer inquiries driven by improved ratings."},
   {q:"Do I need technical knowledge to set this up?",a:"None at all. We handle all setup, integration, and configuration. You participate in a 30-minute onboarding call, approve your request templates, and the system runs automatically from there."},
   {q:"What if my business only gets 20-30 customers per month?",a:"The system works for any volume. At 20 customers per month with a 50% response rate, you'll generate 10 new reviews monthly — which is excellent for a small business and will dramatically improve your local search ranking."},
   {q:"How do I respond to reviews if I'm not tech-savvy?",a:"The mobile app shows you new reviews and AI-generated responses. You tap 'Approve' or make small edits, then tap 'Post.' It takes 15-20 seconds per review."},
   {q:"Will this help me compete with larger chains in my area?",a:"Absolutely. Review volume and rating quality are the great equalizers in local search. A small independent business with 200 five-star reviews frequently outranks national chains with worse ratings."}],
  {title:"Give Your Small Business the Reputation It Deserves",subtitle:"Free reputation audit — see your current review position, competitor comparison, and the exact system we'd build to get your small business to a 4.8+ star rating.",buttonText:"Book My Free Reputation Audit"},
  ["google-review-software","review-management-software","local-business-reputation-management","get-more-google-reviews"]),

page("reputation-management-platform","service",
  "Reputation Management Platform | AI-Powered Review & Rating System | Infinite Rankers",
  "Full-featured reputation management platform that generates reviews, monitors all platforms, and tracks revenue impact. Trusted by 70+ USA businesses. Free platform demo.",
  "reputation management platform, reputation management system, online reputation platform, review management platform",
  { badge:"The Complete Reputation Revenue Platform", title:"Reputation Management Platform", titleHighlight:"That Goes Beyond Monitoring",
    subtitle:"Most platforms monitor reviews. Ours generates them, responds to them, and tracks how they translate into ranking improvements and revenue growth — all in one AI-powered platform.",
    stats:[{value:"20+",label:"Platforms Covered"},{value:"4.8+",label:"Star Rating Achieved"},{value:"300%",label:"Avg. Review Volume Growth"},{value:"Revenue",label:"Attribution Included"}]},
  { title:"Why Basic Reputation Platforms Fall Short", subtitle:"The limitations that cost businesses money",
    points:[
      {title:"Monitoring Isn't Management",description:"Seeing a bad review 72 hours after it posts isn't management — it's damage control. A real platform alerts you within minutes and helps you respond instantly.",icon:"Clock"},
      {title:"No Active Review Generation",description:"A reputation platform that only monitors is like a gym membership you never use. Generation is the work — monitoring is just scorekeeping.",icon:"TrendingUp"},
      {title:"No Business System Integration",description:"Standalone platforms don't connect to your CRM, booking system, or job management software — missing the trigger points that make generation automatic.",icon:"Database"},
      {title:"Metrics Without Meaning",description:"Knowing your rating is 4.2 is useful. Knowing that improving to 4.6 would generate $5,000 more monthly revenue is transformative. Most platforms don't make this connection.",icon:"BarChart3"}]},
  { title:"The Complete Reputation Management Platform", subtitle:"Generation + monitoring + response + revenue — in one system",
    description:"Infinite Rankers' reputation management platform integrates with your business systems to trigger review generation at completion events, monitors 20+ platforms in real-time, uses AI to generate professional review responses, and tracks how reputation improvement translates to rankings, traffic, and revenue.",
    capabilities:[
      {title:"Trigger-Based Generation",description:"Review requests fire from actual business events — not schedules — achieving 3x better response rates.",icon:"CheckCircle"},
      {title:"20+ Platform Coverage",description:"Every major and industry-specific review platform monitored in real-time from a single dashboard.",icon:"Globe"},
      {title:"AI Response Engine",description:"Professional response suggestions generated for every review — dramatically improving response rates and quality.",icon:"MessageCircle"},
      {title:"Revenue Attribution",description:"Track how reputation improvement correlates to ranking changes, traffic growth, and new customer revenue.",icon:"DollarSign"}]},
  { title:"Platform Implementation in 4 Phases", subtitle:"From setup to revenue reporting in 14 days",
    steps:[
      {step:"1",title:"System Integration",description:"Connect to your CRM, booking platform, and job management software — establishing the triggers that power automatic review generation.",icon:"Database"},
      {step:"2",title:"Platform Configuration",description:"Set up monitoring for all relevant review platforms, configure AI response templates, and establish review routing and alert preferences.",icon:"Settings"},
      {step:"3",title:"Launch & Activate",description:"Go live with full automated generation, monitoring, and response capabilities — starting the process of systematically building your reputation asset.",icon:"Rocket"},
      {step:"4",title:"Revenue Reporting",description:"Establish monthly reporting connecting reputation metrics to business outcomes — showing the full ROI of your reputation investment.",icon:"BarChart3"}]},
  { title:"Platform Results Across Business Types", subtitle:"Comprehensive reputation management across industries",
    cases:[
      {business:"Cascade Dental Group",industry:"Multi-Location Dental",metrics:[{value:"4.9★",label:"Group Rating"},{value:"350%",label:"Review Growth"},{value:"$48K",label:"Monthly Revenue Growth"}],quote:"The platform manages reputation across all our locations simultaneously. One dashboard, AI responses, automated generation — our group rating is 4.9 and we attribute $48K in monthly revenue to our improved local search position."},
      {business:"Elite Auto Group",industry:"Automotive",metrics:[{value:"4.8★",label:"Dealership Rating"},{value:"289%",label:"More Reviews"},{value:"23%",label:"More Test Drives"}],quote:"We went from 120 reviews across 3 locations to 500+ in 6 months. The AI response system handles every review within hours. Our reputation is now a competitive advantage."},
      {business:"Pacific Coast Plumbing",industry:"Home Services",metrics:[{value:"4.9★",label:"Service Rating"},{value:"312%",label:"Review Volume"},{value:"56%",label:"More Service Calls"}],quote:"The revenue attribution reporting showed us that our Google ranking improvement — driven entirely by review growth — was generating $18,000/month in additional service calls."}]},
  { title:"Full Reputation Management Platform Features", subtitle:"The complete feature set for serious reputation management",
    items:[
      {title:"Automated Review Generation",description:"Trigger-based review requests connected to your business systems for 100% automated coverage.",icon:"Star"},
      {title:"20+ Platform Monitoring",description:"Real-time monitoring across all major and industry-specific review platforms.",icon:"Globe"},
      {title:"AI Response Engine",description:"Professional review response suggestions for every review — approve in seconds, post instantly.",icon:"MessageCircle"},
      {title:"Sentiment Analysis",description:"AI categorizes review themes to identify operational improvement opportunities from customer feedback.",icon:"BarChart3"},
      {title:"Revenue Attribution",description:"Connect reputation metrics to business outcomes — rankings, traffic, new customers, and revenue.",icon:"DollarSign"},
      {title:"Multi-Location Support",description:"Manage reputation across unlimited locations with individual and aggregate reporting dashboards.",icon:"Building"}]},
  { title:"Reputation as a Revenue Asset", subtitle:"The long-term compound value of systematic reputation management",
    description:"Every review generated is a permanent asset that improves your local search ranking, customer trust, and conversion rate. The compound effect of systematic reputation management creates an increasingly powerful competitive advantage — one that competitors with poorer ratings cannot easily overcome.",
    ioFeatures:[
      {title:"Reputation Compound Effect",description:"More reviews → better rankings → more customers → more reviews. The platform accelerates this flywheel."},
      {title:"Competitive Moat Building",description:"A reputation built on 400+ five-star reviews is nearly impossible for competitors to overtake quickly."},
      {title:"Trust as a Conversion Tool",description:"Businesses with 4.7+ star ratings convert 35% more website visitors than those below 4.5."}],
    comFeatures:[
      {title:"Local SEO",description:"Technical SEO combined with reputation growth creates dominant local search positions."},
      {title:"Paid Advertising",description:"Star ratings displayed in Google Ads improve click-through rates by 15-25% — improving paid advertising ROI."},
      {title:"Content Marketing",description:"Reviews and testimonials are powerful content assets leveraged across all marketing channels."}]},
  [{name:"Chris Nguyen",role:"CEO",company:"Nguyen Dental Partners",quote:"The platform connects to our practice management system so every post-visit review request fires automatically. We manage 8 locations from one dashboard. Group rating is 4.9 — we attribute $60K+/month in additional revenue to improved local search position.",rating:5},
   {name:"Laura Simmons",role:"Marketing Director",company:"Simmons Home Services",quote:"The revenue attribution reporting sold our ownership team. We showed them: here's our ranking at 3.8 stars, here's at 4.6, here's the $35,000/month revenue difference. Numbers management understands.",rating:5},
   {name:"Mark Chen",role:"Owner",company:"Chen Auto Group",quote:"I can see every review across 4 locations in one screen. AI generates responses I approve with one tap. Review volume increased 300% in 5 months. Easiest ROI I've ever documented in 20 years.",rating:5}],
  [{q:"What makes this different from Birdeye or Podium?",a:"Both platforms focus on messaging and basic review monitoring. Infinite Rankers centers on active review generation triggered by business events, AI response quality, and — crucially — connecting reputation metrics to revenue outcomes. The revenue attribution capability alone is unique."},
   {q:"How does multi-location reputation management work?",a:"Each location has its own monitoring, generation, and reporting — all visible in a single group dashboard. You can compare location performance and apply best practices from top-performing locations to underperforming ones."},
   {q:"What is the implementation timeline?",a:"Complete platform implementation typically takes 7-14 business days including all system integrations, platform configuration, team training, and soft launch testing period before full activation."},
   {q:"Can I manage the platform myself?",a:"Both options are available. Most clients choose our managed service. Self-serve dashboard access is also available for businesses that prefer direct control."},
   {q:"What happens if I want to switch platforms later?",a:"100% of your data — reviews, response history, settings — is exportable at any time with no restrictions or export fees."}],
  {title:"See the Reputation Management Platform Built for Revenue Growth",subtitle:"Free 30-minute platform demo — see how our reputation management drives ranking improvement and revenue growth, not just star ratings.",buttonText:"Book My Free Platform Demo"},
  ["google-review-software","review-management-software","local-business-reputation-management","reputation-management-for-small-business"]),

page("google-review-management-tool","service",
  "Google Review Management Tool | Monitor, Generate & Respond | Infinite Rankers",
  "The Google review management tool that generates more reviews, monitors in real-time, and helps you respond professionally. 4.8+ star ratings for 90% of clients.",
  "google review management tool, google review tool, manage google reviews, google reviews tool",
  { badge:"Complete Google Review Management", title:"Google Review Management Tool", titleHighlight:"That Generates, Monitors & Responds",
    subtitle:"A complete Google review management tool that actively generates reviews, monitors in real-time, and uses AI to help you respond professionally — not just a dashboard that shows you reviews you already knew about.",
    stats:[{value:"24/7",label:"Review Monitoring"},{value:"300%",label:"More Monthly Reviews"},{value:"4.8+",label:"Star Rating Achieved"},{value:"60 sec",label:"Response Suggestion Speed"}]},
  { title:"What a Real Google Review Tool Should Do", subtitle:"Why passive monitoring tools aren't enough",
    points:[
      {title:"Monitoring Without Generation Is Passive",description:"Monitoring tools show you reviews as they arrive. A real management tool also generates those reviews systematically — filling your Google profile with consistent positive feedback.",icon:"Star"},
      {title:"Slow Response Hurts Your Rating",description:"Google rewards businesses that respond to reviews regularly. If you're responding days later or not at all, you're leaving ranking signals on the table.",icon:"Clock"},
      {title:"Negative Reviews Need Instant Alerts",description:"Finding out about a 1-star review 3 days after it posts means 3 days of potential damage. Real-time monitoring with instant mobile alerts is the only acceptable standard.",icon:"Bell"},
      {title:"No Link to Business Systems",description:"A standalone Google review tool disconnected from your CRM or booking platform cannot generate trigger-based reviews — limiting review volume to what you manually request.",icon:"Database"}]},
  { title:"The Complete Google Review Management Workflow", subtitle:"Generation → Monitoring → Response → Reporting",
    description:"Our Google review management tool connects to your business systems to generate reviews automatically, monitors your Google profile in real-time, uses AI to draft professional responses instantly, and reports on how your Google rating improvement translates to search ranking and new customer acquisition.",
    capabilities:[
      {title:"Connected Review Generation",description:"Trigger-based review requests connected to your booking or job management system — 100% automated coverage.",icon:"Database"},
      {title:"Real-Time Google Monitoring",description:"New reviews appear in your dashboard within minutes of posting — with instant mobile push notifications for critical reviews.",icon:"Bell"},
      {title:"AI Response in 60 Seconds",description:"AI generates a professional, personalized Google review response in 60 seconds — you approve and post in one tap.",icon:"MessageCircle"},
      {title:"Rating & Ranking Correlation",description:"See how your Google rating changes correlate to local search ranking improvements — proving the tool's revenue impact.",icon:"TrendingUp"}]},
  { title:"Google Review Management in Action", subtitle:"From service completion to ranking improvement — automated",
    steps:[
      {step:"1",title:"Review Request Triggered",description:"A job is completed in your booking system — the tool automatically sends a personalized SMS review request within 30 minutes.",icon:"CheckCircle"},
      {step:"2",title:"Customer Reviews",description:"The customer taps the direct Google review link and leaves a 5-star review. Your dashboard updates in real-time.",icon:"Star"},
      {step:"3",title:"Response Generated",description:"AI drafts a professional, personalized response — you approve with one tap from your phone.",icon:"MessageCircle"},
      {step:"4",title:"Ranking Improves",description:"New review volume and your engagement rate (responding to reviews) signal quality to Google — improving your local search position.",icon:"TrendingUp"}]},
  { title:"Google Review Tool Results", subtitle:"Businesses improving ratings and rankings",
    cases:[
      {business:"Lakeside Dental",industry:"Dentistry",metrics:[{value:"4.9★",label:"Google Rating"},{value:"200+",label:"Reviews in 90 Days"},{value:"#1",label:"Local Search Position"}],quote:"Our Google tool finally connected to our practice management system. Review requests go out automatically after every appointment. We hit 200+ Google reviews in 90 days and now rank #1 for dentist in our city."},
      {business:"Reliable Roofing Co.",industry:"Roofing",metrics:[{value:"4.8★",label:"Google Rating"},{value:"50+",label:"Reviews/Month"},{value:"67%",label:"More Leads From Google"}],quote:"Real-time monitoring caught a 1-star review within 10 minutes. AI drafted a professional response, we posted within the hour. The customer updated to 4 stars after seeing our response."},
      {business:"Metro Fitness Studio",industry:"Fitness",metrics:[{value:"4.7★",label:"Studio Rating"},{value:"289%",label:"More Reviews"},{value:"43%",label:"More Memberships"}],quote:"We generate 40+ Google reviews per month now. Our rating went from 3.9 to 4.7 in 4 months. Membership inquiries from Google increased 43% as our local search ranking improved."}]},
  { title:"Google Review Management Tool Features", subtitle:"Everything you need to manage and grow your Google rating",
    items:[
      {title:"Automated Review Requests",description:"Trigger-based requests connected to your systems — not manual scheduling.",icon:"Star"},
      {title:"Real-Time Monitoring",description:"New reviews detected within minutes with instant mobile push alerts.",icon:"Bell"},
      {title:"AI Response Generation",description:"Professional response drafts in 60 seconds for every review — positive and negative.",icon:"MessageCircle"},
      {title:"Rating Trend Tracking",description:"Chart your Google rating over time with projections based on current review velocity.",icon:"TrendingUp"},
      {title:"Competitor Monitoring",description:"Track competitor Google ratings and review velocity — know when you're pulling ahead.",icon:"Target"},
      {title:"Review Link Generator",description:"Custom short links that take customers directly to your Google review form — eliminating navigation friction.",icon:"Link"}]},
  { title:"Google Review Management as a Local SEO Strategy", subtitle:"How consistent review management drives ranking improvement",
    description:"Google's local search algorithm uses review count, review velocity, rating, and review response rate as ranking signals. A systematic Google review management tool that generates reviews and prompts quick responses directly improves your local search position — turning reputation management into an SEO strategy.",
    ioFeatures:[
      {title:"Review Velocity Optimization",description:"Consistent monthly review generation signals to Google that your business is active and earning new customers regularly."},
      {title:"Response Rate Signals",description:"Businesses that respond to 80%+ of reviews consistently outrank those that don't — response rate is a confirmed Google ranking signal."},
      {title:"Keyword-Rich Reviews",description:"AI response suggestions include natural keyword mentions that Google reads as additional relevance signals."}],
    comFeatures:[
      {title:"Google Business Profile Optimization",description:"Complete GBP optimization including categories, services, photos, and Q&A — maximizing review growth impact."},
      {title:"Local Citation Building",description:"Consistent NAP citations across directories that reinforce your Google ranking signals."},
      {title:"Local Content Strategy",description:"Location and service-specific content that complements your review growth for comprehensive local SEO dominance."}]},
  [{name:"Brian Sullivan",role:"Owner",company:"Sullivan Electrical",quote:"The connection to our job management system is what makes it work. Every completed job triggers a review request automatically. We went from 8 reviews/month to 45/month. Completely hands-off for our team.",rating:5},
   {name:"Karen White",role:"Practice Manager",company:"White Family Dental",quote:"Real-time monitoring saved us twice from negative review situations. Both times, AI drafted a professional response within minutes of the review posting. Both customers updated their reviews after our response.",rating:5},
   {name:"David Park",role:"Owner",company:"Park Auto Repair",quote:"Our Google local ranking went from position 7 to position 1 for auto repair in our city after 5 months of systematic review generation. 150+ new reviews at 4.8 average. The tool paid for itself 10x over.",rating:5}],
  [{q:"Does the Google review tool work for any type of business?",a:"Yes. The tool is configured for any service business — dental, auto repair, home services, restaurants, fitness, healthcare, legal, and more. Review request timing and messaging are customized per business type."},
   {q:"How does the tool generate more Google reviews?",a:"By connecting to your business systems and sending personalized review requests triggered by actual service completion. Timing reviews to peak satisfaction and personalizing messages to the specific service generates 3x more responses than generic blasts."},
   {q:"Can the tool help me respond to negative Google reviews?",a:"Yes. When a negative review appears, you're instantly notified and AI generates a professional, empathetic response suggestion within 60 seconds."},
   {q:"How long until my Google rating improves?",a:"Most clients see measurable rating improvement within 60 days. Significant ranking improvements typically show in 90-120 days for competitive markets."},
   {q:"Does this tool help with reviews on platforms other than Google?",a:"Yes. While Google is the primary focus, the system also generates and monitors reviews on Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, and other relevant platforms — all in one unified dashboard."}],
  {title:"Get the Google Review Management Tool That Actually Grows Your Rating",subtitle:"Free 30-minute demo — see how automated review generation, real-time monitoring, and AI responses work together to put you at 4.8+ stars within 90 days.",buttonText:"Book My Free Google Review Demo"},
  ["google-review-software","automated-review-requests","review-management-software","get-more-google-reviews"]),

page("review-request-software","service",
  "Review Request Software | AI-Automated Review Generation | Infinite Rankers",
  "Review request software that sends personalized SMS and email requests automatically — generating 3x more reviews than manual requests. Setup in 24 hours. Free demo.",
  "review request software, review request tool, automated review requests software, send review requests automatically",
  { badge:"58% Avg. Response Rate", title:"Review Request Software", titleHighlight:"With 58% Response Rates",
    subtitle:"Most review request software sends generic emails that get ignored. Ours sends AI-personalized SMS requests at the perfect moment — achieving 58% response rates vs. 12% industry average.",
    stats:[{value:"58%",label:"Avg. SMS Response Rate"},{value:"3x",label:"More Reviews Than Competitors"},{value:"24hr",label:"Setup Time"},{value:"Zero",label:"Manual Effort Required"}]},
  { title:"Why Generic Review Request Software Fails", subtitle:"The 4 problems with most review request tools",
    points:[
      {title:"Email-Only Delivery",description:"Email review requests get 8-12% open rates. SMS gets 98% open rates. Software that only sends emails leaves 80% of your review potential uncaptured.",icon:"Mail"},
      {title:"Generic One-Size Templates",description:"'How was your experience?' is the most ignored review request template in existence. Personalized, service-specific requests get 3-5x better response rates.",icon:"FileText"},
      {title:"Scheduled Blasts Miss the Moment",description:"Sending review requests on Tuesday mornings to customers who got service on Saturday misses the peak satisfaction window.",icon:"Clock"},
      {title:"No Follow-Up Sequence",description:"A single review request captures 20-30% of potential reviews. A 3-touch sequence captures 60-70%. Most software stops after one message.",icon:"TrendingDown"}]},
  { title:"Review Request Software That Maximizes Response Rates", subtitle:"AI personalization + perfect timing + multi-touch sequences",
    description:"Our review request software combines service completion triggers, AI-personalized messaging, multi-channel delivery (SMS + email), and intelligent follow-up sequences to capture 3x more reviews than basic tools — without adding manual effort to your team's workflow.",
    capabilities:[
      {title:"Service Completion Triggers",description:"Requests fire automatically when service is complete — not on a schedule — capturing customers at actual peak satisfaction.",icon:"CheckCircle"},
      {title:"AI Personalized Messaging",description:"Every request mentions the specific service performed — making it feel personal, not automated.",icon:"FileText"},
      {title:"SMS-First Delivery",description:"SMS opens in under 3 minutes on average. Email follows 72 hours later for non-responders — covering all your bases.",icon:"MessageSquare"},
      {title:"Intelligent Follow-Up",description:"3-touch sequences that stop automatically when a review is submitted — maximizing capture without annoying customers.",icon:"TrendingUp"}]},
  { title:"How Our Review Request Software Works", subtitle:"From service completion to five-star review in 4 steps",
    steps:[
      {step:"1",title:"Service Completed",description:"Your booking system or CRM marks a service complete — triggering the review request sequence immediately.",icon:"CheckCircle"},
      {step:"2",title:"Personalized SMS Sent",description:"AI-personalized SMS goes out within 30 minutes with the specific service details and a direct link to your review page.",icon:"MessageSquare"},
      {step:"3",title:"Email Follow-Up",description:"Non-responders receive a slightly different personalized email at 72 hours — second chance with different channel and messaging.",icon:"Mail"},
      {step:"4",title:"Review Captured",description:"Customer clicks the direct link and leaves a review. Sequence stops automatically. Dashboard updates in real-time.",icon:"Star"}]},
  { title:"Review Request Software Results", subtitle:"Real clients generating more reviews with zero manual effort",
    cases:[
      {business:"Evergreen Dental",industry:"Dentistry",metrics:[{value:"4.9★",label:"Google Rating"},{value:"312%",label:"More Monthly Reviews"},{value:"62%",label:"Response Rate"}],quote:"Our old software sent Tuesday morning emails and got maybe 5 reviews per month. Infinite Rankers sends personalized SMS right after the appointment — we get 40+ reviews per month now with 62% response rate."},
      {business:"Sharp Edge Barbershop",industry:"Personal Services",metrics:[{value:"4.8★",label:"Rating"},{value:"267%",label:"More Reviews"},{value:"100%",label:"Request Coverage"}],quote:"Every single customer gets a review request automatically. We went from begging for reviews manually to generating 35+ per month without lifting a finger. Rating went from 4.1 to 4.8 in 60 days."},
      {business:"Rapid Response Plumbing",industry:"Plumbing",metrics:[{value:"4.9★",label:"Service Rating"},{value:"289%",label:"More Reviews"},{value:"44%",label:"More New Customers"}],quote:"The personalized messages mentioning the specific plumbing job — the words 'your water heater replacement' — make customers feel individually recognized. Response rates are incredible."}]},
  { title:"Complete Review Request Software Features", subtitle:"Everything you need to capture the most reviews possible",
    items:[
      {title:"Completion-Triggered Requests",description:"Automatic triggers from your existing systems — zero manual review request work required.",icon:"CheckCircle"},
      {title:"AI Message Personalization",description:"Service-specific request messages that reference the actual job performed — not generic templates.",icon:"FileText"},
      {title:"SMS + Email Delivery",description:"Multi-channel sequences maximizing reach and response rates across all customer preferences.",icon:"MessageSquare"},
      {title:"Intelligent Follow-Up",description:"3-touch sequences that stop automatically when reviews are submitted — no annoying repeat requests.",icon:"TrendingUp"},
      {title:"Direct Review Links",description:"One-click links to your review pages — eliminating the #1 reason customers abandon the review process.",icon:"Link"},
      {title:"Response Rate Analytics",description:"Track response rates by service type, day of week, and message version — continuously optimizing for maximum capture.",icon:"BarChart3"}]},
  { title:"Review Request Software as a Revenue Investment", subtitle:"Every review request sent is an investment in your local search ranking",
    description:"Review generation is the highest-ROI local marketing activity for service businesses — and review request software makes it systematic. Every review generated improves your local search ranking, customer trust signal, and click-through rate — compounding into significant revenue growth over 6-12 months.",
    ioFeatures:[
      {title:"Review ROI Calculation",description:"We calculate the value of each additional review based on your ranking, traffic, and conversion rates — showing true ROI."},
      {title:"Ranking Impact Tracking",description:"Monitor local search position changes as review volume grows — proving the connection between reviews and revenue."},
      {title:"A/B Request Testing",description:"Continuous testing of message variations, timing, and channels to maximize response rates for your specific customer base."}],
    comFeatures:[
      {title:"Local SEO",description:"Amplify your review growth with technical SEO optimization and Google Business Profile management."},
      {title:"Local Paid Ads",description:"Higher ratings improve Google Ad performance — a star rating upgrade is one of the best ad CTR improvements available."},
      {title:"Conversion Optimization",description:"Landing pages showcasing reviews prominently to convert review-driven traffic into customers."}]},
  [{name:"Melissa Ross",role:"Owner",company:"Ross Family Hair Salon",quote:"Our old email review requests got maybe 3 responses per month. SMS personalized requests get 25-30 per month. The timing difference alone — immediately after the appointment vs. Tuesday morning — makes all the difference.",rating:5},
   {name:"Jim Torres",role:"Owner",company:"Torres Roofing & Construction",quote:"The follow-up sequence is the part most review software misses. We capture 40% of our reviews on the second or third touch — customers who ignored the first SMS but responded to the email follow-up.",rating:5},
   {name:"Dr. Amy Park",role:"Dentist",company:"Park Orthodontics",quote:"I can see which service types generate the most reviews and at what response rate. That data helped us optimize our request timing for orthodontic consultations specifically — our highest-value patients.",rating:5}],
  [{q:"What response rates should I expect?",a:"SMS review requests typically achieve 40-67% response rates when personalized and timed correctly. Email-only requests average 8-15%. Our combined SMS + email sequences achieve 55-70% average response rates — 3-5x industry average for generic software."},
   {q:"How is this different from just texting customers manually?",a:"Manual texting is inconsistent — you forget, you send at wrong times, you send generic messages. Our software ensures 100% of customers receive personalized, perfectly-timed requests automatically, every single time."},
   {q:"Can I use my existing customer list to generate reviews?",a:"Yes. We can run a one-time reactivation campaign to your existing customer list to generate reviews from past customers — in addition to ongoing automation for new customers."},
   {q:"Does the software handle requests across multiple platforms?",a:"Yes. While Google is primary, we can configure review requests directing customers to the platform most valuable for your business — Google, Facebook, Yelp, Healthgrades, or others — based on your current rating gaps."},
   {q:"What integrations are supported?",a:"We integrate with major booking platforms (Calendly, Acuity), CRMs (HubSpot, GoHighLevel, Salesforce), job management software (ServiceTitan, Jobber, Housecall Pro), and POS systems — or via Zapier/webhook for custom integrations."}],
  {title:"Get Review Request Software That Gets 3x More Responses",subtitle:"Free 30-minute demo — see your current response rate vs. what's achievable, and test a personalized review request template for your business before committing.",buttonText:"Book My Free Review Software Demo"},
  ["automated-review-requests","google-review-software","get-more-google-reviews","review-management-software"]),

page("local-business-reputation-management","service",
  "Local Business Reputation Management | AI Review System | Infinite Rankers",
  "AI reputation management for local businesses — generate more reviews, monitor all platforms, and dominate local search. 500+ local business clients. Free reputation audit.",
  "local business reputation management, reputation management local business, local reputation management, online reputation local business",
  { badge:"Trusted by 500+ Local Businesses", title:"Local Business Reputation Management", titleHighlight:"That Builds Your Local Authority",
    subtitle:"Your Google rating is your most powerful local marketing asset. Our AI reputation management system builds it systematically — generating more reviews, monitoring every platform, and connecting your rating to your local search ranking.",
    stats:[{value:"500+",label:"Local Business Clients"},{value:"4.8+",label:"Average Local Rating"},{value:"#1",label:"Local Search Positions"},{value:"300%",label:"Review Volume Growth"}]},
  { title:"The Local Business Reputation Battle", subtitle:"Why reputation management is local marketing's most important battleground",
    points:[
      {title:"Local Search Rewards Reviews",description:"Google's local algorithm gives significant weight to review count, recency, and rating. Local businesses that consistently generate reviews hold ranking advantages that money can't easily buy.",icon:"MapPin"},
      {title:"87% of Customers Read Reviews",description:"Before calling a local business, 87% of customers read online reviews. Your reputation is the first sale you make — before they ever contact you.",icon:"Users"},
      {title:"Competitors Are Outreviewing You",description:"While you're not systematically generating reviews, your local competitors are. Every month that gap widens — reflected directly in search rankings and new customer calls.",icon:"TrendingDown"},
      {title:"One Bad Review Can Drop Your Calls 30%",description:"Research shows a 1-star rating decrease can reduce new customer inquiries by up to 33% for local businesses — making rating protection as important as generation.",icon:"AlertTriangle"}]},
  { title:"Complete Local Business Reputation Management", subtitle:"Built specifically for local service businesses",
    description:"Infinite Rankers' local reputation management is built around local business realities — service completion triggers, local platform coverage, Google Business Profile optimization, and the specific review platforms that matter most in your industry and geography.",
    capabilities:[
      {title:"Local Platform Coverage",description:"Google, Yelp, Facebook, and the specific industry and local platforms your customers use — all in one management system.",icon:"Globe"},
      {title:"Local Search Optimization",description:"Review generation strategy aligned with local search ranking factors — maximizing the ranking impact of every review.",icon:"MapPin"},
      {title:"Geo-Specific Reporting",description:"Track your reputation performance in your specific local market — not generic averages.",icon:"BarChart3"},
      {title:"Neighborhood-Level Insights",description:"For multi-location businesses, understand reputation performance by neighborhood or service area.",icon:"Map"}]},
  { title:"Building Your Local Business Reputation Systematically", subtitle:"4 steps from audit to local search dominance",
    steps:[
      {step:"1",title:"Local Audit",description:"We audit your current reputation across all relevant local platforms, compare to top local competitors, and identify gaps to close.",icon:"Search"},
      {step:"2",title:"Platform Strategy",description:"Prioritize which platforms to focus generation efforts on based on local search impact and your specific industry.",icon:"Target"},
      {step:"3",title:"Automated Generation",description:"Launch trigger-based review generation — every completed service automatically requests a review on your priority platforms.",icon:"Rocket"},
      {step:"4",title:"Local Ranking Impact",description:"Monthly reporting showing how reputation improvement correlates to local search ranking changes and new customer volume.",icon:"TrendingUp"}]},
  { title:"Local Business Reputation Results", subtitle:"Real outcomes from local businesses",
    cases:[
      {business:"Corner Stone Plumbing",industry:"Local Plumbing",metrics:[{value:"4.9★",label:"Local Rating"},{value:"#1",label:"Google Maps Position"},{value:"78%",label:"More Phone Calls"}],quote:"We went from position 7 on Google Maps to position 1 in 4 months. The only change was systematic review generation — from 40 reviews to 220+ at 4.9 stars. Maps position 1 generates 30+ calls per month we weren't getting before."},
      {business:"Sunrise Yoga Studio",industry:"Local Fitness",metrics:[{value:"4.8★",label:"Studio Rating"},{value:"212%",label:"More Reviews"},{value:"52%",label:"More New Members"}],quote:"Local reputation matters enormously for fitness studios — new members check reviews before visiting for the first time. Our rating went from 4.1 to 4.8 and new member inquiries increased 52%."},
      {business:"Patel Family Dentistry",industry:"Local Dental",metrics:[{value:"4.9★",label:"Practice Rating"},{value:"300%",label:"More Reviews"},{value:"89%",label:"New Patient Growth"}],quote:"We're a family dental practice competing with a large DSO chain nearby. We now outrank them on Google Maps with 4.9 stars and 280+ reviews. Review generation leveled the playing field."}]},
  { title:"Local Business Reputation Management Features", subtitle:"Everything your local business needs to dominate reputation",
    items:[
      {title:"Local Platform Focus",description:"Google, Yelp, Facebook, and the specific local platforms your customers in your market use — not generic national coverage.",icon:"Globe"},
      {title:"Competitor Tracking",description:"Monitor your top 5 local competitors' ratings and review velocity — stay ahead of the reputation race in your market.",icon:"Target"},
      {title:"Google Business Profile",description:"Complete GBP optimization and management to maximize the impact of your review growth on local search rankings.",icon:"MapPin"},
      {title:"Industry-Specific Platforms",description:"Healthgrades for healthcare, HomeAdvisor for home services, Avvo for legal — the specific platforms that matter for your business type.",icon:"Star"},
      {title:"Local Ranking Reports",description:"Monthly reports showing your local search position for key service terms alongside your reputation metrics.",icon:"BarChart3"},
      {title:"Neighborhood Reviews",description:"For businesses serving multiple areas, track and optimize reputation performance by geographic service area.",icon:"Map"}]},
  { title:"Local Reputation as a Business Moat", subtitle:"The competitive advantage only reviews can build",
    description:"For local service businesses, a strong reputation built on genuine customer reviews is the most defensible competitive advantage available. Competitors cannot easily fake 300 five-star reviews. Reputation management focuses your energy on building the asset that matters most for local business success.",
    ioFeatures:[
      {title:"Hyperlocal Focus",description:"Reputation strategy built around your specific local market, competitors, and customer base."},
      {title:"Sustainable Advantage",description:"A review asset built over time compounds — becoming increasingly difficult for competitors to overcome."},
      {title:"Trust at Scale",description:"300+ reviews establish the kind of trust that word-of-mouth alone can't generate — at local business scale."}],
    comFeatures:[
      {title:"Local SEO",description:"Technical optimization, citation building, and content strategy that compounds with your reputation growth."},
      {title:"Local Ads",description:"Google Local Services Ads leveraging your high rating for maximum local visibility."},
      {title:"Local Web Presence",description:"Location-optimized web pages that convert local search traffic driven by your reputation into customer inquiries."}]},
  [{name:"Paul Hernandez",role:"Owner",company:"Hernandez Plumbing",quote:"We're a 2-person plumbing operation. Automated reputation management gave us an enterprise-level review system. We have 4.9 stars with 180+ reviews and rank #1 for plumber in our city. We compete with 10-person companies because of it.",rating:5},
   {name:"Nina Patel",role:"Owner",company:"Patel's Indian Kitchen",quote:"The local restaurant market is brutal for reviews. We went from 3.8 to 4.7 stars in 3 months. Google Maps traffic to our profile increased 87%. New reservations from local search doubled.",rating:5},
   {name:"Sam Wilson",role:"Owner",company:"Wilson's Auto Service",quote:"The competitor tracking showed us falling behind a nearby shop that was aggressively generating reviews. We launched our system and within 90 days surpassed them on both volume and rating. Local search position switched in our favor.",rating:5}],
  [{q:"How important are Google reviews for local search rankings?",a:"Extremely important. Google uses review count, rating, review velocity, and response rate as local search ranking factors. Businesses that consistently generate reviews hold significant ranking advantages over those that don't."},
   {q:"Which review platforms matter most for local businesses?",a:"Google reviews have the highest impact on local search rankings. Beyond Google: Yelp matters for restaurants and some home services, Facebook for trust signals, and industry-specific platforms (Healthgrades for healthcare, HomeAdvisor for contractors, Avvo for legal)."},
   {q:"How do I respond to negative reviews?",a:"The key is speed and professionalism. AI-generated response suggestions provide a starting point within 60 seconds of a negative review appearing. Professional, empathetic responses frequently prompt customers to update their rating."},
   {q:"Can reputation management help me compete with larger chains?",a:"Yes. Local search algorithms favor proximity and review quality over brand size. A local business with 200+ five-star reviews frequently outranks national chains in local search — especially when combined with Google Business Profile optimization and local SEO."},
   {q:"How long does it take to build a strong local reputation?",a:"Meaningful rating improvement typically shows within 60 days. Strong competitive positioning — enough reviews to dominate local search — typically takes 3-6 months of consistent generation. The earlier you start, the faster you build the advantage."}],
  {title:"Build the Local Reputation That Makes You the Obvious Choice",subtitle:"Free local reputation audit — see your current position across all platforms, your top 3 competitors' reputation, and the exact strategy to become the highest-rated business in your local market.",buttonText:"Book My Free Local Reputation Audit"},
  ["google-review-software","review-management-software","reputation-management-for-small-business","get-more-google-reviews"])
];

addPages(pages);
console.log("Batch 3 complete: 8 review management pages added");
