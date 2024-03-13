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


export default function Conclusion({ className }: { className?: string }) {
  const isTablet = useMedia('(max-width: 800px)', false);
  const data = [
    { id: 1, rule: 'Discussions Customer:', description: 'No Red Flag found. E-Sentinel approves the transaction.' },
    { id: 2, rule: 'Discussion Delivery Company:', description: 'Slightly suspicious but not enough informations to confirm a fraud.' },
    { id: 3, rule: 'Logic Chain Analysis :', description: 'Slightly suspicious but not enough informations to confirm a fraud.' },
  ];

  return (
    <WidgetCard
      title="Conclusion"
      // description={}
      titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
      descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
      className={className}
    >
      <div className="mt-5">
  
   
        {data.map((item, index) => (
     <div
     key={item.id}
     className="mb-4 flex flex-col border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
   >
     <div className="flex justify-between items-center mb-2">
       <Text
         as="span"
         className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
       >
         {item.rule}
       </Text>
       <Text
         as="span"
         className="font-lexend text-sm text-gray-700"
       >
         {item.description}
       </Text>
     </div>
   </div>
    ))}
     
      </div>
    
    </WidgetCard>
  );
}
