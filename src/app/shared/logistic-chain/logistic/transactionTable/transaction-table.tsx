import { pendingShipments } from "@/data/pending-shipments";
import { useTable } from "@/hooks/use-table";
import { useCallback, useMemo, useState } from "react";
import { getColumns } from "./transaction-table-columns";
import ControlledTable from "@/components/controlled-table";
import ShipmentTableFilters from "./transaction-table-filters";
import { useColumn } from "@/hooks/use-column";
import TransactionTableFilters from "./transaction-table-filters";
import { transactions } from "@/data/transactions-data";
import Table from "rc-table";
// import { Table } from "reactstrap";

const filterState = {
    date: [null, null],
    status: '',
  };
  
  export default function TransactionTable() {
    const [pageSize, setPageSize] = useState(5);
  
    const onHeaderCellClick = (value: string) => ({
      onClick: () => {
        handleSort(value);
      },
    });
  
    const onDeleteItem = useCallback((id: string) => {
      handleDelete(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
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
      handleDelete,
      handleReset,
    } = useTable(transactions, pageSize, filterState);
  
    const columns = useMemo(
      () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
    );
  
    const { visibleColumns, checkedColumns, setCheckedColumns } =
      useColumn(columns);
  
      
    return (
      <>
        <ControlledTable
          variant="modern"
          isLoading={isLoading}
          showLoadingText={true}
          data={tableData}
          // @ts-ignore
          columns={visibleColumns}
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
          className="-mx-5 lg:-mx-7 "
          // scroll={{ x: 1700 }}
          filterElement={
            <TransactionTableFilters
              isFiltered={isFiltered}
              filters={filters}
              updateFilter={updateFilter}
              handleReset={handleReset}
            />
          }
        />

      </>
    );
  }
  