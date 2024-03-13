
import ShipmentTable from "@/app/shared/logistics/dashboard/shipment-table/shipment-table";
import WidgetCard from "@/components/cards/widget-card";
import cn from "@/utils/class-names";
import TransactionTable from "./blacklist-table";
import { ActionIcon, Button, Checkbox, Modal, Password, Text, Title } from "rizzui";
import { Console } from "console";
import { useState } from "react";
import { Input } from "postcss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MetricCardWithBarChart from '@/app/shared/analytics-dashboard/stat-cards';
import { FileStatGrid } from "@/app/shared/file/dashboard/file-stats";
import CustomerTable from "./blacklist-table";
import BlacklistTable from "./blacklist-table";



type ShipmentTableWidgetProps = {
    title: string;
    description: string;
    className?: string;
    button?: React.ReactNode;
  };

  export default function BlacklistTableWidget({
    title,
    description,
    className,
    button
  }: ShipmentTableWidgetProps) {
    const [modalState, setModalState] = useState(false);
    return (

 <WidgetCard
      title={
        <div className="flex justify-between items-center">
          <span>{title}</span>
          {button &&(
            <>
             <Button className="ml-4" style={{ backgroundColor:"#1C4DBD"}}
 onClick={()=>{setModalState(true)}}>
   {button}
 </Button>
         </>  
) } 
        </div>
      }
        description={description}
        descriptionClassName="mb-6 mt-2"
        className={cn(className)}
      >
        <BlacklistTable />

      </WidgetCard>

     
    );
  }
  