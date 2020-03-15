import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDonutOrder } from '../modules/donuts'

import DonutOrdersList from '../components/DonutOrdersList'
import NewDonutOrderFormContainer from './NewDonutOrderFormContainer'

class DonutOrdersIndexContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row donut-list'>
        <DonutOrdersList
          donutOrderList={this.props.donutOrderList}
        />
        <NewDonutOrderFormContainer
          addDonutOrder={this.props.addDonutOrder}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    donutOrderList: state.donuts.donutOrderList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addDonutOrder: (order) => dispatch(addDonutOrder(order))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonutOrdersIndexContainer)
