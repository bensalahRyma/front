
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';
import { Tab } from 'rizzui';
import General from './general';
import ListDelivery from './list-delivery';
import { useState } from 'react';
import DeliveryDetail from '../delivery/deliveryDetail/delivery-detail';



interface FormNavProps {
    className?: string;
  }
export default function DeliveryNav({ className }: FormNavProps) {
    const [activeTab, setActiveTab] = useState<number>(0); // État local pour suivre l'onglet actif

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
      <Tab.ListItem onClick={() => setActiveTab(0)}>General</Tab.ListItem>
          <Tab.ListItem onClick={() => setActiveTab(1)}>List</Tab.ListItem>
          <Tab.ListItem onClick={() => setActiveTab(2)}>Delivery Company Detail</Tab.ListItem>
     
      </Tab.List>
        <Tab.Panels >
        <Tab.Panel>
            <General/>
        </Tab.Panel>
        <Tab.Panel>
            <ListDelivery 
            //onSelectDetail={() => setActiveTab(2)} 
            />
        </Tab.Panel>
        <Tab.Panel>
            <DeliveryDetail/>
        </Tab.Panel>
       
      </Tab.Panels>
          
   
    </Tab>
      
      </div>
    );
  }