<template functional>
  <div class="card rounded-lg shadow-lg md:w-64 h-auto bg-teal p-8 mb-8">
    <h1 class="text-3xl">{{props.title}}</h1>
    <p class="my-4 leading-normal">
      <slot/>
    </p>
  </div>
</template>
