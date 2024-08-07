"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotels = void 0;
exports.addHotel = addHotel;
exports.ShowHotel = ShowHotel;
exports.hotels = [];
function addHotel(h1) {
    exports.hotels.push(h1);
    console.log(exports.hotels);
}
function ShowHotel() {
    console.log(exports.hotels);
}
