import React from 'react'
import './styles.css'

class TButton extends React.PureComponent {
  static defaultProps = {
    onClick: () => console.log('Click'),
    href: "#",
    caption: "Press Me"
  }
  render() {
    const {
      onClick,
      caption,
      href
    } = this.props
    return (
      <a className="button"
        href={href}
        onClick={onClick}>
        {caption}
      </a>
    )
  }
}

export default TButton
