<template>
  <div class="home">
    <b-breadcrumb :items="items" class="mb-0"></b-breadcrumb>

    <b-jumbotron bg-variant="info" text-variant="white" class="text-left">
      <template v-slot:header>!Bienvenida,</template>

      <template v-slot:lead>
        te presentamos el sistema de Órdenes e Inventario de
        <b> Classicmodels</b>!
      </template>
      <hr class="my-4" />
      <p>
        Aquí encontrarás todos los detalles de compras y ventas de todas
        nuestras tiendas.
      </p>
    </b-jumbotron>

    <b-card-group deck class="m-2">
      <b-card v-for="kpi in dashboard.kpis" :key="kpi.id" :title="kpi.nombre">
        <div class="estad">
          <div class="detail" v-show="kpi.entregadas">
            <b-card-text class="result">{{ kpi.entregadas }}</b-card-text>
            <h6>órdenes entregadas</h6>
          </div>
          <div class="detail" v-show="kpi.pendientes">
            <b-card-text class="result">{{ kpi.pendientes }}</b-card-text>
            <h6>órdenes pendientes</h6>
          </div>

          <div class="detail" v-show="kpi.totales">
            <b-card-text class="result">{{ kpi.totales }}</b-card-text>
            <h6>órdenes totales</h6>
          </div>
          <div class="detail" v-show="kpi.atrasadas">
            <b-card-text class="result">{{ kpi.atrasadas }}</b-card-text>
            <h6>órdenes atrasadas</h6>
          </div>
        </div>
        <a href="#" class="card-link">Ver Detalle</a>
      </b-card>
    </b-card-group>

    <b-row class="justify-content-center">
      <div class="tabla">
        <h3 class="titulo-orden">Últimas órdenes</h3>
        <table class="tabla_ordenes">
          <thead>
            <tr>
              <th>Nº Orden</th>
              <th>Cliente</th>
              <th>Fecha entrega</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="orden in dashboard.ultimas_ordenes" :key="orden.id">
              <td>{{ orden.num_orden }}</td>
              <td>{{ orden.cliente }}</td>
              <td>{{ orden.fecha_entrega }}</td>
              <td>{{ orden.estado }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="tabla">
        <h3 class="titulo-orden">Últimas devoluciones</h3>
        <table class="tabla_ordenes">
          <thead>
            <tr>
              <th>Nº Orden</th>
              <th>Cliente</th>
              <th>Fecha entrega</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dev in dashboard.ultimas_devoluciones" :key="dev.id">
              <td>{{ dev.num_orden }}</td>
              <td>{{ dev.cliente }}</td>
              <td>{{ dev.fecha_entrega }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-row>
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
    ...mapState(["ordenes", "dashboard"]),
  },
};
</script>

<style scoped>
.home {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-size: cover;
  min-width: 100%;
  min-height: 670px;
}
/* .image {
  max-width: 100%;
  max-height: 300px;
} */
h1 {
  font-size: 30px;
  padding-top: 40px;
  font-weight: bold;
}
h2 {
  font-size: 25px;
}
.estad {
  display: flex;
  justify-content: center;
}
.detail {
  padding: 10px;
}
.result {
  font-size: 50px;
  font-weight: bold;
}

.tabla {
  margin: 20px 0;
}
.titulo-orden {
  text-align: left;
  margin-left: 40px;
}
.tabla_ordenes {
  font-size: 15px;
  border-collapse: collapse;
  max-width: 100%;
  margin: 0 40px 30px 20px;
}
.tabla_ordenes thead {
  font-weight: bold;
  text-align: left;
  color: #007a5e;
}
.tabla_ordenes td,
.tabla_ordenes th {
  padding: 5px 10px;
  text-align: left;
}

.tabla_ordenes tbody tr:hover {
  background-color: white;
  color: #2c3e50;
  font-weight: bold;
}
.tabla_ordenes td {
  border: 1px solid;
}
.boton-detalle {
  min-width: 85px;
  font-size: 12px;
}
</style>
