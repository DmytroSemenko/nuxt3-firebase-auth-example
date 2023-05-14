<template>
  <div>
    <NaiveConfig :theme-config="themeConfig">
      <Navbar class="navbar" v-if="user" />
      <NavbarNoAuth class="navbar" v-if="!user" />
      <NuxtPage />
    </NaiveConfig>
  </div>
</template>

<script lang="ts" setup>
import { ThemeConfig } from "@bg-dev/nuxt-naiveui"

const { user } = useFirebaseAuth()

const themeConfig: ThemeConfig = {
  shared: {}, // Common theme options
  mobileOrTablet: {}, // Theme options applied on mobile and tablet
  mobile: {}, // Theme options applied on mobile only
  light: {
    common: {
      primaryColor: "#3b82f6",
      primaryColorHover: "#60a5fa",
      primaryColorPressed: "#2563eb"
    }
  }, // Theme options applied on light mode
  dark: {
    common: {
      primaryColor: "#60a5fa",
      primaryColorHover: "#93c5fd",
      primaryColorPressed: "#3b82f6"
    }
  }, // Theme options applied on dark mode
}

const { colorModePreference } = useNaiveColorMode()
colorModePreference.value = "system";

</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>