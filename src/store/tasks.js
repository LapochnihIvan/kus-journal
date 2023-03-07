export const tasks = {
    state: () => ({
        problems_list: [],
        submissions: [],
    }),
    mutations:{
        set_problems_list(state, new_list) {
            state.problems_list = new_list
        },
        set_submissions(state, submissions) {
            state.submissons = []
        }
    }
}