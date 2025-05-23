export const HERO_CONTENT = `Aspiring Software Engineer dedicated to making a meaningful impact in the tech industry.`
export const ABOUT_TEXT = `I’m a Computer Science senior at UW-Madison, graduating May'25, with a passion for software engineering, AR/VR, and AI. I’ve built scalable, user-centric solutions at Handshake, Holos, and The Vault UW-Madison, recently developing an AR/VR office hours platform for Apple Vision Pro using Swift, visionOS, SharePlay and WebXR to enhance student engagement.
I thrive in fast-paced environments, love solving complex problems, and am always eager to learn. I’m seeking a full-time Software Engineering role to create innovative and impactful technology.`;

export const EXPERIENCES = [
  {
    year: "January 2025 - Present",
    role: "Software Engineering Intern",
    company: "Holos",
    description: [
      "~ Created an AR/VR office hours platform for Apple Vision Pro using Swift, visionOS, SharePlay.",
      "~ Integrated collaboration tools like a whiteboard, screen capture, video sharing, and 360° model viewing to enhance the immersive learning experience.",
      "~ Enabled immersive session recording (audio and screen) using AVFoundation, with real-time status feedback.",
      "~ Engineered real-time conversational AI using OpenAI (ChatGPT for dialogue, Whisper for speech-to-text), AVFoundation, and Apple’s Speech framework, enabling natural voice interaction."
    ],
    technologies: ["Swift", "visionOS", "SharePlay", "ReplayKit", "OpenAI", "AVFoundation"]
  },
  {
      year: "October 2024 - Present",
      role: "Website Director",
      company: "The Vault UW-Madison",
      description: [
        "~ Directed the development of a high-performance web platform using React, TypeScript, and Python, boosting engagement by 25%.",
        "~ Designed scalable architectures, implemented efficient REST APIs, and enhanced UI accessibility to improve the overall user experience.",
        "~ Collaborated with cross-functional teams to deliver features aligned with the mission of community engagement, ensuring impactful user interactions."
      ],
      technologies: ["React", "TypeScript", "Python"]
  },
  {
      year: "June 2024 - August 2024",
      role: "Full-Stack Software Engineering Intern",
      company: "Handshake",
      description: [
        "~ Engineered Coco, a GenAI-powered tone enhancement tool, leveraging Python, React, and TypeScript improving real-time profile summary personalization for millions of U.S. users.",
        "~ Boosted feature adoption to 70%+ and scaled AI summaries by 50%, driving a planned expansion in Europe.",
        "~ Led QA testing and user research to refine UI/UX, ensuring accessibility, responsiveness, and secure data handling across browsers and devices.",
        "~ Optimized LLM/GenAI responses via scalable architecture and refactored API endpoints using Go, Ruby, and GraphQL, refining performance while reducing latency "
      ],
      technologies: ["Python", "React", "TypeScript", "Go", "Ruby", "GraphQL"]
  },
  {
      year: "May 2023 - July 2023",
      role: "Software Engineering Intern",
      company: "Sant Nirankari Charitable Foundation",
      description: [
        "~ Revamped website UI using React, Node.js, and Tailwind CSS, achieving 95%+ uptime and significantly improving user experience.",
        "~ Conducted Java programming workshops for underrepresented groups, enhancing participant knowledge and fostering diversity in tech."
      ],
      technologies: ["React", "Node.js", "Tailwind CSS"]
  },
  {
      year: "January 2021 - May 2023",
      role: "Teaching Assistant",
      company: "Arizona State University",
      description: [
        "~ Guided 300+ students in Data Structures, Algorithms, and Linear Programming, strengthening their proficiency in complex programming concepts.",
        "~ Provided 1-on-1 mentoring, enhancing analytical reasoning and algorithmic thinking, leading to a 40% improvement in student problem-solving skills."
      ],
      technologies: ["Java", "Data Structures", "Algorithms", "Linear Programming"]
  },
  {
    year: "November, 2021 - May, 2023",
    role: "Office Assistant",
    company: "Arizona State University",
    description: [
      `~ Optimized database management for 20+ college sports teams through SQL, enhancing data accuracy and consistency while reducing manual data correction efforts by 50%.`,
      `~ Managed configuration management tasks to ensure data integrity across platforms.`,
      `~ Delivered 3 scalable data pipelines to assist event coordinators with fetching data and storing customer records in Microsoft Office and Google Workspace.`
    ],
    technologies: ["SQL", "Microsoft Office", "Google Workspace"],
  },

];

export const PROJECTS = [
  {
    title: "AI Coding Mentor",
    technologies: ["Python", "React", "TypeScript", "Monaco Editor", "Ollama", "TailwindCSS"],
    description: [
        "⭑ Developed a full-stack AI tool for real-time code analysis with personalized feedback in Monaco Editor.",
        "⭑ Constructed REST APIs for seamless integration and integrated LLaMA-3 via Ollama for efficient inference."
    ]
  },
  {
    title: "Nets and Bets",
    technologies: ["Java Spring Boot", "SQL", "React"],
    description: [
        "⭑ Built a full-stack March Madness betting simulation platform using React.js, Java Spring Boot, and MySQL.",
        "⭑ Developed RESTful APIs for user authentication, betting logic, and game data, and designed and optimized the database for user profiles, team stats, and betting history.",
        "⭑ Created web scraping system to pull live game stats and odds"
    ]
  },
  {
    title: "Sonic Study",
    description: [
      `⭑ Revolutionized an accessibility-focused flashcard application using Kotlin, AWS, Python and Flask to support users with visual impairments or dyslexia, providing an innovative audio-based study solution.`,
      `⭑ Executed core features such as voice-based input and question-answer pairing using Web Speech API, enhancing the user experience through seamless audio interactions.`

    ],
    technologies: [`Kotlin`, `AWS`, `Python`, `Flask`, `Web Speech API`]
  },
  {
    title: "Post-Stroke Recovery Application",
    description: [
      `⭑ Developed a web application using HTML, CSS, and JavaScript that employs gamification to aid in the rehabilitation of stroke victims.`,
      `⭑ Improved UI/UX based on user feedback from 30+ participants, increasing user satisfaction and engagement.`
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Book Review Web Application",
    description: [
      `⭑ Designed a full-stack web application with Node.js, React.js, and PostgreSQL to manage and display personal book reviews.`,
      `⭑ Built interactive features, including filtering and sorting, to enhance data accessibility and user interaction.`
    ],
    technologies: ["Node.js", "React.js", "PostgreSQL"],
  },
  {
    title: "Flight Router",
    type: "Algorithm Design and Implementation",
    description: [
      `⭑ Revolutionized a Java application that analyzes airport data to compute the shortest routes and flight connections, enhancing travel planning efficiency.`,
      `⭑ Implemented complex algorithms to handle dynamic user inputs and provide real-time results.`
    ],
    technologies: ["Java", "Algorithms"],
  },
  {
    title: "Movie Timer",
    description: [
      `⭑ Implemented a movie timer app with a Java backend, utilizing a Red-Black Tree to manage and access movie data efficiently.`,
      `⭑ Enhanced search functionality to identify shortest movies within specified duration ranges, improving user convenience.`
    ],
    technologies: ["Java", "Red-Black Tree", "Data Structures"],
  },
];

export const CONTACT = {
  email: "jain.sohalliya@outlook.com",
  linkedin: "https://www.linkedin.com/in/sohalliya-jain/",
  phone: "480-791-7556",
};
