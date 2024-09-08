import Card from "../components/Card";
import Header from "../components/Header";
import { useGetAllMovies } from "../hooks/query/movies.query";

function Movies() {
  const { movies, isLoading } = useGetAllMovies();

  return (
    <>
      <Header />
      <div className="px-10 screen bg-gray-100 py-6">
        <h1 className="text-xl font-bold text-gray-700">Recommonded Movies</h1>
        <div className="grid grid-cols-4 grid-flow-row w-full gap-6 mt-6 ">
          {isLoading && <>Loading</>}
          {movies &&
            movies.movieData.map((ele, id) => <Card data={ele} key={id} />)}
        </div>
      </div>
    </>
  );
}

export default Movies;
