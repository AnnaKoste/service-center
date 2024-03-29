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
            <li><NavLink to='/service/smartphone'>Ремонт смартфонов</NavLink></li>
            <li><NavLink to='/service/tablet'>Ремонт планшетов</NavLink></li>
            <li><NavLink to='/service/laptop'>Ремонт ноутбуков</NavLink></li>
            <li><NavLink to='/service/computer'>Ремонт компьютеров</NavLink></li>
          </ul>
        </NavLink></li>
        <li><NavLink to='/promotions'>Акции</NavLink></li>
        <li><NavLink to='/reviews'>Отзывы</NavLink></li>
        <li><NavLink to='/about'>О нас</NavLink></li>
        <li><NavLink to='/contacts'>Контакты</NavLink></li>
        <NavLink to='/' className='menu-left'>&#9998; Бесплатная диагностика</NavLink>
      </ul>
    </div>
  </div>
)

const Main = () => (
  <div className="main-block">
    <Icons />
    <header className="limiter">
      <div className="head">
        <div>
          <img src={logo} alt={"Mobiup"} className="logo" />
        </div>
        <div className="address">
          <div className="img-text-block" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <img src={map} className="small-icon" alt=""/>
            <span itemprop="streetAddress" className="text-address">Челябинск, ул. Цвиллинга, д. 57</span>
          </div>
          <div className="img-text-block">
            <img src={clock} className="small-icon" alt=""/>
            <span itemprop="openingHours" datetime="Mo-Fr 9:00−18:00, Sa 9:00-17:00" className="text-address"> Будни: 9:00-18:00, Сб: 9:00-17:00</span>
          </div>
        </div>
        <div className="img-text-block phone">
          <img src={phone} className="middle-icon" alt=""/>
          <span itemprop="telephone" className="text-phone"><strong> +7 904 300 66 00</strong></span>
        </div>
        <div>
          <NavLink to='/' className='button-contact'>Нужна консультация?</NavLink>
        </div>
      </div>
    </header>
    <div className="limiter">
      <div className="header2">
        <h1>Срочный ремонт цифровой техники в центре Челябинска любой сложности
        от 10 минут с гарантией до 90 дней</h1>
        <p>Ремонтируем телефоны, планшеты, ноутбуки, компьютеры и другую технику</p>
        <div className="header-items">
          <div className="img-text-block-big">
            <img src={gear} className="big-icon" alt=""/>
            <p>Множество запчастей в наличии и под заказ</p>
          </div>
          <div className="img-text-block-big">
            <img src={phone} className="big-icon-phone" alt=""/>
            <p>Предоставляем телефон на подмену</p>
          </div>
          <div className="img-text-block-big">
            <img src={target} className="big-icon" alt=""/>
            <p>Скидка 10% на услуги для всех записавшихся с сайта</p>
          </div>
        </div>
      </div>
    </div>
    <main>
      <Switch>
        <Route exact path="/" component={Price} />
        <Route path="/service/:name" component={Price} />
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
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister();
