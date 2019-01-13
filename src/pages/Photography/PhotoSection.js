import React from 'react'
import Photo from '../../components/Photo'
import Modal from 'react-modal'
import img0 from './photos/photo0.jpeg'
import img1 from './photos/photo1.jpeg'
import img2 from './photos/photo2.jpeg'
import img3 from './photos/photo3.jpeg'
import img4 from './photos/photo4.JPG'
import img5 from './photos/photo5.jpeg'
import img6 from './photos/photo6.JPG'
import img7 from './photos/photo7.JPG'
import img8 from './photos/photo8.JPG'
import img9 from './photos/photo9.JPG'
import img10 from './photos/photo10.JPG'
import img11 from './photos/photo11.JPG'
import img12 from './photos/photo12.JPG'
import img13 from './photos/photo13.JPG'
import img14 from './photos/photo14.JPG'
import img15 from './photos/photo15.JPG'
import img16 from './photos/photo16.JPG'
import img17 from './photos/photo17.JPG'
import img18 from './photos/photo18.jpeg'
import img19 from './photos/photo19.jpeg'
import img20 from './photos/photo20.jpeg'
import img21 from './photos/photo21.JPG'
import img22 from './photos/photo22.JPG'
import img23 from './photos/photo23.JPG'
import img24 from './photos/photo24.JPG'
import img25 from './photos/photo25.jpeg'
import img26 from './photos/photo26.JPG'
import img27 from './photos/photo27.JPG'
import img28 from './photos/photo28.JPG'
import img29 from './photos/photo29.JPG'
import img30 from './photos/photo30.jpg'
import img31 from './photos/photo31.jpg'

export default class PhotoSection extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedPhoto: null
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal(img, title) {
    if (window.innerWidth >= 768) {
      this.setState({selectedPhoto: img, selectedPhotoTitle: title})
    }
  }
  closeModal() {
    this.setState({selectedPhoto: null, selectedPhotoTitle: null})
  }
  render() {
    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)'
      },
      content : {
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        height                     : '100%',
        width                      : '88%',
        margin                     : 'auto'
      }
    }
    let color = this.props.accentColor ? ' accent-' + this.props.accentColor : ' primary-text-color'
    return (
      <div className="container-fluid">
        <Modal
          isOpen={this.state.selectedPhoto ? true : false}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <div className="my-auto">
            <Photo accentColor={this.props.accentColor} photo={this.state.selectedPhoto} title={this.state.selectedPhotoTitle} fullsize={true} close={this.closeModal}/>
          </div>
        </Modal>
        <div className={'row' + color}>
          <Photo photo={img31} title={'Brick'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img30} title={'Origami Dragon'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img29} title={'Skate'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img28} title={'Sunny Beach'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img27} title={'Bench'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img26} title={'Ocean Breeze'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img25} title={'Spent Shell'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img24} title={'Morning Dew'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img23} title={'Winter Plaid'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img22} title={'Reflections'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img21} title={'Flower In The Rain'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img20} title={'The Stare'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img19} title={'Cold Steel'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img18} title={'Gloomy Day'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img17} title={'Nature'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img16} title={'Corvette Z06'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img15} title={'Pittsburgh Skyline'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img14} title={'Pittsburgh Skyline 2'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img13} title={'Refreshing River'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img12} title={'Sharp'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img11} title={'Rainy Window'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img10} title={'Pittsburgh Incline'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img9} title={'Bark'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img8} title={'Vans'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img7} title={'Ping Pong'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img6} title={'Snow Hunting'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img5} title={'Daydreaming'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img4} title={'Afternoon Ride'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img3} title={'Bus Window'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img2} title={'Snowy Sunrise'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img1} title={'Codon'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
          <Photo photo={img0} title={'Stump'} open={(img, title) => this.openModal(img, title)} close={this.closeModal}/>
        </div>
      </div>
    )
  }
}
