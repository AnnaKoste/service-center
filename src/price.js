import React from 'react';
import './price.css';

class Price extends React.Component {
  constructor() {
		super();
		this.state = {
			shown: true,
		};
	}

	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}
  render() {
  		var hidden = {
  			display: this.state.shown ? "none" : "block"
  		}

    return <div className="price limiter">
      <h2>Прайс на услуги по ремонту</h2>
      <div>
        <div className="price-header" onClick={this.toggle.bind(this)} >
          <table>
            <thead>
              <tr>
                <td width="55%" className="table-header">Ремонт смартфонов</td>
                <td width="15%">от 5 минут</td>
                <td width="15%"></td>
                <td width="15%" className="table-header price-header-right">&#8744;</td>
              </tr>
            </thead>
          </table>
        </div>
        <div style={ hidden }>
          <table>
            <tbody>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="price-header" onClick={this.toggle.bind(this)} >
          <table>
            <thead>
              <tr>
                <td width="55%" className="table-header">Ремонт планшетов</td>
                <td width="15%">от 10 минут</td>
                <td width="15%"></td>
                <td width="15%" className="table-header price-header-right">&#8744;</td>
              </tr>
            </thead>
          </table>
        </div>
        <div style={ hidden }>
          <table>
            <tbody>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
              <tr>
                <td width="55%">Диагностика неисправности</td>
                <td width="15%" className="text-green">от 5 минут</td>
                <td width="15%" className="text-green">Бесплатно</td>
                <td width="15%" className="text-blue">Записаться</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  }
}

export default Price;
