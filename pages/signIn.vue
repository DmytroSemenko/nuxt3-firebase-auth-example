<template>
    <div>
        <h1>Sign In</h1>
        <el-input v-model="signForm.email" type="Email" placeholder="Email" clearable />
        <el-input v-model="signForm.password" type="password" placeholder="Please input password" show-password />
        <el-button type="primary" @click="signInWithGoogle">Sign up</el-button>
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