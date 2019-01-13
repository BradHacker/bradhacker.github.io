import React from 'react'

export default class Section extends React.Component {
  render() {
    let heroClass = ''
    let titleClass = ' h1 font-weight-semi-bold'
    let heroPadding = ' pt-5'
    let bgImage = this.props.bgImage ? (' ' + this.props.bgImage + '-img') : ''
    let padding = this.props.padding ? ' ' + this.props.padding : ' p-3'
    let textJustify = ' text-' + (this.props.textJustify ? this.props.textJustify : 'center')
    let color = this.props.color ? ' ' + this.props.color : ' primary-text-color'
    let accentColor = this.props.accentColor ? ' accent-' + this.props.accentColor : ' accent-red'

    if (this.props.isHero) {
      heroClass = ' hero-img pl-2 pr-2 pb-5'
      titleClass = ' main-title'
      heroPadding = ' pt-0'
      padding = ''
      color = ' text-primary-color'
      accentColor = this.props.accentColor ? ' hero-accent-' + this.props.accentColor : ' hero-accent-red'
    }

    return (
      <div className={'container-fluid' + padding + heroClass + heroPadding + bgImage + textJustify + color + accentColor}>
        { this.props.nav ? (
          this.props.nav
        ) : ("")}
        <div className="row">
          <div className="col-12">
            <p className={titleClass + color}>{this.props.title}</p>
          </div>
        </div>
        { this.props.content ? <br/> : ''}
        <div>
          {this.props.content}
        </div>

      </div>
    )
  }
}
