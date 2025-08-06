import React from "react";
import { ScrollReveal } from "../../../../components/ScrollReveal";
import { GlowButton } from "../../../../components/GlowButton";

export const SectionConseiller = () => {
  const handleClick = (action) => {
    console.log(`Action: ${action}`);
    alert(`Vous avez cliqué sur: ${action}`);
  };
  return (
    <div className="absolute w-full max-w-[1327px] h-[642px] top-[2095px] left-1/2 transform -translate-x-1/2">
      <div className="absolute w-[921px] h-[135px] top-0 left-[113px]">
        <div className="absolute top-2 left-0 [font-family:'Inter',Helvetica] font-bold text-[#222222] text-[46px] tracking-[0] leading-[normal]">
          Vous hésitez sur le
        </div>

        <p className="absolute top-[79px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#222222] text-[46px] tracking-[0] leading-[normal]">
          On est là pour vous aider !
        </p>

        <div className="absolute w-[481px] h-[71px] top-0 left-[436px]">
          <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative bg-[#48b5c34f] rounded-[25px] transition-all duration-300 hover:bg-[#48b5c380] cursor-pointer"
               onClick={() => handleClick("Choix du matériel")}
               title="Nous vous aidons à choisir le matériel adapté">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#48b5c3] text-[50px] text-center tracking-[0] leading-[normal] transition-all duration-300 hover:scale-105">
              choix du matériel ?
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[1327px] h-[495px] top-[147px] left-0">
        <div className="w-[1320px] h-[328px] top-[167px] bg-neutral-100 rounded-[25px] absolute left-0" />

        <img
          className="absolute w-[157px] h-[76px] top-5 left-[767px] object-cover"
          alt="Img"
          src="https://c.animaapp.com/o0FTU85R/img/65d7200c3ef3f7d913168a1a-testimonial-shape-img-1-1@2x.png"
        />

        <img
          className="absolute w-[481px] h-[495px] top-0 left-[846px] object-cover"
          alt="Img"
          src="https://c.animaapp.com/o0FTU85R/img/66838dcba0e10752e40f3376-testimonial-image-1-1@2x.png"
        />

        <div className="absolute w-[540px] h-[212px] top-[227px] left-[60px]">
          <p className="absolute w-[538px] top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-2xl tracking-[0] leading-7">
            “Chaque entreprise, école, institution ont des besoins uniques. Nos
            conseillers, vous guident vers la solution la plus adaptée, sans
            engagement et en toute transparence. ”
          </p>

          <div className="absolute w-[193px] h-[60px] top-[152px] left-0">
            <p className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-2xl tracking-[0] leading-7">
              <span className="font-bold">
                Michaela
                <br />
              </span>

              <span className="text-[15px]">Responsable Service client</span>
            </p>
          </div>
        </div>

        <ScrollReveal direction="up" delay={600}>
          <div className="absolute top-[388px] left-[292px]">
            <GlowButton 
              variant="primary"
              onClick={() => handleClick("Parler à un conseiller")}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 [font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]"
            >
              Parler à un conseiller
            </GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
