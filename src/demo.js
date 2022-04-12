import React, {PureComponent} from 'react';

class Demo extends PureComponent {
  static defaultProps = {
    title: 'This is a demo',
    value: 0
  };
  constructor (props) {
    super(props);
    const {title, value} = props;
    this.state = {
      title,
      value
    }
  }
  add = () => {
    this.setState({
      value: this.state.value++
    })
  }
  change = ev => {
    this.setState({
      value: ev.target.value
    })
  }
  compontentWillReceiveProps (nextProps) {
    this.setState({
      title: nextProps.title
    })
  }
  render () {
    return (
      <div className='container'>
        <h3>{this.state.title}</h3>
        <divc className="counter">{this.state.value}</divc>
        <input value={this.state.value} onChange={this.change} />
        <button onClick={this.add}>Value ++</button>
      </div>
    )
  }
}

export default Demo;
