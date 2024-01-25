'use strict';

/**
 *  book-an-appointment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::book-an-appointment.book-an-appointment');
