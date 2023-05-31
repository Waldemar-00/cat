
import React from 'react'
import cat from './cat.webp'
class Cat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  mouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
    console.log(e.clientX, e.clientY)
  }
    render(e) {
      const {x , y} = this.state
      return (
        <div
          style={{ height: '100%', width: '100%' }}
          onMouseMove={this.mouseMove}>
          <img
            src={cat}
            alt="cat"
            style={{position: 'absolute', top: `${y}px`, left: `${x}px`}}
          />
        </div>
      )
    }
}
export default Cat