import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './index.css';
import About from './about.js'
import Contacts from './contacts.js'
import Promotions from './promotions.js'
import Reviews from './reviews.js'
import Price from './price.js'
import Icons from './icons.js'
import logo from './img/logo.jpg'
import map from './img/map.png'
import phone from './img/phone.png'
import clock from './img/clock.png'
import gear from './img/gear.png'
import target from './img/target.png'
import * as serviceWorker from './serviceWorker';

const Menu = () => (
      <div class="top-menu">
        <div className="limiter">
          <ul class="menu">
            <li ><NavLink to='/'>Услуги и цены &#8744;
              <ul class="submenu">
                <li><NavLink to='/'>Ремонт смартфонов</NavLink></li>
                <li><NavLink to='/'>Ремонт планшетов</NavLink></li>
                <li><NavLink to='/'>Ремонт ноутбуков</NavLink></li>
                <li><NavLink to='/'>Ремонт компьютеров</NavLink></li>
              </ul>
            </NavLink></li>
            <li><NavLink to='/promotions'>Акции</NavLink></li>
            <li><NavLink to='/reviews'>Отзывы</NavLink></li>
            <li><NavLink to='/about'>О нас</NavLink></li>
            <li><NavLink to='/contacts'>Контакты</NavLink></li>
          </ul>
          <NavLink to='/' className='menu-left'>&#9998; Бесплатная диагностика</NavLink>
        </div>
      </div>
)

const Main = () => (
  <div className="main">
    <Icons />
    <header className="limiter">
      <div className="head">
        <div>
          <img src={logo} alt={"logo"} className="logo" />
        </div>
        <div className="address">
          <div className="img-text-block">
            <img src={map} className="small-icon" alt=""/>
            <p className="text-address"> Челябинск, ул. Цвиллинга, д. 57</p>
          </div>
          <div className="img-text-block">
            <img src={clock} className="small-icon" alt=""/>
            <p className="text-address"> Будни: 9:00-18:00б Сб: 9:00-17:00</p>
          </div>
        </div>
        <div className="img-text-block phone">
          <img src={phone} className="middle-icon" alt=""/>
          <p className="text-phone"><strong> +7 904 300 66 00</strong></p>
        </div>
        <div>
          <NavLink to='/' className='buttom-contact'>Нужна консультация?</NavLink>
        </div>
      </div>
    </header>
    <div className="header2">
      <div className="limiter header-text">
        <h1>Срочный ремонт цифровой техники в центре Челябинска любой сложности
        от 10 минут с гарантией до 90 дней</h1>
        <p>Ремонтируем телефоны, планшеты, ноутбуки, компьютеры и другую технику</p>
        <div className="header-items">
          <div className="img-text-block">
            <img src={gear} className="big-icon" alt=""/>
            <p>Множество запчастей<br />в наличии и под заказ</p>
          </div>
          <div className="img-text-block">
            <img src={phone} className="big-icon-phone" alt=""/>
            <p>Предоставляем телефон<br />на подмену</p>
          </div>
          <div className="img-text-block">
            <img src={target} className="big-icon" alt=""/>
            <p>Скидка 10% на услуги для<br />всех записавшихся с сайта</p>
          </div>
        </div>
      </div>
    </div>
    <main>
      <Switch>
        <Route exact path="/" component={Price} />
        <Route path="/promotions" component={Promotions} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </main>
  </div>
)

const App = () => (
  <div className="page">
    <Menu />
    <Main />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister();
