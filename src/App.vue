<template>
  <ion-app>
    <div class="scrollbar-hide">
      <ion-router-outlet />
    </div>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
</script>
