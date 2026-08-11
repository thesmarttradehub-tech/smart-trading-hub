import {
  ArrowRight,
  BarChart3,
  BellRing,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CandlestickChart,
  CircleHelp,
  Clock3,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  Headphones,
  HeartHandshake,
  Landmark,
  Languages,
  LineChart,
  MessageCircleMore,
  Phone,
  PieChart,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Stat = {
  value: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export const contactInfo = {
  phone: "+91 63835 94583",
  whatsapp: "916383594583",
  telegram: "https://t.me/smarthub555",
  email: "support@smarttradershub.in",
  website: "smarttradershub.in",
  address: "Chennai, Tamil Nadu, India",
  hours: [
    "Monday - Friday: 9:00 AM - 7:00 PM",
    "Saturday: 10:00 AM - 4:00 PM",
    "Sunday: Closed",
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const siteStats: Stat[] = [
  {
    value: "10K+",
    label: "Learners Guided",
    description: "Across India with beginner-first mentoring.",
    icon: Users,
  },
  {
    value: "5+",
    label: "Years Experience",
    description: "Trusted guidance in stock market education.",
    icon: ShieldCheck,
  },
  {
    value: "8+",
    label: "Learning Programs",
    description: "Structured modules for progressive growth.",
    icon: BookOpen,
  },
  {
    value: "24/7",
    label: "Support Available",
    description: "Help with onboarding, learning, and platform setup.",
    icon: Headphones,
  },
];

export const homeHighlights: IconCard[] = [
  { title: "Expert Mentors", description: "Practical market educators and support specialists.", icon: UserRoundCheck },
  { title: "Practical Learning", description: "Clear examples, guided demos, and structured exercises.", icon: CandlestickChart },
  { title: "Multilingual Support", description: "Comfortable learning support in your preferred language.", icon: Languages },
  { title: "Ongoing Guidance", description: "Account opening, onboarding, and continuous support.", icon: HeartHandshake },
];

export const aboutPillars: IconCard[] = [
  { title: "Stock Market Education", description: "Clear concepts designed for first-time learners.", icon: BookOpen },
  { title: "Learning Support", description: "Step-by-step assistance through setup and execution.", icon: Headphones },
  { title: "Platform Guidance", description: "Help choosing, understanding, and using trading tools.", icon: LineChart },
  { title: "Continuous Learning", description: "Resources and support that stay with you after onboarding.", icon: Sparkles },
];

export const values: IconCard[] = [
  { title: "Integrity", description: "We operate with honesty and strong ethical standards.", icon: ShieldCheck },
  { title: "Transparency", description: "Clear communication and complete clarity in everything we do.", icon: CircleHelp },
  { title: "Education", description: "We simplify complex ideas and make learning easy.", icon: GraduationCap },
  { title: "Knowledge Sharing", description: "We believe in building a stronger learning community.", icon: Handshake },
  { title: "Customer Success", description: "Your progress and confidence stay at the center of our work.", icon: Target },
  { title: "Continuous Learning", description: "We keep evolving to bring updated insights and better support.", icon: TrendingUp },
];

export const supportServices: IconCard[] = [
  { title: "Trading Account Help", description: "End-to-end help in opening your trading account quickly.", icon: WalletCards },
  { title: "Platform Setup", description: "Installation and onboarding help for your trading tools.", icon: LineChart },
  { title: "Educational Guidance", description: "Clear explanations from experienced mentors and support staff.", icon: UserRoundCheck },
  { title: "Continuous Support", description: "Ongoing assistance whenever you need the next step explained.", icon: BellRing },
];

export const serviceGrid: IconCard[] = [
  { title: "Trading Account Opening Assistance", description: "We guide you through the complete account opening process.", icon: WalletCards },
  { title: "Platform Onboarding", description: "Step-by-step setup, download, and installation guidance.", icon: LineChart },
  { title: "Trading Platform Guidance", description: "Learn how to use your platform with confidence.", icon: BarChart3 },
  { title: "Educational Training", description: "Access structured sessions and learning materials.", icon: GraduationCap },
  { title: "Dedicated Customer Support", description: "Responsive professional support across your journey.", icon: Headphones },
  { title: "WhatsApp Support", description: "Quick updates and assistance through WhatsApp.", icon: MessageCircleMore },
  { title: "Phone Support", description: "Direct help from our team for urgent queries.", icon: Phone },
  { title: "Email Support", description: "Detailed responses for documentation and setup questions.", icon: FileText },
  { title: "Multilingual Assistance", description: "Comfortable support in multiple languages.", icon: Globe },
  { title: "Learning Resources", description: "Guides, PDFs, and support notes for steady progress.", icon: BookOpen },
];

export const courseCategories: IconCard[] = [
  { title: "Stock Market Basics", description: "Understand market terminology, structure, and how trading works.", icon: Landmark },
  { title: "Technical Analysis", description: "Charts, indicators, and practical tools for market reading.", icon: CandlestickChart },
  { title: "Fundamental Analysis", description: "Company, financial, and sector analysis for better context.", icon: FileText },
  { title: "Trading Psychology", description: "Build patience, discipline, and emotional control.", icon: Users },
  { title: "Risk Management", description: "Learn safer position sizing and capital protection habits.", icon: ShieldCheck },
  { title: "Platform Training", description: "Hands-on help using the tools you trade on.", icon: LineChart },
  { title: "Candlestick Analysis", description: "Recognize patterns and interpret price behavior better.", icon: CandlestickChart },
  { title: "Price Action", description: "Understand market structure and momentum clearly.", icon: TrendingUp },
  { title: "Investment Basics", description: "Build long-term foundational knowledge with clarity.", icon: PieChart },
  { title: "Portfolio Concepts", description: "Learn diversification and allocation principles.", icon: BriefcaseBusiness },
];

export const whyChoose: IconCard[] = [
  { title: "Complete Account Assistance", description: "From documentation to activation, we help you through it.", icon: WalletCards },
  { title: "Platform Onboarding", description: "Structured trading-platform education to get you set up with confidence.", icon: LineChart },
  { title: "Educational Programs", description: "Courses structured for both beginners and growing traders.", icon: GraduationCap },
  { title: "Dedicated Customer Support", description: "A dependable team to answer questions at every step.", icon: Headphones },
  { title: "WhatsApp Support", description: "Fast support and reminders through your preferred channel.", icon: MessageCircleMore },
  { title: "Phone Support", description: "Speak with our team for personalized assistance.", icon: Phone },
  { title: "Multilingual Assistance", description: "Support available in multiple languages for comfort.", icon: Languages },
  { title: "Practical Learning", description: "Real-world examples and case studies for understanding.", icon: TrendingUp },
];

export const simpleJourney: IconCard[] = [
  { title: "Consultation", description: "We understand your goals and learning needs.", icon: Users },
  { title: "Trading Account Opening", description: "We assist in opening your trading account.", icon: WalletCards },
  { title: "Platform Setup", description: "Get onboarded on the right tools seamlessly.", icon: LineChart },
  { title: "Training", description: "Learn with expert-led programs and live sessions.", icon: GraduationCap },
  { title: "Continuous Support", description: "Stay connected for ongoing guidance and help.", icon: Headphones },
];

export const supportWorkflow: IconCard[] = [
  { title: "Consultation", description: "We understand your need and guide the right way.", icon: Users },
  { title: "Documentation Guidance", description: "Help with paperwork and verification.", icon: FileText },
  { title: "Account Assistance", description: "Support in opening your trading account.", icon: WalletCards },
  { title: "Platform Installation", description: "Install and configure your trading platform.", icon: LineChart },
  { title: "Platform Training", description: "Learn the interface with hands-on guidance.", icon: CandlestickChart },
  { title: "Educational Support", description: "Receive structured learning resources.", icon: GraduationCap },
  { title: "Continuous Assistance", description: "Ongoing help for the long term.", icon: Headphones },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    location: "Pune, Maharashtra",
    quote: "The account opening support was seamless and the team guided me at every step. The training is clear, practical, and perfect for beginners.",
  },
  {
    name: "Neha Verma",
    location: "Lucknow, Uttar Pradesh",
    quote: "I love the way topics are explained with real examples. Platform onboarding is quick and the support team is always helpful.",
  },
  {
    name: "Arjun Patel",
    location: "Ahmedabad, Gujarat",
    quote: "The mentors explain complex topics in simple ways. Multilingual support is a big plus and the sessions are very interactive.",
  },
];

export const faqItems = [
  {
    question: "How do I open a trading account?",
    answer: "Our team guides you through documentation, verification, account opening, and the initial platform setup.",
  },
  {
    question: "Is WhatsApp support available?",
    answer: "Yes. We provide WhatsApp-based support for quick updates, coordination, and basic assistance.",
  },
  {
    question: "Do you provide stock tips or investment advice?",
    answer: "No. The website is education-focused. We provide learning support, not guaranteed returns or personalized investment advice.",
  },
  {
    question: "Do you help with platform installation?",
    answer: "Yes. Platform setup and onboarding are core parts of our support services.",
  },
  {
    question: "Can beginners join your courses?",
    answer: "Absolutely. Our courses and onboarding are designed to be beginner friendly and step-by-step.",
  },
  {
    question: "How quickly can I expect a response?",
    answer: "Phone and WhatsApp support are the fastest channels. Email support is typically answered within 24 hours.",
  },
];

export const footerLinks = {
  support: [
    { label: "WhatsApp Support", href: `https://wa.me/${contactInfo.whatsapp}` },
    { label: "Phone Support", href: `tel:${contactInfo.phone}` },
    { label: "Email Support", href: `mailto:${contactInfo.email}` },
    { label: "Live Guidance", href: "/contact-us#support" },
    { label: "Help Center", href: "/contact-us#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export const ctaButtons = [
  { label: "Open Trading Account", href: "/contact-us", icon: ArrowRight },
  { label: "Speak With Our Team", href: "/contact-us", icon: MessageCircleMore },
];
