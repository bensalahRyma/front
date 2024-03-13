'use client';


import WidgetCard from '@/components/cards/widget-card';
import { Progressbar, Text } from 'rizzui';
import { useMedia } from '@/hooks/use-media';



export default function Recommandation({ className }: { className?: string }) {
  const data = [
    { id: 1, rule: 'FRAUD TRIGGERS :', description: 'No Red Flag found. E-Sentinel approves the transaction.' },
    { id: 2, rule: 'CUSTOMER ANALYSIS RESULT :', description: 'Slightly suspicious but not enough informations to confirm a fraud.' },
    { id: 3, rule: 'DELIVERY COMPANY ANALYSIS RESULT :', description: 'Slightly suspicious but not enough informations to confirm a fraud.',companyname:"company name" },
  ];

  return (
    <WidgetCard
      title=""
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
        <div className="flex items-center justify-start gap-2 mb-2"   >
          <Text
            as="span"
            className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
            style={{ marginBottom: '20px' }}
          >
            {item.rule}
          </Text>
    
        </div>
        <Text
            as="span"
            className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
            style={{ marginBottom: '20px' }}
          >
            {item?.companyname}
          </Text>
        <div style={{ backgroundColor: '#f8f8f8', padding: '28px',border: '1px solid #f8f8f8', 
borderRadius: '10px' ,marginBottom: '20px' }}>
  <Text 
     as="span"
   //  className="ml-2 font-bold dark:text-green-400"
        style={{ textAlign: 'justify', textAlignLast: 'left', display: 'inline-block', 
        
        }}
  >
     {item.description}
  </Text>
</div>
      </div>
    ))}
    
        </div>
      </div>
    
    </WidgetCard>
  );
}
