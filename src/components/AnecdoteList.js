import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
// import filterReducer from '../reducers/filterReducer'
// import { setNotificationAction } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  // // const { anecdotes } = props
  // const vote = anecdote => {
    // props.voteAction(anecdote)
    // dispatch(vote(anecdote.id))
    // dispatch(setNotificationAction({ type: "success", message: "Successfully voted!" }, 5))
  // }

  const showAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {showAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            {/* <button onClick={vote}>vote</button> */}
            {/* <button onClick={() => vote(anecdote)}>vote</button> */}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList