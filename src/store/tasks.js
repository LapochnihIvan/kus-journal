export const tasks = {
    state: () => ({
        tasks_list: ["some", "another"],
        selected: 0
    }),
    mutations:{
        set_task_list(state, new_list) {
            state.task_list = new_list
        },
        set_selected(state, selected) {
            state.selected = selected
        }
    }
}