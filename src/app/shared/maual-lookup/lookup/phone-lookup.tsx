'use client';

import WidgetCard from "@/components/cards/widget-card";
import { useState } from "react";
import { Button, Input } from "rizzui";
import ResultPhone from "../result/result-phone";

export default function PhoneLookup({
    className,
  }: {
    className?: string;
  }) {
    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
      setShowResult(!showResult); 
    };
    return (
        <>
            <div className="@container">
      <div  className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
      <WidgetCard
      title="Phone Lookup"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
    >
              <Input
              type="text"
               label="Phone"  
               className="mb-5"
                placeholder="Add new" />

                
      <Button  onClick={handleButtonClick}  className="mt-4 "
      style={{ backgroundColor: '#1C4DBD', color: 'white',border: '1px solid #f8f8f8',borderRadius: '10px' }}>
        Run Phone Lookup</Button>
    </WidgetCard>
    {/* ResultPhone */}
    {showResult  && ( 
      
      <ResultPhone className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
    )}
      </div>
      </div>
          
  
        </>
     
    );
  }