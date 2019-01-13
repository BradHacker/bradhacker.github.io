import React from "react";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import PhotoSection from "./PhotoSection";
import Footer from "../../components/Footer";

export default class Photography extends React.Component {
  render() {
    return (
      <div className="App">
        <Section
          isHero={true}
          nav={<Nav setPage={this.props.setPage} active={4} />}
          title={"photography"}
          textJustify={"center"}
          accentColor={"purple"}
        />
        <Section content={<PhotoSection accentColor={"purple"} />} />
        <Footer />
      </div>
    );
  }
}
