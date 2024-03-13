import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import ProductDetails from '@/app/shared/ecommerce/product/product-details';
import { metaObject } from '@/config/site.config';
import TransactionDetails from '@/app/shared/transactions/transaction/transaction-detail/transaction-detail';
import InvoiceDetails from '@/app/shared/logistics/shipment/details/invoice-details';
import DeliveryDetails from '@/app/shared/logistics/shipment/details/delivery-details';
import TrackingHistory from '@/app/shared/logistics/tracking/tracking-history';
import ShippingDetails from '@/app/shared/logistics/shipment/details/shipping-details';
import Addresses from '@/app/shared/logistics/shipment/details/addresses';
import LogisticDetails from '@/app/shared/logistic-chain/logistic/logistic-detail/logistic-detail';

export const metadata = {
  ...metaObject('Transaction Details'),
};

export default function LogisticDetailsPage({ params }: any) {
  const pageHeader = {
    title: 'Logistic',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.logistic.logistic,
        name: 'Logistic',
      },
      {
        name: 'Logistic Details',
      },

    ],
  };
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      {/* <div className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10"> */}
      <LogisticDetails />
     
      {/* </div>
    */}
    </>
  );
}
