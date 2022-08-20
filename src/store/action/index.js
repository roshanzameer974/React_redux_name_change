export const changeName = (data) => {
  console.log(data, 'action..')
  return {
    type: 'change_input',
    payload: data
  }
}
