'use client';

import { Text } from 'rizzui';
import cn from '@/utils/class-names';
import WidgetCard from '@/components/cards/widget-card';
import CircleProgressBar from '@/components/charts/circle-progressbar';

const data = [
  {
    name: 'Online Presence Score',
    value: '28/100',
    percentage: 28,
    color: '#3872FA',
  },
  {
    name: 'Mail Analysis Result',
    value: '48/100',
    percentage: 48,
    color: '#10b981',
  },
  {
    name: 'Phone Analysis Result',
    value: '0/100',
    percentage: 0,

    color: '#f1416c',
  },
  {
    name: 'IP Address Analysis Result',
    value: '8/100',
    percentage: 8,

    color: '#f1416c',
  },
];

export default function DispatchPlanning({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard
      title=""
      description={
        <p>
          {/* <span className="font-lexend text-xl font-semibold text-gray-900 2xl:text-2xl">
            56,000
          </span>{' '}
          Truck Loads */}
        </p>
      }
      titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
      descriptionClassName="mt-2"
      headerClassName="col-span-full"
      className={cn(
        'relative grid grid-cols-2 place-content-between gap-5 pb-0 @2xl:gap-8 @3xl:gap-5 lg:pb-0',
        className
      )}
    >
      <div className="col-span-full grid w-full grid-cols-4 justify-around gap-5 @2xl:gap-12 @7xl:gap-8 @[1429px]:gap-4 @[1553px]:gap-8">
        {data.map((item) => (
          <div key={item.name} className={cn('grid gap-6 text-center')}>
               <div  className="mx-auto mb-5 mt-2 w-full max-w-[180px] sm:mb-7 xl:mb-8 2xl:mb-10 2xl:mt-4">
            <CircleProgressBar
              percentage={item.percentage}
              size={140}
              stroke="#f0f0f0"
               strokeWidth={7}
              progressColor={item.color}
              // useParentResponsive={true}
              label={
                <Text className="font-lexend text-sm font-bold text-gray-900 2xl:text-base dark:text-gray-700">
                  {item.value}
                </Text>
              }
              strokeClassName="dark:stroke-gray-200"
            />
            <Text style={{ marginTop: '40px' }} className="text-xs font-semibold text-gray-900 @md:text-sm @7xl:text-base dark:text-gray-700">
              {item.name}
            </Text>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="col-span-full -mx-5 rounded-b-lg bg-gray-50 p-5 text-sm lg:-mx-7 lg:p-7 2xl:text-base">
        <p>Vehicle Assignment Pending - 1,000 </p>
      </div> */}
    </WidgetCard>
  );
}
