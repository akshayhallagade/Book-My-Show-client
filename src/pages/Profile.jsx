import Header from "../components/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="flex w-screen h-screen p-2 gap-4 bg-gray-200">
        <div className="w-1/4  bg-white px-8 py-16 relative">
          <h1 className="text-3xl underline uppercase text-gray-600 font-bold">
            Profile
          </h1>
          <div className="mt-6">
            <h1>Akshay Hallagade</h1>
            <p>akshay@gmail.com</p>
            <p>Age: 21</p>
          </div>
          <a
            href=""
            className="absolute bg-red-600 bottom-5 right-5 text-white px-4 py-2 rounded-md"
          >
            Sign out
          </a>
        </div>
        <div className="w-3/4 bg-white px-8 py-16">
          <h1 className="text-3xl underline uppercase text-gray-600 font-bold">
            Booking
          </h1>
          <div className="w-full mt-6 flex item-center justify-center flex-col gap-2">
            <div className="bg-gray-300 px-6 py-2 flex">
              <div className="w-1/6 text-gray-700">26/12/1998</div>
              <div className="w-2/6 text-black font-medium">
                Stree 2: Sarkate ka Aatank
              </div>
              <div className="w-2/6">Shree. Ganesh Talkies</div>
              <div className="w-1/6">Tickets : 2</div>
            </div>
            <div className="bg-gray-300 px-6 py-2 flex">
              <div className="w-1/6 text-gray-700">26/12/1998</div>
              <div className="w-2/6 text-black font-medium">
                Stree 2: Sarkate ka Aatank
              </div>
              <div className="w-2/6">Shree. Ganesh Talkies</div>
              <div className="w-1/6">Tickets : 2</div>
            </div>
            <div className="bg-gray-300 px-6 py-2 flex">
              <div className="w-1/6 text-gray-700">26/12/1998</div>
              <div className="w-2/6 text-black font-medium">
                Stree 2: Sarkate ka Aatank
              </div>
              <div className="w-2/6">Shree. Ganesh Talkies</div>
              <div className="w-1/6">Tickets : 2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
