import { createSlice } from "@reduxjs/toolkit";


export const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anec = anecdotesAtStart.map(asObject);

const initialState = anec

const anecSlice = createSlice({
name: 'anecdotes',  
initialState,
reducers: {
  createAnecdote(state, action) {
    const content = action.payload;
    const newAnecdote = asObject(content);
    state.push(newAnecdote);
  }
  ,
  vote(state, action) {
    const id = action.payload;
    const newAnecdotes = state.find((anecdote) => anecdote.id === id);
    newAnecdotes.votes++;
    state.sort((a, b) => b.votes - a.votes);

  }
}

})


/*
const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE": {
      const id = action.payload.id;

      const newAnecdotes = state.map((anecdote) =>
        anecdote.id !== id
          ? anecdote
          : { ...anecdote, votes: anecdote.votes + 1 }
      );

      return newAnecdotes.sort((a, b) => b.votes - a.votes);
  }
    case "NEW_ANECDOTE": {
      const content = action.payload.content;

      return [...state, asObject(content)];
    }
    default:
      return state;
  }
};

export const vote = (id) => {
  return {
    type: "VOTE",
    payload: { id },
  };
};

export const createAnecdote = (content) => {
  return {
    type: "NEW_ANECDOTE",
    payload: { content },
  };
};*/

export const { createAnecdote, vote } = anecSlice.actions;
export default anecSlice.reducer;
