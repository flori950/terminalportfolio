// Personal Information Data
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  website: string;
  terminalDomain: string;
  username: string;
  homeDirectory: string;
  version: string;
  about: {
    greeting: string;
    intro: string;
    description: string[];
  };
  socials: Array<{
    id: number;
    title: string;
    url: string;
    tab: number;
  }>;
}

export const personalInfo: PersonalInfo = {
  name: "Florian Jäger",
  title: "Cloud-Native Architect",
  location: "Berlin, Germany",
  email: "florian.jaeger1@freenet.de",
  website: "https://florian-hunter.de",
  terminalDomain: "terminal.florian-hunter.de",
  username: "guest",
  homeDirectory: "/home/florian",
  version: "2.0.0",
  
  // About section
  about: {
    greeting: "Hi, my name is",
    intro: "I'm a Cloud-Native Architect based in Berlin, Germany.",
    description: [
      "I am passionate about designing scalable infrastructure solutions and",
      "bridging the gap from code to cloud. I specialize in transforming",
      "complex technical challenges into elegant, efficient systems.",
      "",
      "With extensive international experience across Asia and Europe,",
      "I bring a unique perspective combining technical excellence with",
      "cross-cultural business acumen from my diverse professional journey."
    ]
  },

  // Social links
  socials: [
    {
      id: 1,
      title: "GitHub",
      url: "https://github.com/flori950",
      tab: 3,
    },
    {
      id: 2,
      title: "LinkedIn", 
      url: "https://www.linkedin.com/in/florian-jager",
      tab: 3,
    },
    {
      id: 3,
      title: "YouTube",
      url: "https://www.youtube.com/@florianjaeger95",
      tab: 3,
    },
    {
      id: 4,
      title: "Instagram",
      url: "https://www.instagram.com/pflorii",
      tab: 0,
    },
    {
      id: 5,
      title: "Spotify (HUNT3R)",
      url: "https://open.spotify.com/intl-de/artist/6DxXFeDReXZJKzre7QXdLR",
      tab: 0,
    },
    {
      id: 6,
      title: "XING",
      url: "https://www.xing.com/profile/Florian_Jaeger95",
      tab: 3,
    }
  ]
};
