'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrioritySchema = new Schema ({
    priority:  {type: [{
        type: String,
        enum: ['low', 'normal', 'high']
    }],
    default: 'normal'
    },
});



module.exports = mongoose.model('Priority', PrioritySchema)