const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: String,
    price: Number,
    location: String
    // Add your schema fields here
});

// Prevent overwriting the model if it's already defined
const Listing = mongoose.models.Listing || mongoose.model('Listing', ListingSchema);

module.exports = Listing;
