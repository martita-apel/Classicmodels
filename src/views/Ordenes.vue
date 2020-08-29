<template>
  <div class="ordenes">
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Revisa la lista de órdenes completa</h1>
    <table class="tabla_ordenes">
      <thead>
        <tr>
          <th>Nº Orden</th>
          <th>Cliente</th>
          <th>Monto Orden</th>
          <th>Cantidad Productos</th>
          <th>Fecha entrega</th>
          <th>Avance Preparación</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="orden in ordenes" :key="orden.id">
          <td>{{ orden.num_orden }}</td>
          <td>{{ orden.cliente }}</td>
          <td>{{ orden.monto }}</td>
          <td>{{ orden.cant_productos }}</td>
          <td>{{ orden.fecha_entrega }}</td>
          <td>
            <b-progress
              :value="orden.avance_preparacion"
              max="1"
              class="mb-3"
            ></b-progress>
          </td>
          <td>
            {{ orden.estado }}
            <b-icon
              v-show="orden.estado == 'Entregado'"
              icon="exclamation-circle-fill"
              variant="success"
            ></b-icon>
            <b-icon
              v-show="orden.estado == 'Preparacion'"
              icon="exclamation-circle-fill"
              variant="warning"
            ></b-icon>
            <b-icon
              v-show="orden.estado == 'Ingresado'"
              icon="exclamation-circle-fill"
              variant="info"
            ></b-icon>
          </td>

          <td>
            <router-link :to="{ name: 'Detail' }" id="leer_mas"
              ><b-button
                :to="{ name: 'Detail' }"
                variant="dark"
                class="text-right boton-detalle"
                >Ver Detalle</b-button
              ></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Ordenes",
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Órdenes",
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
.ordenes {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-size: cover;
  min-width: 100%;
  min-height: 670px;
}

.tabla_ordenes {
  font-size: 15px;
  border-collapse: collapse;
  max-width: 100%;
  margin: 40px;
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
h1 {
  padding-top: 40px;
}
</style>
