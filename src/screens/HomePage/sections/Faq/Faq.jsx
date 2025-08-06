import React, { useState } from "react";
import { ScrollReveal } from "../../../../components/ScrollReveal";

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFaqClick = (action) => {
    console.log(`Action: ${action}`);
    alert(`Vous avez cliqué sur: ${action}`);
  };

  return (
    <div className="absolute w-[1320px] h-[1074px] top-[98px] left-0">
      <div className="absolute w-[633px] h-[132px] top-0 left-[344px]">
        <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#222222] text-[46px] tracking-[0] leading-[normal]">
          Les questions fréquemment
        </div>

        <div className="absolute w-[185px] h-[66px] top-[66px] left-[223px]">
          <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative bg-[#48b5c34f] rounded-[25px] transition-all duration-300 hover:bg-[#48b5c380] cursor-pointer"
               onClick={() => handleFaqClick("Questions fréquemment posées")}
               title="Questions fréquemment posées">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#48b5c3] text-[46px] text-center tracking-[0] leading-[normal] transition-all duration-300 hover:scale-105">
              Posées
            </div>
          </div>
        </div>
      </div>

      <ScrollReveal direction="up" delay={200}>
        <div className="absolute w-[1322px] h-[94px] top-[182px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(0)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 0 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Quelles sont les étapes pour souscrire un contrat ?
            </p>
            
            {openFaq === 0 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                Pour souscrire un contrat, il vous suffit de choisir votre matériel dans notre catalogue, 
                de confirmer votre commande et de recevoir votre matériel. Tout est simple et rapide !
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={300}>
        <div className="absolute w-[1322px] h-[94px] top-[296px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(1)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 1 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Combien de temps dure le contrat ?
            </p>
            
            {openFaq === 1 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                Nos contrats sont flexibles et peuvent durer de 12 à 36 mois selon vos besoins. 
                Vous pouvez choisir la durée qui convient le mieux à votre entreprise.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={400}>
        <div className="absolute w-[1322px] h-[94px] top-[410px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(2)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 2 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Es-ce que le matériel est garanti ?
            </p>
            
            {openFaq === 2 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                Oui, tout notre matériel est garanti pendant toute la durée du contrat. 
                En cas de panne ou de problème, nous remplaçons votre équipement sous 24h.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={500}>
        <div className="absolute w-[1322px] h-[94px] top-[524px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(3)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 3 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Qu&#39;est ce qui est compris dans la maintenance iTakecare ?
            </p>
            
            {openFaq === 3 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                La maintenance iTakecare comprend le support technique, les réparations, 
                les mises à jour logicielles et le remplacement du matériel en cas de panne sous 24h.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={600}>
        <div className="absolute w-[1322px] h-[94px] top-[638px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(4)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 4 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Pourquoi travaillez-vous avec un partenaire financier ?
            </p>
            
            {openFaq === 4 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                Nous travaillons avec un partenaire financier pour vous offrir des solutions de leasing 
                flexibles et avantageuses, tout en nous concentrant sur notre expertise technique.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={700}>
        <div className="absolute w-[1322px] h-[94px] top-[752px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(5)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 5 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Est-ce que je suis propriétaire du matériel ?
            </p>
            
            {openFaq === 5 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                Non, dans le cadre d'un contrat de leasing, vous louez le matériel. À la fin du contrat, 
                vous pouvez choisir de le renouveler avec du matériel plus récent ou d'acquérir l'équipement existant.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={800}>
        <div className="absolute w-[1322px] h-[94px] top-[866px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(6)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 6 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Existe t&#39;il d&#39;autres frais ?
            </p>
            
            {openFaq === 6 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                Non, notre mensualité est tout compris. Il n'y a pas de frais cachés ou supplémentaires. 
                Tout est inclus dans le prix affiché : location, maintenance et garantie.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={900}>
        <div className="absolute w-[1322px] h-[94px] top-[980px] left-0">
          <div 
            className="relative w-[1320px] h-[94px] bg-neutral-100 rounded-[25px] cursor-pointer hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={() => toggleFaq(7)}
          >
            <img
              className={`absolute w-3 h-3 top-[41px] left-[1268px] transition-transform ${openFaq === 7 ? 'rotate-45' : ''}`}
              alt="Group"
              src="https://c.animaapp.com/o0FTU85R/img/group-30-7@2x.png"
            />

            <p className="absolute w-[1139px] top-[31px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              Quand les mensualités sont-elles prélevées ?
            </p>
            
            {openFaq === 7 && (
              <div className="absolute w-[1139px] top-[70px] left-10 [font-family:'Inter',Helvetica] font-normal text-[#222222] text-base tracking-[0] leading-7 pb-4">
                Les mensualités sont prélevées le 5 de chaque mois. Le premier prélèvement intervient 
                après la livraison et l'installation de votre matériel.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
