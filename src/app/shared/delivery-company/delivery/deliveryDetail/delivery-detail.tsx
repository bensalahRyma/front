'use client';

import { useParams } from 'next/navigation';

// import { modernProductsGrid } from '@/data/shop-products';
import { generateSlug } from '@/utils/generate-slug';
import { transactions } from '@/data/transactions-data';
import { useEffect } from 'react';
import { Title } from 'rizzui';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';

import InvoiceDetails from '@/app/shared/logistics/shipment/details/invoice-details';
import ShippingDetails from '@/app/shared/logistics/shipment/details/shipping-details';
import Addresses from '@/app/shared/logistics/shipment/details/addresses';
import cn from '@/utils/class-names';

import { DeliveryCompanyData } from '@/data/delivery-company';
import DetailNav from './nav-detail';
import DeliveryDetails from './details/delivery-table';
import FraudScore from './details/fraud-score';
import Stats from './details/stats';
// import AccountRetention from '@/app/shared/analytics-dashboard/account-retention';
import ComparaisonChart from './details/comparaison-chart';
import AccountRetention from './details/account-retention';
// const MAP_STEP_TO_COMPONENT = {
//   [formParts.summary]: InvoiceDetails ,
//   [formParts.activity]: TrackingHistoryTable,
//   [formParts.customer]:ShippingDetails ,
//   [formParts.analystlog]: Addresses,

// };
export default function DeliveryDetail() {
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
          <div  className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
          <DeliveryDetails/>
          <div className="grid grid-cols-12 gap-6 3xl:gap-8">
      <FraudScore className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
      <Stats className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
     <ComparaisonChart  className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/> 
      </div>
      <AccountRetention className="" />
          </div>
   
    </div>
  );
}
