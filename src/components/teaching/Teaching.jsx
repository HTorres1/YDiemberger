import React from "react";
import "./teaching.css";
import studyondirt from "../../media/img/P1080958.JPG";
import dogonahorse from "../../media/img/IMG_20191105_165300.jpg";
import horseontheplains from "../../media/img/IMG_20191101_124655.jpg";


const Teaching = () => {
  return (
    <div>
      <h1>Academic Teaching Experience</h1>
      <div className="text">
        In the spring semester of 2016, I worked as a tutor for a foundation
        course at the University of Vienna. I planned classes and tutored
        students on undergraduate level modern South Asian studies to prepare
        them for first year exams.
      </div>
      <h1>Languages</h1>
      <div>
      
        <p className="text">
        <img className="img odd" src={studyondirt} alt="Studying on the dirt" />
          I am a qualified TEFL (Teaching English as a Foreign Language)
          teacher, currently offering virtual language classes, tailored to the
          wishes of each student.{" "}
        </p>
        <p className="text">
          I am also happy to lend a hand with any of the other languages I
          speak. I also provide both oral and written translation services.
        </p>

        <p className="text">
          My mother tongues are English and Italian, I am fluent in Spanish and
          German, and speak French, Nepali, and Tibetan to varying degrees.
        </p>

        <p className="text">
          I find that the most important things in language teaching are to fuel
          learning with enthusiasm, and to integrate it with the students’
          personal interests. I enjoy working both virtually and face to face,
          depending on the group size.{" "}
        </p>

        <p className="text">Please get in touch for more information.</p>
      </div>
      <h1 id="teacher">English Teaching experience</h1>
      <div className="text">
        I have worked in schools, summer camps, language centres, and social
        centres in Nepal, China, Italy, Switzerland, and online. My students
        have ranged from the ages of 4 to 84, with a great variety of levels. I
        adapt my methods to suit the students’ goals and learning styles. I
        enjoy being creative in finding ways to help the student get where they
        want to be. That could be basic vocabulary, conversation practice,
        grammar revision, exam preparation, or anything else.
      </div>
      <ul className="text">
        <li>
          Alpadia summer camp. Ascona, Switzerland. I lived on site and took
          care of the students’ daily English tuition as well as their general
          well-being round the clock. August 2019
        </li>
        <li>
          “Ex OPG – Je so’ Pazzo” social centre. Naples, Italy. Volunteered at
          the as an English teacher twice a week. This was an open class, and I
          had a great time with people of all ages, backgrounds, and levels of
          English language proficiency. 2016-2017
        </li>
        <li>
          English Language Centre. Varese, Italy. Holding two-week English
          courses completing set aspects of the curriculum. Summer 2014 and 2015
        </li>
        <li>
          Golden English. Chengdu, China. Created engaging English lessons for
          children aged 4-8 years with the help of an assistant. Frequently
          completed transfers to primary schools in Sichuan province for
          intensive English language workshops with kids from 8-10 years. I also
          prepared private students for IELTS exams. January-March 2014
        </li>
        <li>
          Shree Dhikure Primary School. Dhikure, Nepal. Taught English and
          connected the village with the <a href="/ngo">NGO EcoHimal</a> and
          several other projects followed . While teaching there, we
          collaborated with the University of Cambridge in a research and impact
          scheme of the Mongolia and Inner Asia Studies Unit. In this project,
          the children used environment-orientated vocabulary they had learnt to
          communicate virtually to their peers in Italy and the UK. I continue
          to give environment-themed English language workshops in different
          remote areas of Nepal, and regularly return to Shree Dhikure Primary
          school. September 2013-January 2014
        </li>
      </ul>
      <h1>Horses</h1>
      <div className="text">
        I offer advice from my experience in many different “horse-worlds” in
        the form of consultations and riding/training sessions. All of the
        “horse worlds” I have worked presented different challenges. I have
        found that most problems between humans and horses come down to
        misunderstandings. I like to spend time working on horse-human issues
        and resolving unpleasant situations. In Argentina I frequently backed
        horses. More recently I worked for private clients in Spain and the UK,
        introducing a four-year-old to cross country competitions, resolving a
        rearing-habit, and working on taking some very nervous horses out
        hacking until they were at ease. Please email me for more information.
        <img className="img" id="horsedog" src={horseontheplains} alt="Dog on a horse"/>
      </div>
      
      
      <h1>Selected working experience:</h1>
      <div>
        <p className="text">
        <img className="img pair" id="horsedog" src={dogonahorse} alt="Dog on a horse"/>
          Freelance horse-related jobs have supported my travels and studies for
          many years, and I have worked in many different “horse-worlds”:
        </p>
        <p className="text">
          <a href="https://caballoblancotrekking.com/" target="_blank">
            Caballo Blanco
          </a>
          . Lanjarón, Spain: Excursions, horse training, giving riding lessons.
        </p>
        <p className="text">
          <a
            href="https://wildhorsesinspain.wordpress.com/pottokas-project/"
            target="_blank"
          >
            Pottoka’s Project
          </a>
          . Extremadura, Spain: Assistant to ethologist Lucy Rees with study and
          management of feral Pottokas.
        </p>
        <p className="text">
          El Molinillo. Madrid, Spain: Doma Vaquera, horse training and hacking.
        </p>
        <p className="text">
          <a href="https://ar.latinoplaces.com/cordoba-province/alma-blanca-cabalgatas-doma-1032988?" target="_blank">Alma Blanca</a>
          Alma Blanca. Traslasierra, Argentina: Multiple day excursions and
          “breaking-in” horses according to Guillermo Gonzalez’s “Amanse a
          Paciencia”, giving riding lessons.
        </p>
        <p className="text">
          <a href="http://www.frontierlab.org/" target="_blank">
            Frontier Lab
          </a>
          . Urubamba, Peru: Excursions and assistant in equine therapy sessions,
          giving riding lessons.
        </p>
        <p className="text">
          <a href="https://atacamahorse.com/" target="_blank">
            Atacama Horse Adventures
          </a>
          . San Pedro de Atacama, Chile: Multiple day excursions.
        </p>
        <p className="text">
          <a
            href="https://www.facebook.com/cambridgepolohaggisfarm/"
            target="_blank"
          >
            Haggis Farm Polo Club
          </a>
          . Cambridge. UK: Polo Groom.
        </p>
      </div>
    </div>
  );
};

export default Teaching;
