import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="body    h-screen overflow-y-auto overflow-x-hidden gap-5   w-full  flex justify-center  items-center flex-col pt-[500px] pb-[50px] bg-main-gradient">
      <div className="w-[100vw] flex justify-center items-center flex-col">
        <div className="home h-[80vh] w-[80%] bg-[#081b29] rounded-tl-xl rounded-tr-xl flex flex-col gap-7">
          <nav className="text-white flex h-[7rem] justify-center items-center gap-[45rem] ">
            <div className="font-bold text-2xl">Saif-Eddine .</div>
            <div className="flex justify-center  items-center gap-5">
              <a className="font-semibold" href="">
                Home
              </a>
              <a className="font-semibold" href="">
                About
              </a>
              <a className="font-semibold" href="">
                Skill
              </a>
              <a className="font-semibold" href="">
                Contact
              </a>
            </div>
          </nav>
          <div className="h-[50vh] w-[100%] flex  ">
            <div className="w-[70%] h-[25rem]  text-white flex justify-center items-center flex-col gap-5">
              <h1 className="text-4xl font-semibold">Hi ,Im Saif-Eddine</h1>
              <p className="font-bold text-xl text-maincolor">A Developer</p>
              <p className="text-sm text-[#d0d1d1] font-lg">
                Enthusiastic web developer dedicated to crafting engaging and
                innovative online <br /> experiences. Always eager to learn and
                adapt to new challenges in the ever-evolving <br /> digital
                landscape, fostering collaboration and creativity.
              </p>
              <button className="text-maincolor border-2 w-[150px] h-[40px] border-maincolor rounded-lg hover:duration-200 hover:bg-maincolor font-semibold hover:text-white ">
                Lets Talk
              </button>
            </div>
            <div className="w-[30%] bg-transparent"></div>
          </div>

          <div className="text-maincolor pl-[50px] flex gap-3 z-30 text-xl  w-[50px]">
            <a
              className="border-maincolor border-2 rounded-full flex justify-center items-center hover:duration-200 hover:bg-maincolor hover:text-white p-2"
              href=""
            >
              <FaFacebookF />
            </a>
            <a
              className="border-maincolor border-2 rounded-full flex justify-center items-center  hover:duration-200 hover:bg-maincolor hover:text-white p-2"
              href=""
            >
              <FaLinkedinIn />
            </a>
            <a
              className="border-maincolor border-2 rounded-full flex justify-center items-center hover:duration-200 hover:bg-maincolor hover:text-white p-2"
              href=""
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="w-[80%] text-white flex flex-col justify-center gap-6 items-center h-[65vh] bg-[#122e43] rounded-bl-xl rounded-br-xl  ">
          <div className="text-4xl font-semibold">
            About <span className="text-maincolor">Me</span>
          </div>
          <div className="h-[11rem] w-[11rem] bg-red-500 rounded-full"></div>
          <div className="text-xl font-semibold flex flex-col justify-center items-center gap-2">
            <div>Front & back -End Developer</div>
            <p className="text-sm text-[#d0d1d1] font-lg text-center">
              Enthusiastic web developer dedicated to crafting engaging and
              innovative online <br /> experiences. Always eager to learn and
              adapt to new challenges in the ever-evolving <br /> digital
              landscape, fostering collaboration and creativity.
            </p>
          </div>
          <button className="text-maincolor border-2 w-[150px] h-[40px] border-maincolor rounded-lg hover:duration-200 hover:bg-maincolor font-semibold hover:text-white ">
            Lets Talk
          </button>
        </div>
        <div></div>
      </div>
      {/* <div className="w-[100vw] flex justify-center items-center flex-col">
        <div className="h-[80vh]  w-[80%] bg-[#081b29] rounded-tl-xl rounded-tr-xl flex flex-col gap-7"></div>
      </div> */}
    </div>
  );
}

export default App;
