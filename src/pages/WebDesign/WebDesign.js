import React from "react";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import Examples from "../../components/Examples";
import Resources from "../../components/Resources";

import bradSiteImg from "../../res/bradhackerSite.png";
import meteorImg from "../../res/meteor.svg";
import reactImg from "../../res/react.svg";

import data from "../../data/WebDesignData.json";

export default class WebDesign extends React.Component {
  constructor() {
    super();
    this.state = {
      exampleEntries: data.exampleEntries,
      resourceEntries: data.resourceEntries
    };
  }

  render() {
    return (
      <div className="App">
        <Section
          isHero={true}
          nav={<Nav setPage={this.props.setPage} active={2} />}
          title={"web design"}
          textJustify={"center"}
          accentColor={"green"}
        />
        <Section
          title={"examples"}
          content={
            <Examples
              accentColor={"green"}
              entries={this.state.exampleEntries}
              images={[bradSiteImg]}
            />
          }
        />
        <Section
          title={"resources"}
          content={
            <Resources
              entries={this.state.resourceEntries}
              images={[meteorImg, reactImg]}
            />
          }
          bgImage={"webResources"}
          color={"text-primary-color"}
        />
        <Footer />
      </div>
    );
  }
}
