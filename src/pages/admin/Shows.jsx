import DatePicker from "react-datepicker";
import { Cross } from "../../assets/icons";
import Header from "../../components/Header";
import { useCallback, useRef, useState } from "react";
import { useGetAllMovies } from "../../hooks/query/movies.query";
import { useGetAllTheaters } from "../../hooks/query/theaters.query";
import { useGetAllShows } from "../../hooks/query/shows.query";
import { useAddShows } from "../../hooks/mutation/addShows";
import { useDeleteShows } from "../../hooks/mutation/deleteShows";

const Show = () => {
  //Get the movies, theater and Shows data
  const { movies } = useGetAllMovies();
  const { theater } = useGetAllTheaters();
  const { shows, isLoading } = useGetAllShows();

  const [startDate, setStartDate] = useState(new Date());

  //Add Shows
  const { mutateAsync: addShowsAsync } = useAddShows();

  // Delete Show
  const { mutateAsync: deleteShowsAsync } = useDeleteShows();

  const movieRef = useRef();
  const theaterRef = useRef();
  const showtimeRef = useRef();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    await addShowsAsync({
      movieId: movieRef.current.value,
      theaterId: theaterRef.current.value,
      showTime: showtimeRef.current.input.value,
    });
  }, []);

  const handleDelete = useCallback(async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    await deleteShowsAsync({ id: e.currentTarget.id });
  }, []);

  return (
    <>
      <div className="relative w-screen h-screen">
        <Header />
        <div className="flex gap-3 px-4 py-6 h-full">
          {/* // add Shows  */}
          <div className="w-1/4 bg-gray-400 gap-2 px-4 py-3 rounded-md">
            <h1 className="text-2xl font-bold text-center">Create show</h1>
            <form
              className="flex justify-center flex-col gap-2 mt-5"
              onSubmit={handleSubmit}
            >
              <select
                className="px-4 py-2 rounded-md outline-none text-sm"
                ref={movieRef}
              >
                <option value="">- Select Movie -</option>
                {movies &&
                  movies.movieData.map((ele, id) => (
                    <option
                      className="text-black"
                      value={`${ele._id}`}
                      key={id}
                    >{`${ele.title}`}</option>
                  ))}
              </select>
              <select
                className="px-4 py-2 rounded-md outline-none text-sm"
                ref={theaterRef}
              >
                <option value="">- Select Theater -</option>
                {theater &&
                  theater.theaterData.map((ele, id) => (
                    <option
                      className="text-black"
                      value={`${ele._id}`}
                      key={id}
                    >{`${ele.theaterName}`}</option>
                  ))}
              </select>
              <DatePicker
                className="px-4 py-2 w-full rounded-md outline-none text-sm"
                selected={startDate}
                showTimeSelect
                dateFormat="Pp"
                ref={showtimeRef}
                onChange={(date) => setStartDate(date)}
              />
              <button
                className="bg-red-600 rounded-md text-white p-1"
                type="submit"
              >
                Add Show
              </button>
            </form>
          </div>
          {/* // Shows Shows  */}
          <div className="w-3/4  px-4 py-2 overflow-auto">
            <h1 className="text-2xl font-bold text-center">Shows Database</h1>
            <div className="w-full mt-4 flex items-center justify-center flex-col gap-2 ">
              {isLoading && "Loading"}
              {shows &&
                shows.showsData.map((ele, id) => (
                  <div
                    className="bg-violet-600 hover:bg-violet-800 flex px-6 py-2 rounded-md text-white w-full "
                    key={id}
                  >
                    <p className="w-2/6 text-white">{ele.movie.title}</p>
                    <p className="w-2/6 text-gray-300">
                      {ele.theater.theaterName}
                    </p>
                    <p className="w-2/6 text-gray-30 text-center">
                      {new Date(ele.showTime).toLocaleString()}
                    </p>
                    <button
                      id={ele._id}
                      className="text-white"
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

export default Show;
