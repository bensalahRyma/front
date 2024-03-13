'use client';

import WidgetCard from "@/components/cards/widget-card";
import { TransactionType, transactions } from "@/data/transactions-data";
import { useRouter } from "next/router";
import { useState } from "react";
import { Alert, Button, Input, Text } from "rizzui";
import SummaryPage from "../../transactions/transaction/transaction-detail/summarydetail";

export default function TransactionnumberLookup({
    className,
  }: {
    className?: string;
  }) {
    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
      setShowResult(!showResult); 
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState<TransactionType[]>([]);
    const [searchError, setSearchError] = useState(false); 

    const handleSearch = () => {
        const result = transactions.filter(transaction => transaction.id === searchTerm);
       
        console.log("--result__lookup",result);
        if (result.length === 0) {
            // Aucun utilisateur trouvé, définir l'état de l'erreur de recherche à true
            setSearchError(true);
          } else {
            // Utilisateur trouvé, définir les résultats de recherche et réinitialiser l'état de l'erreur de recherche
            // setSearchResult(result);
            handleButtonClick()
            setSearchError(false);
            //redirection vers transaction details
           // router.push(`/transaction/detail/${result[0]?.id}`);
          }
      };
    return (
        <>
     <div className="@container">
      <div  className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
      <WidgetCard
      title="Transaction Number Lookup"
      titleClassName="font-normal sm:text-sm text-gray-500 mb-2.5 font-inter"
      className={className}
    >
              <Input
              type="text"
               label="Transaction Number "  
               className="mb-5"
                placeholder="Add new"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                 />

                
      <Button onClick={handleSearch}  className="mt-4 "
        style={{ backgroundColor: '#1C4DBD', color: 'white',border: '1px solid #f8f8f8',borderRadius: '10px' }}>
        Run transaction number  Lookup
      </Button>
    </WidgetCard>
      </div>
      {searchError &&  <Alert color="info" variant="flat">
        <Text className="font-semibold">Info Alert</Text>
        <Text>
          transaction not found !
        </Text>
      </Alert>}
      {showResult && !searchError && 
   
   (        <div className="">
      <SummaryPage 
    //  className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" 
   //  customerData={searchResult}
   />
     </div>
     )
     }
      </div>
          {/*  <SummaryPage/> */}
  

        </>
     
    );
  }