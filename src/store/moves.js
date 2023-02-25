export const moves = {
    state: () => ({
        selected: {},
        date: Date()
    }),
    mutations:{
        set_journal(state, selected) {
            state.selected = selected
        },
        set_journal_date(state, date){
            state.date = date
        }
    }
}