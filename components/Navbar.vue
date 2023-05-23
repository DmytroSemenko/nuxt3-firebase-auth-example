<template>
    <div>
          <NaiveNavbar :routes="navbarRoutes" drawer-closable menuToggleIcon="material-symbols:menu-rounded">
        <template #start>
                <NuxtLink to="/" class="flex items-center gap-3">
                    <n-gradient-text type="primary">
                        <h1>FirebaseAuth</h1>
  </n-gradient-text>
                </NuxtLink>
              <n-input-group>
              <n-input round style="min-width: 80px; max-width: 300px;" placeholder="Search"/>
              <n-button tertiary circle type="primary">
              <template #icon>
                <NaiveIcon name="material-symbols:search" />
              </template>
            </n-button>
            </n-input-group>
            </template>
            <template #end>
                <NaiveColorModeSwitch />
              <n-button text tag="span">
                <n-avatar round style="min-width: 38px;">{{ user?.displayName?.substring(0, 1) }}</n-avatar>
          </n-button>
            </template>
            <template #drawer-header>
        <n-text>Header</n-text>
      </template>

      <template #drawer-footer>
        <n-text>Footer</n-text>
      </template>
      </NaiveNavbar>
    </div>
</template>

<script lang="ts" setup>
import { NavbarRoute } from "@bg-dev/nuxt-naiveui";
const { user } = useFirebaseAuth();

const searchValue = ref('');

const navbarRoutes: NavbarRoute[] = [
  {
    label: "Home",
    icon: "ri:home-4-line",
    path: "/"
  },
  {
    label: "Token",
    icon: "entypo:user",
    path: "/signin"
  }
]

</script>