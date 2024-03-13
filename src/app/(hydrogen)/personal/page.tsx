import FileStats from '@/app/shared/file/manager/file-stats'
import React from 'react'

import dynamic from 'next/dynamic';
import { metaObject } from '@/config/site.config';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import UploadButton from '@/app/shared/upload-button';
import FileDashboard from '@/app/shared/file/dashboard';
import ManualLookup from '@/app/shared/maual-lookup';
import Rule from '@/app/shared/rules';
import PersonalSettingsView from '@/app/shared/personal-settings';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
    ssr: false,
  });
  
  export const metadata = {
    ...metaObject('Personal Settings'),
  };
  
  const pageHeader = {
    title: 'Personal Settings',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.personal,
        name: 'Personal Settings',
      },

    ],
  };
export default function PersonalPage() {
  return (
    <>
        {/* <Title>Dashpage</Title> */}
        <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} ></PageHeader>
     <PersonalSettingsView/>
        
    </>

  )
}
