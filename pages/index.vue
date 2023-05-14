<template>
    <div>

      <n-card v-for="(link, num) in items" :key="num" :title="link.title">
        {{ link.title }}
      </n-card>
    </div>
</template>

<script lang="ts" setup>

const items =[
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"},
    {title: "1"}
]


</script>