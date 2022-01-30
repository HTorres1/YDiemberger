import React from "react";
import "./ngo.css";
import dalai from "../../media/img/IMG_20220109_151846.jpg";
import dawa from "../../media/img/Collage_20220109_151058.jpg";
import stories from "../../media/img/banjakri copertina.jpg";
import fundraising from "../../media/img/IMG_20200718_193149.jpg"

const NGO = () => {
  return (
    <div>
      <div className="text">
        My main NGO involvement began in 2013 with EcoHimal [ www.ecohimal.it ],
        an international NGO that works on social and environmental issues. They
        are mostly active in Himalayan regions and use a bottom-up approach to
        development. I began by connecting the organization with potential
        project ideas in the areas where I worked as an English teacher. I then
        helped design and bring some projects to life. Now, I am one of their
        project officers: When in Nepal I review and report how projects are
        going, I propose new project ideas and help to design them, and I
        continue to carry out English language teaching on their behalf. At the
        start of EcoHimal’s activities, the Dalai Lama gave the newly born
        organization a blessing. In 2017 I attended a conference of the Tibetans
        of Mixed Heritage [https://mixedtibetans.net/], where I was able to
        renew that blessing.
        <img className="img" src={dalai} alt="Yancen Dalai" />
      </div>
      <div className="text">My work with EcoHimal includes the following:</div>
      <div className="text">
        Schools connections
        <br /> During our first collaboration, EcoHimal supported a course of
        English Language teaching at Dhikure primary school. In this, I taught
        English with emphasis on environment related topics. We then set up a
        skype connection between the Nepali school and two other schools in
        Italy and the UK. The children shared information on their environment
        and began a pen-pal relationship that continues today. This was done as
        part of the “Pathways to Understanding the Changing Climate” in
        partnership with MIASU [https://www.miasu.socanth.cam.ac.uk/] and the
        Department of Social Anthropology and the Faculty of Education at the
        University of Cambridge.
      </div>
      <div className="text">
        <img className="img" src={dawa} alt="Baby Dawa" />
        Baby Dawa <br /> One day, after the international school connections day
        had ended, we walked the usual one and half hour path home from Dhikure
        Primary school. Due to an unforeseeable and unfortunate series of
        events, in the following 12 hours I held an infant for the first moments
        of his life, and I held his mother for the last breaths of hers. Having
        no-way of sustainably feeding the child, together with the child’s
        family we decided to travel to Kathmandu Hospital – 8 hours by foot and
        18 hours by jeep away. We arrived in Kathmandu and in the hospital the
        baby quickly grew stronger. We also set up a small fund to support baby
        Dawa in his childhood and studies, and I continue to visit him whenever
        possible.
      </div>
      <div className="text">
        Earthquake
        <br /> It was April 2015 and my flight to Kathmandu was two days away.
        As I was doing my online check-in I got news of the earthquake. When I
        finally reached our project sites it was clear there was much to be
        done. We slept in tents and cowhouses, moving across the valley from
        village to village. We helped how we could and made a report on how best
        to channel funds into potential projects. The vast influx of foreign
        money meant that financial bureaucracy became extremely complicated. We
        therefore helped our local friends to make an organization “Okhaldhunga
        Nine Hills Association” [https://ninehills.org.np/] who could act as our
        counterparts and collaborators on the ground. Together, we re-built
        various schools, homes, and carried out water purity tests on different
        springs.
      </div>
      <div className="text">
        Collecting stories
        <br /> Throughout several years of projects in this area, our day-long
        walks were often accompanied by stories of local folklore. Together with
        children from different primary schools and with the help of village
        elders, we collected some stories. These stories were then written in
        Italian, illustrated, published (by Alpineatudio [ www.alpinestudio.it
        ]), and sold to raise funds. The funds were then used to translate and
        print a bi-lingual (Nepali-English) edition with Vajra Publications
        [https://www.vajrabookshop.com/], which was finally brought back to the
        libraries of the schools from where the stories originally came. Both
        editions of these books are now available from Vajra Publications and
        from Eco Himal.
        [https://www.pilgrimsonlineshop.com/7022-the-spirits-of-the-forest-a-short-story-between-reality-and-fantasy.html]
        <img className="img" src={stories} alt="Collecting stories" />
      </div>
      <div className="text">
        Limi
        <br /> In Autumn 2018 I assisted a trip to Limi valley in Humla as part
        of the “Himal-connect project”, a research and impact scheme of the
        University of Oslo and the University of Cambridge. While there, I
        carried out English language and environmental care workshops at some
        local primary schools. As the area is so remote, Limi valley struggles
        to retain its teachers, and governmental schooling material often
        doesn’t get there. Following a request from the villagers, EcoHimal
        decided to provide the wages of an additional teacher, and to provide
        some basic school supplies.
      </div>
      <div className="text">
        <img className="img" src={fundraising} alt="Fundraising" />
        Fundraising
        <br /> I also collaborate with EcoHimal while in Europe, talking at
        fundraisers and carrying out workshops in schools. In 2016 I was a
        delegate in a Curriculum Workshop which was part of the AHRC funded
        project: Pathways to Understanding the Changing Climate. I presented
        what we had done in terms of the school’s connection [link above]
        between Nepal, Italy and the UK. This was done in collaboration with
        MIASU [https://www.miasu.socanth.cam.ac.uk/], the Department of Social
        Anthropology, and the Faculty of Education at the University of
        Cambridge.
      </div>
    </div>
  );
};

export default NGO;
