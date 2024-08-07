"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var read = require("../node_modules/readline-sync");
const Hotel_1 = require("../model/Hotel");
const addHotel_1 = require("./addHotel");
const addHotel_2 = require("./addHotel");
const bookingHotel_1 = require("./bookingHotel");
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
            let h1 = new Hotel_1.Hotel(id, name, loc, contact, rooms);
            (0, addHotel_1.addHotel)(h1);
            break;
        }
        case "2": {
            (0, addHotel_2.ShowHotel)();
            break;
        }
        case "3": {
            let numberofRooms = read.question("Enter Number of Rooms you want to book:  ");
            (0, bookingHotel_1.RoomBook)(numberofRooms);
        }
        default: {
            flag = false;
        }
    }
}
