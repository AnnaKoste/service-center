import React from 'react';
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
          <a target="_blank" rel="nofollow" href='https://vk.com'><img src={vk} alt={"vkontakte"} className="icon big-icon"/></a>
        </div>
        <div>
          <a target="_blank" rel="nofollow" href='https://www.instagram.com/'><img src={inst} alt={"instagram"} className="icon big-icon"/></a>
        </div>
        <div>
          <a target="_blank" rel="nofollow" href='https://ok.ru/'><img src={od} alt={"odnoklassniki"} className="icon big-icon"/></a>
        </div>
        <div>
          <a target="_blank" rel="nofollow" href='https://www.facebook.com'><img src={fb} alt={"facebook"} className="icon big-icon"/></a>
        </div>
      </div>
      <div className="icon arrowUp">
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
      </div>
    </div>
  );
}

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
      isHide: true
    };
    this.hideBar = this.hideBar.bind(this)
  }
  hideBar(){
    let {isHide} = this.state.isHide
    window.scrollY > this.prev?
    !isHide && this.setState({isHide:false})
    :
    isHide && this.setState({isHide:true})

    this.prev = window.scrollY;
  }
  componentDidMount(){
    window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.hideBar);
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
    let classHide=this.state.isHide?"hide":""
    return  <span className='arrow-up glyphicon glyphicon-chevron-up' hidden={ classHide }>
      <img src={arrowUp} alt="" className="big-icon scroll" onClick={ () => { this.scrollToTop(); }} />
      </span>;
   }
}

export default Icons;
