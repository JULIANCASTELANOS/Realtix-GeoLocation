module.exports = (sequelize, Sequelize) => {
  const CRooms = sequelize.define("pediatrias", {
    Identifica: {
      type: Sequelize.STRING
    },
    Código_de: {
      type: Sequelize.STRING
    },
    Nombre_de_: {
      type: Sequelize.STRING
    },
    Nombre_del: {
      type: Sequelize.STRING
    },
    Teléfono: {
      type: Sequelize.STRING
    }, 
    Dirección: {
      type: Sequelize.STRING
    },
    Correo_ele: {
      type: Sequelize.STRING
    },
    Tipo_de_Pr: {
      type: Sequelize.STRING
    },
    Clase_de_P: {
      type: Sequelize.STRING
    },
    codigo_loc: {
      type: Sequelize.STRING
    },
    codigo_upz: {
      type: Sequelize.STRING
    },
    coordenada: {
      type: Sequelize.STRING
    },
    coordena_1: {
      type: Sequelize.STRING
  },
  }
);
  return CRooms;
};
