<template lang="html">
  <div class="">
    <h2 class="title">Found a Pupper? We can help!</h2>
    <form action="" v-on:submit.prevent="add(formValues)">
      <p class="control">
        <label for="name" class="label">Name</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="age" class="label">Age</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="sex" class="label">Sex</label>
        <span class="select">
          <select>
            <option>Please Select an Option</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </span>
      </p>
      <p class="control">
        <label for="color" class="label">Color</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="breed" class="label">Breed</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="img" class="label">Image URL</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="description" class="label">Description</label>
        <textarea type="text" class="input"></textarea>
      </p>
      <p class="control">
        <router-link to="/" class="button">Back</router-link>
        <button class="button is-info">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import { create } from '../action/puppy';
import store from '../store';

export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        'image-url': '',
        description: '',
      }
    };
  },

  methods: {
    add(data) {
      store.dispatch(create(data)).then(() => {
        this.$router.push({ name: 'index' });
      });
    }
  },
};
</script>
