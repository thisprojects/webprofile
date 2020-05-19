import React from "react"
import { WiDayCloudy } from "react-icons/wi";
import { FaLaptopMedical } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { GiSpaceShuttle, GiScales } from "react-icons/gi";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { GiSwordsEmblem } from "react-icons/gi";

export default [
  {
    title: "Fair Days Weather",
    icon: <WiDayCloudy size="10em"/>,
    text: ["A weather app that only forcasts fair weather days."],
    list: [
      "React project",
      "Google Cloud Functions",
      "Test framework 'Jest'.",
      "Uses the 'Dark Sky Api'"
    ],
    gitHub: "https://github.com/thisprojects/fair-days",
    link: "./apps/fair-days",
    date: "March 1, 2020"
  },
  {
    title: "Corona Stats Uk",
    icon: < FaLaptopMedical size="10em"/>,
    text: ["Displays UK statistics for Corona virus"],
    list: [
      "GraphQL + Postgres",
      "Node JS",
      "Highcharts",
      "Apollo Client"
    ],
    gitHub: "https://github.com/thisprojects/corona-stats-uk",
    link: "./apps/corona_tracker_uk",
    date: "April 15, 2020"
  },
  {
    title: "JS Trainer",
    icon: <DiJavascript size="10em"/>,
    text: ["How well do you know Javascript?"],
    list: [
      "React project",
      "Redux",
      "React Hooks",
      "Test framework 'Jest'"
    ],
    gitHub: "https://github.com/thisprojects/js-trainer",
    link: "./apps/js-trainer",
    date: "March 31, 2020"
  },
  {
    title: "UK Crime Statistics",
    icon: <GiScales size="10em"/>,
    text: ["Displays UK crime information based on location."],
    list: [
      "React project",
      "Google Cloud Functions and Maps",
      "Test framework 'Jest'.",
      "API data from https://data.police.uk/"
    ],
    gitHub: "https://github.com/thisprojects/crime-stats",
    link: "./apps/crime-stats",
    date: "February 15, 2020"
  },
  {
    title: "ISS Locator",
    icon: <GiSpaceShuttle size="10em"/>,
    text: ["When will the space station will be over your location?"],
    list: [
      "React project",
      "Google Cloud Functions and Maps",
      "Test framework 'Jest'.",
      "API data from http://open-notify.org"
    ],
    gitHub: "https://github.com/thisprojects/space-station-spotter",
    link: "./apps/iss-spotter",
    date: "January 20, 2020"
  },
  {
    title: "Random Quote Generator",
    icon: <BsFillChatSquareQuoteFill size="10em"/>,
    text: [
      "View and record inspirational quotes from some of history's greatest."
    ],
    list: ["React project"],
    gitHub: "https://github.com/thisprojects/quote-generator",
    link: "./apps/quote-generator",
    date: "May 20, 2018"
  },
  {
    title: "Game of Thrones House Picker",
    icon: <GiSwordsEmblem size="10em"/>,
    text: [
      "Randomly peruse your new family name from a database of game of thrones great houses! (life expectancy may vary....)"
    ],
    list: ["React project"],
    gitHub: "https://github.com/thisprojects/got-house-picker",
    link: "./apps/got",
    date: "November 28, 2017"
  }
];
