// Axios API links
export const TODOS =         "http://localhost:3333/todos";
export const USERS =         "http://localhost:3333/users";
export const USER  = (id) => `http://localhost:3333/users/${id}`

// VUEX dispatch links
export const TODOS_V = "todos/getTodos"
export const AUTH    = "auth/getUser"