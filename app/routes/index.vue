<template lang="html">
  <div class="">
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Puppies for Adoption</h1>
      </div>
      <div class="level-right">
        <router-link to="/new" class="button is-info level-item">Add a Pupper</router-link>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puppy in puppies">
          <td>{{puppy.name}}</td>
          <td>{{puppy.age}}</td>
          <td><router-link class="a is-info" :to="{ name: 'details', params: { id: puppy.id } }">read more</router-link></td>
        </tr>
      </tbody>
    </table>
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Adopted Puppers</h1>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DiGiorno</td>
          <td>4 months</td>
          <td><router-link class="a is-info" to="/:id">read more</router-link></td>
        </tr>
        <tr>
          <td>Peking</td>
          <td>3 weeks</td>
          <td><router-link class="a is-info" to="/:id">read more</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../action/puppy';

export default {
  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
