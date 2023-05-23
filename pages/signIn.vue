<template>
    <div>
        <h1>Sign In</h1>
        <button @click="signInWithGoogle">Sign In With Google</button>
        <h5>{{ user }}</h5>
    </div>
</template>

<script lang="ts" setup>
const { signInWithGoogle ,user } = useFirebaseAuth();
</script>