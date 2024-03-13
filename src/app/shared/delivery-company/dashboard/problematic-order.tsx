'use client';

import { Title, Text, Select } from 'rizzui';
import WidgetCard from '@/components/cards/widget-card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import React, { useState } from 'react';
import { DeliveryCompanyData } from '@/data/delivery-company';
import { DatePicker } from '@/components/ui/datepicker';
import DateFiled from '@/components/controlled-table/date-field';
import { getDateRangeStateValues } from '@/utils/get-formatted-date';

const COLORS = ['#B92E5D', '#6D1A36', '#D68585', '#1C4DBD', '#FFE497', '#FFD1D1','#BFE5EF'];
const options = [
    { label: 'Specific period ', value: 'specific' },
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarter', value: 'quarter' },
    { label: 'Yearly', value: 'yearly' },
    { label: 'All', value: 'all' },

  ];


export default function ProblematicOrder({
  className,
}: {
  className?: string;
}) {
    const [period, setPeriod] = useState<string>('all');

    // Filtrer les données en fonction de la période sélectionnée
    const filteredData = DeliveryCompanyData.map(company => ({
      ...company,
      problematicOrdersByDate: period === 'all' ? company.problematicOrdersByDate : {}
      // Vous devrez ajouter une logique pour filtrer les données selon la période sélectionnée
    }));
const getTotalProblematicOrders = (companyIndex: number) => {
    const company = DeliveryCompanyData[companyIndex];
    return Object.values(company.problematicOrdersByDate).reduce((acc, curr) => acc + curr, 0);
  };
  const [startDate, setStartDate] = React.useState<Date>();

  const [starRangetDate, setStartRangeDate] = React.useState<Date | null>(null);
  const [endRangeDate, setEndRangeDate] = React.useState<Date | null>(null);
  const handleRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartRangeDate(start);
    setEndRangeDate(end);
  };
  return (
    <WidgetCard title={'Annual Problematic Orders'} rounded="lg" className={className}>
      <div className="h-[373px] w-full @sm:py-3">

      {/* <Select
      label="Select"
      options={options}
      value={period}
      onChange={setPeriod}
    /> */}
  <DatePicker
        selected={starRangetDate}
        onChange={handleRangeChange}
        startDate={starRangetDate}
        endDate={endRangeDate}
        monthsShown={2}
        placeholderText="Select Date in a Range"
        selectsRange
        inputProps={{
          clearable: true,
          onClear: () => {
            setStartRangeDate(null);
            setEndRangeDate(null);
          },
        }}
      />
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className="[&_.recharts-sector:focus]:outline-none">
            <Pie
              data={DeliveryCompanyData}
              innerRadius={100}
              outerRadius={140}
              fill="#6D1A36"
              stroke="rgba(0,0,0,0)"
              dataKey="fraudscore"
            >
              {DeliveryCompanyData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip  />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="  ">
        {DeliveryCompanyData.map((item, index) => (
          <div
            key={item.name}
            className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-start">
              <span
                className="me-2 h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <Text
                as="span"
                className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                {item.name}
              </Text>
            </div>
            <Text as="span">{item.fraudscore}%</Text>
          </div>
        ))}
      </div>

    </WidgetCard>
  );
}
