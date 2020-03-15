// Action type constants go here



// Action creators go here

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
    default:
      return state
  }
};

// Export statement goes here

export {
  donuts
};
