import React from 'react'

export default class Examples extends React.Component {
  render() {
    let color = this.props.accentColor ? ' accent-' + this.props.accentColor : ' primary-text-color';
    return (
      <div className="row text-center">
        {
          this.props.entries.map((entry, i) => {
            return (
              <div className="col-md-4 pl-5 pr-5" key={i}>
                { this.props.images && this.props.images[i] !== undefined ? (
                  <img src={this.props.images[i]} className="example-photo" alt={entry.image.alt}/>
                ) : (
                  <div></div>
                )}
                <p className={"h3 mt-4 font-weight-medium" + color}>{entry.title}</p>
                <p className="h4 mt-4 font-weight-light">{entry.description}</p>
                { entry.link ? (
                  <div className={"accent-border-" + this.props.accentColor}>
                    <a className={"more-link-" + this.props.accentColor} href={entry.link}>Learn More...</a>
                  </div>
                ) : ('')}
              </div>
            )
          })
        }
      </div>
    )
  }
}
