import React from 'react';
import './price.css';

var data = [
  {type: 'Ремонт смартфонов',
  maxTerm: 5,
  options: [{name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'}
  ]},
  {type: 'Ремонт планшетов',
  maxTerm: 10,
  options: [{name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 10, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'}
  ]},
  {type: 'Ремонт ноутбуков',
  maxTerm: 15,
  options: [{name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 15, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'}
  ]},
  {type: 'Ремонт компьютеров',
  maxTerm: 20,
  options: [{name: 'Диагностика неисправности',  term: 20, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'}
  ]}
];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: true,
      symbol: '⋁',
      data: this.props.data
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      shown: !this.state.shown,
    });
    if (this.state.symbol === '⋁') {
        this.setState({symbol: '∧'});
    } else {
      this.setState({symbol: '⋁'});
    }
  }

  render() {

    return (
      <div>
            <table>
              <thead className="price-header" onClick={this.toggle.bind(this)} >
                <tr>
                  <th width="55%" className="table-header">{this.state.data.type}</th>
                  <th width="15%">от {this.state.data.maxTerm} минут</th>
                  <th width="15%"> </th>
                  <th width="15%" className="table-header price-header-right">{this.state.symbol}</th>
                </tr>
              </thead>
              <tbody hidden={ this.state.shown }>
                {this.state.data.options.map(op => (
                  <tr>
                    <td width="55%">{op.name}</td>
                    <td width="15%" className="text-green">от {op.term} минут</td>
                    <td width="15%" className="text-green">{op.cost}</td>
                    <td width="15%" className="text-blue">Записаться</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
    )
  }
}

class Price extends React.Component {
  render() {
    return <div className="price limiter">
      <h2>Прайс на услуги по ремонту</h2>
      {data.map(item => (
        <Table data={item}/>
      ))}
    </div>
  }
}

export default Price;
