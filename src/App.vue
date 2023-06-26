<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav
      id="nav"
      class="container py-2 mx-2 md:mx-auto self-center mb-10 h-10 flex justify-between"
    >
      <div>Velours</div>
      <div class="flex gap-4">
        <RouterLink id="client" to="/">Client</RouterLink>
        <RouterLink id="admin" to="/inventory">Admin</RouterLink>
      </div>
      <div>Profile</div>
    </nav>
  </header>
  <RouterView />
</template>