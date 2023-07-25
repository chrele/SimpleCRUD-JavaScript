'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list  =await pool.request().query(sqlQueries.eventsList);

        return list.recordset;
    } catch(err) {
        return err.message;
    }
}

const getById = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request().input('eventId', sql.Int, eventId).query(sqlQueries.eventById);

        return oneEvent.recordset;
    } catch(err) {
        return err.message;
    }
}

const createEvent = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                            .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                            .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                            .input('startDate', sql.Date, eventData.startDate)
                            .input('endDate', sql.Date, eventData.endDate)
                            .input('avenue', sql.NVarChar(200), eventData.avenue)
                            .input('maxMembers', sql.NVarChar(6), eventData.maxMembers)
                            .query(sqlQueries.createEvent);
        return insertEvent.recordset;
    } catch(err) {
        return err.message;
    }
}

const updateEvent = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                            .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                            .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                            .input('startDate', sql.Date, eventData.startDate)
                            .input('endDate', sql.Date, eventData.endDate)
                            .input('avenue', sql.NVarChar(200), eventData.avenue)
                            .input('maxMembers', sql.NVarChar(6), eventData.maxMembers)
                            .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch(err) {
        return err.message;
    }
}

const deleteEvent = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleted = await pool.request().input('eventId', sql.Int, eventId).query(sqlQueries.deleteEvent);

        return deleted.recordset;
    } catch(err) {
        return err.message;
    }
}

module.exports = {
    getEvents,
    getById,
    createEvent,
    updateEvent,
    deleteEvent
}