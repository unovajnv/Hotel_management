"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHotel = displayHotel;
const addHotel_1 = require("./addHotel");
function displayHotel() {
    addHotel_1.hotelList.forEach(hotel => {
        if (parseInt(`${hotel.getRoomsAvailable()}`) === -1) {
            console.log(`ID: ${hotel.getID()}, Hotel Name: ${hotel.getHotelname()}, Location: ${hotel.getHotelLocation()}, Contact: ${hotel.getContact()},  Rooms Are Not Available`);
        }
        else {
            console.log(`ID: ${hotel.getID()}, Hotel Name: ${hotel.getHotelname()}, Location: ${hotel.getHotelLocation()}, Contact: ${hotel.getContact()}, Rooms Available: ${hotel.getRoomsAvailable()}`);
        }
    });
}
