import React, { useState } from "react";
import { render } from "react-dom";
import Topbar from "./Topbar";
import "../css/towntour.css";

import NortonRR from "../assets/ENortonRR.jpg";
import PaperBox from "../assets/BoxCo.jpg";
import MbrookRR from "../assets/MeadowbrookRR.jpg";
import BvilleRR from "../assets/BarrowsvilleRR.jpg";
import PoloDiner from "../assets/PoloDiner.jpg";
import NortonCenter from "../assets/NortonCenter.jpg";
import Wlake from "../assets/WinnecunnetLake.jpg";
import KPCave from "../assets/KingPhilipsCave.jpg";
import GLMansion from "../assets/GeorgeLeonardMansion.jpg";
import WitchBridge from "../assets/WitchesBridge.jpg";
import FratesDairy from "../assets/FratesDairy.jpg";
import WTurkeyFarm from "../assets/WinnecunnetTurkeyFarm.jpg";
import NHSFootball from "../assets/1stNHSFootballTeam1964.jpg";
import NSaLA from "../assets/NortonSLAssociation.jpg";
import NCSchool from "../assets/NortonCenterSchool.jpg";
import CMESociety from "../assets/CharMethEpisSoc.jpg";
import PresHouse from "../assets/WheatonPresHouse.jpg";
import MbrookPond from "../assets/MeadowbrookPond.jpg";
import JhuntFH from "../assets/JHuntFarmhouse.jpg";
import WbrosIce from "../assets/WoodwardBrosIceWagon.jpg";
import BIceHouse from "../assets/IceHouseBarrowsvill.jpg";
import CharIceCo from "../assets/CharIceCo.jpg";
import ColeChapel from "../assets/WheatonColeChapel.jpg";
import TrinConChurch from "../assets/TrinitarianChurch.jpg";
import OldPubLib from "../assets/NortonLibrary.jpg";
import OldTH from "../assets/OldTownHall.jpg";
import GTHouse from "../assets/GeorgeTalbotHouse.jpg";
import School5 from "../assets/DistrictSchool5.jpg";
import CFireStation from "../assets/ChartleyFireStation.jpg";
import ENortonPO from "../assets/ENortonPO.jpg";
import WheatonObservatory from "../assets/WheatonObservatory.jpg";
import NHSBball from "../assets/1stNHSBaseballTeam.jpg";
import School7 from "../assets/DistrictSchool7.jpg";
import PinesHouse from "../assets/HouseInThePines.jpg";
import HLHouse from "../assets/HomerLaneHouse.jpg";
import TheSem from "../assets/SemWheatonCollege.jpg";
import HaskinsPharmacy from "../assets/HaskinsPharmacy.jpg";
import BruceHouse from "../assets/BruceBaskets.jpg";
import HodgesHouse from "../assets/HodgesHouse.jpg";
import GaryRocks from "../assets/GaryRocks.jpg";
import CIW from "../assets/ChartleyIronWorks.jpg";
import NortonFleaMarket from "../assets/NortonFleaMarket.jpg";
import JennyGasStation from "../assets/JennyGasStation.jpg";
import Lunchroom from "../assets/BellavanceLunchRoom.jpg";
import SmithShop from "../assets/DunnBlacksmithShop.jpg";
import WheatonCollege from "../assets/WheatonCollege.jpg";

