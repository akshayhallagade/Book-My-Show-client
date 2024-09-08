import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddBooking } from "../hooks/mutation/addBooking";

const SeatBooking = () => {
  const { showid } = useParams();
  // const navigation = useNavigation();
  const [selectedSeat, setSelectedSeat] = useState([]);

  //add data to bookings
  const { mutateAsync: createbookingAsync } = useAddBooking();

  const handleAddSeat = (e) => {
    e.preventDefault();

    const seatId = parseInt(e.currentTarget.id, 10);
    setSelectedSeat((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        // If seat selected, remove it
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        // Otherwise, add seat
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      showId: showid,
      seats: selectedSeat,
      amount: selectedSeat.length * 100,
    });
    await createbookingAsync({
      showId: showid,
      seats: selectedSeat,
      amount: selectedSeat.length * 100,
    });
  };

  return (
    <>
      <div className="w-screen h-fit px-10 py-4 border-b-2"></div>
      <div className="px-10 p-4">
        <h1 className="font-bold underline text-center">SEATS</h1>
        <div className="grid grid-flow-row grid-cols-12 px-60 gap-4 mt-10">
          {Array.from({ length: 100 }, (_, i) => (
            <button
              key={i}
              id={i + 1}
              className={`ring-1 p-2  ${
                selectedSeat.includes(i + 1) ? "bg-green-600" : "bg-slate-100"
              }`}
              onClick={handleAddSeat}
            ></button>
          ))}
        </div>
        <div className="text-center mt-10 flex justify-center ">
          <p className="border-t-2 w-fit"> Theater Screen</p>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button
          onClick={handleSubmit}
          disabled={selectedSeat.length === 0}
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md disabled:bg-gray-400"
        >
          Go to Payment page
        </button>
      </div>
    </>
  );
};

export default SeatBooking;
