<template>
    <div>
        <h1>Sign In</h1>
        <input v-model="signForm.email" type="Email" placeholder="Email" clearable />
        <input v-model="signForm.password" type="password" placeholder="Please input password" show-password />
        <button @click="signInWithGoogle">Sign up</button>
        <h5>{{ user }}</h5>
    </div>
</template>

<script lang="ts" setup>
const { signInWithGoogle ,user } = useFirebaseAuth() 

const signForm = reactive({
    email: "",
    password: ""
})

</script>