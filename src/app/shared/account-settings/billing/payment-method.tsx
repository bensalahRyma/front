'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { StatusType, TransactionStatuses, TransactionType } from '@/data/transactions-data';
import { Badge, Text, Title } from 'rizzui';
import { useParams } from 'next/navigation';
import { counstomersData } from '@/data/customer-data';
import { useEffect } from 'react';

import { DeliveryCompanyData } from '@/data/delivery-company';
import Image from 'next/image';
interface DeliveryDetailsProps {
  className?: string;
}

export const plandetailsData=[{
    selectedpalan:"Trial",
    enddate:"2024.03.08",
    limit:"1000 transaction/month",
    cost:"free"
}]
const transitions = [
    {
      id: 1,
      paymentMethod: {
        name: 'MasterCard',
        image:
          'https://isomorphic-furyroad.s3.amazonaws.com/public/payment/master.png',
      },
      price: '$1575.00',
    },
   
  ];
  
export const getColumns = () => [
  {
    title: <span className="ms-6 block flex justify-center">Selected Plan</span>,
    dataIndex: 'selectedpalan',
    key: 'selectedpalan',
    width: 50,
    render: (selectedpalan: string) => <span className="ms-6 block">{selectedpalan}</span>,
  },
  {
    title: <span className="block flex justify-center">Trial End date</span>,
    dataIndex: 'enddate',
    key: 'enddate',
    width: 50,
    render: (enddate: string) => <p>{enddate}</p>,
  },
  {
    title: <span className="block flex justify-center">Limit</span>,
    dataIndex: 'limit',
    key: 'limit',
    width: 100,
    render: (limit: string) => <p>{limit}</p>,
  },
  {
    title: <span className="block flex justify-center">Cost</span>,
    dataIndex: 'cost',
    key: 'cost',
    width: 100,
    render: (cost: string) => <p>{cost}</p>,
  },

];

export default function PaymentMethod({ className }: DeliveryDetailsProps) {

  return (
    <>
      <div className="">
            {/* <Title
              as="h3"
              className="mb-3.5  text-base font-semibold @5xl:mb-5 @7xl:text-lg"
            >
              Payment Method
            </Title> */}

            <div className="space-y-4">
              {transitions.map((item) => (
                <div
                  key={item.paymentMethod.name}
                  className="flex items-center justify-between rounded-lg border border-gray-100 px-5 py-5 font-medium shadow-sm transition-shadow @5xl:px-7"
                >
                  <div className="flex w-1/3 items-center">
                    <div className="shrink-0">
                      <Image
                        src={item.paymentMethod.image}
                        alt={item.paymentMethod.name}
                        height={60}
                        width={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col ps-4">
                      <Text as="span" className="font-lexend text-gray-700">
                        Payment
                      </Text>
                      <span className="pt-1 text-[13px] font-normal text-gray-500">
                        Via {item.paymentMethod.name}
                      </span>
                    </div>
                  </div>

                  <div className="w-1/3 text-end">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
    
    </>
    // <BasicTableWidget
    //   title="Payment Method"
    //   className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
    //   data={plandetailsData}
    //   getColumns={getColumns}
    //   noGutter
    //   enableSearch={false}
    //   scroll={{
    //     x: 900,
    //   }}
    // />
  );
}
