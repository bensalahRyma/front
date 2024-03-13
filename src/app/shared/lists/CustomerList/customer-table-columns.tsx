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
      title: <HeaderCell title="user ID" />,
      dataIndex: 'id',
      key: 'id',
      width: 50,

    },
    {
      title: <HeaderCell title="User" />,
      dataIndex: 'user',
      key: 'user',
      width: 50,

    },

    {
      title: <HeaderCell title="Email address" />,
      dataIndex: 'email',
      key: 'email',
      width: 100,
    },
    {
      title: <HeaderCell title="User fullname" />,
      dataIndex: 'fullname',
      key: 'fullname',
      width: 100,
    },
    {
        title: <HeaderCell title="User Created" />,
        dataIndex: 'userCreated',
        key: 'userCreated',
        width: 100,
        render: (value: Date) => <DateCell date={value} />,
    },
    {
        title: <HeaderCell title="User Balance" />,
        dataIndex: 'userBalance',
        key: 'userBalance',
        width: 50,
    },
    {
        title: <HeaderCell title="User Country" />,
        dataIndex: 'userCountry',
        key: 'userCountry',
        width: 100,
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
            content={'View customer'}
            placement="top"
            color="invert"
          >
                <Link href={routes.customers.CustomerDetail(row.id)}>
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
  