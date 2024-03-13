import { invoiceData } from "@/data/invoice-data";

import CustomerTableWidget from "./CustomerList";

export default function SafeCustomerPage() {
    return (
      <>
    
    <div className="@container">

   <CustomerTableWidget
          title="Safe Customers"
          description={"  "}
          className=""
          button="Add value"
        />
  </div>
      </>
    );
  }
  