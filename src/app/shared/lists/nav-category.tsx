
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';
import { Tab } from 'rizzui';
import SafeCustomerPage from './safe-customer';
import BlacklistTableWidget from './BlackList';



interface FormNavProps {
    className?: string;
  }
export default function NavCategory({ className }: FormNavProps) {

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
        <Tab.ListItem>Safe Customers</Tab.ListItem>
        <Tab.ListItem>Blacklist</Tab.ListItem>
   

     
      </Tab.List>
        <Tab.Panels >
        <Tab.Panel>
       <SafeCustomerPage/>
        </Tab.Panel>
        <Tab.Panel>
          <BlacklistTableWidget title='Black List' description=''/>
            {/* <ActivityHistoryTable/> */}
            {/* <ShipmentListTable /> */}
        </Tab.Panel>
   
      </Tab.Panels>
          
   
    </Tab>
      
      </div>
    );
  }