import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundview from "@/views/NotFoundview.vue";
import JobView from "@/views/JObView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView,
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView,
        },
        {
            path: '/:cathAll(.*)',
            name: 'not-found',
            component: NotFoundview,
        }
    ]
})

export default router