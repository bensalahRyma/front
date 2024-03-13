'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { StatusType, TransactionStatuses, TransactionType } from '@/data/transactions-data';
import { Badge } from 'rizzui';
import { useParams } from 'next/navigation';
import { counstomersData } from '@/data/customer-data';
import { useEffect } from 'react';

import { DeliveryCompanyData } from '@/data/delivery-company';
interface DeliveryDetailsProps {
  className?: string;
}



export const getColumns = () => [
  {
    title: <span className="ms-6 block flex justify-center">Delivery Company ID</span>,
    dataIndex: 'id',
    key: 'id',
    width: 50,
    render: (id: string) => <span className="ms-6 block">{id}</span>,
  },
  {
    title: <span className="block flex justify-center">Delivery Company Name</span>,
    dataIndex: 'name',
    key: 'name',
    width: 50,
    render: (name: string) => <p>{name}</p>,
  },
  {
    title: <span className="block flex justify-center">Fraud Score</span>,
    dataIndex: 'fraudscore',
    key: 'fraudscore',
    width: 100,
    render: (fraudscore: string) => <p>{fraudscore}</p>,
  },


];

export default function DeliveryDetails({ className }: DeliveryDetailsProps) {
  const params = useParams();
  const  id = localStorage.getItem("deliveryId") 
  const deliverycompany =
  DeliveryCompanyData.find(
      (item) => item.id === id
    ) ?? DeliveryCompanyData[0];
useEffect(()=>{
 console.log("__deliverycompany",deliverycompany);
 console.log("__data",typeof(deliverycompany));
 
},[])
  return (
    <BasicTableWidget
      title="Delivery Company Details"
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={[deliverycompany]}
      getColumns={getColumns}
      noGutter
      enableSearch={false}
      scroll={{
        x: 900,
      }}
    />
  );
}
