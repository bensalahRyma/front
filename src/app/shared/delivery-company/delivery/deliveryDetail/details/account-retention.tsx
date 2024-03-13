'use client';

import { Title, Text, Input } from 'rizzui';
import cn from '@/utils/class-names';
import WidgetCard from '@/components/cards/widget-card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import DropdownAction from '@/components/charts/dropdown-action';
import { DeliveryCompanyData } from '@/data/delivery-company';
import React, { useEffect, useState } from 'react';
import MultiSelector from './multiselector';
import Select from 'react-select';
import { DatePicker } from '@/components/ui/datepicker';
const data = [
  {
    day: 'Mon',
    expansions: 2,
    cancellations: 13,
  },
  {
    day: 'Tue',
    expansions: 27,
    cancellations: 39,
  },
  {
    day: 'Thu',
    expansions: 21,
    cancellations: 32,
  },
  {
    day: 'Wed',
    expansions: 45,
    cancellations: 25,
  },
  {
    day: 'Fri',
    expansions: 36,
    cancellations: 25,
  },
  {
    day: 'Sun',
    expansions: 50,
    cancellations: 31,
  },
];
const options = [
  { label: 'Sector', value: 'sector' },
  { label: 'Time frame', value: 'timeframe' },
  { label: 'Problematic Orders', value: 'problematicorder' },
  { label: 'Fraud', value: 'fraud' },

];

export default function AccountRetention({
  className,
}: {
  className?: string;
}) {
  function handleChange(viewType: any) {
    console.log('viewType', viewType);
  }

  const [value, setValue] = useState(options[0]);
const deliveryCompanyNames = DeliveryCompanyData.map(company => company.name);
const viewOptions = deliveryCompanyNames.map(name => ({
  value: name,
  label: name,
}))
type SelectedOption = { label: string; value: string };


  const [isSectorSelected, setIsSectorSelected] = useState(false);
  const [isTimeFrameSelected, setIsTimeFrameSelected] = useState(false);
  const [startDate, setStartDate] = React.useState<Date>();
  const [selectedOptions, setSelectedOptions] = useState<{ label: string, value: string }[]>([]);

  function handleSelect(data:any) {
    console.log("__selected__data", data);
    
    setSelectedOptions(data);
  
  }

useEffect(() => {
  const containsSector = selectedOptions.some(option => option.value === "sector");
  setIsSectorSelected(containsSector);
  const containsTimeFrame = selectedOptions.some(option => option.value === "timeframe");
  setIsTimeFrameSelected(containsTimeFrame)
}, [selectedOptions]);

  return (

    <WidgetCard
      title={'Delivery Company'}
      description={''}
      rounded="lg"
      descriptionClassName="text-gray-500 mt-1.5"
      className={cn('grid grid-cols-1', className)}
      action={
        <>
         <div className="flex items-center space-x-4">
         {/* <DropdownAction
          options={viewOptions}
          onChange={handleChange}
          dropdownClassName="!z-0"
        /> */}
     <Select
        isMulti
        name="colors"
        options={viewOptions}
        className="basic-multi-select"
        classNamePrefix="Delivery Company"
        onChange={handleChange}
    
      />
        <Select
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select filters option"
        onChange={handleSelect}
    
      />
     
      
     {isSectorSelected==true ? (
          <Input className="w-full @[42rem]:w-auto @[70rem]:w-80 " type="search" placeholder="Search for sector..." />
     
      ):(<></>)}
         {isTimeFrameSelected? (
        <div>
 
 <DatePicker
      className="w-full @[42rem]:w-auto @[70rem]:w-80 " 
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      placeholderText="Select Date"
    />
        </div>
      ):(<></>)}
         </div>
       
        </>
       
    
      }
    >
      
      <div className="h-72 w-full @sm:pt-3 @lg:pt-4 @xl:pt-5">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              left: -30,
            }}
          >
            <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
            <XAxis dataKey="day" tickLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            {/* <Area
              type="natural"
              dataKey="expansions"
              stroke="#5451FD"
              fill="#5451FD"
              strokeWidth={2.3}
              fillOpacity={0.05}
            /> */}
            <Area
              type="natural"
              dataKey="cancellations"
              stroke="#00EEFD"
              fill="#00EEFD"
              strokeWidth={2.3}
              fillOpacity={0.05}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    
    </WidgetCard>
  );
}
