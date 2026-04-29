# ⚡ GITFOLIO

A beginner-friendly developer portfolio template with a sleek monochrome dark theme. Fork it, customize it, deploy it - no design skills required, (promise!)

![Gitfolio Preview](https://img.shields.io/badge/Next.js-16.0.10-black?style=flat-square&logo=next.js) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

---

## 🚀 Quick Start

### Option 1: Use This Template (Recommended)

1. Click the **"Use this template"** button at the top of this repo
2. Name your new repository (e.g., `my-portfolio`)
3. Clone your new repo and start customizing!

### Option 2: Fork & Clone

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## ✏️ Customize Your Portfolio

Your content is organized into multiple pages to keep things clean and easy to edit:
- **`app/page.tsx`**: Main landing page (About Me)
- **`app/coding/page.tsx`**: Coding & Tech Stack section
- **`app/travel/page.tsx`**: Travel section
- **`app/art/page.tsx`**: Art section
- **`app/contact/page.tsx`**: Contact links

### 1. Update Your Name/Brand
Find the navigation section in **`app/layout.tsx`** and change the title to your name:
```tsx
<Link href="/">
  YOUR_NAME
</Link>
```

### 2. Write Your Story
Edit the content in **`app/page.tsx`** (About Me), **`app/art/page.tsx`**, **`app/travel/page.tsx`**, and **`app/coding/page.tsx`** to tell your own story.

### 3. Update Your Skills
In **`app/coding/page.tsx`**, customize the `STACK_TRACE` and `PROTOCOLS` lists with your actual tech stack and values.

### 4. Add Your Photos
Drop your photos in the `/public` folder:
- **`me.png`** (Your main profile photo, automatically filtered to grayscale)
- **`paint.png`** (Art section photo)
- **`travel.png`** (Travel section photo)

### 5. Update Contact Links
In **`app/contact/page.tsx`**, update your email and LinkedIn URLs:
```tsx
href="mailto:your_email@example.com"
href="https://linkedin.com/in/YOUR_USERNAME"
```

---

## 🌐 Deploy to GitHub Pages

This template is pre-configured for GitHub Pages deployment.

### Step 1: Update the Base Path

In `app/page.tsx`, update the `basePath` variable with your repository name:
```tsx
const basePath = process.env.NODE_ENV === "production" ? "/YOUR_REPO_NAME" : "";
```

### Step 2: Enable GitHub Pages

1. Go to your repo's **Settings** → **Pages**
2. Under "Build and deployment", select **GitHub Actions**
3. Push to `main` branch—the included workflow will build and deploy automatically

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx        # 👈 Main content (edit this!)
│   ├── coding/page.tsx # Coding section
│   ├── travel/page.tsx # Travel section
│   ├── art/page.tsx    # Art section
│   ├── contact/page.tsx# Contact section
│   ├── layout.tsx      # Root layout & navigation
│   └── globals.css     # Global styles
├── public/
│   ├── me.png          # 👈 Your profile photo
│   ├── paint.png       # Art photo
│   └── travel.jpg     # Travel photo
├── .github/
│   └── workflows/      # GitHub Pages deployment
└── next.config.ts      # Next.js configuration
```

---

## 🎨 Design Features

- **Monochrome Dark Theme**: Sleek grayscale aesthetic on a deep black background
- **Terminal Typography**: Monospaced fonts for that coder vibe
- **Interactive Elements**: Soft white glowing hover effects and smooth animations
- **Responsive**: Looks great on mobile, tablet, and desktop
- **Accessible**: Semantic HTML and proper contrast ratios

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🤝 Contributing

Found a bug or have an improvement idea? Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use it for your own portfolio!

---

## 💜 Credits

Made with ❤️ by [GitHub for Beginners](https://gh.io/gfb) and [GitHub Copilot](https://gh.io/gfb-copilot).

