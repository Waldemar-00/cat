
import React from 'react'
import cat from './cat.webp'

class Mouse extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <>
        <img
          src={cat}
          alt="cat"
          style={{position: 'absolute', top: `${mouse.y}px`, left: `${mouse.x}px`}}
        />
      </>
    )
  }
}
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
  }
    render(e) {
      return (
        <div
          style={{ height: '100%', width: '100%' }}
          onMouseMove={this.mouseMove}>
          <Mouse mouse={this.state}/>
        </div>
      )
    }
}

class RenderCat extends React.Component {
  render() {
    return (
      <>
        <Cat />
      </>
    )
  }
}
export default RenderCat