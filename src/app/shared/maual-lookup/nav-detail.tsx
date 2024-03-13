
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';
import { Tab } from 'rizzui';
import InvoiceDetails from '@/app/shared/logistics/shipment/details/invoice-details';
import TrackingHistoryTable from '@/app/shared/logistics/shipment/details/tracking-history';
import ShippingDetails from '@/app/shared/logistics/shipment/details/shipping-details';
import EmailLookup from './lookup/email-lookup';
import NameLookup from './lookup/name-lookup';
import PhoneLookup from './lookup/phone-lookup';
import IpLookup from './lookup/ip-lookup';
import TransactionnumberLookup from './lookup/transactionnumber-lookup';
// import CustomerDetails from './details/customer-detail';
// import SummaryPage from './details';
// import ActivityHistoryTable from './activity/activity-history';
// import CustomerConnection from './customerconnection';

interface FormNavProps {
    className?: string;
  }
export default function ManualNav({ className }: FormNavProps) {

    return (
      <div
        className={cn(
          'sticky top-[68px] z-20 border-b border-gray-300  bg-white py-0 font-medium text-gray-500 @2xl:top-[72px] 2xl:top-20 dark:bg-gray-50',
          className
        )}
      >
        {/* <SimpleBar> */}
          {/* <div className="inline-grid grid-flow-col gap-5 md:gap-7 lg:gap-10"> */}
          <Tab>
      <Tab.List className="inline-grid grid-flow-col gap-5 md:gap-7 lg:gap-10">
        <Tab.ListItem>Name</Tab.ListItem>
        <Tab.ListItem>Email</Tab.ListItem>
        <Tab.ListItem>Phone</Tab.ListItem>
        <Tab.ListItem>IP</Tab.ListItem>
        <Tab.ListItem>Transaction N°</Tab.ListItem>

     
      </Tab.List>
        <Tab.Panels >
        <Tab.Panel>
        <NameLookup/>
         
        </Tab.Panel>
        <Tab.Panel>
        <EmailLookup/>
        </Tab.Panel>
        <Tab.Panel>
           <PhoneLookup/>
        </Tab.Panel>
        <Tab.Panel>
           <IpLookup/>
        </Tab.Panel>
        <Tab.Panel>
           <TransactionnumberLookup/>
        </Tab.Panel>

      </Tab.Panels>
          
   
    </Tab>
      
      </div>
    );
  }