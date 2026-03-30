const fs = require("fs");

function makePage(slug, type, seoTitle, seoDescription, seoKeywords, hero, painPoints, aiSystem, pipeline, results, features, ecosystem, testimonials, faqs, cta, related) {
  return { slug, type, seoTitle, seoDescription, seoKeywords, canonical: `https://infiniterankers.io/${slug}`, hero, painPoints, aiSystem, pipeline, results, features, ecosystem, testimonials, faqs, cta,
    relatedLandingPages: related || [], relatedServices: ["ai-receptionist","crm-automation","ai-sms-automation"],
    comLinks: [{ label: "SEO Services", url: "https://infiniterankers.com/seo-services/" }, { label: "Google Ads", url: "https://infiniterankers.com/google-ads-campaign-ppc-campaign/" }, { label: "Contact Us", url: "https://infiniterankers.com/contact-us/" }]
  };
}

const sh = (title, highlight, subtitle, badge, stats) => ({ badge, title, titleHighlight: highlight, subtitle, stats });
const pp = (title, subtitle, points) => ({ title, subtitle, points });
const pt = (title, desc, icon) => ({ title, description: desc, icon });
const ai = (title, subtitle, desc, caps) => ({ title, subtitle, description: desc, capabilities: caps });
const cap = (title, desc, icon) => ({ title, description: desc, icon });
const pl = (title, subtitle, steps) => ({ title, subtitle, steps });
const st = (step, title, desc, icon) => ({ step, title, description: desc, icon });
const res = (title, subtitle, cases) => ({ title, subtitle, cases });
const cs = (business, industry, metrics, quote) => ({ business, industry, metrics, quote });
const m = (value, label) => ({ value, label });
const ft = (title, subtitle, items) => ({ title, subtitle, items });
const fi = (title, desc, icon) => ({ title, description: desc, icon });
const eco = (title, subtitle, desc, ioF, comF) => ({
  title, subtitle, description: desc, ioFeatures: ioF, comFeatures: comF,
  comLinks: [{ label: "SEO Services", url: "https://infiniterankers.com/seo-services/" }, { label: "Google Ads", url: "https://infiniterankers.com/google-ads-campaign-ppc-campaign/" }, { label: "Contact Us", url: "https://infiniterankers.com/contact-us/" }]
});
const tm = (name, role, company, quote) => ({ name, role, company, quote, rating: 5 });
const faq = (q, a) => ({ q, a });
const cta = (title, subtitle, buttonText) => ({ title, subtitle, buttonText });

