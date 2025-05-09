import { 
  DoorClosed, GraduationCap, Megaphone, Code
} from 'lucide-react';

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: any;
  features: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Door to Door Sales Programs",
    description: "Industry-leading door-to-door sales programs that deliver exceptional results through proven methodologies and comprehensive training.",
    icon: DoorClosed,
    features: [
      "Comprehensive sales training",
      "Territory management",
      "Lead generation strategies",
      "Performance tracking",
      "Sales automation tools"
    ]
  },
  {
    id: 2,
    title: "Entrepreneurship & Leadership Development",
    description: "Transform high-performing individuals into successful business leaders through our proven leadership development program.",
    icon: GraduationCap,
    features: [
      "Business strategy development",
      "Team management skills",
      "Financial planning",
      "Operational excellence",
      "Growth strategies"
    ]
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions to enhance your online presence and drive qualified leads to your business.",
    icon: Megaphone,
    features: [
      "Social media management",
      "Content marketing",
      "SEO optimization",
      "PPC campaigns",
      "Analytics and reporting"
    ]
  },
  {
    id: 4,
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed to streamline your operations and maximize efficiency in sales and business processes.",
    icon: Code,
    features: [
      "CRM development",
      "Sales automation",
      "Performance tracking",
      "Mobile applications",
      "System integration"
    ]
  }
];