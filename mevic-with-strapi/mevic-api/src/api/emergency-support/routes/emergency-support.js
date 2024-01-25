'use strict';

/**
 * emergency-support router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::emergency-support.emergency-support');
