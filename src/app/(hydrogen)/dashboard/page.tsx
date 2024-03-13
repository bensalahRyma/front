import FileStats from '@/app/shared/file/manager/file-stats'
import React from 'react'
import { Title } from 'rizzui'
import PageLayout from './page-layout'
import dynamic from 'next/dynamic';
import { metaObject } from '@/config/site.config';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import UploadButton from '@/app/shared/upload-button';
import FileDashboard from '@/app/shared/file/dashboard';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
    ssr: false,
  });
  
  export const metadata = {
    ...metaObject('Dashboard'),
  };
  
  const pageHeader = {
    title: 'Dashboard',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.dashboard,
        name: 'Dashboard',
      },

    ],
  };
export default function DashPage() {
  return (
    <>

        <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} ></PageHeader>
      <FileDashboard />
        
    </>

  )
}
