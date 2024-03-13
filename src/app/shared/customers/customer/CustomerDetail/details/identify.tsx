'use client';

import WidgetCard from '@/components/cards/widget-card';
import { toCurrency } from '@/utils/to-currency';
import { Avatar, Title, Text, Progressbar, Badge } from 'rizzui';
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
import { useParams } from 'next/navigation';
import { counstomersData } from '@/data/customer-data';
import { useEffect } from 'react';

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
  const params = useParams();

  const customer =
  counstomersData.find(
      (item) => item.id === params.id
    ) ?? counstomersData[0];
useEffect(()=>{
 console.log("__customer",customer);
 console.log("__data",typeof(customer));
 
},[])
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
                <Text as="span">{[customer][0]?.id}</Text>
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
                <Text as="span">{[customer][0]?.fullname}</Text>
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
                <Text as="span">{[customer][0]?.user}</Text>
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
                <Text as="span">{[customer][0]?.email}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   Password hash    <Badge size="sm">{[customer][0]?.passwordHash.length}</Badge>
                </Text>
                </div>
                <Text as="span">{[customer][0]?.passwordHash[0]?.passwordhash}</Text>
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
                <Text as="span">{[customer][0]?.userBalance}</Text>
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
                <Text as="span">{[customer][0]?.userCategory}</Text>
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
                <Text as="span">{[customer][0]?.accountStatus}</Text>
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
                <Text as="span">{[customer][0]?.accountStatus}</Text>
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
                <Text as="span">{[customer][0]?.accountStatus}</Text>
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
                <Text as="span">{[customer][0]?.affiliateName}</Text>
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
                <Text as="span">{[customer][0]?.affiliateID}</Text>
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
                <Text as="span">{[customer][0]?.totalTransaction}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                  total Amounts  <Badge size="sm">{[customer][0]?.totalAmounts.length}</Badge>
                </Text>
                </div>
                <Text as="span">{[customer][0]?.totalAmounts[0]?.total}$</Text>
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
                <Text as="span">{[customer][0]?.firstSeen}</Text>
            </div>
    
      </div>
    </WidgetCard>
  );
}

