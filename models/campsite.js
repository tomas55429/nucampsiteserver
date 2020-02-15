const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    }
}, {
     timestamps: true
});


const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    elevation: {
        type: Number, 
        required: true 
    },
    cost: {
        type: Currency, 
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    //comments is subdocument from the commentsSchema
    comments: [commentSchema]
}, {
    timestamps: true
});



const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;