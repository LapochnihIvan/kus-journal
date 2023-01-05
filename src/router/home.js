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
    }
]