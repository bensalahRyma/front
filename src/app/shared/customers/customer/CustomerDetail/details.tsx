
import { Title } from 'rizzui';
import cn from '@/utils/class-names';
import CustomerDetails from './details/customer-detail';
import Identify from './details/identify';
import Addresses from './details/address';

import { useParams } from 'next/navigation';
import { counstomersData } from '@/data/customer-data';
import { useEffect } from 'react';
import EmailInformation from './details/email-inofrmation';
import PhoneInformation from './details/phone-information';
import IPInformation from './details/ip-information';
import Statistics from './details/statistics';
import BiggestDeal from '@/app/shared/executive/biggest-deal';
import CircleProgressBars from './details/circle-progressbars';


export default function SummaryPage() {
  const params = useParams();
  // const { layout } = useLayout();
  const customer =
  counstomersData.find(
      (item) => item.id === params.id
    ) ?? counstomersData[0];
useEffect(()=>{
 console.log("--customer",customer);
 
},[])
    return (
      <>
    
    <div className="@container">
      <div  className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
      <CustomerDetails/>
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
      <CircleProgressBars className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
      {/* <BiggestDeal className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" /> */}
      <Statistics  className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
        <Identify className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
        <Addresses className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <EmailInformation className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
        <PhoneInformation className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
        <IPInformation className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>

     </div>
   
 
      </div>

    
        </div>
      </>
    );
  }
  