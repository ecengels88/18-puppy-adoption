<template lang="html">
  <div class="">
    <div class="pup-details">
      <h2 class="title has-text-centered">Shawarma <button class="button is-success"><span class="icon is-small fa fa-paw"></span><span>I'm Adopted!</span></button></h2>
      <div class="columns">
        <figure class="column is-half is-offset-one-quarter">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/ce/d0/ba/ced0ba9d7163753c3406049c75abe315.jpg" alt="">
        </figure>
      </div>
      <div class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Age</p>
            <p class="title">12 weeks</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Breed</p>
            <p class="title">Mini Aussie!</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Color</p>
            <p class="title">Salt &amp; Pepper</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Sex</p>
            <p class="title">Female</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="subtitle">About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, minima provident quam, doloribus ea tempore labore, aliquid dolorum distinctio eaque delectus. Consequuntur impedit officiis vitae minus neque aliquam, atque. Eligendi.</p>
        </div>
      </div>
    </div>
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
