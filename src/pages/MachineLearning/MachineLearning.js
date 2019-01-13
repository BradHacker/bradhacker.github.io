import React from "react";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import Examples from "../../components/Examples";
import Resources from "../../components/Resources";

import p5nnImg from "../../res/p5nn.png";
import srImg from "../../res/smartRockets.png";
import nnGeneticImg from "../../res/nnGenetic.png";
import nocImg from "../../res/noc.png";
import ctImg from "../../res/ct.jpg";

import data from "../../data/MachineLearningData.json";

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
          nav={<Nav setPage={this.props.setPage} active={5} />}
          title={"machine learning"}
          textJustify={"center"}
          accentColor={"amber"}
        />
        <Section
          title={"examples"}
          content={
            <Examples
              entries={this.state.exampleEntries}
              images={[p5nnImg, srImg, nnGeneticImg]}
              accentColor={"amber"}
            />
          }
        />
        <Section
          title={"resources"}
          content={
            <Resources
              entries={this.state.resourceEntries}
              images={[nocImg, ctImg]}
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
