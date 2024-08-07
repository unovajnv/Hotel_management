"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
var Hotel = /** @class */ (function () {
    function Hotel(id, hotelname, hotelLocation, contact, roomsAvailable) {
        this.id = id;
        this.Hotelname = hotelname;
        this.HotelLocation = hotelLocation;
        this.Contact = contact;
        this.RoomsAvailable = roomsAvailable;
    }
    Hotel.prototype.getID = function () {
        return this.id;
    };
    Hotel.prototype.getHotelname = function () {
        return this.Hotelname;
    };
    Hotel.prototype.getHotelLocation = function () {
        return this.HotelLocation;
    };
    Hotel.prototype.getContact = function () {
        return this.Contact;
    };
    Hotel.prototype.getRoomsAvailable = function () {
        return this.RoomsAvailable;
    };
    Hotel.prototype.setRoomsAvailable = function (newRoomsAvailable) {
        this.RoomsAvailable = newRoomsAvailable;
    };
    return Hotel;
}());
exports.Hotel = Hotel;
;
