'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';

interface DeliveryDetailsProps {
  className?: string;
}

const activityLogData=[
  {
    date:"11/3/2020",
    action:"view",
    description:"transaction description",
    actionby:"test user"
  },
];
export const getColumns = () => [
  {
    title: <span className="ms-6 block flex justify-center">Date</span>,
    dataIndex: 'date',
    key: 'date',
    width: 100,
    render: (date: String) => <span className="ms-6 block flex justify-center">{date}</span>,
  },
  {
    title: <span className="block flex justify-center">Description</span>,
    dataIndex: 'description',
    key: 'description',
    width: 300,
    render: (description: string) => <p>{description}</p>,
  },
  {
    title: <span className="block flex justify-center">action</span>,
    dataIndex: 'action',
    key: 'action',
    width: 200,
    render: (action: string) => <p>{action}</p>,
  },
  {
    title: <span className="block flex justify-center">Action By</span>,
    dataIndex: 'actionby',
    key: 'actionby',
    width: 200,
    render: (actionby: string) => <p>{actionby}</p>,
  },
 
];

export default function AnalystLog({ className }: DeliveryDetailsProps) {
  return (
    <BasicTableWidget
      title="Analyst Log"
      variant="minimal"
     className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={activityLogData}
      getColumns={getColumns}
     // noGutter
      enableSearch={true}
      enablePagination
      searchPlaceholder="Search order..."
      //className="min-h-[480px] [&_.widget-card-header]:items-center [&_.widget-card-header_h5]:font-medium"
    />
  );
}
