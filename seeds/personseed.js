
const sequelize = require('../config/connection');
const Person = require("../models/person")



const persons  = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "555-555-5555",
      address: "123 Main St, Anytown USA",
      githubProfile: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      portfolio: "https://johndoe.com"
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "555-555-5555",
      address: "456 Maple Ave, Anytown USA",
      githubProfile: "https://github.com/janesmith",
      linkedin: "https://www.linkedin.com/in/janesmith",
      portfolio: "https://janesmith.com"
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      phone: "555-555-5555",
      address: "789 Oak St, Anytown USA",
      githubProfile: "https://github.com/bobjohnson",
      linkedin: "https://www.linkedin.com/in/bobjohnson",
      portfolio: "https://bobjohnson.com"
    }
  ]


  const seedAll  = async () => {
    await sequelize.sync({ force: true});
    Person.bulkCreate(persons);
  }

seedAll()