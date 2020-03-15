// Action type constants go here
const ADD_ORDER = 'ADD_ORDER'


// Action creators go here
const addDonutOrder = (order) => {
  return {
    type: ADD_ORDER,
    order
  }
}

const getNextId = (array) => {
  const ids = array.map(obj => obj.id)
  return Math.max(...ids) + 1
}

// Reducer and its initialState go here

const initialState = {
  donutOrderList: [
    {
      id: 1,
      name: 'Brianna',
      flavor: 'Everything Bagel Doughnut'
    },
    {
      id: 2,
      name: "Alex",
      flavor: 'Blackberry Hibiscus'
    },
    {
      id: 3,
      name: 'Dan',
      flavor: 'The biggest coffee roll ever'
    }
  ]
}

const donuts = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ORDER:
      const updatedDonutOrder = [
        ...state.donutOrderList,
        {
          id: getNextId(state.donutOrderList),
          ...action.order
        }
      ]
      return {
        ...state,
        donutOrderList: updatedDonutOrder
      }
    default:
      return state
  }
};

// Export statement goes here

export {
  addDonutOrder,
  donuts
};
