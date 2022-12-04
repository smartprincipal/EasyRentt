import React from 'react'
import { useState } from 'react';
import './Overview.css';
import bizdev from '../../Assets/briefcase.svg';
import culture from '../../Assets/culture-icon.png';
import landmark from '../../Assets/landmark-icon.svg';
import outdoor from '../../Assets/outdoor-icon.svg';
import transport from '../../Assets/transport-icon.svg';
import dropup from '../../Assets/drop-up.svg';
import dropdown from '../../Assets/drop-down.svg';


const Overview = ({heading}) => {

    // Usestate and Onclick funtion for accordion toggle
    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => {
        return setIsActive(!isActive)};


  return (
    <div className='overview'>
        <h1 className='overheading1'>{heading}</h1>
        <p className='overcontent'>
            Victoria is the capital of Germany, but at the same time, 
            it is a global cosmopolitan hub that differs greatly from other German towns. 
            The city is famous for its diverse mixture of attractions, rich cultural scene, 
            and unique lifestyle that is both rapid and relaxed.
        </p>
        { isActive && <div> 
            <div className='overdiv'>
                <h2 className='overheading2'>Overview</h2>
                <p className='overcontent'>
                    A stark contrast between the traditional and the modern is what distinguishes Berlin from many other European capitals. 
                    For the last couple of decades, Berlin was battling with the highest unemployment rates and many traditional industries 
                    relocating from the city. These were times when the capital of Germany was often regarded as “poor but sexy.
                </p>
                <p className='overcontent'>
                    Right now, Berlin became the heart of European creative industries with a developed start-up infrastructure and legendary 
                    underground culture full of avant-garde artists, musicians, and designers. Consequently, it becomes more and more gentrified; 
                    old warehouses turn into artsy lofts, hopeless inner-city streets spring up with Michelin-rated restaurants, and brutal 
                    socialist-era buildings are converted into social club centers. In many respects, Berlin today is actively reinventing 
                    and redefining itself, and it is fascinating to observe.
                </p>
                <hr className='linebreak' />
                <br />
            </div>
            <div>
                <div className='oversubdiv'>
                    <img src={bizdev} alt="work-icon"  />
                    <h3 className='contentheading'>Business and Economy</h3>
                </div>
                <p className='overcontent'>
                    Berlin is one of those European cities with a thriving and remarkable art scene. 
                    The city has over 170 museums, most of which are conveniently packed on the Museum Island. 
                    Head here to find astonishing collections of paintings and sculptures from different periods, 
                    historical objects, and stunning architecture. Music and choreography connoisseurs come to 
                    Berlin from around the globe to enjoy performances by premier orchestras — such as the 
                    world-renowned Berlin Philharmonic — and see ballets and operas at three grandiose Berlin 
                    opera houses. There are also plenty of music halls, concert venues, and clubs that offer 
                    various kinds of stage performances. Speaking of Berlin, you have to mention street art — 
                    the capital of Germany is celebrated for its graffiti; some even call it “the graffiti Mecca.”
                </p>
            </div>
            <div>
                <div className='oversubdiv'>
                    <img src={culture} alt="culture-icon"  />
                    <h3 className='contentheading'>Culture</h3>
                </div>
                <p className='overcontent'>
                    Berlin is one of those European cities with a thriving and remarkable art scene. The city has 
                    over 170 museums, most of which are conveniently packed on the Museum Island. Head here to find 
                    astonishing collections of paintings and sculptures from different periods, historical objects, 
                    and stunning architecture. Music and choreography connoisseurs come to Berlin from around the 
                    globe to enjoy performances by premier orchestras — such as the world-renowned Berlin Philharmonic 
                    — and see ballets and operas at three grandiose Berlin opera houses. There are also plenty of music 
                    halls, concert venues, and clubs that offer various kinds of stage performances. Speaking of Berlin, 
                    you have to mention street art — the capital of Germany is celebrated for its graffiti; some even call 
                    it “the graffiti Mecca.”
                </p>
            </div>
            <div>
                <div className='oversubdiv'>
                    <img src={landmark} alt="landmark-icon"  />
                    <h3 className='contentheading'>Landmarks</h3>
                </div>
                <p className='overcontent'>
                    From the Charlottenburg Palace to the Berlin Wall Memorial to the Reichstag Building, countless landmarks 
                    of Berlin reflect both its glorious history and darker and gloomier epochs. This ambiguous capital is home 
                    to all major governmental institutions of the country, particularly the historic Reichstag — a stronghold 
                    of German democracy — and the Federal Chancellery. Modern-day Berlin was formed by the ongoing merger of 
                    the amalgam of villages and little towns. Consequently, most of its development was decentralized, which resulted in an abundance of sights throughout Berlin — not only in the city center but also in the peripheral districts. Each neighborhood has its unique style and atmosphere, and pretty much all of them are worth visiting. Take a stroll on the tranquil streets of Prenzlauer Berg if you’re trying to find an area with beautiful old buildings that survived WWII and a serene vibe. Or, check out Friedrichshain if you want to immerse yourself in street art, never-ending parties, and Berlin’s counterculture.
                </p>
            </div>
            <div>
                <div className='oversubdiv'>
                    <img src={outdoor} alt="outdoor-icon"  />
                    <h3 className='contentheading'>Outdoor</h3>
                </div>
                <p className='overcontent'>
                    Berlin fosters a relaxed and slow way of living with lots of parks and open 
                    spaces to enjoy the outdoors. The capital of Germany is thought to be one of the 
                    greenest cities in Europe; it is strewn with lakes, sprawling lawns, and even 
                    the Grunewald forest on the outskirts of the city. During the warm season, 
                    life in Berlin shifts outside — to the terraces of countless cafés, open air 
                    theatres, and movie nights in parks. These events and activities are perfect 
                    for indulging in the sunshine and enjoying mellow summer nights. To start your 
                    acquaintance with the nature of Berlin, visit the Tiergarten — the most popular 
                    and one of the largest parks in Germany. It is not only a great spot for biking, 
                    running, yoga, and picnics but also a place to appreciate art and take a look at 
                    numerous sculptures. Treptower Park is home to a gigantic Soviet War Memorial and 
                    the River Spree, which provides great opportunities for boating.
                </p>
            </div>
            <div>
                <div className='oversubdiv'>
                    <img src={transport} alt="transport-icon"  />
                    <h3 className='contentheading'>Transportation</h3>
                </div>
                <p className='overcontent'>
                    Berlin has a complex transport infrastructure and offers its inhabitants 
                    very diverse ways of getting around the city. There are 979 bridges that 
                    cross 197 kilometers of the city’s rivers and canals, 5,334 kilometers of 
                    roads operating through Berlin, and around 100 kilometers of highways. 
                    The city's public transportation system consists of separate networks, with 
                    five different light and heavy rail systems. That includes the S-Bahn and 
                    U-Bahn rail systems, regional rail infrastructure, a tram and bus network, 
                    and a couple of ferry services. Thanks to all this variety, there is no lack 
                    of interchange stations and transport nodes in the city.
                </p>
            </div> 
        </div>}
       
        <div onClick={handleIsActive} className='accordionimg'>
            {isActive ? <img src={dropup} alt=""  /> : <img src={dropdown} alt=""  />}

        </div>
    </div>
  )
}

export default Overview