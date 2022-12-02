<template>
    <div>
        <h1>Register</h1>

        <input type="text" v-model="email" placeholder="Email" />
        <br>
        <input type="password" v-model="password" placeholder="Password" />
        <br>
        <button @click="register">Register</button>
    </div>
</template>


<script>
import authserve from '@/services/authserve';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            const res = await authserve.register({
                email: this.email,
                password: this.password
            });
            console.log(res.data);
        }
    }
    
}
</script>

<style scoped>

</style>