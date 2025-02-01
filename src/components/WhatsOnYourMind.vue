<template>
  <ion-toolbar>
    <div class="flex justify-between">
      <div class="flex items-center gap-x-4 px-4">
        <div class="w-12 rounded-full overflow-hidden">
          <IonImg class="" src="../../../public/postimages/mypfp.jpg"> </IonImg>
        </div>
        <span class="opacity-70 font-light">What's on your mind?</span>
      </div>
      <ion-icon class="text-[2rem] mx-4 opacity-80" name="image"></ion-icon>
    </div>
  </ion-toolbar>
</template>

<script setup lang="ts">
import { IonToolbar, IonImg, IonIcon } from "@ionic/vue";
</script>
