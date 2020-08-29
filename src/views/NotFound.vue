<template>
  <div class="notfound">
    <div class="text">
      <h1>
        ¡Hola de nuevo, <br />
        esta página no se ha encontrado!
      </h1>
      <b-button class="boton" variant="outline-warning" to="/"
        >VUELVE AL INICIO</b-button
      >
    </div>
    <img
      src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif"
      alt="car"
    />
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
};
</script>

<style scoped lang="scss">
h1 {
  margin-top: 30px;
}
img {
  width: 100%;
  position: relative;
}
.boton {
  top: 220px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 4px;
}
.text {
  position: absolute;
  z-index: 1;
  left: 22%;
}
</style>
