import React from 'react'
import { Link } from 'react-router-dom'

export default class AboutSection extends React.Component {
  render() {
    return (
      <div className="row text-center">
        <div className="col-md-3 pl-5 pr-5 mb-3">
          <i className="fa fa-file-code-o fa-5x accent-text-color"></i>
          <p className="h3 mt-4 font-weight-medium">web design</p>
          <p className="h4 mt-4 font-weight-light">I make flexible layout sites using the latest tools such as <a href="https://facebook.github.io/react/">React</a> and <a href="https://www.meteor.com/">Meteor</a>.</p>
        </div>
        <div className="col-md-3 pl-5 pr-5 mb-3">
          <i className="fa fa-image fa-5x accent-text-color"></i>
          <p className="h3 mt-4 font-weight-medium">graphic design</p>
          <p className="h4 mt-4 font-weight-light">I do logo design and other graphic design using tools such as <a href="http://www.adobe.com/products/illustrator.html">Adobe Illustrator</a> and <a href="https://affinity.serif.com/en-us/designer/">Affinity Designer</a>.</p>
        </div>
        <div className="col-md-3 pl-5 pr-5 mb-3 mx-auto">
          <i className="fa fa-camera fa-5x accent-text-color"></i>
          <p className="h3 mt-4 font-weight-medium">photography</p>
          <p className="h4 mt-4 font-weight-light">I do photography as mainly a hobby, but have never done it professionally.</p>
        </div>
        <div className="col-md-3 pl-5 pr-5 mb-3 mx-auto">
          <i className="fa fa-terminal fa-5x accent-text-color"></i>
          <p className="h3 mt-4 font-weight-medium">machine learning</p>
          <p className="h4 mt-4 font-weight-light">I do my programming in javascript and java with nueral networks.</p>
        </div>
        <div className="col-md-3 pl-5 pr-5 mb-3">
          <Link to="/webdesign" className={'more-link-' + this.props.accentColor}>Learn More...</Link>
        </div>
        <div className="col-md-3 pl-5 pr-5 mb-3">
          <Link to="/graphicdesign" className={'more-link-' + this.props.accentColor}>Learn More...</Link>
        </div>
        <div className="col-md-3 pl-5 pr-5 mb-3">
          <Link to="/photography" className={'more-link-' + this.props.accentColor}>Learn More...</Link>
        </div>
        <div className="col-md-3 pl-5 pr-5 mb-3">
          <Link to="/machine-learning" className={'more-link-' + this.props.accentColor}>Learn More...</Link>
        </div>
      </div>
    )
  }
}
