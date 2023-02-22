import {createStore} from "vuex";
import {tasks} from "@/store/tasks";
export const store = createStore({
    modules: {
        tasks: tasks
    }
})