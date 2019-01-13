import React from 'react'

export default class SchoolSection extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <i className={"fa fa-graduation-cap fa-5x accent-" + this.props.color}></i>
          <p className="h2 font-weight-bold primary-text-color">Appomattox Regional Governor's School</p>
          <p className="h3 font-weight-medium primary-text-color">2016-Present</p>
          <p className="h4 font-weight-light primary-text-color">Appomattox Regional Governor's School is a High School in Petersburg that specializes in the arts and technology. I attended and studied for technology for all years attended.</p>
        </div>
      </div>
    )
  }
}