import { Footer as Bottom } from "./Footer";
import { Layout, Card, Divider } from "antd";
import Thing from "./TowntourWork";
const { Content, Footer } = Layout;
const { Meta } = Card;
const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class Towntour extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
            <b>TOWN TOUR</b>
          </Divider>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="East Norton Railroad Station"
              title="East Norton RR Station"
              images={NortonRR}
              description=""
              modImage={NortonRR}
              content="The former East Norton Railroad Station on East Main Street is one of 
              the few railroad stations designed by Richard Upjohn, one of America's first 
              great Gothic architects. He designed Trinity Church in New York City. The station 
              was built in 1853 beside the Taunton branch line. During the early 1900's about 14 
              passenger trains a day traveled on this line. Frank Clapp met each train carrying 
              people to and from the center in his horse drawn 'station' wagon. Later he used a 
              Model T Ford touring car."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="AH Sweet Paper Box Co."
              title="AH Sweet Paper Box Co."
              images={PaperBox}
              description=""
              modImage={PaperBox}
              content="The A.H. Sweet Paper Box Company was situated on West Main Street where the 
              Village Plaza is today. The area was called Messingerville. Austin Messinger began 
              making friction matches in 1858. He continued in business with his son-in-law, Andrew H. 
              Sweet, until 1880 when they sold out to the Diamond March Company. Mr. Sweet started 
              manufacturing paper boxes until the factory burned down in the 1920's. A more recent 
              name for this area is Box Shop Curve."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Meadowbrook Railroad"
              title="Meadowbrook Railroad"
              images={MbrookRR}
              description=""
              modImage={MbrookRR}
              content="The Meadowbrook Railroad Station was on Route 140 across from Meadowbrook Pond
               on the Taunton/Attleboro railroad line. In 1900 this area was called Norton Furnace. 
               Meadowbrook had a post office at that time. Mrs. Lydia Lincoln Austin was the station 
               agent as well as the postmaster. Notice the framed device built on the roof which 
               extends out. A mail pouch would be fastened to the frame and be picked up by a catcher 
               arm on a passing train. The railroad through Meadowbrook was built in the 1860's."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Barrowsville Railroad"
              title="Barrowsville Railroad"
              images={BvilleRR}
              description=""
              modImage={BvilleRR}
              content="Barrowsville Railroad Station was situated on South Worcester Street diagonally 
              across from where the Barrowsville Station store is today. In 1900 the station agent was 
              Savillion Bates. Notice the kerosene lamp posts along the tracks. The station building 
              is now a house."
            />
          </div>

          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Polo Diner"
              title="Polo Diner"
              images={PoloDiner}
              description=""
              modImage={PoloDiner}
              content="The Polo Diner stood on Taunton Avenue just beyond Howard Street. The diner 
              consisted of two former Norton trolleys. Mr. Jette, the owner, enjoyed playing polo on 
              roller skates, a game called rollo-polo, hence the name Polo Diner. He opened the diner 
              in the 1930's. Evangelica Teixeira later bought the business and ran a very popular 
              eating establishment for several years."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Norton Center"
              title="Norton Center"
              images={NortonCenter}
              description=""
              modImage={NortonCenter}
              content="This is a view of Norton Center in the 1920's. In the foreground is the Wheaton
               Inn which was the former home of Judge Laban Wheaton, founder of the Wheaton Seminary. 
               The First Congregational Parish (Unitarian) Church is viewed in the background. Its bell 
               was cast by Paul Revere and Sons in 1810. From Norton Center one could ride a trolley to 
               Taunton, Attleboro or Mansfield and points beyond. The Norton trolley company was called 
               the NTA(Norton, Taunton, Attleboro)."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Winnecunnet Lake"
              title="Winnecunnet Lake"
              images={Wlake}
              description=""
              modImage={Wlake}
              content="Winnecunnet Lake is the only large natural body of water in Norton. In the 1930's 
              and 1940's, people from the cities would park along Bay Road to enjoy a day of swimming 
              and boating. Lankey Reinhard ran a very popular ice cream stand, the Arrowhead, on the 
              lake's bank."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="King Philips Cave"
              title="King Philips Cave"
              images={KPCave}
              description=""
              modImage={KPCave}
              content="Near Winnecunnet Lake on Plain Street is Great Rocky Hill where King Philip's 
              Cave is located. Orriginaly named Metacomet, the Pilgrims gave the man for which the 
              cave was named the name Philip. He was the Chief Sachem of the Wamponoag. King Philip 
              frequently visited Winnecunnet on fishing and hunting trips, staying in the cave at 
              Great Rocky Hill."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="George Leonard Mansion"
              title="George Leonard Mansion"
              images={GLMansion}
              description=""
              modImage={GLMansion}
              content="Prior to 1700, Major George Leonard built the Leonard Mansion which stood 
              until the early 1960's. It is said that Leonard made a league with the devil in 
              order to acquire great wealth. He promised his body to the devil when he died. 
              Leonard became very rich and an influential citizen of the town. In 1716 when 
              Leonard died, the devil came to claim his body. Surprised in the act, the devil 
              climbed out a window. He jumped so hard on some rocks , he left footprints there. 
              One can see those footprints on the rock by the parking lot of the Solomonese School. 
              The mansion was situated at the corner of West Main and North Worcester Streets where 
              Chartley Corner Plaza is today"
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="The Witches' Bridge"
              title="The Witches' Bridge"
              images={WitchBridge}
              description=""
              modImage={WitchBridge}
              content="In its early years, Norton had been known to have its witches. Dora Leonard 
              and Naomi Burt, reputed as witches, would cause trouble to those who displeased them. 
              Cattle would disappear or wheels would fall off wagons. Ann Cobb dealt in the 
              'black art' and was in league with the 'Old Scratch.' Passing away in 1798, the 
              Power Street Bridge has since been called the Ann Cobb Bridge and the Witches' 
              Bridge."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Frates Dairy"
              title="Frates Dairy"
              images={FratesDairy}
              description=""
              modImage={FratesDairy}
              content="Frates Dairy was a very popular eating place in the 1950's at the beach 
              by the Norton Reservoir. Notice the milk bottle sign. On warm summer days, people enjoyed 
              swimming and boating. There was a swan boat which cruised people around the beautiful body 
              of water. Tsang's Restaurant is situated there today."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Winnecunnet Turkey Farm"
              title="Winnecunnet Turkey Farm"
              images={WTurkeyFarm}
              description=""
              modImage={WTurkeyFarm}
              content="The Winnecunnet Turkey Farm was situated behind the Winnicunnet Cemetery and Bay 
              Road. Here, as many as 10,000 turkeys were fattened for the Thanksgiving market. They 
              strutted about the 200-acres farm which was originally the winter home of a tribe of 
              gypsies. When the gypsy queen died, the tribe sold the land and it became one of the largest
               turkey ranches in the country."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Norton's 1st Football Team"
              title="Norton's 1st Football Team"
              images={NHSFootball}
              description=""
              modImage={NHSFootball}
              content="Football was introduced to Norton High School athletics in the fall of 1964. 
              Peter Bartek and Andrew Whelsan were the coaches. Although the season was short, the boys 
              on this first team played outstandingly in their games against Medfield, Mansfield and 
              Lincoln. In the fall of 1966, the team played its first full varsity schedule."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Norton Savings and Loan Associaiton"
              title="Norton Savings and Loan Associaiton"
              images={NSaLA}
              description=""
              modImage={NSaLA}
              content="The Norton Savings and Loan Association was founded by a group of businessmen 
              in 1890. This group was interested in forming an organization whereby the townspeople might 
              avail themselves of the opportunity to buy and build homes. At first, association meetings
               were held at the Wetherell store (Chartley Country Store) and later at the home of Charles 
               C. Valentine at Valentine's Corner. In 1938, the association built this Cape Cod office 
               building next to the Unitarian Church. Daily office hours were instituted with Marguerite 
               Mondor as full-time clerk. The Mansfield Co-operative Bank is found at this site today."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Norton Center School"
              title="Norton Center School"
              images={NCSchool}
              description=""
              modImage={NCSchool}
              content="Prior to 1902, Norton did not have a high school. Any student desiring a high 
              school education had to go out of town with Norton paying the tuition. In 1902, the town 
              constructed a four-classroom school on land donated by Mrs. Evan Wheaton. Three of the 
              rooms were elementary and the fourth room functioned as a high school. In 1915, the town 
              voted to erect additions to both ends of the school. The first floor housed the grammar 
              school while the second floor contained the high school. In 1966, the school building was 
              razed. The Norton Historical Society's third schoolhouse now stands on this site."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Chartley Methodist Episcopal Society"
              title="Methodist Episcopal Soc."
              images={CMESociety}
              description=""
              modImage={CMESociety}
              content="In 1873, the Chartley Methodist Episcopal Society was organized in Norton meeting 
              in private homes in Chartley which was then known as Lane's Station. The chapel was built in 
              1875. Around 1900, the chapel was raised, a wing added and the bell tower built. Notice the 
              buggy stall shed in the rear. This church is now known as the Chartley United Methodist Church."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="The President's House"
              title="The President's House"
              images={PresHouse}
              description=""
              modImage={PresHouse}
              content="The President's House was built around 1829 by Judge Labon Wheaton as a wedding gift to 
              his son, Labon M.Wheaton and bride, Eliza Baylies Chapin Wheaton. Mrs. Wheaton lived there for 76
               years. From the time of her death to the present time it has been the home of the presidents of 
               Wheaton College."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Meadowbrook Pond"
              title="Meadowbrook Pond"
              images={MbrookPond}
              description=""
              modImage={MbrookPond}
              content="As one drives along Taunton line, very picturesque Meadowbrook Pond is seen on the right. 
              Over the years various mills operated there. Until 1941 ice harvesting was done with the ice house 
              located by the railroad tracks."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Josiah Hunt Farmhouse"
              title="Josiah Hunt Farmhouse"
              images={JhuntFH}
              description=""
              modImage={JhuntFH}
              content="This farmhouse was built in the late 1700's or early 1800's. Until 1964 it was owned and 
              lived in by descendants of Josiah Hunt, who was born in Norton in 1775. The original house was 
              expanded with an 'L' and woodshed in 1867. The barn was erected in 1835. Today the barn's interior 
              exposed beams and wrought hewn walls provide a quaint atmosphere for Barbara Silvia's shop Wildberry 
              Crafts on South Washington Street."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="The Woodward Brothers Ice Wagon"
              title="Woodward Bros. Ice Wagon"
              images={WbrosIce}
              description=""
              modImage={WbrosIce}
              content="The Woodward Brothers ran an ice-cutting operation along with their Sawmill Curve on East Main 
              Street. This was situated where the 495 highway crosses Route 123. The Woodwards stored the ice in their 
              three ice houses. Harold Woodward and his horse, Major, come to their houses so they could have chips of 
              ice from the back of the wagon to cool their thirst on hot, summer days."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Barrowsville Ice House"
              title="Barrowsville Ice House"
              images={BIceHouse}
              description=""
              modImage={BIceHouse}
              content="In the early 1900's a large ice harvesting operation was situated on Barrowsville Pond. It was
               owned by the Providence Ice Company. A spur track from the railroad main line ran to the ice houses where 
               freight cars were loaded with blocks of ice for shipment. The ice-harvesting industry disappeared with 
               the development of electric refrigeration."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="The Chartley Ice Company"
              title="The Chartley Ice Company"
              images={CharIceCo}
              description=""
              modImage={CharIceCo}
              content="The Chartley Pond ice harvesting operation was begun by Oliver Lane. The Chartley Ice Company 
              delivered ice in any part of Norton and Mansfield at reasonable rates. The company had three ice wagons
               for delivering. Later, the company was owned by Fred Roach and then the Attleboro Ice Company. The 
               icemen would deliver blocks of ice to households."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Cole Memorial Chapel"
              title="Cole Memorial Chapel"
              images={ColeChapel}
              description=""
              modImage={ColeChapel}
              content="As one approaches Norton Center a beautiful white spire appears in the skyline. This is the 
              spire of Wheaton College's Cole Memorial Chapel designed by Ralph Adams Cram in 1918. It was named in 
              honor or Rev. Dr. Samuel V. Cole, president of Wheaton Seminary. Cram and his architectural firm designed 
              the grounds and several buildings of Wheaton's Old Campus. The front of the chapel overlooks the Dimple 
              while its beautiful pillared back faces Peacock Pond."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Trinitarian Congregational Church"
              title="Trinitarian Church"
              images={TrinConChurch}
              description=""
              modImage={TrinConChurch}
              content="In 1832, the Trinitarian Congregational Church was organized in Norton with its first meeting 
              house built in 1834. In 1878, Eliza B. Wheaton had Wheaton College's old gymnasium moved and attached to 
              the church's main sanctuary. In 1882, Wheaton had the entire church rebuilt at her own expense and furnished 
              a Howard clock for its tower. The architect, Stephen C. Earls, designed this early Colonial Revival building. 
              Earls designed more than 15 churches in his home town of Worcester"
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Old Public Library"
              title="Old Public Library"
              images={OldPubLib}
              description=""
              modImage={OldPubLib}
              content="When standing on the common facing Mansfield Avenue you see a handsome brick and brownstone 
              building--the Old Public Library. It was designed by Stephen C. Earle, one of Worcester's best known 
              19th century architects. Mrs. Eliza B. Wheaton gave the building and land to the town for the use as a 
              library. It was dedicated in 1888. As you walk up the steps you will notice two guardian owls looking so 
              wisely at you. When the new public library was opened on East Main Street this building and land was returned 
              to Wheaton College."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="The Old Town Hall"
              title="The Old Town Hall"
              images={OldTH}
              description=""
              modImage={OldTH}
              content="Harriet Newcomb presented the Old Town Hall to the town in 1882 as a tribute to her father, 
              Nathaniel Newcomb. She hired a prominent New Bedford architectural firm, Caleb Hammond and Son, to design 
              the building. Many of this firm's buildings are found all over central New Bedford. Other events besides 
              the town's political and financial business were held here. Over the years movies, minstrel shows, dances, 
              plays, graduation exercises and basketball games were held in the hall. Today, it houses the Wheaton 
              College Bookstore."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="George Talbot House"
              title="George Talbot House"
              images={GTHouse}
              description=""
              modImage={GTHouse}
              content="The impressive George Talbot House stands next to the Old Town Library on Mansfield Avenue. Across 
              the street at 7 Mansfield Avenue is the former J.C. Pratt house. Mr. Talbot owned the Talbot Wool Combing 
              Company on Elm Street while Mr. Pratt became Norton's postmaster in 1906 and ran Pratt's Country Store in the 
              center. Both of these houses were designed circa 1908 by May Davis Mason. One of the firms that employed Mr. 
              Mason during his career was the Witherell Construction Company in Taunton."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="District School #5"
              title="District School #5"
              images={School5}
              description=""
              modImage={School5}
              content="The District School #5 was located on the corner of Newland and North Washington streets. This photo 
              taken in 1913 shows Miss Burke standing in front of the school with her class. The children are members of the 
              Beebe, White, Scott, Foster and Sweet families. When the school was closed it was moved to West Main Street to 
              be used as a fire station. Today it is the home of the Senior Citizen's Drop-in Center."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Chartley Fire Station"
              title="Chartley Fire Station"
              images={CFireStation}
              description=""
              modImage={CFireStation}
              content="The entire Norton Fire Department apparatus lined up in front of the Chartley Fire Station on South 
              Worcester Street to celebrate its opening in November 1956. Chief Harold Wetherell gave the land in 1955 for 
              the new station. It was built in 1956 by William F. Fales at the cost of $28,000. The station was closed in 
              1991."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="East Norton Post Office"
              title="East Norton Post Office"
              images={ENortonPO}
              description=""
              modImage={ENortonPO}
              content="The East Norton Post Office was situated along the tracks by the East Norton Railroad Station. Mail 
              arriving on the morning train was sorted by the station agent, Mr. Eli Wood. Then mail would be taken to the 
              Center Post Office. This building was moved across the tracks to a private resident's backyard. In 1905 when 
              Charles Bruce became postmaster, the post office was moved into the railroad station. The station closed in 
              1948."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Wheaton College Observatory"
              title="Wheaton College Observatory"
              images={WheatonObservatory}
              description=""
              modImage={WheatonObservatory}
              content="This brick building can be seen behind the Wheaton College president's house on East Main Street. 
              This observatory was built in 1917 under the direction of the superintendent of buildings and grounds by college 
              employees. It was made mainly out of material left over from other building operations on the campus. It housed 
              a six-and-a-half-inch refracting telescope. The building was closed in the 1970's when a new observatory was 
              located on the roof of the science building. It was reopened for student housing in 1990."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="NHS's First Baseball Team"
              title="Norton High School Baseball Team"
              images={NHSBball}
              description=""
              modImage={NHSBball}
              content="According to the late Charles Randall, high school principal, the baseball team of 1924 was the best 
              at that time to ever represent the high school. The team won games from Taunton, Mansfield, Foxboro, Plainville 
              and Wrentham. The team practiced at the Wetherell Field off South Worcester Street in Chartley. Seated left to 
              right: William Adair, Alfred Hewins, Harold Wetherell (former fire chief), Lee Harper, Arthur Ross and John Wilder. 
              Standing left to right: Donald Stewart, Charles Flaherty, Alex Stewart, Charles Randall - principal, Wilfred Yelle 
              and Robert Young."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="District School #7"
              title="District School #7"
              images={School7}
              description=""
              modImage={School7}
              content="During recess on a spring school day in the early 1900's the boys wearing their long socks and knicker 
              pants enjoyed playing baseball. Their field was the front yard of #7 District School on South Washington Street. 
              Adelaide E. Austin was their teacher and Chester F. Butts was the janitor."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="The House in the Pines"
              title="The Hosue in the Pines"
              images={PinesHouse}
              description=""
              modImage={PinesHouse}
              content="On East Main Street across from the town hall can be seen this stately building nestled in the pines. 
              This was the main house of a boarding school for girls called House in the Pines. It was founded in 1911 by Miss 
              Gertrude Cornish. The student body comprised about 160 girls who came from many states and some foreign countries. 
              The school closed in 1972. The town hall building was the school's gymnasium."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Homer Lane House"
              title="Homer Lane House"
              images={HLHouse}
              description=""
              modImage={HLHouse}
              content="On West Main Street by the entrance to the Solmonese School stands the Homer L. Lane house. Mr. Lane 
              and his brother, Howard, carried on a laundry business in the building where Reliable Electric is today. He also 
              managed a large farm on the land where the school is located. The red brick silo was attached to his barn."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="'The Sem' at 3 Howard St."
              title="'The Sem' at 3 Howard St."
              images={TheSem}
              description=""
              modImage={TheSem}
              content="'The Sem' at 3 Howard St. was originally built in 1824 on the site where the north wing of the Mary 
              Lyon Hall now stands. 'The Sem' was a classroom building for the Wheaton Female Seminary. When moved to Howard
               Street the building had different uses through the years. To name a few -- a straw hat factory, laundry, 
               gymnasium, post office, dormitory and presently a home for faculty and staff."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Haskins Pharmacy"
              title="Haskins Pharmacy"
              images={HaskinsPharmacy}
              description=""
              modImage={HaskinsPharmacy}
              content="Norton's Country Store was the original site of Haskins Pharmacy. The business was founded by the 
              late Lewis S. Rubin which opened in 1945 under the name of Norton Perfumery. In 1946, it was sold to Francis 
              Sullivan and known as Sully's. At one time its soda fountain was a very popular place for lunches and banana 
              splits. In 1956, Malcom Haskins became the new owner. Today his pharmacy is next door."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="The Bruce House"
              title="The Bruce House"
              images={BruceHouse}
              description=""
              modImage={BruceHouse}
              content="On North Washington Street just before approaching Essex Street are some early homes once owned by 
              the Bruce family. The Bruces were basket makers who made all sorts of baskets of oak or ash from the local 
              woods. Though basket making in the 19th century never brought large pay, it required little overhead expense 
              and could mean a good livelihood for a family. Some men worked at it during the off seasons in other lines 
              of work."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Hodges House"
              title="Hodges House"
              images={HodgesHouse}
              description=""
              modImage={HodgesHouse}
              content="In the southwest corner of Norton, there is a street two miles and six-tenths long that runs from 
              the Taunton line to the Attleboro line. In 1855, there were 10 houses on this road and five were owned by 
              Hodges. This road was appropriately named Hodges Street. The Hodges were among the early settlers. They held 
              many important town positions, military offices and were successful farmer and businessmen."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Gary Rocks"
              title="Gary Rocks"
              images={GaryRocks}
              description=""
              modImage={GaryRocks}
              content="Barrowsville Mill-Pond was the site of early mills. On the northerly side of the pond can be seen 
              some large rocks. According to Clark's History of Norton, a Miss Gary disappeared in the autumn of 1782. 
              The next spring her body was found by some children between these large rocks. From this event the rocks 
              became known as Gary Rocks."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Cartley Iron Works"
              title="Chartley Iron Works"
              images={CIW}
              description=""
              modImage={CIW}
              content="In 1695, Thomas and James Leonard built the Chartley Iron Works at the corner of South Worcester 
              and West Main streets. Bog iron was dug along the banks of Stony Brook which flowed through the area where 
              Chartley Pond is today. In 1872, William A. Sturdy built the first jewelry shop in town on this site. In 
              1911, a fire destroyed much of the building. The Sturdy family rebuilt and continued operating the jewelry 
              company for many years in the Sturdy Brothers building."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Norton Flea Market"
              title="Norton Flea Market"
              images={NortonFleaMarket}
              description=""
              modImage={NortonFleaMarket}
              content="For several years Norton was known throughout the region as the town with the largest weekly flea 
              market in New England. This huge Sunday flea market was held on Charles's Pino's land on Mansfield Avenue 
              by the Norton Reservoir. It was an extremely busy flea market run by Richard Pino and George Bernheimer. 
              Today the Great Woods Marketplace is situated on this land."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Jenny Gas Station"
              title="Jenny Gas Station"
              images={JennyGasStation}
              description=""
              modImage={JennyGasStation}
              content="On Taunton Avenue beyond Howard Street is the Atlantic Coast Drywall Company. The office section 
              of this building was originally the Jenny Gas Station built and operated by George Pierce in the late 1930's. 
              Later on Mr. Pierce attached a two-car garage for repair work. The neighborhood youngsters would come by for 
              free air for their bike tires. In the background can be seen the Payson house which is now owned by Wheaton
               College. Today only the long driveway can be seen from the road as the house is hidden by woods."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Bellavance Lunchroom"
              title="Bellavance Lunchroom"
              images={Lunchroom}
              description=""
              modImage={Lunchroom}
              content="This house can be seen on Barrows Street across from the Barrowsville Pond. From the 1930's to the 1950's, 
              Oscar and Blanche Bellavance ran a lunchroom in the small front addition to their home. They served light lunches, 
              sandwiches and ice cream with music from their juke box. Oscar's lunchroom was a very popular eating place enjoyed 
              by the neighbors and the workers employed at Defiance Bleachery which was located behind the house."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Dunn Blacksmith Shop"
              title="Dunn Blacksmith Shop"
              images={SmithShop}
              description=""
              modImage={SmithShop}
              content="On West Main Street next to the Sturdy Building at Chartley Corner is a small building that houses 
              'A Patch of New England.' In the early days, Bill Dunn had his blacksmith shop in this building. Mr. Dunn lived 
              on Barrows Street and walked from his home to his shop daily using the railroad tracks and the former path called 
              the Back Road, extending from behind the old Sturdy School to West Main Street."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Wheaton College"
              title="Wheaton College"
              images={WheatonCollege}
              description=""
              modImage={WheatonCollege}
              content="During the free concerts sponsored by the Great Woods held on the Wheaton College campus this summer, 
              children have enjoyed playing up and down the dimple. This depression began as a cellar hole for a barn. It was 
              sloped into its present form when Emerson dining hall was built in 1908. Originally it was going to be a reflecting 
              pool, a formal garden or a Greek ampitheatre. None of these plans materialized. But it does provide a natural 
              ampitheatre for frolicking children during warm summer evening concerts."
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

export default Towntour;
