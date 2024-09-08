import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useGetAllShowsByMovieId } from "../hooks/query/shows.query";

const MovieSchedule = () => {
  const { id } = useParams();

  const { shows, isLoading } = useGetAllShowsByMovieId(id);

  return (
    <>
      <Header />
      <div className="px-10 py-8">
        <h1 className="text-4xl">
          {isLoading && "Loading"}
          {shows && shows.showsData[0].movie.title}
        </h1>
      </div>
      <div className="p-4 bg-blue-50 w-screen">
        <div className="w-full mt-4 flex items-center justify-center flex-col gap-2 px-12">
          {isLoading && "Loading"}
          {shows &&
            shows.showsData.map((ele, id) => (
              <div
                className="bg-violet-600 hover:bg-violet-800 flex px-6 py-2 rounded-md text-white w-full "
                key={id}
              >
                <p className="w-3/12 text-white flex items-center justify-center">
                  {ele.movie.title}
                </p>
                <p className="w-4/12 text-gray-300 flex items-center justify-center">
                  {ele.theater.theaterName}
                </p>
                <p className="w-3/12 text-gray-30  flex items-center justify-center">
                  {new Date(ele.showTime).toLocaleString()}
                </p>
                <a
                  href={`schedule/${ele._id}/payment`}
                  className="text-white text-center w-2/12 py-2 rounded-md bg-red-700"
                >
                  Book Now
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieSchedule;
