import React from "react";
import RandomColourWrapper from "./RandomColourWrapper";
import portfolioTemplate from "./../Templates/portfolio-cards";

const MapPortfolioItems = () =>
  portfolioTemplate.map((item, index) => (
    <RandomColourWrapper key={index} classNames={"portfolio-item"}>
      <h4>{item.title}</h4>
      { item.icon }
      <MapParagraphs paragraph={item.text} />
      <MapListItems list={item.list} />
      <a href={item.gitHub} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <AppButton link={item.link} />
      <p>Published {item.date}</p>
    </RandomColourWrapper>
  ));

const MapParagraphs = ({ paragraph }) =>
  paragraph.map((text, index) => (
    <p className="text-item" key={index}>
      {text}
    </p>
  ));

const AppButton = ({ link }) => (
  <a className="launch" target="_blank" rel="noopener noreferrer" href={link}>
    Launch App!
  </a>
);

const MapListItems = ({ list }) => (
  <ul>
    {list.map((listItem, index) => (
      <li key={index}>{listItem}</li>
    ))}
  </ul>
);
const Home = () => (
  <div className="portfolio-wrapper fade-in">
    <MapPortfolioItems />
  </div>
);

export default Home;
