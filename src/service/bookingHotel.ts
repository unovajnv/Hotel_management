import { hotels } from "./addHotel";
function RoomBook(rooms:number,)
{
      let a = 1;
      for(let i = 0; i < hotels.length; i++)
      {
         if(hotels[i].getRoomsAvailable() >= rooms)
         {
           console.log(`Your Room Are booked in  ${hotels[i].getHotelname()}"`);
            hotels[i].setRoomsAvailable(hotels[i].getRoomsAvailable() - rooms);
            a = 0;
            break;
         }
      }
      if(a==1)
      {
        console.log("Rooms are not available");
      }
}

export {RoomBook};
