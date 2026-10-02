import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  Eye,
  Target,
  X,
  ArrowRight,
  Palette,
  UserRoundCheck,
  Megaphone,
  Handshake,
  MonitorCog,
  Share2,
  DoorOpen,
  BadgeIndianRupee,
  MessageCircle,
  CheckCircle,
  MessageSquare,
  Monitor
} from 'lucide-react';

import Blazer1 from './assets/blazer1.png';
import Logo from './assets/logo.png';
import hmk from './assets/hmk.png';
import aifb from './assets/aifb.png';
import pmk from './assets/pmk.webp';
import linkedin from './assets/linkedin.png';
import insta from './assets/insta.png';

import email1 from './assets/email1.png';
import Tamil from './assets/tamil.png';
import Arunad from './assets/arunad.png';
import Arjun from './assets/arjun.png';
import Selvam from './assets/selvam.png';
import Visalakshi from './assets/visalakshi.png';
import heroBg from './assets/herobg.png';
import whatsapp from './assets/whatsapp.png';

const STATS_DATA = [
  { value: '2024', label: 'Established' },
  { value: '360°', label: 'Digital & Media Solutions' },
  { value: '24×7', label: 'Rapid Response' },
  { value: 'End-to-End', label: 'Digital Support' },
];

const PARTIES_DATA = [
  {
    name: 'DMK',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_DMK.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    fallbackBg: 'red/black'
  },
  {
    name: 'TVK',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Tamilaga_Vettri_Kazhagam_%28TVK%29_Flag.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    fallbackBg: 'yellow/red'
  },
  {
    name: 'AIADMK',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/AIADMK_Flag.svg/960px-AIADMK_Flag.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    fallbackBg: 'black/red'
  },
  {
    name: 'BJP',
    img: 'https://www.flagcolorcodes.com/images/jpg/bharatiya-janata-party.jpg',
    fallbackBg: 'orange/green'
  },
  {
    name: 'INC',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/INC_Flag_Official.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    fallbackBg: 'blue/white'
  },
  {
    name: 'WTL',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhG9ztW7SV5JJNAq41RD3zvogui-9edtaPPxll2AKgkVhhJc8z1i_hNjY&s=10',
    fallbackBg: 'blue/white'
  },
  {
    name: 'NTK',
    img: 'https://i.pinimg.com/564x/7a/01/20/7a0120f9d44c28cb6b4b2a6f812598d2.jpg',
    fallbackBg: 'blue/white'
  },
  {
    name: 'HMK',
    img: hmk,
    fallbackBg: 'blue/white'
  },
  {
    name: 'AIFB',
    img: aifb,
    fallbackBg: 'blue/white'
  },
  {
    name: 'PMK',
    img: pmk,
    fallbackBg: 'blue/white'
  }
];

const SERVICES_DATA = [
  {
    icon: Palette,
    title: 'Graphic Design',
    bullets: [
      'Logo Creation & Brand Identity',
      'Political Posters, Banners & News Cards',
      'Social Media Creatives & Infofgraphics',
      'Event Flexes & Stage Backdrops',
      'Campaign Visuals & Promotional Materials'
    ]
  },
  {
    icon: Megaphone,
    title: 'Digital Campaigns',
    bullets: [
      'Political Ad Campaign Management',
      'Targeted Social Media Advertising',
      'Campaign Reach & Engagement Strategy',
      'Real time Performance Monitoring',
      'Digital Campaign Optimization'
    ]
  },
  {
    icon: UserRoundCheck,
    title: 'Personal Branding',
    bullets: [
      'Leader Profile & Identity Building',
      'Personal Brand Strategy Development',
      'Social Media Presence & Content Planning',
      'Leadership Content & Visuals',
      'Public Image Reputation Management'
    ]
  },
  {
    icon: MonitorCog,
    title: 'Website Development',
    bullets: [
      'Political Leader & Party Websites',
      'Campaign Landing Pages',
      'Responsive Design & Mobile-Friendly Designs',
      'Content Management & Updates',
      'SEO-Ready Website Development'
    ]
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    bullets: [
      'Facebook, Instagram & X Management',
      'Daily Content Planning & Publishing',
      'Reels,Posts & Story Creation',
      'Audience Engagement & Monitoring',
      'Analytics & Performance Reporting'
    ]
  },
  {
    icon: Handshake,
    title: 'Political Consulting',
    bullets: [
      'Political Strategy & Campaign Planning',
      'Constituency Analysis & Voter Research',
      'Public Perception & Image Strategy',
      'Campaign Communication Planning',
      'Digital & Ground Campaign Coordination'
    ]
  },
  {
    icon: Monitor,
    title: 'Political Party IT-Wing Setup',
    bullets: [
      'IT Wing Structure & Team Setup',
      'Digital Communication Systems',
      'Social Media Team Co-ordination',
      'War Room & Monitoring Setup',
      'Real-Time Reporting & Campaign Support',
      'Data-Driven Communication & Outreach'
    ]
  }
];

const LEADERS_DATA = [
  {
    name: 'LPF N. Tamilselvan',
    role: 'State Deputy Secretary - Labour Wing DMK',
    img: Tamil,
    testimonial: "Trend Lift Tech has transformed the way we present ourselves digitally. Their creativity, strategic thinking, and attention to detail across social media, design, and video are truly impressive. A professional and dependable team that consistently delivers excellence."
  },
  {
    name: 'Arunadevi Mohanraja',
    role: 'State Secretary - Mahila Morcha BJP',
    img:Arunad,
    testimonial: "TLT brings creativity with strategy. From powerful social media content and impactful designs to professional video editing, their team understands how to turn ideas into strong digital communication. A reliable and impressive digital partner."
  },
  {
    name: 'Arjun Sampath',
    role: 'Founder - Hindu Makkal Katchi',
    img: Arjun,
    testimonial: "Trend Lift Tech has been instrumental in strengthening our IT Wing and digital presence. Their strategic approach to social media management is professional, impactful, and results-driven. We truly value their commitment and execution."
  },
  {
    name: 'Vathilai B.Selvam',
    role: 'Founder - Tamilar Desiya Forward Bloc',
    img: Selvam,
    testimonial: "In today’s political landscape, a strong digital voice is essential. Trend Lift Tech has helped us build that voice with smart IT solutions and impactful social media strategies."
  },
  {
    name: 'Visalakchi',
    role: 'Ex-Mayor,Tvk',
    img: Visalakshi,
    testimonial: "Trend Lift Tech has transformed the way we connect with people digitally. Their expertise in social media management, creative design, video editing and professional shoots has given our communication a powerful and impactful presence. Their strategic approach and quality of work truly stand out"
  }
];

const WHY_US_DATA = [
  {
    icon: DoorOpen,
    title: 'Easy Access',
    desc: 'Direct & Hussle-Free Support'
  },
  {
    icon: BadgeIndianRupee,
    title: 'Cost-Effective',
    desc: 'Smart Solutions within Your Budget.'
  },
  {
    icon: MessageCircle,
    title: 'Quick Communication',
    desc: 'Fast responses when it matters'
  }
];



