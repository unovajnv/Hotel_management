import { displayHotel } from "./displayHotel";
import { hotelList } from "./addHotel";
displayHotel();
const numberOfRooms = 4;
function RoomBook(): void {
  for (let i = 0; i < hotelList.length; i++) {
    if (hotelList[i].getRoomsAvailable() >= numberOfRooms) {
      console.log(`"Your Room Are booked in  ${hotelList[i].getHotelname()}"`);
      hotelList[i].setRoomsAvailable(hotelList[i].getRoomsAvailable() - numberOfRooms);
      break;
    }
  }
}
export {RoomBook};
