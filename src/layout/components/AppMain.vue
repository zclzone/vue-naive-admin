<template>
  <router-view>
    <template #default="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath"></component>
      </transition>
    </template>
  </router-view>
</template>
