import React from "react";

export const Footer = () => {
  const handleClick = (action) => {
    console.log(`Action: ${action}`);
    alert(`Vous avez cliqué sur: ${action}`);
  };
  return (
    <footer className="absolute w-full max-w-[1352px] h-[782px] top-[6021px] left-1/2 transform -translate-x-1/2 bg-transparent">
      <img
        className="absolute w-[1320px] h-[374px] top-0 left-px"
        alt="Group"
        src="https://c.animaapp.com/o0FTU85R/img/group-47.png"
      />

      <div className="absolute w-[646px] h-[325px] top-[455px] left-0 bg-[#f8f8f6] border border-solid border-[#d9d9d9]">
        <p className="absolute w-[553px] top-[90px] left-[55px] [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7">
          Leasing de matériel informatique recoditionné sans contraites.Optez
          pour un parc informatique performant et écoresponsable, à moindre
          coût:
        </p>

        <img
          className="absolute w-[201px] h-[41px] top-[27px] left-[55px] object-cover"
          alt="Logo"
          src="https://c.animaapp.com/o0FTU85R/img/logo-1@2x.png"
        />

        <img
          className="absolute w-[42px] h-[42px] top-[182px] left-[178px] cursor-pointer hover:opacity-80 transition-opacity"
          alt="Group"
          src="https://c.animaapp.com/o0FTU85R/img/group-43@2x.png"
          onClick={() => handleClick("LinkedIn")}
        />

        <img
          className="absolute w-[42px] h-[42px] top-[181px] left-[55px] cursor-pointer hover:opacity-80 transition-opacity"
          alt="Vector"
          src="https://c.animaapp.com/o0FTU85R/img/vector.svg"
          onClick={() => handleClick("Facebook")}
        />

        <img
          className="absolute w-[42px] h-[42px] top-[181px] left-[116px] cursor-pointer hover:opacity-80 transition-opacity"
          alt="Group"
          src="https://c.animaapp.com/o0FTU85R/img/group-42@2x.png"
          onClick={() => handleClick("Twitter")}
        />
      </div>

      <div className="absolute w-[60px] h-7 top-[510px] left-[676px]">
        <div 
          className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
          onClick={() => handleClick("Catalogue - Item 1")}
        >
          Lorem
        </div>
      </div>

      <div 
        className="top-[571px] left-[676px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("Catalogue - Item 2")}
      >
        Lorem
      </div>

      <div 
        className="top-[632px] left-[676px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("Catalogue - Item 3")}
      >
        Lorem
      </div>

      <div 
        className="top-[693px] left-[676px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("Catalogue - Item 4")}
      >
        Lorem
      </div>

      <div 
        className="top-[754px] left-[676px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("Catalogue - Item 5")}
      >
        Lorem
      </div>

      <div 
        className="top-[571px] left-[1017px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("A propos - Item 2")}
      >
        Lorem
      </div>

      <div 
        className="top-[510px] left-[1017px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("A propos - Item 1")}
      >
        Lorem
      </div>

      <div 
        className="top-[632px] left-[1017px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("A propos - Item 3")}
      >
        Lorem
      </div>

      <div 
        className="top-[693px] left-[1017px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("A propos - Item 4")}
      >
        Lorem
      </div>

      <div 
        className="top-[754px] left-[1017px] absolute [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap cursor-pointer hover:text-[#48b5c3] transition-colors"
        onClick={() => handleClick("A propos - Item 5")}
      >
        Lorem
      </div>

      <div className="absolute w-[311px] top-[452px] left-[676px] [font-family:'Inter',Helvetica] font-medium text-[#222222] text-[26px] tracking-[0] leading-[normal]">
        Catalogue
      </div>

      <div className="absolute w-[307px] top-[452px] left-[1017px] [font-family:'Inter',Helvetica] font-medium text-[#222222] text-[26px] tracking-[0] leading-[normal]">
        A propos
      </div>
    </footer>
  );
};
