import { createContext } from "react";

const MainContext = createContext({ user: {}, token: '', signOut: undefined, getAllData: undefined, deleteTask: undefined })

export default MainContext