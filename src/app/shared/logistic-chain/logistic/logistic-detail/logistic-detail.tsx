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
// const MAP_STEP_TO_COMPONENT = {
//   [formParts.summary]: InvoiceDetails ,
//   [formParts.activity]: TrackingHistoryTable,
//   [formParts.customer]:ShippingDetails ,
//   [formParts.analystlog]: Addresses,

// };
export default function LogisticDetails() {
  const params = useParams();
  const { layout } = useLayout();
  const transaction =
  transactions.find(
      (item) => item.id === params.id
    ) ?? transactions[0];
useEffect(()=>{
 console.log("--transaction",transaction);
 
},[])
  return (
    <div className="@container">
      {/* <Title>detail transaction</Title> */}
      <DetailNav
        className={cn(
          layout === LAYOUT_OPTIONS.BERYLLIUM && 'z-[999] 2xl:top-[72px]'
        )}
      />
      {/* <div  className={cn(
            'relative z-[19] [&_label.block>span]:font-medium',
         
          )}>
      <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
            {Object.entries(MAP_STEP_TO_COMPONENT).map(([key, Component]) => (
              <Element
                key={key}
                name={formParts[key as keyof typeof formParts]}
              >
                {<Component className="pt-7 @2xl:pt-9 @3xl:pt-11" />}
              </Element>
            ))}
          </div>
      </div>
          */}
    </div>
  );
}
