'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge, Text, Checkbox, Tooltip, ActionIcon } from 'rizzui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  setShowDetail: any;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  onChecked,
  setShowDetail,
}: Columns) => [
  //{
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
  //   title: <HeaderCell title="ID" className="opacity-0" />,
  //   dataIndex: 'checked',
  //   key: 'checked',
  //   width: 30,
  //   render: (_: any, row: any) => (
  //     <div className="ms-6 inline-flex">
  //       <Checkbox
  //         value={row.id}
  //         aria-label="Id"
  //         className="cursor-pointer"
  //         {...(onChecked && { onChange: (e) => onChecked(e, e.target.value) })}
  //       />
  //     </div>
  //   ),
  // },
  {
    title: <HeaderCell title="Delivery Company ID" />,
    dataIndex: 'id',
    key: 'id',
    width: 50,
  },
  {
    title: <HeaderCell title="Delivery Company Name" />,
    dataIndex: 'name',
    key: 'name',
    width: 100,
    // render: ({ name, logo }: { name: string; logo: string }) => (
    //   <AvatarCard
    //     src={logo}
    //     name={name}
    //     avatarProps={{
    //       name,
    //       size: 'sm',
    //     }}
    //   />
    // ),
  },
  {
    title: <HeaderCell title="Fraud Score" />,
    dataIndex: 'fraudscore',
    key: 'fraudscore',
    width: 100,
  },

  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
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
            setShowDetail(true)
            localStorage.setItem("deliveryId", row.id)
            console.log("passe to detail!",row.id)}}
           />

        </Tooltip>
        
      </div>
    ),
  },
];
