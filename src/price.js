import React from 'react';
import './price.css';

var data = [
  { id: 'smartphone',
  type: 'Ремонт смартфонов',
  maxTerm: 5,
  options: [{name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'}
  ]},
  {id: 'tablet',
  type: 'Ремонт планшетов',
  maxTerm: 10,
  options: [{name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 10, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'}
  ]},
  {id: 'laptop',
  type: 'Ремонт ноутбуков',
  maxTerm: 15,
  options: [{name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 15, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'},
    {name: 'Диагностика неисправности',  term: 5, cost: 'Бесплатно'}
  ]},
  {id: 'computer',
  type: 'Ремонт компьютеров',
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
      shown: this.props.shown,
      symbol: '⋁',
      data: this.props.data
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
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
              <th className="table-header long">{this.state.data.type}</th>
              <th className="short">от {this.state.data.maxTerm} минут</th>
              <th className="short"> </th>
              <th className="table-header price-header-right short">{this.state.symbol}</th>
            </tr>
          </thead>
          <tbody hidden={ this.state.shown }>
            {this.state.data.options.map(op => (
              <tr>
                <td className="long">{op.name}</td>
                <td className="text-green short">от {op.term} минут</td>
                <td className="text-green short">{op.cost}</td>
                <td className="text-blue short">Записаться</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceName: this.props.match.params.name
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ serviceName: nextProps.match.params.name });
    console.log( "hi", nextProps.match.params.name);
  }

  render() {
    let typeOfService;
    if (this.state.serviceName) {
      return <div className="price limiter">
        <h2>Прайс на услуги по ремонту</h2>
        {data.forEach(item => {
          if (item.id === this.state.serviceName) {
            typeOfService = item;
          }
        })}
        <Table data={typeOfService} />
      </div>
    } else {
      return <div className="price limiter">
        <h2>Прайс на услуги по ремонту</h2>
      {data.map(item => (
        <Table data={item} shown="false"/>
      ))}
      </div>
    }
  }
}

export default Price;
