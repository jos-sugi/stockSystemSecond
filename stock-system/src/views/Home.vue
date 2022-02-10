<template>
    <div>
        <h3>Home</h3>
        <v-btn @click="screenTransition">push</v-btn>
    </div>
</template>
<script>
export default {
    methods: {
        screenTransition: function () {
            this.$router.push({ name: "Users" });
        },
    },
};
</script>
