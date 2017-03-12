<template lang="html">
  <div class="">
    <div class="card">
      <div class="title has-text-centered">
        <h2 class="title">Shawarma <span class="button is-success"><span class="icon is-small"><i class="fa fa-paw fa-fw" aria-hidden="true"></i></span><span>I'm Adopted!</span></span></h2>
      </div>
      <div class="card-image">
        <img src="https://s-media-cache-ak0.pinimg.com/736x/ce/d0/ba/ced0ba9d7163753c3406049c75abe315.jpg" alt="">
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
