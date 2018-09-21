const mockTasks = [
    {
      id: 1,
      title: 'Learn Redux',
      description: 'The store, actions, and reducers',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Learn JS',
      description: 'Javascript',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Learn GraphQL',
      description: 'Server side',
      status: 'Completed'
    }
  ];
 
export default function tasks (state = { tasks: mockTasks }, action) {
    return state;
}