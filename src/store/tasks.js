export const tasks = {
    state: () => ({
        problems_list: [],
        submissions: [],
        questions_list: []
    }),
    mutations:{
        set_problems_list(state, new_list) {
            console.log("Now")
            state.problems_list = new_list
        },
        set_submissions(state, submissions) {
            state.submissons = []
        },
        set_questions_list(state, new_list){
            state.questions_list = new_list
        }
    }
}