'use client';
import dayjs from 'dayjs';
import AvgDeliveryTime from '@/app/shared/logistics/dashboard/avg-delivery-time';
import ComplaintRate from '@/app/shared/logistics/dashboard/complaint-rate';
import ComplaintReason from '@/app/shared/logistics/dashboard/complaint-reason';
// import { DeliveryStatus } from '@/app/shared/logistics/dashboard/delivery-status';
import DispatchPlanning from '@/app/shared/logistics/dashboard/dispatch-planning';
import FleetStatus from '@/app/shared/logistics/dashboard/fleet-status';
import LoadingWorkflow from '@/app/shared/logistics/dashboard/loading-workflow';
import OpenSalesOrder from '@/app/shared/logistics/dashboard/open-sales-order';
import ProfitChart from '@/app/shared/logistics/dashboard/profit';
import StatCards from '@/app/shared/logistics/dashboard/stat-cards';
import TopCustomer from '@/app/shared/logistics/dashboard/top-customer';
import TopShipmentCountries from '@/app/shared/logistics/dashboard/top-shipment-countries';

import { DeliveryStatus } from './dashboard/delivery-status';
import ProblematicOrder from './dashboard/problematic-order';
import ShipmentTableWidget from './dashboard/shipment-table';
import { useParams } from 'next/navigation';
import { useLayout } from '@/hooks/use-layout';
import { DeliveryCompanyData } from '@/data/delivery-company';
import { useEffect } from 'react';
import DeliveryNav from './dashboard/delivery-nav';
import cn from '@/utils/class-names';
import { LAYOUT_OPTIONS } from '@/config/enums';



const thisMonth = dayjs(new Date()).format('MMMM YYYY');

export default function DeliveryDashboard() {
    const params = useParams();
    const { layout } = useLayout();
    const delivery =
    DeliveryCompanyData.find(
        (item) => item.id === params.id
      ) ?? DeliveryCompanyData[0];
  useEffect(()=>{
   console.log("--delivery",delivery);
   
  },[])
  return (
    <div className="@container">
              <DeliveryNav
        className={cn(
          layout === LAYOUT_OPTIONS.BERYLLIUM && 'z-[999] 2xl:top-[72px]'
        )}
      />
    
    </div>
  );
}
