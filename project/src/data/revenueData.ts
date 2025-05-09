export interface RevenueData {
  year: string;
  companies: string[];
  reps: number;
  revenue: string;
  barHeight: string;
}

export const revenueData: RevenueData[] = [
  {
    year: "2016",
    companies: ["vivint"],
    reps: 25,
    revenue: "$3M",
    barHeight: "5%"
  },
  {
    year: "2017",
    companies: ["vivint"],
    reps: 50,
    revenue: "$7M",
    barHeight: "12%"
  },
  {
    year: "2018",
    companies: ["vivint"],
    reps: 75,
    revenue: "$13M",
    barHeight: "22%"
  },
  {
    year: "2019",
    companies: ["vivint"],
    reps: 100,
    revenue: "$20M",
    barHeight: "33%"
  },
  {
    year: "2020",
    companies: ["vivint", "adt", "smartheaven", "telus"],
    reps: 150,
    revenue: "$30M",
    barHeight: "50%"
  },
  {
    year: "2021",
    companies: ["vivint", "telus"],
    reps: 200,
    revenue: "$35M",
    barHeight: "58%"
  },
  {
    year: "2022",
    companies: ["vivint", "ag"],
    reps: 250,
    revenue: "$39M",
    barHeight: "65%"
  },
  {
    year: "2023",
    companies: ["vivint", "ag", "orizon", "firefly"],
    reps: 300,
    revenue: "$60M",
    barHeight: "100%"
  }
];

export const totalRevenue = "$207M";
export const totalYears = 8;