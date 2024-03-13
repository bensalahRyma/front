import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectorProps {
  options: Option[];
  onChange: (selectedOptions: string[]) => void;
}

const MultiSelector: React.FC<MultiSelectorProps> = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    const selectedIndex = selectedOptions.indexOf(option);
    if (selectedIndex === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
    onChange(selectedOptions);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-3 py-1 rounded-full ${
            selectedOptions.includes(option.value) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => toggleOption(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default MultiSelector;
