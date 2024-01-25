'use strict';

/**
 * emergency-support service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emergency-support.emergency-support');
