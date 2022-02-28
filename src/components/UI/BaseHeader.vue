<template>
  <header class="bg-black h-16 sticky top-0 flex items-center">
    <nav class="w-full px-4">
      <div class="flex justify-between">
        <div class="text-white text-4xl">
          LOGO
        </div>

        <ul class="flex justify-between items-center">
          <template v-if="!isLoggedIn">
            <li>
              <!-- TODO: add support of router links in the button component -->
              <base-button size="sm" variant="text" >
                <router-link to="/auth/signin">Sign in</router-link>
              </base-button>
            </li>
            <li>
              <base-button size="sm">
                <router-link to="/auth/signup">Sign up</router-link>
              </base-button>
            </li>
          </template>
          <template v-else>
            <li>
              <base-button variant="text" class="text-error" @click="signOut">Log out</base-button>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";

const store = useStore();
const router = useRouter();
const isLoggedIn = computed<boolean>(() => store.getters['auth/isLoggedIn']);

async function signOut() {
  await store.dispatch('auth/signOut');
  router.push("/auth/signin");  
}
</script>