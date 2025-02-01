<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/Home">
          <ion-icon name="home-sharp"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Videos" href="/tabs/Videos">
          <ion-icon aria-hidden="true" :icon="videocam" />
          <ion-label>Videos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Friends" href="/tabs/Friends">
          <ion-icon name="people-sharp"></ion-icon>
          <ion-label>Friends</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Marketplace" href="/tabs/Marketplace">
          <ion-icon name="storefront-sharp"></ion-icon>
          <ion-label>Marketplace</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Notifications" href="/tabs/Notifications">
          <ion-icon name="notifications-sharp"></ion-icon>
          <ion-label>Notifications</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Menu" href="/tabs/Menu">
          <ion-icon name="heart"></ion-icon>
          <ion-label>Menu</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";

import {
  ellipse,
  logoYoutube,
  square,
  triangle,
  videocam,
} from "ionicons/icons";
</script>
