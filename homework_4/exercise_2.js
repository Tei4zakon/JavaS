 //*a

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
  }
 
 let additionalInfo = {
    email: "john.doe@gmail.com",
  phone: "075534682",
  education: {
    degree: "Bachelor",
    major: "Criminology",
  },
};

let combineObjects = {...person, ...additionalInfo }
console.log(combineObjects)


//*b

const user = {
    id: 123,
    username: "jsmith",
    fullName: { firstName: "John", lastName: "Smith" },
    contact: { email: "john@example.com", phone: "555-555-5555" },
    addresses: [
      {
        type: "home",
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
      {
        type: "work",
        street: "456 Market Street",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
      },
    ],
  }

  
  const {addresses  : [{street:homeStreet, city:homeCity, state:homeState,  zip:homeZip} ,
    { street:workStreet, city:workCity, state:workState, zip:workZip }]} = user

    console.log(user.username, user.fullName.firstName, user.fullName.lastName, user.contact.email)
    console.log("homeAddress:", homeStreet, homeCity, homeState, homeZip, "workAddress:", workStreet, workCity, workState, workZip)
    
    

  
   


