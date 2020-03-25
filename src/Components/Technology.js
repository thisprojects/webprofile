import React from "react";
import {
  core,
  intermediate,
  basic,
  paragraphs
} from "../Templates/technology-templates";

const MapCard = ({ topic }) => topic.map((item, index) => <li key={ index }>{ item }</li>)

const MapParagraphs = () => paragraphs.map((item, index) => <p key={ index }>{ item }</p>)

const Tech = () => (
  <div className="technology fade-in">
    <h3>Technology</h3>
    <div className="experience">
      <div className="experience-card">
        <h4>Core</h4>
        <ul>
          <MapCard topic={ core } />
        </ul>
      </div>
      <div className="experience-card">
        <h4>Intermediate</h4>
        <ul>
          <MapCard topic={ intermediate } />
        </ul>
      </div>
      <div className="experience-card">
        <h4>Basic</h4>
        <ul>
          <MapCard topic={ basic } />
        </ul>
      </div>
    </div>
    <div className="information">
      <MapParagraphs />
    </div>
  </div>
);

export default Tech;
