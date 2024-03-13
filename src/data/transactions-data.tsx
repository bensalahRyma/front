import {
  PiTShirtFill,
  PiBowlFoodFill,
  PiAirplaneTakeoffFill,
  PiBasketballFill,
  PiBuildingsFill,
  PiTruckFill,
  PiBasketFill,
} from 'react-icons/pi';
export const TransactionStatuses = {
  RefundAccepted: 'Refund Accepted',
  LegitReturn: 'Legit Return',
  RefundNotAccepted: 'Refund Not Accepted',
  RefundPending: 'Refund Not Accepted',
  Delivered: 'Delivered',
  RedFlag: 'Red Flag',
  SuspiousRefundAccepted: 'Suspious Refund Accepted',


};

export type StatusType =
  | 'Refund Accepted'
  | 'Legit Return'
  | 'Refund Not Accepted'
  | 'Refund Pending'
  | ' Delivered'
    'Red Flag'
    'Suspious Refund Accepted'

 type Person = {
      FirstName: string;
      LastName: string;
    };
 export type TransactionType = {
      id: string;
        FirstName: string;
        LastName: string;
     
      shippingCountry: string;
      billingCountry: string;
      status: StatusType;
      finalscore: string;
      amount:string;
      date:String;
    };   
export const transactions = [
  {
    id: '1',
  
      FirstName: 'Eric',
      LastName: 'Dupont1',

    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Accepted',
    finalscore: '79',
    amount:"900.00EUR",
    date:"2022-11-10T06:22:01.621Z"
  },
  {
    id: '2',
    
      FirstName: 'Eric',
      LastName: 'Dupont2',
   
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Legit Return',
    finalscore: '11',
    amount:"900.00EUR",
    date:"2022-03-09T06:22:01.621Z"
  },
  {
    id: '3',
 
      FirstName: 'Eric',
      LastName: 'Dupont3',
 
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Not Accepted',
    finalscore: '24',
    amount:"900.00EUR",
    date:"2023-11-10T06:22:01.621Z"
  },
  {
    id: '4',

      FirstName: 'Jean',
      LastName: 'Dupont1',

    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Red Flag',
    finalscore: '79',
    amount:"900.00EUR",
    date:"2022-11-10T06:22:01.621Z"
  },
  {
    id: '5',

      FirstName: 'Henri',
      LastName: 'Dupont2',
 
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Accepted',
    finalscore: '9',
    amount:"900.00EUR",
    date:"2022-11-10T06:22:01.621Z"
  },
  {
    id: '6',

      FirstName: 'Marie',
      LastName: 'Smith1',

    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Suspious Refund Accepted',
    finalscore: '79',
    amount:"300.00EUR",
    date:"2022-11-10T06:22:01.621Z"
  },
  {
    id: '7',

      FirstName: 'Henri',
      LastName: 'Smith2',

    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Delivered',
    finalscore: '126',
    amount:"900.00EUR",
    date:"2022-11-10T06:22:01.621Z"
  },
  {
    id: '30',
 
      FirstName: 'Eric',
      LastName: 'Dupont3',
 
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Refund Not Accepted',
    finalscore: '26',
    amount:"1.750.00EUR",
    date:"2023-11-10T06:22:01.621Z"
  },
  {
    id: '33',
 
      FirstName: 'Eric',
      LastName: 'Dupont3',
 
    shippingCountry: 'UK',
    billingCountry: 'Hong Kong',
    status: 'Delivered',
    finalscore: '7',
    amount:"350.00EUR",
    date:"2022-10-9T06:22:01.621Z"
  },
];
