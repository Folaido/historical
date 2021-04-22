import React, { useState } from "react";
import { render } from "react-dom";
import Topbar from "./Topbar";
import "../css/stories.css";
import lanky from "../assets/Lanky.jpg";
import moths from "../assets/moths.jpg";
import chief from "../assets/chief.jpg";
import ice from "../assets/ice.jpg";
import fire from "../assets/fire.jpg";
import sturdy from "../assets/sturdy.jpg";
import witches from "../assets/witches.jpg";
import { Footer as Bottom } from "./Footer";
import { Layout, Card, Divider } from "antd";
import Thing from "./storiesWork";
const { Content, Footer } = Layout;
const { Meta } = Card;
const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      isFireModalVisible: false,
    };
  }

  render = () => (
    <Layout className="layout">
      <Topbar />
      <Content>
        <div className="content">
          <Divider plain orientation="left" style={{ fontSize: 40 }}>
            <b>STORIES</b>
          </Divider>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Lawrence 'Lanky' Reinhard"
              title="Lawrence 'Lanky' Reinhard"
              images={lanky}
              description="Lawrence 'Lanky' Reinhard was a hero, leader and role model. "
              modImage={lanky}
              content="Every town has its heroes, leaders and role models. The town of Norton is no exception. In the 1920's on the Old Bay Road, near Ann's Place,
                  a young Lawrence Lanky Reinhard started Arrow Head Ice Cream. His great ice cream, along with the beautiful location, attracted visitors every weekend. 
                  People would show up, swim for the day, relax, and enjoy the ice cream. Lanky was also responsible for starting the Winnecunnet Yacht Club. Located on Lake 
                  Winnecunnet, Lanky had floats in the water with bon fires and speed boat rides were only 35 cents. Lanky was also great with children. When the beach on Lake
                   Winnecunnet opened up in the 1930's, Lanky would teach the Sea Scouts morse code and the art of handling small boats. Lawrence Reinhard lived in Norton, Massachusetts 
                   for 70 years. His dedication and devotion to Norton will be remembered by many. 'Lanky, in a lot of ways was one of the last links to the Norton I remember growing up in,'
                 reflects one."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="FIRE FIRE FIRE"
              title="FIRE FIRE FIRE"
              images={fire}
              description="April 24, 1930 fire in the house of Dr. Clarence N. Davis."
              modImage={fire}
              content="On April 24, 1930, when a fire broke out in the house of Dr. 
                  Clarence N. Davis, twenty Wheaton College women were walking through present 
                  day Keefe field. When they discovered that Norton's only fire truck was stuck 
                  1/2 mile away, they rushed to the scene to try and save the Doctor's possessions. 
                  As they used a ladder to enter the house through the windows, twelve men stood by 
                  watching and discussing the seriousness of the situation. The women's biggest 
                  accomplishment came when they saved a $3,000 piano from the flames. After rescuing 
                  the doctor's furniture, the women returned to their dorm rooms as if nothing had happened."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Witches Bridge"
              title="Witches Bridge"
              images={witches}
              description="Witches, goblins and ghosts have haunted our lives for years."
              modImage={witches}
              content="Witches, goblins and ghosts have haunted our lives for hundreds of years. Over 
                  two hundred years ago a woman named Ann Cobb was accused of dealing with 'black art' and 
                  in working with 'Old Scratch' or the devil. It was not known where or how she got her power,
                   but people believed that she did have it. Ann Cobb died in 1798 and shortly after that the 
                   bridge near her home was named 'Witches Bridge'."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Supression of Moths"
              title="Supression of Moths"
              images={moths}
              description="February 5th, 1916 marks the beginning of the 100 year supression of moths."
              modImage={moths}
              content="February 5th, 1916, a portable sawmill has been set up on a tract of woodland, comprising more or less
                  of 80 acres, to clear off the trees. The prime object of this tree clearing is to exterminate the gypsy and
                  brown tail moths that are said to infest that district in great numbers. Buildings for the workmen are already
                  erected. The work will be done at once under the direction of the state forestry commission. This tract, owned by 
                  Wheaton College, extends from the Catholic church on Taunton Avenue to Thomas Gale's residence on Main Street,
                  and is known as the Neck Woods. The pines alone will be spared. According to the 1916 town report, the expenses
                  for the supression of moths for the year was $481.58. Most of that was wages for 4 men's labor and the use of a 
                  horse. The men earned $1.00-$2.50 a day while the horse received $1.25 a day!"
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Sturdy Brother's Factory"
              title="Sturdy Brother's Factory"
              images={sturdy}
              description="February 19th 1904, the new factory of Sturdy Brothers was dedicated."
              modImage={sturdy}
              content="February 19th 1904, the new factory of Sturdy Brothers was dedicated Saturday. During the afternoon,
                  there was a dance in the building. James Fitzgerald acting as floor director. In the evening at 8, a banquet
                  was served, and many of Norton's prominent citizens were seated at the tables. Selectman William M. Sturdy 
                  was toastmaster. The factory has a floor space of 6000 feet."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="DEALERS IN ICE"
              title="DEALERS IN ICE"
              images={ice}
              description="1906, Norton had two ice dealers, Oliver L. Lane and the Woodward brothers."
              modImage={ice}
              content="In January 1906, Norton had two ice dealers, Oliver L. Lane of South WOrcester Street and the Woodward brothers.
                  Oliver Lane's ice house was located at Chartley Pond. The Woodward brothers had two ice houses located at Chartley Pond.
                  The Woodward brothers had two ice houses located at Saw Mill Pond on East Main Street. The Providence Ice Company had a 
                  large ice house on Barrowsville Pond and Mr. White of Taunton owned seven ice houses on Meadowbrook Pond."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Chief Scanlon"
              title="Chief Scanlon"
              images={chief}
              description="On October 29, Benjamin Scanlon was notified that someone was living in his camp."
              modImage={chief}
              content="On October 29, Benjamin Scanlon, who owns a camp at Lake Winnecunnet, was notified by one occupying
                  a camp nearby that someone was living in Mr. Scanlon's camp. Being an officer, he went at once to his place and arrested
                  the intruder who gave his name as Dillon and said he had previously been employed at the Norton Wool and Scouring Mill.
                  Among his effects were found pillow cases containing an assortment of new shirts and hose. Mr. Scanlon took his prisoner
                  to Attleboro. (Mr. Scanlon served as constable for 40 years. He was appointed the town's first chief of police in 1916 
                  retiring in 1949.)"
            />
          </div>
        </div>
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
}

export default Stories;
