<template>
  <div id="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Pick your next book
          </h1>
          <h2 class="subtitle">
            Pick a random book from your Goodreads To-Read Shelf
          </h2>
        </div>
      </div>
    </section>


    <user-name-input v-if="!hasBook"/>

    <book-display v-else/>

    <br>

    <section class="section">
      <div class="container">
        <div class="has-text-centered">
          <button :class="buttonClasses" @click="getBook">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UserNameInput from '@/components/UserNameInput.vue';
import BookDisplay from '@/components/BookDisplay.vue';

export default {
  name: 'app',
  components: {
    UserNameInput,
    BookDisplay,
  },
  computed: {
    userId() {
      return this.$store.getters['user/userId'];
    },
    hasBook() {
      return this.$store.getters['books/hasBook'];
    },
    buttonText() {
      return this.hasBook ? 'Pick another Book' : 'Find my next Book';
    },
    isLoading() {
      return this.$store.getters['books/isLoading'];
    },
    buttonClasses() {
      return {
        button: true,
        'is-primary': true,
        'is-large': true,
        'is-loading': this.isLoading,
      };
    },
  },
  methods: {
    getBook() {
      this.$store.dispatch('books/getBook', this.userId);
    },
  },
};
</script>

<style>
@import '~bulma/css/bulma.css';
.section {
  padding-top: 1.5em;
  padding-bottom: 1.5em;
}
</style>