function TopBar() {
  return (
    <div className="tlt-topbar">
      <div className="tlt-topbar-inner">
        <div className="tlt-topbar-left">
          <a href="mailto:trendlifttech@gmail.com" className="tlt-topbar-link">
            <Mail className="tlt-icon-blue" size={14} /> trendlifttech@gmail.com
          </a>
          <a href="tel:+919003827858" className="tlt-topbar-link">
            <Phone className="tlt-icon-blue" size={14} /> +91 9003827858
          </a>
        </div>
        <div className="tlt-topbar-location">
          <span>
            <MapPin className="tlt-icon-mr" size={14} /> Tirupur, Tamil Nadu
          </span>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="tlt-nav">
      <div className="tlt-nav-inner">
        <a href="#hero" className="tlt-logo-link">
          <div className="tlt-logo-badge">
            <img src={Logo} alt="Trend Lift Tech Logo" />
          </div>
          <span className="tlt-logo-text">
            TREND LIFT TECH <span className="tlt-logo-sub">PVT LTD</span>
          </span>
        </a>

        <div className="tlt-nav-links">
          <a href="#about" className="tlt-nav-link">About Us</a>
          <a href="#parties" className="tlt-nav-link">Political Spectrum</a>
          <a href="#services" className="tlt-nav-link">Services</a>
          <a href="#clients" className="tlt-nav-link">Clients</a>
          <a href="#why-us" className="tlt-nav-link">Why Us</a>
          <a href="#contact" className="tlt-nav-link">Contact Us</a>
        </div>

        <button onClick={toggleMobile} className="tlt-mobile-btn" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="tlt-mobile-menu tlt-mobile-menu-open">
      <a href="#about" onClick={onClose} className="tlt-mobile-link">About Us</a>
      <a href="#parties" onClick={onClose} className="tlt-mobile-link">Political Spectrum</a>
      <a href="#services" onClick={onClose} className="tlt-mobile-link">Services</a>
      <a href="#clients" onClick={onClose} className="tlt-mobile-link">Clients</a>
      <a href="#why-us" onClick={onClose} className="tlt-mobile-link">Why Us</a>
      <a href="#contact" onClick={onClose} className="tlt-mobile-link">Contact Us</a>
      <a
        href="https://wa.me/919003827858?text=Hi%20Trend%20Lift%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project."
        onClick={onClose}
        target="_blank"
        rel="noopener noreferrer"
        className="tlt-mobile-cta"
      >
        Let's Talk →
      </a>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc, dark = false }) {
  return (
    <div className="tlt-section-header">
      {eyebrow && <span className={dark ? "tlt-eyebrow-light" : "tlt-eyebrow-blue"}>{eyebrow}</span>}
      <h2 className={dark ? "tlt-whyus-title" : "tlt-section-title"}>{title}</h2>
      {desc && <p className="tlt-section-desc">{desc}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="tlt-hero">
    <img 
        src={heroBg} 
        alt="Hero Background" 
        className="tlt-hero-bg-img" 
      />
      <div className="tlt-hero-overlay"></div>
      <div className="tlt-hero-inner">
        <div className="tlt-hero-badge">
          Empowering Leaders, Elevating Trends
        </div>
       <h1 className="tlt-hero-title"> Best <span className="tlt-text-blue">Digital Growth Partner</span> <br className="tlt-br-desktop" /> for Political Leaders in TamilNadu! </h1>
       <p className="tlt-hero-desc">
  {"We help political leaders build powerful digital identities, connect with their audience, and strengthen their public presence through strategic branding, creative campaigns, social media, and technology-driven solutions."
    .split(" ")
    .map((word, wordIndex) => (
      <span key={wordIndex} className="tlt-desc-word">
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className="tlt-desc-letter"
            style={{
              animationDelay: `${(wordIndex * 5 + charIndex) * 0.015}s`,
            }}
          >
            {char}
          </span>
        ))}
        {/* Adds space between words */}
        <span className="tlt-desc-space">&nbsp;</span>
      </span>
    ))}
</p>
        <div className="tlt-hero-actions">
          <a
            href="https://wa.me/919003827858?text=Hi%20Trend%20Lift%20Tech%2C%20I%20would%20like%20to%20discuss%20your%20political%20%26%20digital%20marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="tlt-btn-primary"
          >
            Start a Conversation <ArrowRight size={16} />
          </a>
          <a href="#services" className="tlt-btn-secondary">
            Explore Our Services
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
    
      {/* <div className='ticker'>
            <div className='ticker-track'>
                <span>🎨Graphic Design</span>
                <span>📈Digital Campaigns</span>
                <span>👤Personal Branding</span>
                <span>💻Website Development</span>
                <span>📱Social Media Management</span>
                <span>📣Political Consulting</span>
                <span>🖥️Political Party IT-Wing Setup</span>
                <span>🎨Graphic Design</span>
                <span>📈Digital Campaigns</span>
                <span>👤Personal Branding</span>
                <span>💻Website Development</span>
                <span>📱Social Media Management</span>
                <span>📣Political Consulting</span>
                <span>🖥️Political Party IT-Wing Setup</span>
                <span>🎨Graphic Design</span>
                <span>📈Digital Campaigns</span>
                <span>👤Personal Branding</span>
                <span>💻Website Development</span>
                <span>📱Social Media Management</span>
                <span>📣Political Consulting</span>
                <span>🖥️Political Party IT-Wing Setup</span>
            </div>
        </div> */}
    </section>
    
  );
}







function Founder() {
  const founderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (founderRef.current) {
      observer.observe(founderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const paragraph1 =
    "TREND LIFT TECH was born from a simple belief — every idea deserves an identity, every voice deserves to be heard, and every vision deserves the right platform to make an impact.";

  const paragraph2 =
    "Our founder believes that great ideas should never be limited by budget. With passion, creativity, and hard work, TLT was built to deliver quality digital solutions at an affordable cost.";

  const paragraph3 =
    "The founder believes that digital work is not merely about designs, websites, or social media. It is about creating a connection, earning trust, and turning a vision into an influence that people can see and feel.";

  // Words cut aagama irukka Word-by-Word split and render function
  const renderTextByWords = (text, paragraphDelay = 0) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="tlt-founder-word">
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className="tlt-founder-letter"
            style={{
              animationDelay: `${paragraphDelay + (wordIndex * 4 + charIndex) * 0.012}s`,
            }}
          >
            {char}
          </span>
        ))}
        {/* Adds space between words */}
        <span className="tlt-founder-space">&nbsp;</span>
      </span>
    ));
  };

  return (
    <section
      id="founder"
      ref={founderRef}
      className={isVisible ? "tlt-founder-visible" : ""}
    >
      <div className="tlt-founder-imgwrap">
        <img src={Blazer1} alt="Founder - Trend Lift Tech" />
      </div>

      <div className="tlt-founder-content">
        <div className="tlt-fbadge">
          <h3 className="tlt-fbadge-text">OUR FOUNDER</h3>
        </div>

        <h1 className="tlt-founder-title">
          <span className="tlt-title-line">
            <span>Behind every vision is a </span>
            <span className="tlt-title-highlight">Journey,</span>
          </span>
          <br />
          <span className="tlt-title-line">
            <span>Behind every journey is a </span>
            <span className="tlt-title-highlight">Belief!</span>
          </span>
        </h1>

        <p className="tlt-founder-desc">
          {renderTextByWords(paragraph1, 0)}
        </p>

        <p className="tlt-founder-desc">
          {renderTextByWords(paragraph2, 0.4)}
        </p>

        <p className="tlt-founder-desc">
          {renderTextByWords(paragraph3, 0.8)}
        </p>

        <a
          href="https://in.linkedin.com/in/saran-kumar-277b76335"
          target="_blank"
          rel="noopener noreferrer"
          className="tlt-btn-linkedin"
        >
          Explore Via LinkedIn
        </a>
      </div>
    </section>
  );
}


