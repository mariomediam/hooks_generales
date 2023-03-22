const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action ={}) => {

    if (action.type === "[TODO] add Todo"){
        return [...state, action.payload]
    }

  return state;
};

const newTodo = [
  {
    id: 2,
    todo: "Recolectar la piedra del Poder",
    done: false,
  },
];

const addTodoAction = {
  type: "[TODO] add Todo",
  payload: newTodo,
};

const todos = todoReducer(initialState, addTodoAction);

console.log(todos);
