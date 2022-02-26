<template>
  <div>
    <h3 class="text-3xl font-bold">Sign in</h3>
    <div class="my-4">
      New to Victorine? <router-link class="text-info" to="/auth/signup">Sign up</router-link> then!
    </div>
    <form @submit.prevent="signInWithEmail">
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
        <a href="#" class="text-sm mt-1 text-info">Forgot password?</a>
      </label>
      <div class="w-full">
        <base-button type="submit" class="w-full rounded-full">Sign in</base-button>
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
import { useStore } from "@/store"
const store = useStore();

const email = ref<string>("");
const password = ref<string>("");

function signInWithEmail() {
  const payload = { email: email.value, password: password.value };

  store.dispatch('auth/signInWithEmail', payload);
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