import React from "react";
import SectionComponent from "../Elements/SectionComponent";
import iPad4 from "../Pictures/Handys/iPad4.png";
import iPhone11ProMax from "../Pictures/Handys/iPhone11-pro-max.png";
import GamingChair from "../Pictures/GamingChair2.png";
import PC from "../Pictures/PC2.png";

function BestSales() {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-300 section-width mt-16 pt-5 rounded-xl pb-5 shadow-xl px-5">
        <h1 className="relative  text-6xl flex justify-center font-sans font-bold">
          Am meisten Gekauft
        </h1>
        <div className="site-wrap mt-6">
          <SectionComponent title="iPhone11 Pro Max" src={iPhone11ProMax} href='/'/>
          <SectionComponent title="Apple iPad4" src={iPad4} href='/'/>
          <SectionComponent title="Stühle" src={GamingChair} href='/'/>
          <SectionComponent title="PCs" src={PC} href='/'/>
        </div>
      </div>
    </div>
  );
}

export default BestSales;