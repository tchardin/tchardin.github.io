import React from 'react'

const balls = [
  {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: 'cyan'
  }
]

class Wallpaper extends React.Component {
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d')
  }
  render() {
    return (
      <canvas
        width={150}
        height={150}
        ref={canvas => this.canvas = canvas}>
      </canvas>
    )
  }
  _draw() {
    for (let i = 0, n = balls.length; i<n; i++) {
      this.ctx.beginPath()
      this.ctx.arc(balls[i]['x'], balls[i]['y'], balls[i]['radius'], 0, Math.PI*2, true)
      this.ctx.closePath()
      this.ctx.fillStyle = balls[i]['color']
      this.ctx.fill()
    }
  }
}

export default Wallpaper
