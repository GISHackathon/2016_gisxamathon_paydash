import React, {Component} from 'react';
import OrderItem from './orderItem.react';

export default class DoneCol extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const itemsElms = data ? data.map((dataItem, key) => {
      return <OrderItem state={'done'} data={dataItem} key={dataItem.id || key}/>
    }) : null;

    return (
      <div className={"col-xs-3 data-column"}>
        <h2>
          HOTOVO
        </h2>
        {itemsElms}
      </div>
    )
  }
}
