import React from "react";
import SectionComponent from "../Elements/SectionComponent";
import HeadphonesSilver from "../Pictures/Headphones-silver.png";
import iPhone13 from "../Pictures/Handys/iPhone13.png";
import GamingChair from "../Pictures/GamingChair2.png";
import PC from "../Pictures/PC2.png";

function SectionPopular() {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-200 section-width mt-32 pt-5 rounded-xl pb-5 shadow-xl px-5">
        <h1 className="relative  text-6xl flex justify-center font-sans font-bold">
          Beliebte Kategorien
        </h1>
        <div className="site-wrap mt-6">
          <SectionComponent title="Handys" src={iPhone13} href='/Handys'/>
          <SectionComponent title="Kopfhörer" src={HeadphonesSilver} href='/'/>
          <SectionComponent title="Stühle" src={GamingChair} href='/'/>
          <SectionComponent title="PCs" src={PC} href='/'/>
        </div>
      </div>
    </div>
  );
}

export default SectionPopular;
