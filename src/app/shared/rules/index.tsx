import AccountRule from "./account-rule";
import CustomerRule from "./customer-rule";
import DeliveryRule from "./delivery-rule";
import IPRule from "./ip-rule";
import OrderRule from "./order-rule";
import PhoneRule from "./phone-rule";
import SocialRule from "./social-rule";

export default function Rule() {
    return (
      <>
    
    <div className="@container">
      <div  className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
     
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
         <OrderRule className="col-span-full @3xl:col-span-full @[1429px]:col-span-full"/>
       <DeliveryRule className="col-span-full @3xl:col-span-full @[1429px]:col-span-full"/>
      <CustomerRule className="col-span-full @3xl:col-span-full @[1429px]:col-span-full"/>
      <SocialRule className="col-span-full @3xl:col-span-full @[1429px]:col-span-full"/>
      <AccountRule className="col-span-full @3xl:col-span-full @[1429px]:col-span-full"/>
      <PhoneRule className="col-span-full @3xl:col-span-full @[1429px]:col-span-full"/>
      <IPRule className="col-span-full @3xl:col-span-full @[1429px]:col-span-full"/>
     </div>
   
 
      </div>

    
        </div>
      </>
    );
  }
  