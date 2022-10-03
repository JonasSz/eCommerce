import React from "react";
import { HandyPageData } from "../Data/HandyPageData";
import { HeadphonesData } from "../Data/HeadphonesData";
import { LaptopsData } from "../Data/LaptopsData";
import { TabletsData } from "../Data/TabletsData";
import FilterData from '../Elements/FIlter';

function Searchsite({ searchValue }) {
  return (
    <>
      <div className="w-full h-auto relative z-20 bg-slate-600 mt-2">
        <FilterData searchValue={searchValue} Product={HandyPageData}/>
        <FilterData searchValue={searchValue} Product={HeadphonesData}/>
        <FilterData searchValue={searchValue} Product={LaptopsData}/>
        <FilterData searchValue={searchValue} Product={TabletsData}/>
      </div>
    </>
  );
}

export default Searchsite;
