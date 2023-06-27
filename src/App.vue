<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="relative z-10">
    <nav
      id="nav"
      class="container p-4 sm:mx-auto self-center mb-10 h-10 flex justify-between"
    >
      <div>Velours</div>
      <div class="flex gap-4">
        <RouterLink id="client" to="/">Client</RouterLink>
        <RouterLink id="admin" to="/admin">Admin</RouterLink>
      </div>
      <div>Profile</div>
    </nav>
  </header>
  <RouterView />
</template>