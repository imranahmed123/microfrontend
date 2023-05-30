# microfrontend
React JS MFA 

Micro frontend
Host App - http://localhost:8085/
App1 - http://localhost:8081/
App2 - http://localhost:8082/
App3 - http://localhost:8083/
App4 - http://localhost:8084/
-----------------------------------------------------
NodeJS (BFF) - http://localhost:3000/countries
App1 call BFF - http://localhost:3000/countries?cname=India
App2 call BFF - http://localhost:3000/countries?cname=SriLanka
App3 call BFF - http://localhost:3000/countries?cname=Burma
App4 call BFF - http://localhost:3000/countries?cname=Thailand
-----------------------------------------------------



-----------------------------------------------------
NodeJS (BFF) calls MongoDB (Cloud cluster0)
Atlas atlas-nv82wc-shard-0 [primary] test> db.countries.find()
[  {
    _id: ObjectId("646f08f42ae77eb475519ff3"),
    name: 'United States',
    totalCases: 1000000,
    totalDeaths: 50000,
    totalRecovered: 800000,
    activeCases: 150000,
    __v: 0
  },  {
    _id: ObjectId("646f0a0419bb187a397f9c1c"),
    name: 'India',
    totalCases: 1000000,
    totalDeaths: 50000,
    totalRecovered: 800000,
    activeCases: 150000,
    __v: 0
  },  {
    _id: ObjectId("646f0a6d7d9f7d75411ffbfd"),
    name: 'Burma',
    totalCases: 1000000,
    totalDeaths: 50000,
    totalRecovered: 800000,
    activeCases: 150000,
    __v: 0
  },  {
    _id: ObjectId("646f12222487751e8e255d41"),
    name: 'SriLanka',
    totalCases: 1000000,
    totalDeaths: 50000,
    totalRecovered: 800000,
    activeCases: 150000,
    __v: 0
  },  {
    _id: ObjectId("6470455dde8df401da3903e7"),
    name: 'Thailand',
    totalCases: 6000000,
    totalDeaths: 10000,
    totalRecovered: 800000,
    activeCases: 20000,
    __v: 0
  }
]

