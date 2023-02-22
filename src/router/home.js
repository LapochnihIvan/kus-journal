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
    },
    {
        path: 'group/:grade',
        name: 'group_management',

        component: ()=>import("@/views/metodist/MakeGroup.vue")
    },
    {
        path: 'journal_manage',
        name: 'journal_management',
        component: ()=>import("@/views/metodist/MakeJournal.vue")
    },
    {
        path: 'head_journal',
        name: 'head_journal',
        component: ()=>import("@/views/journal/HeadView.vue")
    },
    {
        path: 'move',
        name: 'move',
        component: ()=>import("@/views/metodist/MakeMove.vue")
    },
    {
        path: 'task_list',
        name: 'task_list',
        component: ()=>import("@/views/competitoin/Tasks.vue")
    }
]