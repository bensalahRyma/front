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

import TrackingHistoryTable from '@/app/shared/logistics/shipment/details/tracking-history';
import DetailNav from './nav-detail';
import { counstomersData } from '@/data/customer-data';
// const MAP_STEP_TO_COMPONENT = {
//   [formParts.summary]: InvoiceDetails ,
//   [formParts.activity]: TrackingHistoryTable,
//   [formParts.customer]:ShippingDetails ,
//   [formParts.analystlog]: Addresses,

// };
export default function CustomerDetail() {
  const params = useParams();
  const { layout } = useLayout();
  const customer =
  counstomersData.find(
      (item) => item.id === params.id
    ) ?? counstomersData[0];
useEffect(()=>{
 console.log("--customer",customer);
 
},[])
  return (
    <div className="@container">
 
      <DetailNav
        className={cn(
          layout === LAYOUT_OPTIONS.BERYLLIUM && 'z-[999] 2xl:top-[72px]'
        )}
      />

    </div>
  );
}
