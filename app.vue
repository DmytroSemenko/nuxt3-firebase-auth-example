<template>
    <div>
    <el-menu
    :router="true"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="/">FANITTY</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/login">Sign In</el-menu-item>
  </el-menu>
  <NuxtPage />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

.flex-grow {
  flex-grow: 1;
}

</style>