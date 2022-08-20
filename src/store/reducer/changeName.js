const initialState = {
  text: 'Enter name'
}

const changeThetext = (state = initialState, action) => {
  console.log(action.payload, 'rducer..')
  switch (action.type) {
    case 'change_input':
    {
      return {
        ...state,
        text: action.payload
      }
    }
    default:
      return state
  }
}
export default changeThetext
