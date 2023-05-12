<template>
    <div>
    <el-menu mode="horizontal" :ellipsis="false">

      <el-button text plain @click="isCollapseUpdate"><Icon name="charm:menu-hamburger" size="30"/></el-button>

      <NuxtLink to="/">
        <Icon name="logos:airbnb" size="50"/>
      </NuxtLink>

      <el-input
      v-model="input1"
      class="w-50 m-2"
      size="small"
      placeholder="Search"
    >
    <template #prefix>
        <Icon name="fluent-emoji:magnifying-glass-tilted-right" size="20"/>
      </template>
  </el-input>
      
    <div class="flex-grow" />

    <el-dropdown>
      <el-avatar shape="circle" :size="50" fit="cover" src="https://picsum.photos/300/200?random=1" />
    <template #dropdown>
      <el-dropdown-menu>
        <nuxt-link to="/profile" class="link"><el-dropdown-item>My Profile</el-dropdown-item></nuxt-link>
        <nuxt-link to="/settings" class="link"><el-dropdown-item>Settings</el-dropdown-item></nuxt-link>
        <el-dropdown-item>Sign out</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </el-menu>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-menu-item index="1">
      <Icon name="fluent-emoji:house" size="24"/>
      <template #title><div class="menu-text">Home</div></template>
    </el-menu-item>
    <el-menu-item index="2">
      <Icon name="fluent-emoji:newspaper" size="24"/>
      <template #title><div class="menu-text">Feed</div></template>
    </el-menu-item>
    <el-menu-item index="3">
      <Icon name="fluent-emoji:eyes" size="24"/>
      <template #title><div class="menu-text">Subscriptions</div></template>
    </el-menu-item>
  </el-menu>

  <NuxtPage />
  </div>
</template>

<script lang="ts" setup>

const input1 = ref("")

const isCollapse = ref(true)

const isCollapseUpdate = () => {
  isCollapse.value = !isCollapse.value
  console.log(isCollapse)
}

</script>

<style>

.flex-grow {
  flex-grow: 1;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.link {
    text-decoration: none;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.menu-text{
  padding-left: 10px;
}

</style>