import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    margin: 2
  }
  if (notification === '')
    return null

  return (
    <div style={style}>
      notification : 
      {notification.message}
    </div>
  )
}

export default Notification