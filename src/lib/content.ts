export const siteConfig = {
  name: "Federico Schipani",
  initials: "FS",
  role: "Data Scientist",
  location: "Florence, Italy",
  availability: "Data Scientist at Data Reply IT",
} as const;

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "who-am-i", label: "Who am I" },
  { id: "career", label: "Career" },
  { id: "about", label: "About" },
];

export const hero = {
  title: "Federico Schipani",
  subtitle:
    "Data Scientist working across machine learning, data engineering, and cloud systems.",
  ctaPrimary: { label: "Learn more", href: "#who-am-i" },
  ctaSecondary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/federicoschipani/",
  },
};

export const profile = {
  bio: [
    "I am a Data Scientist based in Florence, Italy. I work at Data Reply IT, applying data science and machine learning to practical problems.",
    "Outside work, I spend time testing developer and AI tools, keeping a small homelab useful, and taking photos. I also have a soft spot for cars, motorcycles, travel, and products that get the details right.",
  ],
  facts: [
    { label: "Based in", value: "Florence, Italy" },
    { label: "Currently", value: "Data Scientist at Data Reply IT" },
    { label: "Education", value: "University of Florence" },
    { label: "Languages", value: "Italian, English" },
  ],
};

export type CareerRole = {
  period: string;
  title: string;
  location?: string;
  responsibilities?: string[];
  tags?: string[];
};

export type WorkExperience = {
  company: string;
  employmentType?: string;
  period: string;
  roles: CareerRole[];
};

export const workExperience: WorkExperience[] = [
  {
    company: "Data Reply IT",
    employmentType: "Full-time",
    period: "Sep 2022 - Present",
    roles: [
      { period: "Mar 2025 - Present", title: "Senior Data Scientist" },
      {
        period: "Feb 2023 - Mar 2025",
        title: "Data Scientist",
        tags: ["Python", "PyTorch"],
      },
      {
        period: "Sep 2022 - Feb 2023",
        title: "Data Engineer",
        tags: ["Python", "Hive"],
      },
    ],
  },
  {
    company: "Polaris Engineering srl",
    employmentType: "Full-time",
    period: "May 2020 - Sep 2022",
    roles: [
      { period: "May 2020 - Sep 2022", title: "Machine Learning Engineer" },
    ],
  },
  {
    company: "University of Florence",
    employmentType: "Contract",
    period: "Nov 2017 - Jun 2019",
    roles: [
      {
        period: "Nov 2017 - Jun 2019",
        title: "University Tutor",
        location: "Florence, Italy",
        responsibilities: [
          "Led classroom exercise sessions.",
          "Provided one-to-one support for first-year Computer Science students.",
          "Supported prospective students through orientation services and open days.",
        ],
      },
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialId?: string;
  verificationUrl: string;
};

export const certifications: Certification[] = [
  {
    name: "Data Engineer Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Dec 2025",
    expires: "Dec 2028",
    verificationUrl: "https://www.credly.com/badges/9b2c527f-90f9-459f-97b3-2f4b79c44bba",
  },
  {
    name: "Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Dec 2024",
    expires: "Dec 2027",
    verificationUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/e1b10a52479e4ca9b258710d95a8a8f8",
  },
  {
    name: "AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Nov 2024",
    expires: "Nov 2027",
    verificationUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/4cf5a9eb432144dc85aafd6c75c94c4c",
  },
  {
    name: "Machine Learning - Specialty",
    issuer: "Amazon Web Services (AWS)",
    issued: "Nov 2023",
    expires: "Nov 2026",
    credentialId: "2WWD6WJ10EQ41L5M",
    verificationUrl: "https://aw.certmetrics.com/amazon/public/verification.aspx",
  },
  {
    name: "Professional Machine Learning Engineer",
    issuer: "Google",
    issued: "Jun 2023",
    expires: "Jun 2025",
    verificationUrl:
      "https://google.accredible.com/e3c8175b-dbd0-458f-9c1d-393902cec74e?key=4b15856c64d5e830f09663c5d40d85abf043be01ec06474d16bc51a029d6ea0d",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/iskorini" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/federicoschipani/" },
  { label: "Instagram", href: "https://www.instagram.com/federico.schipani" },
  { label: "Email", href: "mailto:federicoschipani@outlook.com" },
];
