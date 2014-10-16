var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

var TrackSchema = new Schema({
        name         : {
            type: String,
            required : true
        },
        state        : {
            type: String,
            required: true
        },
        timestamp    : { type: Date, default: Date.now },
        // creator      : String,
        // errororigin  : String,
        // errorcode    : Number,
        // errormessage : String,
        // errorstack   : [{ body: String }]
});

module.exports = mongoose.model('Tracks', TrackSchema);
