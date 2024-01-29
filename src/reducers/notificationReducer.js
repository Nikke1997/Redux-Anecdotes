import { createSlice } from "@reduxjs/toolkit"

const notificationReducer = createSlice({
  name: "notification",
  initialState: "Tämä on alustava notifikaatio",
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    setView() {
        return null
    }
  },
})

export const { setNotification, setView } = notificationReducer.actions
export default notificationReducer.reducer
