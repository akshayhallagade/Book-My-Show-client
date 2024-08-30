import Card from "../components/Card";
import Header from "../components/Header";

function Homepage() {
  return (
    <>
      <Header />
      <div className="px-10 bg-gray-100">
        <h1 className="text-xl font-bold text-gray-700">Recommonded Movies</h1>
        <div className="flex gap-5 mt-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Homepage;
