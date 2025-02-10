<template>
  <div class="w-screen overflow-x-auto">
    <div class="flex flex-row min-w-max bg-[#0a0a0a]">
      <div
        v-for="(story, index) in mockupStoriesDatabase"
        :key="index"
        class="relative w-28 h-full m-1 rounded-2xl flex flex-col"
      >
        <IonCard class="m-0 h-48">
          <IonCardContent
            class="h-full relative bottom-1"
            :style="{
              backgroundImage: `url(${story.storyContent})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            style="padding: 0px"
          >
            <div class="p-2 mb-[120px]">
              <div
                class="w-8 h-8 rounded-full overflow-hidden border-3 border-blue-600"
              >
                <IonImg :src="story.userProfilePicture"> </IonImg>
              </div>
            </div>
            <div class="flex relative m-1">
              <span class="text-white text-sm text-nowrap">{{
                story.username
              }}</span>
            </div>
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonToolbar,
  IonCardSubtitle,
  IonContent,
  IonCardContent,
  IonImg,
} from "@ionic/vue";
import { fitness } from "ionicons/icons";
import { ref } from "vue";

type storyDbTypes = {
  username: string;
  userProfilePicture: string;
  storyContent: string;
};

const mockupStoriesDatabase = ref<storyDbTypes[]>([
  {
    username: "Runielle Raven",
    userProfilePicture: "./profilepictures/mypfp.jpg",
    storyContent: "./postimages/post1.jpg",
  },
  {
    username: "Rick Harolds",
    userProfilePicture: "./profilepictures/dp3.jfif",
    storyContent: "./postimages/womanpost1.jfif",
  },
  {
    username: "Ava Montgomery",
    userProfilePicture: "./profilepictures/dp5.jfif",
    storyContent: "./postimages/womanpost2.jfif",
  },
  {
    username: "Elijah Stone",
    userProfilePicture: "./profilepictures/dp4.jfif",
    storyContent: "./postimages/malepost1.jfif",
  },
  {
    username: "Leo Rutherford",
    userProfilePicture: "./profilepictures/dp7.webp",
    storyContent: "./postimages/malepost4.jfif",
  },
  {
    username: "Noah Bennett",
    userProfilePicture: "./profilepictures/dp6.jfif",
    storyContent: "./postimages/malepost3.jfif",
  },
]);
</script>
