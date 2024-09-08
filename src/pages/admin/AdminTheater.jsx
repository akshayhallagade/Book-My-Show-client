import { useCallback, useRef } from "react";
import { Cross } from "../../assets/icons";
import Header from "../../components/Header";
import { useAddTheater } from "../../hooks/mutation/addTheater";
import { useGetAllTheaters } from "../../hooks/query/theaters.query";
import { useDeleteTheater } from "../../hooks/mutation/deleteTheater";

const AdminTheater = () => {
  // Sending Data
  const { mutateAsync: addTheaterAsync } = useAddTheater();

  //getting Data
  const { theater, isLoading } = useGetAllTheaters();

  //Delete Theater
  const { mutateAsync: deleteTheaterAsync } = useDeleteTheater();

  const theaterName = useRef();
  const lat = useRef();
  const long = useRef();
  const address = useRef();
  const isActive = useRef();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    await addTheaterAsync({
      theaterName: theaterName.current.value,
      lat: lat.current.value,
      long: long.current.value,
      address: address.current.value,
      isActive: isActive.current.value,
    });
    console.log(
      theaterName.current.value,
      lat.current.value,
      long.current.value,
      address.current.value,
      isActive.current.value
    );
    theaterName.current.value = "";
    lat.current.value = "";
    long.current.value = "";
    address.current.value = "";
  }, []);

  const handleDelete = useCallback(async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    await deleteTheaterAsync({ id: e.currentTarget.id });
  }, []);

  return (
    <>
      <div className="relative w-screen h-screen">
        <Header />
        <div className="flex gap-3 px-4 py-6 h-full">
          <div className="w-1/4 bg-gray-400 gap-2 px-4 py-3 rounded-md">
            <h1 className="text-2xl font-bold text-center">Add Theater</h1>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col gap-2 mt-5"
            >
              <input
                type="text"
                placeholder="Theater Name"
                ref={theaterName}
                className="px-4 py-2 rounded-md outline-none text-sm"
              />
              <input
                type="text"
                placeholder="lat"
                ref={lat}
                className="px-4 py-2 rounded-md outline-none text-sm"
              />
              <input
                type="text"
                placeholder="long"
                ref={long}
                className="px-4 py-2 rounded-md outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Address"
                ref={address}
                className="px-4 py-2 rounded-md outline-none text-sm"
              />
              <select
                className="px-4 py-2 rounded-md outline-none text-sm"
                ref={isActive}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
              <button className="bg-red-600 rounded-md text-white p-1">
                Add to database
              </button>
            </form>
          </div>
          <div className="w-3/4  px-4 py-2 overflow-scroll">
            <h1 className="text-2xl font-bold text-center">
              Add Theater to Database
            </h1>
            <div className="w-full mt-4 flex items-center justify-center flex-col gap-2 ">
              {isLoading && "Loading"}
              {theater &&
                theater.theaterData.map((ele, id) => (
                  <div
                    className="flex px-6 py-2 text-white w-full rounded-md bg-red-100 hover:bg-red-300"
                    key={id}
                  >
                    <p className="w-2/6 text-black font-bold">
                      {ele.theaterName}
                    </p>
                    <p className="w-3/6 text-black text-sm">
                      {ele.location.address}
                    </p>
                    <p
                      className={`w-1/6 ${
                        ele.isActive ? "text-green-600" : "text-red-600"
                      } text-sm font-semibold text-center`}
                    >
                      {ele.isActive ? "Active" : "Inactive"}
                    </p>
                    <button
                      id={ele._id}
                      className="text-black"
                      onClick={handleDelete}
                    >
                      <Cross />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTheater;
