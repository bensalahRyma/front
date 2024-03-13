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


import { useParams } from 'next/navigation';
import { useLayout } from '@/hooks/use-layout';
import { DeliveryCompanyData } from '@/data/delivery-company';
import { useEffect } from 'react';

import cn from '@/utils/class-names';
import { LAYOUT_OPTIONS } from '@/config/enums';
import { DeliveryStatus } from './delivery-status';
import ProblematicOrder from './problematic-order';
import ShipmentTableWidget from './shipment-table';



const thisMonth = dayjs(new Date()).format('MMMM YYYY');

export default function General() {
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

      <div className="grid grid-cols-12 gap-6 3xl:gap-8">

       <DeliveryStatus className="col-span-full @3xl:col-span-full @[1429px]:col-span-8" />
       <ProblematicOrder    className="col-span-full @4xl:col-span-6 @7xl:col-span-4" />


      </div>
    </div>
  );
}
