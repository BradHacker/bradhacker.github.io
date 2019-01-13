import React from 'react'

export default class Resources extends React.Component {
  render() {
    let entries = this.props.entries;

    return (
      <div className="row text-center">
        { entries.map((entry, i) => {
          return (
            <div className="col-md-6 pl-5 pr-5" key={i}>
              <img src={this.props.images[i]} className={entry.image.class + " round-image"} width="100" height="100" alt={entry.image.alt}/>
              <p className="h3 mt-4 font-weight-medium">{entry.title}</p>
              <div className="row mb-3 mb-md-0">
                { entry.links.map((link, i) => {
                    return(
                      <div className="col" key={i}>
                        <p className="h4 h5-sm mt-4 font-weight-light"><a href={link.href}><i className={"fa fa-" + link.icon + " fa-2x text-light hover-lightgray"}></i></a></p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
