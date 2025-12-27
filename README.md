# 🍎 macOS-Style Portfolio

A stunning, interactive portfolio website that replicates the macOS Big Sur interface with smooth animations and an immersive user experience. Built with modern web technologies to showcase projects, skills, and professional information in a unique and engaging way.

![macOS Portfolio](public/macbook.png)

## ✨ Features

### 🎨 **Authentic macOS Experience**
- **Dynamic Dock**: Interactive dock with smooth hover animations powered by GSAP
- **Menu Bar**: Functional top navigation bar with real-time clock display
- **Window Management**: Draggable, resizable windows with macOS-style controls (close, minimize, maximize)
- **Desktop Icons**: Clickable desktop shortcuts with hover effects

### 🚀 **Interactive Components**
- **Finder**: Browse through project portfolios organized in folders
- **Safari**: View blog posts and articles
- **Photos**: Gallery showcase with grid layout
- **Terminal**: Display tech stack and skills
- **Contact**: Social media links with animated cards
- **Resume**: PDF viewer for resume display

### 🎭 **Advanced Animations**
- **GSAP-powered interactions**: Smooth, performant animations throughout
- **Variable font animations**: Dynamic font weight changes on hover using CSS variable fonts
- **Micro-interactions**: Delightful hover effects and transitions
- **Responsive dock scaling**: Icons scale and lift based on cursor proximity

### 🎯 **Technical Highlights**
- Built with **React 19** and **Vite** for blazing-fast performance
- Styled with **Tailwind CSS v4** for modern, utility-first styling
- **GSAP** for professional-grade animations
- **Zustand** for lightweight state management
- **Day.js** for time formatting
- Custom path aliases for clean imports
- Fully responsive design (optimized for desktop and tablets)

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - Modern UI library with latest features
- **Vite 7.2.4** - Next-generation frontend tooling
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Custom CSS** - Advanced layouts and animations
- **Google Fonts** - Georama and Roboto Mono

### Animation & Interaction
- **GSAP 3.14.2** - Professional animation library
- **@gsap/react 2.1.2** - React integration for GSAP
- **React Tooltip 5.30.0** - Accessible tooltips

### State Management
- **Zustand 5.0.9** - Lightweight state management

### Utilities
- **Day.js 1.11.19** - Date/time formatting
- **Lucide React 0.562.0** - Beautiful icon library

### Development Tools
- **ESLint** - Code quality and consistency
- **Vite Plugin React** - Fast Refresh and JSX support

## 📁 Project Structure

```
macOS-Portfolio/
├── public/
│   ├── icons/          # SVG icons for UI elements
│   ├── images/         # Project screenshots, wallpapers, gallery
│   └── files/          # Downloadable files (resume, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Top menu bar with clock
│   │   ├── Welcome.jsx      # Hero section with animated text
│   │   ├── Dock.jsx         # macOS-style dock
│   │   ├── constants/       # App data and configuration
│   │   └── index.js         # Component exports
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and Tailwind config
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Souravkumarverma123/macOS-Portfolio.git
   cd macOS-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Personal Information

Update the constants file to customize your portfolio:

**File**: `src/components/constants/index.js`

```javascript
// Update navigation links
const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 3, name: "Contact", type: "contact" },
  { id: 4, name: "Resume", type: "resume" },
];

// Update social links
const socials = [
  { id: 1, text: "Github", icon: "/icons/github.svg", link: "YOUR_GITHUB_URL" },
  // ... add more
];

// Update tech stack
const techStack = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript"] },
  // ... customize your skills
];
```

### Projects

Add your projects in the `WORK_LOCATION` object:

```javascript
const WORK_LOCATION = {
  children: [
    {
      id: 5,
      name: "Your Project Name",
      icon: "/images/folder.png",
      kind: "folder",
      children: [
        // Add project files, images, descriptions
      ],
    },
  ],
};
```

### Styling

Customize colors and themes in `src/index.css`:

```css
@theme {
  --font-georama: "Georama", sans-serif;
  --font-roboto: "Roboto Mono", monospace;
  /* Add your custom theme variables */
}
```

### Background Wallpaper

Replace `/public/images/wallpaper.png` with your preferred background image.

## 📱 Responsive Design

- **Desktop**: Full macOS experience with all features
- **Tablet**: Optimized layout with functional dock
- **Mobile**: Simplified view with message (currently desktop-optimized)

## 🎯 Key Features Explained

### 1. **Interactive Dock**
The dock uses GSAP to create a smooth scaling effect based on cursor proximity, mimicking the macOS dock behavior.

### 2. **Variable Font Animation**
The welcome text uses CSS variable fonts (`font-variation-settings`) to create dynamic weight changes on hover, creating a unique interactive effect.

### 3. **Window System**
Each application (Finder, Safari, Terminal, etc.) opens in a draggable window with authentic macOS styling and controls.

### 4. **Path Aliases**
Clean imports using custom aliases:
- `#components` → `src/components`
- `#store` → `src/store`
- `#constants` → `src/constants`
- `#windows` → `src/windows`

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sourav Kumar**

- Portfolio: [Sourav's Portfolio](https://souravkumar.dev)
- GitHub: [@Souravkumarverma123](https://github.com/Souravkumarverma123)

## 🙏 Acknowledgments

- Design inspired by macOS Big Sur
- Icons from [Lucide Icons](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animation library: [GSAP](https://greensock.com/gsap/)

## 📸 Screenshots

> **Note**: Add screenshots of your portfolio in action to showcase the different windows and features.

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
