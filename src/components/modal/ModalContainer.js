import React from 'react'
import { Link } from 'react-router-dom'

class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <p><button onClick={() => this.closeModal()}>Close</button></p>

            <ul className="">
              <li className=""><Link to="/">Home</Link></li>
              <li className=""><Link to="/about">About</Link></li>
              <li className=""><Link to="/search">Search</Link></li>
              <li className=""><Link to="/filter">Filter</Link></li>
              <li className=""><Link to="/topics">Topics</Link></li>
              <li className=""><Link to="/gjhfhghj">404</Link></li>
            </ul>
        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false)
      return null

    let modalStyle = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#454552',
      color: '#d8e9ef'
    }

    // if (this.props.width && this.props.height) {
    //   //modalStyle.width = this.props.width + 'px',
    //   modalStyle.height = this.props.height + 'px',
    //   modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
    //   modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
    //   modalStyle.transform = null
    // };

    if (this.props.style) {
      for (let key in this.props.style) {
        modalStyle[key] = this.props.style[key]
      }
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    if (this.props.backdropStyle) {
      for (let key in this.props.backdropStyle) {
        backdropStyle[key] = this.props.backdropStyle[key]
      }
    }

    return (
      <div className={this.props.containerClassName}>
        <div className={this.props.className} style={modalStyle}>
          {this.props.children}
        </div>
        {!this.props.noBackdrop &&
            <div className={this.props.backdropClassName} style={backdropStyle}
                 onClick={e => this.close(e)}/>}
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}

export default ModalContainer
