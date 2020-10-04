import React from 'react'
import './Interests.css'
import Flip from 'react-reveal/Flip'

function Interests() {


    const interests = [
        {
            name: 'Movies & Dramas',
            path: "/Images/interests/showbiz.png",
            description: "I had developed a huge interest in Pakistani Dramas (not typical ones like 'Saas Bahu' or 'Love Triangles' but something on social or religious issues). My Favourite Dramas are Cheekh, Udaari, Alif Allah or Insan and Mushk. Similarly, I also have huge interest in movies (not fantasies like 'Super Heroes'). My favourite movies are Inception, The Martian and The Belko Experiment"
        },
        {
            name: 'Travel',
            path: "/Images/interests/traveling.png",
            description: "Nature's love is just embedded in my heart by God. I loe to explore the God's Highness through his signs by visiting them. I have also a huge interest in visiting ancient or histroical sites to gather knowledge about them"
        },
        {
            name: 'Writing & Poetry',
            path: "/Images/interests/poertry.png",
            description: "Sometimes during spare hours, my mind begins to imagine some characters and make stories about them. I have also started writing a novel. Moreover, I can also do poetry in Urdu"
        },
    ];

    return (
        <div className="interests-container">
            {interests.map((item) => (
                <Flip bottom cascade>
                    <div className="interest-card">
                        <img src={item.path} className="interest-img"/>
                        <h3 className="interest-name">{item.name}</h3>
                        <p className="interest-desc">{item.description}</p>
                    </div>
                </Flip>
            ))}
        </div>
    )
}

export default Interests
