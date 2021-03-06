import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import "./en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          nav: {
            nav1: "Home",
            nav2: "About",
            nav3: "Research",
            nav4: "Teaching",
            nav5: "NGO",
            nav6: "News",
            nav7: "Contact",
          },
          home: {
            home_t1: "Hi, I'm",
            name: "Yancen Diemberger",
            welcome:
              "Welcome to my website. Here you can find out about my research, teaching interests and activities. If you want to know more, please get in touch: <a href='mailto:yd308@exeter.ac.uk'>yd308@exeter.ac.uk</a>",
          },
          about: {
            about_p1:
              "I was born to Tibetan/Italo-Austrian parents in the Italian Prealps and brought up in Cambridge UK, where I worked with ",
            about_p1a: "horses",
            about_p1b:
              " since I was a teenager. Currently, I am a PhD student at the University of Exeter studying horse-human communication in different cultural contexts, specifically comparing two sites across the globe, in Argentina and in Nepal. I have been switching between languages, cultures and environments since birth and now speak 7 languages.",
            /* "I was born to Tibetan/Italo-Austrian parents in the Italian Prealps and brought up in Cambridge UK, where I worked with <a href='/teaching#horses'>horses</a> since I was a teenager. Currently, I am a PhD student at the University of Exeter studying horse-human communication in different cultural contexts, specifically comparing two sites across the globe, in Argentina and in Nepal. I have been switching between languages, cultures and environments since birth and now speak 7 languages.", */
            about_p2:
              "After completing my international baccalaureate (IB) studies I qualified as an ",
            about_p2a: "English teacher ",
            about_p2b:
              "and taught in Nepal, China, Switzerland, and Italy. I also worked on various ",
            about_p2c: "NGO projects ",
            about_p2d:
              "with a strong environmental focus, mainly in the Himalayas. I obtained a BA in Tibetan and South Asian Studies from Vienna University in 2017, supporting myself financially with grants for academic achievement (Leistungsstipendium) and the ERASMUS exchange program. My studies included semesters abroad in Naples and Kathmandu.",
            /* "After completing my international baccalaureate (IB) studies I qualified as an <a href='/teaching#teacher'>English teacher</a> and taught in Nepal, China, Switzerland, and Italy. I also worked on various <a href='/ngo'>NGO projects</a> with a strong environmental focus, mainly in the Himalayas. I obtained a BA in Tibetan and South Asian Studies from Vienna University in 2017, supporting myself financially with grants for academic achievement (Leistungsstipendium) and the ERASMUS exchange program. My studies included semesters abroad in Naples and Kathmandu.","After completing my international baccalaureate (IB) studies I qualified as an <a href='/teaching#teacher'>English teacher</a> and taught in Nepal, China, Switzerland, and Italy. I also worked on various <a href='/ngo'>NGO projects</a> with a strong environmental focus, mainly in the Himalayas. I obtained a BA in Tibetan and South Asian Studies from Vienna University in 2017, supporting myself financially with grants for academic achievement (Leistungsstipendium) and the ERASMUS exchange program. My studies included semesters abroad in Naples and Kathmandu.", */
            about_p3: "During my degree I began working on an untranslated ",
            about_p3a: "Tibetan horse-science manuscript. ",
            about_p3b:
              "This gave me the first opportunity to combine my passion for horses with academic studies. After graduating, I assisted the ",
            about_p3c: "Himal-Connect research project ",
            about_p3d:
              "in a remote area of the Himalayas on the Tibet/Nepal border and came across a fascinating horse culture.",
            /* "During my degree I began working on an untranslated <a href='/phd#manuscript'>Tibetan horse-science manuscript</a>. This gave me the first opportunity to combine my passion for horses with academic studies. After graduating, I assisted the <a href='https://www.hf.uio.no/ikos/english/research/projects/himalayas/' target='_blank'>Himal-Connect research project</a> in a remote area of the Himalayas on the Tibet/Nepal border and came across a fascinating horse culture.", */
            about_p4:
              "Having made this experience in Asia, I took the opportunity to explore horse cultures across Latin America. I flew from Kathmandu to the Atacama Desert in Chile, before travelling overland while working in several different ",
            about_p4a: "???horse-worlds???",
            about_p4b:
              ". I finally settled in Argentina and helped run a center that offered horse taming, riding lessons, and tourist excursions. These experiences set the stage for returning to academic study and considering the work I had done with horses within wider ethical debates and socio-environmental issues. My ",
            about_p4c: "PhD project ",
            about_p4d: "is being carried out under the supervision of Prof. ",
            about_p4e: "Samantha Hurn.",
            /* "Having made this experience in Asia, I took the opportunity to explore horse cultures across Latin America. I flew from Kathmandu to the Atacama Desert in Chile, before travelling overland while working in several different <a href='/teaching'>???horse-worlds???</a>. I finally settled in Argentina and helped run a center that offered horse taming, riding lessons, and tourist excursions. These experiences set the stage for returning to academic study and considering the work I had done with horses within wider ethical debates and socio-environmental issues. My <a href='/phd'>PhD project</a> is being carried out under the supervision of Prof. <a href='http://socialsciences.exeter.ac.uk/sociology/staff/hurn/' target='_blank'>Samantha Hurn</a>.", */
            about_t1: "Other interests",
            about_t2: "Climbing",
            about_p5:
              "Mountains, travel, and adrenaline run in the family. Despite this, it was during my Erasmus semester in Naples, on the white-yellow limestone of the Amalfi coast, that I came across what has now become a key part of my life: climbing. I have always climbed as a passion rather than a profession, and my climbing shoes always come with me wherever I go, even if they need to be strapped to a saddlebag or a bike-rack. Climbing has allowed me to re-discover my birthplace in northern Italy through its weird and wonderful limestone, gneiss, and granite formations. It has permitted me to destroy my fingers and test my feet in Italy, Spain, Austria, Switzerland, France, Nepal, Tibet, and Peru. It has also gifted me with breathtaking views, indescribable emotions, and irreplaceable friendships.",
            about_t3: "Performance",
            about_p6:
              "I remember being fascinated by the acrobats in the circus as a child. This led me to take up gymnastics and circus training at the local community circus. I first performed on the static trapeze at age 8 and later moved to silks and aerial hoop. I abandoned all things aerial after I broke my first knee and moved to hula-hooping, fire hooping, belly dancing, accordion playing, and coaching gymnastics. In my late adolescence I performed as a street artist, at public events, and at festivals in the UK. Dressing up myself and others is one of my favourite parts of performance and I have participated in the costume and make-up preparation for several different events. Performance skills are also very useful in my work as a tour guide, a profession that began on punts in Cambridge (UK), and now carries on by foot, bike and horseback in several different countries.",
          },
          phd: {
            phd_t1: "PhD",
            phd_p1:
              "I am enrolled at Exeter University working remotely on my doctoral research under the supervision of Professor <a href='http://socialsciences.exeter.ac.uk/sociology/staff/hurn/' target='_blank'>Samantha Hurn</a> and part of the <a href='https://socialsciences.exeter.ac.uk/ease/people/yancendiemberger/' target='_blank'>EASE</a> (Exeter Anthrozoology as Symbiotic Ethics) working group.",
            phd_p2:
              "The title of my doctoral thesis is: ???To speak ???Horse??? in the Himalayas and Argentina: How do humans and horses comunicate, and how does this manifest in different cultural contexts????",
            phd_p3:
              "How does ???culture??? and human-human language influence horse-human communication? What does this say about ???universal??? ethological claims on horse-horse behaviour?",
            phd_p4:
              "This research project explores how horses and humans communicate through anthropology and ethology. It investigates how horses and humans communicate, examining what this might reveal about how humans make ???horses???, and how horses might in turn make ???humans???, in different contexts. This project uses English, Spanish, Tibetan, Nepali and ???Horse??? to investigate these questions.",
            phd_p5:
              "To approach this, I research horse ???taming??? in two sites linked through their equine logics rather than socioeconomic or migratory histories: Traslasierra, Argentina, where temperamento, miedo, y cosquillas (temperament, fear, and ticklishness) are said to dictate human-horse interaction, and Limi, Nepal, where vocal commands are key to trans-species collaboration. Comparing analyses of human-horse interactions in these sites, I investigate what differences and similarities in training techniques reveal about the general question of horse-human communication, and the contexts in which they are embedded. Critically engaging with translations between Spanish, Tibetan, Nepali, English, ???Horse???, and their local variants also allows de-centring of the English language and verbal language, both of which often remain assumed and unquestioned in much contemporary research. As I have lived and worked in both sites, the idea to carry out this investigation is a product of pre-existing connections and part of a wider multi-temporal fieldwork. <a href='https://www.awselva.org/conferences/2021/03/2021-virtual-spring-online-event-speak-horse-himalayas-and-argentina' target='_blank'>Link</a>",
            phd_t2: "The Tibetan Horse-science Manuscript ",
            phd_t2_1: "[Two illuminated folios of vol.1277]",
            phd_p6:
              "While studying in Vienna my friend Michela Clemente, curator of the Tucci Tibetan collection preserved at the <a href='https://www.ismeo.eu/isiao-library/' target='_blank'>???Biblioteca IsIAO???</a> ??? Sala delle collezioni africane and orientali within the Biblioteca Nazionale Centrale of Rome, told me about a beautifully illustrated Tibetan manuscript on horses that was unstudied. Fascinated by the idea of this text, I began working on it as soon as access was granted. This manuscript on Tibetan horse-science is an illuminated compilation tentatively dated to the 18th century, including texts from as early as the 9th century. It is one of the few stitched books (tib. ???go tshem) included in the collection. It presents a challenging translation project and I have been working on it with the help of other Tibetan, and non-Tibetan experts (e.g., Dr. Petra Maurer, Dr. Hildegard Diemberger, and Ngawang Tseten). I co-authored a paper on the preliminary research at TibSTAT in the University of Sorbonne, Paris, during the final year of my undergraduate degree. I am currently working on this manuscript as a supporting resource for my PhD project mentioned above, however, I hope to undertake the full translation project in the near future.",
            phd_t3: "Publications",
            phd_p7:
              "<strong>2020. 'Social nature, social divides and social media: and insight into tourism development in Argentinean highlands'</strong> in: <i>Iberoam??rica Social: Revista-red de estudios sociales</i>, A??o 8, N??mero XV, pp. 105-128.",
            phd_p8:
              "<strong>2019. ???The Social Life of Excellent Horses (gyi ling): a Textual and Ethnographic Exploration???</strong> with H Diemberger in: <i>Revue d'Etudes Tib??taines</i>, no. 49, May 2019, pp. 233-257.",
            phd_p9:
              "<strong>2017. ???Communicating across cultures: from the Nepal Himalayas, to the Cambridgeshire Chalk Marl, to the Italian lakes???</strong> in: <i>Environmental Education</i>, vol. 114 Spring, pp. 8-10.",
            phd_p10:
              "<strong>2017. ???Damar: storie di un villaggio di pietre dal colore vermiglio???</strong> in: <i>InformAle</i>, April, pp. 5-13.",
            phd_p11:
              "<strong>2015. ???Damar, nel villaggio della pietra rossa???</strong> in: Annuario C.A.I. Sezione Valtellinese. Sondrio: Tipografia Bonazzi-Sondrio, pp.131-135.",
            phd_p12:
              "<strong>2007. Illustration of mural painting</strong> in: H. Diemberger. <i>When a Woman becomes a Religious Dynasty: the Samding Dorje Pagmo of Tibet</i>, New York: Columbia University Press.",
            phd_t4: "Presentations",
            phd_p13:
              "<strong>29.11-02.12.2021. ???Humans and Animals: Paradoxes of Mutual Relationships???, Russian Academy of Sciences, St Petersburg, Russia.</strong> <br/> <i>Presenting paper on horse-human relationships</i>.",
            phd_p14:
              "<strong>22-24.06.2021. ???Equine Cultures in Transition???, University of Agricultural Sciences, Uppsala, Sweden.</strong><br/> <i>Presenting paper on different understandings of horse ???sentience??? and ???communication???<i/>.",
            phd_p15:
              "<strong>25-26.03.2021. ???Equine Ecologies and Economies???, Equine Histories Collective, California, USA.</strong> <i>Presenting paper: ???To speak horse in the Himalayas and Argentina: to what extent does communication between humans and horses depend on a ???language???, and how does it differ in different cultural contexts????</i>",
            phd_p16:
              "<strong>03.03.2021. Webinar on my PhD research in conjunction with: AWSELVA, The UK Equine Student Network, The London School of Economics and Political Science, University College Dublin, University of Bristol, University of York. <a href='https://vimeo.com/519387491/dc6cff63c5?embedded=true&source=video_title&owner=48069167' target='_blank'>Link.</a></strong>",
            phd_p17:
              "<strong>12.02.2021.<a href='https://www.youtube.com/watch?v=NHH23_AcUjA&t=1986s' target='_blank'> ???Di??logos Iberoamericanos sobre miradas y pr??cticas eco-sociales???</a> by Iberoam??rica Social. Online Platform.</strong> <br/> <i>Presenting article on environmental issues within a case study in Traslasierra Argentina.</i>",
            phd_p18:
              "<strong>15.06.2018 ??? 16.06.2018. ???Social Status in the Tibetan World (TibStat)???. Sorbonne University. Paris, France.</strong> <br/> <i>Presenting co-authored paper on Tibetan horse science and the ???Gyi Ling?????? Manuscript.</i>",
            phd_p19:
              "<strong>14.04.2016. Delegate at Curriculum Workshop part of AHRC funded project: Pathways to Understanding the Changing Climate ??? An AHRC funded project run by the Department of Social Anthropology and the Faculty of Education. University of Cambridge.</strong> <br/> <i>Presenting schools connections work in Nepal, and taking part in a day workshop with other teachers from across the world.</i>",
          },
          teaching: {
            teach_t1: "Academic Teaching Experience",
            teach_p1:
              "In the spring semester of 2016, I worked as a tutor for a foundation course at the University of Vienna. I planned classes and tutored students on undergraduate level modern South Asian studies to prepare them for first year exams.",
            teach_t2: "Languages",
            teach_p2:
              "I am a qualified TEFL (Teaching English as a Foreign Language) teacher, currently offering virtual language classes, tailored to the wishes of each student.",
            teach_p3:
              "I am also happy to lend a hand with any of the other languages I speak. I also provide both oral and written translation services.",
            teach_p4:
              "My mother tongues are English and Italian, I am fluent in Spanish and German, and speak French, Nepali, and Tibetan to varying degrees.",
            teach_p5:
              "I find that the most important things in language teaching are to fuel learning with enthusiasm, and to integrate it with the students??? personal interests. I enjoy working both virtually and face to face, depending on the group size.",
            teach_p6: "Please get in touch for more information.",
            teach_t3: "English teaching experience",
            teach_p7:
              "I have worked in schools, summer camps, language centres, and social centres in Nepal, China, Italy, Switzerland, and online. My students have ranged from the ages of 4 to 84, with a great variety of levels. I adapt my methods to suit the students??? goals and learning styles. I enjoy being creative in finding ways to help the student get where they want to be. That could be basic vocabulary, conversation practice, grammar revision, exam preparation, or anything else.",
            teach_p8:
              "<strong>Alpadia summer camp.</strong> <i>Ascona, Switzerland</i>. I lived on site and took care of the students??? daily English tuition as well as their general well-being round the clock. August 2019",
            teach_p9:
              "<strong>???Ex OPG ??? Je so??? Pazzo??? social centre.</strong> <i>Naples, Italy.</i> Volunteered at the as an English teacher twice a week. This was an open class, and I had a great time with people of all ages, backgrounds, and levels of English language proficiency. 2016-2017",
            teach_p10:
              "<strong>English Language Centre.</strong> <i>Varese, Italy.</i> Holding two-week English courses completing set aspects of the curriculum. Summer 2014 and 2015",
            teach_p11:
              "<strong>Golden English.</strong> <i>Chengdu, China.</i> Created engaging English lessons for children aged 4-8 years with the help of an assistant. Frequently completed transfers to primary schools in Sichuan province for intensive English language workshops with kids from 8-10 years. I also prepared private students for IELTS exams. January-March 2014",
            teach_p12:
              "<strong>Shree Dhikure Primary School.</strong> <i>Dhikure, Nepal.</i> Taught English and connected the village with the <a href='/ngo'>NGO EcoHimal</a> and several other projects followed . While teaching there, we collaborated with the University of Cambridge in a research and impact scheme of the Mongolia and Inner Asia Studies Unit. In this project, the children used environment-orientated vocabulary they had learnt to communicate virtually to their peers in Italy and the UK. I continue to give environment-themed English language workshops in different remote areas of Nepal, and regularly return to Shree Dhikure Primary school. September 2013-January 2014",
            teach_t4: "Horses",
            teach_p13:
              "I offer advice from my experience in many different ???horse-worlds??? in the form of consultations and riding/training sessions. All of the ???horse worlds??? I have worked presented different challenges. I have found that most problems between humans and horses come down to misunderstandings. I like to spend time working on horse-human issues and resolving unpleasant situations. In Argentina I frequently backed horses. More recently I worked for private clients in Spain and the UK, introducing a four-year-old to cross country competitions, resolving a rearing-habit, and working on taking some very nervous horses out hacking until they were at ease. <br/><a href='mailto:yd308@exeter.ac.uk'>Please email me for more information</a>.",
            teach_t5: "Selected working experience",
            teach_p14:
              "Freelance horse-related jobs have supported my travels and studies for many years, and I have worked in many different ???horse-worlds???:",
            teach_p15:
              "<a href='https://caballoblancotrekking.com/' target='_blank'>Caballo Blanco</a>. <i>Lanjar??n, Spain</i>: Excursions, horse training, giving riding lessons.",
            teach_p16:
              "<a href='https://wildhorsesinspain.wordpress.com/pottokas-project/' target='_blank'>Pottoka???s Project</a>. <i>Extremadura, Spain</>: Assistant to ethologist Lucy Rees with study and management of feral Pottokas.",
            teach_p17:
              "El Molinillo. <i>Madrid, Spain</i>: Doma Vaquera, horse training and hacking.",
            teach_p18:
              "<a href='https://ar.latinoplaces.com/cordoba-province/alma-blanca-cabalgatas-doma-1032988?' target='_blank'>Alma Blanca</a>. <i>Traslasierra, Argentina</i>: Multiple day excursions and ???breaking-in??? horses according to Guillermo Gonzalez???s ???Amanse a Paciencia???, giving riding lessons.",
            teach_p19:
              "<a href='http://www.frontierlab.org/' target='_blank'>Frontier Lab</a>. <i>Urubamba, Peru</i>: Excursions and assistant in equine therapy sessions, giving riding lessons.",
            teach_p20:
              "<a href='https://atacamahorse.com/' target='_blank'>Atacama Horse Adventures</a>. <i>San Pedro de Atacama, Chile</i>: Multiple day excursions.",
            teach_p21:
              "<a href='https://www.facebook.com/cambridgepolohaggisfarm/' target='_blank'>Haggis Farm Polo Club</a>. <i>Cambridge. UK</i>: Polo Groom.",
          },
          ngo: {
            ngo_p1:
              "My main NGO involvement began in 2013 with <a href='https://www.ecohimal.it/' target='_blank'>EcoHimal</a>, an international NGO that works on social and environmental issues. They are mostly active in Himalayan regions and use a bottom-up approach to development. I began by connecting the organization with potential project ideas in the areas where I worked as an English teacher. I then helped design and bring some projects to life. Now, I am one of their project officers: When in Nepal I review and report how projects are going, I propose new project ideas and help to design them, and I continue to carry out English language teaching on their behalf. At the start of EcoHimal???s activities, the Dalai Lama gave the newly born organization a blessing. <br/>In 2017 I attended a conference of the <a href='https://mixedtibetans.net/' target='_blank'> Tibetans of Mixed Heritage</a>, where I was able to renew that blessing.",
            ngo_t1: "My work with EcoHimal includes the following:",
            ngo_t2: "Schools connections",
            ngo_p2:
              "During our first collaboration, EcoHimal supported a course of English Language teaching at Dhikure primary school. In this, I taught English with emphasis on environment related topics. We then set up a skype connection between the Nepali school and two other schools in Italy and the UK. The children shared information on their environment and began a pen-pal relationship that continues today. This was done as part of the ???Pathways to Understanding the Changing Climate??? in partnership with <a href='https://www.miasu.socanth.cam.ac.uk/' target='_blank'> MIASU</a> and the Department of Social Anthropology and the Faculty of Education at the University of Cambridge.",
            ngo_t3: "Baby Dawa",
            ngo_p3:
              "One day, after the international school connections day had ended, we walked the usual one and half hour path home from Dhikure Primary school. Due to an unforeseeable and unfortunate series of events, in the following 12 hours I held an infant for the first moments of his life, and I held his mother for the last breaths of hers. Having no-way of sustainably feeding the child, together with the child???s family we decided to travel to Kathmandu Hospital ??? 8 hours by foot and 18 hours by jeep away. We arrived in Kathmandu and in the hospital the baby quickly grew stronger. We also set up a small fund to support baby Dawa in his childhood and studies, and I continue to visit him whenever possible.",
            ngo_t4: "Earthquake",
            ngo_p4:
              "It was April 2015 and my flight to Kathmandu was two days away. As I was doing my online check-in I got news of the earthquake. When I finally reached our project sites it was clear there was much to be done. We slept in tents and cowhouses, moving across the valley from village to village. We helped how we could and made a report on how best to channel funds into potential projects. The vast influx of foreign money meant that financial bureaucracy became extremely complicated. We therefore helped our local friends to make an organization <a href='https://ninehills.org.np/' target='_blank'>???Okhaldhunga Nine Hills Association???</a> who could act as our counterparts and collaborators on the ground. Together, we re-built various schools, homes, and carried out water purity tests on different springs.",
            ngo_t5: "Collecting stories",
            ngo_p5:
              "Throughout several years of projects in this area, our day-long walks were often accompanied by stories of local folklore. Together with children from different primary schools and with the help of village elders, we collected some stories. These stories were then written in Italian, illustrated, published (by <a href='https://www.alpinestudio.it/' target='_blank'>Alpinestudio</a>), and sold to raise funds. The funds were then used to translate and print a bi-lingual (Nepali-English) edition with <a href='https://www.vajrabookshop.com/' target='_blank'>Vajra Publications</a>, which was finally brought back to the libraries of the schools from where the stories originally came. Both editions of these books are now available from Vajra Publications, from Eco Himal and <a href='https://www.pilgrimsonlineshop.com/7022-the-spirits-of-the-forest-a-short-story-between-reality-and-fantasy.html' target='_blank'>online</a>.",
            ngo_t6: "Limi",
            ngo_p6:
              "In Autumn 2018 I assisted a trip to Limi valley in Humla as part of the ???Himal-connect project???, a research and impact scheme of the University of Oslo and the University of Cambridge. While there, I carried out English language and environmental care workshops at some local primary schools. As the area is so remote, Limi valley struggles to retain its teachers, and governmental schooling material often doesn???t get there. Following a request from the villagers, EcoHimal decided to provide the wages of an additional teacher, and to provide some basic school supplies.",
            ngo_t7: "Fundraising",
            ngo_p7:
              "I also collaborate with EcoHimal while in Europe, talking at fundraisers and carrying out workshops in schools. In 2016 I was a delegate in a Curriculum Workshop which was part of the AHRC funded project: Pathways to Understanding the Changing Climate. I presented what we had done in terms of the school???s connection between Nepal, Italy and the UK. This was done in collaboration with <a href='https://www.miasu.socanth.cam.ac.uk/' target='_blank'>MIASU</a>, the Department of Social Anthropology, and the Faculty of Education at the University of Cambridge.",
          },
          news: {
            news_t1: "What I???m doing at the moment",
            news_p1:
              "I am currently undertaking preliminary research in Argentina that can be followed through my ",
             news_p1f: "instagram",
             news_p1g: ". I continue to offer ",
            news_p1a: "horse-related services ",
            news_p1b: "depending on your location, and ",
            news_p1c: "virtual language classes.",
            news_p1d: " Please email me for more information: ",
            news_p1e: "yd308@exeter.ac.uk",
            /* "I am currently undertaking preliminary research in Argentina. I continue to offer <a href='/teaching#horses'>horse-related services</a> depending on your location, and <a href='/teaching#teacher'>virtual language classes</a>. Please email me for more information: <a href='mailto:yd308@exeter.ac.uk'>yd308@exeter.ac.uk</a>", */
          },
        },
      },
      es: {
        translation: {
          nav: {
            nav1: "Home",
            nav2: "Sobre mi",
            nav3: "Investigaci??n",
            nav4: "Ense??anza",
            nav5: "ONG",
            nav6: "Novedades",
            nav7: "Contacto",
          },
          home: {
            home_t1: "Hola, soy",
            name: "Yancen Diemberger",
            welcome:
              "Bienvenido a mi p??gina web. Aqu?? puedes conocer m??s sobre mi investigaci??n, docencia, intereses y actividades. Si quieres saber m??s, puedes encontrame aqu??: <a href='mailto:yd308@exeter.ac.uk'>yd308@exeter.ac.uk</a>",
          },
          about: {
            about_p1:
              "Nac?? de padres tibetanos/italo-austr??acos en los Prealpes italianos y me cri?? en Cambridge, Reino Unido, donde trabaj?? con ",
            about_p1a: "caballos",
            about_p1b:
              " desde que era adolescente. Actualmente, soy una estudiante de doctorado en la Universidad de Exeter que estudia la comunicaci??n entre caballo y humano en diferentes contextos culturales, espec??ficamente comparando dos sitios en todo el mundo: Argentina y Nepal. He estado cambiando entre idiomas, culturas y entornos desde que nac?? y ahora hablo 7 idiomas.",
            /* about_p1:
              "Nac?? de padres tibetanos/italo-austr??acos en los Prealpes italianos y me cri?? en Cambridge, Reino Unido, donde trabaj?? con <a href='/teaching#horses'>caballos</a> desde que era adolescente. Actualmente, soy una estudiante de doctorado en la Universidad de Exeter que estudia la comunicaci??n entre caballo y humano en diferentes contextos culturales, espec??ficamente comparando dos sitios en todo el mundo: Argentina y Nepal. He estado cambiando entre idiomas, culturas y entornos desde que nac?? y ahora hablo 7 idiomas.", */
            about_p2:
              "Despu??s de completar mis estudios de bachillerato internacional (IB), me gradu?? como ",
            about_p2a: "profesora de ingl??s ",
            about_p2b:
              " y ense???? en Nepal, China, Suiza e Italia. Tambi??n trabaj?? en varios ",
            about_p2c: "proyectos de ONG ",
            about_p2d:
              "con un fuerte enfoque ambiental, principalmente en el Himalaya. Obtuve una licenciatura en estudios tibetanos y del sur de Asia desde la Universidad de Viena en 2017. Me mantuve econ??micamente con becas para logros acad??micos (Leistungsstipendium) y el programa de intercambio ERASMUS. Mis estudios incluyeron dos semestres en el extranjero en N??poles y Katmand??.",
            /* "Despu??s de completar mis estudios de bachillerato internacional (IB), me gradu?? como <a href='/teaching#teacher'>profesora de ingl??s</a> y ense???? en Nepal, China, Suiza e Italia. Tambi??n trabaj?? en varios <a href='/ngo'>proyectos de ONG</a> con un fuerte enfoque ambiental, principalmente en el Himalaya. Obtuve una licenciatura en estudios tibetanos y del sur de Asia desde la Universidad de Viena en 2017. Me mantuve econ??micamente con becas para logros acad??micos (Leistungsstipendium) y el programa de intercambio ERASMUS. Mis estudios incluyeron dos semestres en el extranjero en N??poles y Katmand??.", */
            about_p3: "Durante mi carrera, trabaj?? en un ",
            about_p3a: "manuscrito tibetano sobre la ciencia del caballo ",
            about_p3b:
              "que nunca hab??a sido traducido. Esto me dio la primera oportunidad de combinar mi pasi??n por los caballos con estudios acad??micos. Despu??s de graduarme, ayud?? al proyecto de investigaci??n ",
            about_p3c: "Himal-Connect ",
            about_p3d:
              "en un ??rea remota del Himalaya en la frontera entre T??bet y Nepal. All??, me encontr?? con una fascinante cultura de los caballos.",
            /* "Durante mi carrera, trabaj?? en un <a href='/phd'>manuscrito tibetano sobre la ciencia del caballo</a> que nunca hab??a sido traducido. Esto me dio la primera oportunidad de combinar mi pasi??n por los caballos con estudios acad??micos. Despu??s de graduarme, ayud?? al proyecto de investigaci??n <a href='https://www.hf.uio.no/ikos/english/research/projects/himalayas/' target='_blank'>Himal-Connect</a> en un ??rea remota del Himalaya en la frontera entre T??bet y Nepal. All??, me encontr?? con una fascinante cultura de los caballos.",*/
            about_p4:
              "Habiendo adquirido esta experiencia en Asia, aprovech?? la oportunidad para explorar las culturas de los caballos en Am??rica Latina. Vol?? desde Katmand?? hasta el desierto de Atacama en Chile, y empez?? a viajar por tierra mientras trabajaba en varios ",
            about_p4a: "???ambientes de caballos???",
            about_p4b:
              " diferentes. Finalmente me instal?? en Argentina y ayud?? a administrar un centro que ofrec??a doma de caballos, clases de equitaci??n, clases de ???amanse??? y excursiones tur??sticas. Estas experiencias sentaron las bases para volver a los estudios acad??micos y considerar el trabajo que hab??a hecho con caballos dentro de debates ??ticos m??s amplios y cuestiones socioambientales. Mi ",
            about_p4c: "proyecto de doctorado ",
            about_p4d: "se lleva a cabo bajo la supervisi??n de la Prof. ",
            about_p4e: "Samantha Hurn.",
            /* "Habiendo adquirido esta experiencia en Asia, aprovech?? la oportunidad para explorar las culturas de los caballos en Am??rica Latina. Vol?? desde Katmand?? hasta el desierto de Atacama en Chile, y empez?? a viajar por tierra mientras trabajaba en varios <a href='/teaching'>???ambientes de caballos???</a> diferentes. Finalmente me instal?? en Argentina y ayud?? a administrar un centro que ofrec??a doma de caballos, clases de equitaci??n, clases de ???amanse??? y excursiones tur??sticas. Estas experiencias sentaron las bases para volver a los estudios acad??micos y considerar el trabajo que hab??a hecho con caballos dentro de debates ??ticos m??s amplios y cuestiones socioambientales. Mi <a href='/phd'>proyecto de doctorado</a> se lleva a cabo bajo la supervisi??n de la Prof. <a href='http://socialsciences.exeter.ac.uk/sociology/staff/hurn/' target='_blank'>Samantha Hurn</a>.", */
            about_t1: "Otros intereses",
            about_t2: "Escalada",
            about_p5:
              "Las monta??as, los viajes y la adrenalina corren en familia. A pesar de eso, fue durante mi semestre de Erasmus en N??poles, sobre las calizas blancas y amarillas de la costa de Amalfi, cuando me top?? con lo que ahora se ha convertido en una parte clave de mi vida: la escalada. Siempre he escalado por pasi??n m??s que por profesi??n, y mis pies de gato siempre me acompa??an a donde vaya, incluso si necesitan ser atados a una alforja o a una bicicleta. La escalada me ha permitido redescubrir mi lugar de nacimiento en el norte de Italia a trav??s de sus extra??as y maravillosas formaciones de piedra caliza, gneis y granito. Me ha permitido destruir mis dedos y probar mis pies en Italia, Espa??a, Austria, Suiza, Francia, Nepal, T??bet y Per??. Tambi??n me ha regalado vistas impresionantes, emociones indescriptibles y amistades irremplazables.",
            about_t3: "Espect??culo",
            about_p6:
              "Recuerdo estar fascinada por los acr??batas en el circo cuando era ni??a. Esto me llev?? a tomar clases de gimnasia y participar en el circo de la comunidad local. Realic?? mi primer espect??culo en el trapecio est??tico a los 8 a??os y luego pas?? a las sedas y al aro a??reo. Abandon?? todas las cosas a??reas despu??s de romperme la rodilla izquierda y pas?? a hacer hula-hooping, fire-hooping, danza del vientre, tocar el acorde??n y ense??ar gimnasia. En mi adolescencia tard??a actu?? como artista callejera, en eventos p??blicos y festivales en el Reino Unido. Disfrazarme a m?? misma y a los dem??s es una de mis partes favoritas del espect??culo y he participado en la preparaci??n de vestuario y maquillaje para varios eventos diferentes. Las habilidades que aprend?? durante los espect??culos tambi??n son muy ??tiles en mi trabajo como gu??a tur??stica, una profesi??n que empez?? en las barcas del r??o Cam (Cambridge, UK) y ahora contin??a a pie, en bicicleta y a caballo en varios pa??ses diferentes.",
          },
          phd: {
            phd_t1: "PhD",
            phd_p1:
              "Estoy inscrita en la Universidad de Exeter trabajando de forma remota en mi investigaci??n doctoral bajo la supervisi??n de la profesora <a href='http://socialsciences.exeter.ac.uk/sociology/staff/hurn/' target='_blank'>Samantha Hurn</a> y parte del grupo de trabajo <a href='https://socialsciences.exeter.ac.uk/ease/people/yancendiemberger/' target='_blank'>EASE</a> (Exeter Anthrozoology as Symbiotic Ethics).",
            phd_p2:
              "El t??tulo de mi tesis doctoral es ???Hablar ???caballo??? en el Himalaya y Argentina: ??C??mo se comunican los caballos y los humanos, y c??mo se manifiesta esto en diferentes contextos culturales????",
            phd_p3:
              "??C??mo influye la ???cultura??? y el lenguaje humano en la comunicaci??n caballo-humano? ??Qu?? dice esto acerca de las afirmaciones etol??gicas ???universales??? sobre el comportamiento de los caballos?",
            phd_p4:
              "Este proyecto de investigaci??n explora c??mo los caballos y los humanos se comunican a trav??s de la antropolog??a y la etolog??a. Investiga la construcci??n de esta comunicaci??n, examinando lo que esto podr??a revelar sobre c??mo los humanos hacen a los ???caballos??? y c??mo los caballos a su vez pueden hacer a los ???humanos???, en diferentes contextos. Este proyecto usa ingl??s, espa??ol, tibetano, nepal?? y ???caballo??? para investigar estas cuestiones.",
            phd_p5:
              "Para abordar esto, investigo la ???domesticaci??n??? de caballos en dos sitios vinculados a trav??s de sus l??gicas equinas en lugar de historias socioecon??micas o migratorias: Argentina, donde se dice que ???el temperamento, el miedo y las cosquillas??? dictan la interacci??n humano-caballo, y la frontera entre Nepal y el T??bet, donde los comandos vocales son clave para la colaboraci??n entre especies. Comparando los an??lisis de las interacciones humano-caballo en estos sitios, investigo qu?? diferencias y similitudes en las t??cnicas de doma revelan sobre la cuesti??n general de la comunicaci??n caballo-humano, y los contextos en los que est??n inmersos. Traducciones cr??ticas entre espa??ol, tibetano, nepal??, ingl??s, ???caballo??? y sus variantes locales tambi??n permite descentrar el idioma ingl??s y el lenguaje verbal, los cuales a menudo permanecen asumidos e incuestionados en gran parte de las investigaciones contempor??neas. Como he vivido y trabajado en ambos sitios, la idea de llevar a cabo esta investigaci??n es producto de conexiones preexistentes y parte de un trabajo de campo multitemporal m??s amplio. <a href='https://www.awselva.org/conferences/2021/03/2021-virtual-spring-online-event-speak-horse-himalayas-and-argentina' target='_blank'>Link</a>",
            phd_t2: "The Tibetan Horse-science Manuscript",
            phd_t2_1: "[Dos folios iluminados del vol. 1277]",

            phd_p6:
              "Mientras estudiaba en Viena, mi amiga Michela Clemente me habl?? de un manuscrito tibetano bellamente ilustrado sobre caballos que nunca hab??a sido estudiado. Ella es curadora de la colecci??n tibetana Tucci conservada en la <a href='https://www.ismeo.eu/isiao-library/' target='_blank'>???Biblioteca IsIAO???</a> ??? Sala delle collezioni africane and orientali (https://www.ismeo.eu/isiao-library/) dentro de la Biblioteca Nazionale Centrale de Roma, donde se encuentra el manuscrito. Fascinada por la idea de este texto, comenc?? a trabajar en ??l tan pronto como se me concedi?? el acceso. Este manuscrito sobre la ciencia del caballo tibetano es una compilaci??n ilustrada fechada tentativamente en el siglo XVIII, que incluye textos que datan del siglo IX. Es uno de los pocos libros cosidos (tib. ???go tshem) incluidos en la colecci??n. Presenta un proyecto de traducci??n desafiante y he estado trabajando en ??l con la ayuda de otros expertos, tibetanos y no tibetanos (p. ej., la Dra. Petra Maurer, la Dra. Hildegard Diemberger y Ngawang Tseten). Fui coautor de un art??culo sobre la investigaci??n preliminar de este texto en TibSTAT en la Universidad de Sorbonne, Par??s, durante el ??ltimo a??o de mi licenciatura. Actualmente estoy trabajando en este manuscrito como recurso de apoyo para mi proyecto de doctorado mencionado anteriormente, sin embargo, espero emprender el proyecto de traducci??n completo en un futuro pr??ximo.",
            phd_t3: "Publicaciones",
            phd_p7:
              "<strong>2020. 'Social nature, social divides and social media: and insight into tourism development in Argentinean highlands'</strong> in: <i>Iberoam??rica Social: Revista-red de estudios sociales</i>, A??o 8, N??mero XV, pp. 105-128.",
            phd_p8:
              "<strong>2019. ???The Social Life of Excellent Horses (gyi ling): a Textual and Ethnographic Exploration???</strong> with H Diemberger in: <i>Revue d'Etudes Tib??taines</i>, no. 49, May 2019, pp. 233-257.",
            phd_p9:
              "<strong>2017. ???Communicating across cultures: from the Nepal Himalayas, to the Cambridgeshire Chalk Marl, to the Italian lakes???</strong> in: <i>Environmental Education</i>, vol. 114 Spring, pp. 8-10.",
            phd_p10:
              "<strong>2017. ???Damar: storie di un villaggio di pietre dal colore vermiglio???</strong> in: <i>InformAle</i>, April, pp. 5-13.",
            phd_p11:
              "<strong>2015. ???Damar, nel villaggio della pietra rossa???</strong> in: Annuario C.A.I. Sezione Valtellinese. Sondrio: Tipografia Bonazzi-Sondrio, pp.131-135.",
            phd_p12:
              "<strong>2007. Illustration of mural painting</strong> in: H. Diemberger. <i>When a Woman becomes a Religious Dynasty: the Samding Dorje Pagmo of Tibet</i>, New York: Columbia University Press.",
            phd_t4: "Presentaciones",
            phd_p13:
              "<strong>29.11-02.12.2021. ???Humans and Animals: Paradoxes of Mutual Relationships???, Russian Academy of Sciences, St Petersburg, Russia.</strong> <br/> <i>Presenting paper on horse-human relationships</i>.",
            phd_p14:
              "<strong>22-24.06.2021. ???Equine Cultures in Transition???, University of Agricultural Sciences, Uppsala, Sweden.</strong><br/> <i>Presenting paper on different understandings of horse ???sentience??? and ???communication???<i/>.",
            phd_p15:
              "<strong>25-26.03.2021. ???Equine Ecologies and Economies???, Equine Histories Collective, California, USA.</strong> <i>Presenting paper: ???To speak horse in the Himalayas and Argentina: to what extent does communication between humans and horses depend on a ???language???, and how does it differ in different cultural contexts????</i>",
            phd_p16:
              "<strong>03.03.2021. Webinar on my PhD research in conjunction with: AWSELVA, The UK Equine Student Network, The London School of Economics and Political Science, University College Dublin, University of Bristol, University of York. <a href='https://vimeo.com/519387491/dc6cff63c5?embedded=true&source=video_title&owner=48069167' target='_blank'>Link.</a></strong>",
            phd_p17:
              "<strong>12.02.2021.<a href='https://www.youtube.com/watch?v=NHH23_AcUjA&t=1986s' target='_blank'> ???Di??logos Iberoamericanos sobre miradas y pr??cticas eco-sociales???</a> by Iberoam??rica Social. Online Platform.</strong> <br/> <i>Presenting article on environmental issues within a case study in Traslasierra Argentina.</i>",
            phd_p18:
              "<strong>15.06.2018 ??? 16.06.2018. ???Social Status in the Tibetan World (TibStat)???. Sorbonne University. Paris, France.</strong> <br/> <i>Presenting co-authored paper on Tibetan horse science and the ???Gyi Ling?????? Manuscript.</i>",
            phd_p19:
              "<strong>14.04.2016. Delegate at Curriculum Workshop part of AHRC funded project: Pathways to Understanding the Changing Climate ??? An AHRC funded project run by the Department of Social Anthropology and the Faculty of Education. University of Cambridge.</strong> <br/> <i>Presenting schools connections work in Nepal, and taking part in a day workshop with other teachers from across the world.</i>",
          },
          teaching: {
            teach_t1: "Experiencia Docente Acad??mica",
            teach_p1:
              "Durante el 2016, trabaj?? como tutor de curso en la Universidad de Viena. Planifiqu?? clases y asesor?? a estudiantes en estudios modernos del sur de Asia a nivel de pregrado para prepararlos para los ex??menes del primer a??o.",
            teach_t2: "Idiomas",
            teach_p2:
              "Soy profesora cualificada de TEFL (Teaching English as a Foreign Language), actualmente ofreciendo clases virtuales de idiomas, adaptadas a los deseos de cada alumno.",
            teach_p3:
              "Tambi??n estoy feliz de echar una mano con cualquiera de los otros idiomas que hablo, y ofrezco servicios de traducci??n oral y escrita.",
            teach_p4:
              "Mis lenguas maternas son el ingl??s y el italiano, hablo espa??ol y alem??n con fluidez y hablo franc??s, nepal?? y tibetano en diversos grados.",
            teach_p5:
              "Encuentro que las cosas m??s importantes en la ense??anza de idiomas son alimentar el aprendizaje con entusiasmo e integrarlo con los intereses personales de los estudiantes. Disfruto trabajando tanto virtualmente como cara a cara, dependiendo del tama??o del grupo.",
            teach_p6: "Por favor, p??ngase en contacto para m??s informaci??n.",
            teach_t3: "Experiencia en ense??anza de ingl??s",
            teach_p7:
              "He trabajado en escuelas, campamentos de verano, centros de idiomas y centros sociales en Nepal, China, Italia, Suiza y online. Mis alumnos van desde los 4 hasta los 84 a??os, con una gran variedad de niveles. Adapto mis m??todos a los objetivos y estilos de aprendizaje de los alumnos. Disfruto ser creativa para encontrar formas de ayudar al estudiante a llegar a donde quiere estar. Eso podr??a ser vocabulario b??sico, pr??ctica de conversaci??n, revisi??n de gram??tica, preparaci??n para ex??menes o cualquier otra cosa.",
            teach_p8:
              "<strong>Alpadia summer camp.</strong> <i>Ascona, Suiza</i> Viv??a en el colegio y me ocupaba de la ense??anza diaria de ingl??s de los estudiantes, as?? como de su bienestar general durante todo el d??a. Agosto 2019",
            teach_p9:
              "<strong>Centro social ???Ex OPG ??? Je so??? Pazzo???.</strong> <i>N??poles, Italia.</i> Voluntaria como ense??ante de ingl??s dos veces por semana. Esta fue una clase abierta y la pas?? muy bien con personas de todas las edades, or??genes y niveles de dominio del idioma ingl??s. 2016-2017",
            teach_p10:
              "<strong>English Language Center.</strong> <i>Varese, Italia.</i> Realizaci??n de cursos de ingl??s para jovenes de dos semanas, que completan aspectos establecidos del plan de estudios. Verano 2014 y 2015",
            teach_p11:
              "<strong>Golden English.</strong> <i>Chengd??, China.</i> Cre?? atractivas lecciones de ingl??s para ni??os de 4 a 8 a??os con la ayuda de un asistente. Realize transferencias con frecuencia a escuelas primarias en la provincia de Sichuan para talleres intensivos de idioma ingl??s con ni??os de 8 a 10 a??os. Tambi??n prepar?? a alumnos particulares para los ex??menes IELTS. Enero-Marzo 2014",
            teach_p12:
              "<strong>Escuela primaria Shree Dhikure.</strong> <i>Dhikure, Nepal.</i> Ense???? ingl??s y conect?? el pueblo con la ONG <a href='/ngo'>EcoHimal</a>. Mientras ense??aba all??, colaboramos con la Universidad de Cambridge en un esquema de investigaci??n e impacto de la Unidad de Estudios de Mongolia y Asia Interior. En este proyecto, los ni??os aprendieron un vocabulario relacionado con el entorno y el ambiente, y se comunicaron virtualmente con compa??eros en Italia y el Reino Unido. Sigo dando talleres de ingl??s sobre temas ambientales en diferentes ??reas remotas de Nepal, y regreso regularmente a la escuela primaria Shree Dhikure. Septiembre 2013-Enero 2014",
            teach_t4: "Caballos",
            teach_p13:
              "Ofrezco consejos de mi experiencia en muchos ???mundos de caballos??? diferentes en forma de consultas y sesiones de equitaci??n/entrenamiento. Todos los ???mundos de caballos??? en los que he trabajado presentaban diferentes desaf??os. He descubierto que la mayor??a de los problemas entre humanos y caballos se basan en malentendidos. Me gusta pasar el tiempo trabajando en problemas de caballos y humanos y resolviendo situaciones desagradables. En Argentina estaba enfocada en la doma. M??s recientemente, trabaj?? para clientes privados en Espa??a y el Reino Unido haciendo cosas como: introducir un caballo de cuatro a??os a concursos completos, resolviendo un problema de un caballo encabritado, y ayudando a caballos muy nerviosos a sentirse c??modos fuera del complejo ecuestre. Por favor env??eme un correo electr??nico para obtener m??s informaci??n.",
            teach_t5: "Experiencia laboral seleccionada",
            teach_p14:
              "Los trabajos ???freelance??? relacionados con los caballos han apoyado mis viajes y estudios durante muchos a??os, y he trabajado en muchos ???mundos de caballos??? diferentes:",
            teach_p15:
              "<a href='https://caballoblancotrekking.com/' target='_blank'>Caballo Blanco</a>. <i>Lanjar??n, Espa??a</i>: Excursiones, entrenamiento de caballos, clases de equitaci??n. ",
            teach_p16:
              "<a href='https://wildhorsesinspain.wordpress.com/pottokas-project/' target='_blank'>Pottoka???s Project</a>. <i>Extremadura, Espa??a</i>: Asistente de la et??loga Lucy Rees con el estudio y manejo de Pottokas salvajes.",
            teach_p17:
              "El Molinillo. <i>Madrid, Espa??a</i>: Doma Vaquera, doma de caballos y ???hacking???.",
            teach_p18:
              "<a href='https://ar.latinoplaces.com/cordoba-province/alma-blanca-cabalgatas-doma-1032988?' target='_blank'>Alma Blanca</a>. <i>Traslasierra, Argentina</i>: Excursiones de varios d??as y doma de caballos seg??n el ???Amanse a Paciencia??? de Guillermo Gonz??lez, dando clases de equitaci??n.",
            teach_p19:
              "<a href='http://www.frontierlab.org/' target='_blank'>Frontier Lab</a>. <i>Urubamba, Per??</i>: Excursiones y asistente en sesiones de equinoterapia, impartiendo clases de equitaci??n.",
            teach_p20:
              "<a href='https://atacamahorse.com/' target='_blank'>Atacama Horse Adventures</a>. <i>San Pedro de Atacama, Chile</i>: Excursiones de varios d??as.",
            teach_p21:
              "<a href='https://www.facebook.com/cambridgepolohaggisfarm/' target='_blank'>Haggis Farm Polo Club</a>. <i>Cambridge. UK</i>: Polo Groom.",
          },
          ngo: {
            ngo_p1:
              "Mi participaci??n principal en una ONG comenz?? en 2013 con <a href='https://www.ecohimal.it/' target='_blank'>EcoHimal</a>, una ONG internacional que trabaja en temas sociales y ambientales. En la mayor??a, EcoHimal es activo en las regiones del Himalaya y utiliza un enfoque de desarrollo de abajo hacia arriba. Comenc?? conectando a la organizaci??n con posibles ideas de proyectos en las ??reas donde trabaj?? como profesora de ingl??s. Luego ayud?? a dise??ar y dar vida a algunos proyectos. Ahora, soy una de sus oficiales de proyectos: cuando estoy en Nepal, reviso e informo c??mo van los proyectos, propongo nuevas ideas de proyectos y ayudo a dise??arlos, y sigo llevando a cabo la ense??anza del idioma ingl??s por parte de EcoHimal. Al inicio de las actividades de EcoHimal, el Dalai Lama dio una bendici??n a la reci??n nacida organizaci??n. <br/>En 2017 asist?? a una conferencia de los <a href='https://mixedtibetans.net/' target='_blank'>Tibetanos de Herencia Mixta</a>, donde pude renovar esa bendici??n.",
            ngo_t1: "Mi trabajo con EcoHimal incluye lo siguiente:",
            ngo_t2: "Conexiones escolares",
            ngo_p2:
              "Durante nuestra primera colaboraci??n, EcoHimal apoy?? un curso de ense??anza del idioma ingl??s en la escuela primaria Dhikure. En este, ense???? ingl??s con ??nfasis en temas relacionados con el medio ambiente. Luego establecimos una conexi??n por skype entre la escuela nepal?? y otras dos escuelas en Italia y el Reino Unido. Los ni??os compartieron informaci??n sobre su entorno y comenzaron una relaci??n de amigos por correspondencia que contin??a hasta el d??a de hoy. Esto se hizo como parte de los ???Caminos para comprender el clima cambiante??? en asociaci??n con <a href='https://www.miasu.socanth.cam.ac.uk/' target='_blank'> MIASU</a> y el Departamento de Antropolog??a Social y la Facultad de Educaci??n de la Universidad de Cambridge.",
            ngo_t3: "Baby Dawa",
            ngo_p3:
              "Un d??a, despu??s de terminar el d??a de las conexiones escolares internacionales, caminamos por el camino habitual de una hora y media a casa desde la escuela primaria Dhikure. Debido a una serie de eventos imprevistos y desafortunados, en las siguientes 12 horas sostuve a un beb?? en los primeros momentos de su vida y sostuve a su madre en los ??ltimos suspiros de la suya. Al no tener forma de alimentar al ni??o de manera sostenible, junto con la familia del ni??o, decidimos viajar al Hospital de Katmand??, a 8 horas a pie y 18 horas en jeep. Llegamos a Katmand?? y en el hospital el beb?? se fortaleci?? r??pidamente. Tambi??n creamos un peque??o fondo para apoyar al beb?? Dawa en su infancia y sus estudios, y sigo visitando siempre que puedo.",
            ngo_t4: "Terremoto",
            ngo_p4:
              "Era abril de 2015 y faltaban dos d??as para mi vuelo a Katmand??. Mientras estaba haciendo mi check-in virtual, recib?? noticias del terremoto. Cuando finalmente llegu?? a los sitios de nuestros proyectos, estaba claro que hab??a mucho por hacer. Dorm??amos en tiendas de campa??a y establos, atravesando el valle de pueblo en pueblo. Ayudamos como pudimos e hicimos un informe sobre la mejor manera de canalizar los fondos hacia proyectos potenciales. La gran afluencia de dinero extranjero hizo que la burocracia financiera se volviera extremadamente complicada. Por lo tanto, ayudamos a nuestros amigos locales a crear una organizaci??n, la <a href='https://ninehills.org.np/' target='_blank'>???Okhaldhunga Nine Hills Association???</a>, que podr??a actuar como nuestros colaboradores locales. Juntos, reconstruimos varias escuelas, casas y realizamos pruebas de pureza del agua en diferentes manantiales.",
            ngo_t5: "Coleccionando Historias",
            ngo_p5:
              "A lo largo de varios a??os de proyectos en esta ??rea, nuestros d??as de caminatas a menudo iban acompa??adas de historias del folclore local. Junto con ni??os de diferentes escuelas primarias y con la ayuda de los ancianos del pueblo, recopilamos algunas historias. Estas historias fueron luego escritas en italiano, ilustradas, publicadas (por <a href='https://www.alpinestudio.it/' target='_blank'>Alpinestudio</a>) y vendidas para recaudar fondos. Luego, los fondos se usaron para traducir e imprimir una edici??n biling??e (nepal??-ingl??s) con <a href='https://www.vajrabookshop.com/' target='_blank'>Vajra Publications</a>, que finalmente se devolvi?? a las bibliotecas de las escuelas de donde provienen las historias. Ambas ediciones de estos libros ya est??n disponibles en Vajra Publications, en Eco Himal y <a href='https://www.pilgrimsonlineshop.com/7022-the-spirits-of-the-forest-a-short-story-between-reality-and-fantasy.html' target='_blank'>online</a>.",
            ngo_t6: "Limi",
            ngo_p6:
              "En oto??o de 2018 asist?? a un viaje al valle de Limi en Humla como parte del Proyecto ???Himal-connect???, un esquema de investigaci??n e impacto de la Universidad de Oslo y la Universidad de Cambridge. Mientras estuve all??, realic?? talleres de idioma ingl??s y cuidado del medio ambiente en algunas escuelas primarias locales. Como el ??rea es tan remota, el valle de Limi lucha por retener a sus maestros, y el material escolar del gobierno a menudo no llega all??. A ra??z de una solicitud de los aldeanos, EcoHimal decidi?? proporcionar el salario de un maestro adicional y algunos ??tiles escolares b??sicos.",
            ngo_t7: "Recaudaci??n de fondos",
            ngo_p7:
              "Tambi??n colaboro con EcoHimal mientras estoy en Europa, hablando en eventos para recaudar fondos y realizando talleres en las escuelas. En 2016 fui delegada en un taller de curr??culo que formaba parte del proyecto financiado por AHRC: Pathways to Understanding the Changing Climate. Present?? lo que hab??amos hecho en t??rminos de la conexi??n de la escuela [enlace arriba] entre Nepal, Italia y el Reino Unido. Esto se hizo en colaboraci??n con <a href='https://www.miasu.socanth.cam.ac.uk/' target='_blank'>MIASU</a>, el Departamento de Antropolog??a Social y la Facultad de Educaci??n de la Universidad de Cambridge.",
          },
          news: {
            news_t1: "Novedades",
            news_p1:
              "Actualmente estoy realizando una investigaci??n preliminar en Argentina que se puede seguir a trav??s de mi ",
            news_p1f: "instagram",
            news_p1g: ". Sigo ofreciendo ",
            news_p1a: "servicios relacionados con caballos ",
            news_p1b: "dependiendo de la ubicaci??n y ",
            news_p1c: "clases virtuales de idiomas.",
            news_p1d:
              " Por favor env??ame un correo electr??nico para obtener m??s informaci??n: ",
            news_p1e: "yd308@exeter.ac.uk",
            /* "Actualmente estoy realizando una investigaci??n preliminar en Argentina que se puede seguir a trav??s de mi instagram. Sigo ofreciendo <a href='/teaching#teacher'>clases virtuales de idiomas</a> y <a href='/teaching#horses'>servicios relacionados con caballos</a> dependiendo de la ubicaci??n. Por favor env??eme un correo electr??nico para obtener m??s informaci??n: <a href='mailto:yd308@exeter.ac.uk'>yd308@exeter.ac.uk</a>", */
          },
        },
      },
    },
  });
