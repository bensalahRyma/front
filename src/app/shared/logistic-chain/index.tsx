'use client';

import BlocConclusion from "./logistic/bloc-conclusion";
import BlocQuestion from "./logistic/bloc-question";
import TransactionTableWidget from "./logistic/transactionTable";

export default function Logistic() {
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
  