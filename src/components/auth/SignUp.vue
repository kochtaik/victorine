<template>
  <div>
    <h3 class="text-3xl font-bold">Sign up</h3>
    <div class="my-4">
      You have an account? <router-link class="text-info" to="/auth/signin">Sign in</router-link> then!
    </div>
    <form @submit.prevent="signUpWithEmail">
      <label class="input-group" for="email">
        <span class="mb-1">Email</span>
        <BaseInput 
          v-model="email"
          id="email" 
          type="email" 
          placeholder="Enter email" 
          class="w-full truncate"
        />
      </label>
      <label class="input-group my-4" for="password">
        <span class="mb-1">Password</span>
        <BaseInput
          v-model="password"
          id="password"
          type="password"
          placeholder="Enter password"
          class="w-full truncate"
        />
      </label>
      <div class="w-full">
        <base-button type="submit" class="w-full rounded-full">Sign up</base-button>
      </div>
      <div>
        <div class="delimiter border-b my-6 border-disabled">
          <span class="text-center bg-white px-2">or</span>
        </div>
      </div>
      <div class="flex flex-col">
        <base-button variant="outlined" class="rounded-full mb-4 text-center">
          <img src="@/assets/icons/google_logo.svg" alt="Google logo" class="w-6 h-6 inline mr-3">
          <span>Continue with Google</span>
        </base-button>
        <base-button variant="outlined" class="rounded-full mb-4 text-center">
          <img src="@/assets/icons/fb_logo.svg" alt="Facebook logo" class="w-6 h-6 inline mr-3">
          <span>Continue with Facebook</span>
        </base-button>
      </div>
    </form>
  </div>
</template>


<script lang="ts" setup>
import { ref } from "@vue/runtime-core";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const email = ref<string>("");
const password = ref<string>("");

async function signUpWithEmail() {
  const payload = { email: email.value, password: password.value };

  try {
    await store.dispatch('auth/signUpWithEmail', payload);
    router.push("/")
  } catch(error) {
    console.error("Smth went wrong");
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  @apply flex flex-col items-start;
}
.delimiter {
  line-height: 0.05rem;
}
</style>