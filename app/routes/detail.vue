<template lang="html">
  <div class="">
    <div v-if="currentPuppy">
      <h2 class="title has-text-centered">{{ currentPuppy.name }}
        <button class="button is-success" @click="adoptMe" v-bind:class="{ 'is-success': currentPuppy.adopted }">
          <span class="icon is-small fa fa-paw"></span>
          <span v-if="currentPuppy.adopted">I'm Adopted!</span>
          <span v-else>Adopt Me!</span>
        </button>
      </h2>
      <div class="columns">
        <figure class="column is-half is-offset-one-quarter">
          <img v-bind:src="currentPuppy.image_url" alt="">
        </figure>
      </div>
      <div class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Age</p>
            <p class="title">{{ currentPuppy.age }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Breed</p>
            <p class="title">{{ currentPuppy.breed }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Color</p>
            <p class="title">{{ currentPuppy.color }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Sex</p>
            <p class="title">{{ currentPuppy.sex }}</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="subtitle">About Me</h3>
          <p>{{ currentPuppy.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleAdopted, findOne } from '../action/puppy';
import store from '../store';

export default {
  data() {
    return {
      currentPuppy: null,
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppies: 'getPuppy',
    '$route.params.id': 'getPuppy'
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id == this.$route.params.id);
    },

    adoptMe() {
      store.dispatch(toggleAdopted(this.currentPuppy));
    }
  },
};
</script>
