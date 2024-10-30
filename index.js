const express = require("express");

const app = express();
const port = 3000;
const logger = require('./src/logger')

    try {
        throw new Error('Erreur de téléchargement')
    } catch (error) {
        logger.error(error);
    }
logger.info('test2')

