'use client';
import dayjs from 'dayjs';
import AvgDeliveryTime from '@/app/shared/logistics/dashboard/avg-delivery-time';
import ComplaintRate from '@/app/shared/logistics/dashboard/complaint-rate';
import ComplaintReason from '@/app/shared/logistics/dashboard/complaint-reason';
// import { DeliveryStatus } from '@/app/shared/logistics/dashboard/delivery-status';
import DispatchPlanning from '@/app/shared/logistics/dashboard/dispatch-planning';
import FleetStatus from '@/app/shared/logistics/dashboard/fleet-status';
import LoadingWorkflow from '@/app/shared/logistics/dashboard/loading-workflow';
import OpenSalesOrder from '@/app/shared/logistics/dashboard/open-sales-order';
import ProfitChart from '@/app/shared/logistics/dashboard/profit';
import StatCards from '@/app/shared/logistics/dashboard/stat-cards';
import TopCustomer from '@/app/shared/logistics/dashboard/top-customer';
import TopShipmentCountries from '@/app/shared/logistics/dashboard/top-shipment-countries';


import { useParams } from 'next/navigation';
import { useLayout } from '@/hooks/use-layout';
import { DeliveryCompanyData } from '@/data/delivery-company';
import { useEffect, useState } from 'react';

import cn from '@/utils/class-names';
import { LAYOUT_OPTIONS } from '@/config/enums';
import { DeliveryStatus } from './delivery-status';
import ProblematicOrder from './problematic-order';
import ShipmentTableWidget from './shipment-table';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { Tooltip } from 'rizzui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


interface DeliveryDetailsProps {
    className?: string;
  }
  
  
  
  export const getColumns = () => [
    {
      title: <span className="ms-6 block flex justify-center">Delivery Company ID</span>,
      dataIndex: 'id',
      key: 'id',
      width: 50,
      render: (id: string) => <span className="ms-6 block">{id}</span>,
    },
    {
      title: <span className="block flex justify-center">Delivery Company Name</span>,
      dataIndex: 'name',
      key: 'name',
      width: 50,
      render: (name: string) => <p>{name}</p>,
    },
    {
      title: <span className="block flex justify-center">Fraud Score</span>,
      dataIndex: 'fraudscore',
      key: 'fraudscore',
      width: 100,
      render: (fraudscore: string) => <p>{fraudscore}</p>,
    },
    {
        title: <span className="block flex justify-center">Actions</span>,
        dataIndex: 'action',
        key: 'action',
        width: 20,
        render: (_: string, row: any) => (
            <div className="w-25 flex justify-center items-center">
         
              <Tooltip
                size="sm"
                content={'View Delivery company'}
                placement="top"
                color="invert"
              >
      
                 <FontAwesomeIcon icon={faEye} 
                 className="hover:!border-gray-900 hover:text-gray-700"
                 onClick={()=>{
                //   setShowDetail(true)
                  console.log("passe to detail!")}}
                 />
      
              </Tooltip>
              
            </div>
          ),
      },
  
  
  ];
  
const thisMonth = dayjs(new Date()).format('MMMM YYYY');

export default function ListDelivery({ className }: DeliveryDetailsProps) {

    const params = useParams();
    const { layout } = useLayout();
    const delivery =
    DeliveryCompanyData.find(
        (item) => item.id === params.id
      ) ?? DeliveryCompanyData[0];
  useEffect(()=>{
   console.log("--delivery",delivery);
   
  },[])
  return (
    <div className="@container">

      <div className="">

      <ShipmentTableWidget
          title="Delivery Company"
          description={`        `}
          className="col-span-full"
  
        />  
         {/* <BasicTableWidget
      title="Customer Details"
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={DeliveryCompanyData}
      getColumns={getColumns}
      noGutter
      enableSearch={true}
      scroll={{
        x: 900,
      }}
    /> */}
    
      </div>
    </div>
  );
}
