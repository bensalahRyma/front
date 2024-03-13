'use client';

import WidgetCard from '@/components/cards/widget-card';
import { toCurrency } from '@/utils/to-currency';
import { Avatar, Title, Text, Progressbar, Badge, Tooltip, Button } from 'rizzui';
import cn from '@/utils/class-names';
import TrendingUpIcon from '@/components/icons/trending-up';
import {
  AreaChart,
  Area,
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
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/format-date';
import { DatePicker } from '@/components/ui/datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
interface Order {
    id: string;
    date: string;
    amount: string;
  }
  
  const orderData: Order[] = [
    { id: "1236", date: '2023-08-21T14:49:10.954Z',amount: "123456" },
    { id: "12377", date: '2023-06-22T14:49:10.954Z', amount: "987" },
    { id: "1289", date: '2023-06-18T14:49:10.954Z', amount: "98700" },
    { id: "1240", date: '2022-04-22T14:49:10.954Z', amount: "980" },
  ];
export default function Statistics({ className }: { className?: string }) {
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
const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

const handleOrderClick = (order: Order) => {
  setSelectedOrder(order);
};
const totalAmount = orderData.reduce((total, order) => total + parseInt(order.amount), 0);
const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredOrders, setFilteredOrders] = useState(orderData);
  const [showAll, setShowAll] = useState(false);
  const initialOrdersToShow = 2;
  const handleDateChange = (date:Date) => {
    setSelectedDate(date);

    // Filter orders based on selected date
    let filtered;
    if (!date) {
      filtered = orderData.slice(0, initialOrdersToShow);
    } else {
      filtered = orderData.filter((item) => {
        const orderDate = new Date(item.date);
        return (
          orderDate.getFullYear() === date.getFullYear() &&
          orderDate.getMonth() === date.getMonth() &&
          orderDate.getDate() === date.getDate()
        );
      });
    }

    setFilteredOrders(filtered);
  };
  // const handleShowAll = () => {
  //   setShowAll(true);
  //   setFilteredOrders(orderData);
  // };
  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  useEffect(() => {
    if (showAll) {
      setFilteredOrders(orderData);
    } else {
      setFilteredOrders(orderData.slice(0, initialOrdersToShow));
    }
  }, [orderData,showAll]); 

  return (
    <WidgetCard
      title="Statistics"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
    //   description={
    //     // <div className="flex items-center justify-start">
    //     //   <Title as="h2" className="me-2">
    //     //   {orderData?.length}
    //     //   </Title>
    //     //   <Text className="flex items-center leading-none text-gray-500">
    //     //     <Text
    //     //       as="span"
    //     //       className={cn(
    //     //         'me-2 inline-flex items-center font-medium text-blue'
    //     //       )}
    //     //     >
    //     //       {/* <TrendingUpIcon className="me-1 h-4 w-4" /> */}
    //     //       Number of Orders
    //     //     </Text>
    //     //   </Text>
    //     // </div>
    //   }
    >
   
      <div className="  ">

        <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
        {/* <Progressbar value={75} size="xl" label="75%"  color="success"/> */}
        </div>
          
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   Number of Orders
                </Text>
                </div>
                <Text as="span">{orderData?.length}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                   Total Amount
                </Text>
                </div>
                <Text as="span">{totalAmount}$</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                  Average Price per Order
                </Text>
                </div>
                <Text as="span">{totalAmount/orderData?.length}$</Text>
            </div>
 
      <div className="  ">
    <DatePicker
    className="mb-4"
       // as="span"
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Select a date"
      />
        <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0">
          <Text as="span" className="text-sm text-gray-600 dark:text-gray-700">
            Order date
          </Text>
          <Text as="span">Amount</Text>
        </div>
        {filteredOrders.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOrderClick(item)}
            className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start gap-2">
   
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                 {((item?.date), 'MMMM D, YYYY')}
            
              </Text>
            </div>
    
            <Text as="span">{toCurrency(item.amount)}</Text>

          </div>

        ))}
    
      </div>
      <div className="flex justify-center">
      {!selectedDate&& (
         <Button as='span'  className="mb-4 ml-8"  variant="outline" onClick={handleShowAll} >
           <span>{showAll ? 'Show Less' : 'Show All'}</span>
            {'   '}
            {showAll ?(<FontAwesomeIcon className="h-4 w-4 ml-2" icon={faChevronUp} style={{ marginLeft: '4px' }} />
            ):(<FontAwesomeIcon  className="h-4 w-4 ml-2" icon={faChevronDown} style={{ marginLeft: '4px' }}/>)}
      
         </Button>
      )}
        </div>
      
      </div>
    
    </WidgetCard>
  );
}

// const calculateTotalAmount = () => {
//     return orderData.reduce((total, order) => total + parseInt(order.amount), 0);
//   };