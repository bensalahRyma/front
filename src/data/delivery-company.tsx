
export type DeliveryData={
    id:string,
    name:string,
    logo:string,
    fraudscore:number,
    fraudType:string,
    problematicOrdersByDate: { [date: string]: number };
    totalOrders: number;
    problematicOrders: number;
    totalFrauds: number;
    typesOfFrauds: string[];
    comparisonChartData: { period: string; orders: number; region:string; sector:string   }[];
  }
  export const DeliveryCompanyData: DeliveryData[] = [
    {
    id: "1",
    name: "UPS",
    logo: "chemin/vers/logo.png",
    fraudscore: 12.8,
    fraudType:"",
    
    problematicOrdersByDate: {
      "2023-11-28": 33,
      "2023-12-27": 22,
      "2024-01-27": 28,
      "2024-02-27": 12,
      "2024-03-28": 25,
      "2024-04-27": 28,
      "2024-05-27": 12,
      "2024-06-28": 25,
  
    },
    totalOrders: 1000,
  problematicOrders: 50,
  totalFrauds: 10,
  typesOfFrauds: ["Fraud Type A", "Fraud Type B"],
  comparisonChartData: [
    { period: "January 2024", orders: 500 ,region:"UK", sector:"London"},
    { period: "February 2024", orders: 600,region:"TR", sector:"Test" },
    { period: "Mars 2024", orders: 550 ,region:"FR", sector:"Nice"},

  ],
  },
  {
    id: "3",
    name: "DHL",
    logo: "chemin/vers/logo.png",
    fraudscore: 8.5,
    fraudType:"",
    problematicOrdersByDate: {
      "2023-11-28": 55,
      "2023-12-27": 50,
      "2024-01-27": 15,
      "2024-02-27": 5,
      "2024-03-28": 11,
      "2024-04-27": 15,
      "2024-05-27": 5,
      "2024-06-28": 11,
  
    },
    totalOrders: 1000,
  problematicOrders: 50,
  totalFrauds: 10,
  typesOfFrauds: ["Fraud Type A", "Fraud Type B"],
  comparisonChartData: [
    { period: "January 2024", orders: 500 ,region:"UK", sector:"London"},
    { period: "February 2024", orders: 600,region:"UK", sector:"London" },
    { period: "Mars 2024", orders: 550 ,region:"USA", sector:"testest"},
  ],
  },
  {
    id: "55",
    name: "La POSTE",
    logo: "chemin/vers/logo.png",
    fraudscore: 31.9,
    fraudType:"",
    problematicOrdersByDate: {
      "2023-11-27": 22,
      "2023-12-27": 70,
      "2024-01-27": 90,
      "2024-02-27": 84,
      "2024-03-28": 92,
      "2024-04-27": 90,
      "2024-05-27": 84,
      "2024-06-28": 92,
  
    },
    totalOrders: 1000,
  problematicOrders: 50,
  totalFrauds: 10,
  typesOfFrauds: ["Fraud Type A", "Fraud Type B"],
  comparisonChartData: [
    { period: "January 2024", orders: 500 ,region:"UK", sector:"London"},
    { period: "February 2024", orders: 600,region:"USA", sector:"NYK" },
    { period: "Mars 2024", orders: 550 ,region:"USA", sector:"NYK"},
  ],
  },
  {
    id: "15",
    name: "Chronopost",
    logo: "chemin/vers/logo.png",
    fraudscore: 42.6,
    fraudType:"",
    problematicOrdersByDate: {
      "2023-11-28": 84,
      "2023-12-27": 52,
      "2024-01-27": 52,
      "2024-02-27": 100,
      "2024-03-28": 84,
      "2024-04-27": 52,
      "2024-05-27": 100,
      "2024-06-28": 84,
  
    },
    totalOrders: 1000,
  problematicOrders: 80,
  totalFrauds: 10,
  typesOfFrauds: ["Fraud Type A", "Fraud Type B"],
  comparisonChartData: [
    { period: "January 2024", orders: 500 ,region:"UK", sector:"London"},
    { period: "February 2024", orders: 600,region:"FR", sector:"Toulouse" },
    { period: "Mars 2024", orders: 550 ,region:"FR", sector:"Paris"},
  ],
  }
  ];