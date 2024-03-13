'use client';

import { useMemo, useState } from 'react';
import { getColumns } from '@/app/shared/account-settings/logged-in-devices/columns';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { ActionIcon, Button, Checkbox, Input, Modal, Password, Text } from 'rizzui';
import TableFooter from '@/app/shared/table-footer';
import ControlledTable from '@/components/controlled-table';
import { exportToCSV } from '@/utils/export-to-csv';
import TeamTableFilters from './table-filters';
import { PiPlusBold } from 'react-icons/pi';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TeamData } from '@/data/team-data';
const filterState = {
  date: [null, null],
  status: '',
};

export default function LoggedInDevices({
  className,
  data = [],
}: {
  className?: string;
  data: any[];
}) {
  const [pageSize, setPageSize] = useState(10);
  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });
  const onDeleteItem = (id: string) => handleDelete(id);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    setSelectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
    handleReset,
  } = useTable(TeamData, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumns({
        data,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick,
        onChecked: handleRowSelect,
        handleSelectAll,
        onDeleteItem,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
    ]
  );
  
  const { visibleColumns, checkedColumns, setCheckedColumns } =
  useColumn(columns);


  const selectedData = data.filter((item) => selectedRowKeys.includes(item.id));
  function handleExportData() {
    exportToCSV(
      selectedData,
      'ID,User,Email,Status,Teams',
      `logged_in_devices_${selectedData.length}`
    );
  }
  const [modalState, setModalState] = useState(false);
  return (
    <>
                 <div className="col-span-2 flex justify-end gap-4">
          <Button
            type="button"
            className="mb-10" 
            onClick={() => setModalState(true)}
          >
            <PiPlusBold className="me-1.5 h-4 w-4" />
            invite
          </Button>
          
       <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
            <Text >Welcome to RizzUi</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" />
            <Input
              label="Email *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Confirm Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Checkbox
              size="lg"
              inputClassName="border-2"
              className="col-span-2"
              label={
                <Text className="text-sm">
                  I agree to RizzUI&lsquo;s{" "}
                  <a className="underline">Terms of Service</a> and{" "}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => setModalState(false)}
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
        </div>
    <div className={className}>
      <ControlledTable
        isLoading={isLoading}
        data={TeamData}
        // @ts-ignore
        columns={visibleColumns}
        variant="modern"
        rowKey={(record) => record.id}
        className="w-full text-sm"
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch('');
          },
          onSearchChange: (event) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          columns,
          checkedColumns,
          setCheckedColumns,
        }}
        filterElement={
          <TeamTableFilters
            isFiltered={isFiltered}
            filters={filters}
            updateFilter={updateFilter}
            handleReset={handleReset}
          />
        }
        tableFooter={
          <TableFooter
            checkedItems={selectedRowKeys}
            handleDelete={(ids: string[]) => {
              setSelectedRowKeys([]);
              handleDelete(ids);
            }}
          >
            <Button
              size="sm"
              onClick={() => handleExportData()}
              className="dark:bg-gray-300 dark:text-gray-800"
            >
              Download {selectedRowKeys.length}{' '}
              {selectedRowKeys.length > 1 ? 'Files' : 'File'}
            </Button>
          </TableFooter>
        }
      />
    </div>
    </>
    
  );
}
