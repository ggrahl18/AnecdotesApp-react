const notificationReducer = (state = { type: null, message: null }, action) => {
  console.log('notification goes here:', action)
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      const { type, message } = action.data
      return { type, message }
    case 'CLEAR_MESSAGE':
      return ''  
    default:
      return state
  }
}

const showNotificationAction = (notification) => {
  return { 
    type: "SHOW_NOTIFICATION", 
    data: { type: notification.type, 
    message: notification.message 
    }
  }
}

const clearNotificationAction = () => {
  return {
    type: 'CLEAR_MESSAGE'
  }
}

export const setNotificationAction = (notification, notificationTimeout) => {
  const messageTimeout = notificationTimeout * 1000
  return dispatch => {
    dispatch(showNotificationAction(notification))
    setTimeout(() => dispatch(clearNotificationAction()), messageTimeout)
  }
}

export default notificationReducer


// export const setMessage = (message) => {
//   return {
//     type: 'SET_MESSAGE',
//     message: message
//   }
// }

// export const clearMessage = () => {
//   return setMessage(null)
// }

// export const notify = (value, second) => {
//   return (dispatch) => {
//     dispatch(setMessage(value))
//     setTimeout(()=>{dispatch(clearMessage())}, second)
//   } 
// }

// const notificationReducer = (state='Hello from messageReducer!', action) => {
//   switch(action.type) {
//     case 'SET_MESSAGE':
//       return action.message
//     default:
//       return state
//   }
// }

// export default notificationReducer