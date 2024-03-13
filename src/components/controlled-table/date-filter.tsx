import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { DatePicker } from '../ui/datepicker';
import { Button } from 'rizzui';

interface DateFilterProps {
  onDateChange: (startDate: Date, endDate: Date) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleApply = () => {
    if (startDate && endDate) {
      onDateChange(startDate, endDate);
    }
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date:Date) => setStartDate(date as Date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={(date:Date) => setEndDate(date as Date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
      />
      <Button onClick={handleApply}>Apply</Button>
    </div>
  );
};

export default DateFilter;
