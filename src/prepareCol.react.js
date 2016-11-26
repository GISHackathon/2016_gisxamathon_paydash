import React, {Component} from 'react';
import OrderItem from './orderItem.react';

export default class PrepareCol extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const itemsElms = data ? data.map((dataItem, key) => {
      return <OrderItem state={'prepare'} data={dataItem} key={dataItem.id || key}/>
    }) : null;

    return (
      <div className={"col-xs-3"}>
        <h2>
          PŘIPRAVIT ({data.length})
        </h2>
        {itemsElms}
      </div>
    )
  }
}
