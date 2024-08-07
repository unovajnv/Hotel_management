import {Hotel} from '../model/Hotel';

export let hotels:Hotel[] = [
    new Hotel(2, "JW marriot", 'Benglore', '9349', 15),
];
export function addHotel(h1: Hotel)
{
    hotels.push(h1);
    console.log(hotels);
}
export function ShowHotel()
{
    console.log(hotels);
}