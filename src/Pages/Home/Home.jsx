import banner from "../../assets/banner.jpg";
const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-6/12 py-24 px-6 sm:py-0">
        <h3 className="font-bold">
          The Ultimate Guide to Project Management Excellence
        </h3>
        <p className="text-sm py-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non
          saepe commodi cupiditate? Vero accusantium placeat laudantium
          similique libero. Dolorum eveniet repellat illo velit laborum cumque
          facilis, iure id vero!
        </p>
        <button className="mt-2 px-6 py-1 bg-blue-600 text-white font-medium rounded-full">
          Read More
        </button>
      </div>
      <img
        src={banner}
        alt="banner"
        className="w-full sm:w-8/12 sm:block hidden"
      />
    </div>
  );
};

export default Home;
