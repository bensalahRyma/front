'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { StatusType, TransactionStatuses, TransactionType } from '@/data/transactions-data';
import { Badge } from 'rizzui';
import { useParams } from 'next/navigation';
import { counstomersData } from '@/data/customer-data';
import { useEffect } from 'react';
import DateCell from '@/components/ui/date-cell';

interface CustomerDetailsProps {
  className?: string;
}

const data = [
    {
        id: '0256',
        user:"test",
        fullname: 'Bessie Beatty',
        email: 'christophe78@gmail.com',
        userCreated: '2029-10-14T16:01:40.021Z',
        userBalance:'0.55',
        userCountry:'UK',
        passwordHash:[
          {
              id:"0235",
              passwordhash:"azerty159357"
          },
          {
              id:"0288",
              passwordhash:"azerty159357"
          }
        ],
        userCategory:"Bronze",
        accountStatus:'active',
        affiliateName:'test123',
        affiliateID:'1234',
        totalAmounts:[
          {id:'1',total:'1234566'},
          {id:'2',total:'987654'},
  
        ],
        totalTransaction:'4',
        firstSeen:'2023-10-14T16:01:40.021Z'
      },
];

export const getColumns = () => [
  {
    title: <span className="ms-6 block flex justify-center">user ID</span>,
    dataIndex: 'id',
    key: 'id',
    width: 50,
    render: (id: string) => <span className="ms-6 block">{id}</span>,
  },
  {
    title: <span className="block flex justify-center">User</span>,
    dataIndex: 'user',
    key: 'user',
    width: 50,
    render: (user: string) => <p>{user}</p>,
  },
  {
    title: <span className="block flex justify-center">Email address</span>,
    dataIndex: 'email',
    key: 'email',
    width: 100,
    render: (email: string) => <p>{email}</p>,
  },
  {
    title: <span className="block flex justify-center">User fullname</span>,
    dataIndex: 'fullname',
    key: 'fullname',
    width: 100,
    render: (fullname: string) => <p>{fullname}</p>,
  },
  {
    title: <span className="block flex justify-center">User Created</span>,
    dataIndex: 'userCreated',
    key: 'userCreated',
    width: 100,
    render: (createdDate: Date) => <DateCell date={createdDate} />,
  },
  {
    title: <span className="block flex justify-center">User Balance</span>,
    dataIndex: 'userBalance',
    key: 'userBalance',
    width: 100,
    render: (userBalance: string) => <p>{userBalance}</p>,
  },
  {
    title: <span className="block flex justify-center">User Country</span>,
    dataIndex: 'userCountry',
    key: 'userCountry',
    width: 100,
    render: (userCountry: string) => <p>{userCountry}</p>,
  },


];

export default function CustomerDetails({ className }: CustomerDetailsProps) {
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
    <BasicTableWidget
      title="Customer Details"
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={[customer]}
      getColumns={getColumns}
      noGutter
      enableSearch={false}
      scroll={{
        x: 900,
      }}
    />
  );
}
