var shopper = {
    firstName: "John",
    lastName: "Doe",
    age: 43,
    isMember: true,
    groceryCart: ['milk','eggs','bread'],
    fullName: function() {
      return this.firstName + " " + this.lastName
    }
  }
  console.log(shopper.fullName())
  console.log(shopper)
