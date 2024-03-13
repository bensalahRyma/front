import FileStats from '@/app/shared/file/manager/file-stats'
import React from 'react'

import dynamic from 'next/dynamic';
import { metaObject } from '@/config/site.config';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import UploadButton from '@/app/shared/upload-button';
import FileDashboard from '@/app/shared/file/dashboard';
import Transaction from '@/app/shared/transactions/transaction';
import Customer from '@/app/shared/customers';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
    ssr: false,
  });
  
  export const metadata = {
    ...metaObject('Customers'),
  };
  
  const pageHeader = {
    title: 'Customers',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.customers.customers,
        name: 'Customers',
      },

    ],
  };
export default function CustomersPage() {
  return (
    <>
        {/* <Title>Dashpage</Title> */}
        <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} ></PageHeader>
      {/* <FileDashboard /> */}
      <Customer/>
        
    </>

  )
}
