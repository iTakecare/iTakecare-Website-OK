import React from "react";
import { ScrollReveal } from "../../../../components/ScrollReveal";
import { FloatingCard } from "../../../../components/FloatingCard";

export const SectionEtapes = () => {
  const handleClick = (action) => {
    console.log(`Action: ${action}`);
    alert(`Vous avez cliqué sur: ${action}`);
  };
  return (
    <div className="absolute w-full max-w-[1095px] h-[1272px] top-[703px] left-1/2 transform -translate-x-1/2">
      <ScrollReveal direction="up" delay={200}>
        <div className="absolute w-[959px] h-[132px] top-0 left-[68px]">
          <p className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#222222] text-[46px] tracking-[0] leading-[normal]">
            Passer au leasing de matériel informatique
          </p>

          <div className="absolute w-[531px] h-[66px] top-[66px] left-48">
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative bg-[#48b5c34f] rounded-[25px] transition-all duration-300 hover:bg-[#48b5c380] cursor-pointer"
                 onClick={() => handleClick("En seulement 3 étapes")}
                 title="Processus simple en 3 étapes">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#48b5c3] text-[46px] text-center tracking-[0] leading-[normal] transition-all duration-300 hover:scale-105">
                en seulement 3 étapes
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="absolute w-[1095px] h-[325px] top-[217px] left-0">
        <img
          className="absolute w-[645px] h-[325px] top-0 left-[450px]"
          alt="Group"
          src="https://c.animaapp.com/o0FTU85R/img/group-54.png"
        />

        <ScrollReveal direction="left" delay={400} className="absolute w-[424px] h-[325px] top-0 left-0">
          <FloatingCard className="slow">
            <div className="relative w-[420px] h-[325px] bg-[#48b5c333] rounded-[30px]">
              <p className="absolute w-[380px] top-[212px] left-5 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-7">
                Tout est inclus dans la mensualité qui apparait : le prix de la
                location, la maintenance et la garantie.
              </p>

              <p className="absolute w-[380px] top-[110px] left-5 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl tracking-[0] leading-[normal]">
                Choisissez votre matériel dans notre catalogue
              </p>

              <div className="absolute w-[70px] h-[70px] top-5 left-5 bg-[#48b5c3] rounded-[35px]">
                <img
                  className="absolute w-[38px] h-[38px] top-4 left-4"
                  alt="Vector"
                  src="https://c.animaapp.com/o0FTU85R/img/vector-1.svg"
                />
              </div>
            </div>
          </FloatingCard>
        </ScrollReveal>
      </div>

      <div className="absolute w-[1095px] h-[325px] top-[947px] left-0">
        <img
          className="absolute w-[645px] h-[325px] top-0 left-[450px]"
          alt="Group"
          src="https://c.animaapp.com/o0FTU85R/img/group-52.png"
        />

        <div className="absolute w-[424px] h-[325px] top-0 left-0">
          <div className="relative w-[420px] h-[325px] bg-[#48b5c333] rounded-[30px]">
            <p className="absolute w-[380px] top-[204px] left-5 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-7">
              Vous profitez immédiatement de votre nouveau matériel, l’esprit
              tranquille !
            </p>

            <div className="absolute w-[380px] top-28 left-5 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl tracking-[0] leading-[normal]">
              Receptionnez votre matériel
            </div>

            <div className="absolute w-[70px] h-[70px] top-[22px] left-5 bg-[#48b5c3] rounded-[35px]">
              <img
                className="absolute w-11 h-10 top-[15px] left-3"
                alt="Group"
                src="https://c.animaapp.com/o0FTU85R/img/group-55@2x.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[1095px] h-[325px] top-[582px] left-0">
        <div className="relative w-[1099px] h-[325px]">
          <img
            className="absolute w-[645px] h-[325px] top-0 left-0"
            alt="Group"
            src="https://c.animaapp.com/o0FTU85R/img/group-53.png"
          />

          <div className="absolute w-[420px] h-[325px] top-0 left-[675px] bg-[#48b5c333] rounded-[30px]">
            <p className="absolute w-[380px] top-[218px] left-5 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg tracking-[0] leading-7">
              Dès réception des documents, nous livrons votre matériel dans les
              plus bref délais (entre 3 à 5 jours) gratuitement.
            </p>

            <div className="absolute w-[380px] top-[113px] left-5 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl tracking-[0] leading-[normal]">
              Confirmez votre commande
            </div>

            <div className="absolute w-[70px] h-[72px] top-[21px] left-5 bg-[#48b5c3] rounded-[35px/36px]">
              <img
                className="absolute w-[38px] h-[39px] top-4 left-4"
                alt="Vector"
                src="https://c.animaapp.com/o0FTU85R/img/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
