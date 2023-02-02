//Make sure to require your model so you can connect to the DB
const VikingModel = require("./models/User.js");

//This line of code connects to the Database // requires Mongoose for the db 
// require("./db");


const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/valhalla", { family: 4 })
  .then(() => {
    console.log(`Connected to Mongo! Welcome to Valhalla!  🪓🛡️☠️`);
  })
  .catch((err) => {
    console.error("Error connecting to DB", err);
  });


//Iteration 2:

const Robert = {
    firstname: "Robert",
    familyName: "Edgard",
    strength: 9,
    weapon: "Sword",
}

// To push our Viking

// VikingModel.create(Robert)
//     .then((oneViking)=>{
//         console.log(oneViking, "Has been created")
//     })
//     .catch((err)=>{
//         console.log(err, "Error!")
//     })


//Iteration 3:

//Find by ID and delete 
// VikingModel.findByIdAndDelete("63dba09b59278ed4ab6f2c4c")
//   .then((deletedVik) =>{
//     console.log("You deleted", deletedVik)
//   })
//   .catch((err)=>{
//     console.log("You ran into an error", err)
//   })

// VikingModel.deleteMany()

//Another method that also works
// VikingModel.findOneAndDelete({firqtName: "Robert"});



//To delete the Vikings 
const deleteViking = async () => {
    try {
        const deletedViking = await VikingModel.findOneAndDelete({
            firstName:Ragnar
        })
        console.log("Viking deleted",deletedViking);
    } catch (err){
        console.log(err)
    }
}
deleteViking()


// const vikingArr =[

//     {
//     firstname: "Bjorn",
//     familyName: "Torsten",
//     strength: 50,
//     weapon: "LongBow",
//     },

//     {
//         firstname: "Helga",
//         familyName: "Edgardson",
//         strength: 50,
//         weapon: "Knife",
//     },

//     {
//         firstname: "Leif",
//         familyName: "Eriksson",
//         strength: 25,
//         weapon: "Mace",
//     },

//     {
//         firstname: "Frida",
//         familyName: "Eriksson",
//         strength: 70,
//         weapon: "Flowers",
//     }

// ]


// Inserting many vikings

// VikingModel.insertMany(vikingArr)
//     .then((allVikings)=>{
//         console.log(allVikings, "Have been created")
//     })
//     .catch((err)=>{
//         console.log(err, "Error!")
//     })


// the {new: true} allows us to watch the updated version in the terminal
VikingModel.findOneAndUpdate({firstname:"Frida"}, {strength:1000}, {new:true})
    .then((updatedViking)=>{
        console.log(updatedViking, "Has been updated")
    })
    .catch((err)=>{
        console.log(err, "Error!")
    })


    // Update with async and await: 
    const updateViking = async () => {
        try {
            const updateViking = await VikingModel.findOneAndUpdate(
                { firstName:"Ragnar"},
                {firstName: "Odin", strength : 1000},
                {new: true},)
            console.log("Viking updated", updateViking);
        } catch (err){
            console.log(err)
        }
    }
    updateViking()