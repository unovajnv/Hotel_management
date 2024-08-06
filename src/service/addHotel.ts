import {Hotel} from '../model/Hotel';


let hotel1 = new Hotel(1, "Tulip Inn", 'Benglore', '93849', -1);
let hotel2 = new Hotel(2, "JW marriot", 'Benglore', '9349', 10);
let hotel3 = new Hotel(3, "Krishh Inn", 'Benglore', '93889', 11);
let hotel4 = new Hotel(4, "ABC", 'Benglore', '93849', 5);
let hotel5 = new Hotel(5, "XYZ", 'Benglore', '935229', 7);

let hotelList = [hotel1, hotel2, hotel3, hotel4, hotel5];

export {hotelList};