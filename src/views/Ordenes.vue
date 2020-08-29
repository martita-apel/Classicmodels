<template>
  <div class="ordenes">
    <h1>Órdenes</h1>
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
          <td>{{ orden.avance_preparacion }}</td>
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
            <b-button variant="success" class="text-right"
              >Ver Detalle</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Ordenes",
  data() {
    return {};
  },
  computed: {
    ...mapState(["ordenes"]),
  },
  methods: {
    /*     ...mapActions(["getOrdenes"]),
     */
    /* eliminarPatient(id) {
      const confirmar = confirm("¿Seguro que quieres eliminar este paciente?");
      if (confirmar) {
        this.deletePatient(id);
      }
    },
    editarPatient(id) {
      this.updateEdit();
      this.findPatient(id);
    }, */
  },
  /* created() {
    this.getOrdenes();
  }, */
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
</style>
