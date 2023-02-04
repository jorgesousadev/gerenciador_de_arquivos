const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sistema', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
