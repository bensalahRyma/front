import EyeIcon from "@/components/icons/eye";
import AvatarCard from "@/components/ui/avatar-card";
import { HeaderCell } from "@/components/ui/table";
import {  shippingStatuses } from "@/data/shipment-data";
import { StatusType, TransactionStatuses, TransactionType } from "@/data/transactions-data";
import { ActionIcon, Badge, Text, Tooltip } from "rizzui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { routes } from "@/config/routes";
import DateCell from "@/components/ui/date-cell";
const statusColors = (status: StatusType) => {
    if (TransactionStatuses.RefundAccepted === status) {
      return 'success';
    }
    if (TransactionStatuses.LegitReturn === status) {
      return 'secondary';
    }
    if (TransactionStatuses.RefundNotAccepted === status) {
      return 'info';
    }
    if (TransactionStatuses.Delivered === status) {
      return 'success';
    }
    if (TransactionStatuses.RefundPending === status) {
      return 'danger';
    }
    if (TransactionStatuses.RedFlag === status) {
      return 'danger';
    }
    if (TransactionStatuses.SuspiousRefundAccepted === status) {
      return 'info';
    }
  };
  

  
  type Columns = {
    sortConfig?: any;
    onDeleteItem: (id: string) => void;
    onHeaderCellClick: (value: string) => void;
    onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  };
  
  export const getColumns = ({
    sortConfig,
    onDeleteItem,
    onHeaderCellClick,
    onChecked,
  }: Columns) => [

    {
      title: <HeaderCell title="Transaction ID" />,
      dataIndex: 'id',
      key: 'id',
      width: 20,

    },
    {
      title: <HeaderCell title="First Name" />,
      dataIndex: 'FirstName',
      key: 'FirstName',
      width: 50,

    },
    {
      title: <HeaderCell title="Last Name" />,
      dataIndex: 'LastName',
      key: 'LastName',
      width: 50,

    },
    {
      title: <HeaderCell title="Amount" />,
      dataIndex: 'amount',
      key: 'amount',
      width: 100,

    },
    {
      title: <HeaderCell title="Date" />,
      dataIndex: 'date',
      key: 'date',
      width: 100,
      render: (createdDate: Date) => <DateCell date={createdDate} />,

    },
    {
      title: <HeaderCell title="Shipping Country" />,
      dataIndex: 'shippingCountry',
      key: 'shippingCountry',
      width: 120,
    },
    {
      title: <HeaderCell title="Billing Country" />,
      dataIndex: 'billingCountry',
      key: 'billingCountry',
      width: 120,
    },

    {
      title: <HeaderCell title="Status" />,
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: StatusType) => (
        <Badge
          variant="flat"
          className="w-40 h-10"
          color={statusColors(status)}
          data-color={statusColors(status)}
        >
          {status}
        </Badge>
      ),
    },
    {
      title: <HeaderCell title="Final Fraud Score" />,
      // dataIndex: 'invoiceStatus',
      // key: 'invoiceStatus',
      dataIndex: 'finalscore',
      key: 'finalscore',
      width: 100,
      render: (finalscore: string, record: TransactionType) => (
        <Badge
          variant="flat"
          className="w-20 h-10 "
          color={statusColors(record.status)}
          data-color={statusColors(record.status)}
        >
          {finalscore}%
        </Badge>
      ),
     //render: (value: string) => getStatusBadge(value),
    },
  
    
    {
      // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
      title: <HeaderCell title="Actions" className="opacity-0" />,
      dataIndex: 'action',
      key: 'action',
      width: 100,
      render: (_: string, row: any) => (
        <div className="w-25 flex justify-center items-center">

          <Tooltip
            size="sm"
            content={'View transaction'}
            placement="top"
            color="invert"
          >
                <Link href={routes.transaction.transactionDetails(row.id)}>
            {/* <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700"
            > */}
              {/* <EyeIcon /> */}
              <FontAwesomeIcon icon={faEye} className="hover:!border-gray-900 hover:text-gray-700"/>
              </Link>
            {/* </ActionIcon> */}
          </Tooltip>
        
        </div>
      ),
    },
  ];
  