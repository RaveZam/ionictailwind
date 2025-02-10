<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="flex items-center justify-between">
          <div>
            <ion-img
              class="w-42 invert brightness-10 translate-y-[-8px]"
              src="/appimages/logofb.png"
            ></ion-img>
          </div>
          <div class="gap-x-2 flex mx-4 items-center">
            <ion-icon class="text-[2rem]" name="add-circle-sharp"></ion-icon>
            <ion-icon class="text-[2rem]" name="search-circle-sharp"></ion-icon>
            <ion-icon class="text-[1.6rem]" name="paper-plane-sharp"></ion-icon>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <WhatsOnYourMind />
      <StoriesComponent />
      <PostsComponent />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import StoriesComponent from "@/components/StoriesComponent.vue";
import WhatsOnYourMind from "@/components/WhatsOnYourMind.vue";
import PostsComponent from "@/components/PostsComponent.vue";
import { Ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonIcon,
} from "@ionic/vue";
</script>

<!-- 
When editing the header, 

The Header is only a wrapper leave it be, 

Edit the toolbar to edit the height and the flex for the title -->
