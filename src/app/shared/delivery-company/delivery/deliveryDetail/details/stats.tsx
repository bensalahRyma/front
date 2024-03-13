'use client';

import WidgetCard from '@/components/cards/widget-card';
import { toCurrency } from '@/utils/to-currency';
import { Avatar, Title, Text, Progressbar, Badge } from 'rizzui';
import cn from '@/utils/class-names';
import TrendingUpIcon from '@/components/icons/trending-up';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  ComposedChart,
  XAxis,
  Bar,
  LabelList,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { formatNumber } from '@/utils/format-number';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import { useParams } from 'next/navigation';
import { counstomersData } from '@/data/customer-data';
import { useEffect, useState } from 'react';
import { DeliveryCompanyData } from '@/data/delivery-company';
import DropdownAction from '@/components/charts/dropdown-action';
interface SectorOption {
  value: string; 
  label: string; 
}

// Define an interface for the props of the dropdown component
interface SectorDropdownProps {
  options: SectorOption[]; 
  onChange: (selectedOption: SectorOption | null, searchTerm?: string) => void; 
}
const viewOptions = [
  {
    value: 'Region',
    label: 'Region',
  },
  {
    value: 'Sector',
    label: 'Sector',
  },
  {
    value: 'All',
    label: 'All',
  },
];
export default function Stats({ className }: { className?: string }) {
  const now = 60;
  const params = useParams();
  const  id = localStorage.getItem("deliveryId") 
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const deliverycompany =
  DeliveryCompanyData.find(
      (item) => item.id === id
    ) ?? DeliveryCompanyData[0];
useEffect(()=>{
 console.log("deliveryCompanyNames",deliveryCompanyNames);
 console.log("__data",typeof(deliverycompany));
 
},[])
useEffect(() => {
  const storedSector = localStorage.getItem('selectedSector');
  setSelectedSector(storedSector || '');
}, [id]);

function handleChange(viewType: string) {
  console.log('viewType', viewType);
}

const deliveryCompanyNames = DeliveryCompanyData.map(company => company.name);
  return (
    <WidgetCard
      title="Statistic"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
      action={
        <DropdownAction
          options={viewOptions}
          onChange={handleChange}
          dropdownClassName="!z-1"
        />
      }
    >
   
      <div className="  ">

        <div className="mb-4 flex items-center justify-between border-b border-muted pb-4 font-medium last:mb-0 last:border-0 last:pb-0">
        {/* <Progressbar value={75} size="xl" label="75%"  color="success"/> */}
        </div>
      
          
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                    Total Orders
                </Text>
                </div>
                <Text as="span">{[deliverycompany][0]?.totalOrders}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                    Problematic Orders
                </Text>
                </div>
                <Text as="span">{[deliverycompany][0]?.problematicOrders}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                    Total Frauds
                </Text>
                </div>
                <Text as="span">{[deliverycompany][0]?.totalFrauds}</Text>
            </div>
            <div
            className="mb-4 flex items-center justify-between  pb-4 last:mb-0 last:border-0 last:pb-0"
            >
                <div className="flex items-center justify-start gap-2">
                <Text
                    as="span"
                    className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                    Type of Fraud
                </Text>
                </div>
                <Text as="span">{[deliverycompany][0]?.typesOfFrauds[0]}</Text>
            </div>
          

    
      </div>
    </WidgetCard>
  );
}

