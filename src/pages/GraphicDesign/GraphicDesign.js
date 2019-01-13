import React from "react";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import Resources from "../../components/Resources";
import Examples from "../../components/Examples";

import cbcImg from "../../res/cbcLogo.png";
import illustratorImg from "../../res/adobe-illustrator-cc.svg";
import affinityImg from "../../res/affinity-designer.png";

import data from "../../data/GraphicDesignData.json";

export default class GraphicDesign extends React.Component {
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
          nav={<Nav setPage={this.props.setPage} active={3} />}
          title={"graphic design"}
          textJustify={"center"}
          accentColor={"cyan"}
        />
        <Section
          title={"examples"}
          content={
            <Examples
              accentColor={"cyan"}
              entries={this.state.exampleEntries}
              images={[cbcImg]}
            />
          }
        />
        <Section
          title={"resources"}
          content={
            <Resources
              entries={this.state.resourceEntries}
              images={[illustratorImg, affinityImg]}
            />
          }
          bgImage={"graphicResources"}
          color={"text-primary-color"}
        />
        <Footer />
      </div>
    );
  }
}
