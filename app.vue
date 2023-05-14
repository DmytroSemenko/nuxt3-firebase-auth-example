<template>
  <div>
    <NaiveConfig>
      <NaiveNavbar>
        <template #start>
                <NuxtLink to="/" class="flex items-center gap-3">
                    <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
                    <n-text strong>Nuxt starter</n-text>
                </NuxtLink>
                <n-input-group>
              <n-button type="primary">
                Search
              </n-button>
              <n-input :style="{ width: '20%' }" />
            </n-input-group>
            </template>
            <template #end>
              <n-avatar>D S</n-avatar>
            </template>
      </NaiveNavbar>
      <n-button type="primary">
      Primary
    </n-button>
      <NuxtPage />
    </NaiveConfig>
  </div>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

const { colorModePreference } = useNaiveColorMode()
colorModePreference.value = "dark";

const searchValue = ref('');

</script>

<style>

.flex-grow {
  flex-grow: 1;
}
</style>