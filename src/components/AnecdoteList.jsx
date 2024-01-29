import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { setView } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      if (state.filterr === '') {
        return state.anecdotes
      }
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filterr))
    })
    
    const dispatch = useDispatch()

    console.log(anecdotes)
      
  const addVote = (id) => {
    dispatch(vote(id))
    dispatch(setNotification(`You voted for ${anecdotes.find(anecdote => anecdote.id === id).content}`))
    setTimeout(() => {
      dispatch(setView())
    }, 5000)
  }


  return (
    <div>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => addVote(anecdote.id)}>vote</button>
            </div>
            <br />
          </div>
        )}
    </div>
  )
}

export default AnecdoteList
