import { PiMagnifyingGlassBold, PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button, Input } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import { TabList } from '@/app/shared/support/inbox/inbox-tabs';
import SupportInbox from '@/app/shared/support/inbox';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Support Inbox'),
};

const pageHeader = {
  title: 'Discussions',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.support.dashboard,
      name: 'Discussions',
    },
    // {
    //   name: 'Inbox',
    // },
  ],
};

export default function SupportInboxPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        {/* <Button className="mt-4 w-full @lg:mt-0 @lg:w-auto">
          <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
          Create Ticket
        </Button> */}
        
      </PageHeader>
      <Input
            type="search"
            placeholder="Search by name or transaction number"
            // value={searchTerm}
            // onClear={onSearchClear}
            // onChange={onSearchChange}
            inputClassName="h-9"
            clearable={true}
            prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
          />
          
      <TabList />

      <SupportInbox />
    </>
  );
}
