'use client';

import Image from 'next/image';
import { HeaderCell } from '@/components/ui/table';
import { Checkbox, Title, Text, Tooltip, ActionIcon, Badge } from 'rizzui';
import cn from '@/utils/class-names';
import PencilIcon from '@/components/icons/pencil';
import DeletePopover from '@/app/shared/delete-popover';
import DateCell from '@/components/ui/date-cell';

const statusColors = {
  Offline: '',
  Active: 'success',
} as { [key: string]: string };

const chipsColors = {
  Design: 'bg-orange-lighter text-orange-dark',
  Product: 'bg-blue-lighter text-blue-dark',
  'Software Engineering': 'bg-green-lighter text-green-dark',
  Operations: 'bg-red-lighter text-red-dark',
  Finance: 'bg-primary-lighter text-primary-dark',
  'Human Resource': 'bg-secondary-lighter text-secondary-dark',
} as { [key: string]: string };

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  onDeleteItem: (id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  onDeleteItem,
}: Columns) => [
  // {
  //   title: (
  //     <div className="ps-2">
  //       <Checkbox
  //         title={'Select All'}
  //         onChange={handleSelectAll}
  //         checked={checkedItems.length === data.length}
  //         className="cursor-pointer"
  //       />
  //     </div>
  //   ),
  //   dataIndex: 'checked',
  //   key: 'checked',
  //   width: 30,
  //   render: (_: any, row: any) => (
  //     <div className="inline-flex ps-2">
  //       <Checkbox
  //         className="cursor-pointer"
  //         checked={checkedItems.includes(row.id)}
  //         {...(onChecked && { onChange: () => onChecked(row.id) })}
  //       />
  //     </div>
  //   ),
  // },
  {
    title: <HeaderCell title="Name" />,
    onHeaderCell: () => onHeaderCellClick('user.name'),
    dataIndex: 'user',
    key: 'user',
    width: 400,
    render: ({ name, email, avatar }: any) => (
      <div className="flex items-center">
        <Image
          src={avatar}
          alt={name}
          width={36}
          height={36}
          className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 object-cover shadow-xl"
        />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Title
            as="h6"
            className="mb-0.5 line-clamp-1 whitespace-nowrap !text-sm font-medium"
          >
            {name}
          </Title>
          <Text className="text-xs text-gray-500">{email}</Text>
        </div>
      </div>
    ),
  },
  // {
  //   title: (
  //     <HeaderCell
  //       title="Status"
  //       sortable
  //       ascending={
  //         sortConfig?.direction === 'asc' && sortConfig?.key === 'status'
  //       }
  //     />
  //   ),
  //   onHeaderCell: () => onHeaderCellClick('status'),
  //   dataIndex: 'status',
  //   key: 'status',
  //   width: 200,
  //   render: (status: any) => {
  //     return (
  //       <>
  //         {status === 'Offline' ? (
  //           <div className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-100/80 px-2.5 py-1">
  //             <Badge renderAsDot />
  //             <span className="text-xs font-semibold text-gray-900">
  //               {status}
  //             </span>
  //           </div>
  //         ) : (
  //           <div className="inline-flex items-center justify-center gap-2 rounded-full bg-green-lighter px-2.5 py-1">
  //             <Badge renderAsDot color={statusColors[status] as any} />
  //             <span className="text-xs font-semibold text-green-dark">
  //               {status}
  //             </span>
  //           </div>
  //         )}
  //       </>
  //     );
  //   },
  // },
  {
    title: (
      <HeaderCell
        title={<span className="whitespace-nowrap">Access</span>}
      />
    ),
    dataIndex: 'access',
    key: 'access',
    width: 200,
    render: (access: string) => (
      <span className="mr-6 block whitespace-nowrap">{access}</span>
    ),
  },
  {
    title: (
      <HeaderCell
        title={<span className="whitespace-nowrap">Role</span>}
      />
    ),
    dataIndex: 'role',
    key: 'role',
    width: 200,
    render: (role: string) => (
      <span className="mr-6 block whitespace-nowrap">{role}</span>
    ),
  },
  {
    title: (
      <HeaderCell
        title={<span className="whitespace-nowrap">2FA</span>}
      />
    ),
    dataIndex: 'FA',
    key: 'FA',
    width: 200,
    render: (FA: string) => (
      <span className="mr-6 block whitespace-nowrap">{FA}</span>
    ),
  },
  {
    title: (
      <HeaderCell
        title={<span className="whitespace-nowrap">Date ADDED</span>}
      />
    ),
    dataIndex: 'dateadded',
    key: 'dateadded',
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  //  render: (dateadded: string) => (
  //     <span className="mr-6 block whitespace-nowrap">{dateadded}</span>
  //   ), 
  },
 
  // {
  //   title: (
  //     <HeaderCell
  //       className="ps-3"
  //       title={<span className="whitespace-nowrap">Actions</span>}
  //     />
  //   ),
  //   dataIndex: 'action',
  //   key: 'action',
  //   width: 120,
  //   render: (_: string, row: any) => (
  //     <div className="flex items-center justify-end gap-3 pe-4">
  //       <Tooltip
  //         size="sm"
  //         content={'Edit Member'}
  //         placement="top"
  //         color="invert"
  //       >
  //         <ActionIcon size="sm" variant="outline">
  //           <PencilIcon className="h-4 w-4" />
  //         </ActionIcon>
  //       </Tooltip>
  //       <DeletePopover
  //         title={`Delete Member`}
  //         description={`Are you sure you want to delete this #${row.id} member?`}
  //         onDelete={() => onDeleteItem(row.id)}
  //       />
  //     </div>
  //   ),
  // },
];
