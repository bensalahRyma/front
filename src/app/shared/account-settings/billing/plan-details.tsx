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

export const plandetailsData=[{
    selectedpalan:"Trial",
    enddate:"2024.03.08",
    limit:"1000 transaction/month",
    cost:"free"
}]

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

export default function PlanDetails({ className }: DeliveryDetailsProps) {

  return (
    <BasicTableWidget
      title="Plan Details"
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={plandetailsData}
      getColumns={getColumns}
      noGutter
      enableSearch={false}
      scroll={{
        x: 900,
      }}
    />
  );
}
