<template>
  <div id="app">
    <div class="hero is-fullheight">
      <div class="hero-body">

        <div class="container">
          <section class="hero">
            <div class="hero-body">
              <div class="container has-text-centered">
                <div v-if="hasBook">
                  <h1 class="title">
                    Your next Book
                  </h1>
                </div>
                <div v-else>
                  <h1 class="title">
                    Pick your next book
                  </h1>
                  <h2 class="subtitle">
                    Pick a random book from your Goodreads To-Read Shelf
                  </h2>
                </div>
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
      </div>

      <div class="hero-foot">
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Pick A Book</strong> by <a href="https://bernhardwittmann.com">Bernhard Wittmann</a>.
              <br>
              The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
              and available on <a href="https://github.com/BerniWittmann/pick-a-book">GitHub</a>.
              <br>
              All data is retrieved from <a href="https://goodreads.com">Goodreads</a>.
            </p>
          </div>
        </footer>
      </div>
    </div>
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

.hero.is-full-height > .hero-body, .section, .footer {
  padding-top: 1.5em;
  padding-bottom: 1.5em;
}
</style>
