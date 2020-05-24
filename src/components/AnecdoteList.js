import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  
  const showAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`You voted: '${anecdote.content}'`, 10))
  }

  return (
    <div>
      {showAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList