'use client';

import WidgetCard from '@/components/cards/widget-card';
import { toCurrency } from '@/utils/to-currency';
import { Avatar, Title, Text, Progressbar } from 'rizzui';
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

const data = [
  {
    month: 'Jan',
    totalSales: 95,
  },
  {
    month: 'Mar',
    totalSales: 70,
  },
  {
    month: 'May',
    totalSales: 113,
  },
  {
    month: 'Jul',
    totalSales: 159,
  },
  {
    month: 'Sep',
    totalSales: 105,
  },
  {
    month: 'Nov',
    totalSales: 140,
  },
];
const identifyData = [

   { userId:"123456user",
    registrationScore:"7.00",
    Fullname: 'eric dupont',
    user: 'eric',
    email:'eric.dupont-1@example.com',
    registrationdate:"9/10/2023",
    totalTransaction: 3,
    userbalance:"9.879.543.217.53",
    totalAmounts:"900.00 EUR",
    Firstseen:'2023-08-21T14:49:10.954Z',
    fill: '#2B7F75',}
  
  
];
const seenon=[
  {
    id:1,
   name:"ebay.com",
   date:"18/11/2015"
  },
  {
    id:2,
    name:"amazon.com",
    date:"18/11/2015"
   },
   {
    id:3,
    name:"netflix.com",
    date:"28/7/2012"
   },
   {
    id:4,
    name:"yahoo.fr",
    date:"14/7/2022"
   }
]
export default function Identify({ className }: { className?: string }) {
  const now = 60;
  return (
    <WidgetCard
      title="Identily"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
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
                <Text as="span">{identifyData[0]?.userId}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                    registration Score
                </Text>
                </div>
                <Progressbar value={7} size="lg" label={identifyData[0]?.registrationScore}  color="success"/> 
                {/* <Text as="span">{identifyData[0]?.registrationScore}</Text> */}
             
              
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
                <Text as="span">{identifyData[0]?.Fullname}</Text>
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
                <Text as="span">{identifyData[0]?.user}</Text>
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
                <Text as="span">{identifyData[0]?.email}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   registration date
                </Text>
                </div>
                <Text as="span">{identifyData[0]?.registrationdate}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   total Transaction
                </Text>
                </div>
                <Text as="span">{identifyData[0]?.totalTransaction}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   user balance
                </Text>
                </div>
                <Text as="span">{identifyData[0]?.userbalance}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                  total Amounts
                </Text>
                </div>
                <Text as="span">{identifyData[0]?.totalAmounts}</Text>
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
                <Text as="span">{identifyData[0]?.Firstseen}</Text>
            </div>
    
      </div>
    </WidgetCard>
  );
}

