<template>
    <div>
        <h1>Sign In</h1>
        <el-input v-model="signForm.email" type="Email" placeholder="Email" clearable />
        <el-input v-model="signForm.password" type="password" placeholder="Please input password" show-password />
        <el-button type="primary" @click="signInWithGoogle">Sign up</el-button>
        <h1>{{ user?.displayName }}</h1>
    </div>
</template>

<script lang="ts" setup>
const { signInWithGoogle, user } = useFirebaseAuth() 

let signForm = reactive({
    email: "",
    password: ""
})

</script>