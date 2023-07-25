'use strict';

const eventData = require('../data/events');

const getEvents = async (req, res, next) => {
    try {
        const events = await eventData.getEvents();
        res.send(events);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const oneEvent = await eventData.getById(eventId);
        res.send(oneEvent);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const createEvent = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await eventData.createEvent(data);
        res.send(created);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const updateEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const data = req.body;
        const updated = await eventData.updateEvent(eventId, data);
        res.send(updated);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const deleted = await eventData.deleteEvent(eventId);
        res.send(deleted);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}