<template>
  <header class="bg-black h-16 sticky top-0 flex items-center">
    <nav class="w-full px-4">
      <div class="flex justify-between">
        <div class="text-white text-4xl">
          LOGO
        </div>

        <ul class="flex justify-between items-center">
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
        </ul>
      </div>
    </nav>
  </header>
</template>