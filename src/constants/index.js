export const HERO_CONTENT = `Aspiring Software Engineer dedicated to making a meaningful impact in the tech industry.`
export const ABOUT_TEXT = `I’m a Software Development Engineer at Beyondsoft, where I design and scale full-stack applications, optimize backend systems, and build secure REST APIs that serve thousands of enterprise users. I recently graduated with a B.S. in Computer Science from the University of Wisconsin–Madison.
Over the years, I’ve worked across startups and enterprise teams, from engineering Coco GenAI at Handshake, a generative AI-powered writing tool which served 1M+ users, to improving system performance, data pipelines, and CI/CD workflows that cut deployment times by over 60%.
I love building products that combine clean engineering, scalable architecture, and user-focused design. Whether it’s optimizing databases, crafting modular React frontends, or integrating GenAI into real-world tools, I thrive on solving complex problems and delivering technology that makes an impact.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "Software Development Engineer",
    company: "Beyondsoft",
    location: "Schaumburg, IL",
    description: [
      "• Orchestrate a configurable task management platform, improving team collaboration efficiency by 40%.",
      "• Manage and optimize PostgreSQL databases, ensuring scalable and reliable data storage across enterprise use cases.",
      "• Optimized Django backend endpoints to enhance web performance, cutting load times by 35%.",
      "• Construct secure Django APIs and scalable data models with role-based access for 1,000+ enterprise users.",
      "• Craft a modular React frontend with real-time analytics dashboards, elevating user engagement by 30%.",
      "• Streamline CI/CD pipelines using Docker and Azure DevOps, reducing deployment time by 60%."
    ],
    technologies: ["Django", "React", "PostgreSQL", "Docker", "Azure DevOps", "Python"]
  },
  {
    year: "January 2025 - May 2025",
    role: "Software Engineering Intern",
    company: "Holos",
    location: "Madison, WI",
    description: [
      "• Implemented an immersive Apple Vision Pro AR app adopting visionOS and SharePlay, enabling 5+ concurrent collaborative sessions.",
      "• Synchronized AVFoundation with Speech API to ensure high-fidelity audio capture and transcription.",
      "• Integrated OpenAI GPT + Whisper to deliver real-time conversational AI, raising engagement by 45%.",
      "• Followed Agile sprints and used Git for version control across multi-platform teams."
    ],
    technologies: ["Swift", "visionOS", "SharePlay", "AVFoundation", "OpenAI", "Git"]
  },
  {
    year: "October 2024 - May 2025",
    role: "Website Director",
    company: "The Vault UW Madison",
    location: "Madison, WI",
    description: [
      "• Refactored the site architecture utilizing React, TypeScript, and Python, increasing traffic by 25%.",
      "• Devised maintainable REST APIs that decreased frontend-backend sync time by 40%.",
      "• Improved user retention by 20% by championing UX redesigns based on usability testing insights."
    ],
    technologies: ["React", "TypeScript", "Python", "REST APIs"]
  },
  {
    year: "June 2024 - August 2024",
    role: "Full Stack Software Engineer Intern",
    company: "Handshake",
    location: "San Francisco, CA",
    description: [
      "• Headed development of Coco GenAI, a GenAI-powered tone enhancer serving 1M+ users, leveraging React, TypeScript, and Python.",
      "• Boosted feature adoption by 70%, improved AI summary accuracy by 50%, enabling global readiness.",
      "• Directed cross-platform QA and accessibility testing, improving compliance to 95%.",
      "• Overhauled endpoints and deployed refactored REST APIs via GraphQL and Ruby on Rails, slashing load by 30%.",
      "• Worked in Agile cycles with daily standups, and utilized Git for agile branching strategy and collaborative versioning."
    ],
    technologies: ["React", "TypeScript", "Python", "GraphQL", "Ruby on Rails", "Git"]
  },
  {
    year: "May 2023 - July 2023",
    role: "Software Engineering Intern",
    company: "Sant Nirankari Charitable Foundation",
    location: "Hybrid",
    description: [
      "• Modernized the organization website applying React, Node.js, and Tailwind CSS, achieving 99.9% uptime.",
      "• Delivered 4 Java workshops, educating 200+ underserved learners and raising comprehension scores by 40%."
    ],
    technologies: ["React", "Node.js", "Tailwind CSS", "Java"]
  },
  {
    year: "January 2022 - May 2023",
    role: "Teaching Assistant",
    company: "Arizona State University",
    location: "Tempe, AZ",
    description: [
      "• Mentored 300+ students in Data Structures, Algorithms, and Linear Programming, improving grades by 15%.",
      "• Facilitated weekly office hours, boosting problem-solving skills by 40% (via practice exam outcomes)."
    ],
    technologies: ["Java", "Data Structures", "Algorithms", "Linear Programming"]
  }
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
    technologies: ["Java", "Spring Boot", "SQL", "React"],
    description: [
        "⭑ Engineered a full-stack March Madness betting platform using React.js, Java Spring Boot, and MySQL.",
        "⭑ Formulated REST APIs for user authentication, betting logic, and game data, while optimizing the database for user profiles, team stats, and betting history.",
        "⭑ Applied a web scraping system to dynamically retrieve live game stats and odds, enhancing the real-time betting experience."
    ]
  },
  {
    title: "Sonic Study",
    description: [
      "⭑ Developed a flashcard study app using Kotlin, AWS, MySQL, and Flask to help students optimize study efficiency.",
      "⭑ Integrated voice-based input with the Web Speech API, providing a seamless and accessible audio interaction experience."
    ],
    technologies: ["Kotlin", "Room Database", "AWS", "MySQL", "Flask"]
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
  address: "Illinois, USA",
};
