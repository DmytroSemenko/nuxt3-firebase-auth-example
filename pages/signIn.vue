<template>
    <div>
        <h1>Login</h1>
        <el-input v-model="signForm.email" type="Email" placeholder="Email" clearable />
        <el-input v-model="signForm.password" type="password" placeholder="Please input password" show-password />
    </div>
</template>

<script lang="ts" setup>

let signForm = reactive( 
{
    email: "",
    password: ""
})

</script>