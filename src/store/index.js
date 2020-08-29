import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    dashboard: {
      kpis: [
        {
          nombre: "cumplimiento diario de ordenes",
          entregadas: "1500",
          pendientes: "500",
        },
        {
          nombre: "Ordenes atrasadas jornada",
          totales: "700",
          atrasadas: "14",
        },
      ],
      ultimas_ordenes: [
        {
          num_orden: "123446",
          cliente: "Multitiendas Sigma SA",
          fecha_entrega: "2020-07-20",
          estado: "Ingresado",
        },
        {
          num_orden: "123445",
          cliente: "Jugueteria Asimov SpA",
          fecha_entrega: "2020-07-20",
          estado: "Preparacion",
        },
        {
          num_orden: "123444",
          cliente: "Bazar Don Lalo LTDA",
          fecha_entrega: "2020-07-18",
          estado: "Preparacion",
        },
        {
          num_orden: "123443",
          cliente: "Claudia Ingrid Romero",
          fecha_entrega: "2020-07-18",
          estado: "Entregado",
        },
      ],
      ultimas_devoluciones: [
        {
          num_orden: "122289",
          cliente: "Multi Game SpA",
          fecha_entrega: "2020-07-20",
        },
        {
          num_orden: "122283",
          cliente: "Jugueteria Play LTDA",
          fecha_entrega: "2020-07-20",
        },
        {
          num_orden: "122271",
          cliente: "Tiendas La Reina SA",
          fecha_entrega: "2020-07-18",
        },
        {
          num_orden: "122232",
          cliente: "Ofertas Unicas LTDA",
          fecha_entrega: "2020-07-14",
        },
      ],
    },
    ordenes: [
      {
        num_orden: 123445,
        cliente: "Multitiendas Sigma SA",
        monto: 1540000,
        cant_productos: 160,
        fecha_entrega: "2020-07-20T00:00:00.000Z",
        avance_preparacion: 0,
        estado: "Ingresado",
      },
      {
        num_orden: 123444,
        cliente: "Jugueteria Asimov SpA",
        monto: 980000,
        cant_productos: 45,
        fecha_entrega: "2020-07-20T00:00:00.000Z",
        avance_preparacion: 0.4,
        estado: "Preparacion",
      },
      {
        num_orden: 123443,
        cliente: "Bazar Don Lalo LDTA",
        monto: 2400000,
        cant_productos: 120,
        fecha_entrega: "2020-07-18T00:00:00.000Z",
        avance_preparacion: 0.6,
        estado: "Preparacion",
      },
      {
        num_orden: 123441,
        cliente: "Claudia Ingrid Romero",
        monto: 1740000,
        cant_productos: 70,
        fecha_entrega: "2020-07-14T00:00:00.000Z",
        avance_preparacion: 1,
        estado: "Entregado",
      },
    ],
    detalle_orden: {
      orden: {
        num_orden: 123456,
        monto: 1540000,
        cant_productos: 160,
        fecha_entrega: "2020-07-20T00:00:00.000Z",
        vendedor: "Luis Fuentes",
        avance_preparacion: 0.6,
        estado: "Preparacion",
      },
      cliente: {
        nombre: "Sociedad Comercial AYSA SA",
        rut_n: 82340250,
        rut_dv: "2",
        direccion_entrega: "Meiggs 123 Loc 1",
        contacto: "Manuel Morales",
        fono: "+56 22 234 4434",
        email: "mmorales@aysa.cl",
      },
      productos: [
        {
          cod_prod: "123",
          descripcion: "1969 Harley Davidson Ultimate Chopper",
          precio_unit: 1540,
          cant_pedido: 160,
          cant_pickeado: 0,
        },
        {
          cod_prod: "234",
          descripcion: "1968 Ford Mustang",
          precio_unit: 980,
          cant_pedido: 45,
          cant_pickeado: 10,
        },
        {
          cod_prod: "126",
          descripcion: "1917 Grand Touring Sedan",
          precio_unit: 2400,
          cant_pedido: 120,
          cant_pickeado: 80,
        },
        {
          cod_prod: "241",
          descripcion: "1957 Corvette Convertible",
          precio_unit: 1740,
          cant_pedido: 70,
          cant_pickeado: 70,
        },
      ],
    },
  },
  mutations: {
    CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    GET_ORDENES(state, data) {
      state.ordenes = data;
    },
    GET_DASHBOARD(state, data) {
      state.dashboard = data;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        try {
          commit("CURRENT_USER", user);
          resolve(user);
        } catch (e) {
          reject(e);
        }
      });
    },
    getOrdenes({ commit }) {
      axios
        .get("./public/api/ordenes.json")
        .then((response) => {
          console.log(response.data);
          commit("GET_ORDENES", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getDashboard({ commit }) {
      axios
        .get("../api/dashboard.json")
        .then((response) => {
          console.log(response.data);
          commit("GET_DASHBOARD", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  modules: {},
});
