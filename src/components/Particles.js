import React from 'react'
import styled from 'styled-components'
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

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`
const HEIGHT = window.innerHeight*1.2
const WIDTH = window.innerWidth
const parameters = [
  [ [1, 1, 0.5], 5 ],
  [ [0.95, 1, 0.5], 4 ],
  [ [0.90, 1, 0.5], 3 ],
  [ [0.85, 1, 0.5], 2 ],
  [ [0.80, 1, 0.5], 1 ]
]
let renderer = new WebGLRenderer()
let camera = new PerspectiveCamera(75, WIDTH/HEIGHT, 1 , 3000)
let scene = new Scene()
let geometry = new Geometry()
let color, size, particles, materials = []
let mouseX = 0, mouseY = 0, scWidth = window.innerWidth
let windowHalfX = WIDTH/2
let windowHalfY = HEIGHT/2

class ParticlesComponent extends React.Component {
  onMouseMove = e => {
      mouseX = e.clientX - windowHalfX,
      mouseY = e.clientY - windowHalfY
  }
  renderAnimation = () => {
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
  animate = () => {
    requestAnimationFrame(this.animate)
    this.renderAnimation()
  }
  renderScene = () => {
    camera.position.z = 1000
    scene.fog = new FogExp2( 0x000000, 0.0007)
    for (let i = 0; i < 1000; i++) {
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
    //const frameWidth = scWidth < WIDTH ? scWidth-40 : WIDTH
    renderer.setSize(WIDTH, HEIGHT)
    this.container.appendChild(renderer.domElement)
    document.addEventListener('mousemove', this.onMouseMove, false)
    this.animate()
  }
  onWindowResize = () => {
    windowHalfX = window.innerWidth / 2
    windowHalfY = (window.innerHeight*1.2) / 2
    camera.aspect = window.innerWidth / (window.innerHeight*1.2)
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, (window.innerHeight*1.2))
  }
  componentDidMount() {
    this.renderScene()
    window.addEventListener('resize', this.onWindowResize, false)
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onWindowResize)
  }
  render() {
    return <Container innerRef={(div) => {this.container = div}} />
  }
}

export default ParticlesComponent
