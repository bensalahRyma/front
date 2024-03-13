'use client';

import { Title, Text } from 'rizzui';
import WidgetCard from '@/components/cards/widget-card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'REFUND ACCEPTED', value: 11 },
  { name: 'LEGIT RETURN', value: 24 },
  { name: 'REFUND NOT ACCEPTED', value: 9 },
  { name: 'REFUND PENDING', value: 12 },
  { name: 'DELIVERED', value: 126 },
  { name: 'RED FLAG', value: 8 },
  { name: 'SUSPICIOUS REFUND ACCEPTED', value: 10 },
];
const COLORS = ['#B92E5D', '#6D1A36', '#D68585', '#1C4DBD', '#FFE497', '#FFD1D1','#BFE5EF'];

export default function TopTrafficSource({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard title={'Orders Status'} rounded="lg" className={className}>
      <div className="h-[373px] w-full @sm:py-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className="[&_.recharts-sector:focus]:outline-none">
            <Pie
              data={data}
              innerRadius={100}
              outerRadius={140}
              fill="#6D1A36"
              stroke="rgba(0,0,0,0)"
              dataKey="value"
            >
              {data.map((_, index) => (
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
        {data.map((item, index) => (
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
            <Text as="span">{item.value}%</Text>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-2 gap-6 @md:grid-cols-4">
        {data.map((item, index) => (
          <div key={item.name} className="text-center">
            <div className="mb-1.5 flex items-center justify-center">
              <span
                className="me-2 h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <Text as="span" className=" whitespace-nowrap">
                {item.name}
              </Text>
            </div>
            <Title as="h5">{item.value}</Title>
          </div>
        ))}
      </div> */}
    </WidgetCard>
  );
}
