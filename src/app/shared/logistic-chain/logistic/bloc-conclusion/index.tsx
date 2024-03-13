import WidgetCard from '@/components/cards/widget-card';
import cn from '@/utils/class-names';
import React from 'react'
import Conclusion from './conclusion';
type ConclusionWidgetProps = {
    title: string;
    description: string;
    className?: string;
  };

export default function BlocConclusion({
    title,
    description,
    className,
}: ConclusionWidgetProps) {
  return (
    <WidgetCard
    title={
      <div className="flex justify-between items-center">
      
      </div>
    }
      description={description}
      descriptionClassName="mb-6 mt-2"
      className={cn(className)}
    >
         <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
      <Conclusion/>
         </div>

    </WidgetCard>
  )
}
