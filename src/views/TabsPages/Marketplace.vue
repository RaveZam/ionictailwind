<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Marketplace</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Marketplace</ion-title>
        </ion-toolbar>
      </ion-header>

      <input v-model="num1" type="number" />
      <h1>{{ sum }}</h1>
      <ion-button @click="compute()">Compute</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { ref } from "vue";

const num1 = ref(0);
const num2 = ref(2);

let sum = ref(0);

function compute() {
  sum.value = num1.value + num2.value;
}
</script>
