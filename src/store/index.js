import Vue from "vue";
import Vuex from "vuex";
/* import axios from "axios";
 */
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
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
    pagedResult: {
      page: 1,
      size: 10,
      total: 4,
    },
  },
  mutations: {
    CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    GET_ORDENES(state, ordenes) {
      state.ordenes = ordenes;
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
    /* getOrdenes({ commit }) {
      axios
        .get("http://157.230.190.251/api/v1/cmodels/secure/ordenes/")
        .then((response) => {
          console.log(response.data);
          commit("GET_ORDENES", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }, */
  },
  modules: {},
});
