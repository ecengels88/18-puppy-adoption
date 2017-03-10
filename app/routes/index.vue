<template lang="html">
  <div class="">
    <div class="level">
      <div class="level-left">
        <h1 class="title level-item">Puppies for Adoption</h1>
      </div>
      <div class="level-right">
        <a href="/new" class="button is-info level-item">Add a Pupper</a>
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
          <td>Shawarma</td>
          <td>12 weeks</td>
          <td><router-link class="a is-info" to="/:id">read more</router-link></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
