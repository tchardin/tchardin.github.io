import React, {Component} from 'react'
import {
  PerspectiveCamera,
  Scene,
  FogExp2,
  Geometry,
  Vector3,
  PointsMaterial,
  Points,
  WebGLRenderer
} from 'three'
const HEIGHT = 295
const WIDTH = 525
const parameters = [
  [ [1, 1, 0.5], 5 ],
  [ [0.95, 1, 0.5], 4 ],
  [ [0.90, 1, 0.5], 3 ],
  [ [0.85, 1, 0.5], 2 ],
  [ [0.80, 1, 0.5], 1 ]
]
var renderer = new WebGLRenderer()
var camera = new PerspectiveCamera(75, WIDTH/HEIGHT, 1 , 3000)
var scene = new Scene()
var geometry = new Geometry()
var color, size, particles, materials = []
var mouseX = 0, mouseY = 0

class DetameComponent extends Component {
  constructor(props) {
    super(props)
    this.renderAnimation = this.renderAnimation.bind(this)
    this.animate = this.animate.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
  }
  onMouseMove(e) {
      mouseX = e.clientX - WIDTH/2,
      mouseY = e.clientY - HEIGHT/2
  }
  renderAnimation() {
    let time = Date.now()*0.00005
    camera.position.x += (mouseX - camera.position.x)*0.05
    camera.position.y += (- mouseY - camera.position.y)*0.05
    camera.lookAt(scene.position)
    for (let i = 0; i< scene.children.length; i++) {
      let object = scene.children[i]
      if (object instanceof Points) {
        object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) )
      }
    }
    for (let i = 0; i < materials.length; i++) {
      color = parameters[i][0]
      let h = ( 360 * ( color[0] + time ) % 360 ) / 360
					materials[i].color.setHSL( h, color[1], color[2] )
    }
    renderer.render(scene, camera)
  }
  animate() {
    requestAnimationFrame(this.animate)
    this.renderAnimation()
  }
  componentDidMount() {
    camera.position.z = 1000
    scene.fog = new FogExp2( 0x000000, 0.0007)
    for (let i = 0; i < 20000; i++) {
      let vertex = new Vector3()
      vertex.x = Math.random()*2000-1000
      vertex.y = Math.random()*2000-1000
      vertex.z = Math.random()*2000-1000
      geometry.vertices.push(vertex)
    }
    for (let i = 0; i < parameters.length; i++) {
      color = parameters[i][1]
      size = parameters[i][1]
      materials[i] = new PointsMaterial({size: size})
      particles = new Points(geometry, materials[i])
      particles.rotation.x = Math.random() * 6
			particles.rotation.y = Math.random() * 6
			particles.rotation.z = Math.random() * 6
      scene.add(particles)
    }
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(WIDTH, HEIGHT)
    this.container.appendChild(renderer.domElement)
    document.addEventListener('mousemove', this.onMouseMove, false)
    this.animate()
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove)
  }
  render() {
    return (
      <div className="tile is-parent">
        <article className="tile is-child box">
          <div className="canvas-container image" ref={(div) => {this.container = div}}></div>
        </article>
        <article className="tile is-child box"
          ref={a => this.article = a}>
          <p className="title is-uppercase yellowLine">Detame</p>
          <p className="subtitle">How might we help web users keep track of their digital identities?</p>
          <div className="content">
            <p>Detame is a browser extensions that tracks data recorded during site visits to give users a better understanding of their privacy and digital identities.</p>
            <p>This is a side project I started after working on a decentralized credit scoring system at IDEO Colab.</p>
            <p>Come back sometime to try it out.</p>
          </div>
          <div className="tags">
            <span className="tag is-danger">Decentralized Identity</span>
            <span className="tag is-danger">Web</span>
          </div>
        </article>
      </div>
    )
  }
}

export default DetameComponent
