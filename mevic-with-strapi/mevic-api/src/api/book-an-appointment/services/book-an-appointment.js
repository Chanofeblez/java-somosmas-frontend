'use strict';

/**
 * book-an-appointment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-an-appointment.book-an-appointment');
