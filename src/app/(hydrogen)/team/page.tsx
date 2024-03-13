import FileStats from '@/app/shared/file/manager/file-stats'
import React, { useState } from 'react'

import dynamic from 'next/dynamic';
import { metaObject } from '@/config/site.config';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';

import Team from '@/app/shared/team';
import { ActionIcon, Button, Checkbox, Input, Modal, Password, Text } from 'rizzui';
import { PiPlusBold } from 'react-icons/pi';
import { XMarkIcon } from '@heroicons/react/24/solid';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
    ssr: false,
  });
  
  export const metadata = {
    ...metaObject('Team'),
  };
  
  const pageHeader = {
    title: 'Team',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.team,
        name: 'Team',
      },

    ],
  };
export default function TeamPage() {

  return (
    <>
        {/* <Title>Dashpage</Title> */}
        <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} >
     
        </PageHeader>
    <Team/>
   
    </>

  )
}
