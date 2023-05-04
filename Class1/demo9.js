const myName = {
    fName: 'a',
      fullName: { firstName: "Oluwatobi", lastName: "Sofela" },
    };
    
    const bio = { ...myName };
    
    myName.fullName.firstName = "Tobi";
    bio.fName = 'b'
    myName.fName = 'c'
    
    console.log(myName); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }
    
    console.log(bio); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }
    