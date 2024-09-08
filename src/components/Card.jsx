import movie1 from "../assets/movie/movie1.avif";

const Card = ({ data }) => {
  return (
    <div className="w-48 ">
      <a href={`movies/${data._id}`}>
        <img src={movie1} alt="img" className="rounded-md" />
      </a>
      <h2 className="text-black font-medium mt-2">{data.title}</h2>
      <p className="text-sm text-gray-700 ">{data.genre}</p>
      <p className="text-sm text-gray-700 ">
        {new Date(data.release_date).toDateString()}
      </p>
    </div>
  );
};

export default Card;
