import React, { useState } from 'react';
import Helmet from '../component/Helmet';
import adeboye from '../assets/images/adeboye2.webp';
import jp from '../assets/images/joseph_palace_aboutus2.jpg';
import BreadCrumb from '../component/UI/BreadCrumb';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const names = [
    {
      id: 1,
      name: 'HISTORY',
      description:
        'Joseph’s Palace is a parish of the Redeemed Christian Church of God (RCCG), one of the largest and fastest growing Pentecostal churches in the world. RCCG started in 1952 with just 12 members but has grown into a mega church with parishes spread across the five continents of the world under the present leadership of Pastor E.A Adeboye and his wife, Pastor (Mrs) Folu Adeboye.'
    },
    {
      id: 2,
      name: 'THE CHRISTENING',
      description:
        'In 2007, following the directives of the General Overseer, Pastor E.A Adeboye that youth churches should be established, so as to create room for youths in the ministry to explore and express their potentials. Pastor Julius Olalekan, the Pastor In-Charge of the Province 11, took the first and boldest step by being the first Provincial Pastor to act on the mandate. He thereafter gave approval for the commencement of a youth church in the first week in December 2007 and the inaugural service was officiated by Pastor Peter Ona Amenkhienan representing the General Overseer on the 9th of December, 2007. The mantle of leadership of the first Young Adults & Youth Church fell on Pastor Reuben and Pastor (Mrs) Roseline Inwe as the pioneer pastors (now Pastor in Charge of RCCG Hope Center, Yorkshire, United Kingdom). They were ably assisted by Pastor Ogbeba Harry & Pastor (Mrs) Elizabeth Ogbeba Harry.'
    },
    {
      id: 3,
      name: 'THE REVIVAL',
      description:
        'Joseph’s Palace started with 20 workers and ministers mentioned above in 2007. Barely 2 years on, the church was already a huge success getting National attention, leading a template for future church in RCCG. In the midst of this revival, in 2009, the church was still in its early days, the Mantle of leadership of this God’s Project was passed over to Pastor Felix Oni and Pastor (Mrs) Grace Oni. The pioneering pastor in charge was then moved to RCCG Hope Center, Yorkshire, UK.'
    },
    {
      id: 4,
      name: 'THE EXPLORING AND EXPANSION',
      description:
        'Then the multiplication and rapid expansion phase of the church began, leading many other churches in the province, planting several parishes and expanding the youth and young adults ministry in RCCG. These efforts caught the Provincial and National leaders’ attention and they unrepentantly engage our ministers and workers in various youth and young adults’ positions and activities at the National level. As a result we were able to produce; The Provincial Youth Pastor, Province 11; The Provincial Youth President, Province 11, The Regional Youth Pastor, Region 1 just to mention a few; all under the leadership of Pastor Felix Oni. The church now hosts over 1,200 worshippers, 3 services on Sundays despite giving out over 50% of the church workers and members to new established parishes.'
    },
    {
      id: 5,
      name: 'THE RECOGNITION',
      description:
        'In 2018, the rewards for working hard came again as more work, more responsibilities, when our official status rose from an Area HQ to Provincial Headquarters for newly created Lagos Youth Province 1. It then came to pass that “The husbandman that laboureth must be first partaker of the fruits”- 2 Timothy 2:6. Our investments in youth and young adults ministry, RCCG came speaking for us as a church and also for our Parish Pastor. Pastor Bisi Akande the Provincial Pastor and Pastor Felix Oni became the Assistant Provincial Pastor – Admin. The revelation of God’s plan through Joseph Palace to RCCG and body of Christ globally, unfolds daily. It is an honor for anyone to experience the move of God like never before and nowhere around. That is why we are called The Congregation of The Honorable.'
    }
  ];

  const [expandedName, setExpandedName] = useState([]);

  const handleNameClick = (id) => {
    if (expandedName.includes(id)) {
      setExpandedName(expandedName.filter((exId) => exId !== id));
    } else {
      setExpandedName([...expandedName, id]);
    }
  };
  return (
    <Helmet title="About-Us">
      <section className="bg-cover bg-no-repeat bg-center py-16 lg:py-36">
        <BreadCrumb pageName="About Us" />
        <div className="mt-16 text-primary container md:flex md:justify-between ">
          <div className="md:w-1/2 md:mr-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 capitalize">
              THE CONGREGATION OF THE HONOURABLES
            </h1>

            <p>
              Joseph’s Palace is a royal family of God where the honourable are
              prepared to fulfill destiny in the best possible way, while they
              change the world positively by establishing God’s kingdom
              everywhere. We are not just a church. We are a movement triggered
              by the Lord to rescue failing destiny, enforce kingdom standards,
              empowering the body of Christ to fulfill in reality kingdom
              purpose.
            </p>

            <p>Join us for any of our Sunday and Wednesday services.</p>
          </div>

          <div className="md:w-[30vw] h-full">
            <div className="w-full h-full">
              <img src={adeboye} alt="Adeboye" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="mt-16 text-primary container md:flex md:justify-between ">
          <div className="md:w-[30vw] h-full mb-4">
            <div className="w-full h-full">
              <img src={jp} alt="Adeboye" className="w-full h-full" />
            </div>
          </div>
          <div className="md:w-1/2 md:mr-4 ">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 capitalize">
              A PLACE FOR YOU
            </h1>

            <p>
              We are redefining youth ministry by helping young Christians,
              young adults and families rediscover their place in God and
              destiny. Joseph’s Palace is a parish of the Redeemed Christian
              Church of God (RCCG), one of the largest and fastest-growing
              Pentecostal churches in the world. RCCG started in 1952 with just
              12 members but has grown into a mega church with parishes spread
              across the five continents of the world under the present
              leadership of Pastor E.A Adeboye and his wife, Pastor (Mrs) Folu
              Adeboye.
            </p>

            <div className="max-w-md mx-auto mt-8">
              {names.map((person) => (
                <div
                  key={person.id}
                  className="block items-center border-b border-gray-300 py-2 transition duration-500 ease-in-out"
                >
                  <div className="inline-flex">
                    <div
                      className="cursor-pointer pr-2"
                      onClick={() => handleNameClick(person?.id)}
                    >
                      {expandedName?.includes(person?.id) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M18 16H6c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3M6 12c-.551 0-1 .449-1 1s.449 1 1 1h12c.551 0 1-.449 1-1s-.449-1-1-1z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                            <path
                              fill="currentColor"
                              d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4zm4 0h-2v5a1 1 0 0 1-1 1H5v2h5a1 1 0 0 1 1 1v5h2v-5a1 1 0 0 1 1-1h5v-2h-5a1 1 0 0 1-1-1z"
                            />
                          </g>
                        </svg>
                      )}
                    </div>
                    <div
                      className="flex-grow cursor-pointer"
                      onClick={() => handleNameClick(person.id)}
                    >
                      <span className="text-lg font-semibold">
                        {person.name}
                      </span>
                    </div>
                  </div>
                  {expandedName?.includes(person.id) && (
                    <motion.div
                      animate={{ x: 15 }}
                      transition={{ ease: 'easeOut', duration: 0.3 }}
                      className={`px-4 w-full mt-2`}
                    >
                      <p className="text-gray-700">{person.description}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default AboutUs;
