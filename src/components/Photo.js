import React from 'react'

export default class Photo extends React.Component {
  render() {
    return (
      <div className={ this.props.fullsize ? '' : 'col-md-6 col-lg-4 mb-5'}>
        <div className="photo-container">
          { this.props.fullsize && this.props.title ? <h3 className={"float-left text-uppercase font-weight-light accent-" + this.props.accentColor}>{ this.props.title }</h3> : ""}
          { this.props.fullsize ? <i onClick={this.props.close} className="fa fa-close fa-2x mb-2 text-secondary"></i> : ""}
          <div>
            <img src={this.props.photo} className={ this.props.fullsize ? 'photo-fullsize' : 'photo'} alt={this.props.title ? this.props.title : ""} onClick={() => { this.props.open(this.props.photo, this.props.title) }}/>
            { this.props.title && !this.props.fullsize ? (
              <h4 className="mt-3 text-left small-title">{ this.props.title }</h4>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
