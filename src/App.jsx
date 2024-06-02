import { motion } from "framer-motion";
import restaurant from "./assets/restaurant.jpg";
function App() {
  return (
    <div>
      <div className="font-bold flex items-center gap-2 text-lg sticky top-5 pl-2">
        <box-icon name="rocket"></box-icon>
        Rocket Components
      </div>
      <div className="">
        <motion.div
          className="text-[70px] mt-36 pl-2 pr-56"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 2 }}
        >
          Canal Street Market is a carefully curated retail market, food hall & community
          space open year-round at 265 Canal Street. Support Small Business this weekend!
        </motion.div>
        <div className="flex fixed top-0 right-0">
          <motion.div
            className="bg-blue-500 h-[100vh] w-[50px]"
            initial={{ opacity: 0.5, y: "-100vh" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.div
            className="bg-red-500 h-[100vh] w-[50px]"
            initial={{ opacity: 0.5, y: "-100vh" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          ></motion.div>
          <motion.div
            className="bg-yellow-500 h-[100vh] w-[50px]"
            initial={{ opacity: 0.5, y: "-100vh" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
          ></motion.div>
        </div>
      </div>

      <div>
        <motion.div
          className="mt-56 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          <img src={restaurant} className="h-[700px]" />
        </motion.div>
      </div>

      <div className="w-[1000px] mb-20">
        <div className="text-[60px] text-center mb-10 font-bold">Market Events</div>

        <div className=" overflow-hidden w-full">
          <motion.div
            className=" flex justify-around gap-2"
            initial={{ x: "0" }}
            animate={{ x: "150px" }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
          >
            {[...Array(100).keys()].map((item) => {
              return <div key={item}>{`/`}</div>;
            })}
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-10 w-full p-10">
          <div className="flex flex-col gap-2 text-xl  text-center">
            <div className="text-sm">09/21</div>
            Small Business Retail Pop Up Weekend!
          </div>
          <div className="flex flex-col gap-2 text-xl text-center">
            <div className="text-sm">02/07</div> New Balance x Paperboy Paris by
            Greenhouse @ Canal Street Market
          </div>
          <div className="flex flex-col gap-2 text-xl text-center">
            <div className="text-sm">12/11</div>Hack City 12/11
          </div>
        </div>
        <div className=" overflow-hidden w-full">
          <motion.div
            className=" flex justify-around gap-2"
            initial={{ x: "0" }}
            animate={{ x: "150px" }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
          >
            {[...Array(100).keys()].map((item) => {
              return <div key={item}>{`/`}</div>;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
