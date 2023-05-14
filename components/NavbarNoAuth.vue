<template>
    <div>
          <NaiveNavbar drawer-closable menuToggleIcon="material-symbols:menu-rounded">
        <template #start>
                <NuxtLink to="/" class="flex items-center gap-3">
                    <n-gradient-text type="primary">
                        <h1>FANITTY</h1>
  </n-gradient-text>
                </NuxtLink>
                <n-input-group v-if="!isMobileOrTablet">
              <n-input round style="min-width: 80px; max-width: 300px;" placeholder="Пошук"/>
              <n-button tertiary circle type="primary">
              <template #icon>
                <NaiveIcon name="material-symbols:search" />
              </template>
            </n-button>
            </n-input-group>
            </template>
            <template #end>
                <n-button round v-if="!isMobileOrTablet" @click="navigateTo('/signin')">
              Зареєструватись
          </n-button>
            <n-button type="primary" round @click="navigateTo('/signin')">
              Увійти
          </n-button>
          <NaiveColorModeSwitch />

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

const { isMobileOrTablet } = useNaiveDevice()

</script>