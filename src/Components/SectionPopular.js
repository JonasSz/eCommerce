import React from "react";
import SectionComponent from "../Elements/SectionComponent";
import HeadphonesSilver from "../Pictures/Headphones-white.png";
import iPhone13 from "../Pictures/Handys/iPhone13.png";
import iPad from "../Pictures/iPad (2).png";
import Laptop from "../Pictures/MacBook.png";

function SectionPopular() {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-500 section-width mt-32 pt-5 rounded-xl pb-5 shadow-xl px-5">
        <h1 className="relative  text-6xl flex justify-center font-sans font-bold">
          Beliebte Kategorien
        </h1>
        <div className="site-wrap mt-6">
          <SectionComponent title="Handys" src={iPhone13} href='/Handys'/>
          <SectionComponent title="Kopfhörer" src={HeadphonesSilver} href='/Kopfhoerer'/>
          <SectionComponent title="Tablets" src={iPad} href='/Tablets'/>
          <SectionComponent title="Laptops" src={Laptop} href='/Laptops'/>
        </div>
      </div>
    </div>
  );
}

export default SectionPopular;
