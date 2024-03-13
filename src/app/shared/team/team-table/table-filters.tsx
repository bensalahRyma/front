import ImportButton from "@/app/shared/import-button";
import StatusField from "@/components/controlled-table/status-field";
import { shippingStatuses } from "@/data/shipment-data";
import { PiTrashDuotone } from "react-icons/pi";
import { useMedia } from "react-use";
import { Button } from "rizzui";

const paymentStatusOptions = Object.entries(shippingStatuses).map(
    ([value, label]) => ({ label, value })
  );
  
  type FilterElementProps = {
    isFiltered: boolean;
    filters: { [key: string]: any };
    updateFilter: (columnId: string, filterValue: string | any[]) => void;
    handleReset: () => void;
  };
  
  export default function TeamTableFilters({
    isFiltered,
    filters,
    updateFilter,
    handleReset,
  }: FilterElementProps) {
    const isMediumScreen = useMedia('(max-width: 1860px)', false);
    const isLargeScreen = useMedia('(min-width: 1861px)', false);
  
    return (
      <>
        {/* <DateFiled
          selected={getDateRangeStateValues(filters['date'][0])}
          startDate={getDateRangeStateValues(filters['date'][0])}
          endDate={getDateRangeStateValues(filters['date'][1])}
          className="w-full"
          onChange={(date: any) => {
            updateFilter('date', date);
          }}
          placeholderText="Select created date"
          {...(isMediumScreen && {
            inputProps: {
              label: 'Created Date',
              labelClassName: 'font-medium text-gray-700',
            },
          })}
          maxDate={new Date()}
        /> */}
        <StatusField
          dropdownClassName="!z-10"
          inPortal={true}
          options={paymentStatusOptions}
          value={filters['status']}
          onChange={(value: string) => {
            updateFilter('status', value);
          }}
          getOptionValue={(option: { label: any }) => option.label}
          displayValue={(selected: string) =>
            paymentStatusOptions.find((option) => option.label === selected)
              ?.label ?? ''
          }
          {...(isMediumScreen && {
            label: 'Status',
            labelClassName: 'font-medium text-gray-700',
          })}
          {...(isLargeScreen && {
            dropdownClassName: 'w-44',
          })}
          placement="bottom-start"
          className={'w-auto min-w-[180px]'}
        />
  
         

      
        {isFiltered ? (
          <Button
            size="sm"
            onClick={() => {
              handleReset();
            }}
            className="h-8 bg-gray-200/70"
            variant="flat"
          >
            <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
          </Button>
        ) : null}
      </>
    );
  }
  