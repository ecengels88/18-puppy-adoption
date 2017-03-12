<template lang="html">
  <div class="">
      <div class="pup-details">
        <h2 class="title has-text-centered">Shawarma <span class="button is-success"><span class="icon is-small"><i class="fa fa-paw" aria-hidden="true"></i></span><span>I'm Adopted!</span></span></h2>
        <div class="columns">
          <figure class="column is-half is-offset-one-quarter">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/ce/d0/ba/ced0ba9d7163753c3406049c75abe315.jpg" alt="">
          </figure>
          <div class="level">
            <div class="level-item"></div>
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
