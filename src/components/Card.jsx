import movie1 from "../assets/movie/movie1.avif";

const Card = () => {
  return (
    <div className="w-48">
      <img src={movie1} alt="img" className="rounded-md" />
      <h2 className="text-black font-medium mt-2">Stree : Sarkate ka Atank</h2>
      <p className="text-sm text-gray-700 ">Comedy/Horror</p>
    </div>
  );
};

export default Card;
