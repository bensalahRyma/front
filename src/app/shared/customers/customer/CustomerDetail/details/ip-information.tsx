'use client';

import WidgetCard from '@/components/cards/widget-card';
import { toCurrency } from '@/utils/to-currency';
import { Avatar, Title, Text, Progressbar } from 'rizzui';



const IPData = [
  {
      id:"159357",
      ipaddress:"104.101.103.255",
      score:"0/100",
      location:"US",
      country:"US",
      IP_type:"CDN",
      ISP:"testest",
      web_proxy:"NO",
      public_proxy:"NO",
      TOR:"NO",
      VPN:"NO",
      datacenter_proxy:"NO",
      SPAM_blacklists:"0",
      harmful_IP:"NO"
  
  },
];

export default function IPInformation({ className }: { className?: string }) {
  const now = 60;
  return (
    <WidgetCard
    title="IP analysis information"
    titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
    className={className}
  >

    <div className="  ">
      <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
        <Text as="span" className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
       Used in this transaction 
        </Text>
        <Text as="span">{IPData[0]?.ipaddress}</Text>
      </div>
      <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
      <Progressbar value={75} size="xl" label="75%"  color="success"/>
      </div>
    
      {/* {projects.map((item, index) => ( */}
        <div
          //key={item.id}
          className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
        >
          <div className="flex items-center justify-start gap-2">

            <Text
              as="span"
              className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Location
            </Text>
          </div>
          <Text as="span">{IPData[0]?.location}</Text>
        </div>
         <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             Country
           </Text>
         </div>
         <Text as="span">{IPData[0]?.country}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             IP type
           </Text>
         </div>
         <Text as="span">{IPData[0]?.IP_type}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             ISP
           </Text>
         </div>
         <Text as="span">{IPData[0]?.ISP}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             web proxy
           </Text>
         </div>
         <Text as="span">{IPData[0]?.web_proxy}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             public proxy
           </Text>
         </div>
         <Text as="span">{IPData[0]?.public_proxy}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             TOR
           </Text>
         </div>
         <Text as="span">{IPData[0]?.TOR}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             VPN
           </Text>
         </div>
         <Text as="span">{IPData[0]?.VPN}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
             Datacenter proxy
           </Text>
         </div>
         <Text as="span">{IPData[0]?.datacenter_proxy}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
              SPAM blacklists
           </Text>
         </div>
         <Text as="span">{IPData[0]?. SPAM_blacklists}</Text>
       </div>
       <div
         className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
       >
         <div className="flex items-center justify-start gap-2">

           <Text
             as="span"
             className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
           >
              harmful IP
           </Text>
         </div>
         <Text as="span">{IPData[0]?.harmful_IP}</Text>
       </div>
    </div>
  </WidgetCard>
  );
}

