import Header from "../components/Header";
import img from "../assets/movie/movie1.avif";
import { Dot, Share } from "../assets/icons";
import { useCallback } from "react";
import { useGetSingleMovie } from "../hooks/query/movies.query";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeAlertText } from "../reducer/alertSlice";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // get movieData using Id
  const { movie } = useGetSingleMovie(id);

  //Copy to Clipboard
  const handleCopyToClipboard = useCallback(() => {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log(url);
        dispatch(changeAlertText("URL Copied !"));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Header />
      <div className="p-10 bg-gray-800 h-fit flex gap-8 relative">
        <img src={img} alt="img" className="rounded-md w-56" />
        <div className="flex items-start justify-center gap-4 flex-col">
          <h2 className="text-white text-4xl font-medium mt-2">
            {movie?.title}
          </h2>
          <div className="flex gap-2 items-center">
            <p className="bg-gray-100 px-2 rounded-sm">
              {movie?.dimension_type}
            </p>
            <p className="bg-gray-100 px-2 rounded-sm">{movie?.language}</p>
          </div>
          <div className="flex gap-2 items-center  ">
            <p className="text-sm text-gray-200 ">{movie?.genre}</p>
            <Dot className="text-white" />
            <p className="text-sm text-gray-200 ">{movie?.length}</p>
            <Dot className="text-white" />
            <p className="text-sm text-gray-200 ">
              {new Date(movie?.release_date).toDateString()}
            </p>
          </div>
          <button className="mt-10">
            <a
              className="bg-red-600 hover:bg-red-700 px-10 py-2 text-white rounded-md"
              href={`${id}/schedule`}
            >
              Book tickets
            </a>
          </button>
        </div>
        <button
          onClick={handleCopyToClipboard}
          className="absolute top-10 right-20 bg-gray-400 bg-opacity-40 text-white text-sm px-3 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <Share /> Share
        </button>
      </div>
      <div className="p-10 h-fit bg-gray-500">
        <h2 className="text-xl font-bold">About the movie</h2>
        <p className="text-sm mt-4">{movie?.description}</p>
        <button className="mt-10">
          <a
            className="bg-red-600 hover:bg-red-700 px-10 py-2 text-white rounded-md"
            href={`${id}/schedule`}
          >
            Book tickets
          </a>
        </button>
      </div>
    </>
  );
}

export default SingleMovie;
