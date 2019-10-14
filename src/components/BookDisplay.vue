<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-one-quarter">
          <div class="card" v-if="book">
            <div class="card-image">
              <figure class="image is-4by5">
                <img :src="book.image_url" alt="Book Cover">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ book.title_without_series }}</p>
              <p class="subtitle is-6">{{ authors }}</p>

              <div class="content">
                <star-rating
                  :rating="rating"
                  :read-only="true"
                  :increment="0.01"
                  :star-size="25"
                  :inline="true"
                />
              </div>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  <a :href="book.link">View on Goodreads</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'BookDisplay',
  components: {
    StarRating,
  },
  computed: {
    book() {
      return this.$store.getters['books/currentBook'];
    },

    authors() {
      return this.book.authors.author.name;
    },

    rating() {
      return Number.parseFloat(this.book.average_rating);
    },
  },
};
</script>

<style lang="scss">
.card .vue-star-rating-rating-text {
  margin-top: 0 !important;
}
</style>
