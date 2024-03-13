import { HeaderCell } from '@/components/ui/table';
import { Checkbox, Badge, Tooltip, ActionIcon, Text } from 'rizzui';
import { shippingStatuses, StatusType } from '@/data/shipment-data';
import DateCell from '@/components/ui/date-cell';
import AvatarCard from '@/components/ui/avatar-card';
import Link from 'next/link';
import { routes } from '@/config/routes';
import PencilIcon from '@/components/icons/pencil';
import EyeIcon from '@/components/icons/eye';
import DeletePopover from '@/app/shared/delete-popover';
import { formatDate } from '@/utils/format-date';

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};
type actionType={
  name:string,
  date:Date,
}
export const dataActivity = [
  {
    id: 4,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
  {
    id: 3,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
  {
    id: 2,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
  {
    id: 1,
    score:"7.00",
    date: '2023-08-20T14:49:10.954Z',
    actionType:{
      name:"actiontype name",
      date:'2023-08-20T14:49:10.954Z'
    },
    state:'approve',
    amount:'900.00 EUR',
    label:'label name',
    ipaddress:'104.101.103.255',
    devicehash:'user desktop',
  },
];

 
const statusColors = {
  Accepted: 'info',
  'approve':'info',
  'In Transit': 'secondary',
  'Out For Delivery': 'primary',
  Delivered: 'success',
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: (
      <div className="ps-3.5">
        <Checkbox
          title={'Select All'}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer"
        />
      </div>
    ),
    dataIndex: 'checked',
    key: 'checked',
    width: 50,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-3.5">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Score"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'score'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('score'),
    dataIndex: 'score',
    key: 'score',
    width: 50,
    render: (score: string) => (
      <Text>
        {score}
      </Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Date"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'date'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('date'),
    dataIndex: 'date',
    key: 'date',
    width: 100,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="Action type" />,
    onHeaderCell: () => onHeaderCellClick('actionType'),
    dataIndex: 'actionType',
    key: 'actionType',
    width: 100,
    render: (actionType: actionType) => (
      <>
        <Text className="mb-1 font-medium text-gray-700">
          {actionType?.name}
        </Text>
        <Text className="text-[13px] text-gray-500">
          {formatDate(actionType?.date, 'MMMM D, YYYY')}
        </Text>
      </> 
    ),
  },
  {
    title: <HeaderCell title="State" />,
    onHeaderCell: () => onHeaderCellClick('State'),
    dataIndex: 'state',
    key: 'state',
    width: 100,
    render: (state: string) => {
      return (
        // @ts-ignore
        <Badge color={statusColors[state]} rounded="md">
          {state}
        </Badge>
      );
    },
  },
  {
    title: (
      <HeaderCell
        title="Amount"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'Amount'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('amount'),
    dataIndex: 'amount',
    key: 'amount',
    width: 100,
    render: (amount: string) => amount,
  },
  {
    title: (
      <HeaderCell
        title="Label"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'label'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('label'),
    dataIndex: 'label',
    key: 'label',
    width: 100,
    render: (label: string) => label,
  },
  {
    title: (
      <HeaderCell
        title="IP Address"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'ipaddress'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('ipaddress'),
    dataIndex: 'ipaddress',
    key: 'ipaddress',
    width: 100,
    render: (ipaddress: string) => ipaddress,
  },
  {
    title: (
      <HeaderCell
        title="device hash"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'devicehash'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('devicehash'),
    dataIndex: 'devicehash',
    key: 'devicehash',
    width: 100,
    render: (devicehash: string) => <p className=" flex justify-center">{devicehash}</p>,
  },
  
];
