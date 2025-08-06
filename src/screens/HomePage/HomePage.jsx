import React, { useState } from "react";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/HeroSection";
import { Media } from "./sections/Media";
import { SectionAvantage } from "./sections/SectionAvantage";
import { SectionConseiller } from "./sections/SectionConseiller";
import { SectionEtapes } from "./sections/SectionEtapes";
import { MovingBlob } from "../../components/MovingBlob";

export const HomePage = () => {
  return (
    <div
      className="bg-white w-full min-h-screen h-full"
      data-model-id="1:2"
    >
      <div className="bg-white overflow-hidden w-full h-[7943px] relative">
        <div className="absolute w-full h-[796px] top-0 left-0">
          <div className="w-full h-[54px] top-[742px] bg-[linear-gradient(180deg,rgba(241,241,241,0.5)_0%,rgba(255,255,255,0.5)_100%)] absolute left-0" />

          <HeroSection />
        </div>

        <div className="absolute w-full h-[2737px] top-[1970px] left-0">
          <MovingBlob 
            className="variant-2" 
            size="374px"
            style={{ top: '601px', left: '754px' }}
          />

          <MovingBlob 
            className="variant-3" 
            size="374px"
            style={{ top: '1961px', left: '905px' }}
          />

          <SectionConseiller />
          <SectionEtapes />
          <Media />
        </div>

        <div className="absolute w-full max-w-[1320px] h-[1172px] top-[4729px] left-1/2 transform -translate-x-1/2">
          <MovingBlob 
            className="variant-1" 
            size="374px"
            style={{ top: 0, left: '487px' }}
          />

          <Faq />
        </div>

        <Footer />
        <div className="absolute w-full max-w-[1347px] h-[1014px] top-[876px] left-1/2 transform -translate-x-1/2">
          <SectionAvantage />
          <div className="absolute w-[1347px] h-[140px] top-0 left-0">
            <div className="absolute top-0 left-[558px] [font-family:'Inter',Helvetica] font-bold text-[#222222] text-2xl text-center tracking-[0] leading-[normal]">
              Ils nous font confiance
            </div>

            <img
              className="left-0 absolute w-[204px] h-[79px] top-[61px]"
              alt="Img"
              src="https://c.animaapp.com/o0FTU85R/img/66d6ffa02126d521c18267af-file--1--10.svg"
            />

            <img
              className="left-[227px] absolute w-[204px] h-[79px] top-[61px]"
              alt="Img"
              src="https://c.animaapp.com/o0FTU85R/img/66d6ffa02126d521c18267af-file--1--11.svg"
            />

            <img
              className="left-[462px] absolute w-[204px] h-[79px] top-[61px]"
              alt="Img"
              src="https://c.animaapp.com/o0FTU85R/img/66d6ffa02126d521c18267af-file--1--8.svg"
            />

            <img
              className="left-[679px] absolute w-[204px] h-[79px] top-[61px]"
              alt="Img"
              src="https://c.animaapp.com/o0FTU85R/img/66d6ffa02126d521c18267af-file--1--9.svg"
            />

            <img
              className="left-[1141px] absolute w-[204px] h-[79px] top-[61px]"
              alt="Img"
              src="https://c.animaapp.com/o0FTU85R/img/66d6ffa02126d521c18267af-file--1--10.svg"
            />

            <img
              className="left-[910px] absolute w-[204px] h-[79px] top-[61px]"
              alt="Img"
              src="https://c.animaapp.com/o0FTU85R/img/66d6ffa02126d521c18267af-file--1--11.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
