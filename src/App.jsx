import React from "react";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const App = () => {
  return (
    <div className="w-full max-w-[100vw] h-full justify-center items-center px-4 pb-4 pt-0 bg-gradient-to-b from-amber-50 from-30% to-amber-200 to-90%">
      <div className="my-0 mx-auto w-[14rem]">
        <img src="../assets/logo.png" alt="logo-pic" className="object-cover" />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row">
        <div className="my-0 mx-auto w-[6rem] sm:w-[40rem]">
          <img src="../assets/1.png" alt="" />
        </div>
        <div>
          <h1 className="text-xs font-bold mb-2 sm:text-[10px]">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h1>
          <div className="">
            <ul className="ml-6">
              <li className="text-xs mb-2 font-semibold list-disc sm:text-[10px]">
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li className="text-xs mb-2 font-semibold list-disc sm:text-[10px]">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>
            <figure>
              <img src="../assets/2.png" alt="" className="" />
              <figcaption className="text-xs sm:text-[10px]">
                Government of India has awarded the{" "}
                <span className="font-bold">
                  "National Energy Conservation Award 2018".
                </span>{" "}
                Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
                received the award from Smt. Sumitra Mahajan, Speaker of Lok
                Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
              </figcaption>
            </figure>
          </div>
          <div></div>
        </div>
      </div>
      <h1 className="text-[11px] mt-3 mb-1 font-semibold text-center">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </h1>
      <div className="flex flex-col gap-2">
        <img src="../assets/3.png" alt="" />
        <p className="text-xs text-center font-semibold">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
        <hr className="border-red-700 border-1" />
        <p className="text-[11px] font-bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="text-[10px] font-semibold text-center">
          CHEMICALS & PROCESS{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span> POWER{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span>
          WATER & WASTE WATER{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span> OILS &
          GAS PHARMA{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span> SUGARS &
          DISTILLERIES{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span> PAPER &
          PULP <span className="border-red-700 border-l-[1px] mr-1"></span>{" "}
          MARINE & DEFENCE{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span> METAL &
          MINING <span className="border-red-700 border-l-[1px] mr-1"></span>{" "}
          FOOD & BEVERAGE{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span>{" "}
          PETROCHEMICAL & REFINERIES{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span> SOLAR{" "}
          <span className="border-red-700 border-l-[1px] mr-1"></span>
          BUILDING <span className="border-red-700 border-l-[1px] mr-1"></span>{" "}
          HVAC <span className="border-red-700 border-l-[1px] mr-1"></span> FIRE
          FIGHTING <span className="border-red-700 border-l-[1px] mr-1"></span>{" "}
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <footer className="flex justify-around items-center w-full h-12 bg-red-800 mt-2">
        <div>
          <FaPhoneAlt className="inline-block mr-1 text-red-800 text-[10px] bg-white rounded-full w-3 h-3" />
          <span className="text-[8px] text-white">Toll free 1800 200 1234</span>
        </div>
        <div>
          <FaFacebookF className="inline-block mr-1 text-red-800 text-[10px] bg-white rounded-full w-3 h-3" />
          <span className="text-[8px] text-white">Toll free 1800 200 1234</span>
        </div>
        <div>
          <CiGlobe className="inline-block mr-1 text-red-800 text-[10px] bg-white rounded-full w-3 h-3" />
          <span className="text-[8px] text-white">Toll free 1800 200 1234</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
