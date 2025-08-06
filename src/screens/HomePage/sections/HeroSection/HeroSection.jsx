import React from "react";
import { PixelBackground } from "../../../../components/PixelBackground";
import { GlowButton } from "../../../../components/GlowButton";
import { ScrollReveal } from "../../../../components/ScrollReveal";
import { ParallaxElement } from "../../../../components/ParallaxElement";

export const HeroSection = () => {
  const handleClick = (action) => {
    console.log(`Action: ${action}`);
    alert(`Vous avez cliqué sur: ${action}`);
  };
  return (
    <div className="absolute w-full h-[796px] top-0 left-0">
      <div className="relative w-full h-[796px] overflow-hidden bg-[url(https://c.animaapp.com/o0FTU85R/img/bg-texture.svg)] bg-[100%_100%]">
        <PixelBackground />
        <header className="absolute w-full max-w-[1331px] h-[537px] top-[222px] left-1/2 transform -translate-x-1/2 bg-transparent z-10">
          <div className="relative w-full h-[537px]">
            <div className="absolute w-[723px] h-[434px] top-0 left-px">
              <div className="absolute w-[705px] top-0 left-0 [font-family:'Inter',Helvetica] font-black text-[#222222] text-[50px] tracking-[0] leading-[normal]">
                Leasing de matériel
              </div>

              <div className="absolute w-[715px] h-[71px] top-[71px] left-0">
                <div className="absolute w-[339px] top-[5px] left-0 [font-family:'Inter',Helvetica] font-black text-[#222222] text-[50px] tracking-[0] leading-[normal]">
                  informatique
                </div>

                <div className="absolute w-[386px] h-[71px] top-0 left-[329px]">
                  <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative bg-[#48b5c34f] rounded-[25px] transition-all duration-300 hover:bg-[#48b5c380] cursor-pointer" 
                       onClick={() => handleClick("Reconditionné")}
                       title="Matériel informatique reconditionné de haute qualité">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-black text-[#48b5c3] text-[50px] text-center tracking-[0] leading-[normal] transition-all duration-300 hover:scale-105">
                      Reconditionné
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[510px] top-[147px] left-0 [font-family:'Inter',Helvetica] font-black text-[#222222] text-[50px] tracking-[0] leading-[normal]">
                sans contraintes
              </div>

              <p className="absolute w-[695px] top-[218px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[normal]">
                Optez pour un parc informatique performant et écoresponsable, à
                moindre coût:
                <br />
                <br />
                ✅Du matériel reconditionné haut de gamme, testé et garanti.
                <br />
                ✅Un forfait tout compris : maintenance, support et mises à
                jour.
                <br />
                ✅Remplacement sous 24h en cas de panne ou sinistre.
                <br />
                ✅Un choix écoresponsable et économique pour votre entreprise.
              </p>

              <div className="absolute top-[392px] left-0">
                <GlowButton 
                  variant="primary"
                  onClick={() => handleClick("Découvrir le catalogue")}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 [font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]"
                >
                  Découvrir le catalogue
                </GlowButton>
              </div>

              <div className="absolute top-[392px] left-[252px]">
                <GlowButton 
                  variant="secondary"
                  onClick={() => handleClick("En savoir plus")}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 [font-family:'Inter',Helvetica] font-bold text-[#222222] text-lg tracking-[0] leading-[normal]"
                >
                  En savoir plus
                </GlowButton>
              </div>
            </div>

            <div className="absolute w-[764px] h-[518px] top-0 left-[567px] z-10">
              <ParallaxElement speed={0.3}>
                <img
                  className="absolute w-[592px] h-[382px] top-0 left-[172px] object-cover transition-transform duration-500 hover:scale-105"
                  alt="Computer"
                  src="https://c.animaapp.com/o0FTU85R/img/computer.png"
                />
              </ParallaxElement>

              <ScrollReveal direction="left" delay={800}>
                <img
                  className="absolute w-[172px] h-[164px] top-[354px] left-0 object-cover"
                  alt="Arrow"
                  src="https://c.animaapp.com/o0FTU85R/img/arrow@2x.png"
                />
              </ScrollReveal>
            </div>

            <div className="absolute w-[596px] h-[68px] top-[469px] left-0">
              <p className="absolute w-[227px] top-2 left-[83px] [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xs tracking-[0] leading-[normal]">
                “Rapide et professionnel. Bien reçu mon MacBook Pro avec lequel
                j&#39;écris ces lignes. Très content du matériel !”
              </p>

              <div className="absolute top-3 left-[421px] [font-family:'Inter',Helvetica] font-bold text-[#222222] text-lg tracking-[0] leading-[normal]">
                4,8/5
              </div>

              <div className="absolute top-[34px] left-[421px] [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[normal]">
                satisfactions clients
              </div>

              <img
                className="absolute w-px h-[47px] top-[9px] left-[334px] object-cover"
                alt="Line"
                src="https://c.animaapp.com/o0FTU85R/img/line-1.svg"
              />

              <img
                className="absolute w-[57px] h-[57px] top-[5px] left-[354px] object-cover"
                alt="Png clipart yellow"
                src="https://c.animaapp.com/o0FTU85R/img/png-clipart-yellow-star-illustration-yellow-star-color-star-blue@2x.png"
              />

              <div className="absolute w-[68px] h-[68px] top-0 left-0 bg-[url(https://c.animaapp.com/o0FTU85R/img/65bb183cb2697d670222bf00-customer-img-1@2x.png)] bg-cover bg-[50%_50%]" />
            </div>
          </div>
        </header>

        <div className="absolute w-full max-w-[1320px] h-[82px] top-[60px] left-1/2 transform -translate-x-1/2 bg-[#f8f8f6] rounded-[50px] border-2 border-solid border-[#e1e1e1] z-20">
          <img
            className="absolute w-[201px] h-[41px] top-5 left-5 object-cover"
            alt="Logo"
            src="https://c.animaapp.com/o0FTU85R/img/logo-1@2x.png"
          />

          <div className="absolute w-[545px] h-[22px] top-[30px] left-[281px]">
            <div 
              className="left-0 absolute top-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#48b5c3] transition-colors"
              onClick={() => handleClick("Accueil")}
            >
              Accueil
            </div>

            <div 
              className="left-[92px] absolute top-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#48b5c3] transition-colors"
              onClick={() => handleClick("Catalogue")}
            >
              Catalogue
            </div>

            <div 
              className="left-[399px] absolute top-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#48b5c3] transition-colors"
              onClick={() => handleClick("Blog")}
            >
              Blog
            </div>

            <div 
              className="absolute top-0 left-[209px] [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#48b5c3] transition-colors"
              onClick={() => handleClick("Logiciel de gestion")}
            >
              Logiciel de gestion
            </div>

            <div 
              className="left-[467px] absolute top-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#48b5c3] transition-colors"
              onClick={() => handleClick("Contact")}
            >
              Contact
            </div>
          </div>

          <div 
            className="absolute w-10 h-9 top-[23px] left-[876px] cursor-pointer"
            onClick={() => handleClick("Panier")}
          >
            <div className="relative w-[42px] h-9">
              <img
                className="absolute w-6 h-6 top-3 left-0"
                alt="Img"
                src="https://c.animaapp.com/o0FTU85R/img/66d8193ebe8e03ca521a5979-shopping-cart-1.svg"
              />

              <div className="w-[22px] h-5 left-5 absolute top-0">
                <div className="relative w-5 h-5 bg-[#48b5c3] rounded-[10px]">
                  <div className="absolute top-[3px] left-1.5 [font-family:'Inter',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="top-5 left-[1104px] bg-[#48b5c3] inline-flex items-center justify-center gap-2.5 px-5 py-2.5 absolute rounded-[50px] overflow-hidden cursor-pointer hover:bg-[#3da4b2] transition-colors"
            onClick={() => handleClick("Catalogue (bouton)")}
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
              Catalogue
            </div>
          </div>

          <div 
            className="top-5 left-[936px] bg-white border border-solid border-[#e1e1e1] inline-flex items-center justify-center gap-2.5 px-5 py-2.5 absolute rounded-[50px] overflow-hidden cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => handleClick("Se connecter")}
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#222222] text-lg tracking-[0] leading-[normal]">
              Se connecter
            </div>
          </div>

          <img
            className="absolute w-[54px] h-8 top-[25px] left-[1245px] cursor-pointer"
            alt="Choix langue"
            src="https://c.animaapp.com/o0FTU85R/img/choix-langue@2x.png"
            onClick={() => handleClick("Changer de langue")}
          />
        </div>
      </div>
    </div>
  );
};
