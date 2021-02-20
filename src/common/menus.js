export default [{
        key: 'workbench',
        name: '工作台',
        route: 'workbench',
        icon: 'el-icon-s-grid'
    },
    {
        key: 'Position',
        name: '职 位',
        route: 'Position',
        icon: 'el-icon-postcard'
    },
    {
        key: 'user',
        name: '个人中心',
        route: 'user',
        icon: 'el-icon-user-solid',
        children: [{
                key: 'company',
                name: '公司',
                route: 'company'
            },
            {
                key: 'auth',
                name: '个人中心',
                route: 'auth'
            },

        ],
    },
]