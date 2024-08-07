"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomBook = RoomBook;
const displayHotel_1 = require("./displayHotel");
const addHotel_1 = require("./addHotel");
(0, displayHotel_1.displayHotel)();
const numberOfRooms = 4;
function RoomBook() {
    for (let i = 0; i < addHotel_1.hotelList.length; i++) {
        if (addHotel_1.hotelList[i].getRoomsAvailable() >= numberOfRooms) {
            console.log(`"Your Room Are booked in  ${addHotel_1.hotelList[i].getHotelname()}"`);
            addHotel_1.hotelList[i].setRoomsAvailable(addHotel_1.hotelList[i].getRoomsAvailable() - numberOfRooms);
            break;
        }
    }
}
