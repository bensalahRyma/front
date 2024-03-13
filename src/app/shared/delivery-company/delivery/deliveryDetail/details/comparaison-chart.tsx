'use client';

import { Title, Text } from 'rizzui';
import WidgetCard from '@/components/cards/widget-card';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import {
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Legend,
} from 'recharts';
import { DeliveryCompanyData } from '@/data/delivery-company';

const data = [
  {
    day: 'Mon',
    mobile: 32,
    desktop: 100,
    others: 100,
  },
  {
    day: 'Tue',
    mobile: 90,
    desktop: 50,
    others: 50,
  },
  {
    day: 'Thu',
    mobile: 86,
    desktop: 63,
    others: 63,
  },
  {
    day: 'Wed',
    mobile: 99,
    desktop: 50,
    others: 50,
  },
  {
    day: 'Fri',
    mobile: 56,
    desktop: 90,
    others: 90,
  },
  {
    day: 'Sun',
    mobile: 60,
    desktop: 85,
    others: 85,
  },
];

const deviceData = [
  { name: 'Mobile', value: 9690 },
  { name: 'Desktop', value: 6780 },
  { name: 'Others', value: 2150 },
];
const COLORS = ['#422F8A', '#b5adec', '#d4dcfa'];

export default function ComparaisonChart({ className }: { className?: string }) {
  return (
    <WidgetCard
      title={'Comparison of different periods and different sectors '}
      description={
        ''
      }
      descriptionClassName="text-gray-500 mt-0.5 leading-relaxed"
      rounded="lg"
      // action={}
      className={className}
    >
      <div className="mb-2.5 mt-4 flex items-start">
        
      </div>

      <div className="h-80 w-full @sm:pt-3 @lg:pt-8">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
        data={DeliveryCompanyData[0].comparisonChartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Legend />
        {DeliveryCompanyData[0].comparisonChartData.map((entry, index) => (
          <Bar
            key={index}
            dataKey="orders"
            name={`${entry.region} - ${entry.sector}`} 
            fill={`rgba(${index * 50}, ${index * 100}, ${index * 150}, 0.5)`}
          />
        ))}
      </BarChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
