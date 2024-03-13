
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';
import { Tab } from 'rizzui';



interface FormNavProps {
    className?: string;
  }
export default function DetailNav({ className }: FormNavProps) {

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
        <Tab.ListItem>General</Tab.ListItem>
        <Tab.ListItem>Activity</Tab.ListItem>
        <Tab.ListItem>Customer Connections</Tab.ListItem>

     
      </Tab.List>
        <Tab.Panels >
        <Tab.Panel>
       {/* <SummaryPage/> */}
        </Tab.Panel>
        <Tab.Panel>
            {/* <ActivityHistoryTable/> */}
            {/* <ShipmentListTable /> */}
        </Tab.Panel>
        <Tab.Panel>
            {/* <CustomerConnection/> */}
        </Tab.Panel>
       
      </Tab.Panels>
          
   
    </Tab>
      
      </div>
    );
  }