import React from "react";
import "./about.css";

import youngYancen from "../../media/img/IMG_20220110_145648.jpg";
import teachYancen from "../../media/img/12079895_10153000518721637_2996482290262450025_o.jpeg";
import templeHorses from "../../media/img/P1090371.JPG";
import aridHorse from "../../media/img/IMG-20190106-WA0034-1.jpg";

const About = () => {
  return (
    <div>
      <div className="text">
        <img className="img odd" src={youngYancen} alt="Young Yancen" />I am a PhD
        student at the University of Exeter studying horse-human communication
        in different cultural contexts, specifically comparing two sites across
        the globe, in Argentina and in Nepal. I was born to
        Tibetan/Italo-Austrian parents in the Italian Prealps and brought up in
        Cambridge UK, where I worked with horses since I was a teenager [LINK TO
        HORSE JOBS PAGE]. I have been switching between languages, cultures and
        environments since birth and now speak 7 languages.
      </div>
      <div className="text">
        After completing my international baccalaureate (IB) studies I qualified
        as an English teacher and taught in Nepal, China, Switzerland, and
        Italy. [LINK TO TEAHING PAGE] I also worked on various NGO projects with
        a strong environmental focus, mainly in the Himalayas. [LINK TO NGO
        PAGE] I obtained a BA in Tibetan and South Asian Studies from Vienna
        University in 2017, supporting myself financially with grants for
        academic achievement (Leistungsstipendium) and the ERASMUS exchange
        program. My studies included semesters abroad in Naples and Kathmandu.
        <img className="img pair" src={teachYancen} alt="Teach Yancen" />
      </div>
      <div className="text">
        <img className="img odd" src={templeHorses} alt="Teach Yancen" />
        During my degree I began working on an untranslated Tibetan
        horse-science manuscript. [LINK TO RESEARCH PAGE] This gave me the first
        opportunity to combine my passion for horses with academic studies.
        After graduating, I assisted the Himal-Connect research project
        [https://www.hf.uio.no/ikos/english/research/projects/himalayas/] in a
        remote area of the Himalayas on the Tibet/Nepal border and came across a
        fascinating horse culture.
      </div>
      <div className="text">
        Having made this experience in Asia, I took the opportunity to explore
        horse cultures across Latin America. I flew from Kathmandu to the
        Atacama Desert in Chile, before travelling overland while working in
        several different “horse-worlds”. [LINK TO HORSE PAGE] I finally settled
        in Argentina and helped run a center that offered horse taming, riding
        lessons, and tourist excursions. These experiences set the stage for
        returning to academic study and considering the work I had done with
        horses within wider ethical debates and socio-environmental issues. My
        PhD project [LINK TO RESEARCH PAGE] is being carried out under the
        supervision of Prof. Samantha Hurn
        [http://socialsciences.exeter.ac.uk/sociology/staff/hurn/].
        <img className="img pair" src={aridHorse} alt="Teach Yancen" />
      </div>
    </div>
  );
};

export default About;
