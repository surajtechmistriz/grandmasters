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
    title: "Tech Summit 2026",
    description: "Global tech conference with AI, Web3 & startups.",
    date: "2026-07-12",
    location: "Delhi",
    website: "https://event1.com",
    tag: "Technology",
  },
  {
    id: 2,
    title: "Startup Pitch Night",
    description: "Pitch your startup to top investors.",
    date: "2026-07-18",
    location: "Bangalore",
    website: "https://event2.com",
    tag: "Startup",
  },
  {
    id: 3,
    title: "Design Week",
    description: "UI/UX & product design workshops.",
    date: "2026-08-01",
    location: "Mumbai",
    website: "https://event3.com",
    tag: "Design",
  },
  {
    id: 4,
    title: "AI Conference",
    description: "Machine learning and AI future trends.",
    date: "2026-08-10",
    location: "Hyderabad",
    website: "https://event4.com",
    tag: "AI",
  },
  {
    id: 5,
    title: "Developer Meetup",
    description: "Networking for full-stack developers.",
    date: "2026-08-15",
    location: "Pune",
    website: "https://event5.com",
    tag: "Dev",
  },
  {
    id: 6,
    title: "Blockchain Expo",
    description: "Crypto, Web3 and blockchain ecosystem.",
    date: "2026-09-01",
    location: "Delhi",
    website: "https://event6.com",
    tag: "Web3",
  },
];