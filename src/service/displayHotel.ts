import { hotelList } from "./addHotel";

function displayHotel(): void {
    hotelList.forEach(hotel => {
        if(parseInt(`${hotel.getRoomsAvailable()}`) === -1){
            console.log( `ID: ${hotel.getID()}, Hotel Name: ${hotel.getHotelname()}, Location: ${hotel.getHotelLocation()}, Contact: ${hotel.getContact()},  Rooms Are Not Available`);
        }
        else {
        console.log(`ID: ${hotel.getID()}, Hotel Name: ${hotel.getHotelname()}, Location: ${hotel.getHotelLocation()}, Contact: ${hotel.getContact()}, Rooms Available: ${hotel.getRoomsAvailable()}`);
        }
    });
}
export {displayHotel};
