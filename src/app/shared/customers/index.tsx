'use client';

import CustomerTableWidget from "./customer/CustomerList";


export default function Customer() {
  return (
    <div className="@container">

   <CustomerTableWidget
          title="Customers"
          description={"  "}
          className=""
          button="Statistics"
        />
  </div>
  )
}
