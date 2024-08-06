"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(id, hotelname, hotelLocation, contact, roomsAvailable) {
        this.id = id;
        this.Hotelname = hotelname;
        this.HotelLocation = hotelLocation;
        this.Contact = contact;
        this.RoomsAvailable = roomsAvailable;
    }
    getID() {
        return this.id;
    }
    getHotelname() {
        return this.Hotelname;
    }
    getHotelLocation() {
        return this.HotelLocation;
    }
    getContact() {
        return this.Contact;
    }
    getRoomsAvailable() {
        return this.RoomsAvailable;
    }
    setRoomsAvailable(newRoomsAvailable) {
        this.RoomsAvailable = newRoomsAvailable;
    }
}
exports.Hotel = Hotel;
;
