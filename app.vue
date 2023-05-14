<template>
  <div>
    <NaiveConfig>
      <Navbar v-if="user" />
      <NavbarNoAuth v-if="!user" />
      <NuxtPage />
    </NaiveConfig>
  </div>
</template>

<script lang="ts" setup>
const { user } = useFirebaseAuth()

const { colorModePreference } = useNaiveColorMode()
colorModePreference.value = "dark";

</script>