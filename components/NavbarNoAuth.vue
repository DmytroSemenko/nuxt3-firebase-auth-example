<template>
    <div>
          <NaiveNavbar drawer-closable menuToggleIcon="material-symbols:menu-rounded">
        <template #start>
                <NuxtLink to="/" class="flex items-center gap-3">
                  <Icon name="uil:github" size="25" />
                </NuxtLink>
            </template>
            <template #end>
            <n-button @click="navigateTo('/signin')">
              Увійти
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

</script>