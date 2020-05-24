const notificationReducer = (state = '', action) => {
  // console.log('notification goes here:', action)
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.content
    case 'CLEAR_NOTIFICATION':
      return ''  
    default:
      return state
  }
}

let timeoutIdArray = []

export const setNotification = (content, duration) => {
  return async (dispatch) => {
    let timeoutID;

    dispatch(setNotificationAction(content))
    timeoutID = setTimeout(() => {
      dispatch(clearNotificationAction())
    }, duration * 1000);
    timeoutIdArray.push(timeoutID)

    if (timeoutIdArray.length === 2) {
      clearTimeout(timeoutIdArray[0])
      timeoutIdArray.shift()
    }
  }
}

const setNotificationAction = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    content
  }
}

const clearNotificationAction = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

export default notificationReducer