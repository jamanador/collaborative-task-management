import auth from '../../assets/auth.svg';
const Login = () => {
    return (
        <section className="flex justify-evenly items-center py-12">
        <div className='hidden md:block'>
           <img src={auth} className='w-96' alt="" />
        </div>
        <form className="w-full px-6 sm:w-5/12">
   
                 <div className="relative flex items-center mt-6">
                   <span className="absolute">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth="2"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                       />
                     </svg>
                   </span>
   
                   <input
                     type="email"
                     className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                     placeholder="Email address"
                   />
                 </div>
   
                 <div className="relative flex items-center mt-4">
                   <span className="absolute">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth="2"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                       />
                     </svg>
                   </span>
   
                   <input
                     type="password"
                     className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                     placeholder="Password"
                   />
                 </div>
   
                 <div className="mt-6">
                   <button
                     type="submit"
                     className="w-full bg-blue-500 text-white rounded-lg py-2 px-6 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                   >
                     SUBMIT 
                   </button>
                 </div>
                 {/* <h3 className="text-center pt-4 font-bold text-sm ">Sign Up With</h3> */}
               </form>
       </section>
    );
};

export default Login;