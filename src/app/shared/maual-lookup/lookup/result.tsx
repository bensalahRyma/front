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
  ComposedChart,
  XAxis,
  Bar,
  LabelList,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { formatNumber } from '@/utils/format-number';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const data2 ={
  EMAILUSED :"eric.dupont-1@gmail.com",
  RISKSCORE:"95/100",
  RISKTYPE:"HIGH RISK",
  EMAILCREATIONDATE:"28/7/2012",
  DELIVERABLE: "invalid",
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
  },
  MAIL_DOMAIN:{
    name:"gmail.com",
    disposable:"no",
    registered:"yes",
    SMTPprovider:"google",
    domainAge:"9950Days",
    registeredAt:"2021-03-10",
    catchAll:"no",
    MX:"gmail-smtp-in.l.google.com"

  }
};

export default function Result({ className }: { className?: string }) {
  const now = 60;

  const [showResult, setShowResult] = useState(false);

  const handleButtonClick = () => {
    setShowResult(!showResult); 
  };
  const [showBreaches, setShowBreaches] = useState(false);

  const handleshowBreachesClick = () => {
    setShowBreaches(!showBreaches); 
  };
  const [showMaildomain, setMaildomain] = useState(false);

  const handleshowMailClick = () => {
    setMaildomain(!showMaildomain); 
  };
  return (
    <WidgetCard
      title="Risk analysis"
      titleClassName="font-lexend text-sm font-medium text-gray-500 mb-2.5 font-inter"
      className={className}
    >

      <div className="flex items-center justify-start">
      </div>
   
      <div className="  ">
      <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
          <Text as="span" className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          Email
          </Text>
          <Text as="span">{data2?.EMAILUSED}</Text>
        </div>
        <div className="mb-4 flex items-center justify-between pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
        <Text as="span" className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          Risk score
          </Text>
          <Text as="span">{data2?.RISKTYPE}</Text>
        </div>
      
        <Progressbar  value={75} size="xl" label="75%"  color="info"/>
        <br/>
   
          <div
            className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
          >
          </div>  
          <div
            className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Email creation date
              </Text>
            </div>
            <Text as="span">{data2?.EMAILCREATIONDATE}</Text>
          </div>  
          <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
          <Text as="span" className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          Deliverable
          </Text>
          <Text as="span">{data2?.DELIVERABLE}</Text>
        </div>
          <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Date breaches
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
                     key={breach.DOMAIN}
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
                Online profiles
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
               key={onlne.DOMAIN}
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
     <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Mail domain
              </Text>
            </div>
            <Text as="span">{data2?.MAIL_DOMAIN?.name}</Text>
          </div>  
          <div className="mb-4">
          <Button variant="outline" onClick={handleshowMailClick}>
   <span>{showMaildomain ? 'Show Less' : 'Show All'}</span>
            {'   '}
            {showMaildomain ?(<FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '4px' }} />
            ):(<FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: '4px' }}/>)}
    </Button>
    {showMaildomain && ( 
        <>
  <ul style={{ marginTop: '10px' }}>

             <div
             className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
           >
       <div className="flex items-center justify-start gap-2" >
       <Text
         as="span"
        // className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
       >
           disposable
       </Text>
       
     </div>
     <Text as="span">{data2?.MAIL_DOMAIN?.disposable}</Text>
      </div>
      <div
             className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
           >
       <div className="flex items-center justify-start gap-2" >
       <Text
         as="span" >
           registered
       </Text>
     </div>
     <Text as="span">{data2?.MAIL_DOMAIN?.registered}</Text>
      </div>
      <div
             className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
           >
       <div className="flex items-center justify-start gap-2" >
       <Text
         as="span" >
           SMTP provider
       </Text>
     </div>
     <Text as="span">{data2?.MAIL_DOMAIN?.SMTPprovider}</Text>
      </div>
      <div
             className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
           >
       <div className="flex items-center justify-start gap-2" >
       <Text
         as="span" >
           domain Age
       </Text>
     </div>
     <Text as="span">{data2?.MAIL_DOMAIN?.domainAge}</Text>
      </div>
      <div
             className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
           >
       <div className="flex items-center justify-start gap-2" >
       <Text
         as="span" >
           registered At
       </Text>
     </div>
     <Text as="span">{data2?.MAIL_DOMAIN?.registeredAt}</Text>
      </div>
      <div
             className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0"
           >
       <div className="flex items-center justify-start gap-2" >
       <Text
         as="span" >
           catch All
       </Text>
     </div>
     <Text as="span">{data2?.MAIL_DOMAIN?.catchAll}</Text>
      </div>
      <div className="mb-4 flex items-center justify-between last:mb-0 last:border-0 last:pb-0">
       <div className="flex items-center justify-start gap-2" >
       <Text
         as="span" >
           MX
       </Text>
     </div>
     <Text as="span">{data2?.MAIL_DOMAIN?.MX}</Text>
      </div>
  </ul>
  </>
    )}
</div>

      </div>
    </WidgetCard>
  );
}

