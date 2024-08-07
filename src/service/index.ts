var read = require("../node_modules/readline-sync");
import { Hotel } from "../model/Hotel";
import { addHotel } from "./addHotel";
import { ShowHotel } from "./addHotel";
import { RoomBook } from "./bookingHotel";

console.log("Welcome to Hotel Management System");
let flag = true;
while (flag) {
  console.log("1 : Add Hotel");
  console.log("2 : Show Available Hotels");
  console.log("3 : Book Hotels");

  let choice = read.question("Enter your choice: ");
  switch (choice) {
    case "1": {
      let id = read.question("Enter Your Hotel ID: ");
      let name = read.question("Enter Hotel Name: ");
      let loc = read.question("Enter Your Hotel Location: ");
      let contact = read.question("Enter Your Hotel Contact Number: ");
      let rooms = read.question("Enter Number of Rooms Available: ");
      let h1 = new Hotel(id, name, loc, contact, rooms);
      addHotel(h1);
      break;
    }
    case "2": {
      ShowHotel();
      break;
    }
    case "3": {
      let numberofRooms = read.question(
        "Enter Number of Rooms you want to book:  "
      );
      RoomBook(numberofRooms);
    }
    default: {
      flag = false;
    }
  }
}
