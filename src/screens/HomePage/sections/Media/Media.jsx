import React from "react";
import { MovingBlob } from "../../../../components/MovingBlob";

export const Media = () => {
  const handleClick = (action) => {
    console.log(`Action: ${action}`);
    alert(`Vous avez cliqué sur: ${action}`);
  };
  return (
    <div className="absolute w-full h-[623px] top-0 left-0">
      <div className="absolute w-[912px] h-[623px] top-0 left-0">
        <MovingBlob 
          className="variant-2" 
          size="623px"
          style={{ top: 0, left: 0, borderRadius: '311.5px' }}
        />

        <div className="absolute w-[607px] h-[66px] top-[108px] left-[305px]">
          <div className="absolute top-1 left-0 [font-family:'Inter',Helvetica] font-bold text-[#222222] text-[46px] tracking-[0] leading-[normal]">
            La presse
          </div>
          <div className="absolute w-[371px] h-[66px] top-0 left-[234px]">
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative bg-[#48b5c34f] rounded-[25px] transition-all duration-300 hover:bg-[#48b5c380] cursor-pointer"
                 onClick={() => handleClick("La presse parle de nous")}
                 title="Découvrez ce que la presse dit de nous">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#48b5c3] text-[46px] text-center tracking-[0] leading-[normal] transition-all duration-300 hover:scale-105"> parle de nous
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute w-[537px] h-[303px] top-[214px] left-[305px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/o0FTU85R/img/image-1.png"
        />
      </div>

      <img
        className="absolute w-[721px] h-[285px] top-[212px] left-[923px]"
        alt="Media"
        src="https://c.animaapp.com/o0FTU85R/img/media.png"
      />
    </div>
  );
};
