'use client';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import WidgetCard from '@/components/cards/widget-card';
import { Accordion, Button, Progressbar, Switch, Text } from 'rizzui';
import { useMedia } from '@/hooks/use-media';
import { toCurrency } from '@/utils/to-currency';
import { ChangeEvent, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import cn from '@/utils/class-names';
interface DataItem {
    id: number;
    rule: string;

    status: boolean | string;
  }
interface AccordionItemProps {
    item: DataItem;
  }
  
  function AccordionItem({ item }: AccordionItemProps) {

    const [data, setData] = useState<DataItem[]>([
        { id: 1, rule: 'Is it the first lost/problematic transaction of the customer?',status:true},
        { id: 2, rule:  'Is this transaction in the average of history of orders?',status:true },
        { id: 4, rule:   'Combination of suspicious factors',status:false  },
      ]);
      const [open, setOpen] = useState(false);
      const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>, item: DataItem) => {
        const checked = e.target.checked;
        const updatedData = data.map((d) =>
          d.id === item.id ? { ...d, status: checked } : d
        );
        setData(updatedData);
      };
      const handleToggleStatus = (item: DataItem) => {
        const updatedData = data.map((d) =>
          d.id === item.id ? { ...d, status: !d.status } : d
        );
        setData(updatedData);
      };
    
      const handleNumericStatusChange = (newValue: string, item: { id: number }) => {
        const updatedData = data.map((d) =>
          d.id === item.id ? { ...d, status: newValue } : d
        );
        setData(updatedData);
      };
    return (
      <Accordion
        key={item.id}
        className="mx-8 border-b last-of-type:border-b-0"
        //onChange={(isOpen) => setOpen(isOpen)}
        defaultOpen={false}
      >
<Accordion.Header>
        <div className="flex w-full cursor-pointer items-center justify-between py-5 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          <div className="flex w-full items-start justify-between w-1/3">{item.rule}</div>
          <div className="w-1/3 ml-2 font-bold text-green-500 dark:text-green-400">
          {typeof item.status === 'boolean' ? (
              <span>{item.status ? 'true' : 'false'}</span>
            ) : (
              <span>{item.status}</span>
            )}
            </div>
          <div className="w-1/3 flex justify-end">
            <ChevronDownIcon
              className={cn("h-5 w-5 -rotate-90 transform transition-transform duration-300", {
                "-rotate-0": open,
              })}
            />
          </div>
        </div>
      </Accordion.Header>
        <Accordion.Body className="mb-7">
            {/* {item.status} */}
            {typeof item.status === 'boolean' ? (
               //   <Switch
            //   checked={item.status}
            //   onChange={(e) => handleSwitchChange(e, item)}
            // />
            <Button  variant="outline" onClick={() => handleToggleStatus(item)}>
            switch  {item.status ? 'false' : 'true'}
           </Button >
            
              ) : (
                <>
                  <input type="text" value={item.status} onChange={(e) => handleNumericStatusChange(e.target.value, item)} className="border border-gray-300 rounded px-2 py-1 mr-2" />
                  <button onClick={() => handleNumericStatusChange(item.status.toString(), item)} className="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
                </>
              )}
            </Accordion.Body>
      </Accordion>
    );
  }

export default function AccountRule({ className }: { className?: string }) {
  const isTablet = useMedia('(max-width: 800px)', false);
  const [data, setData] = useState<DataItem[]>([
    { id: 1, rule: 'Is it the first lost/problematic transaction of the customer?',status:true},
    { id: 2, rule:  'Is this transaction in the average of history of orders?',status:true },
    { id: 4, rule:   'Combination of suspicious factors',status:false  },
  ]);

  return (
    <WidgetCard
      title="Account Behaviour Rules :"
      // description={}
      titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
      descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
      className={className}
    >
    <div className="mt-5">
        <div className="  ">
          {data.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    
    </WidgetCard>
  );
}
