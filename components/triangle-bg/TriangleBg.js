import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'

import TriangleTopLeft from '@assets/images/triangle-top-left.svg'
import TriangleTopRight from '@assets/images/triangle-top-right.svg'
import TriangleBottomLeft from '@assets/images/triangle-bottom-left.svg'
import TriangleBottomRight from '@assets/images/triangle-bottom-right.svg'

import './TriangleBg.scss'

class Header extends Component {
  render() {
    return (
      <div className={'pattern-triangle ' + this.props.className}>
        {this.props.direction == 'down' ? (
          <div>
            <div className="triangle triangle-bottom-left">
              <img src={TriangleBottomLeft} alt="" />
            </div>
            <div className="triangle triangle-bottom-right">
              <img src={TriangleBottomRight} alt="" />
            </div>
          </div>
        ) : (
          <div>
            <div className="triangle triangle-top-left">
              <img src={TriangleTopLeft} alt="" />
            </div>
            <div className="triangle triangle-top-right">
              <img src={TriangleTopRight} alt="" />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Header

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>