// Projects Data
export interface Project {
  id: number;
  title: string;
  desc: string;
  url: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "TechTalents Program - Eintracht Frankfurt ⚽",
    desc: "3-month hybrid program combining football passion with technological innovations. Bridging sports and technology through innovative solutions and collaborative development approaches.",
    url: "https://florian-hunter.de/",
  },
  {
    id: 2,
    title: "Terminal Portfolio - Interactive CLI Experience",
    desc: "Interactive web-based terminal application demonstrating modern technologies. React-based portfolio with TypeScript, multiple themes, PWA support, comprehensive testing, and security enhancements.",
    url: "https://terminal.florian-hunter.de/",
  },
  {
    id: 3,
    title: "Browser Mining Platform ⛏️",
    desc: "Experimental cryptocurrency mining platform running directly in the browser. Innovative approach to distributed computing and blockchain technology exploration through web-based mining capabilities.",
    url: "https://florian-hunter.de/",
  },
  {
    id: 4,
    title: "Circular Economy Company Mapping 🏭",
    desc: "Python-based pipeline for identifying and mapping German circular economy companies using Crunchbase API, keyword filtering, and LLM validation. Analysis of 500,000+ company profiles identifying 1,622 validated circular economy companies in Germany.",
    url: "https://github.com/flori950",
  },
  {
    id: 5,
    title: "Bio-Inspired Computer Vision 👁️",
    desc: "Advanced computer vision research with bio-inspired optical flow estimation using Bayesian inference. Addresses the aperture problem in motion detection through sophisticated mathematical modeling and neural network architectures inspired by biological vision systems.",
    url: "https://github.com/flori950",
  },
  {
    id: 6,
    title: "Data Summaries & Quantile Computing 📊",
    desc: "Research project on efficient data summarization techniques with hashtree-based quantile computing. Explores advanced algorithms for processing large datasets and extracting meaningful statistical summaries with optimized performance characteristics.",
    url: "https://github.com/flori950",
  },
  {
    id: 7,
    title: "Tangible Climate Futures Project 🌍",
    desc: "Collaborative data fusion project between TU Berlin and UdK Berlin for climate research visualization. Combines technical data analysis with artistic visualization to make climate futures tangible and accessible.",
    url: "https://github.com/flori950",
  },
  {
    id: 8,
    title: "Drone Logistics & Automation Project 🚁",
    desc: "Innovative drone logistics and automation project exploring autonomous delivery systems and aerial robotics. Features advanced flight control systems, route optimization, and automated package handling capabilities.",
    url: "https://florian-hunter.de/",
  },
];

export const projectsIntro = `Technology & Innovation Projects 💻
Passionate about combining technology with real-world applications. Here are my key projects spanning research, innovation, and practical solutions you shouldn't miss`;
