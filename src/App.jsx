export default App

import { Loader } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-neutral-950">
        <div className="h-3/6 w-[30%] flex justify-center items-center bg-white rounded-md shadow-2xl">
          <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
            <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
            <input type="text" name="" id="" placeholder="Email" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
            <input type="number" name="" id="" placeholder="Phone" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
            <input type="password" name="" id="" placeholder="Password" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
            <button type="submit" className="w-full bg-cyan-400 text-black p-3"> <Loader  className="animate-spin"/>  Register</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default App;
