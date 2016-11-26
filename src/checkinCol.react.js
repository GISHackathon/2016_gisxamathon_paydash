import React, {Component} from 'react';
import OrderItem from './orderItem.react';

export default class CheckinCol extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    const itemsElms = data ? data.map((dataItem, key) => {
      return <OrderItem state={'checkin'} data={dataItem} key={dataItem.id || key}/>
    }) : null;

    return (
      <div className={"col-xs-3 data-column"}>
        <h2>
          ODBAVIT
        </h2>
        {itemsElms}
      </div>
    )
  }
}
