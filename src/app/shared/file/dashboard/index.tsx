'use client';

import StorageReport from '@/app/shared/file/dashboard/storage-report';
import FileStats from '@/app/shared/file/dashboard/file-stats';
import StorageSummary from '@/app/shared/file/dashboard/storage-summary';
import RecentFiles from '@/app/shared/file/dashboard/recent-files';
import QuickAccess from '@/app/shared/file/dashboard/quick-access';
import ActivityReport from '@/app/shared/file/dashboard/activity-report';
import Members from '@/app/shared/file/dashboard/members';
import FileListTable from '@/app/shared/file/dashboard/file-list/table';
import UpgradeStorage from '@/app/shared/file/dashboard/upgrade-storage';
import RecentActivities from '@/app/shared/file/dashboard/recent-activities';
import Forecast from '../../executive/forecast';
import MRRReport from '../../executive/mrr-report';
import GoalAccomplished from '../../analytics-dashboard/goal-accomplished';
import AccountRetention from '../../analytics-dashboard/account-retention';
import ShipmentTableWidget from '../../logistics/dashboard/shipment-table';
import dayjs from 'dayjs';
import TopTrafficSource from '../../analytics-dashboard/top-traffic-source';
import TransactionTableWidget from '../../transactions/dashbord/transactionTable';
const thisMonth = dayjs(new Date()).format('MMMM YYYY');
export default function FileDashboard() {
  return (
    <div className="@container">
      <FileStats className="mb-5 2xl:mb-8" />
      <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
        <ActivityReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" />
        <TopTrafficSource className="@4xl:col-span-4 @[96.937rem]:col-span-3" />
      </div>


      <div className="mb-6 grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
        <div className="col-span-full flex flex-col gap-6 2xl:gap-8 ">
          <TransactionTableWidget
          title="Last Problematic Transactions"
          description={"  "}
          className=""
        />
        </div>


      </div>
    </div>
  );
}
