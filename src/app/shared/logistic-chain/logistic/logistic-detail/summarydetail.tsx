
import { Title } from 'rizzui';
import cn from '@/utils/class-names';
import MetricCardsWithIcon from '@/app/shared/support/dashboard/stat-cards';
import MetricCardWithBarChart from '@/app/shared/analytics-dashboard/stat-cards';
import { FileStatGrid } from '@/app/shared/file/dashboard/file-stats';
import CustomizedMixChart from '@/app/shared/chart-widgets/customized-mix-chart';
import DispatchPlanning from '@/app/shared/logistics/dashboard/dispatch-planning';
import OpenSalesOrder from '@/app/shared/logistics/dashboard/open-sales-order';
import CircleProgressBars from './circle-progressbars';
import AnalysisRules from './analysis-rules';
import MRRReport from '@/app/shared/executive/mrr-report';
import BiggestDeal from '@/app/shared/executive/biggest-deal';
import MailInfo from './mail-info';

import ShippingDetails from '@/app/shared/logistics/shipment/details/shipping-details';
// import Addresses from '@/app/shared/logistics/shipment/details/addresses';
import TransactionDetails from './summary/transaction-details';
import Recommandation from './summary/recommandation';
import Addresses from './summary/addresses';
import Identify from './summary/identify';
import IpInfo from './ip-info';
import PhoneInfo from './phone-info';
export default function SummaryPage() {
    return (
      <>
    
    <div className="@container">
      <div  className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
      <TransactionDetails />
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
         
         <CircleProgressBars className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4"/>
        <Recommandation className="col-span-full @3xl:col-span-full @[1429px]:col-span-8" />
        
        <DispatchPlanning className="col-span-full"/>
        <AnalysisRules className="col-span-full @3xl:col-span-full @[1429px]:col-span-full" />
        <MailInfo className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        
        <PhoneInfo className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <IpInfo className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <Identify className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <Addresses className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
      
     </div>
   
 
      </div>

    
        </div>
      </>
    );
  }
  