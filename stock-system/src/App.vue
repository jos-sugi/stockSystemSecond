<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted: function () {
        var routeInstance = this.$route;
        this.createTitleDesc(routeInstance);
    },
    watch: {
        $route(routeInstance) {
            this.createTitleDesc(routeInstance);
        },
    },
    //routerで設定したタイトルとめたタグを反映する
    methods: {
        createTitleDesc: function (routeInstance) {
            // タイトルを設定
            if (routeInstance.meta.title) {
                var setTitle = routeInstance.meta.title;
                document.title = setTitle;
            } else {
                document.title = "title is not set";
            }

            // description設定
            if (routeInstance.meta.description) {
                var setDesc = routeInstance.meta.description;
                document
                    .querySelector("meta[name='description']")
                    .setAttribute("content", setDesc);
            } else {
                document
                    .querySelector("meta[name='description']")
                    .setAttribute("content", "description is not set");
            }
        },
    },
};
</script>
