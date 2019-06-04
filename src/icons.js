import React from 'react';
import { NavLink } from 'react-router-dom';
import './icons.css';
import fb from './img/fb.png'
import inst from './img/inst.png'
import od from './img/od.png'
import vk from './img/vk.png'
import arrowUp from './img/arrow-up.png'

function Icons() {
  return (
    <div className="icons">
      <div className="icons-sm">
        <div>
          <NavLink to='/'><img src={vk} alt={"vkontakte"} className="big-icon"/></NavLink>
        </div>
        <div>
          <NavLink to='/'><img src={inst} alt={"instagram"} className="big-icon"/></NavLink>
        </div>
        <div>
          <NavLink to='/'><img src={od} alt={"odnoklassniki"} className="big-icon"/></NavLink>
        </div>
        <div>
          <NavLink to='/'><img src={fb} alt={"facebook"} className="big-icon"/></NavLink>
        </div>
      </div>
      <div className="arrowUp">
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
      </div>
    </div>
  );
}

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
      return  <span className='arrow-up glyphicon glyphicon-chevron-up'>
                <img src={arrowUp} alt="" className="big-icon scroll" onClick={ () => { this.scrollToTop(); }} />
              </span>;
   }
}

export default Icons;
