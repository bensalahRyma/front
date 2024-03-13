'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { StatusType, TransactionStatuses, TransactionType } from '@/data/transactions-data';
import { Badge, Button, Select, Text, Tooltip } from 'rizzui';
import { PiCheckCircleBold, PiClockBold } from 'react-icons/pi';
import { useState } from 'react';

interface DeliveryDetailsProps {
  className?: string;
}
const statusOptions = [
  { label: TransactionStatuses.RefundAccepted, value: TransactionStatuses.RefundAccepted },
  { label: TransactionStatuses.LegitReturn, value: TransactionStatuses.LegitReturn},
  { label: TransactionStatuses.RefundNotAccepted, value: TransactionStatuses.RefundNotAccepted},
  { label: TransactionStatuses.Delivered , value: TransactionStatuses.Delivered },
  { label: TransactionStatuses.RefundPending, value: TransactionStatuses.RefundPending },
  { label: TransactionStatuses.RedFlag, value: TransactionStatuses.RedFlag},
  { label: TransactionStatuses.SuspiousRefundAccepted, value: TransactionStatuses.SuspiousRefundAccepted},
];

const statusColors = (status: StatusType) => {
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
const data = [
  {
   
    id: '1',
  
      FirstName: 'Eric',
      LastName: 'Dupont1',

    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Accepted',
    finalscore: '79'
  },
];
type Columns = {

  onHeaderCellClick: (value: string) => void;

};
export const getColumns = ({  onHeaderCellClick}: Columns) => [
  {
    title: <span className="ms-6 block flex justify-center">First Name</span>,
    dataIndex: 'FirstName',
    key: 'FirstName',
    width: 50,
    render: (FirstName: string) => <span className="ms-6 block">{FirstName}</span>,
  },
  {
    title: <span className="block flex justify-center">Last Name</span>,
    dataIndex: 'LastName',
    key: 'LastName',
    width: 50,
    render: (LastName: string) => <p>{LastName}</p>,
  },
  {
    title: <span className="block flex justify-center">Shipping Country</span>,
    dataIndex: 'shippingCountry',
    key: 'shippingCountry',
    width: 100,
    render: (shippingCountry: string) => <p>{shippingCountry}</p>,
  },
  {
    title: <span className="block flex justify-center">Billing Country</span>,
    dataIndex: 'billingCountry',
    key: 'billingCountry',
    width: 100,
    render: (billingCountry: string) => <p>{billingCountry}</p>,
  },
  {
    title: <span className="block flex justify-center">Status</span>,
    dataIndex: 'status',
    key: 'status',
    width: 150,
    onHeaderCell: () => onHeaderCellClick('status'),
    render: (status: string) => {
      return <StatusSelect selectItem={status} />;
    },
    // render: (status: StatusType) => (
    //   <Badge
    //     variant="flat"
    //     className="w-40 h-10"
    //     color={statusColors(status)}
    //     data-color={statusColors(status)}
    //   >
    //     {status}
    //   </Badge>
    //)
  },
    {
      title: <span className="block flex justify-center">Final Fraud Score</span>,
      dataIndex: 'finalscore',
      key: 'finalscore',
      width: 100,
      render: (finalscore: string, record: TransactionType) => (
        <Badge
          variant="flat"
          className="w-20 h-10 "
          color={statusColors(record.status)}
          data-color={statusColors(record.status)}
        >
          {finalscore}%
        </Badge>
      ),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <span className="block flex justify-center">Actions</span>,
    dataIndex: 'action',
    key: 'action',
    width: 100,
    render: (_: string, row: any) => (
      <div className="w-25 flex justify-center items-center">

        <Tooltip
          size="sm"
          content={'launch analysis'}
          placement="top"
          color="invert"
        >
           <Button rounded="pill" variant="flat">
           launch analysis
           </Button>
        </Tooltip>
      
      </div>
    ),
  },
];
function StatusSelect({ selectItem }: { selectItem?: string }) {
  const selectItemValue = statusOptions.find(
    (option) => option.label === selectItem
  );
  const [value, setValue] = useState(selectItemValue);
  return (
    <Select
      dropdownClassName="!z-15"
      inPortal={false}
      placeholder="Select Role"
      options={statusOptions}
      value={value}
      onChange={setValue}
      displayValue={(option: { value: any }) =>
        renderOptionDisplayValue(option.value as StatusType)
      }
    />
  );
}
function renderOptionDisplayValue(value: StatusType) {
  switch (value) {
    // case 'Scheduled':
    //   return (
    //     <div className="flex items-center">

    //       <PiClockBold className="shrink-0 fill-green-dark text-base" />
    //       <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
    //         {value}
    //       </Text>
    //     </div>
    //   );
    default:
      return (
        <div className="block flex justify-center">
                     <Badge
          variant="flat"
          className=""
          color={statusColors(value)}
          data-color={statusColors(value)}
        >
          {value}
        </Badge>
          {/* <PiCheckCircleBold className="shrink-0 fill-orange text-base" />
          <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
            {value}
          </Text> */}
        </div>
      );
  }
}
export default function TransactionDetails({ className }: DeliveryDetailsProps) {
  return (
    <BasicTableWidget
      title="Transaction Details"
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={data}
      getColumns={getColumns}
      noGutter
      enableSearch={false}
      scroll={{
        x: 900,
      }}
    />
  );
}
