import React from "react";
import { MovingBlob } from "../../../../components/MovingBlob";
import { ScrollReveal } from "../../../../components/ScrollReveal";
import { FloatingCard } from "../../../../components/FloatingCard";

export const SectionAvantage = () => {
  return (
    <div className="absolute w-full max-w-[1326px] h-[897px] top-[117px] left-1/2 transform -translate-x-1/2">
      <div className="relative h-[897px]">
        <ScrollReveal direction="up" delay={200}>
          <div className="absolute w-[740px] h-[122px] top-[143px] left-[293px]">
            <p className="absolute top-[66px] left-[122px] [font-family:'Inter',Helvetica] font-bold text-[#222222] text-[46px] tracking-[0] leading-[normal]">
              et aux frais imprévus !
            </p>

            <div className="absolute w-[740px] h-[66px] top-0 left-0">
              <div className="absolute top-[5px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#222222] text-[46px] tracking-[0] leading-[normal]">
                Dites adieu au
              </div>

              <div className="absolute w-[413px] h-[66px] top-0 left-[325px]">
                <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative bg-[#48b5c34f] rounded-[25px] transition-all duration-300 hover:bg-[#48b5c380] cursor-pointer"
                     onClick={() => alert("Dites adieu au matériel obsolète grâce à notre service de leasing !")}
                     title="Remplacez votre matériel obsolète">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#48b5c3] text-[46px] text-center tracking-[0] leading-[normal] transition-all duration-300 hover:scale-105">
                    matériel obsolète
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="absolute w-[1326px] h-[583px] top-[314px] left-0">
          <ScrollReveal direction="up" delay={400} className="absolute w-[426px] h-[250px] top-0 left-0">
            <FloatingCard delay={0}>
              <div className="absolute w-[426px] h-[250px] top-0 left-0">
                <p className="absolute w-[422px] top-[166px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg text-center tracking-[0] leading-7">
                  Équipez votre entreprise sans immobiliser votre trésorerie et
                  gardez votre capital pour ce qui compte vraiment.
                </p>

                <div className="absolute w-[422px] top-[110px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl text-center tracking-[0] leading-[normal]">
                  Zéro investissement initial
                </div>

                <div className="absolute w-[90px] h-[90px] top-0 left-[166px] bg-[#48b5c34f] rounded-[45px]" />
              </div>

              <img
                className="absolute w-12 h-12 top-[22px] left-[187px]"
                alt="Group"
                src="https://c.animaapp.com/o0FTU85R/img/group-2@2x.png"
              />
            </FloatingCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600} className="absolute w-[426px] h-[243px] top-0 left-[452px]">
            <FloatingCard delay={1}>
              <div className="absolute w-[426px] h-[243px] top-0 left-0">
                <p className="absolute w-[422px] top-[166px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg text-center tracking-[0] leading-7">
                  Dites adieu aux dépenses imprévues : une mensualité fixe couvre
                  tout, y compris la maintenance et le support.
                </p>

                <p className="absolute w-[422px] top-[110px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl text-center tracking-[0] leading-[normal]">
                  Un coût fixe et maîtrisé
                </p>

                <div className="absolute w-[90px] h-[90px] top-0 left-[166px] bg-[#48b5c34f] rounded-[45px]" />
              </div>

              <img
                className="absolute w-12 h-12 top-[22px] left-[187px]"
                alt="Group"
                src="https://c.animaapp.com/o0FTU85R/img/group-45@2x.png"
              />
            </FloatingCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800} className="absolute w-[426px] h-[250px] top-0 left-[904px]">
            <FloatingCard delay={2}>
              <div className="absolute w-[426px] h-[250px] top-0 left-0">
                <p className="absolute w-[422px] top-[166px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg text-center tracking-[0] leading-7">
                  Bénéficiez d'un équipement informatique performant et évolutif
                  grâce à nos mises à niveau régulières.
                </p>

                <p className="absolute w-[422px] top-[110px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl text-center tracking-[0] leading-[normal]">
                  Un matériel toujours à jour
                </p>

                <div className="absolute w-[90px] h-[90px] top-0 left-[166px] bg-[#48b5c34f] rounded-[45px]" />
              </div>

              <img
                className="absolute w-[38px] h-[34px] top-[29px] left-48"
                alt="Group"
                src="https://c.animaapp.com/o0FTU85R/img/group@2x.png"
              />
            </FloatingCard>
          </ScrollReveal>

          <div className="absolute w-[426px] h-[286px] top-[290px] left-0">
            <div className="absolute w-[426px] h-[286px] top-0 left-0">
              <p className="absolute w-[422px] top-[202px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg text-center tracking-[0] leading-7">
                Ne perdez plus de temps avec des pannes : nous assurons la
                maintenance et remplaçons votre matériel en cas de problème.
              </p>

              <div className="absolute w-[422px] top-[110px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl text-center tracking-[0] leading-[normal]">
                Maintenance et support inclus
              </div>

              <div className="absolute w-[90px] h-[90px] top-0 left-[166px] bg-[#48b5c3] rounded-[45px]" />
            </div>

            <img
              className="absolute w-10 h-10 top-[26px] left-[191px]"
              alt="Vector"
              src="https://c.animaapp.com/o0FTU85R/img/vector-3.svg"
            />
          </div>

          <div className="absolute w-[426px] h-[293px] top-[290px] left-[452px]">
            <div className="w-[426px] h-[293px] left-0 absolute top-0">
              <p className="absolute w-[422px] top-[209px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg text-center tracking-[0] leading-7">
                Profitez de matériel informatique reconditionné haut de gamme à
                moindre coût, tout en réduisant votre empreinte écologique.
              </p>

              <div className="absolute w-[422px] top-[110px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl text-center tracking-[0] leading-[normal]">
                Alternative économique et durable
              </div>

              <div className="absolute w-[90px] h-[90px] top-0 left-[166px] bg-[#48b5c3] rounded-[45px]" />
            </div>

            <img
              className="absolute w-12 h-12 top-[22px] left-[187px]"
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-1@2x.png"
            />
          </div>

          <div className="absolute w-[426px] h-[293px] top-[290px] left-[904px]">
            <div className="w-[426px] h-[293px] left-0 absolute top-0">
              <p className="absolute w-[422px] top-[202px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-lg text-center tracking-[0] leading-7">
                Pilotez facilement tout votre matériel, suivez vos équipements
                et gérez vos demandes en un clic grâce à notre plateforme
                intuitive.
              </p>

              <p className="absolute w-[422px] top-[110px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#222222] text-3xl text-center tracking-[0] leading-[normal]">
                Logiciel de gestion de parc IT inclus
              </p>

              <div className="absolute w-[90px] h-[90px] top-0 left-[166px] bg-[#48b5c3] rounded-[45px]" />
            </div>

            <img
              className="absolute w-[23px] h-8 top-[31px] left-[199px]"
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-44@2x.png"
            />
          </div>
        </div>

        <MovingBlob 
          className="variant-1" 
          size="374px"
          style={{ top: 0, left: '621px' }}
        />
      </div>
    </div>
  );
};
