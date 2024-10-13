import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Moving } from "./compenent/cercle";
import { motion, useInView } from "framer-motion";
import { Next } from "./compenent/next";
import Fashion from "./assets/images/fast-fashion-concept-with-piles-clothes.jpg";
import Design from "./assets/images/prooooj.jpg";
import Teamwork from "./assets/images/teamwork.avif";
import Proj4 from "./assets/images/lastbut.jpg";
// import { AboutBackground } from "./animation/aboutbg";
function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 100 : 0,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 0.8,
          delay: delay,
        },
      },
    };
  };

  return (
    <div className="body h-screen overflow-y-auto overflow-x-hidden bg-main-gradient flex flex-col pt-10">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col w-full ">
          {/* home */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            id="home"
            className="home  h-[80vh] w-[80%]   rounded-tl-xl rounded-tr-xl flex flex-col gap-5 "
          >
            <nav className="text-white  flex h-[7rem] justify-center items-center gap-[40rem]">
              <div data-aos="flip-left" className="font-bold text-2xl  ">
                Saif-Eddine <span className="text-maincolor text-3xl ">.</span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <a
                  data-aos="flip-left"
                  className="font-semibold hover:text-maincolor hover:duration-200"
                  href="#home"
                  onClick={handleSmoothScroll}
                >
                  Home
                </a>

                <a
                  data-aos="flip-left"
                  className="font-semibold hover:text-maincolor hover:duration-200"
                  href="#about"
                  onClick={handleSmoothScroll}
                >
                  About
                </a>

                <a
                  data-aos="flip-left"
                  className="font-semibold hover:text-maincolor hover:duration-200"
                  href="#jurney"
                  onClick={handleSmoothScroll}
                >
                  Projects
                </a>

                <a
                  data-aos="flip-left"
                  className="font-semibold hover:text-maincolor hover:duration-200"
                  href="#skill"
                  onClick={handleSmoothScroll}
                >
                  Skill
                </a>

                <a
                  data-aos="flip-left"
                  className="font-semibold hover:text-maincolor hover:duration-200"
                  href="#contact"
                  onClick={handleSmoothScroll}
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="h-[50vh] w-full flex">
              <div className="w-[70%] h-full text-white flex justify-center items-center flex-col gap-5">
                <h1
                  data-aos="fade-right"
                  className="text-5xl  font-semibold bg-gradient-to-r from-maincolor via-slate-500 to-blue-100 bg-clip-text  tracking-tight text-transparent"
                >
                  Hi, I'm Saif-Eddine
                </h1>
                <p
                  data-aos="fade-left"
                  className="font-bold  bg-gradient-to-r from-maincolor via-slate-500 to-blue-100 bg-clip-text text-4xl tracking-tight text-transparent"
                >
                  A Developer
                </p>
                <p
                  data-aos="fade-right"
                  className="text-sm text-[#d0d1d1] font-lg text-center"
                >
                  Enthusiastic web developer dedicated to crafting engaging and
                  innovative online <br /> experiences. Always eager to learn
                  and adapt to new challenges in the ever-evolving <br />{" "}
                  digital landscape, fostering collaboration and creativity.
                </p>
                <button
                  data-aos="flip-right"
                  className="text-maincolor border-2 w-[150px] h-[40px] border-maincolor rounded-lg hover:duration-200 hover:bg-maincolor font-semibold hover:text-white"
                >
                  Lets Talk
                </button>
              </div>
              <div className="w-[30%] bg-transparent"></div>
            </div>

            <div className="text-maincolor pl-[50px] flex gap-3 z-30 text-xl w-[50px]">
              <a
                data-aos="fade-left"
                className="border-maincolor border-2 rounded-full flex justify-center items-center hover:duration-200 hover:bg-maincolor hover:text-white p-2"
                href=""
              >
                <FaFacebookF />
              </a>
              <a
                data-aos="zoom-in"
                className="border-maincolor border-2 rounded-full flex justify-center items-center hover:duration-200 hover:bg-maincolor hover:text-white p-2"
                href=""
              >
                <FaLinkedinIn />
              </a>
              <a
                data-aos="fade-right"
                className="border-maincolor border-2 rounded-full flex justify-center items-center hover:duration-200 hover:bg-maincolor hover:text-white p-2"
                href=""
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
          {/* about */}
          <motion.div
            id="about"
            ref={ref}
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="w-[80%] text-white relative flex flex-col justify-center gap-6 items-center h-[70vh] bg-[#122e43] rounded-bl-xl rounded-br-xl"
          >
            {/* <div className=" absolute right-[200px]">
              <AboutBackground/>
            </div> */}

            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              className="text-4xl font-semibold"
            >
              About <span className="text-maincolor">Me</span>
            </motion.div>
            <motion.div className="h-[11rem] w-[11rem] ai rounded-full flex justify-center items-center ">
              <div className="">
                <Moving width={225} height={225} />
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeIn("left", 1)}
              initial="hidden"
              animate={isInView ? "hidden" : "show"}
              className="text-xl font-semibold flex flex-col justify-center items-center gap-2"
            >
              <div>Front & Back-End Developer</div>
              <p className="text-sm text-[#d0d1d1] font-lg text-center">
                Enthusiastic web developer dedicated to crafting engaging and
                innovative online <br /> experiences. Always eager to learn and
                adapt to new challenges in the ever-evolving <br /> digital
                landscape, fostering collaboration and creativity.
              </p>
            </motion.div>
            <button className="text-maincolor border-2 w-[150px] h-[40px] border-maincolor rounded-lg hover:duration-200 hover:bg-maincolor font-semibold hover:text-white">
              Lets Talk
            </button>
          </motion.div>
        </div>
        {/* projects  */}
        <motion.div
          id="jurney"
          ref={ref}
          variants={fadeIn("down", 1.5)}
          initial="hidden"
          animate="show"
          className="w-[80%] relative flex text-white  items-center flex-col h-[70vh] bg-[#081b29] rounded-tl-xl rounded-tr-xl mt-5"
        >
          <div className="text-4xl font-semibold pt-10">
            My <span className="text-maincolor">Project</span>
          </div>

          <div className="absolute top-[150px] flex gap-10">
            <div class="card">
              <div class="first-content flex-col gap-4">
                <img
                  className="bg-cover bg-red-500 z-30 h-full rounded-[10px] w-full"
                  src={Fashion}
                  alt=""
                />
              </div>
              <div class="second-content flex-col gap-10 home pl-3">
                <div className="text-sm font-thin flex justify-center items-center">
                  Welcome to our fashion-forward website where style meets
                  convenience! Explore the latest trends and timeless classics,
                  curated just for you.
                </div>
                <button className="cta  bg-[#801e1e] text-lg bottom-[50px]">
                  <span className="span text-sm font-thin ">check it Out</span>
                  <span className="second">
                    <Next width={20} height={20} />
                  </span>
                </button>
              </div>
            </div>
            <div class="card">
              <div class="first-content flex-col gap-4">
                <img
                  className="object-cover bg-red-500 z-30 h-full rounded-[10px] w-full"
                  src={Design}
                  alt=""
                />
              </div>
              <div class="second-content flex-col gap-5 home pl-3">
                <div className="text-sm font-thin flex justify-center items-center">
                  Connect with friends and discover new communities on our
                  vibrant social media platform. Share your thoughts, photos,
                  and experiences with people from around the world. Stay
                   and join the conversation that
                  matters to you!
                </div>
                <button className="cta  bg-[#801e1e] text-lg bottom-[50px]">
                  <span className="span text-sm font-thin ">check it Out</span>
                  <span className="second">
                    <Next width={20} height={20} />
                  </span>
                </button>
              </div>
            </div>
            <div class="card">
              <div class="first-content flex-col gap-2">
                <img
                  className="bg-cover  z-30 h-full rounded-[10px] w-full"
                  src={Teamwork}
                  alt=""
                />
              </div>
              <div class="second-content flex-col gap-5 home pl-3">
                <div className="text-sm font-thin flex justify-center items-center">
                  Welcome to our fashion-forward website where style meets
                  Collaborate effortlessly and stay connected with your team, no matter where you are. Organize tasks, share ideas, and achieve goals together on one unified platform.
                </div>
                <button className="cta  bg-[#801e1e] text-lg bottom-[50px]">
                  <span className="span text-sm font-thin ">check it Out</span>
                  <span className="second">
                    <Next width={20} height={20} />
                  </span>
                </button>
              </div>
            </div>
            <div class="card">
              <div class="first-content flex-col gap-4">
                <img
                  className="bg-cover bg-red-500 z-30 h-full rounded-[10px] w-full"
                  src={Proj4}
                  alt=""
                />
              </div>
              <div class="second-content flex-col gap-5 home pl-3">
                <div className="text-sm font-thin flex justify-center items-center">
                Bring your ideas to life with our streamlined website project platform. Design, build, and launch your website with ease—no coding skills required!
                </div>
                <button className="cta  bg-[#801e1e] text-lg bottom-[50px]">
                  <span className="span text-sm font-thin ">check it Out</span>
                  <span className="second">
                    <Next width={20} height={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button className="cta absolute bg-maincolor bottom-[50px]">
            <span className="span ">NEXT</span>
            <span className="second">
              <Next width={20} height={20} />{" "}
              {/* Adjusted height to match text size */}
            </span>
          </button>
        </motion.div>

        {/* <div className="w-[80%] text-white flex justify-center items-center flex-col h-[50vh]    "></div> */}
        {/* skills */}
        <motion.div
          ref={ref}
          id="skill"
          variants={fadeIn("down", 1.5)}
          initial="hidden"
          animate="show"
          className="w-[80%] text-white flex justify-center items-center flex-col h-[100vh] bg-[#122e43] rounded-bl-xl rounded-br-xl"
        >
          <h1 className="font-semibold text-4xl">
            My <span className="text-maincolor">Skills</span>
          </h1>
          <div className="flex gap-10 pt-5">
            <div className="flex gap-10 pt-10">
              <div className="h-[25rem] flex justify-center items-center flex-col border-maincolor border-[2px] rounded-2xl w-[28rem] ">
                <motion.div className="h-[6rem] gap-1 w-[90%] flex flex-col justify-center items-center ">
                  <div className="flex justify-between items-center w-full px-5">
                    <div className="text-white">HTML</div>
                    <div className="text-white">80%</div>
                  </div>
                  <div className="w-full px-5">
                    <div className="border-maincolor flex items-center pl-[2px] border-2 rounded-lg h-[1.5rem]">
                      <div className="bg-maincolor h-[70%] rounded html-animation"></div>
                    </div>
                  </div>
                </motion.div>

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
          </div>
        </motion.div>
        {/* Contact */}
        <motion.div
          id="contact"
          ref={ref}
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-[80%] flex text-white justify-center pt-5 items-center flex-col h-[85vh] bg-[#081b29] rounded-tl-xl rounded-tr-xl mt-5"
        >
          <motion.h1
            ref={ref}
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="font-semibold text-4xl pb-5 "
          >
            Contact <span className="text-maincolor">Me</span>
          </motion.h1>
          <div className="h-[80%] w-[60%]   flex gap-2 justify-center items-center flex-wrap">
            <motion.input
              ref={ref}
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              placeholder="Full Name"
              className="rounded-xl pl-4 bg-transparent  h-[50px] w-[47.3%] border-maincolor border-[2px]"
              type="text"
            />
            <motion.input
              ref={ref}
              variants={fadeIn("down", 1.3)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              placeholder="Email Adress"
              className="rounded-xl pl-4 bg-transparent  h-[50px] w-[47.3%] border-maincolor border-[2px]"
              type="text"
            />
            <motion.input
              ref={ref}
              variants={fadeIn("down", 1.4)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              placeholder="Phone Number"
              className="rounded-xl pl-4 bg-transparent  h-[50px] w-[47.3%] border-maincolor border-[2px]"
              type="text"
            />
            <motion.input
              ref={ref}
              variants={fadeIn("down", 1.5)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              placeholder="Emain Subject"
              className="rounded-xl pl-4 bg-transparent  h-[50px] w-[47.3%] border-maincolor border-[2px]"
              type="text"
            />
            <motion.textarea
              ref={ref}
              variants={fadeIn("down", 1.6)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              placeholder="Whats All About..."
              className="rounded-xl pl-4 bg-transparent pt-3  border-maincolor border-[2px] "
              rows={10}
              cols={85}
              name=""
              id=""
            ></motion.textarea>

            <motion.button
              ref={ref}
              variants={fadeIn("down", 1.8)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              class="btn button1 px-[100px] py-[20px] flex justify-center items-center
               font-lg text-lg"
            >
              {" "}
              Submit
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="h-[80%] w-[60%]   flex gap-2 justify-center items-center flex-wrap"></div>
    </div>
  );
}

export default App;
