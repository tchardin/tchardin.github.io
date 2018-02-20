import React, { PureComponent } from 'react'
import Parallax from './Parallax'
import Navbar from './components/Navbar'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      windowHeigh: window.innerHeight,
      windowWidth: window.innerWidth
    }
    this.onResize = this.onResize.bind(this)
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Parallax {...this.state}/>
      </React.Fragment>
    )
  }
  onResize() {
    this.setState({
      windowHeigh: window.innerHeight,
      windowWidth: window.innerWidth
    })
  }
}

export default App
