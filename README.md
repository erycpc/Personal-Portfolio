# A personal portfolio built with **React** and **Vite**, showcasing my work, skills, and background as a Software Engineer.


## Live Demo

> 🔗 [(https://personal-portfolio-woad-eight.vercel.app/)]((https://personal-portfolio-woad-eight.vercel.app/))


## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Bundler | Vite |
| Styling | CSS Modules (per-component) |
| Fonts | Space Mono, Syne (Google Fonts) |
| Deployment | Vercel |

---

## Features

- Responsive design — works on mobile, tablet, and desktop
- Scroll-aware navbar with frosted glass effect
- Animated hero section with stats
- About section with personal photo
- Skills section with tech stack cards
- Projects section *(coming soon)*
- Contact section with social links
- Smooth scroll navigation

---

## Project Structure

```
src/
├── App.jsx               # Root component
├── Styles/               # All CSS Files
└── components/
    ├── Navbar.jsx
    ├── Navbar.css
    ├── Hero.jsx
    ├── Hero.css
    ├── About.jsx
    ├── About.css
    ├── Skills.jsx
    ├── Skills.css
    ├── Projects.jsx
    ├── Projects.css
    ├── Contact.jsx
    └── Contact.css

public/
└── eric.jpg              # Profile photo
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/ericmbithi/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

---

## Customisation

| What to change | Where |
|----------------|-------|
| Name & tagline | `Hero.jsx` |
| Stats (years, projects, clients) | `Hero.jsx` → `stats` array |
| Bio text | `About.jsx` |
| Profile photo | `public/eric.jpg` |
| Tech stack | `Skills.jsx` → `skills` array |
| Projects | `Projects.jsx` |
| Email & social links | `Contact.jsx` → `links` array |
| Colors & fonts | `App.css` → `:root` variables |

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to netlify.com/drop
```

---

## Roadmap

- [ ] Add real projects to the Projects section
- [ ] Add animations on scroll
- [ ] Add dark/light mode toggle
- [ ] Add a blog section

---

## Author

**Eric Mbithi**
- GitHub: [@ericmbithi](https://github.com/erycpc)
- LinkedIn: [linkedin.com/in/ericmbithi](https://linkedin.com/in/eric-mbithi-0a10222a3/)

---
