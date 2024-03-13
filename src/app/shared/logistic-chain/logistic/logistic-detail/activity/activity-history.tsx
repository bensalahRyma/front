'use client';

import Image from 'next/image';
import { Text, Badge, Checkbox } from 'rizzui';
import cn from '@/utils/class-names';
import { formatDate } from '@/utils/format-date';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';

export const data = [
  {
    id: 4,
    date: '2023-08-23T14:49:10.954Z',
    updatedAt: '2023-08-23T14:49:10.954Z',
    currentLocation: {
      country: 'Congo',
      countryCode: 'CD',
    },
    status: 'Delivered',
    remarks: 'Order has been delivered',
  },
  {
    id: 3,
    date: '2023-08-22T14:49:10.954Z',
    updatedAt: '2023-08-22T14:49:10.954Z',
    currentLocation: {
      country: 'Singapore',
      countryCode: 'SG',
    },
    status: 'Out For Delivery',
    remarks: 'Our agent has picked-up you order for Delivery',
  },
  {
    id: 2,
    date: '2023-08-21T14:49:10.954Z',
    updatedAt: '2023-08-21T14:49:10.954Z',
    currentLocation: {
      country: 'Faroe Islands',
      countryCode: 'FO',
    },
    status: 'In Transit',
    remarks: 'OSD On The Way To (Last Mile) Hub',
  },
  {
    id: 1,
    date: '2023-08-20T14:49:10.954Z',
    updatedAt: '2023-08-20T14:49:10.954Z',
    currentLocation: {
      country: 'Micronesia',
      countryCode: 'FM',
    },
    status: 'Accepted',
    remarks: 'Order has been confirmed',
  },
];
export const dataActivity = [
  {
    id: 4,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
  {
    id: 3,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
  {
    id: 2,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
  {
    id: 1,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
];
const statusColors = {
  Accepted: 'info',
  'approve':'info',
  'In Transit': 'secondary',
  'Out For Delivery': 'primary',
  Delivered: 'success',
};
type actionType={
  name:string,
  date:Date,
}

type Columns = {
  data: any[];

  handleSelectAll: any;
  checkedItems: string[];
  onChecked?: (id: string) => void;
};

export const getColumns = ( ) => [
  {
    title: (
      <div className="ps-3.5 flex justify-center">
        <Checkbox
          title={'Select All'}
          className="cursor-pointer"
        />
      </div>
    ),
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-3.5">
        <Checkbox
          className="cursor-pointer"
        />
      </div>
    ),
  },
  {
    title: <span className="ml-6 block  flex justify-center">Score</span>,
    dataIndex: 'score',
    key: 'score',
    width: 200,
    render: (score: string) => (
      <div className="ml-6">
        <Text className="mb-1 font-medium text-gray-700">
          {score}
        </Text>
      </div>
    ),
  },
  {
    title:  <span className="flex justify-center">Action type</span>,
    dataIndex: 'actionType',
    key: 'actionType',
    width: 200,
    render: (actionType: actionType) => (
      <>
        <Text className="mb-1 font-medium text-gray-700">
          {actionType?.name}
        </Text>
        <Text className="text-[13px] text-gray-500">
          {formatDate(actionType?.date, 'h:mm A')}
        </Text>
      </>
    ),
  },
  // {
  //   title: <span className=" flex justify-center">Current Location</span>,
  //   dataIndex: 'currentLocation',
  //   key: 'currentLocation',
  //   width: 200,
  //   render: ({
  //     country,
  //     countryCode,
  //   }: {
  //     country: string;
  //     countryCode: string;
  //   }) => (
  //     <div className="flex justify-center items-center gap-2">
  //       <figure className="relative h-10 w-10">
  //         <Image
  //           fill
  //           quality={100}
  //           alt={`${country} Flag icon`}
  //           className="object-contain"
  //           src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
  //         />
  //       </figure>

  //       <span className="whitespace-nowrap">{country}</span>
  //     </div>
  //   ),
  // },
  {
    title: <span className=" flex justify-center">State</span>,
    dataIndex: 'state',
    key: 'state',
    width: 200,
    render: (state: string) => {
      return (
        // @ts-ignore
        <Badge color={statusColors[state]} rounded="md">
          {state}
        </Badge>
      );
    },
  },
  {
    title: <span className=" flex justify-center">Amount</span>,
    dataIndex: 'amount',
    key: 'amount',
    width: 200,
    render: (amount: string) => <p className=" flex justify-center">{amount}</p>,
  },
  {
    title:<span className=" flex justify-center">label</span> ,
    dataIndex: 'label',
    key: 'label',
    width: 200,
    render: (label: string) => <p className=" flex justify-center">{label}</p>,
  },
  {
    title:<span className=" flex justify-center">ip address</span> ,
    dataIndex: 'ipaddress',
    key: 'ipaddress',
    width: 200,
    render: (ipaddress: string) => <p className=" flex justify-center">{ipaddress}</p>,
  },
  {
    title:<span className=" flex justify-center">devicehash</span> ,
    dataIndex: 'devicehash',
    key: 'devicehash',
    width: 200,
    render: (devicehash: string) => <p className=" flex justify-center">{devicehash}</p>,
  },
];

export default function ActivityHistoryTable({
  className,
}: {
  className?: string;
}) {
  return (
    <BasicTableWidget
      title="Activity"
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={dataActivity}
      getColumns={getColumns}
      noGutter
      enableSearch={true}
      scroll={{
        x: 900,
      }}
    />
  );
}
