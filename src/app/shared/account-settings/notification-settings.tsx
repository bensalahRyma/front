'use client';

import { useState } from 'react';
import HorizontalFormBlockWrapper from '@/app/shared/account-settings/horiozontal-block';
import {
  Button,
  Text,
  Switch,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
} from 'rizzui';
import WidgetCard from '@/components/cards/widget-card';

const generalOptions = [
  {
    title: 'I’m mentioned in a message',
  },
  {
    title: 'Someone replies to any message',
  },
  {
    title: 'I’m assigned a task',
  },
  {
    title: 'A task is overdue',
  },
  {
    title: 'A task status is updated',
  },
];

const summaryOptions = [
  {
    title: 'Daily summary',
  },
  {
    title: 'Weekly summary',
  },
  {
    title: 'Monthly summary',
  },
  {
    title: 'Quaterly summary',
  },
];

export default function NotificationSettingsView() {
  const [values, setValues] = useState<string[]>([]);
  const [value, setValue] = useState('');
  const options = [
    { label: 'Review', value: 'review' },
    { label: 'Review', value: 'review' },
  
   
  ];
  const [value2, setValue2] = useState(null);
  const [answer, setAnswer] = useState<string>('');
  
  // Gérer le changement de réponse
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  return (
    <div className="@container">
       <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
       <WidgetCard
    title=""
    // description={}
    titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
    descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
    className={""}
  >
      <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Transactions"
        titleClassName="text-xl font-semibold"
        description=""
      />
     
      <HorizontalFormBlockWrapper
        title="Transaction notification"
        description="These are notifications for comments on your posts and replies to your comments."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <Switch
            label="Turned off"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
         
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Notifications trigger"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
        <RadioGroup
            value={value}
            setValue={setValue}
            className="justify-center space-x-4 space-y-4"
          >
            <div className="flex w-full flex-col divide-slate-300 md:w-[500px]">
              <Radio
                name="reminders"
                label="Do not notify me"
                value="do_not_notify"
                className="mb-5"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
              />
              <Radio
                name="reminders"
                label="Important reminders only"
                value="important_only"
                className="mb-5"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
                helperClassName="text-gray-500 text-sm mt-3 ms-8"
                helperText="Only notify me if the reminder is tagged as important."
              />
            
            </div>
          </RadioGroup>
        </div>
        <div className="col-span-2">
     
     <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">State</label>
      <Select
   className="px-3 py-2 w-full"
   options={options}
   value={value2}
   onChange={setValue2}
 />
     </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Number of transactions"
        description="These are notifications to remind you of updates you might have missed."
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
    
      </WidgetCard>
      <WidgetCard
    title=""
    // description={}
    titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
    descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
    className={""}
  >
      <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Applied Rules"
        titleClassName="text-xl font-semibold"
        description="Select when and how you will be notified."
      />
     
      <HorizontalFormBlockWrapper
        title="Applied rule notification"
        description="These are notifications for comments on your posts and replies to your comments."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <Switch
            label="Turned off"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
       
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Rules"
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
              label="News and updates"
              value="news_updates"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium !text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="News about product and feature updates."
            />
            <Checkbox
              name="app_notification"
              label="Tips and tutorials"
              value="tips_tutorials"
              className="mb-5"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="Tips on getting more out of Untitled."
            />
          </CheckboxGroup>
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Notification frequency"
        description="These are notifications to remind you of updates you might have missed."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
        <RadioGroup
            value={value}
            setValue={setValue}
            className="justify-center space-x-4 space-y-4"
          >
            <div className="flex w-full flex-col divide-slate-300 md:w-[500px]">
              <Radio
                name="reminders"
                label="Do not notify me"
                value="do_not_notify"
                className="mb-5"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
              />
              <Radio
                name="reminders"
                label="Important reminders only"
                value="important_only"
                className="mb-5"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
                helperClassName="text-gray-500 text-sm mt-3 ms-8"
                helperText="Only notify me if the reminder is tagged as important."
              />
            
            </div>
          </RadioGroup>
        </div>
        <div className="col-span-2">
     
     <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">Frequency</label>
      <Select
   className="px-3 py-2 w-full"
   options={options}
   value={value2}
   onChange={setValue2}
 />
     </div>
      </HorizontalFormBlockWrapper>
    
      </WidgetCard>
      <WidgetCard
    title=""
    // description={}
    titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
    descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
    className={""}
  >
      <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="AML list hits"
        titleClassName="text-xl font-semibold"
        description="Select when and how you will be notified."
      />
     
      <HorizontalFormBlockWrapper
        title="Sanctions"
        description="These are notifications for comments on your posts and replies to your comments."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <Switch
            label="Turned off"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
        {/* <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">Frequency</label> */}
      <Select
   className="px-3 py-2"
   options={options}
   value={value2}
   onChange={setValue2}
 />
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Crime list"
        description="These are notifications for comments on your posts and replies to your comments."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <Switch
            label="Turned off"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
        {/* <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">Frequency</label> */}
      <Select
   className="px-3 py-2"
   options={options}
   value={value2}
   onChange={setValue2}
 />
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="PEP list"
        description="These are notifications for comments on your posts and replies to your comments."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <Switch
            label="Turned off"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
        {/* <label className="mb-1 font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">Frequency</label> */}
      <Select
   className="px-3 py-2"
   options={options}
   value={value2}
   onChange={setValue2}
 />
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Watchlist"
        description="These are notifications for comments on your posts and replies to your comments."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <Switch
            label="Turned off"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
      
      <Select
   className="px-3 py-2"
   options={options}
   value={value2}
   onChange={setValue2}
 />
        </div>
      </HorizontalFormBlockWrapper>
      </WidgetCard>
       </div>
      
    </div>
  );
}

const options = ['None', 'In-app', 'Email'];

function ButtonGroup({ onChange }: { onChange: (option: string) => void }) {
  const [selected, setSelected] = useState<string>();
  function handleOnClick(option: string) {
    setSelected(option);
    onChange && onChange(option);
  }

  return (
    <div className="inline-flex gap-1">
      {options.map((option) => (
        <Button
          key={option}
          variant={selected === option ? 'solid' : 'outline'}
          onClick={() => handleOnClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
