import {Hotel} from '../model/Hotel';

export let hotels:Hotel[] = [];
export function addHotel(h1: Hotel)
{
    hotels.push(h1);
    console.log(hotels);
}
export function ShowHotel()
{
    console.log(hotels);
}