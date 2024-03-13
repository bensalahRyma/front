import { Controller, useFormContext } from 'react-hook-form';
import { Input, Checkbox, Button, Select, CheckboxGroup } from 'rizzui';
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

export default function Webhook({ className }: FormSenderInfoProps) {
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
        title="Webhook settings"
        titleClassName="text-xl font-semibold"
        description=""
      />
   <div className="mt-5">

    
    <HorizontalFormBlockWrapper
        title="Webhook URL"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
        <input
           type="text"
           value={answer}
           onChange={handleChange}
           className="border border-gray-300 rounded px-3 py-2 w-full"
         />
    
        </div>
      </HorizontalFormBlockWrapper>
     <HorizontalFormBlockWrapper
        title="Webhook events"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <CheckboxGroup
            values={values}
            setValues={setValues}
            className="flex flex-col"
          >
            <Checkbox
              name="app_notification"
              label="Transaction-status update"
              value="news_updates"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium !text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="News about product and feature updates."
            />
            <Checkbox
              name="app_notification"
              label="Blacklist and whitelist actions"
              value="tips_tutorials"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="Tips on getting more out of Untitled."
            />
            <Checkbox
              name="app_notification"
              label="Custom List actions"
              value="user_research"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="Get involved in our beta testing program or participate in paid product user research."
            />
          </CheckboxGroup>
        </div>
      </HorizontalFormBlockWrapper>
   </div>
  

   {/* <Button rounded="pill" className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</Button> */}
  </WidgetCard>

  );
}
