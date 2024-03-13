'use client';

import WidgetCard from '@/components/cards/widget-card';
import { toCurrency } from '@/utils/to-currency';
import { Avatar, Title, Text, Progressbar, Button, Badge } from 'rizzui';
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
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Customer } from '@/data/customer-data';


const data2 ={
  EMAILUSED :"eric.dupont-1@example.com",
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
const data3=
{PHONEUSED :"+33222222222",
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
}}
const projects = [
  {
    id: 1,
    name: 'DELIVERABLE',
    budget: 'yes',
    color: '#FCB03D',
  },
  {
    id: 2,
    name: 'MAIL DOMAIN TYPE :',
    budget: 'DISPOSABLE',
    color: '#11A849',
  },
  {
    id: 3,
    name: 'NUMBER OF BREACHES :',
    budget: '5',
    color: '#FF1A1A',
  },
  {
    id: 4,
    name: 'NUMBER OF ONLINE PROFILES :',
    budget: '7',
    color: '#8A63D2',
  },
];

interface Props {
    className?: string;
    customerData: Customer[]; 
  }
export default function ResultName({ className, customerData }: Props) {
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
  useEffect(()=>{
    console.log("___customerData",customerData);
    
  },[])
  const [showBreaches2, setShowBreaches2] = useState(false);

  const handleshowBreachesClick2 = () => {
    setShowBreaches2(!showBreaches2); 
  };
  const [showResult2, setShowResult2] = useState(false);

  const handleButtonClick2 = () => {
    setShowResult2(!showResult2); 
  };
  return (

    <div className="grid grid-cols-12 gap-6 3xl:gap-8">
    <WidgetCard
      title="Identily"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"
    >
   
      <div className="  ">

        <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
        {/* <Progressbar value={75} size="xl" label="75%"  color="success"/> */}
        </div>
          <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                    userId
                </Text>
                </div>
                <Text as="span">{customerData[0]?.id}</Text>
            </div>
         
          
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   Fullname
                </Text>
                </div>
                <Text as="span">{customerData[0]?.fullname}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   user
                </Text>
                </div>
                <Text as="span">{customerData[0]?.user}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   email
                </Text>
                </div>
                <Text as="span">{customerData[0]?.email}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   Password hash    <Badge size="sm">{customerData[0]?.passwordHash?.length}</Badge>
                </Text>
                </div>
                <Text as="span">{customerData[0]?.passwordHash[0]?.passwordhash}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   user Balance
                </Text>
                </div>
                <Text as="span">{customerData[0]?.userBalance}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   user Category
                </Text>
                </div>
                <Text as="span">{customerData[0]?.userCategory}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   user account data
                </Text>
                </div>
                <Text as="span">{customerData[0]?.accountStatus}</Text>
            </div>
          
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   Affiliate name
                </Text>
                </div>
                <Text as="span">{customerData[0]?.affiliateName}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   Affiliate ID
                </Text>
                </div>
                <Text as="span">{customerData[0]?.affiliateID}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   total Transaction count
                </Text>
                </div>
                <Text as="span">{customerData[0]?.totalTransaction}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                  total Amounts  <Badge size="sm">{customerData[0]?.totalAmounts.length}</Badge>
                </Text>
                </div>
                <Text as="span">{customerData[0]?.totalAmounts[0]?.total}$</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                  First seen
                </Text>
                </div>
                <Text as="span">{customerData[0]?.firstSeen}</Text>
            </div>
    
      </div>
    </WidgetCard>
    <WidgetCard
      title="Mail analysis information"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"
    >

      <div className="flex items-center justify-start">
      </div>
   
      <div className="  ">
    <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
        <Text as="span" className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
        EMAIL USED :
        </Text>
        <Text as="span">{data2?.EMAILUSED}</Text>
      </div>
      <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
      <Progressbar value={75} size="xl" label="75%"  color="info"/>
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
    <WidgetCard
      title="Phone analysis information"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"
    >

<div className="  ">
        <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
          <Text as="span" className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          PHONE USED :
          </Text>
          <Text as="span">{data3?.PHONEUSED}</Text>
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
            <Text as="span">{data3?.DELIVERABLE}</Text>
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
            <Text as="span">{data3?.MAIL_DOMAIN_TYPE}</Text>
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
            <Text as="span">{data3?.BREACHES?.COUNT}</Text>
          </div>  
          {data3?.BREACHES?.DETAILS && (
  <div className="mb-4">
  
  <Button variant="outline" onClick={handleshowBreachesClick2}>
   <span>{showBreaches2 ? 'Show Less' : 'Show All'}</span>
            {'   '}
            {showBreaches2 ?(<FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '4px' }} />
            ):(<FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: '4px' }}/>)}
    </Button>
    {showBreaches2 && ( 
    <ul key={data3?.BREACHES.COUNT} style={{ marginTop: '10px' }}>
      {data3.BREACHES.DETAILS.map((breach, index) => (
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
    {data3.BREACHES.DETAILS.length > 0 && (  <div className="mt-4 border-b border-muted"></div>)}
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
            <Text as="span">{data3?.ONLINE_PROFILES?.COUNT}</Text>
            
          </div> 
          {data3?.ONLINE_PROFILES?.DETAILS && (
  <div className="mb-4">
   <Button variant="outline" onClick={handleButtonClick2}>
   <span>{showResult2 ? 'Show Less' : 'Show All'}</span>
            {'   '}
            {showResult2 ?(<FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '4px' }} />
            ):(<FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: '4px' }}/>)}
    </Button>
  
    {showResult2 && ( 
        <>
    
            <ul style={{ marginTop: '10px' }}>
      {data3.ONLINE_PROFILES.DETAILS.map((onlne, index) => (
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
       
    {data3.ONLINE_PROFILES.DETAILS.length > 0 && (  <div className="mt-4 border-b border-muted"></div>)}
  </div>
)}
      </div>
    </WidgetCard>
    </div>
  
  );
}

