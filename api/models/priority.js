'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrioritySchema = new Schema ({
    priority:  {type: [{
        type: String,
        enum: ['low', 'normal', 'high']
    }],
    default: 'normal'
    },
});



module.exports = mongoose.model('Priority', PrioritySchema)