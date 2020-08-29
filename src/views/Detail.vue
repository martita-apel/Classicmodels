<template>
  <div class="ordenes">
    <b-container>
      <h2>Detalle Orden</h2>
      <h2>Nº {{ detalle_orden.orden.num_orden }}</h2>

      <b-tabs content-class="mt-3" justified>
        <b-tab title="General" active>
          <p><b>Monto:</b> {{ detalle_orden.orden.monto }}</p>
          <p>
            <b>Cantidad de productos:</b>
            {{ detalle_orden.orden.cant_productos }}
          </p>
          <p>
            <b>Fecha de entrega:</b> {{ detalle_orden.orden.fecha_entrega }}
          </p>
          <p><b>Vendedor:</b> {{ detalle_orden.orden.vendedor }}</p>
          <p class="prog">
            <b>Avance preparación:</b>
            <b-progress
              :value="detalle_orden.orden.avance_preparacion"
              max="1"
              show-value
              class="mb-3 progress"
            ></b-progress>
          </p>
          <p>
            <b>Estado:</b> {{ detalle_orden.orden.estado }}
            <b-icon
              v-show="detalle_orden.orden.estado == 'Entregado'"
              icon="exclamation-circle-fill"
              variant="success"
            ></b-icon>
            <b-icon
              v-show="detalle_orden.orden.estado == 'Preparacion'"
              icon="exclamation-circle-fill"
              variant="warning"
            ></b-icon>
            <b-icon
              v-show="detalle_orden.orden.estado == 'Ingresado'"
              icon="exclamation-circle-fill"
              variant="info"
            ></b-icon>
          </p>
        </b-tab>

        <b-tab title="Datos Clientes">
          <p><b>Nombre:</b> {{ detalle_orden.cliente.nombre }}</p>
          <p>
            <b>RUT:</b>
            {{ detalle_orden.cliente.rut_n }}
          </p>
          <p>
            <b>Dirección de entrega:</b>
            {{ detalle_orden.cliente.direccion_entrega }}
          </p>
          <p><b>Contacto:</b> {{ detalle_orden.cliente.contacto }}</p>
          <p class="prog"><b>Fono:</b> {{ detalle_orden.cliente.fono }}</p>
          <p><b>Mail:</b> {{ detalle_orden.cliente.email }}</p></b-tab
        >

        <b-tab title="Productos"
          ><table class="tabla_productos">
            <thead>
              <tr>
                <th>Código producto</th>
                <th>Descripción</th>
                <th>Precio Unitario</th>
                <th>Cantidad Pedidos</th>
                <th>Cantidad Pickeado</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="producto in detalle_orden.productos"
                :key="producto.id"
              >
                <td>{{ producto.cod_prod }}</td>
                <td>{{ producto.descripcion }}</td>
                <td>{{ producto.precio_unit }}</td>
                <td>{{ producto.cant_pedido }}</td>
                <td>{{ producto.cant_pickeado }}</td>
              </tr>
            </tbody>
          </table></b-tab
        >
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Ordenes",
  data() {
    return {
      max: 1,
    };
  },
  computed: {
    ...mapState(["detalle_orden"]),
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

.tabla_productos {
  font-size: 15px;
  border-collapse: collapse;
  max-width: 100%;
  margin: 40px;
}
.tabla_productos thead {
  font-weight: bold;
  text-align: left;
  color: #2c3e50;
}
.tabla_productos td,
.tabla_productos th {
  padding: 5px 10px;
  text-align: left;
}

.tabla_productos tbody tr:hover {
  background-color: white;
  color: #007a5e;
  font-weight: bold;
}
.tabla_productos td {
  border: 1px solid;
}
.boton-detalle {
  min-width: 85px;
  font-size: 12px;
}
h1 {
  padding-top: 40px;
}
.prog {
  display: inline-block;
}
.progress {
  max-width: 300px;
}
</style>
