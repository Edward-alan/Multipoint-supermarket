import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Main/home/home";
Vue.use(Router);

let router = new Router({
    linkActiveClass: "active",
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home,
            redirect: "/home/homepage",
            children: [
                {
                    path: "/home/homepage",
                    component: () => import("@/views/Main/homepage/homepage")
                },
                {
                    path: "/home/classify",
                    component: () => import("@/views/Main/classify/classify")
                },
                {
                    path: "/home/shopping",
                    component: () => import("@/views/Main/shopping/shopping")
                    // meta:{
                    //     title:'用户信息',
                    //     requireAuth: true
                    // }
                },
                {
                    path: "/home/my",
                    component: () => import("@/views/Main/my/my")
                }
            ]
        },
        {
            path: "/login",
            component: () => import("@/views/login/login")
        },
        {
            path: "/register",
            component: () => import("@/views/login/register"),
            meta:{
                title:'用户信息',
                requireAuth: true
            }
        },
        {
            path: "/orientation",
            component: () => import("@/views/orientation")
        },
        {
            path: "/seekseek",
            component: () => import("@/views/searchseek/seekseek")
        },
        {
            path: "/caraccount",
            component: () => import("@/views/Main/shopping/caraccount")
        },
        {
            path: "/detail",
            component: () => import("@/views/detail")
        },
        {
            path: "/Alipay",
            component: () => import("@/views/Alipay/Alipay")
        }

        
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        fetch("m/is/login").then(res => {
            if (res.errCode == 200) {
                next();
            } else {
                if (getCookie("session")) {
                    delCookie("session");
                }
                if (getCookie("u_uuid")) {
                    delCookie("u_uuid");
                }
                next({
                    path: "/"
                });
            }
        });
    } else {
        next();
    }
});

export default router;
