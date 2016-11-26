import React, {Component} from 'react';
import {connect} from 'react-redux';

class OrderItem extends Component {
  constructor(props) {
    super(props);
  }

  onClick (evt) {
    const {dispatch} = this.props;
    evt.preventDefault();
    dispatch({type:'test_action'})
  }


  getContentByState(state) {
    const {data, onChecked, onDistributed} = this.props;
    switch (state) {
      case 'prepare':
        return (<div>
          Předpokládaný příjezd za [minut]: 45
        </div>);
        break;
      case 'checkin':
        // return <button onClick={() => {onChecked(data)}}>odbavit</button>
        return null;
        break;
      case 'distribute':
        return (
          <div>
            <div>Donést na místo: stojan 8</div>
            <button className="btn" onClick={()=>{onDistributed(data)}}>
              vyřízeno
            </button>
          </div>
          )
        break;
      case 'done':
        return null
        break;
    }
  }

  render() {
    const {data, state, onChecked, onDistributed} = this.props;
    const content = this.getContentByState(state)
    return (
      <div className="order-item">
        <h3>
          {data.client.name}
        </h3>
        <h4>{data.order[0].name}</h4>
        {content}
        <div>Počet: {data.order[0].quantity || 1}</div>
        <img src={"http://loremflickr.com/100/75/coffe,food"} className={"img-responsive"} alt={"Responsive image"} />
      </div>
    )
  }
}

export default connect()(OrderItem);
