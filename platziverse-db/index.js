'use strict'

const setupDataBase = require('../lib/db')
const setupAgentModel = require('../models/agent')
const setupMetricModel = require('../models/metric')

module.exports = async function (config) {
  const sequelize = setupDataBase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  AgentModel.hasMeny(MetricModel)
  MetricModel.belongsTo(AgentModel)

  await sequelize.authenticate()

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
