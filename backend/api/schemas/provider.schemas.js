const mongoose = require('mongoose');

// Shorter name for mongoose.Schema
const Schema = mongoose.Schema;

// Create company schema
const companySchema = new Schema({
    "company_name": { type: String, required: true },
    "address": { type: String, required: true },
    "address2": { type: String },
    "city": { type: String, required: true },
    "state": { type: String, required: true, min: 2, max: 2 },
    "postal_code": { type: String, required: true, min: 5 },
    "phone": { type: String, required: true },
    "email": { type: String, required: true },
    "description": { type: String },
    "tagline": { type: String }
});

// Create provider schema
const providerSchema = new Schema({
    "firstname": { type: String, required: true },
    "lastname": { type: String, required: true },
    "position": { type: String },
    "company": companySchema
});

module.exports = {providerSchema, companySchema}