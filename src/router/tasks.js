export const tasks_routes = [
    {
        path: '',
        name: 'task_filler',
        component: ()=>import("@/views/competition/TaskFiller.vue")
    },
    {
        path: ':id',
        name: 'task_page',
        component: ()=>import("@/views/competition/ProblemsPage.vue")
    }
]