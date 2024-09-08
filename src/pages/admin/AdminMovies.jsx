import { useCallback, useRef, useState } from "react";
import Header from "../../components/Header";
import DatePicker from "react-datepicker";
import { useAddMovie } from "../../hooks/mutation/addMovie";
import { useGetAllMovies } from "../../hooks/query/movies.query";
import { Cross } from "../../assets/icons";
import { useDeleteMovie } from "../../hooks/mutation/deleteMovie";

const AdminMovies = () => {
  //Send Data
  const { mutateAsync: addMovieAsync } = useAddMovie();
  //Get Data
  const { movies, isLoading } = useGetAllMovies();
  // Delete Data
  const { mutateAsync: deleteMovieAsync } = useDeleteMovie();

  const [startDate, setStartDate] = useState(new Date());

  const title = useRef();
  const genre = useRef();
  const length = useRef();
  const dimension_type = useRef();
  const language = useRef();
  const description = useRef();

  const handleAddMovie = useCallback(async (e) => {
    e.preventDefault();

    await addMovieAsync({
      title: title.current.value,
      genre: genre.current.value,
      length: length.current.value,
      release_date: startDate.toDateString(),
      dimension_type: dimension_type.current.value,
      language: language.current.value,
      description: description.current.value,
    });

    title.current.value = "";
    genre.current.value = "";
    length.current.value = "";
    setStartDate(new Date());
    dimension_type.current.value = "";
    language.current.value = "";
    description.current.value = "";
  });

  const handleDelete = useCallback(async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    await deleteMovieAsync({ id: e.currentTarget.id });
  }, []);

  return (
    <>
      <div className="relative w-screen">
        <Header />
        <div className="flex gap-3 px-4 py-6 h-full">
          {/* //Movie  */}
          <div className="w-1/4 bg-gray-400 gap-2 px-4 py-6 rounded-md">
            <h1 className="text-2xl font-bold text-center">Add Movies</h1>
            <form
              onSubmit={handleAddMovie}
              className="flex justify-center flex-col gap-2 mt-5"
            >
              <input
                type="text"
                placeholder="title"
                ref={title}
                className="px-4 py-2 rounded-md outline-none text-sm placeholder:text-sm "
              />
              <select
                className="px-3 py-2 rounded-md outline-none text-sm placeholder:text-sm"
                defaultValue=""
                ref={genre}
              >
                <option value="">genre --</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Thriller">Thriller</option>
                <option value="Horror">Horror</option>
              </select>
              <input
                type="text"
                placeholder="length"
                ref={length}
                className="px-4 py-2 rounded-md outline-none text-sm placeholder:text-sm"
              />
              <DatePicker
                className="px-4 py-2 rounded-md outline-none text-sm"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <select
                className="px-3 py-2 rounded-md outline-none text-sm placeholder:text-sm"
                defaultValue=""
                ref={dimension_type}
              >
                <option value="">2D or 3D --</option>
                <option value="2D">2D</option>
                <option value="3D">3D</option>
              </select>
              <select
                className="px-3 py-2 rounded-md outline-none text-sm placeholder:text-sm"
                defaultValue=""
                ref={language}
              >
                <option value="">select language --</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
              <textarea
                type="sdf"
                placeholder="description "
                ref={description}
                className="px-4 py-2 rounded-md outline-none text-sm placeholder:text-sm"
              />
              <button
                className="bg-red-600 rounded-md text-white p-1"
                type="submit"
              >
                Add to database
              </button>
            </form>
          </div>
          {/* //Database  */}
          <div className="w-3/4  px-4 py-2 overflow-scroll">
            <h1 className="text-2xl font-bold text-center">
              Add Movie to Database
            </h1>
            <div className="w-full mt-4 flex items-center justify-center flex-col gap-2 ">
              {isLoading && "Loading"}
              {movies &&
                movies.movieData.map((ele, id) => (
                  <div
                    className="bg-green-400 flex px-6 py-2  w-full text-sm rounded-md hover:bg-green-500"
                    key={id}
                  >
                    <p className="w-2/6 text-black font-bold">{ele.title}</p>
                    <p className="w-1/6 text-black">{ele.language}</p>
                    <p className="w-2/6 text-gray-700 ">
                      {new Date(ele.release_date).toDateString()}
                    </p>
                    <p className="w-1/6 text-gray-700">{ele.genre}</p>
                    <button id={ele._id} onClick={handleDelete}>
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
export default AdminMovies;
