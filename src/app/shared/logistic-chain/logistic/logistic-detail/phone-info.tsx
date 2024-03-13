'use client';

import WidgetCard from '@/components/cards/widget-card';
import { toCurrency } from '@/utils/to-currency';
import { Avatar, Title, Text, Progressbar, Button } from 'rizzui';
import cn from '@/utils/class-names';
import TrendingUpIcon from '@/components/icons/trending-up';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { formatNumber } from '@/utils/format-number';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const data2 ={
  PHONEUSED :"+33222222222",
  DELIVERABLE: "YES",
  MAIL_DOMAIN_TYPE: "DISPOSABLE",
  BREACHES: {
    COUNT: 5,
    DETAILS: [
      {
        DOMAIN: "ebay.com",
        DATE: "18/11/2015"
      },
      {
        DOMAIN: "amazon.com",
        DATE: "19/9/2014"
      },
      {
        DOMAIN: "netflix.com",
        DATE: "28/7/2012"
      },
      {
        DOMAIN: "yahoo.fr",
        DATE: "14/7/2022"
      },
      {
        DOMAIN: "pinterest.com",
        DATE: "11/3/2020"
      }
    ]
  },
  ONLINE_PROFILES: {
    COUNT: 7,
    DETAILS: [
      {
        DOMAIN: "pinterest.com",
        DATE: "11/3/2020"
      },
      {
        DOMAIN: "spotify.com",
        DATE: "10/11/2011"
      },
      {
        DOMAIN: "yahoo.fr",
        DATE: "14/7/2022"
      },
      {
        DOMAIN: "twitter.com",
        DATE: "23/7/2016"
      },
      {
        DOMAIN: "ebay.com",
        DATE: "18/11/2015"
      },
      {
        DOMAIN: "amazon.com",
        DATE: "19/9/2014"
      },
      {
        DOMAIN: "netflix.com",
        DATE: "28/7/2012"
      }
    ]
  }
};

export default function PhoneInfo({ className }: { className?: string }) {
  const [showBreaches, setShowBreaches] = useState(false);

  const handleshowBreachesClick = () => {
    setShowBreaches(!showBreaches); 
  };
  const [showResult, setShowResult] = useState(false);

  const handleButtonClick = () => {
    setShowResult(!showResult); 
  };
  return (
    <WidgetCard
      title="Phone analysis information"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
    >
      
      <div className="  ">
        <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
          <Text as="span" className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          PHONE USED :
          </Text>
          <Text as="span">{data2?.PHONEUSED}</Text>
        </div>
        <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
        <Progressbar value={75} size="xl" label="75%"  color="success"/>
        </div>
  
        <div
            className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                DELIVERABLE
              </Text>
            </div>
            <Text as="span">{data2?.DELIVERABLE}</Text>
          </div>  
          <div
            className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                MAIL DOMAINTYPE
              </Text>
            </div>
            <Text as="span">{data2?.MAIL_DOMAIN_TYPE}</Text>
          </div>  
          <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                NUMBER OF BREACHES 
              </Text>
            </div>
            <Text as="span">{data2?.BREACHES?.COUNT}</Text>
          </div>  
          {data2?.BREACHES?.DETAILS && (
  <div className="mb-4">
  
  <Button variant="outline" onClick={handleshowBreachesClick}>
   <span>{showBreaches ? 'Show Less' : 'Show All'}</span>
            {'   '}
            {showBreaches ?(<FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '4px' }} />
            ):(<FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: '4px' }}/>)}
    </Button>
    {showBreaches && ( 
    <ul key={data2?.BREACHES.COUNT} style={{ marginTop: '10px' }}>
      {data2.BREACHES.DETAILS.map((breach, index) => (
                     <div
                     className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
                   >
               <div className="flex items-center justify-start gap-2" >
               <Text
                 as="span"
                 //className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
               >
                 {breach.DOMAIN}
               </Text>
               
             </div>
             <Text as="span">{breach.DATE}</Text>
              </div>
      ))}
    </ul>)}
    {data2.BREACHES.DETAILS.length > 0 && (  <div className="mt-4 border-b border-muted"></div>)}
  </div>
)}
              <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                NUMBER OF ONLINE PROFILES 
              </Text>
              
            </div>
            <Text as="span">{data2?.ONLINE_PROFILES?.COUNT}</Text>
            
          </div> 
          {data2?.ONLINE_PROFILES?.DETAILS && (
  <div className="mb-4">
   <Button variant="outline" onClick={handleButtonClick}>
   <span>{showResult ? 'Show Less' : 'Show All'}</span>
            {'   '}
            {showResult ?(<FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '4px' }} />
            ):(<FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: '4px' }}/>)}
    </Button>
  
    {showResult && ( 
        <>
    
            <ul style={{ marginTop: '10px' }}>
      {data2.ONLINE_PROFILES.DETAILS.map((onlne, index) => (
               <div
               className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
             >
         <div className="flex items-center justify-start gap-2" >
         <Text
           as="span"
          // className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
         >
           {onlne.DOMAIN}
         </Text>
         
       </div>
       <Text as="span">{onlne.DATE}</Text>
        </div>
      ))}
    </ul>
        </>

    )}
       
    {data2.ONLINE_PROFILES.DETAILS.length > 0 && (  <div className="mt-4 border-b border-muted"></div>)}
  </div>
)}
      </div>
    </WidgetCard>
  );
}
