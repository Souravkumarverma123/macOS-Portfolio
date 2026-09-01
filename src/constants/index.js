const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "jan 4, 2025",
    title:"Why Version Control Exists: The Pendrive Problem",
    image: "/images/git.png",
    link: "https://my-webdev-cohort-blogs.hashnode.dev/why-version-control-exists-the-pendrive-problem",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Inside Git: How It Works and the Role of the .git Folder",
    image: "/images/git.png",
    link: "https://my-webdev-cohort-blogs.hashnode.dev/inside-git-how-it-works-and-the-role-of-the-git-folder?utm_source=hashnode&utm_medium=feed",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "Unnderstanding javascript Promises Methods — With Relatable Real-Life Analogies",
    image: "/images/git.png",
    link: "https://learningthetech.hashnode.dev/unnderstanding-javascript-promises-methods-with-relatable-real-life-analogies?utm_source=hashnode&utm_medium=feed",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "javascript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Shadcn UI", "CSS", "Acternity UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "jwt"],
  },
  {
    category: "Database",
    items: ["MongoDB","MySQL", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Souravkumarverma123",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/sourav7534kumar/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/SouravKuma74938",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sourav-kumar-0a3103307/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/friends.png",
  },
  {
    id: 2,
    img: "/images/sourav3.png",
  },
  {
    id: 3,
    img: "/images/pexels.jpg",
  },
  {
    id: 4,
    img: "/images/images.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Ultrahuman",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-4", // icon position inside Finder
      windowPosition: "top-[50vh] rigth-7", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Ultrahuman.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Ultrahuman replaces the context switching between your inbox and calendar with a unified experience augmented by an AI agent.",
            "Instead of manually triaging emails, scheduling meetings, and hunting through threads, you interact with a conversational orchestrator that understands your Gmail and Google Calendar context and makes your daily life easy by automating your gmail and calendar workflows",
          ],
        },
        {
          id: 2,
          name: "ultrahuman.co.in",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ultrahuman.co.in",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Ultrahuman.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ultrahuman.png",
        },
        {
          id: 5,
          name: "Github.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Souravkumarverma123/ultrahuman",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "SpaceForm",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "SpaceForm.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 right-10",
          description: [
            "SpaceForm is a blazing-fast, high-conversion SaaS form builder application.",
            "It is a TypeScript monorepo built with tRPC, Next.js, and Express, managed with Turborepo and pnpm.",
          ],
        },
        {
          id: 2,
          name: "spaceform.site",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://spaceform.site",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "SpaceForm.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/spaceform.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Poll-Vault",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Poll-Vault.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Poll-Vault is a production-ready, real-time polling and survey platform built for modern teams.",
            "PollVault empowers creators to build engaging, multi-type questionnaires, securely collect responses, and monitor live-updating analytics through a premium, interactive dashboard.",
          ],
        },
        {
          id: 2,
          name: "poll-vault.onrender.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://poll-vault.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Poll-Vault.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/pollvault.png",
        },
        {
          id: 5,
          name: "Github.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Souravkumarverma123/poll-vault",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/sourav.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/sourav-2.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/friends.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/sourav.png",
      description: [
        "Hey! I’m Sourav 👋, a Full Stack Developer who enjoys building sleek, interactive and scalable applications that actually work well.",
        "I specialize in Node.js, React, and Express and also love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "I love to write clean code that actually goes to production and used in real life",
        "Outside of dev work, i love to watch movies, webshows and also love to play cricket😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "my_resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.jpg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };