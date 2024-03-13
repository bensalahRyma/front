import { Controller, useFormContext } from 'react-hook-form';
import { Input, Checkbox, Button, Select, Switch } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import { PiEnvelopeSimple } from 'react-icons/pi';
import { useState } from 'react';
import WidgetCard from '@/components/cards/widget-card';
import RangeSlider from '@/components/ui/range-slider';
import HorizontalFormBlockWrapper from '../account-settings/horiozontal-block';
import Link from 'next/link';
import AvatarUpload from '@/components/ui/file-upload/avatar-upload';


interface FormSenderInfoProps {
  className?: string;
}
interface QuestionProps {
    question: string;
  }
  
const profileData=[{
    name:"username",
    email:"username@gmail.com",
    role:"admin",
    access:"full Access"
}]
  
export default function PersonalSettings({ className }: FormSenderInfoProps) {
    const options = [
        { label: 'Review', value: 'review' },
        { label: 'Review', value: 'review' },
      
       
      ];
      const [value, setValue] = useState(null); 
       const [answer, setAnswer] = useState<string>('');
  
      // Gérer le changement de réponse
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
      };
  return (
    <>
      
    <WidgetCard
    title=""
    // description={}
    titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
    descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
    className={className}
  >
    {/* <Button rounded="pill" className="d-flex justify-content-end  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</Button> */}
     <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Profile"
        titleClassName="text-xl font-semibold"
        description=""
      />
    <div className="mt-5">

    
<HorizontalFormBlockWrapper
    title={(  <div className="col-span-2 flex flex-col items-center gap-4 @xl:flex-row">
    <AvatarUpload
      name="avatar"
      setValue={setValue}
    // getValues={getValues}
    //   error={errors?.avatar?.message as string}
    />
  </div>)}
    description=""
    descriptionClassName="max-w-[344px]"
  >
    <div className="col-span-2">
  
     <Input
       label="Name"
       type="text"
       value={profileData[0].name}
       onChange={handleChange}
       className=" px-3 py-2 w-full"
     />
     <Input
       label="Email"
       type="text"
       value={profileData[0].email}
       onChange={handleChange}
       className=" px-3 py-2 w-full"
     />
     <Input
       label="Role"
       type="text"
       value={profileData[0].role}
       onChange={handleChange}
       className=" px-3 py-2 w-full"
     />
     <Input
       label="Access"
       type="text"
       value={profileData[0].access}
       onChange={handleChange}
       className=" px-3 py-2 w-full"
     />

    </div>
  </HorizontalFormBlockWrapper>

</div>
  

   {/* <Button rounded="pill" className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</Button> */}
  </WidgetCard>
  <div className="mt-5">

    <div className="mb-6 rounded-lg border border-gray-300 px-4 py-3 pb-5 pt-4 sm:pb-4 sm:pt-3 md:flex md:items-center md:justify-between md:pb-3">
        <div className="grid grid-cols-[20px_1fr] gap-3 md:flex md:items-center">
        
          <p className="text-gray-500 md:flex md:items-center">
            <span className="font-medium text-gray-900">
              After deleting your account, you will lose access and all your personal data will be deleted
            </span>
            
          </p>
        </div>
        <Button size="sm" className="ml-8 mt-3 sm:mt-2 md:m-0">
         Delete my account
        </Button>
      </div>
  </div>
  <WidgetCard
    title=""
    // description={}
    titleClassName="font-normal text-gray-500 text-sm sm:text-sm 2xl:text-base font-inter"
    descriptionClassName="text-xl font-semibold text-gray-900 mt-1.5 font-lexend 2xl:text-2xl"
    className={className}
  >
     <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Security"
        titleClassName="text-xl font-semibold"
        description=""
      />
     
    <div className="mt-5">

    
<HorizontalFormBlockWrapper
    title="change your password"
    description="These are notifications for when someone tags you in a comment, post or story."
    descriptionClassName="max-w-[344px]"
  >
    <div className="col-span-2">
  
    <Link href="#" color='primary'>Changer your password</Link>

    </div>
  </HorizontalFormBlockWrapper>
  <HorizontalFormBlockWrapper
    title="Two-factor authentication (2FA)"
    description="Keep your account extra secure with a second login step"
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
</div>
  
  </WidgetCard>
    </>
    
  );
}
