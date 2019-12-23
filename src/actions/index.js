export const addNode = name => ({
  type: 'ADD_NODE',
  id: uuid.v4(),
  name: name,
  contacts: [],
})