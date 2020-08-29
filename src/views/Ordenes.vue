<template>
  <div class="ordenes">
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h1>Revisa la lista de órdenes completa</h1>
    <b-container>
      <b-row id="select">
        <div>
          <label for="oficinas">Oficinas:</label>
          <b-form-select id="oficinas" name="oficina_list" form="form">
            <option value="New York">New York</option>
            <option value="Boston">Boston</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Psris">Paris</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
            <option value="London">London</option>
          </b-form-select>
        </div>

        <div class="select px-3">
          <label for="estado">Estado:</label>
          <b-form-select id="estado" name="estado" form="form">
            <option value="Ingresado">Ingresado</option>
            <option value="Preparacion">Preparación</option>
            <option value="Entregado">Entregado</option>
            <option value="Anulado">Anulado</option>
            <option value="Devuelto">Devuelto</option>
          </b-form-select>
        </div>

        <div>
          <label for="datepicker">Elige una fecha</label>
          <b-form-datepicker
            id="datepicker"
            v-model="value"
            placeholder="Inicio"
            class="mb-0"
          ></b-form-datepicker>
        </div>
        <div>
          <label for="datepicker"> </label>
          <b-form-datepicker
            id="datepicker"
            v-model="value"
            placeholder="Fin"
            class="mb-0 mx-3 mt-auto"
          ></b-form-datepicker>
        </div>
        <b-button lg="4" class="pb-0 ml-4 mt-auto dark">Buscar</b-button>
      </b-row>
    </b-container>

    <table
      class="tabla_ordenes"
      id="my-table"
      :items="ordenes"
      :per-page="perPage"
      :current-page="currentPage"
    >
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

    <b-pagination
      class="paginas"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

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
      perPage: 3,
      currentPage: 1,
      value: "",
    };
  },
  computed: {
    ...mapState(["ordenes", "oficinas"]),
    rows() {
      return this.items.length;
    },
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
.paginas {
  justify-content: center;
}
#select {
  text-align: left;
  padding: 10px;
  align-items: baseline;
  justify-content: center;
}
</style>
