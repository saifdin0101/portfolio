import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="body h-screen overflow-y-auto overflow-x-hidden bg-main-gradient flex flex-col pt-10">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="home h-[80vh] w-[80%] bg-[#081b29] rounded-tl-xl rounded-tr-xl flex flex-col gap-7 ">
          <nav className="text-white flex h-[7rem] justify-center items-center gap-[45rem]">
            <div className="font-bold text-2xl">Saif-Eddine <span className="text-maincolor text-3xl ">.</span></div>
            <div className="flex justify-center items-center gap-5">
              <a className="font-semibold hover:text-maincolor hover:duration-200" href="">
                Home
              </a>
              <a className="font-semibold hover:text-maincolor hover:duration-200" href="">
                About
              </a>
              <a className="font-semibold hover:text-maincolor hover:duration-200" href="">
                Skill
              </a>
              <a className="font-semibold hover:text-maincolor hover:duration-200" href="">
                Contact
              </a>
            </div>
          </nav>
          <div className="h-[50vh] w-full flex">
            <div className="w-[70%] h-full text-white flex justify-center items-center flex-col gap-5">
              <h1 className="text-4xl font-semibold">Hi, I'm Saif-Eddine</h1>
              <p className="font-bold text-xl text-maincolor">A Developer</p>
              <p className="text-sm text-[#d0d1d1] font-lg">
                Enthusiastic web developer dedicated to crafting engaging and
                innovative online <br /> experiences. Always eager to learn and
                adapt to new challenges in the ever-evolving <br /> digital
                landscape, fostering collaboration and creativity.
              </p>
              <button className="text-maincolor border-2 w-[150px] h-[40px] border-maincolor rounded-lg hover:duration-200 hover:bg-maincolor font-semibold hover:text-white">
                Lets Talk
              </button>
            </div>
            <div className="w-[30%] bg-transparent"></div>
          </div>

          <div className="text-maincolor pl-[50px] flex gap-3 z-30 text-xl w-[50px]">
            <a
              className="border-maincolor border-2 rounded-full flex justify-center items-center hover:duration-200 hover:bg-maincolor hover:text-white p-2"
              href=""
            >
              <FaFacebookF />
            </a>
            <a
              className="border-maincolor border-2 rounded-full flex justify-center items-center hover:duration-200 hover:bg-maincolor hover:text-white p-2"
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

        <div className="w-[80%] text-white flex flex-col justify-center gap-6 items-center h-[65vh] bg-[#122e43] rounded-bl-xl rounded-br-xl mt-5">
          <div className="text-4xl font-semibold">
            About <span className="text-maincolor">Me</span>
          </div>
          <div className="h-[11rem] w-[11rem] bg-red-500 rounded-full"></div>
          <div className="text-xl font-semibold flex flex-col justify-center items-center gap-2">
            <div>Front & Back-End Developer</div>
            <p className="text-sm text-[#d0d1d1] font-lg text-center">
              Enthusiastic web developer dedicated to crafting engaging and
              innovative online <br /> experiences. Always eager to learn and
              adapt to new challenges in the ever-evolving <br /> digital
              landscape, fostering collaboration and creativity.
            </p>
          </div>
          <button className="text-maincolor border-2 w-[150px] h-[40px] border-maincolor rounded-lg hover:duration-200 hover:bg-maincolor font-semibold hover:text-white">
            Lets Talk
          </button>
        </div>

        <div className="w-[80%] flex justify-center items-center flex-col h-[80vh] bg-[#081b29] rounded-tl-xl rounded-tr-xl mt-5">
          {/* Content for new section */}
        </div>
        <div className="w-[80%] text-white flex justify-center items-center flex-col h-[70vh] bg-[#122e43] rounded-tl-xl rounded-tr-xl mt-5">
          <h1 className="font-semibold text-4xl">
            My <span className="text-maincolor">Skills</span>
          </h1>
          <div className="flex gap-10 pt-10">
            <div className="flex gap-10 pt-10">
              <div className="h-[25rem] flex justify-center items-center flex-col border-maincolor border-[2px] rounded-2xl w-[28rem] ">
                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">HTML</div>
                    <div className="text-white">80%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded html-animation"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">CSS</div>
                    <div className="text-white">70%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded css-animation"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">JavaScript</div>
                    <div className="text-white">20%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded js-animation"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">React</div>
                    <div className="text-white">40%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded react-animation"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-10 pt-10">
              <div className="h-[25rem] flex justify-center items-center flex-col border-maincolor border-[2px] rounded-2xl w-[28rem] ">
                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">sass</div>
                    <div className="text-white">70%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded css-animation"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">laravel</div>
                    <div className="text-white">40%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded react-animation"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">Tailwind</div>
                    <div className="text-white">60%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded html-animation"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">Bash</div>
                    <div className="text-white">10%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded js-animation"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
          {/* Content for new section */}
        </div>
      </div>
    </div>
  );
}

export default App;
