const Sidebar = () => {
  return (
    <div className="fixed z-50 w-80 h-screen bg-white right-0 top-0 p-4 ">
      <div className="w-full h-16 p-2">
        <p className="text-lg font-bold text-gray-700">Hey!</p>
      </div>
      <hr />
      <div className="flex flex-col items-end justify-center gap-2  h-28">
        <a
          className="px-3 py-1 ring-1 ring-red-700 rounded-md text-sm text-red-700"
          href="/signin"
        >
          Login
        </a>
        <a
          className="px-3 py-1 ring-1 ring-red-700 rounded-md text-sm text-red-700"
          href="/signup"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
