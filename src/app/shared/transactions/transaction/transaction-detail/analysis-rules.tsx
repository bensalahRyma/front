'use client';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import WidgetCard from '@/components/cards/widget-card';
import { Progressbar, Text } from 'rizzui';
import { useMedia } from '@/hooks/use-media';
import { toCurrency } from '@/utils/to-currency';





// const data = [
//   {
//     month: 'Mon',
//     pending: 5,
//   },
//   {
//     month: 'Tue',
//     pending: 30,
//   },
//   {
//     month: 'Wed',
//     pending: 60,
//   },
//   {
//     month: 'Thu',
//     pending: 70,
//   },
//   {
//     month: 'Fri',
//     pending: 90,
//   },
//   {
//     month: 'Sat',
//     pending: 30,
//   },
//   {
//     month: 'Sun',
//     pending: 35,
//   },
// ];
const projects = [
  {
    id: 1,
    name: 'Mark Redesign task',
    budget: 1085,
    color: '#FCB03D',
  },
  {
    id: 2,
    name: 'Tenco Revamp',
    budget: 5251,
    color: '#11A849',
  },
  {
    id: 3,
    name: 'Alice Matro',
    budget: 4850,
    color: '#FF1A1A',
  },
  {
    id: 4,
    name: 'Polly Mgt Ltd.',
    budget: 1085,
    color: '#8A63D2',
  },
];

export default function AnalysisRules({ className }: { className?: string }) {
  const isTablet = useMedia('(max-width: 800px)', false);
  const data = [
    { id: 1, rule: 'PHONE RULES :', description: 'rule phone',score:"+6" },
    { id: 2, rule: 'IP-RULES :', description: 'User is using a web proxy',score:"+6"  },
    { id: 4, rule: 'IP-RULES :', description: 'User is using a public proxy',score:"+2"  },
    { id: 3, rule: 'EMAIL RULES :', description: 'The email address domain is a disposable domain', score:"+48" },
  ];
  const data2 = [
    { id: 1, 
      rule: 'PHONE RULES :', 
      details: [{
      id:1,
      description:"rule phone",
      score:"+6"

    }]
  },
    { id: 2,
     rule: 'IP-RULES :', 
      details: [{
      id:1,
      description:"User is using a web proxy",
      score:"+6"
    },{
      id:2,
      description:"User is using a public proxy",
      score:"+2"
    }
  ]},
    { id: 3,
      rule: 'EMAIL RULES :', 
      details: [{
        id:1,
        description:"The email address domain is a disposable domain",
        score:"+48"
      }
    ]},
  ];
  return (
    <WidgetCard
      title="Applied Analysis Rules"
      // description={}
      titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
      descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
      className={className}
    >
      <div className="mt-5">
      <div className="  ">

   
      {data.map((item, index) => (
  <div
    key={item.id}
    className="mb-4 flex flex-col border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
  >
    <div className="flex w-full items-start justify-between">
      <div>
        <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          {item.rule}
        </Text>
      </div>
      <div className="flex items-center "  >
        <Text 
          className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
          style={{ width: '100%', textAlign: 'center' }} // Ensure text alignment is centered
        >
          {item.description}
        </Text>
       
      </div>
      <Text
          as="span"
          className="ml-2 font-bold text-green-500 dark:text-green-400"
        >
          {item.score}
        </Text>
    </div>
  </div>
))}
        </div>
      </div>
    
    </WidgetCard>
  );
}
