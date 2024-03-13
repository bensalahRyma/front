import { Badge } from 'rizzui';

const data = [
  {
    Agency: 'Deprixa Miami',
    Office: 'Miami - Florida',
    'Logistics Service': 'Ocean Freight',
  },
  {
    'Invoice date': 'Jun 15, 2023',
    'Package Type': 'Flat small box',
    'Courier Company': 'Cargus',
  },
  {
    'Delivery time': 'TNT 10-14 DAYS',
    'Payment Method': 'Cash on delivery',
    'Shipping Mode': 'Next Day',
  },
];

const billingData=[
    {
        LegalName:"legalname",
        BillingEmail:"test@gmail.com",
        Industry:"other",
        accountType:"account",
        VATnumber:"123",
        billingCountry:"USA",
        billingCity:"city",
        billingState:"state",
        billingZIP:"ZIP",
        billingStreet:"Street",

    }
]
export default function BillingDetails() {
  return (
    <div className="grid items-start rounded-xl border border-gray-300 p-5 @2xl:grid-cols-2 @3xl:grid-cols-3 @3xl:p-8 @5xl:grid-cols-4">
    <ul className="grid gap-3 grid-rows-2 grid-cols-1 @3xl:col-span-full @3xl:mb-2 @5xl:col-span-1 @5xl:mb-0">
      {Object.entries(billingData[0]).map(([key, value], index) => (
        <li key={index} className={`flex items-center gap-3 @3xl:justify-between @5xl:justify-${index < 5 ? 'end' : 'start'}`}>
          <span className="font-semibold text-gray-900">{key} :</span>
          <span className="text-base font-semibold text-gray-900">{value}</span>
        </li>
      ))}
    </ul>
  </div>
  );
}
