'use client';
import TransactionTableWidget from '../dashbord/transactionTable'

export default function Transaction() {
  return (
    <div className="@container">

   <TransactionTableWidget
          title="Transactions"
          description={"  "}
          className=""
          button="Statistics"
        />
  </div>
  )
}