const NEW_PAGES = [
// ====== CATEGORY 2: REVIEW MANAGEMENT (20 pages) ======
makePage("google-review-software","service","Google Review Software | AI-Powered Review Generation | Infinite Rankers","AI-powered Google review software that generates 5-star reviews automatically. Businesses get 300%+ more Google reviews with our automated review request system. Free demo.","google review software, google review management software, automated google reviews, google review tool, get more google reviews software",
  sh("Google Review Software","That Actually Generates Reviews","Generic review software sends requests. Ours converts them — with AI-timed review requests that trigger at peak satisfaction moments, generating 300%+ more reviews than scheduled email blasts.",
    "300%+ More Google Reviews",
    [m("300%","More Reviews Generated"),m("4.8★","Avg. Rating Achieved"),m("67%","Review Response Rate"),m("60 days","To Full Impact")]),
  pp("Why Most Review Software Fails","The four reasons your current review tool isn't generating enough reviews",[
    pt("Wrong Timing","Generic software sends review requests on schedules — not when customers are most satisfied. Timing is everything for review response rates.","Clock"),
    pt("One-Channel Requests","Email-only review requests get 8-12% open rates. SMS + email + personalization gets 40-67%. Most software misses this.","MessageSquare"),
    pt("No Follow-Up Sequence","A single request captures 20-30% of potential reviews. A 3-touch sequence captures 60-70%. Most tools send once and stop.","TrendingDown"),
    pt("Generic Messaging","'How was your experience?' gets ignored. Personalized, service-specific requests referencing the actual job done generate 3x more responses.","FileText")]),
  ai("AI Google Review Software That Works","Why AI-powered timing and personalization drives review response rates",
    "Infinite Rankers' review generation system uses AI to identify optimal request timing based on service completion data, personalizes every request with service-specific content, and runs multi-touch sequences that capture reviews from satisfied customers who ignored the first message.",
    [cap("AI-Optimized Timing","Review requests trigger based on service completion signals — not arbitrary schedules — for maximum response rates.","Clock"),
     cap("SMS + Email Sequences","Multi-channel review requests with intelligent follow-up that captures 3x more reviews than single-touch email requests.","MessageSquare"),
     cap("Personalized Requests","Every request references the specific service performed — cleaning, repair, consultation — for dramatically higher response rates.","FileText"),
     cap("Multi-Platform Coverage","Google, Facebook, Yelp, Healthgrades, Zocdoc, and industry-specific platforms — all covered in one system.","Globe")]),
  pl("How Our Google Review Software Works","4 steps from service completion to five-star review",[
    st("1","Service Completion Signal","Your CRM, booking system, or job management software signals service completion — triggering the review request sequence.","CheckCircle"),
    st("2","Personalized Request","AI generates a personalized review request referencing the specific service, technician, and outcome — sent via SMS within 30 minutes of completion.","MessageSquare"),
    st("3","Intelligent Follow-Up","For non-responders, a 72-hour follow-up via email includes a direct link to your Google review page — capturing responses missed by the first touch.","Mail"),
    st("4","Review Monitoring","All new reviews are monitored in real-time with AI-suggested responses generated for your team to approve and post.","Star")]),
  res("Real Results From Our Google Review Software","Businesses growing their ratings and review volume",[
    cs("Perfect Smile Dental","Dental",[m("4.9★","From 3.7 Stars"),m("312%","More Monthly Reviews"),m("89%","Review Response Rate")],"We went from 45 Google reviews to 200+ in 90 days. Our Google rating jumped from 3.7 to 4.9 and we're consistently in the top 3 local search results. The timing feature alone tripled our response rate."),
    cs("Apex Home Services","Home Services",[m("4.8★","Achieved Rating"),m("289%","Review Volume Growth"),m("67%","Response Rate")],"We generate 30-40 new Google reviews every month automatically. Our local search ranking went from page 2 to the map pack within 60 days of launching the system."),
    cs("Northview Auto Repair","Auto Repair",[m("4.9★","Google Rating"),m("267%","More Reviews"),m("44%","More New Customers")],"The personalized review requests mentioning the specific service performed make a huge difference. Response rates went from 12% with our old software to 58% with Infinite Rankers.")]),
  ft("Complete Google Review Software Features","Everything you need to dominate your Google rating",[
    fi("AI-Timed Requests","Requests fire at service completion — not scheduled blasts — capturing customers at peak satisfaction.","Clock"),
    fi("SMS + Email Delivery","Multi-channel delivery doubles reach compared to email-only review tools.","MessageSquare"),
    fi("Personalized Request Copy","Service-specific messaging that references what you actually did — not generic 'how was your experience?' templates.","FileText"),
    fi("Multi-Platform Support","Google, Facebook, Yelp, Healthgrades, and industry-specific review platforms all covered.","Globe"),
    fi("Review Response AI","AI-generated response suggestions for every review — positive and negative — for quick, professional engagement.","MessageCircle"),
    fi("Real-Time Monitoring","Instant alerts for new reviews across all platforms with dashboard tracking of ratings and volume over time.","Bell")]),
  eco("Google Review Software Built for Revenue","More reviews = better rankings = more customers",
    "Google reviews directly impact your local search rankings, click-through rates, and customer trust. Our AI-powered Google review software treats review generation as a revenue activity — not a checkbox — building systems that consistently generate reviews that drive measurable business growth.",
    [cap("Revenue-Linked Reviews","Every review generated is tied to a customer journey stage and revenue outcome — not just a star rating count.","DollarSign"),
     cap("Local SEO Integration","Reviews are tracked against local search ranking movement — showing you the direct correlation between review volume and ranking position.","MapPin"),
     cap("Competitive Review Analysis","Monitor your competitors' review volume and ratings to identify opportunities to outrank them on local search.","BarChart3")],
    [cap("Local SEO","Combine review growth with local SEO optimization for maximum map pack domination.","MapPin"),
     cap("Google Ads","Leverage your improved ratings in Google Ads — higher ratings increase ad click-through rates significantly.","Target"),
     cap("Web Design","Landing pages that showcase your reviews and ratings prominently to maximize conversion from organic and paid traffic.","Globe")]),
  [tm("Rachel Kim","Practice Owner","Kim Family Dental","Our Google rating went from 3.8 to 4.9 in 3 months. We generate 25+ new reviews every month automatically. The personalized SMS requests get responses from patients who would never reply to an email."),
   tm("Marcus Johnson","Owner","Johnson's HVAC","After-service review requests hit customers when their house is perfectly comfortable again — peak satisfaction. Response rates are 58% for SMS vs. 12% we got from email. Night and day difference."),
   tm("Amy Torres","GM","Torres Auto Center","The review response suggestions save us 20 minutes a day. AI generates professional responses to every review — we just approve and post. Our engagement rate on reviews went from 10% to 100%.")],
  [faq("How does AI know when to send a review request?","The system connects to your booking platform, CRM, or job management software to identify service completion events — triggering review requests based on actual completion signals, not time-based schedules."),
   faq("Which platforms does the review software support?","Google Business Profile, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, Angi, BBB, and any industry-specific review platform relevant to your business. Priority platforms are configurable."),
   faq("What response rates should I expect from SMS review requests?","Most clients achieve 40-67% SMS review response rates compared to 8-15% for email-only requests. Combined SMS + email sequences typically hit 55-70% response rates with the right personalization and timing."),
   faq("Does it monitor and respond to negative reviews?","Yes. The system monitors all review platforms in real-time and generates AI-suggested responses for every review — positive and negative. Your team reviews and approves responses before posting."),
   faq("How long until I see my Google rating improve?","Most clients see measurable rating improvement within 30-60 days. The combination of increased positive review volume and consistent professional responses to existing reviews typically lifts ratings 0.5-1.5 stars within 90 days.")],
  cta("Stop Begging for Reviews. Start Generating Them Automatically.","Free 30-minute review software demo — see your current review volume, response rate gap, and the exact system we'd build to get your Google rating to 4.8+ within 90 days.","Book My Free Review Software Demo"),
  ["get-more-google-reviews","review-management-software","automated-review-requests","local-business-reputation-management"]),

makePage("get-more-google-reviews","service","How to Get More Google Reviews | Automated Review System | Infinite Rankers","Get more Google reviews automatically with AI-timed review requests. Our system generates 300%+ more reviews — boosting your local search ranking and star rating. Free setup guide.","get more google reviews, how to get more google reviews, increase google reviews, more google reviews, google review strategy",
  sh("Get More Google Reviews","Without Asking Manually","Most businesses get 2-5 Google reviews per month. Businesses using our automated review system generate 20-50+ reviews monthly — boosting local search rankings and converting more browsers into customers.",
    "20-50+ Reviews Per Month",
    [m("300%","More Monthly Reviews"),m("4.8★","Average Rating Achieved"),m("60 days","To Top Local Rankings"),m("Zero","Manual Review Chasing")]),
  pp("Why You're Not Getting Enough Google Reviews","The 4 barriers between you and a 4.9-star rating",[
    pt("You Forget to Ask","When you're busy running a business, asking customers for reviews falls to the bottom of the list. Automation eliminates this — every completed service triggers a request automatically.","Clock"),
    pt("Manual Requests Feel Awkward","Directly asking customers for reviews feels uncomfortable for most business owners. An automated, professional request feels natural and gets better response rates.","MessageSquare"),
    pt("Email Requests Get Ignored","Email review requests get 8-12% open rates. SMS requests get 40-67% — and we send both. You're missing 80% of your review potential with email-only approaches.","Mail"),
    pt("The Competition Is Pulling Ahead","While you have 50 reviews, your top competitor has 400. Google's algorithm favors review volume and recency — every month without a review system widens that gap.","TrendingDown")]),
  ai("The System That Gets You 20-50+ Reviews Per Month","Automated, personalized, and timed for maximum response",
    "Our automated review system connects to your service completion data, sends personalized SMS and email review requests at the optimal moment, follows up with non-responders, and monitors all incoming reviews across every major platform. Most clients see their review volume increase 200-400% within 60 days.",
    [cap("Service Completion Triggers","Reviews requested automatically when service is marked complete — not on a schedule, but at actual peak satisfaction moments.","CheckCircle"),
     cap("Personalized SMS Requests","AI writes personalized review requests mentioning the specific service performed — response rates average 58% vs. 12% for generic requests.","MessageSquare"),
     cap("3-Touch Follow-Up","SMS → Email → Final reminder captures 3x more reviews than a single request — reaching customers who missed the first message.","TrendingUp"),
     cap("Review Page Direct Links","One-click links to your Google review page eliminate friction — customers land directly on the review form.","Link")]),
  pl("Your Path to 50+ Google Reviews Per Month","4 steps from installation to ranking #1 locally",[
    st("1","Connect Your Systems","We connect to your booking platform, CRM, or point-of-sale system to identify completed service events automatically.","Database"),
    st("2","Configure Your Requests","We build personalized review request templates for each service type you offer — customized messaging that feels authentic, not automated.","FileText"),
    st("3","Launch & Monitor","The system goes live, requests begin flowing, and you see reviews accumulate on a real-time dashboard updated hourly.","Rocket"),
    st("4","Optimize & Scale","Monthly optimization reviews identify response rate improvements, timing adjustments, and new platform opportunities to maximize review volume.","TrendingUp")]),
  res("Businesses That Transformed Their Google Reviews","Real review growth from real clients",[
    cs("Shine On Dental","Dentistry",[m("4.9★","From 3.4 Stars"),m("425%","More Monthly Reviews"),m("Top 3","Local Search Position")],"We had 38 Google reviews after 8 years in business. Infinite Rankers got us to 200+ in 90 days. Our local search ranking jumped from page 3 to the map pack top 3. New patient calls doubled."),
    cs("Peak Performance Auto","Auto Repair",[m("50+","Monthly Reviews"),m("4.8★","Google Rating"),m("62%","More New Customers")],"We went from 4 reviews/month to 55/month. The consistency matters as much as the volume — Google's algorithm rewards regular new reviews, and our AI keeps the stream constant."),
    cs("Comfort Air HVAC","HVAC",[m("4.9★","Rating Achieved"),m("312%","More Reviews"),m("$24K","Monthly Revenue Increase")],"After 3 months of automated review generation, we rank #1 on Google Maps for HVAC in our city. That ranking alone generates 15-20 new customer calls per month we weren't getting before.")]),
  ft("Everything You Need to Get More Google Reviews","The complete automated review generation system",[
    fi("Automated Review Requests","Every completed service triggers a review request automatically — no manual effort required from you or your team.","Cpu"),
    fi("SMS + Email Delivery","Double your reach with multi-channel review requests — SMS for instant response, email for follow-up.","MessageSquare"),
    fi("Personalized Copy","AI writes service-specific request messages — not generic templates — for dramatically higher response rates.","FileText"),
    fi("Review Link Generator","Direct, one-click links to your Google review form eliminate the biggest friction point in the review process.","Link"),
    fi("Review Monitoring Dashboard","Real-time tracking of all reviews across Google, Facebook, Yelp, and other platforms in one dashboard.","BarChart3"),
    fi("Response Suggestion AI","AI generates professional responses to every review — making consistent engagement effortless for your team.","MessageCircle")]),
  eco("More Reviews = Better Rankings = More Revenue","The compound effect of automated review generation",
    "Google reviews are the highest-impact, lowest-cost local SEO lever available to service businesses. Every review you generate improves your local search ranking, click-through rate, and customer trust — creating a compounding effect where better rankings bring more customers, who generate more reviews, which improve rankings further.",
    [cap("Review-to-Ranking Connection","We track how your review growth correlates to ranking improvements — showing the direct revenue impact of each new review.","TrendingUp"),
     cap("Competitive Gap Analysis","Monitor competitors' review velocity to stay ahead — and identify opportunities where a surge in your reviews can close a ranking gap.","BarChart3"),
     cap("Review Quality Signals","AI helps flag reviews that Google values most — detailed, service-specific reviews that carry more ranking weight than short star-only reviews.","Star")],
    [cap("Local SEO","Combine review growth with citation building, Google Business Profile optimization, and on-page local SEO for maximum impact.","MapPin"),
     cap("Paid Local Ads","Use your improved star rating in Google Ads extensions — higher ratings increase CTR by 15-25% on average.","Target"),
     cap("Website Design","Display your growing review count prominently on your site — social proof that converts visitors into customers.","Globe")]),
  [tm("Dr. James Park","Practice Owner","Park Chiropractic","We went from 22 reviews to 180+ in 4 months. Our Google ranking for 'chiropractor near me' went from position 8 to position 2. New patient bookings increased 65% in that period."),
   tm("Sandra Williams","Owner","Williams Plumbing","The system sends review requests automatically when we mark a job complete in our system. We generate 40+ reviews per month now — without anyone on my team doing anything manually."),
   tm("Kevin Ross","GM","Ross Family Dental","Our 4.9-star rating with 300+ reviews is our best marketing asset. Every new patient tells us they found us through Google reviews. The system paid for itself in month one.")],
  [faq("How many more reviews will I get per month?","Most businesses see review volume increase 200-400% within 60 days. A typical client going from 5 reviews/month reaches 20-50+/month depending on their service volume and the response rate of their customer base."),
   faq("Will this work for any type of business?","Yes. The system works for any service business that has customer interactions — dental, auto repair, HVAC, plumbing, roofing, med spa, restaurants, law firms, and more. We customize request timing and messaging for each industry."),
   faq("How do I get customers to actually click the review link?","SMS review requests with personalized content and direct Google review links achieve 40-67% click-through rates. The combination of timing (immediately after service), personalization (mentioning what you did), and the direct link eliminates every friction point."),
   faq("What if I get a negative review?","The system monitors all reviews in real-time. When a negative review appears, you're immediately notified with an AI-generated professional response suggestion. Quick, thoughtful responses to negative reviews actually improve your overall rating and demonstrate customer care."),
   faq("How long before I see my Google ranking improve?","Most clients see ranking improvement within 60-90 days. Google's algorithm responds to review velocity and recency — consistent monthly review generation produces sustained ranking improvements, while a single burst may not hold.")],
  cta("Start Generating 20-50+ Google Reviews Every Month","Free review system demo — see exactly how many reviews you're losing and what a 3-month automated system would do to your Google rating and local search ranking.","Book My Free Review Demo"),
  ["google-review-software","review-management-software","automated-review-requests","local-business-reputation-management"]),

makePage("automated-review-requests","service","Automated Review Requests | AI-Powered Review Generation System | Infinite Rankers","Automated review request system that sends personalized SMS and email review requests at the perfect moment — generating 3x more reviews with zero manual effort. Free demo.","automated review requests, automatic review requests, review request automation, automated review generation, automate review requests",
  sh("Automated Review Requests","That Get 3x More Responses","Send review requests at the perfect moment, with personalized content, across SMS and email — automatically. Our system generates 3x more reviews than manual requests or scheduled blasts.",
    "3x More Reviews, Zero Manual Work",
    [m("3x","More Reviews Than Manual"),m("58%","Avg. SMS Response Rate"),m("Zero","Manual Review Chasing"),m("7 days","To First Automated Reviews")]),
  pp("Why Manual Review Requests Don't Scale","The problems that automated review requests solve permanently",[
    pt("You Forget to Ask","When you have 10 jobs to manage, asking for reviews gets forgotten. Automation ensures 100% of completed jobs trigger a review request — no exceptions.","Clock"),
    pt("Inconsistent Timing","Manual requests happen when you remember — often days after service. Automated requests go out within 30 minutes of completion, at peak satisfaction.","Timer"),
    pt("Generic Templates Ignored","'Please leave us a review' gets ignored. AI-personalized requests mentioning the specific service performed get 3x better response rates.","FileText"),
    pt("Single Channel Limits Reach","Email-only review requests miss 60% of customers who don't open emails. SMS + email automation captures responses from both groups.","MessageSquare")]),
  ai("Automated Review Requests That Actually Work","AI that knows when, how, and what to send",
    "Our automated review request system uses service completion signals to trigger perfectly-timed, personalized review requests via SMS and email — with intelligent follow-up sequences that capture reviews from customers who missed the first message.",
    [cap("Completion-Triggered Requests","Requests fire automatically when your system marks a job complete — not on a schedule, but at the actual optimal moment.","CheckCircle"),
     cap("AI-Personalized Messaging","Each request is personalized with the specific service, date, and technician — making it feel human, not automated.","FileText"),
     cap("Multi-Touch Sequences","SMS first, email follow-up at 72 hours, final reminder at 5 days — capturing 3x more reviews than single-touch requests.","TrendingUp"),
     cap("Direct Review Links","One-click links take customers directly to your Google review form — eliminating the #1 drop-off point in the review process.","Link")]),
  pl("How Automated Review Requests Work","From service completion to five-star review in 4 automated steps",[
    st("1","Job Completion Detected","Your CRM or booking platform signals job completion — triggering the review sequence automatically with zero manual input.","CheckCircle"),
    st("2","Personalized SMS Sent","Within 30 minutes, a personalized SMS goes out referencing the specific service and providing a direct link to your review page.","MessageSquare"),
    st("3","Email Follow-Up","Non-responders receive a personalized email at 72 hours — a different channel, slightly different message, same direct review link.","Mail"),
    st("4","Final Reminder (Optional)","A final SMS at 5 days captures late-decision reviewers — the sequence stops the moment a review is submitted.","Star")]),
  res("Automated Review Results Across Industries","Clients generating more reviews with zero manual effort",[
    cs("Blue Sky Roofing","Roofing",[m("312%","More Monthly Reviews"),m("4.8★","Google Rating"),m("100%","Review Request Coverage")],"Every completed roofing job now gets a review request automatically. We went from 3 reviews/month to 35/month. Our Google ranking jumped from position 9 to the map pack in 4 months."),
    cs("Family Vision Center","Optometry",[m("4.9★","Patient Rating"),m("267%","Review Growth"),m("89%","Request Delivery Rate")],"Automated requests go out after every eye exam automatically. Patients receive them while they're still in the parking lot — still thinking about their experience. Our response rate is 62%."),
    cs("Metro Maid Service","Home Cleaning",[m("289%","More Reviews"),m("4.8★","Cleaning Rating"),m("55 reviews","Generated/Month")],"The personalized review requests mention the specific cleaning service and the name of the team that visited. Customers feel like we remembered them personally. Response rates are incredible.")]),
  ft("Complete Automated Review Request System","Every feature you need to automate your review generation",[
    fi("Service Completion Triggers","Connect to your existing systems to trigger review requests based on real completion events — not time delays.","CheckCircle"),
    fi("Personalized AI Messaging","AI generates unique, service-specific request messages — not templates that customers recognize and ignore.","FileText"),
    fi("SMS + Email Automation","Multi-channel delivery sequences that reach customers on their preferred communication channel.","MessageSquare"),
    fi("Direct Review Link Generation","Custom short links that take customers directly to your review page — eliminating navigation friction.","Link"),
    fi("Sequence Management","Automated follow-up sequences that stop the moment a review is submitted — no annoying repeat requests.","Settings"),
    fi("Review Volume Reporting","Monthly reports showing review volume growth, response rates, and rating trends across all platforms.","BarChart3")]),
  eco("Automated Review Requests as a Revenue Strategy","Turn customer satisfaction into Google ranking and new customer acquisition",
    "Every automated review request is an investment in your local search ranking, customer trust, and new customer acquisition cost. Businesses with 200+ Google reviews convert 35% more website visitors than businesses with 50 reviews — making review automation one of the highest-ROI activities for local service businesses.",
    [cap("Review-to-Revenue Tracking","Monitor how review volume growth correlates to ranking improvement and new customer inquiries — proving review ROI in real numbers.","DollarSign"),
     cap("Rating Trend Analysis","Track your star rating trajectory over time and project when you'll hit target ratings based on current review velocity.","TrendingUp"),
     cap("Competitor Review Monitoring","See how your review growth compares to competitors — identify when you're pulling ahead on local search.","BarChart3")],
    [cap("Local SEO","Amplify review growth with citation building and Google Business Profile optimization.","MapPin"),
     cap("Paid Advertising","Higher ratings improve Google Ads performance — better CTR means lower cost per conversion.","Target"),
     cap("Web Presence","Showcase your review count and rating prominently across all digital touchpoints.","Globe")]),
  [tm("Steve Miller","Owner","Miller's Landscaping","The automated requests go out the moment we finish a job. Customers are still walking around admiring the work when the review request hits their phone. Our response rate is 71%. It's remarkable."),
   tm("Dr. Lisa Park","Dentist","Park Dental","Every patient gets a review request automatically after their appointment. We generate 30+ reviews monthly with zero effort from our front desk team. Our practice rating went from 3.9 to 4.8 in 5 months."),
   tm("Robert Chen","Owner","Chen Contracting","Before automation, we asked maybe 20% of customers for reviews. Now 100% get a personalized request. Our review volume increased 400%. The consistency is what makes it powerful.")],
  [faq("What systems does it connect to for completion triggers?","We integrate with major CRMs (HubSpot, Salesforce, GoHighLevel), booking platforms (Calendly, Acuity), job management software (ServiceTitan, Jobber, Housecall Pro), and most POS systems — or via Zapier/webhook for custom systems."),
   faq("Can I customize the review request messages?","Yes. We build custom request templates for each service type you offer, with AI personalization adding service-specific details automatically. You approve all templates before launch."),
   faq("What happens if a customer leaves a bad review?","The system monitors for negative reviews in real-time. When one appears, you're notified immediately with an AI-generated response suggestion. Responding quickly and professionally to negative reviews significantly reduces their impact on your overall rating."),
   faq("How do I stop the sequence once a customer reviews?","Automatically. The moment a customer submits a review on any platform, the system detects it and stops the sequence — preventing duplicate requests and annoying satisfied customers."),
   faq("How long until I see more reviews?","Most clients receive their first automated review within 24 hours of launch. Meaningful volume increases — 200-300% more reviews per month — typically show by the end of the first 30 days.")],
  cta("Automate Your Review Requests — Start Generating 20-50 Reviews/Month","Free review automation demo showing your service completion triggers, personalized request templates, and projected review volume increase in your first 90 days.","Book My Free Review Automation Demo"),
  ["google-review-software","get-more-google-reviews","review-management-software","automate-review-requests"]),

makePage("review-management-software","service","Review Management Software | AI-Powered Platform | Infinite Rankers","AI review management software that generates reviews, monitors all platforms, and helps you respond — all in one dashboard. 4.8+ star ratings achieved for 90% of clients. Free demo.","review management software, online review management, reputation management software, review management platform, review monitoring software",
  sh("Review Management Software","Built for Revenue, Not Just Ratings","Track, generate, and respond to reviews across every platform from one AI-powered dashboard. 90% of clients reach a 4.8+ star rating within 90 days.",
    "4.8+ Stars Achieved for 90% of Clients",
    [m("20+","Platforms Monitored"),m("4.8+","Star Rating Achieved"),m("90%","Client Success Rate"),m("90 days","Avg. to Target Rating")]),
  pp("What Most Review Management Software Gets Wrong","The 4 gaps in typical review tools",[
    pt("Monitoring Without Generation","Most review management software monitors reviews — it doesn't actively generate them. Monitoring without generation is defensive. Generation is offensive.","BarChart3"),
    pt("No AI-Powered Responses","Manual review responses take time. Most software doesn't suggest AI responses, leaving teams either not responding or copy-pasting generic templates.","MessageCircle"),
    pt("Platform Fragmentation","Reviews come in across Google, Facebook, Yelp, and industry-specific sites. Most tools monitor 3-5 platforms — missing critical industry-specific review sites.","Globe"),
    pt("No Revenue Attribution","Knowing you have 4.2 stars is useful. Knowing that going to 4.7 stars generated $8,000/month in additional revenue is actionable. Most tools don't connect reviews to revenue.","DollarSign")]),
  ai("AI Review Management That Generates AND Manages","The offensive and defensive review strategy in one platform",
    "Infinite Rankers' review management platform combines automated review generation, real-time monitoring across 20+ platforms, AI-powered response suggestions, and revenue attribution — turning review management from a passive activity into an active revenue driver.",
    [cap("Active Review Generation","AI-timed review requests generate 3x more reviews per month — transforming review management from defensive to offensive.","TrendingUp"),
     cap("20+ Platform Monitoring","Google, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, and 15+ other platforms monitored in one dashboard.","Globe"),
     cap("AI Response Suggestions","AI generates professional, personalized responses to every review — positive and negative — for your team to approve and post.","MessageCircle"),
     cap("Revenue Impact Tracking","See how rating improvements correlate to ranking changes, website traffic increases, and new customer acquisition.","DollarSign")]),
  pl("How Our Review Management Platform Works","Generation, monitoring, response, and reporting in one system",[
    st("1","Generate Reviews","Automated review requests triggered by service completion generate consistent monthly review volume across all target platforms.","Star"),
    st("2","Monitor All Platforms","Real-time monitoring across 20+ review platforms with instant alerts for new reviews — especially critical negative reviews.","Bell"),
    st("3","Respond Intelligently","AI generates response suggestions for every review — your team approves and posts in seconds, not minutes.","MessageCircle"),
    st("4","Track Revenue Impact","Monthly reporting connects review volume and rating changes to ranking improvements and revenue growth.","BarChart3")]),
  res("Review Management Results Across Industries",[
    cs("Summit Dental Group","Multi-Location Dental",[m("4.9★","Group Rating"),m("400%","Review Growth"),m("28 locations","Managed"],"Managing reviews across 28 dental locations was a nightmare before Infinite Rankers. Now I see all reviews in one dashboard, AI handles responses, and our group rating is 4.9 across every location."),
    cs("Highpoint Home Services","Home Services",[m("4.8★","Company Rating"),m("289%","More Monthly Reviews"),m("$31K","Monthly Revenue Growth")],"Our review management was completely reactive — we'd respond when we noticed a review, which was often days later. The AI monitoring and response system makes us look incredibly professional and responsive."),
    cs("Elite Chiropractic Group","Chiropractic",[m("4.9★","Patient Rating"),m("312%","Review Volume"),m("91%","Response Rate")],"The AI response suggestions are genuinely good — they reference specific details from the review and sound human. We respond to 100% of reviews now. Before, we responded to maybe 20%.")]),
  ft("Complete Review Management Platform Features",[
    fi("Automated Review Generation","Trigger-based review requests that generate consistent monthly review volume without manual effort.","Star"),
    fi("20+ Platform Monitoring","Real-time monitoring across all major review platforms with unified dashboard view.","Globe"),
    fi("AI Response Suggestions","Professionally-written response suggestions for every review — approve and post in seconds.","MessageCircle"),
    fi("Sentiment Analysis","AI categorizes review themes — identifying common praise and consistent complaints for operational improvement.","BarChart3"),
    fi("Competitive Benchmarking","Compare your rating and review velocity to local competitors — identify when you're winning and where gaps exist.","Target"),
    fi("Revenue Attribution","Connect review improvement to ranking changes, traffic growth, and new customer acquisition for full ROI visibility.","DollarSign")]),
  eco("Review Management as a Revenue Strategy","Why managing reviews is actually about growing revenue",
    "The businesses ranking #1 in local search aren't just good at what they do — they're systematic about managing their online reputation. Review management software that actively generates and intelligently manages reviews compounds over time, building a reputation asset that drives organic growth for years.",
    [cap("Reputation Asset Building","Every review generated is a permanent asset that improves your ranking, trust, and conversion rate.","TrendingUp"),
     cap("Compound Ranking Effect","More reviews → better local rankings → more customers → more reviews. The flywheel accelerates over time.","RefreshCw"),
     cap("Churn Reduction","Businesses with 4.7+ star ratings retain customers 40% better than those with sub-4.5 ratings — reviews drive loyalty, not just acquisition.","Users")],
    [cap("Local SEO","Technical optimization, citation building, and Google Business Profile management complement your review strategy.","MapPin"),
     cap("Paid Advertising","Higher ratings improve paid ad performance — Google shows star ratings in ads, improving CTR by 15-25%.","Target"),
     cap("Content Marketing","Blog content that leverages your expertise and reviews to build topical authority and organic rankings.","FileText")]),
  [tm("Patricia Walsh","Owner","Walsh Med Spa","The AI response suggestions are the feature I didn't know I needed. We respond to every review within 24 hours now — Google loves it, and customers notice. Our response rate went from 15% to 100% literally overnight."),
   tm("Alex Thompson","GM","Thompson Auto Group","Managing reviews across 3 locations was impossible before. One dashboard, AI responses, automated generation — we went from 180 total reviews to 800+ in 6 months and our group rating hit 4.8."),
   tm("Dr. Emma Liu","Practice Owner","Liu Orthopedics","The competitor benchmarking showed us we were losing ground to a nearby practice with 3x our review count. Within 90 days of launching our automated generation, we closed the gap completely.")],
  [faq("How many review platforms does the software monitor?","We monitor 20+ platforms including Google, Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, Angi, Houzz, TripAdvisor, BBB, and industry-specific platforms relevant to your business type."),
   faq("Does the AI response feature post responses automatically?","No — and intentionally. AI generates suggestions that your team reviews and approves before posting. This maintains quality control while dramatically reducing the time to respond from minutes to seconds."),
   faq("Can I use this for multiple business locations?","Yes. The platform supports multi-location management with individual and aggregate dashboards — ideal for businesses with 2-50+ locations that need centralized review oversight with location-level detail."),
   faq("How is this different from Birdeye or Podium?","Both Birdeye and Podium offer review management but focus primarily on monitoring and request sending. Our platform adds AI-powered response suggestions, revenue attribution tracking, and deeper integration with your business systems for trigger-based generation."),
   faq("What's the setup and onboarding process?","Setup typically takes 5-7 business days including platform integrations, completion trigger configuration, request template customization, and team training on the dashboard. We manage all technical setup.")],
  cta("Take Control of Your Online Reputation — Start Generating and Managing Reviews Automatically","Free reputation audit showing your current review position across all platforms, your competitor comparison, and a 90-day roadmap to a 4.8+ star rating.","Book My Free Reputation Audit"),
  ["google-review-software","get-more-google-reviews","automated-review-requests","reputation-management-platform"]),

makePage("reputation-management-for-small-business","service","Reputation Management for Small Business | AI Review System | Infinite Rankers","AI reputation management for small businesses — automate review generation, monitor all platforms, and build a 4.8+ star rating. Trusted by 500+ small businesses. Free audit.","reputation management small business, online reputation management small business, small business review management, reputation management for smb, review generation small business",
  sh("Reputation Management","for Small Business","Small businesses can't afford dedicated reputation managers — but they also can't afford bad reviews. Our AI system manages your entire online reputation automatically for less than the cost of one employee.",
    "Trusted by 500+ Small Businesses",
    [m("500+","Small Business Clients"),m("4.8+","Average Rating Achieved"),m("$0","Staff Overhead Required"),m("30 days","To First Results")]),
  pp("The Small Business Reputation Challenge","Why most small businesses lose the review battle",[
    pt("No Time to Chase Reviews","Small business owners handle operations, customers, and finances simultaneously. Manually requesting reviews after every customer interaction simply doesn't happen.","Clock"),
    pt("One Bad Review Can Hurt Badly","For a small business with 30 reviews, one 1-star review drops your rating by 0.1 stars. For a business with 300 reviews, the same review barely moves the needle. Volume protects you.","AlertTriangle"),
    pt("Competitors Are Outpacing You","Large chains and franchise competitors have marketing teams generating reviews systematically. Small businesses competing manually are fighting a losing battle.","TrendingDown"),
    pt("Too Many Platforms to Monitor","Managing Google, Facebook, Yelp, and industry-specific sites manually takes hours per week. Most small business owners monitor none — discovering negative reviews days or weeks after they appear.","Globe")]),
  ai("Automated Reputation Management Built for Small Business","Enterprise-level review management at small business pricing",
    "Infinite Rankers gives small businesses the same automated review generation and reputation monitoring that enterprise brands use — at pricing designed for businesses with 1-10 employees. You get more reviews, better ratings, and full platform monitoring without a single new hire.",
    [cap("Automated Review Generation","Every completed sale or service triggers a review request automatically — 100% of customers asked, 100% of the time.","CheckCircle"),
     cap("All-Platform Monitoring","Google, Facebook, Yelp, and your industry-specific platforms all monitored in one dashboard — catch every review the moment it posts.","Globe"),
     cap("AI Response Drafts","Professional response suggestions for every review — approve in seconds from your phone, without writing a word.","MessageCircle"),
     cap("Simple Dashboard","Easy-to-use dashboard designed for busy owners, not marketing teams — everything you need, nothing you don't.","Smartphone")]),
  pl("Simple 4-Step Launch for Small Businesses","Get your reputation management running in under a week",[
    st("1","Quick Setup","We connect to your booking or CRM system and configure automated review requests in 1-3 business days.","Rocket"),
    st("2","Templates Built","Your personalized review request templates are built, reviewed, and approved — ready to send automatically.","FileText"),
    st("3","Go Live","Your reputation management system activates — every future customer automatically gets a well-timed review request.","CheckCircle"),
    st("4","Monthly Reporting","Simple monthly reports showing your review growth, rating change, and platform performance — no analytics degree required.","BarChart3")]),
  res("Small Businesses With AI Reputation Management",[
    cs("Corner Bakery & Cafe","Food Service",[m("4.8★","Google Rating"),m("212%","More Monthly Reviews"),m("#1","Local Search Position")],"We had 45 reviews after 6 years in business. In 3 months with Infinite Rankers we reached 180+ reviews and hit 4.8 stars. We're now the top-rated bakery in our area on Google Maps."),
    cs("Family Plumbing Plus","Plumbing",[m("4.9★","Service Rating"),m("178%","More Reviews"),m("40%","More Phone Calls")],"My reputation management used to be 'hope for the best.' Now reviews come in every week automatically. I respond to all of them from my phone with AI suggestions. Looks very professional."),
    cs("Mountain View Chiropractic","Chiropractic",[m("4.8★","Patient Rating"),m("300%","Review Growth"),m("65%","More New Patients")],"Small practices can't afford reputation management agencies. The automated system does the same thing — and it costs less than one hour of my time per month to manage. The results speak for themselves.")]),
  ft("Small Business Reputation Management Features",[
    fi("Automated Review Requests","100% coverage — every customer gets a perfectly-timed review request without any manual effort from you.","CheckCircle"),
    fi("Multi-Platform Monitoring","Google, Facebook, Yelp, and your industry platforms — all in one feed so you never miss a review.","Globe"),
    fi("Mobile-First Dashboard","Manage your entire reputation from your phone — review alerts, response approvals, and monthly stats all mobile-accessible.","Smartphone"),
    fi("AI Response Suggestions","Professional response drafts for every review — positive and negative — that take 10 seconds to approve and post.","MessageCircle"),
    fi("Simple Monthly Reports","One-page monthly summaries showing review count, rating trend, and top platform performance — easy for any owner to interpret.","FileText"),
    fi("Transparent Pricing","Fixed monthly fee with no hidden costs, no per-review charges, no overage fees — predictable billing for budget-conscious businesses.","DollarSign")]),
  eco("Reputation Management That Fits a Small Business Budget","Enterprise results at small business pricing",
    "Large businesses invest thousands per month in reputation management staff and agencies. Infinite Rankers delivers the same automated review generation and monitoring for a fraction of that cost — making enterprise-quality reputation management accessible to every small business.",
    [cap("Right-Sized for Small Business","Features and pricing designed for 1-10 employee businesses — not enterprise platforms dumbed down for small accounts.","Users"),
     cap("No Minimum Review Volume","Works equally well whether you serve 20 or 200 customers per month — reviews are generated proportionally from your actual customer base.","BarChart3"),
     cap("Owner-Friendly Interface","Designed for busy owners who check their phone between jobs — not marketing teams with dedicated software time.","Smartphone")],
    [cap("Local SEO for Small Business","Organic rankings that put your small business in front of local customers without ongoing ad spend.","MapPin"),
     cap("Affordable Paid Ads","Google Ads management designed for small business budgets — starting at $500/month ad spend.","Target"),
     cap("Small Business Website","Professional websites designed and built for small businesses with lead capture and review showcase built in.","Globe")]),
  [tm("Joe Peretti","Owner","Peretti's Pizza","Managing reviews used to take 2 hours a week — checking Google, Yelp, Facebook, responding to everything. Now I get a text when a review comes in, tap to approve the AI response, done. 5 minutes a week max."),
   tm("Sarah Kim","Owner","Kim Nails & Spa","One bad review almost destroyed us — we went from 4.6 to 4.3 in one day. Infinite Rankers helped us generate 50 new positive reviews in 30 days. We're back at 4.7 and growing. The system protects you."),
   tm("Bill Hooper","Owner","Hooper's Heating & Air","Small HVAC companies can't afford marketing departments. The automated system handles our reviews better than any employee could — more consistent, faster responses, and it works 24/7.")],
  [faq("Is reputation management affordable for a small business?","Yes. Infinite Rankers' small business reputation management plans start at pricing accessible to most service businesses. The ROI is immediate — most clients see the investment recouped within the first month through new customer inquiries driven by improved ratings."),
   faq("Do I need technical knowledge to set this up?","None at all. We handle all setup, integration, and configuration. You participate in a 30-minute onboarding call, approve your request templates, and the system runs automatically from there."),
   faq("What if my business only gets 20-30 customers per month?","The system works for any volume. At 20 customers per month with a 50% response rate, you'll generate 10 new reviews monthly — which is excellent for a small business and will dramatically improve your local search ranking over time."),
   faq("How do I respond to reviews if I'm not tech-savvy?","The mobile app shows you new reviews and AI-generated responses. You tap 'Approve' or make small edits, then tap 'Post.' It takes 15-20 seconds per review. We can also handle responses entirely on your behalf if preferred."),
   faq("Will this help me compete with larger chains in my area?","Absolutely. Review volume and rating quality are the great equalizers in local search. A small independent business with 200 5-star reviews outranks national chains with worse ratings — and our system builds that review advantage systematically.")],
  cta("Give Your Small Business the Reputation It Deserves","Free reputation audit — see your current review position, competitor comparison, and the exact system we'd build to get your small business to a 4.8+ star rating.","Book My Free Reputation Audit"),
  ["google-review-software","get-more-google-reviews","review-management-software","local-business-reputation-management"]),

makePage("reputation-management-platform","service","Reputation Management Platform | AI-Powered Review & Rating System | Infinite Rankers","Full-featured reputation management platform that generates reviews, monitors all platforms, and tracks revenue impact. Trusted by 70+ USA businesses. Free platform demo.","reputation management platform, reputation management system, online reputation platform, review management platform, reputation management tool",
  sh("Reputation Management Platform","That Goes Beyond Monitoring","Most platforms monitor reviews. Ours generates them, responds to them, and tracks how they translate into ranking improvements and revenue growth — all in one AI-powered platform.",
    "The Complete Reputation Revenue Platform",
    [m("20+","Platforms Covered"),m("4.8+","Star Rating Achieved"),m("300%","Avg. Review Volume Growth"),m("Revenue","Attribution Included")]),
  pp("Why Basic Reputation Platforms Fall Short","The limitations that cost businesses money",[
    pt("Monitoring Isn't Management","Seeing a bad review 72 hours after it posts isn't management — it's damage control. A real platform alerts you within minutes and helps you respond instantly.","Clock"),
    pt("No Active Review Generation","A reputation platform that only monitors is like a gym membership you never use. Generation is the work — monitoring is just scorekeeping.","TrendingUp"),
    pt("No Business System Integration","Standalone reputation platforms don't connect to your CRM, booking system, or job management software — missing the trigger points that make generation automatic.","Database"),
    pt("Metrics Without Meaning","Knowing your rating is 4.2 is useful. Knowing that improving to 4.6 would generate $5,000 more monthly revenue is transformative. Most platforms don't make this connection.","BarChart3")]),
  ai("The Complete Reputation Management Platform","Generation + monitoring + response + revenue — in one system",
    "Infinite Rankers' reputation management platform integrates with your business systems to trigger review generation at completion events, monitors 20+ platforms in real-time, uses AI to generate professional review responses, and tracks how reputation improvement translates to rankings, traffic, and revenue.",
    [cap("Trigger-Based Generation","Review requests fire from actual business events — not schedules — achieving 3x better response rates.","CheckCircle"),
     cap("20+ Platform Coverage","Every major and industry-specific review platform monitored in real-time from a single dashboard.","Globe"),
     cap("AI Response Engine","Professional response suggestions generated for every review — dramatically improving response rates and quality.","MessageCircle"),
     cap("Revenue Attribution","Track how reputation improvement correlates to ranking changes, traffic growth, and new customer revenue.","DollarSign")]),
  pl("Platform Implementation in 4 Phases",[
    st("1","System Integration","Connect to your CRM, booking platform, and job management software — establishing the triggers that power automatic review generation.","Database"),
    st("2","Platform Configuration","Set up monitoring for all relevant review platforms, configure AI response templates, and establish review routing and alert preferences.","Settings"),
    st("3","Launch & Activate","Go live with full automated generation, monitoring, and response capabilities — starting the process of systematically building your reputation asset.","Rocket"),
    st("4","Revenue Reporting","Establish monthly reporting connecting reputation metrics to business outcomes — showing the full ROI of your reputation investment.","BarChart3")]),
  res("Platform Results Across Business Types",[
    cs("Cascade Dental Group","Multi-Location Dental",[m("4.9★","Group Rating"),m("350%","Review Growth"),m("$48K","Monthly Revenue Growth")],"The platform manages reputation across all our locations simultaneously. One dashboard, AI responses, automated generation — our group rating is 4.9 and we attribute $48K in monthly revenue to our improved local search position."),
    cs("Elite Auto Group","Automotive",[m("4.8★","Dealership Rating"),m("289%","More Reviews"),m("23%","More Test Drives")],"We went from 120 reviews across 3 locations to 500+ in 6 months. The AI response system handles every review within hours. Our reputation is now a competitive advantage in our market."),
    cs("Pacific Coast Plumbing","Home Services",[m("4.9★","Service Rating"),m("312%","Review Volume"),m("56%","More Service Calls")],"The revenue attribution reporting showed us that our Google ranking improvement — driven entirely by review growth — was generating $18,000/month in additional service calls. That data convinced us to invest more in the platform.")]),
  ft("Full Reputation Management Platform Features",[
    fi("Automated Review Generation","Trigger-based review requests connected to your business systems for 100% automated coverage.","Star"),
    fi("20+ Platform Monitoring","Real-time monitoring across all major and industry-specific review platforms.","Globe"),
    fi("AI Response Engine","Professional review response suggestions for every review — approve in seconds, post instantly.","MessageCircle"),
    fi("Sentiment Analysis","AI categorizes review themes to identify operational improvement opportunities from customer feedback patterns.","BarChart3"),
    fi("Revenue Attribution","Connect reputation metrics to business outcomes — rankings, traffic, new customers, and revenue.","DollarSign"),
    fi("Multi-Location Support","Manage reputation across unlimited locations with individual and aggregate reporting dashboards.","Building")]),
  eco("Reputation as a Revenue Asset","The long-term compound value of systematic reputation management",
    "Every review generated is a permanent asset that improves your local search ranking, customer trust, and conversion rate. The compound effect of systematic reputation management creates an increasingly powerful competitive advantage — one that competitors with poorer ratings cannot easily overcome.",
    [cap("Reputation Compound Effect","More reviews → better rankings → more customers → more reviews. The platform accelerates this flywheel.","RefreshCw"),
     cap("Competitive Moat Building","A reputation built on 400+ five-star reviews is nearly impossible for competitors to overtake quickly — it's a durable business advantage.","Shield"),
     cap("Trust as a Conversion Tool","Businesses with 4.7+ star ratings convert 35% more website visitors than those below 4.5 — reputation drives the full funnel.","TrendingUp")],
    [cap("Local SEO","Technical SEO combined with reputation growth creates dominant local search positions.","MapPin"),
     cap("Paid Advertising","Star ratings displayed in Google Ads improve click-through rates by 15-25% — improving paid advertising ROI.","Target"),
     cap("Content Marketing","Reviews and testimonials are powerful content assets — we help you leverage them across all marketing channels.","FileText")]),
  [tm("Chris Nguyen","CEO","Nguyen Dental Partners","The platform connects to our practice management system so every post-visit review request fires automatically. We manage 8 locations from one dashboard. Group rating is 4.9 across all locations — we attribute $60K+/month in additional revenue to improved local search position."),
   tm("Laura Simmons","Marketing Director","Simmons Home Services","The revenue attribution reporting is what sold our ownership team. We could show them: here's our ranking at 3.8 stars, here's our ranking at 4.6 stars, and here's the $35,000/month revenue difference. Numbers that management understands."),
   tm("Mark Chen","Owner","Chen Auto Group","I can see every review across 4 locations in one screen. AI generates responses I approve with one tap. Review volume increased 300% in 5 months. It's the easiest ROI I've ever documented in 20 years of business.")],
  [faq("What makes this different from Birdeye or Podium?","Both platforms focus on messaging and basic review monitoring. Infinite Rankers' platform centers on active review generation triggered by business events, AI response quality, and — crucially — connecting reputation metrics to revenue outcomes. The revenue attribution capability alone is unique."),
   faq("How does multi-location reputation management work?","Each location has its own monitoring, generation, and reporting — but all visible in a single group dashboard. You can compare location performance, identify laggards, and apply best practices from top-performing locations to underperforming ones."),
   faq("What is the implementation timeline?","Complete platform implementation typically takes 7-14 business days including all system integrations, platform configuration, team training, and soft launch period for testing before full activation."),
   faq("Can I manage the platform myself or does Infinite Rankers manage it?","Both options are available. Most clients choose our managed service — where our team handles configuration, optimization, and reporting. Self-serve dashboard access is also available for businesses that prefer direct control."),
   faq("What happens if I want to switch platforms later?","100% of your data — reviews, response history, settings — is exportable at any time. We provide full data exports on request with no restrictions or export fees.")],
  cta("See the Reputation Management Platform Built for Revenue Growth","Free 30-minute platform demo — see how our reputation management drives ranking improvement and revenue growth, not just star ratings.","Book My Free Platform Demo"),
  ["google-review-software","review-management-software","local-business-reputation-management","reputation-management-for-small-business"]),

makePage("google-review-management-tool","service","Google Review Management Tool | Monitor, Generate & Respond | Infinite Rankers","The Google review management tool that generates more reviews, monitors in real-time, and helps you respond professionally. 4.8+ star ratings for 90% of clients. Free demo.","google review management tool, google review tool, manage google reviews, google reviews tool, google review monitoring",
  sh("Google Review Management Tool","That Generates, Monitors & Responds","A complete Google review management tool that actively generates reviews, monitors in real-time, and uses AI to help you respond professionally — not just a dashboard that shows you reviews you already knew about.",
    "Complete Google Review Management",
    [m("24/7","Review Monitoring"),m("300%","More Monthly Reviews"),m("4.8+","Star Rating Achieved"),m("60 sec","Response Suggestion Speed")]),
  pp("What a Real Google Review Tool Should Do","Why passive monitoring tools aren't enough",[
    pt("Monitoring Without Generation Is Passive","Monitoring tools show you reviews as they arrive. A real management tool also generates those reviews systematically — filling your Google profile with consistent, positive feedback.","Star"),
    pt("Slow Response Hurts Your Rating","Google rewards businesses that respond to reviews regularly. If you're responding days later or not at all, you're leaving ranking signals on the table.","Clock"),
    pt("Negative Reviews Need Instant Alerts","Finding out about a 1-star review 3 days after it posts means 3 days of potential damage. Real-time monitoring with instant mobile alerts is the only acceptable standard.","Bell"),
    pt("No Link to Business Systems","A standalone Google review tool disconnected from your CRM or booking platform cannot generate trigger-based reviews — limiting review volume to what you manually request.","Database")]),
  ai("The Complete Google Review Management Workflow","Generation → Monitoring → Response → Reporting",
    "Our Google review management tool connects to your business systems to generate reviews automatically, monitors your Google profile in real-time, uses AI to draft professional responses instantly, and reports on how your Google rating improvement translates to search ranking and new customer acquisition.",
    [cap("Connected Review Generation","Trigger-based review requests connected to your booking or job management system — 100% automated coverage.","Database"),
     cap("Real-Time Google Monitoring","New reviews appear in your dashboard within minutes of posting — with instant mobile push notifications for critical reviews.","Bell"),
     cap("AI Response in 60 Seconds","AI generates a professional, personalized Google review response in 60 seconds — you approve and post in one tap.","MessageCircle"),
     cap("Rating & Ranking Correlation","See how your Google rating changes correlate to local search ranking improvements — proving the tool's revenue impact.","TrendingUp")]),
  pl("Google Review Management in Action",[
    st("1","Review Request Triggered","A job is completed in your booking system — the tool automatically sends a personalized SMS review request within 30 minutes.","CheckCircle"),
    st("2","Customer Reviews","The customer taps the direct Google review link and leaves a 5-star review. Your dashboard updates in real-time.","Star"),
    st("3","Response Generated","AI drafts a professional, personalized response to the review — you approve with one tap from your phone.","MessageCircle"),
    st("4","Ranking Improves","New review volume and your engagement rate (responding to reviews) signal quality to Google — improving your local search position.","TrendingUp")]),
  res("Google Review Tool Results",[
    cs("Lakeside Dental","Dentistry",[m("4.9★","Google Rating"),m("200+","Reviews in 90 Days"),m("#1","Local Search Position")],"Our Google tool finally connected to our practice management system. Review requests go out automatically after every appointment. We hit 200+ Google reviews in 90 days and now rank #1 for dentist in our city."),
    cs("Reliable Roofing Co.","Roofing",[m("4.8★","Google Rating"),m("50+","Reviews/Month"),m("67%","More Leads From Google")],"The real-time monitoring caught a 1-star review within 10 minutes of posting. AI drafted a professional response, we posted it within the hour. The customer updated to 4 stars after seeing our response."),
    cs("Metro Fitness Studio","Fitness",[m("4.7★","Studio Rating"),m("289%","More Reviews"),m("43%","More Memberships")],"We generate 40+ Google reviews per month now. Our rating went from 3.9 to 4.7 in 4 months. Membership inquiries from Google increased 43% as our local search ranking improved.")]),
  ft("Google Review Management Tool Features",[
    fi("Automated Review Requests","Trigger-based requests connected to your systems — not manual scheduling.","Star"),
    fi("Real-Time Monitoring","New reviews detected within minutes with instant mobile push alerts.","Bell"),
    fi("AI Response Generation","Professional response drafts in 60 seconds for every review — positive and negative.","MessageCircle"),
    fi("Rating Trend Tracking","Chart your Google rating over time with projections based on current review velocity.","TrendingUp"),
    fi("Competitor Monitoring","Track competitor Google ratings and review velocity — know when you're pulling ahead.","Target"),
    fi("Review Link Generator","Custom short links that take customers directly to your Google review form — eliminating navigation friction.","Link")]),
  eco("Google Review Management as a Local SEO Strategy","How consistent review management drives ranking improvement",
    "Google's local search algorithm uses review count, review velocity, rating, and review response rate as ranking signals. A systematic Google review management tool that generates reviews and prompts quick responses directly improves your local search position — turning reputation management into an SEO strategy.",
    [cap("Review Velocity Optimization","Consistent monthly review generation signals to Google that your business is active and earning new customers regularly.","TrendingUp"),
     cap("Response Rate Signals","Businesses that respond to 80%+ of reviews consistently outrank those that don't — response rate is a confirmed Google ranking signal.","MessageCircle"),
     cap("Keyword-Rich Reviews","AI response suggestions include natural keyword mentions that Google reads as additional relevance signals.","FileText")],
    [cap("Google Business Profile Optimization","Complete GBP optimization including categories, services, photos, and Q&A — maximizing the impact of your review growth.","MapPin"),
     cap("Local Citation Building","Consistent NAP citations across directories that reinforce your Google ranking signals.","Globe"),
     cap("Local Content Strategy","Location and service-specific content that complements your review growth for comprehensive local SEO dominance.","FileText")]),
  [tm("Brian Sullivan","Owner","Sullivan Electrical","The connection to our job management system is what makes it work. Every completed job triggers a review request automatically. We went from 8 reviews/month to 45/month. Completely hands-off for our team."),
   tm("Karen White","Practice Manager","White Family Dental","The real-time monitoring saved us twice from negative review situations. Both times, AI drafted a professional response within minutes of the review posting. Both customers updated their reviews after our response."),
   tm("David Park","Owner","Park Auto Repair","Our Google local ranking went from position 7 to position 1 for auto repair in our city after 5 months of systematic review generation. 150+ new reviews at 4.8 average. The tool paid for itself 10x over.")],
  [faq("Does the Google review tool work for any type of business?","Yes. The tool is configured for any service business that has customer interactions — dental, auto repair, home services, restaurants, fitness, healthcare, legal, and more. Review request timing and messaging are customized per business type."),
   faq("How does the tool generate more Google reviews?","By connecting to your business systems and sending personalized review requests triggered by actual service completion — not schedules. Timing reviews to peak satisfaction moments and personalizing messages to the specific service performed generates 3x more responses than generic blasts."),
   faq("Can the tool help me respond to negative Google reviews?","Yes. When a negative review appears, you're instantly notified and AI generates a professional, empathetic response suggestion within 60 seconds. Quick, professional responses to negative reviews frequently result in customers updating their rating."),
   faq("How long until my Google rating improves?","Most clients see measurable rating improvement within 60 days as positive review volume increases and engagement rate (response rate) improves. Significant ranking improvements typically show in 90-120 days for competitive markets."),
   faq("Does this tool help with reviews on platforms other than Google?","Yes. While Google is the primary focus, the system also generates and monitors reviews on Facebook, Yelp, Healthgrades, Zocdoc, HomeAdvisor, and other relevant platforms — all in one unified dashboard.")],
  cta("Get the Google Review Management Tool That Actually Grows Your Rating","Free 30-minute demo — see how automated review generation, real-time monitoring, and AI responses work together to put you at 4.8+ stars within 90 days.","Book My Free Google Review Demo"),
  ["google-review-software","get-more-google-reviews","automated-review-requests","review-management-software"]),

makePage("review-request-software","service","Review Request Software | AI-Automated Review Generation | Infinite Rankers","Review request software that sends personalized SMS and email requests automatically — generating 3x more reviews than manual requests. Setup in 24 hours. Free demo.","review request software, review request tool, automated review requests software, review request platform, send review requests automatically",
  sh("Review Request Software","With 58% Response Rates","Most review request software sends generic emails that get ignored. Ours sends AI-personalized SMS requests at the perfect moment — achieving 58% response rates vs. 12% industry average.",
    "58% Avg. Response Rate",
    [m("58%","Avg. SMS Response Rate"),m("3x","More Reviews Than Competitors"),m("24hr","Setup Time"),m("Zero","Manual Effort Required")]),
  pp("Why Generic Review Request Software Fails","The 4 problems with most review request tools",[
    pt("Email-Only Delivery","Email review requests get 8-12% open rates. SMS gets 98% open rates. Software that only sends emails leaves 80% of your review potential uncaptured.","Mail"),
    pt("Generic One-Size Templates","'How was your experience?' is the most ignored review request template in existence. Personalized, service-specific requests get 3-5x better response rates.","FileText"),
    pt("Scheduled Blasts Miss the Moment","Sending review requests on Tuesday mornings to customers who got service on Saturday misses the peak satisfaction window — when customers are most likely to leave a positive review.","Clock"),
    pt("No Follow-Up Sequence","A single review request captures 20-30% of potential reviews. A 3-touch sequence captures 60-70%. Most software stops after one message.","TrendingDown")]),
  ai("Review Request Software That Maximizes Response Rates","AI personalization + perfect timing + multi-touch sequences",
    "Our review request software combines service completion triggers, AI-personalized messaging, multi-channel delivery (SMS + email), and intelligent follow-up sequences to capture 3x more reviews than basic review request tools — without adding manual effort to your team's workflow.",
    [cap("Service Completion Triggers","Requests fire automatically when service is complete — not on a schedule — capturing customers at actual peak satisfaction.","CheckCircle"),
     cap("AI Personalized Messaging","Every request mentions the specific service performed — making it feel personal, not automated, for dramatically higher response rates.","FileText"),
     cap("SMS-First Delivery","SMS opens in under 3 minutes on average. Email follows 72 hours later for non-responders — covering all your bases.","MessageSquare"),
     cap("Intelligent Follow-Up","3-touch sequences that stop automatically when a review is submitted — maximizing capture without annoying satisfied customers.","TrendingUp")]),
  pl("How Our Review Request Software Works",[
    st("1","Service Completed","Your booking system or CRM marks a service complete — triggering the review request sequence immediately.","CheckCircle"),
    st("2","Personalized SMS Sent","AI-personalized SMS goes out within 30 minutes with the specific service details and a direct link to your review page.","MessageSquare"),
    st("3","Email Follow-Up","Non-responders receive a slightly different personalized email at 72 hours — a second chance with different channel + messaging.","Mail"),
    st("4","Review Captured","Customer clicks the direct link and leaves a review. Sequence stops automatically. Dashboard updates in real-time.","Star")]),
  res("Review Request Software Results",[
    cs("Evergreen Dental","Dentistry",[m("4.9★","Google Rating"),m("312%","More Monthly Reviews"),m("62%","Response Rate")],"Our old software sent Tuesday morning emails and got maybe 5 reviews per month. Infinite Rankers sends personalized SMS right after the appointment — we get 40+ reviews per month now with 62% response rate."),
    cs("Sharp Edge Barbershop","Personal Services",[m("4.8★","Rating"),m("267%","More Reviews"),m("100%","Request Coverage")],"Every single customer gets a review request automatically. We went from begging for reviews manually to generating 35+ per month without lifting a finger. Rating went from 4.1 to 4.8 in 60 days."),
    cs("Rapid Response Plumbing","Plumbing",[m("4.9★","Service Rating"),m("289%","More Reviews"),m("44%","More New Customers")],"The personalized messages mentioning the specific plumbing job — the words 'your water heater replacement' in the review request — make customers feel individually recognized. Response rates are incredible.")]),
  ft("Complete Review Request Software Features",[
    fi("Completion-Triggered Requests","Automatic triggers from your existing systems — zero manual review request work required.","CheckCircle"),
    fi("AI Message Personalization","Service-specific request messages that reference the actual job performed — not generic templates.","FileText"),
    fi("SMS + Email Delivery","Multi-channel sequences maximizing reach and response rates across all customer preferences.","MessageSquare"),
    fi("Intelligent Follow-Up","3-touch sequences that stop automatically when reviews are submitted — no annoying repeat requests.","TrendingUp"),
    fi("Direct Review Links","One-click links to your review pages — eliminating the #1 reason customers abandon the review process.","Link"),
    fi("Response Rate Analytics","Track response rates by service type, day of week, and message version — continuously optimizing for maximum capture.","BarChart3")]),
  eco("Review Request Software as a Revenue Investment","Every review request sent is an investment in your local search ranking",
    "Review generation is the highest-ROI local marketing activity available to service businesses — and review request software makes it systematic. Every review generated improves your local search ranking, customer trust signal, and click-through rate — compounding into significant revenue growth over 6-12 months.",
    [cap("Review ROI Calculation","We calculate the value of each additional review based on your current ranking, traffic, and conversion rates — showing the true ROI of review generation.","DollarSign"),
     cap("Ranking Impact Tracking","Monitor local search position changes as review volume grows — proving the connection between reviews and revenue.","TrendingUp"),
     cap("A/B Request Testing","Continuous testing of message variations, timing, and channels to maximize response rates for your specific customer base.","Settings")],
    [cap("Local SEO","Amplify your review growth with technical SEO optimization and Google Business Profile management.","MapPin"),
     cap("Local Paid Ads","Higher ratings improve Google Ad performance — a star rating upgrade is one of the best ad CTR improvements available.","Target"),
     cap("Conversion Optimization","Landing pages that showcase reviews prominently to convert review-driven traffic into customers.","Globe")]),
  [tm("Melissa Ross","Owner","Ross Family Hair Salon","Our old email review requests got maybe 3 responses per month. SMS personalized requests get 25-30 per month. The timing difference alone — immediately after the appointment vs. Tuesday morning — makes all the difference."),
   tm("Jim Torres","Owner","Torres Roofing & Construction","The follow-up sequence is the part most review software misses. We capture 40% of our reviews on the second or third touch — customers who ignored the first SMS but responded to the email follow-up."),
   tm("Dr. Amy Park","Dentist","Park Orthodontics","I can see exactly which service types generate the most reviews and at what response rate. That data helped us optimize our request timing for orthodontic consultations specifically — our highest-value patients.")],
  [faq("What response rates should I expect from review request software?","SMS review requests typically achieve 40-67% response rates when personalized and timed correctly. Email-only requests average 8-15%. Our combined SMS + email sequences achieve 55-70% average response rates — 3-5x industry average for generic software."),
   faq("How is this different from just texting customers manually?","Manual texting is inconsistent — you forget, you send at wrong times, you send generic messages. Our software ensures 100% of customers receive personalized, perfectly-timed requests automatically, every single time, without exception."),
   faq("Can I use my existing customer list to generate reviews?","Yes. We can run a one-time reactivation campaign to your existing customer list to generate reviews from past customers — in addition to ongoing automation for new customers going forward."),
   faq("Does the software handle review requests across multiple platforms?","Yes. While Google is primary, we can configure review requests that direct customers to the platform most valuable for your business — Google, Facebook, Yelp, Healthgrades, or others — based on your current rating gaps."),
   faq("What integrations are supported for service completion triggers?","We integrate with major booking platforms (Calendly, Acuity), CRMs (HubSpot, GoHighLevel, Salesforce), job management software (ServiceTitan, Jobber, Housecall Pro), and POS systems — or via Zapier/webhook for custom integrations.")],
  cta("Get Review Request Software That Gets 3x More Responses","Free 30-minute demo — see your current response rate vs. what's achievable, and test a personalized review request template for your business before committing.","Book My Free Review Software Demo"),
  ["automated-review-requests","google-review-software","get-more-google-reviews","review-management-software"]),

makePage("local-business-reputation-management","service","Local Business Reputation Management | AI Review System | Infinite Rankers","AI reputation management for local businesses — generate more reviews, monitor all platforms, and dominate local search. 500+ local business clients. Free reputation audit.","local business reputation management, reputation management local business, local reputation management, online reputation local business, local business reviews management",
  sh("Local Business Reputation Management","That Builds Your Local Authority","Your Google rating is your most powerful local marketing asset. Our AI reputation management system builds it systematically — generating more reviews, monitoring every platform, and connecting your rating to your local search ranking.",
    "Trusted by 500+ Local Businesses",
    [m("500+","Local Business Clients"),m("4.8+","Average Local Rating"),m("#1","Local Search Positions"),m("300%","Review Volume Growth")]),
  pp("The Local Business Reputation Battle","Why reputation management is local marketing's most important battleground",[
    pt("Local Search Rewards Reviews", "Google's local algorithm gives significant weight to review count, recency, and rating. Local businesses that consistently generate reviews hold ranking advantages that money can't easily buy.","MapPin"),
    pt("87% of Customers Read Reviews","Before calling a local business, 87% of customers read online reviews. Your reputation is the first sale you make — before they ever contact you.","Users"),
    pt("Competitors Are Outreviewing You","While you're not systematically generating reviews, your local competitors are. Every month that gap widens — and it's reflected directly in search rankings and new customer calls.","TrendingDown"),
    pt("One Bad Review Can Drop Your Calls 30%","Research shows a 1-star rating decrease can reduce new customer inquiries by up to 33% for local businesses — making rating protection as important as generation.","AlertTriangle")]),
  ai("Complete Local Business Reputation Management","Built specifically for local service businesses",
    "Infinite Rankers' local reputation management system is built around local business realities — service completion triggers, local platform coverage, Google Business Profile optimization, and the specific review platforms that matter most in your industry and geography.",
    [cap("Local Platform Coverage","Google, Yelp, Facebook, and the specific industry and local platforms your customers use — all in one management system.","Globe"),
     cap("Local Search Optimization","Review generation strategy aligned with local search ranking factors — maximizing the ranking impact of every review.","MapPin"),
     cap("Geo-Specific Reporting","Track your reputation performance in your specific local market — not generic averages.","BarChart3"),
     cap("Neighborhood-Level Insights","For multi-location businesses, understand reputation performance by neighborhood or service area.","Map")]),
  pl("Building Your Local Business Reputation Systematically",[
    st("1","Local Audit","We audit your current reputation across all relevant local platforms, compare to top local competitors, and identify the gaps to close.","Search"),
    st("2","Platform Strategy","Prioritize which platforms to focus generation efforts on based on local search impact and your specific industry.","Target"),
    st("3","Automated Generation","Launch trigger-based review generation — every completed service automatically requests a review on your priority platforms.","Rocket"),
    st("4","Local Ranking Impact","Monthly reporting showing how reputation improvement correlates to local search ranking changes and new customer volume.","TrendingUp")]),
  res("Local Business Reputation Results",[
    cs("Corner Stone Plumbing","Local Plumbing",[m("4.9★","Local Rating"),m("#1","Google Maps Position"),m("78%","More Phone Calls")],"We went from position 7 on Google Maps to position 1 in 4 months. The only change was systematic review generation — from 40 reviews to 220+ at 4.9 stars. Maps position 1 generates 30+ calls per month we weren't getting before."),
    cs("Sunrise Yoga Studio","Local Fitness",[m("4.8★","Studio Rating"),m("212%","More Reviews"),m("52%","More New Members")],"Local reputation matters enormously for fitness studios — new members check reviews before visiting for the first time. Our rating went from 4.1 to 4.8 and new member inquiries increased 52%."),
    cs("Patel Family Dentistry","Local Dental",[m("4.9★","Practice Rating"),m("300%","More Reviews"),m("89%","New Patient Growth")],"We're a family dental practice competing with a large DSO chain nearby. They have marketing budgets we can't match — but we now outrank them on Google Maps with 4.9 stars and 280+ reviews. Review generation leveled the playing field.")]),
  ft("Local Business Reputation Management Features",[
    fi("Local Platform Focus","Google, Yelp, Facebook, and the specific local platforms your customers in your market use — not generic national coverage.","Globe"),
    fi("Competitor Tracking","Monitor your top 5 local competitors' ratings and review velocity — stay ahead of the reputation race in your market.","Target"),
    fi("Google Business Profile","Complete GBP optimization and management to maximize the impact of your review growth on local search rankings.","MapPin"),
    fi("Industry-Specific Platforms","Healthgrades for healthcare, HomeAdvisor for home services, Avvo for legal — the specific platforms that matter for your business type.","Star"),
    fi("Local Ranking Reports","Monthly reports showing your local search position for key service terms alongside your reputation metrics.","BarChart3"),
    fi("Neighborhood Reviews","For businesses serving multiple areas, track and optimize reputation performance by geographic service area.","Map")]),
  eco("Local Reputation as a Business Moat","The competitive advantage only reviews can build",
    "For local service businesses, a strong reputation built on genuine customer reviews is the most defensible competitive advantage available. Competitors cannot easily fake 300 five-star reviews — but they can overcome poor execution with better service. Reputation management focuses your energy on building the asset that matters most for local business success.",
    [cap("Hyperlocal Focus","Reputation strategy built around your specific local market, competitors, and customer base.","MapPin"),
     cap("Sustainable Advantage","A review asset built over time compounds — becoming increasingly difficult for competitors to overcome.","Shield"),
     cap("Trust at Scale","300+ reviews establish the kind of trust that word-of-mouth alone can't generate — at local business scale.","Users")],
    [cap("Local SEO","Technical optimization, citation building, and content strategy that compounds with your reputation growth.","MapPin"),
     cap("Local Ads","Google Local Services Ads that leverage your high rating for maximum local visibility.","Target"),
     cap("Local Web Presence","Location-optimized web pages that convert local search traffic driven by your reputation into customer inquiries.","Globe")]),
  [tm("Paul Hernandez","Owner","Hernandez Plumbing","We're a 2-person plumbing operation. Automated reputation management gave us an enterprise-level review system. We have 4.9 stars with 180+ reviews and we rank #1 for plumber in our city. We compete with 10-person companies because of it."),
   tm("Nina Patel","Owner","Patel's Indian Kitchen","The local restaurant market is brutal for reviews. We went from 3.8 to 4.7 stars in 3 months. Google Maps traffic to our profile increased 87%. New reservations from people who found us through local search doubled."),
   tm("Sam Wilson","Owner","Wilson's Auto Service","The competitor tracking showed us falling behind a nearby shop that was aggressively generating reviews. We launched our system and within 90 days surpassed them on both volume and rating. Local search position switched in our favor.")],
  [faq("How important are Google reviews for local search rankings?","Extremely important. Google uses review count, rating, review velocity (how recently reviews were posted), and response rate as local search ranking factors. Businesses that consistently generate reviews hold significant ranking advantages over those that don't."),
   faq("Which review platforms matter most for local businesses?","Google reviews have the highest impact on local search rankings. Beyond Google: Yelp matters for restaurants and some home services, Facebook for trust signals, and industry-specific platforms (Healthgrades for healthcare, HomeAdvisor for contractors, Avvo for legal) for vertical-specific visibility."),
   faq("How do I respond to negative reviews from unhappy customers?","The key is speed and professionalism. AI-generated response suggestions provide a starting point within 60 seconds of a negative review appearing. Professional, empathetic responses frequently prompt customers to update their rating — and demonstrate to prospective customers that you take concerns seriously."),
   faq("Can reputation management help me compete with larger chains?","Yes. Local search algorithms favor proximity and review quality over brand size. A local business with 200+ five-star reviews frequently outranks national chains in local search — especially when combined with Google Business Profile optimization and local SEO."),
   faq("How long does it take to build a strong local reputation?","Meaningful rating improvement typically shows within 60 days. Strong competitive positioning — enough reviews and rating quality to dominate local search — typically takes 3-6 months of consistent generation. The earlier you start, the faster you build the advantage.")],
  cta("Build the Local Reputation That Makes You the Obvious Choice","Free local reputation audit — see your current position across all platforms, your top 3 competitors' reputation, and the exact strategy to become the highest-rated business in your local market.","Book My Free Local Reputation Audit"),
  ["google-review-software","review-management-software","reputation-management-for-small-business","get-more-google-reviews"])
];

// Write function
function insertIntoFile(file, content, insertPoint, newContent) {
  const idx = content.lastIndexOf(insertPoint);
  if (idx === -1) return null;
  return content.slice(0, idx) + newContent + content.slice(idx);
}

// 1. landing-pages.ts
let lp = fs.readFileSync("client/src/lib/landing-pages.ts", "utf8");
const lpJson = ",\n" + NEW_PAGES.map(p => JSON.stringify(p, null, 2)).join(",\n");
lp = insertIntoFile("client/src/lib/landing-pages.ts", lp, "\n];\n\nexport const ALL_LANDING_PAGES", lpJson);
if (!lp) { console.error("LP insertion failed"); process.exit(1); }
fs.writeFileSync("client/src/lib/landing-pages.ts", lp, "utf8");

// 2. sitemap.ts
let sm = fs.readFileSync("server/sitemap.ts", "utf8");
const smNew = ",\n" + NEW_PAGES.map(p=>`  "${p.slug}"`).join(",\n");
sm = sm.slice(0, sm.lastIndexOf('\n];')) + smNew + sm.slice(sm.lastIndexOf('\n];'));
fs.writeFileSync("server/sitemap.ts", sm, "utf8");

// 3. seo.ts
let seo = fs.readFileSync("server/seo.ts", "utf8");
const seoInsert = seo.indexOf('\n};\n\nconst PARTNER');
const seoEntries = "\n" + NEW_PAGES.map(p => {
  const faqs = p.faqs.slice(0,3).map(f=>`{ q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} }`).join(", ");
  return `  ${JSON.stringify(p.slug)}: { title: ${JSON.stringify(p.seoTitle)}, desc: ${JSON.stringify(p.seoDescription)}, faqs: [${faqs}] },`;
}).join("\n");
seo = seo.slice(0, seoInsert) + seoEntries + seo.slice(seoInsert);
fs.writeFileSync("server/seo.ts", seo, "utf8");

console.log(`Batch 3 done: ${NEW_PAGES.length} review management pages added`);
