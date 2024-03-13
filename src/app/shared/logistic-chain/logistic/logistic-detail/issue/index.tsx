'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import BlocQuestion from '../../bloc-question';
import BlocConclusion from '../../bloc-conclusion';

interface DeliveryDetailsProps {
  className?: string;
}


export default function Issue({ className }: DeliveryDetailsProps) {
  return (
   <>
            <BlocQuestion 
          title="Questions"
          description={"  "}
          className="" />
          <BlocConclusion   title="Conclusion"
          description={"  "}
          className="" />
   </>
  );
}