function Stats() {
  return (
    <div className="tlt-stats">
      <div className="tlt-stats-grid">
        {STATS_DATA.map((st, i) => (
          <div className="tlt-stat-item" key={i}>
            <div className="tlt-stat-value">{st.value}</div>
            <div className="tlt-stat-label">{st.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PoliticalSpectrum() {
  const handleImgError = (e, fallbackBg, text) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/100x100/${fallbackBg}?text=${text}`;
  };

  return (
    <section id="parties" className="tlt-parties">
      <div className="tlt-parties-inner">
        <div className="tlt-parties-header">
          <p className="tlt-eyebrow">BUILT FOR POLITICAL IMPACT</p>
          <h2 className="tlt-parties-title">The Strategy Behind Political Influence</h2>
          <p className="tlt-parties-desc">
            We help political leaders and organisations build stronger brands, sharper campaigns and a more powerful public presence.
          </p>
          <p className="tlt-parties-tagline">
            BUILD THE BRAND. SHAPE THE NARRATIVE. DRIVE THE IMPACT.
          </p>
        </div>

        <div className="tlt-parties-row">
          {PARTIES_DATA.map((p, i) => (
            <div className="tlt-party-item" key={i}>
              <div className="party-flag-box tlt-party-circle">
                <img
                  src={p.img}
                  alt={`${p.name} Flag`}
                  className="tlt-party-img"
                  onError={(e) => handleImgError(e, p.fallbackBg, p.name)}
                />
              </div>
              <span className="tlt-party-name">{p.name}</span>
            </div>
          ))}
        </div>
        <p className="tlt-parties-tagline-sm">
          “We work across the political spectrum.”
        </p>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <div className="tlt-vision-card">
      <div className="tlt-vision-badge">Tirupur</div>
      <div className="tlt-vision-body">
        <h3 className="tlt-vision-heading">Vision & Mission</h3>
        <div className="tlt-vision-box">
          <h4 className="tlt-vision-label">
            <Eye className="tlt-vision-icon" size={26} strokeWidth={2} />
          </h4>

          <p className="tlt-vision-text">
            “To become a trusted force in political communication, helping leaders and organisations build a credible identity, connect with people, and create lasting digital influence.”
          </p>
        </div>
        <div className="tlt-vision-box">
          <h4 className="tlt-vision-label">
            <Target className="tlt-vision-icon" size={26} strokeWidth={2} />
          </h4>

          <p className="tlt-vision-text">

            “To deliver strategic, creative, and technology-driven communication solutions that strengthen political brands, amplify their voice, and turn digital presence into meaningful public influence.”
          </p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="tlt-about">
      <div className="tlt-about-grid">
        <div className="tlt-about-content">
          <span className="tlt-eyebrow-blue">Who We Are</span>
          <h2 className="tlt-about-title">WE TURN IDEAS INTO INFLUENCE</h2>
          <p className="tlt-about-desc">
            TREND LIFT TECH is a creative and digital strategy company helping political leaders, public figures, organisations, and businesses build a strong identity and meaningful digital presence.

            From creative design and personal branding to digital campaigns, websites, social media, and political consulting, we bring strategy, technology, and communication together to turn ideas into impact.
          </p>
          <div className="tlt-about-list">
            <div className="tlt-about-item">
              <CheckCircle className="tlt-icon-check" size={18} />  Every idea deserves a strong identity.

            </div>
            <div className="tlt-about-item">
              <CheckCircle className="tlt-icon-check" size={18} />  Every voice deserves to be heard.

            </div>
            <div className="tlt-about-item">
              <CheckCircle className="tlt-icon-check" size={18} /> Every connection can create an impact.
            </div>

            <div className="tlt-about-item">
              <CheckCircle className="tlt-icon-check" size={18} /> Every result begins with the right strategy.
            </div>
          </div>

        </div>
        <VisionMission />
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, bullets }) {
  return (
    <div className="tlt-service-card">
      <Icon className="tlt-service-icon" size={30} />
      <h3 className="tlt-service-title">{title}</h3>
      <ul className="tlt-service-list">
        {bullets.map((b, i) => (
          <li key={i}>
            <span className="tlt-bullet">•</span> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="tlt-services">
      <div className="tlt-services-inner">
        <SectionHeader eyebrow="What We Do" title="Strategy Meets Creativity." />
        <div className="tlt-services-grid">
          {SERVICES_DATA.map((srv, i) => (
            <ServiceCard key={i} {...srv} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeaderCard({ name, role, img, testimonial }) {
  return (
    <div className="tlt-leader-card">
      <div className="tlt-leader-imgwrap">
        <img
          src={img}
          alt={name}
          className="tlt-leader-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400?text=Leader';
          }}
        />
      </div>
      <div className="tlt-leader-info">
        <h4 className="tlt-leader-name">{name}</h4>
        <p className="tlt-leader-role">{role}</p>
        <p className="tlt-testimonial-text">
          {testimonial}
        </p>
      </div>
    </div>
  );
}

function Clients() {
  return (
    <section id="clients" className="tlt-clients">
      <SectionHeader
        eyebrow="Building Stronger Political Identities"
        title="Trusted By Leaders"
        desc="Strategic branding, digital campaigns and communication solutions designed to strengthen political leaders and organisations."
      />
      <div className="tlt-leaders-block">
        <h3 className="tlt-subheading">Political Leaders</h3>
        <div className="tlt-leaders-grid">
          {LEADERS_DATA.map((ldr, i) => (
            <LeaderCard key={i} {...ldr} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsCard({ icon: Icon, title, desc }) {
  return (
    <div className="tlt-whyus-card">
      <Icon className="tlt-whyus-icon" size={30} />
      <h3 className="tlt-whyus-heading">{title}</h3>
      <p className="tlt-whyus-desc">{desc}</p>
    </div>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="tlt-whyus">
      <div className="tlt-whyus-inner">
        <SectionHeader
          eyebrow="Why Trend Lift Tech?"
          title="Built for Influence, Designed for Impact."
          dark={true}
        />
        <div className="tlt-whyus-grid">
          {WHY_US_DATA.map((w, i) => (
            <WhyUsCard key={i} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const text =
      `Hello Trend Lift Tech,\n\n` +
      `I am reaching out through your website regarding your digital marketing and political branding services.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message}`;

    const waUrl = `https://wa.me/919003827858?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="tlt-form tlt-form-card">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="tlt-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="tlt-input"
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Your Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        required
        className="tlt-input"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject (e.g. Social Media Marketing, Political Branding)"
        value={formData.subject}
        onChange={handleChange}
        required
        className="tlt-input"
      />
      <textarea
        name="message"
        placeholder="Tell us about your digital marketing requirement..."
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="tlt-textarea"
      ></textarea>
      <button type="submit" className="tlt-submit-btn">
        <MessageSquare size={18} /> Send Message
      </button>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="tlt-contact">
      <SectionHeader eyebrow="Contact Us" title="Let's Grow Your Influence" />
      <div className="tlt-contact-grid">
        <div className="tlt-contact-info">
          <h3 className="tlt-contact-info-title">Get in Touch</h3>
          <p className="tlt-contact-info-text">
            <strong>Email:</strong> trendlifttech@gmail.com
          </p>
          <p className="tlt-contact-info-text">
            <strong>Phone:</strong> +91 9003827858
          </p>
          <p className="tlt-contact-info-text">
            <strong>Address:</strong> Tirupur, Tamil Nadu.
          </p>
          <p className="tlt-contact-info-text">
            Planning a political campaign, a brand refresh, or a full digital marketing push? Reach out to Trend Lift Tech and let's build a strategy that gets you seen, heard, and trusted.
          </p>
          <div className="tlt-map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.6856243506279!2d77.36265285900343!3d11.090135575385187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907d4bde05eff%3A0x566a63912c16e87e!2sKOMAL%20ELECTRICALS!5e1!3m2!1sen!2sin!4v1787824088970!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="tlt-footer">
      <div className="tlt-footer-grid">
        <div className="tlt-footer-col">
          <div className="tlt-footer-brand">TREND LIFT TECH Pvt. Ltd.</div>

          <p className="tlt-footer-address">Address: Tirupur,Tamil Nadu</p>
        </div>
        <div>
          <h4 className="tlt-footer-heading">Quick Links</h4>
          <ul className="tlt-footer-list">
            <li><a href="#about" className="tlt-footer-link">About Us</a></li>
            <li><a href="#services" className="tlt-footer-link">Services</a></li>
            <li><a href="#parties" className="tlt-footer-link">Political Spectrum</a></li>
            <li><a href="#why-us" className="tlt-footer-link">Why Choose Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="tlt-footer-heading">Key Services</h4>
          <ul className="tlt-footer-list">
            <li>Political Branding</li>
            <li>Digital Campaigns</li>
            <li>Social media management</li>
            <li>Develop Party IT-Wing</li>
          </ul>
        </div>
        <div>
          <h4 className="tlt-footer-heading">Follow Us</h4>
          <div className="tlt-footer-social">
            <a href="https://www.linkedin.com/company/trend-lift-tech" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/trendlifttech" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="mailto:info@trendlifttech.com" target="_blank" rel="noopener noreferrer">
            <img src={email1} alt="Email" />
          </a>
          </div>
        </div>
      </div>
      <div className="tlt-footer-bottom">
        © 2026 TREND LIFT TECH Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}



const globalStyles = `
  /* ============ RESET / BASE ============ */
  * {
      box-sizing: border-box;
  }
  html {
      scroll-behavior: smooth;
      scroll-padding-top: 5rem; /* Offsets sticky navbar height */
  }
  body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      background-color: #ffffff;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  ::selection {
      background: #2563eb;
      color: #ffffff;
  }
  a, u, .tlt-no-underline {
      text-decoration: none !important;
      color: inherit;
  }
  ul {
      margin: 0;
      padding: 0;
  }
  img {
      display: block;
      max-width: 100%;
  }
  .party-flag-box {
      background-color: transparent;
  }
  .tlt-icon-blue {
      color: #3b82f6;
  }
  .tlt-icon-mr {
      color: #3b82f6;
      margin-right: 0.25rem;
  }
  .tlt-text-blue {
      color: #2563eb;
  }
  .tlt-eyebrow {
      color: #60a5fa;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
  }
  .tlt-eyebrow-blue {
      color: #2563eb;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
  }
  .tlt-eyebrow-light {
      color: #3b82f6;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
  }
      .tlt-testimonial-text {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #475569;
    font-style: italic;
    margin: 0 0 1rem 0;
}

.tlt-testimonial-text::before {
    content: "“";
    color: #2563eb;
    font-size: 1.5rem;
    font-weight: 800;
}

.tlt-testimonial-text::after {
    content: "”";
    color: #2563eb;
    font-size: 1.5rem;
    font-weight: 800;
}
  .tlt-section-header {
      text-align: center;
  }
  .tlt-section-header > * + * {
      margin-top: 0.75rem;
  }
  .tlt-section-title {
      font-size: 1.875rem;
      font-weight: 900;
      color: #020617;
  }
  .tlt-section-desc {
      color: #475569;
      max-width: 36rem;
      margin: 0 auto;
      font-size: 0.875rem;
  }
  @media (min-width: 768px) {
      .tlt-section-title {
          font-size: 3rem;
      }
  }
  .tlt-subheading {
      font-size: 1.125rem;
      font-weight: 700;
      color: #0f172a;
      border-left: 4px solid #2563eb;
      padding-left: 0.75rem;
  }
  .tlt-topbar {
      background: #020617;
      color: #cbd5e1;
      padding: 0.625rem 1.5rem;
      font-size: 0.75rem;
      border-bottom: 1px solid #1e293b;
  }
  .tlt-topbar-inner {
      max-width: 80rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .tlt-topbar-left {
      display: flex;
      gap: 1.5rem;
  }
  .tlt-topbar-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #cbd5e1;
      transition: color 0.2s;
  }
  .tlt-topbar-link:hover {
      color: #60a5fa;
  }
  .tlt-topbar-location {
      display: none;
      gap: 1rem;
      font-weight: 500;
      color: #94a3b8;
  }
  @media (min-width: 768px) {
      .tlt-topbar-location {
          display: flex;
      }
  }
  .tlt-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid #e2e8f0;
  }
  .tlt-nav-inner {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .tlt-logo-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
  }
  .tlt-logo-badge {
      width: 100px;
      height:100px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  // .tlt-logo-text {
  //     font-size: 1.25rem;
  //     font-weight: 800;
  //     letter-spacing: -0.025em;
  //     color: #020617;
  //     line-height: 1.25;
  // }

  
  .tlt-logo-sub {
      font-size: 0.75rem;
      display: block;
      color: #64748b;
      font-weight: 400;
  }
  .tlt-nav-links {
      display: none;
      align-items: center;
      gap: 2rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: #334155;
  }
  @media (min-width: 768px) {
      .tlt-nav-links {
          display: flex;
      }
  }
  .tlt-nav-link {
      color: #334155;
      transition: color 0.2s;
  }
  .tlt-nav-link:hover {
      color: #2563eb;
  }
  .tlt-nav-cta {
      background: #2563eb;
      color: #fff;
      padding: 0.625rem 1.5rem;
      border-radius: 9999px;
      font-weight: 500;
      transition: all 0.2s;
      box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2);
  }
  .tlt-nav-cta:hover {
      background: #1d4ed8;
  }
  .tlt-mobile-btn {
      display: block;
      color: #0f172a;
      background: none;
      border: none;
      cursor: pointer;
  }
  @media (min-width: 768px) {
      .tlt-mobile-btn {
          display: none;
      }
  }
  .tlt-mobile-menu {
      display: none;
      background: #fff;
      border-bottom: 1px solid #e2e8f0;
      padding: 1.5rem;
      font-weight: 500;
  }
  .tlt-mobile-menu.tlt-mobile-menu-open {
      display: block;
  }
  .tlt-mobile-menu > * + * {
      margin-top: 1rem;
  }
  @media (min-width: 768px) {
      .tlt-mobile-menu {
          display: none !important;
      }
  }
  .tlt-mobile-link {
      display: block;
      color: #1e293b;
  }
  .tlt-mobile-link:hover {
      color: #2563eb;
  }
  .tlt-mobile-cta {
      display: block;
      text-align: center;
      background: #2563eb;
      color: #fff;
      padding: 0.75rem 0;
      border-radius: 0.75rem;
      font-weight: 600;
  }

 .tlt-hero {
  position: relative;
  overflow: hidden; /* Image veliya pogaama irukka */
  padding: 6rem 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

/* Image Full Section Fill Panna */
.tlt-hero-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Light Overlay (Text Readability-ku) */
.tlt-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(239, 246, 255, 0.08), rgba(255, 255, 255, 0.1));
  z-index: 1;
}

/* Content layer top-la varadhukku */
.tlt-hero-inner, .ticker {
  position: relative;
  z-index: 2;
}
  .tlt-hero-inner {
      max-width: 72rem;
      margin: 0 auto;
      text-align: center;
  }
  .tlt-hero-inner > * + * {
      margin-top: 2rem;
  }
  .tlt-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(219, 234, 254, 0.8);
      color: #1d4ed8;
      padding: 0.375rem 1rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
  }
  .tlt-hero-title {
    font-size: 2.25rem;
    font-weight: 900;
    color: #020617;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin: 0;

    /* Animation */
    opacity: 0;
    transform: translateY(35px);
    animation: tltHeroTitleReveal 1s ease-out 0.3s forwards;
}

@keyframes tltHeroTitleReveal {
    from {
        opacity: 0;
        transform: translateY(35px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (min-width: 768px) {
    .tlt-hero-title {
        font-size: 3.75rem;
    }
}

@media (min-width: 1024px) {
    .tlt-hero-title {
        font-size: 4.5rem;
    }
}

@media (min-width: 768px) {
    .tlt-hero-desc {
        font-size: 1.25rem;
    }
}
 
  .tlt-hero-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      padding-top: 1rem;
  }
      .tlt-hero-desc {
    max-width: 48rem;
    margin: 0 auto;
    font-size: 1.125rem;
    color: #475569;
    line-height: 1.625;
    text-align: center;
}

/* Important: Keeps each word together as a unit so words won't break awkwardly */
.tlt-desc-word {
    display: inline-block;
    white-space: nowrap;
}

/* Individual letter styling */
.tlt-desc-letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(12px);
    animation: tltLetterReveal 0.45s ease-out forwards;
}

@keyframes tltLetterReveal {
    0% {
        opacity: 0;
        transform: translateY(12px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (min-width: 768px) {
    .tlt-hero-desc {
        font-size: 1.25rem;
    }
}

  @media (min-width: 640px) {
      .tlt-hero-actions {
          flex-direction: row;
      }
  }
  .tlt-btn-primary {
      width: 100%;
      background: #2563eb;
      color: #fff;
      font-weight: 600;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      transition: all 0.2s;
      box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
  }
  @media (min-width: 640px) {
      .tlt-btn-primary {
          width: auto;
      }
  }
  .tlt-btn-primary:hover {
      background: #1d4ed8;
  }
  .tlt-btn-secondary {
      width: 100%;
      background: #f1f5f9;
      color: #0f172a;
      font-weight: 600;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      transition: all 0.2s;
      border: 1px solid #e2e8f0;
      text-align: center;
  }
  @media (min-width: 640px) {
      .tlt-btn-secondary {
          width: auto;
      }
  }
  .tlt-btn-secondary:hover {
      background: #e2e8f0;
  }
  .tlt-stats {
      
      color: #fff;
      padding: 2.5rem 1.5rem;
      margin-bottom: 5rem;
  }
  .tlt-stats-grid {
      max-width: 80rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      text-align: center;
      
  }
  @media (min-width: 768px) {
      .tlt-stats-grid {
          grid-template-columns: repeat(4, 1fr);
      }
  }
  .tlt-stat-item {
      border-left: 1px solid transparent;
  }
  .tlt-stats-grid .tlt-stat-item:nth-child(2n) {
      border-left: 1px solid #1e293b;
  }
  @media (min-width: 768px) {
      .tlt-stats-grid .tlt-stat-item:nth-child(2n) {
          border-left: none;
      }
      .tlt-stats-grid .tlt-stat-item:not(:first-child) {
          border-left: 1px solid #1e293b;
      }
  }
  .tlt-stat-value {
      font-size: 1.875rem;
      font-weight: 900;
      color: #3b82f6;
  }
  @media (min-width: 768px) {
      .tlt-stat-value {
          font-size: 2.25rem;
      }
  }
  .tlt-stat-label {
      font-size: 0.75rem;
      color: #000000;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0.25rem;
  }


  
/* ═══════════════════════════════════════════════
   FOUNDER SECTION — Dark Theme, Full Width
   Left = Photo (with circle backdrop behind it)
   Right = Content
═══════════════════════════════════════════════ */

#founder {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  padding: 5rem 8%;
  width: 100%;
  max-width: 100%;
  margin: 0;
  margin-bottom: 5rem;
  background: #0f172a;
  overflow: hidden;
}


═══════════════════════════════════════════════
   FOUNDER SECTION — Dark Theme, Full Width
   Left = Photo (no circle)
   Right = Content
═══════════════════════════════════════════════ */

#founder {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  margin-bottom: 5rem;
  padding: 6rem 8%;
  width: 100%;
  max-width: 100%;
  margin: 0;
  background: #0f172a;
  overflow: hidden;
}

/* ── LEFT : Image (no accent circle) ─────────── */

/* ───────── FOUNDER IMAGE ONLY ───────── */

.tlt-founder-imgwrap {
  position: relative;
  flex: 0 0 420px;
  width: 420px;
  height: 500px;

  overflow: hidden;

  border-radius: 32px 32px 120px 32px;

  border: 1px solid rgba(96, 165, 250, 0.65);

background: linear-gradient(
  145deg,
  #cbd5e1 0%,
  #94a3b8 45%,
  #475569 75%,
  #1e293b 100%
);

  box-shadow:
    0 20px 50px rgba(37, 99, 235, 0.20),
    0 0 0 1px rgba(255, 255, 255, 0.08);

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}


/* IMAGE */
.tlt-founder-imgwrap img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: top center;

  border-radius: inherit;

  background: transparent;

  transition:
    transform 0.5s ease,
    filter 0.5s ease;
}


/* IMAGE HOVER */
.tlt-founder-imgwrap:hover {
  transform: translateY(-5px);

  box-shadow:
    0 28px 65px rgba(37, 99, 235, 0.28),
    0 0 25px rgba(59, 130, 246, 0.12);
}

.tlt-founder-imgwrap:hover img {
  transform: scale(1.03);
}



@media (max-width: 1024px) {
  .tlt-founder-imgwrap {
    width: 340px !important;
    height: 420px !important;
  }
}

@media (max-width: 768px) {
  .tlt-founder-imgwrap {
    width: 300px !important;
    height: 380px !important;
    margin: 0 auto 2.5rem auto !important;   /* gap between image bottom and "OUR FOUNDER" text */
  }
}

@media (max-width: 480px) {
  .tlt-founder-imgwrap {
    width: 280px !important;
    height: 340px !important;
    margin: 0 auto 3rem auto !important;      /* extra gap for narrow (400-450px) screens */
  }
}










/* ── RIGHT : Content ────────────────────────── */

.tlt-founder-content {
  flex: 1 1 0;
  min-width: 0;
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}


.tlt-fbadge {
  display: flex;
  align-items: center;
  gap: 8px;
}



.tlt-fbadge-text {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #3b82f6;
  text-transform: uppercase;
  margin: 0;
}

.tlt-founder-title {
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 900;
  line-height: 1.2;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin: 0;
}

.tlt-title-text,
.tlt-title-highlight {
  display: inline-block;
  opacity: 0;
  transform: translateY(25px);
  filter: blur(3px);

  animation: classyTitleReveal 0.8s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.tlt-title-text {
  animation-delay: 0.2s;
}

.tlt-title-highlight {
  color: #60a5fa;
  animation-delay: 0.45s;
}

.tlt-founder-title br + .tlt-title-text {
  animation-delay: 0.65s;
}

.tlt-founder-title br + .tlt-title-text + .tlt-title-highlight {
  animation-delay: 0.9s;
}

@keyframes classyTitleReveal {
  from {
    opacity: 0;
    transform: translateY(25px);
    filter: blur(3px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}


.tlt-founder-letter {
  display: inline-block;
  color:yellow;
  opacity: 0;

  transform:
    translateY(18px)
    rotate(180deg)
    scale(0.7);

  filter: blur(4px);

  animation: tltLetterSpinReveal 0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}
    /* Each word acts as a wrapper to prevent breaking mid-word */
.tlt-founder-word {
  display: inline-block;
  white-space: nowrap;
}

.tlt-founder-desc {
  font-size: 0.9385rem;
  line-height: 1.75;
  color: #fff200;
  margin: 0;
  max-width: 54ch;
}

/* Individual letter spin animation reset */
.tlt-founder-letter {
  display: inline-block;
  color: #fff200;
  opacity: 0;
  transform: translateY(18px) rotate(180deg) scale(0.7);
  filter: blur(4px);
  animation: tltLetterSpinReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-play-state: paused;
}

#founder.tlt-founder-visible .tlt-founder-letter {
  animation-play-state: running;
}

@keyframes tltLetterSpinReveal {

  0% {
    opacity: 0;

    transform:
      translateY(18px)
      rotate(180deg)
      scale(0.7);

    filter: blur(4px);
  }

  60% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;

    transform:
      translateY(0)
      rotate(0deg)
      scale(1);

    filter: blur(0);
  }
}


.tlt-btn-linkedin {
  position: relative;
  width: fit-content;
  min-width: 280px;
  height: 58px;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;

  padding: 6px 18px 6px 8px;

  background: #ffffff;
  color: #172033;

  border: 1px solid #d9deea;
  border-radius: 999px;

  font-size: 16px;
  font-weight: 600;
  text-decoration: none;

  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);

  transition: all 0.3s ease;
  overflow: hidden;
}

/* LEFT CIRCLE */
.tlt-btn-linkedin::before {
  content: "in";

  width: 44px;
  height: 44px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: #0A66C2;

  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.25);

  transition: transform 0.3s ease;
}

/* RIGHT ARROW */
.tlt-btn-linkedin::after {
  content: "↗";

  margin-left: auto;

  font-size: 19px;
  font-weight: 500;

  color: #4f46e5;

  transition: transform 0.3s ease;
}
  .tlt-btn-linkedin span {
  display: inline-block;
  transition: transform 0.3s ease;
}

.tlt-btn-linkedin:hover {
  transform: scale(1.08);
}



@media (max-width: 768px) {
  .tlt-btn-linkedin {
    width: 100%;
    max-width: 320px;
    min-width: unset;
    height: 56px;

    font-size: 15px;
    gap: 12px;
    padding-right: 16px;
  }

  .tlt-btn-linkedin::before {
    width: 42px;
    height: 42px;
  }
}

@media (max-width: 480px) {
  .tlt-btn-linkedin {
    max-width: 100%;
    height: 54px;
    font-size: 14px;
  }

  .tlt-btn-linkedin::before {
    width: 40px;
    height: 40px;
  }

  .tlt-btn-linkedin::after {
    font-size: 17px;
  }
}

/* ── Responsive ────────────────────────────── */

@media (max-width: 1024px) {
  #founder {
    gap: 3rem;
    padding: 5rem 6%;
  }
  .tlt-founder-imgwrap {
    flex: 0 0 340px;
    width: 340px;
  }
  .tlt-founder-imgwrap::before {
    width: 400px;
    height: 400px;
    right: -50px;
  }
}

@media (max-width: 768px) {
  #founder {
    flex-direction: column;
    padding: 4rem 5%;
    gap: 2rem;
  }
  
  .tlt-founder-content {
    order: 2;
  }
  .tlt-founder-desc {
    max-width: 100%;
  }
}

/* Parties Data */

  .tlt-parties {
      padding: 5rem 1.5rem;
      background: #0f172a;
      color: #fff;
  }
  .tlt-parties-inner {
      max-width: 72rem;
      margin: 0 auto;
      text-align: center;
  }
  .tlt-parties-inner > * + * {
      margin-top: 3rem;
  }
  .tlt-parties-header > * + * {
      margin-top: 0.75rem;
  }
  .tlt-parties-title {
      font-size: 1.875rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0;
  }
  @media (min-width: 768px) {
      .tlt-parties-title {
          font-size: 3rem;
      }
  }
  .tlt-parties-desc {
      color: #94a3b8;
      max-width: 42rem;
      margin: 0 auto;
      font-size: 0.875rem;
  }
  @media (min-width: 768px) {
      .tlt-parties-desc {
          font-size: 1rem;
      }
  }
  .tlt-parties-tagline {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #eab308;
      text-transform: uppercase;
      padding-top: 0.5rem;
  }
      .tlt-parties-tagline-sm{
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #fafafa;
      text-transform: uppercase;
      padding-top: 0.5rem;
      }
  .tlt-parties-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem 2rem;
    padding-top: 1.5rem;
    max-width: 700px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .tlt-parties-row {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.3rem 1rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
}
  .tlt-party-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
  }
  .tlt-party-circle {
      width: 7.5rem;
      height: 5rem;
      border-radius: 0.5rem;
      padding: 0;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
      border: 1px solid #1d61bf;
      transition: all 0.2s;
      transform: translateY(0);
      overflow: hidden;
  }
  .tlt-party-circle:hover {
      border-color: #ffef12;
      transform: translateY(-8px);
  }
  .tlt-party-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .tlt-party-name {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: #cbd5e1;
      text-transform: uppercase;
  }

  /* About us*/
  .tlt-about {
      padding: 5rem 1.5rem;
      max-width: 80rem;
      margin: 0 auto;
  }
  .tlt-about-grid {
      display: grid;
      gap: 3rem;
      align-items: center;
  }
  @media (min-width: 768px) {
      .tlt-about-grid {
          grid-template-columns: repeat(2, 1fr);
      }
  }
  .tlt-about-content > * + * {
      margin-top: 1.5rem;
  }
  .tlt-about-title {
      font-size: 1.875rem;
      font-weight: 900;
      color: #020617;
      line-height: 1.25;
      margin: 0;
  }
  @media (min-width: 768px) {
      .tlt-about-title {
          font-size: 3rem;
      }
  }
  .tlt-about-desc {
      color: #475569;
      line-height: 1.625;
  }
  .tlt-about-list {
      padding-top: 0.5rem;
  }
  .tlt-about-list > * + * {
      margin-top: 0.75rem;
  }
  .tlt-about-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #1e293b;
      font-weight: 500;
  }
  .tlt-icon-check {
      color: #2563eb;
      font-size: 1.125rem;
  }
  .tlt-vision-card {
      background: #f8fafc;
      border-radius: 1rem;
      padding: 2rem;
      border: 1px solid #e2e8f0;
      position: relative;
      overflow: hidden;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  .tlt-vision-badge {
      position: absolute;
      top: 0;
      right: 0;
      background: #2563eb;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.5rem 1rem;
      border-bottom-left-radius: 0.75rem;
      text-transform: uppercase;
  }
  .tlt-vision-body > * + * {
      margin-top: 1.5rem;
  }
  .tlt-vision-heading {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
  }
  .tlt-vision-box {
      background: #fff;
      padding: 1.5rem;
      border-radius: 0.75rem;
      border: 1px solid #e2e8f0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  .tlt-vision-label {
      font-weight: 700;
      color: #2563eb;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
  }
  .tlt-vision-text {
      color: #334155;
      font-size: 0.875rem;
      font-style: italic;
      margin: 0;
  }
  .tlt-services {
      padding: 5rem 1.5rem;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
  }
  .tlt-services-inner {
      max-width: 80rem;
      margin: 0 auto;
  }
  .tlt-services-inner > * + * {
      margin-top: 3rem;
  }
  .tlt-services-grid {
      display: grid;
      gap: 2rem;
  }
  @media (min-width: 768px) {
      .tlt-services-grid {
          grid-template-columns: repeat(2, 1fr);
      }
  }
  @media (min-width: 1024px) {
      .tlt-services-grid {
          grid-template-columns: repeat(3, 1fr);
      }
  }

  .tlt-service-card {
  position: relative;
  overflow: hidden;

  width: 100%;
  min-height: 290px;
  height: auto;

  padding: 32px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;

  box-sizing: border-box;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Moving blue light */
.tlt-service-card::before {
  content: "";
  position: absolute;
  inset: -2px;

  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 300deg,
    #2563eb 330deg,
    #60a5fa 350deg,
    transparent 360deg
  );

  border-radius: 20px;

  opacity: 0;
  animation: serviceBorderMove 2.5s linear infinite;

  transition: opacity 0.3s ease;

  z-index: 0;
}

/* White inner layer */
.tlt-service-card::after {
  content: "";
  position: absolute;
  inset: 2px;

  background: #ffffff;
  border-radius: 16px;

  z-index: 0;
}

/* Content should stay above animation */
.tlt-service-card > * {
  position: relative;
  z-index: 2;
}

/* Hover */
.tlt-service-card:hover::before {
  opacity: 1;
}

.tlt-service-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 15px 35px rgba(37, 99, 235, 0.18);
}

/* Border movement */
@keyframes serviceBorderMove {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
   



  .tlt-service-icon {
      color: #2563eb;
      margin-bottom: 1rem;
  }
  .tlt-service-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 1rem 0;
  }
  .tlt-service-list {
      color: #475569;
      font-size: 0.875rem;
      list-style: none;
  }
  .tlt-service-list li + li {
      margin-top: 0.5rem;
  }
  .tlt-bullet {
      color: #2563eb;
      font-weight: 700;
  }


  /* Leaders Data */
      
  .tlt-clients {
      padding: 5rem 1.5rem;
      max-width: 80rem;
      margin: 0 auto;
  }
  .tlt-clients > * + * {
      margin-top: 3rem;
  }

  .tlt-leaders-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
  }
  @media (min-width: 640px) {
      .tlt-leaders-grid {
          grid-template-columns: repeat(3, 1fr);
      }
  }
      @media (min-width: 400px) {
      .tlt-leaders-grid {
          grid-template-columns: 1fr;
      }
  }
  @media (min-width: 1024px) {
      .tlt-leaders-grid {
          grid-template-columns: repeat(5, 1fr);
      }
  }
  .tlt-leader-card {
      background: #020617;
      border-radius: 1rem;
      border: 1px solid #e2e8f0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      transition: all 0.2s;
      overflow: hidden;
      text-align: center;
  }
  .tlt-leader-card:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
   .tlt-testimonial-text{
      font-size:14px;
      line-height: 1.6;
      color: yellow;
   }
      .tlt-testimonial-text::before{
      color:#ffffff;
      }
      .tlt-testimonial-text::after{
      color:#ffffff;
      }
  // .tlt-leader-imgwrap {
  //     height: 14rem;
  //     background: #f1f5f9;
  //     overflow: hidden;
  //     position: relative;
  // }
  // .tlt-leader-img {
  //     width: 100%;
  //     height: 100%;
  //     object-fit: cover;
  //     transition: transform 0.3s;
  // }


.tlt-leader-imgwrap {
    height: 14rem;
    background: #f1f5f9;
    overflow: hidden;
    position: relative;
}

.tlt-leader-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Face top position-la irukkadhanala center top alignment kudhukroam */
    object-position: center top; 
    transition: transform 0.3s;
}
    @media (max-width: 639px) {
    .tlt-leader-imgwrap {
        /* Mobile-la photo cropped-a theriyama irukka height-a konjam increase pannalam */
        height: 18rem; 
    }
    
    .tlt-leader-img {
        /* Face matum nalla focus aaguradhukku top alignment explicitly setting */
        object-position: top center;
    }
}


  .tlt-leader-card:hover .tlt-leader-img {
      transform: scale(1.05);
  }
  .tlt-leader-info {
      padding: 1rem;
  }
  .tlt-leader-name {
      font-weight: 700;
      color:#ffffff;
      font-size: 0.875rem;
      margin: 0;
  }
      
  @media (min-width: 768px) {
      .tlt-leader-name {
          font-size: 1rem;
      }
  }
  .tlt-leader-role {
      font-size: 0.75rem;
      color: #CBD5E1;
      font-weight: 500;
      margin-top: 0.25rem;
  }


/* Why Us Data */

  .tlt-whyus {
      padding: 5rem 1.5rem;
      background: #020617;
      color: #fff;
  }
  .tlt-whyus-inner {
      max-width: 80rem;
      margin: 0 auto;
  }
  .tlt-whyus-inner > * + * {
      margin-top: 3rem;
  }
  .tlt-whyus-title {
      font-size: 1.875rem;
      font-weight: 900;
      margin: 0;
  }
  @media (min-width: 768px) {
      .tlt-whyus-title {
          font-size: 3rem;
      }
  }
  .tlt-whyus-grid {
      display: grid;
      gap: 2rem;
  }
  @media (min-width: 768px) {
      .tlt-whyus-grid {
          grid-template-columns: repeat(3, 1fr);
      }
  }
  .tlt-whyus-card {
      
      background: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid #1e293b;
  }
      .tlt-whyus-card:hover {
      border: 1px solid #0147b7;
  }
  .tlt-whyus-card > * + * {
      margin-top: 0.75rem;
  }
  .tlt-whyus-icon {
      color: #3b82f6;
  }
  .tlt-whyus-heading {
      font-size: 1.125rem;
      font-weight: 700;
      margin: 0;
  }
  .tlt-whyus-desc {
      color: #94a3b8;
      font-size: 0.875rem;
      margin: 0;
  }
  .tlt-contact {
      padding: 5rem 1.5rem;
      max-width: 80rem;
      margin: 0 auto;
  }
  .tlt-contact > * + * {
      margin-top: 3rem;
  }
  .tlt-contact-grid {
      display: grid;
      gap: 3rem;
  }
  @media (min-width: 1024px) {
      .tlt-contact-grid {
          grid-template-columns: 1fr 1fr;
          align-items: start;
      }
  }
  .tlt-contact-info > * + * {
      margin-top: 1rem;
  }
  .tlt-contact-info-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: #020617;
      margin: 0;
  }
  .tlt-contact-info-text {
      color: #475569;
      font-size: 0.9375rem;
      line-height: 1.6;
      margin: 0;
  }
  .tlt-contact-info-text strong {
      color: #0f172a;
      margin-right: 0.35rem;
  }
  .tlt-map-box {
      border-radius: 1rem;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  .tlt-map-box iframe {
      display: block;
      width: 100%;
      border: 0;
  }
  .tlt-form-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 1rem;
      padding: 2rem;
  }
  .tlt-form-card > * + * {
      margin-top: 1.5rem;
  }
  .tlt-form > * + * {
      margin-top: 1rem;
  }
  .tlt-input, .tlt-textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      background: #fff;
      border: 1px solid #cbd5e1;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      font-family: inherit;
  }
  .tlt-textarea {
      resize: vertical;
  }
  .tlt-input:focus, .tlt-textarea:focus {
      outline: none;
      border-color: #2563eb;
  }
  .tlt-submit-btn {
      width: 100%;
      background: #25d366;
      color: #fff;
      font-weight: 700;
      padding: 0.875rem 0;
      border-radius: 0.75rem;
      transition: all 0.2s;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-family: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
  }
  .tlt-submit-btn:hover {
      background: #1fb855;
  }
  .tlt-footer {
      background: #020617;
      color: #94a3b8;
      padding: 3rem 1.5rem;
      border-top: 1px solid #1e293b;
      font-size: 0.875rem;
  }
  .tlt-footer-grid {
      max-width: 80rem;
      margin: 0 auto;
      display: grid;
      gap: 2rem;
      margin-bottom: 3rem;
  }
  @media (min-width: 768px) {
      .tlt-footer-grid {
          grid-template-columns: repeat(4, 1fr);
      }
  }
  .tlt-footer-col > * + * {
      margin-top: 1rem;
  }
  .tlt-footer-brand {
      color: #fff;
      font-weight: 700;
      font-size: 1.125rem;
  }
  .tlt-footer-tagline {
      font-size: 0.75rem;
      color: #94a3b8;
      margin: 0;
  }
  .tlt-footer-address {
      font-size: 0.75rem;
      color: #64748b;
      margin: 0;
  }
  .tlt-footer-heading {
      color: #fff;
      font-weight: 600;
      margin: 0 0 0.75rem 0;
  }
  .tlt-footer-list {
      font-size: 0.75rem;
      list-style: none;
      color: #94a3b8;
  }
  .tlt-footer-list li + li {
      margin-top: 0.5rem;
  }
  .tlt-footer-link {
      color: #94a3b8;
  }
  .tlt-footer-link:hover {
      color: #fff;
  }
  .tlt-footer-contact {
      font-size: 0.75rem;
      margin: 0 0 0.5rem 0;
  }
  .tlt-footer-bottom {
      max-width: 80rem;
      margin: 0 auto;
      border-top: 1px solid #0f172a;
      padding-top: 1.5rem;
      text-align: center;
      font-size: 0.75rem;
      color: #ffffff;
  }

//   .ticker {
//   background: #0f172a;
//   padding: 10px;
//   overflow: hidden;
//   white-space: nowrap;
// }

// .ticker-track {
//   display: inline-flex;
//   animation: tickerScroll 20s linear infinite;
//   gap: 20px;
// }

// .ticker-track span {
//   font-size: 2.rem;
//     font-weight: 900;
//     color: #ffffff;
//     letter-spacing: -0.025em;
//     line-height: 1.2;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }

// .ticker-track span::before {
//   content: "";
// }

// @keyframes tickerScroll {
//   0% {
//     transform: translateX(0);
//   }

//   100% {
//     transform: translateX(-40%);
//   }
// }

// section {
//   padding: 90px 6%;
// }

.tlt-footer-social {
  display: flex;
  flex-direction: row; /* Icons-a row wise-a maatha */
  align-items: center;
  gap: 12px; /* Icons naduvula gap thara */
}

/* Icons size align panna */
.tlt-footer-social img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  z-index: 1000;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

.whatsapp-icon {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
  }
  
 
  
  




`;

/* ==========================================
   MAIN SINGLE PAGE APPLICATION
   ========================================== */

export default function App() {
  return (
    <div>
      <style>{globalStyles}</style>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Stats />
        
        <PoliticalSpectrum />
        <About />
        <Services />
        <Clients />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <a
        href="https://wa.me/9003827858"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float">
        <img src={whatsapp} alt="whatsapp" className='whatsapp-icon' />
      </a>
    </div>
  );
}