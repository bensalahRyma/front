import FileStats from '@/app/shared/file/manager/file-stats'
import React from 'react'

import dynamic from 'next/dynamic';
import { metaObject } from '@/config/site.config';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import UploadButton from '@/app/shared/upload-button';
import FileDashboard from '@/app/shared/file/dashboard';
import ManualLookup from '@/app/shared/maual-lookup';
import DeliveryDashboard from '@/app/shared/delivery-company';
import Logistic from '@/app/shared/logistic-chain';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
    ssr: false,
  });
  
  export const metadata = {
    ...metaObject('Logistic Chain'),
  };
  
  const pageHeader = {
    title: 'Logistic Chain',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.logistic.logistic,
        name: 'Logistic Chain',
      },

    ],
  };
export default function LogisticPage() {
  return (
    <>
        {/* <Title>Dashpage</Title> */}
        <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} ></PageHeader>
        <Logistic/>
       {/* <DeliveryDashboard/> */}
 
        
    </>

  )
}
