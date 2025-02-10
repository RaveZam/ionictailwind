<template>
  <div class="my-4" v-for="(post, index) in postMockupDatabase" :key="index">
    <IonCard class="bg-[#0a0a0a]">
      <div class="flex mx-4 my-2 items-center gap-x-2">
        <div class="w-12 h-12 rounded-full overflow-hidden">
          <IonImg :src="post.userProfilePicture"></IonImg>
        </div>
        <IonCardTitle class="text-sm"> {{ post.username }}</IonCardTitle>
      </div>
      <div class="mx-4 my-2">
        <span class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        </span>
      </div>

      <IonImg :src="post.postContent"></IonImg>

      <IonToolbar>
        <ion-icon
          v-for="reaction in getTopReactions(post)"
          :key="reaction.type"
          :icon="reactionIcons[reaction.type]"
          class="reaction-icon"
        >
        </ion-icon>
        <span> {{ getTotalReactions(post.postReact) }}</span>
      </IonToolbar>

      <IonToolbar>
        <span>//ICONS GO HERE</span>
      </IonToolbar>
    </IonCard>
  </div>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonImg,
  IonToolbar,
  IonIcon,
} from "@ionic/vue";

import {
  happySharp,
  heartSharp,
  thumbsUpSharp,
  sadSharp,
  flame,
  eye,
} from "ionicons/icons";

import { computed, ref } from "vue";

const reactionIcons: Record<string, string> = {
  funny: happySharp,
  love: heartSharp,
  like: thumbsUpSharp,
  sad: sadSharp,
  wow: eye,
  angry: flame,
};

type PostReactions = {
  love: number;
  like: number;
  funny: number;
  wow: number;
  sad: number;
  angry: number;
};

type postsDbType = {
  username: string;
  postContent: string;
  userProfilePicture: string;
  postReact: PostReactions;
};

//gpt Code
const getTopReactions = (post: postsDbType) => {
  return Object.entries(post.postReact) // Convert reactions object to array
    .filter(([_, count]) => count > 0) // Remove reactions with 0 count
    .sort((a, b) => b[1] - a[1]) // Sort by highest count
    .slice(0, 3) // Get top 3
    .map(([type, count]) => ({ type, count })); // Convert to array of objects
};

const getTotalReactions = (postReact: Record<string, number>) => {
  return Object.values(postReact).reduce((sum, count) => sum + count, 0);
};
//gpt code

const postMockupDatabase = ref<postsDbType[]>([
  {
    username: "Hayana Lee",
    userProfilePicture: "./profilepictures/dp5.jfif",
    postContent: "./postimages/post6.jfif",
    postReact: {
      love: 25,
      like: 5,
      funny: 15,
      wow: 0,
      sad: 0,
      angry: 0,
    },
  },
  {
    username: "Rick Harolds",
    userProfilePicture: "./profilepictures/dp3.jfif",
    postContent: "./postimages/womanpost1.jfif",
    postReact: {
      love: 20,
      like: 5,
      funny: 15,
      wow: 10,
      sad: 0,
      angry: 0,
    },
  },
  {
    username: "Ava Montgomery",
    userProfilePicture: "./profilepictures/dp5.jfif",
    postContent: "./postimages/womanpost2.jfif",
    postReact: {
      love: 20,
      like: 5,
      funny: 15,
      wow: 10,
      sad: 0,
      angry: 0,
    },
  },
  {
    username: "Elijah Stone",
    userProfilePicture: "./profilepictures/dp4.jfif",
    postContent: "./postimages/malepost1.jfif",
    postReact: {
      love: 20,
      like: 5,
      funny: 15,
      wow: 10,
      sad: 0,
      angry: 0,
    },
  },
  {
    username: "Leo Rutherford",
    userProfilePicture: "./profilepictures/dp7.webp",
    postContent: "./postimages/malepost4.jfif",
    postReact: {
      love: 20,
      like: 5,
      funny: 15,
      wow: 10,
      sad: 0,
      angry: 0,
    },
  },
  {
    username: "Noah Bennett",
    userProfilePicture: "./profilepictures/dp6.jfif",
    postContent: "./postimages/malepost3.jfif",
    postReact: {
      love: 20,
      like: 5,
      funny: 15,
      wow: 10,
      sad: 0,
      angry: 0,
    },
  },
]);
</script>
