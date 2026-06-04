export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  website: string;
  tag: string;
}



export const events: EventItem[] = [
  {
    id: 1,
    tag: "PLCS",
    title: "Pharma Legal & Compliance Summit 2025",
    description:
      "The Lex Witness 11th Annual Pharma Legal & Compliance Summit 2025.",
    location: "Taj Santacruz, Mumbai",
    date: "26th September 2025",
    website: "https://www.plcs.co.in",
  },
  {
    id: 2,
    tag: "RCLS",
    title: "Real Estate & Construction Legal Summit 2026",
    description:
      "A strategic gathering of legal leaders, developers and compliance experts shaping India's real estate sector.",
    location: "LE MERIDIEN, NEW DELHI",
    date: "22nd MAY 2026",
    website: "https://rcls.in",
  },
  {
    id: 3,
    tag: "BFLS",
    title: "The Lex Witness 8th Annual Banking & Finance Legal Summit 2025",
    description:
      "Exploring regulatory transformation, governance, compliance and financial sector legal developments.",
    location: "TAJ SANTACRUZ, MUMBAI",
    date: "21ST NOVEMBER 2025",
    website: "https://bfls.in",
  },
  {
    id: 4,
    tag: "ITLS",
    title: "The Lex Witness 11th Annual Information Technology Legal Summit",
    description:
      "Focused on AI, data privacy, cybersecurity, digital regulations and technology law leadership.",
    location: "Hotel Shangri-La, Bengaluru",
    date: "12th June 2026",
    website: "https://www.itlegalsummit.com",
  },
  {
    id: 5,
    tag: "Maels",
    title: "The Lex Witness 10th Annual Media, Advertising & Entertainment Legal Summit 2025",
    description:
      "Addressing governance, compliance, contracts and legal innovation across manufacturing industries.",
    location: "Taj Santacruz, Mumbai",
    date: "25th September 2025",
    website: "https://maels.in",
  },
  {
    id: 6,
    tag: "Grand Masters",
    title: "The 12th Annual Grand Masters 2026 Series",
    description:
      "An exclusive forum bringing together India's most influential legal leaders and general counsel.",
    location: "NOVOTEL HICC Complex,  Hyderabad",
    date: "17th July 2026",
    website: "https://www.grandmasters.in",
  },
];