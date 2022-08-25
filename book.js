// 在这里为了方便添加注释，使用js文件替代json文件
module.export = {
    "title": "工作笔记",
    "description": "工作笔记",
    "isbn": "图书编号",
    "author": "titlark",
    "language": "zh-cn",
    "gitbook": "3.2.3",
    "styles": {

    },
    "structure": {
        "readme": "README.md"
    },
    "links": {

    },
    "plugins": [
        // 搜索内容高亮
        "-lunr", "-search", "search-pro",
        // code 插件，现实行号
        "code",
        // 折叠菜单
        "expandable-chapters",
        // 返回顶部按钮
        "back-to-top-button",
        // 编辑当前页
        "edit-link",
        // 分享
        "-sharing",
        // 字体设置
        "-fontsettings",
        // 
        "heading-anchors",
    ],
    "pluginsConfig": {
        // 去掉 code 插件中的复制按钮 true：显示复制按钮 false：不显示复制按钮
        "code": {
            "copyButtons": true
        },
        "expandable-chapters": {},
        "edit-link": {
            "base": "https://github.com/titlark/WorkNotes/edit/BRANCH/path/to/book",
            "label": "Edit This Page"
        },
        "sharing": {
            "facebook": false,
            "twitter": false,
            "google": false,
            "weibo": false,
            "instapaper": false,
            "vk": false,
            "all": [
                "facebook", "google", "twitter",
                "weibo", "instapaper"
            ]
        },
        "fontsettings": {
            "theme": 'white', // 'sepia', 'night' or 'white',
            "family": 'sans', // 'serif' or 'sans',
            "size": 2         // 1 - 4
        }
    }
}