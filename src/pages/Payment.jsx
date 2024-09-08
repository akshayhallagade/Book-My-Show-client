import { useParams } from "react-router-dom";
import { Dot, Success } from "../assets/icons";
import { useGetShowById } from "../hooks/query/shows.query";
import { useCallback, useRef, useState } from "react";
import { useAddBooking } from "../hooks/mutation/addBooking";

const Payment = () => {
  const { showid } = useParams();
  const ticketRef = useRef();

  //get data for the shows
  const { shows, isLoading } = useGetShowById(showid);

  //get data for the shows
  const { mutateAsync: addBookingAsync } = useAddBooking();

  const [showPayment, setShowPayment] = useState(false);
  const [price, setPrice] = useState(100);
  const [conveniencefee, setConvenienceFee] = useState(18);
  const [total, setTotal] = useState(price + conveniencefee);

  let data = "";
  if (shows && shows.showsData) data = shows.showsData[0];

  const changePrice = useCallback((e) => {
    const ticketPrice = e.target.value * 100;
    const conveniencePrice = ((e.target.value * 100) / 100) * 18.54;
    const totalofAll = ticketPrice + conveniencePrice;
    setPrice(ticketPrice);
    setConvenienceFee(conveniencePrice);
    setTotal(totalofAll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      showid: showid,
      seats: parseInt(ticketRef.current.value),
      amount: parseFloat(total.toFixed(2)),
    });
    await addBookingAsync({
      showId: showid,
      seats: ticketRef.current.value,
      amount: price,
    });
    return setShowPayment(() => true);
  };
  return (
    <div className="flex items-center justify-center flex-col w-screen gap-10 h-fit px-72 py-6  bg-gray-200 ">
      {showPayment && (
        <div className=" w-full px-6 py-20 rounded-md flex items-center justify-center gap-4 bg-white flex-col">
          <Success className="text-green-500 text-7xl" />
          <p className="">Reference Number : d23ewer23423j4n2j4</p>
          <p className="text-black text-xl">
            You have successfully booked your seat
          </p>
        </div>
      )}

      {isLoading && "Loading"}
      <div className="w-full bg-white px-10 py-20 rounded-3xl relative">
        <h1 className="text-red-400 text-3xl">BOOKING SUMMARY</h1>
        <h1 className="text-5xl mt-10 font-semibold">
          {shows && data.movie.title}
        </h1>
        <h1 className="text-2xl mt-4 text-gray-700">
          {shows && data.theater.theaterName}
        </h1>
        <p className="mt-4">
          SEATS :-{" "}
          <input
            className="bg-gray-700 bg-opacity-20 w-20 px-2"
            type="number"
            min={1}
            ref={ticketRef}
            max={100}
            onChange={changePrice}
            defaultValue={1}
          />{" "}
          Tickets
        </p>
        <div className="flex gap-2 items-center mt-2">
          <p className="bg-gray-500 text-white px-2 rounded-sm">
            {shows && data.movie.dimension_type}
          </p>
          <p className="bg-gray-500 text-white px-2 rounded-sm">
            {shows && data.movie.language}
          </p>
        </div>
        <div className="flex gap-2 items-center  mt-2">
          <p className="text-base text-gray-700 ">
            {shows && data.movie.genre}
          </p>
          <Dot className="text-black" />
          <p className="text-base text-gray-700 ">
            {shows && data.movie.length}
          </p>
          <Dot className="text-black" />
          <p className="text-base text-gray-700 ">
            {shows && new Date(data.movie.release_date).toDateString()}
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <div>1 Ticket * 100</div>
            <div className="text-xl">Rs.{price.toFixed(2)}</div>
          </div>
          <div className="flex justify-between mt-4">
            <div>Convenience fees + GST</div>
            <div className="text-xl">Rs.{conveniencefee.toFixed(2)}</div>
          </div>
          <hr className="border-gray-500 mt-6" />
          <div className="flex justify-between mt-4">
            <div className="font-bold">Sub Total</div>
            <div className="text-xl">Rs. {total.toFixed(2)}</div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 bg-yellow-200 flex justify-between w-full px-10 py-4 font-semibold text-xl">
          <p>Amount Payable</p>
          <p>Rs. {total.toFixed(2)}</p>
        </div>
      </div>
      <button
        className="w-full  bg-red-600 text-white rounded-lg flex justify-between px-10 py-4 font-semibold text-xl mt-10"
        onClick={handleSubmit}
      >
        <p>Proceed</p>
        <p>TOTAL : Rs. {total.toFixed(2)}</p>
      </button>
    </div>
  );
};

export default Payment;
