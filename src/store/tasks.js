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
        },
        update_singe_question(state, {id, new_value}) {
            for (let i = 0; i<state.questions_list.length; i++){
                if (state.questions_list[i].id === id){
                    state.questions_list[i] = new_value
                }
            }
        }
    }
}