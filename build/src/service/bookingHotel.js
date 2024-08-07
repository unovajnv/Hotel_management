"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomBook = RoomBook;
const addHotel_1 = require("./addHotel");
function RoomBook(rooms) {
    let a = 1;
    for (let i = 0; i < addHotel_1.hotels.length; i++) {
        if (addHotel_1.hotels[i].getRoomsAvailable() >= rooms) {
            console.log(`Your Room Are booked in  ${addHotel_1.hotels[i].getHotelname()}"`);
            addHotel_1.hotels[i].setRoomsAvailable(addHotel_1.hotels[i].getRoomsAvailable() - rooms);
            a = 0;
            break;
        }
    }
    if (a == 1) {
        console.log("Rooms are not available");
    }
}
