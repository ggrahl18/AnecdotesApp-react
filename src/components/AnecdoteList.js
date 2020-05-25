import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
  
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.setNotification(`You voted: '${anecdote.content}'`, 10)
  }

  return (
    <div>
      {props.anecdotes
        .map(anecdote =>
          <Anecdote 
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => vote(anecdote)}
          />
      )}
    </div>
  )
}

const filterAnecdotes = ({ anecdotes, filter }) => {
  return anecdotes
    .sort((a, b) => b.votes - a.votes)
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: filterAnecdotes(state),
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList

// import React from 'react'
// import { connect } from 'react-redux'
// import { voteAnecdote } from '../reducers/anecdoteReducer'
// import { setNotification } from '../reducers/notificationReducer'
// import Anecdote from './Anecdote'

// const AnecdoteList = (props) => {
  
//   const vote = (anecdote) => {
//     props.voteAnecdote(anecdote)
//     props.setNotification(`You voted: '${anecdote.content}'`, 10)
//   }

//   return (
//     <div>
//       {props.anecdotes
//         .filter(anecdote => anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
//         .map(anecdote =>
//           <Anecdote 
//             key={anecdote.id}
//             anecdote={anecdote}
//             handleClick={() => vote(anecdote)}
//           />
//       )}
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes),
//     filter: state.filter,
//   }
// }

// const mapDispatchToProps = {
//   voteAnecdote,
//   setNotification
// }

// const ConnectedAnecdoteList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AnecdoteList)
// export default ConnectedAnecdoteList