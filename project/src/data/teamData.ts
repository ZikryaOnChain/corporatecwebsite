export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Faraz Siddiqui",
    role: "CEO & Founder",
    bio: "Visionary leader driving Corporate Combat's mission to transform sales operations and create wealth through sales mastery.",
    image: "/faraz.jpg"
  },
  {
    id: 2,
    name: "Muhammad Zikrya",
    role: "Head of Technology",
    bio: "Technology innovator leading our digital transformation and implementing cutting-edge solutions for sales optimization.",
    image: "/zikrya.jpeg"
  },
  {
    id: 3,
    name: "Xavier Khan",
    role: "Head of Sales",
    bio: "Sales strategist spearheading our revenue operations and developing high-performing sales teams.",
    image: "/xk.jpeg"
  },
  {
    id: 4,
    name: "Usman Rehman",
    role: "Consultant",
    bio: "Expert consultant providing strategic guidance in sales operations and business development.",
    image: "/maani.jpeg"
  },
  {
    id: 5,
    name: "Ammar Ghori",
    role: "Consultant",
    bio: "Strategic consultant specializing in revenue optimization and sales process improvement.",
    image: "/ammar.jpeg"
  }
];