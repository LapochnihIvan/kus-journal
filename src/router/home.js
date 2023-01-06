import {only_teacher} from "@/utils/authorization";

export const home_routes = [
    {
        path: '',
        name: 'homepage',
        component: ()=>import("@/views/system_functions/HomeFiller.vue")
    },
    {
        path: 'journal',
        name: 'journal',
        beforeEnter: only_teacher,
        component: ()=>import("@/views/journal/JournalView.vue")
    },
    {
        path: 'user',
        name: 'user_management',
        component: ()=>import("@/views/metodist/MakeUser.vue")
    },
    {
        path: 'plan',
        name: 'plan_management',
        component: ()=>import("@/views/metodist/MakePlan.vue")
    },
    {
        path: 'grade',
        name: 'grade_management',
        component: ()=>import("@/views/metodist/MakeGrade.vue")
    }
]