# My Portfolio Website

A modern, responsive portfolio website built with React, showcasing personal projects, skills, experience, and contact information. Features smooth animations, interactive elements, and a clean design.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Elements**: Custom cursor, particle background, and overlay menu
- **Single Page Application**: Fast navigation with React Router
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Modern UI**: Styled with Tailwind CSS for a sleek, professional look

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Linting**: ESLint

## 📁 Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── assets/          # Images, logos, and media files
│   ├── components/      # Reusable UI components
│   │   ├── CustomCursor.jsx
│   │   ├── IntroAnimation.jsx
│   │   ├── Navbar.jsx
│   │   ├── OverlayMenu.jsx
│   │   └── ParticlesBackground.jsx
│   ├── sections/        # Main page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio2/my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📱 Sections Overview

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal information and background
- **Skills**: Technical skills and competencies
- **Projects**: Showcase of personal and professional projects
- **Experience**: Work history and professional experience
- **Testimonials**: Client or colleague reviews
- **Contact**: Contact form and social media links
- **Footer**: Additional links and copyright information

## 🎨 Customization

To customize this portfolio for your own use:

1. Update personal information in the respective section components
2. Replace images in `src/assets/` with your own
3. Modify colors and styles in `src/index.css` or component files
4. Update contact information and social links in `Contact.jsx`
5. Configure EmailJS service for the contact form

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

For any questions or inquiries, please use the contact form on the website or reach out via the provided social media links.
