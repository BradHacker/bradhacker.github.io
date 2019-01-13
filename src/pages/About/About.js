import React from "react";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import SchoolSection from "./SchoolSection";
import Footer from "../../components/Footer";

export default class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Section
          isHero={true}
          nav={<Nav setPage={this.props.setPage} active={1} />}
          title={"about"}
          textJustify={"center"}
          accentColor={"yellow"}
        />
        <Section
          content={<SchoolSection color={"yellow"} />}
          title={"school"}
          textJustify={"center"}
          accentColor={"yellow"}
        />
        <Footer />
      </div>
    );
  }
}
