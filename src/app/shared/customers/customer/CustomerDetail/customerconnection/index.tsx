'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { useState } from 'react';
import HorizontalFormBlockWrapper from '@/app/shared/account-settings/horiozontal-block';
import { Checkbox, CheckboxGroup } from 'rizzui';
import WidgetCard from '@/components/cards/widget-card';

interface DeliveryDetailsProps {
  className?: string;
}

const data = [
  {
    id: 1,
    amount: 1.0,
    description: 'streamline compelling models',
    weight: '1 lbs / 0.45 kgs',
    dimensions: '16x19x5 in.',
    actualValue: 190.0,
    discountedValue: 190.0,
    tax: 15.0,
    total: 210.0,
  },
];

export const getColumns = () => [
  {
    title: <span className="ms-6 block">Amount</span>,
    dataIndex: 'amount',
    key: 'amount',
    width: 100,
    render: (amount: number) => <span className="ms-6 block">{amount}</span>,
  },
  {
    title: <span className="block">Description</span>,
    dataIndex: 'description',
    key: 'description',
    width: 300,
    render: (description: string) => <p>{description}</p>,
  },
  {
    title: <span className="block">Weight</span>,
    dataIndex: 'weight',
    key: 'weight',
    width: 200,
    render: (weight: string) => <p>{weight}</p>,
  },
  {
    title: <span className="block">Dimensions</span>,
    dataIndex: 'weight',
    key: 'weight',
    width: 200,
    render: (weight: string) => <p>{weight}</p>,
  },
  {
    title: <span className="block">Actual Value</span>,
    dataIndex: 'actualValue',
    key: 'actualValue',
    align: 'right',
    width: 150,
    render: (actualValue: number) => <p>{toCurrency(actualValue)}</p>,
  },
  {
    title: <span className="block">Discounted Value</span>,
    dataIndex: 'discountedValue',
    key: 'discountedValue',
    align: 'right',
    width: 200,
    render: (discountedValue: number) => <p>{toCurrency(discountedValue)}</p>,
  },
  {
    title: <span className="block">Tax</span>,
    dataIndex: 'tax',
    key: 'tax',
    align: 'right',
    width: 100,
    render: (tax: number) => <p>{toCurrency(tax)}</p>,
  },
  {
    title: <span className="me-6 block">Total</span>,
    dataIndex: 'total',
    key: 'total',
    align: 'right',
    width: 150,
    render: (total: number) => <p className="me-6">{toCurrency(total)}</p>,
  },
];

export default function CustomerConnection({ className }: DeliveryDetailsProps) {
    const [values, setValues] = useState<string[]>([]);
  return (
    <>

        <WidgetCard
      title="Customer Connections"
      description="select a field to see connections with other customers"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
    >
   <div className="mt-5">
   <HorizontalFormBlockWrapper
        title="Customer Connections of johnny.doe1"
        description="Find connections based on :"
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <CheckboxGroup
            values={values}
            setValues={setValues}
            className="flex flex-col"
          >
            <Checkbox
              name="app_notification"
              label="IP address"
              value="104.101.103.255"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium !text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="104.101.103.255"
            />
            <Checkbox
              name="app_notification"
              label="Phone"
              value="1593572846"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="1593572846"
            />
            <Checkbox
              name="app_notification"
              label="User address"
              value="azerty123456"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="azerty123456"
            />
             <Checkbox
              name="app_notification"
              label="Password hash"
              value="azerty123456"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="azerty123456"
            />
             <Checkbox
              name="app_notification"
              label="Browser hash"
              value="12345678"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="1234567"
            />
              <Checkbox
              name="app_notification"
              label="Device ID"
              value="98654321"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="98654321"
            />
            <Checkbox
              name="app_notification"
              label="Device hash"
              value="98654321azert"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="98654321azert"
            />
              <Checkbox
              name="app_notification"
              label="cookie hash"
              value="98654321azert"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="98654321azert"
            />
            <Checkbox
              name="app_notification"
              label="Email address"
              value="test@gmail.com"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="test@gmail.com"
            />
          </CheckboxGroup>
        </div>
      </HorizontalFormBlockWrapper>

   </div>
    
      </WidgetCard>
    </>
   
  );
}
