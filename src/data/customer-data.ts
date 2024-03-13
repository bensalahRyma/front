export type Customer={
    id:string;
    user:string;
    email:string;
    fullname:string;
    userCreated:string;
    userBalance:string;
    userCountry:string;
    passwordHash:passwordHash;
    userCategory:string;
    accountStatus:string;
    affiliateName:string;
    affiliateID:string;
    totalAmounts:totalAmount;
    totalTransaction:string;
    firstSeen:string;

}

export type passwordHash={
    id:string,
    passwordhash:string
}
export type totalAmount={
    id:string,
    total:string
}
export const counstomersData = [
    {
      id: '0256',
      user:"test",
      fullname: 'Bessie Beatty',
      email: 'christophe78@gmail.com',
      userCreated: '2029-10-14T16:01:40.021Z',
      userBalance:'0.55',
      userCountry:'UK',
      passwordHash:[
        {
            id:"0235",
            passwordhash:"azerty159357"
        },
        {
            id:"0288",
            passwordhash:"azerty159357"
        }
      ],
      userCategory:"Bronze",
      accountStatus:'active',
      affiliateName:'test123',
      affiliateID:'1234',
      totalAmounts:[
        {id:'1',total:'1234566'},
        {id:'2',total:'987654'},

      ],
      totalTransaction:'4',
      firstSeen:'2023-10-14T16:01:40.021Z'
    },
    {
        id: '0259',
        user:"user123",
        fullname: 'azerty Beatty',
        email: 'azerty78@gmail.com',
        userCreated: '2029-10-14T16:01:40.021Z',
        userBalance:'0.55',
        userCountry:'FR',
        passwordHash:[
          {
              id:"0235",
              passwordhash:"azerty159357"
          },
          {
              id:"0288",
              passwordhash:"azerty159357"
          }
        ],
        userCategory:"Bronze",
        accountStatus:'active',
        affiliateName:'test123',
        affiliateID:'1234',
        totalAmounts:[
          {id:'1',total:'1234566'},
          {id:'2',total:'987654'},
  
        ],
        totalTransaction:'4',
        firstSeen:'2023-10-14T16:01:40.021Z'
      },
      {
        id: '0260',
        user:"Lynne ",
        fullname: 'Lynne Beatty',
        email: 'Lynne@gmail.com',
        userCreated: '2029-10-14T16:01:40.021Z',
        userBalance:'0.55',
        userCountry:'USA',
        passwordHash:[
          {
              id:"0235",
              passwordhash:"azerty159357"
          },
          {
              id:"0288",
              passwordhash:"azerty159357"
          }
        ],
        userCategory:"Bronze",
        accountStatus:'active',
        affiliateName:'test123',
        affiliateID:'1234',
        totalAmounts:[
          {id:'1',total:'1234566'},
          {id:'2',total:'987654'},
  
        ],
        totalTransaction:'4',
        firstSeen:'2023-10-14T16:01:40.021Z'
      },
      {
        id: '0299',
        user:"testest ",
        fullname: 'testest Beatty',
        email: 'testest@gmail.com',
        userCreated: '2029-10-14T16:01:40.021Z',
        userBalance:'0.55',
        userCountry:'UK',
        passwordHash:[
          {
              id:"0235",
              passwordhash:"azerty159357"
          },
          {
              id:"0288",
              passwordhash:"azerty159357"
          }
        ],
        userCategory:"Bronze",
        accountStatus:'active',
        affiliateName:'test123',
        affiliateID:'1234',
        totalAmounts:[
          {id:'1',total:'1234566'},
          {id:'2',total:'987654'},
  
        ],
        totalTransaction:'4',
        firstSeen:'2023-10-14T16:01:40.021Z'
      }
]