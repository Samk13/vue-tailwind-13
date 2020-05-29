<template>
  <div class="p-4 md:py-4 bg-gray-900 border-b-2 bordder-b border-dashed">
    <div class="container mx-auto flex items-center">
      <router-link
        to="/"
        class="font-bold text-2xl text-white cursor-pointer no-underline hover:text-blue-500"
      >Sam Testing</router-link>
      <!--     <div class="search flex-1 ml-8 mr-8">
        <input
          class="w-full text-grey-dark font-light py-2 bg-grey-lighter px-4 border border-grey-light rounded"
          placeholder="Search..."
          type="text"
        >
      </div>-->
      <div class="ml-auto space-x-4">
        <router-link to="/transitions" class="no-underline hover:text-blue-500">Transitions</router-link>
        <a
          href="https://www.linkedin.com/in/samarbid/"
          target="_blank"
          class="no-underline hover:text-blue-500"
        >Portfolio</a>
        <a
          href="https://github.com/Samk13"
          target="_blank"
          class="no-underline hover:text-blue-500"
        >About</a>
        <a href="#" class="no-underline hover:text-blue-500">Contact</a>
      </div>
    </div>
  </div>
</template>
