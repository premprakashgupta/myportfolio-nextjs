# Portfolio Redesign Prompt — Prem Prakash Gupta
# Copy this entire prompt and paste into Claude Code / Cursor / v0.dev

---

Redesign my existing Next.js + Tailwind CSS portfolio. Keep the same routing and file structure. Only redesign the UI and update the content with the data provided below.

---

## DESIGN TOKENS

```
--bg-base:       #F9FAFB
--bg-surface:    #FFFFFF
--border:        #E5E7EB
--accent:        #2563EB
--text-primary:  #111827
--text-muted:    #6B7280
```

Font: Inter (Google Fonts) for all text. JetBrains Mono for code blocks only.
Max width: 1100px centered. Section padding: 80px 0. Card border-radius: 12px.

---

## NAVBAR

Fixed top. Logo left — "PP" styled initials in accent color. Nav links center: About · Experience · Projects · Skills · Contact. Right: "Download CV" solid blue button.
On scroll: white background + border-bottom: 1px solid #E5E7EB. NO backdrop-filter blur.

---

## SECTION 1 — HERO

Two columns: left 60%, right 40%.

**Left column:**
- Small badge at top: green dot + "Open to opportunities"
- Name: PREM PRAKASH GUPTA — clamp(42px, 7vw, 72px), weight 700, letter-spacing -0.02em
- Role line: "Full Stack Developer (MERN) · 2+ Years · 3 Companies · 10+ Live Products"
- One-line value prop: "I build scalable SaaS backends and clean React UIs — shipped to 3,000+ real users."
- Two buttons: "View My Work" (solid #2563EB) + "Download CV" (outline)
- Social icons below buttons: GitHub · LinkedIn · Email

**Right column:**
- Keep existing terminal code block, update font to JetBrains Mono, style background to #1E1E2E with syntax highlighting colors

---

## SECTION 2 — STATS STRIP

Full-width strip, background #F3F4F6, padding 24px 0.
Four numbers in a horizontal row, centered:

| 2+ Years | 3 Companies | 10+ Live Products | 3,000+ Users Served |
Each: large number bold, small muted label below.

---

## SECTION 3 — EXPERIENCE

Section heading: "Work Experience"
Layout: left side company info, right side bullet points. Clean list — NO timeline decoration, NO animated line.

### Job 1 — Current
**Full Stack Developer** · Thundergits Consultancy Pvt. Ltd. · Remote
Apr 2025 – Present
- Built DavaBharti — medical e-commerce + warehouse ERP with 250+ REST APIs serving 3,000+ active users
- Implemented JWT auth, RBAC, multi-tenant architecture — reduced unauthorised access to zero across 5+ tenants
- AWS EC2 + S3 deployment with Nginx + PM2 — reduced server downtime by 80%
Tech badges: Node.js · MySQL · Prisma · React · AWS · Docker

### Job 2
**Full Stack Developer** · Systellar Technologies Pvt. Ltd. · Gurugram
Apr 2024 – Mar 2025
- Built full backend for Praesentia (attendance platform, 50+ organisations) — improved data accuracy by 98%
- Improved API response time by 35% by rewriting slow queries and restructuring 4 core modules
- Built 20+ reusable React components; mentored 3 junior developers in React best practices
Tech badges: Node.js · MySQL · React · REST APIs

### Job 3
**Full Stack Developer** · MittArv Technology Pvt. Ltd. · Remote
Oct 2023 – Mar 2024
- Built 10+ reusable React components and REST API integrations — improved page load time by 25%
- Fixed critical Flutter bugs — reduced crash frequency by 45%
Tech badges: React · Node.js · Flutter · MySQL

---

## SECTION 4 — SELECTED PROJECTS (exactly 5)

Section heading: "Selected Work"
Subheading: "Production applications used by real businesses"

Card layout: screenshot image left (use placeholder bg color if no image), info right.
Each card has: Title · "Problem solved:" one-liner · Tech badge pills · Live link button · GitHub link.
Hover effect: translateY(-3px), transition 200ms ease.

### Project 1 — DavaBharti (FEATURED — show first)
Problem solved: Medical stores needed a unified e-commerce + warehouse management system
Tech: Node.js · MySQL · Prisma · React · AWS EC2 · S3
Live: https://davabharti.com
Stats badge: "3,000+ active users"

### Project 2 — Chikit 360
Problem solved: Multi-tenant SaaS for medical store inventory, billing, and subscriptions
Tech: MongoDB · Express · React · Node.js · Razorpay
Live: https://chikit360.thundergits.com

### Project 3 — Edugits
Problem solved: School management SaaS — classes, fees, results, admit cards
Tech: MongoDB · Express · React · Node.js · Razorpay
Live: https://edugits.thundergits.com

### Project 4 — Coding Pandas
Problem solved: Competitive programming platform with online compiler and real-time leaderboard
Tech: Next.js · Node.js · BullMQ · SSE · R2
Stats badge: "60% API throughput improvement"
Live: https://codingpandas.in

### Project 5 — Loqo AI
Problem solved: Spiritual video streaming platform with HLS and Google Ads integration
Tech: Next.js · HLS · Video.js · Google Ads
Live: https://loqo.ai

Below projects section: "View all 18+ projects →" linking to GitHub profile https://github.com/premprakashgupta

---

## SECTION 5 — SKILLS

Section heading: "Technical Skills"
Layout: 4 groups as flat pill badge rows. NO percentages. NO progress bars.

**Frontend:** React.js · Next.js · Redux Toolkit · Tailwind CSS · TypeScript · HTML5 · CSS3
**Backend:** Node.js · Express.js · NestJS · REST APIs · Socket.IO · JWT · BullMQ
**Databases:** MongoDB · MySQL · PostgreSQL · Prisma ORM · Firebase
**Cloud & Tools:** AWS (EC2, S3) · Docker · Nginx · PM2 · Git · Jest · Postman · CI/CD

---

## SECTION 6 — CONTACT

Center aligned. Clean, minimal.
Heading: "Let's build something together"
Subtext: "Open to full-time roles and freelance projects"

Show directly on page (no form needed):
- Email: prem.com0011@gmail.com (visible, copyable text)
- Phone: +91-9955804730
- LinkedIn: https://www.linkedin.com/in/premprakashgupta-/
- GitHub: https://github.com/premprakashgupta

Remove the contact form entirely.

---

## ANIMATIONS — STRICT RULES

ALLOWED:
- Card hover: translateY(-3px), 200ms ease
- Stats numbers: count-up animation on scroll (use CountUp or plain JS)
- Experience + Projects sections: scroll reveal — opacity 0→1, translateY 16px→0, 500ms easeOut (use Framer Motion or Intersection Observer)

NOT ALLOWED (do not add any of these):
- Cursor glow or cursor trail
- Particle or mesh background
- Typewriter/typed.js animation in hero
- Navbar backdrop-filter blur
- Loading screen or splash
- Auto-playing anything
- Scroll-triggered color changes
- Animated gradient backgrounds

---

## PERFORMANCE REQUIREMENTS

- Use next/image for all images with lazy loading
- Lighthouse score target: 90+
- No heavy animation libraries (no GSAP, no three.js)
- Framer Motion only if already in the project, otherwise use CSS transitions + Intersection Observer

---

## CONTENT TO REMOVE

- All skill percentage bars (the 70%–92% numbers)
- The old fake phone number (+91 9876543210) — replaced with real one above
- Incomplete Instagram link
- All 13+ non-featured projects from main view (keep only the 5 listed above)
- "Volcanic Classes" project (has no live link — remove)
- Contact form

---

## FOOTER

"© 2025 Prem Prakash Gupta · Full Stack Developer · Built with Next.js"
GitHub · LinkedIn · Email icons only. No Instagram unless profile URL is added.