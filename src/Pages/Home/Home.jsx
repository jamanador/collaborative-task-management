import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";
const Home = () => {
  return (
<div>
<div className="flex md:flex-wrap flex-wrap-reverse justify-center items-center py-8 sm:py-12">
      <div className="w-full md:w-6/12  px-6 sm:py-0">
        <h3 className="font-bold">
          The Ultimate Guide to Project Management Excellence
        </h3>
        <p className="text-sm py-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non
          saepe commodi cupiditate? Vero accusantium placeat laudantium
          similique libero. Dolorum eveniet repellat illo velit laborum cumque
          facilis, iure id vero!
        </p>
       <button  className="mt-3 px-6 py-1 bg-blue-600 text-white font-medium rounded-full">
       <Link to ="/add-task">
          Get Started
        </Link>
       </button>
      </div>
      <div className="w-10/12 md:w-6/12">
      <img
        src={banner}
        alt="banner"
        className="w-full"
      />
      </div>
    </div>
</div>
  );
};

export default Home;
