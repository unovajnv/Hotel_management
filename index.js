"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var read = require("./node_modules/readline-sync");
var Hotel_1 = require("./src/model/Hotel");
var addHotel_1 = require("./src/service/addHotel");
var addHotel_2 = require("./src/service/addHotel");
var bookingHotel_1 = require("./src/service/bookingHotel");
console.log("Welcome to Hotel Management System");
var flag = true;
while (flag) {
    console.log("1 : Add Hotel");
    console.log("2 : Show Available Hotels");
    console.log("3 : Book Hotels");
    var choice = read.question("Enter your choice: ");
    switch (choice) {
        case "1": {
            var id = read.question("Enter Your Hotel ID: ");
            var name_1 = read.question("Enter Hotel Name: ");
            var loc = read.question("Enter Your Hotel Location: ");
            var contact = read.question("Enter Your Hotel Contact Number: ");
            var rooms = read.question("Enter Number of Rooms Available: ");
            var h1 = new Hotel_1.Hotel(id, name_1, loc, contact, rooms);
            (0, addHotel_1.addHotel)(h1);
            break;
        }
        case "2": {
            (0, addHotel_2.ShowHotel)();
            break;
        }
        case "3": {
            var numberofRooms = read.question("Enter Number of Rooms you want to book:  ");
            (0, bookingHotel_1.RoomBook)(numberofRooms);
        }
        default: {
            flag = false;
        }
    }
}
