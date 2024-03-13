import { Controller, useFormContext } from 'react-hook-form';
import { Input, Checkbox, Button, Select } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import { PiEnvelopeSimple } from 'react-icons/pi';
import { useState } from 'react';
import WidgetCard from '@/components/cards/widget-card';
import RangeSlider from '@/components/ui/range-slider';
import HorizontalFormBlockWrapper from '../horiozontal-block';

interface FormSenderInfoProps {
  className?: string;
}
interface QuestionProps {
    question: string;
  }
  

  const Question1: React.FC<QuestionProps> = ({ question }) => {
    const [answer, setAnswer] = useState<string>('');
  
    // Gérer le changement de réponse
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAnswer(e.target.value);
    };
  
    return (
        <div className="flex mb-4">
        <div className="w-1/2 pr-4">
          <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">{question}</label>
        </div>
        <div className="w-1/2">
          <input
            type="text"
            value={answer}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
      </div>
    );
  };
  
export default function Transaction({ className }: FormSenderInfoProps) {
    const options = [
        { label: 'Review', value: 'review' },
        { label: 'Review', value: 'review' },
      
       
      ];
      const [value, setValue] = useState(null);
  return (
    <WidgetCard
    title=""
    // description={}
    titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
    descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
    className={className}
  >
     <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Scoring settings"
        titleClassName="text-xl font-semibold"
        description=""
      />
   <div className="mt-5">
   <HorizontalFormBlockWrapper
        title="Threshold"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
     
        <RangeSlider defaultValue={[20, 60]} range   className="px-3 py-2 w-full"/>
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Email weight"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
     
        <RangeSlider defaultValue={25} color="primary"  className="px-3 py-2 w-full"/>
        </div>
      </HorizontalFormBlockWrapper>
    
      <HorizontalFormBlockWrapper
        title="IP weight"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
     
        <RangeSlider defaultValue={25} color="primary"  className="px-3 py-2 w-full"/>
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="State conflict"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
     
        <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">Approve +Decline</label>
         <Select
      className="px-3 py-2 w-full"
      options={options}
      value={value}
      onChange={setValue}
    />
        </div>
        <div className="col-span-2">
     
     <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">Approve +Decline</label>
      <Select
   className="px-3 py-2 w-full"
   options={options}
   value={value}
   onChange={setValue}
 />
     </div>
     <div className="col-span-2">
     
     <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">Approve +Decline</label>
      <Select
   className="px-3 py-2 w-full"
   options={options}
   value={value}
   onChange={setValue}
 />
     </div>
      </HorizontalFormBlockWrapper>

   </div>
  

   {/* <Button rounded="pill" className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</Button> */}
  </WidgetCard>

  );
}
