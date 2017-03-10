<template lang="html">
  <div class="">
    <h2 class="title">Found a Pupper? We can help!</h2>
    <form action="">
      <p class="control">
        <label for="Pup-name" class="label">Name</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="Pup-age" class="label">Age</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="Pup-sex" class="label">Sex</label>
        <span class="select">
          <select>
            <option>Please Select an Option</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </span>
      </p>
      <p class="control">
        <label for="Pup-color" class="label">Color</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="Pup-breed" class="label">Breed</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="Pup-img" class="label">Image URL</label>
        <input type="text" class="input">
      </p>
      <p class="control">
        <label for="Pup-description" class="label">Description</label>
        <textarea type="text" class="input"></textarea>
      </p>
    </form>
  </div>
</template>

<script>
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

  },
};
</script>
