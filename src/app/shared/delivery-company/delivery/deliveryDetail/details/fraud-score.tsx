import { Button, Text, ActionIcon, Badge } from 'rizzui';
import cn from '@/utils/class-names';
import WidgetCard from '@/components/cards/widget-card';
import CircleProgressBar from '@/components/charts/circle-progressbar';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { StatusType, TransactionStatuses } from '@/data/transactions-data';

const data = [
  {
    id:"12345",
    name: 'Final Fraud Score',
    value: '60/100',
    percentage: 60,
    color: '#3872FA',
    bgColor: 'bg-[#3872FA]',
    bgActiveColor: 'active:enabled:bg-[#2750AF]',
    message:
      'The transaction looks suspicious at first glance and the customer was not able remove the doubts. However, neither was the delivery company. The transaction should be analysed in more details',
  },
  
  
];
const transactionData=[
  {
    id: '1',
  
      FirstName: 'Eric',
      LastName: 'Dupont1',

    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Accepted',
    finalscore: '79'
  },
  {
    id: '2',
    
    FirstName: 'Eric',
    LastName: 'Dupont2',
 
  shippingCountry: 'UK',
  billingCountry: 'Hong Kong',
  status: 'Legit Return',
  finalscore: '11'
  },
  {
    id: '3',
 
      FirstName: 'Eric',
      LastName: 'Dupont3',
 
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Not Accepted',
    finalscore: '24'
  },
  {
    id: '30',
 
      FirstName: 'Eric',
      LastName: 'Dupont3',
 
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Not Accepted',
    finalscore: '26'
  },
  {
    id: '33',
 
      FirstName: 'Eric',
      LastName: 'Dupont3',
 
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Delivered',
    finalscore: '7'
  },
]
const statusColors = (status: string) => {
  if (TransactionStatuses.RefundAccepted === status) {
    return 'success';
  }
  if (TransactionStatuses.LegitReturn === status) {
    return 'secondary';
  }
  if (TransactionStatuses.RefundNotAccepted === status) {
    return 'info';
  }
  if (TransactionStatuses.Delivered === status) {
    return 'success';
  }
  if (TransactionStatuses.RefundPending === status) {
    return 'danger';
  }
  if (TransactionStatuses.RedFlag === status) {
    return 'danger';
  }
  if (TransactionStatuses.SuspiousRefundAccepted === status) {
    return 'info';
  }
};
export default function FraudScore({
  className,
}: {
  className?: string;
}) {
  const [filteredOrders, setFilteredOrders] = useState(transactionData);
  const [showAll, setShowAll] = useState(false);
  const initialransactionToShow = 2;
  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  useEffect(() => {
    if (showAll) {
      setFilteredOrders(transactionData);
    } else {
      setFilteredOrders(transactionData.slice(0, initialransactionToShow));
    }
  }, [transactionData,showAll]); 

  return (
    <>
      {data.map((item) => (
        <WidgetCard
          key={item.name}
          title={item.name}
          description={''}
          rounded="lg"
          // action={
          //   <ActionIcon variant="outline" rounded="full">
          //     <PiSlidersHorizontalDuotone className="h-auto w-5" />
          //   </ActionIcon>
          // }
          descriptionClassName="text-gray-500 mt-1.5"
          className={cn(className)}
        >
          <div className="mt-5 grid w-full grid-cols-1 justify-around gap-6 @container @sm:py-2 @7xl:gap-8">
            <div className="text-center">
  
{/* 
<div style={{ backgroundColor: '#f8f8f8', padding: '28px',border: '1px solid #f8f8f8', 
borderRadius: '10px' ,marginBottom: '20px' }}>
  <Text 
        style={{ textAlign: 'justify', textAlignLast: 'left', display: 'inline-block', 
        
        }}
  >
    {item.message}
  </Text>
</div> */}


              {/* <div style={{ borderBottom: '1px solid #f0f0f0', marginBottom: '20px' }}></div> */}
              <div  style={{ marginTop: '40px' }}  className="mx-auto mb-5 mt-2 w-full max-w-[180px] sm:mb-7 xl:mb-8 2xl:mb-10 2xl:mt-4">
                <CircleProgressBar
                  percentage={item.percentage}
                  size={140}
                  stroke="#f0f0f0"
                  strokeWidth={7}
                  progressColor={item.color}
                  label={
                    <Text className="font-lexend text-xl font-bold text-gray-900 @xs:text-2xl">
                      {item.value}
                    </Text>
                  }
                  strokeClassName="dark:stroke-gray-200"
                />
              </div>
           
            </div>


          </div>
        
        </WidgetCard>
      ))}
    </>
  );
}
