import ShipmentTable from "@/app/shared/logistics/dashboard/shipment-table/shipment-table";
import WidgetCard from "@/components/cards/widget-card";
import cn from "@/utils/class-names";
import TransactionTable from "./transaction-table";
import { ActionIcon, Button, Checkbox, Modal, Password, Text, Title } from "rizzui";
import { Console } from "console";
import { useState } from "react";
import { Input } from "postcss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MetricCardWithBarChart from '@/app/shared/analytics-dashboard/stat-cards';
import { FileStatGrid } from "@/app/shared/file/dashboard/file-stats";

type ShipmentTableWidgetProps = {
    title: string;
    description: string;
    className?: string;
    button?: React.ReactNode;
  };

  export default function TransactionTableWidget({
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
          {button &&
           <Button className="ml-4"
            onClick={()=>{setModalState(true)}}>
              {button}
            </Button>} {/* Affichage du bouton à droite du titre s'il est présent */}
        </div>
      }
        description={description}
        descriptionClassName="mb-6 mt-2"
        className={cn(className)}
      >
        <TransactionTable />
     
      </WidgetCard>
    );
  }
  