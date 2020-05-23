const filterReducer = (state = '', action) => {
  console.log('state now: ', state)
  switch (action.type) {
    case "SET_FILTER":
      return action.filter
    default:
      return state
  }
}

export const setFilter = filter => {
  return { 
    type: "SET_FILTER", 
    filter }
}

export default filterReducer