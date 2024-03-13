'use client';

import WidgetCard from "@/components/cards/widget-card";
import { Customer, counstomersData } from "@/data/customer-data";
import { useState } from "react";
import { Alert, Button, Input, Text } from "rizzui";
import ResultName from "../result/result-name";


export default function NameLookup({
    className,
  }: {
    className?: string;
  }) {

    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
      setShowResult(!showResult); 
    };
        const [searchTerm, setSearchTerm] = useState('');
        const [searchResult, setSearchResult] = useState<Customer[]>([]);
        const [searchError, setSearchError] = useState(false); 

        const handleSearch = () => {
            const result = counstomersData.filter(customer => customer.user === searchTerm);
           
            console.log("--result__lookup",result);
            if (result.length === 0) {
                // Aucun utilisateur trouvé, définir l'état de l'erreur de recherche à true
                setSearchError(true);
              } else {
                // Utilisateur trouvé, définir les résultats de recherche et réinitialiser l'état de l'erreur de recherche
                setSearchResult(result);
                handleButtonClick()
                setSearchError(false);
              }
          };
    return (
        <>
            <div className="@container">
      <div  className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
      <WidgetCard
      title="Name Lookup"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
    >
              <Input
              type="text"
               label="Name"  
               className="mb-5"
                placeholder="Add new"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                 />

                
      <Button className="mt-4 " onClick={handleSearch}
        style={{ backgroundColor: '#1C4DBD', color: 'white',border: '1px solid #f8f8f8',borderRadius: '10px' }}>
        Run name Lookup</Button>
    </WidgetCard>
      </div>
      {searchError &&  <Alert color="info" variant="flat">
        <Text className="font-semibold">Info Alert</Text>
        <Text>
          Customer not found !
        </Text>
      </Alert>}

     {showResult && !searchError && 
   
    (<div className="">
       <ResultName 
      className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" 
      customerData={searchResult}/>
      </div>
      )}
      </div>
          
  
        </>
     
    );
  }