import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderItem from './orderItem.react';
import {confirmDelivery, loadOrders} from './actions';


class DistributeCol extends Component {
  constructor(props) {
    super(props);
  }

  onDistributed(item) {
    const {dispatch} = this.props;
    dispatch(confirmDelivery(item)).then(
      () => { dispatch(loadOrders())}
    );
  }

  render() {
    const {data} = this.props;

    const itemsElms = data ? data.map((dataItem, key) => {
      return <OrderItem state={'distribute'} data={dataItem} key={dataItem.id || key} onDistributed={this.onDistributed.bind(this)}/>
    }) : null;

    return (
      <div className={"col-xs-3 grey data-column"}>
        <h2>
          DISTRIBUOVAT
        </h2>
        {itemsElms}
      </div>
    )
  }
}

export default connect()(DistributeCol);
