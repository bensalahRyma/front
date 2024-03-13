'use client';

import Image from 'next/image';
import { Text, Badge, Checkbox } from 'rizzui';
import cn from '@/utils/class-names';
import { formatDate } from '@/utils/format-date';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';


const dataStat=[
    {
        id: 4,
        name:"Fraud Score",
        minscore:"7",
        maxscore:"100",
        average:"51.5",

      },
      {
        id: 2,
        name:"Email Score",
        minscore:"1",
        maxscore:"100",
        average:"43.5",

      },
      {
        id: 1,
        name:"Phone Score",
        minscore:"0",
        maxscore:"10",
        average:"2.8",

      },
      {
        id: 2,
        name:"IP Score",
        minscore:"0",
        maxscore:"14",
        average:"2.8",

      },
]


type Columns = {
  data: any[];

  handleSelectAll: any;
  checkedItems: string[];
  onChecked?: (id: string) => void;
};

export const getColumns = ( ) => [

  {
    title: <span className="ml-6 block  flex justify-center"></span>,
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (name: string) => (
      <div className="ml-6">
        <Text className="mb-1 font-medium text-gray-700">
          {name}
        </Text>
      </div>
    ),
  },
  {
    title:  <span className="flex justify-center">Minimume</span>,
    dataIndex: 'minscore',
    key: 'minscore',
    width: 200,
    render: (minscore: string) => (
        <div className="ml-6">
        <Text className="mb-1 font-medium text-gray-700">
          {minscore}
        </Text>
      </div>
    ),
  },

  {
    title:  <span className="flex justify-center">Average</span>,
    dataIndex: 'average',
    key: 'average',
    width: 200,
    render: (average: string) => (
        <div className="ml-6">
        <Text className="mb-1 font-medium text-gray-700">
          {average}
        </Text>
      </div>
    ),
  },
  {
    title:  <span className="flex justify-center">Maximum</span>,
    dataIndex: 'maxscore',
    key: 'maxscore',
    width: 200,
    render: (maxscore: string) => (
        <div className="ml-6">
        <Text className="mb-1 font-medium text-gray-700">
          {maxscore}
        </Text>
      </div>
    ),
  },
 
];

export default function StatTable({
  className,
}: {
  className?: string;
}) {
  return (
    <BasicTableWidget
      title=""
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={dataStat}
      getColumns={getColumns}
      noGutter
      enableSearch={false}
      scroll={{
        x: 900,
      }}
    />
  );
}
