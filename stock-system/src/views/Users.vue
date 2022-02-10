<template>
    <div>
        <h3>Users</h3>
        <v-btn @click="screenTransition('home')">push</v-btn>
        <router-link to="/">push</router-link>
        <v-btn @click="screenTransition('users')">push</v-btn>
        <router-link to="/users">push</router-link>
    </div>
</template>
<script>
export default {
    methods: {
        screenTransition(value) {
            switch (value) {
                case "users":
                    this.$router.push({ name: "Users" });
                    break;
                case "home":
                    this.$router.push({ name: "Home" });
                    break;
            }
        },
    },
};
</script>
