<template>
  <div class="home">
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Bienvenido,</h1>
    <h2>
      te presentamos el sistema de Órdenes e Inventario de <b> Classicmodels</b>
    </h2>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          text: "Home",
          active: true,
        },
      ],
      max: 1,
    };
  },
  computed: {
    ...mapState(["ordenes"]),
  },
};
</script>

<style>
.home {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-size: cover;
  min-width: 100%;
  min-height: 670px;
}
h1 {
  font-size: 30px;
  padding-top: 40px;
  font-weight: bold;
}
h2 {
  font-size: 25px;
}
</style>
