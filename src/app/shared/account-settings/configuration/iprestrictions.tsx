import { Controller, useFormContext } from 'react-hook-form';
import { Input, Checkbox, Button, Select, CheckboxGroup, Switch } from 'rizzui';
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

export default function Iprestrictions({ className }: FormSenderInfoProps) {
    const options = [
        { label: 'Review', value: 'review' },
        { label: 'Review', value: 'review' },
      
       
      ];
    //   const [value, setValue] = useState(null);
      const [answer, setAnswer] = useState<string>('');
  
      // Gérer le changement de réponse
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
      };
      const [values, setValues] = useState<string[]>([]);
      const [value, setValue] = useState('');
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
        title="Ip Restrictions"
        titleClassName="text-xl font-semibold"
        description=""
      />
   <div className="mt-5">

    
    <HorizontalFormBlockWrapper
        title="API restriction for API usage"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
        <Switch
            label="Turned off"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
        <Input
           label="IP addresses"
           type="text"
           value={answer}
           onChange={handleChange}
           className=" px-3 py-2 w-full"
         />
    
        </div>
      </HorizontalFormBlockWrapper>
    
   </div>
  

   {/* <Button rounded="pill" className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</Button> */}
  </WidgetCard>

  );
}
