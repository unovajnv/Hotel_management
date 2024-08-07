"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotels = void 0;
exports.addHotel = addHotel;
exports.ShowHotel = ShowHotel;
const Hotel_1 = require("../model/Hotel");
exports.hotels = [
    new Hotel_1.Hotel(2, "JW marriot", 'Benglore', '9349', 15),
];
function addHotel(h1) {
    exports.hotels.push(h1);
    console.log(exports.hotels);
}
function ShowHotel() {
    console.log(exports.hotels);
}
