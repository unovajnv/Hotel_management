"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomBook = RoomBook;
var addHotel_1 = require("./addHotel");
function RoomBook(rooms) {
    var a = 1;
    for (var i = 0; i < addHotel_1.hotels.length; i++) {
        if (addHotel_1.hotels[i].getRoomsAvailable() >= rooms) {
            console.log("Your Room Are booked in  ".concat(addHotel_1.hotels[i].getHotelname(), "\""));
            addHotel_1.hotels[i].setRoomsAvailable(addHotel_1.hotels[i].getRoomsAvailable() - rooms);
            a = 0;
            break;
        }
    }
    if (a == 1) {
        console.log("Rooms are not available");
    }
}
