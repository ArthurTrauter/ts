var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

var TrackSchema = new Schema({
        _id          : String,
        name         : String,
        state        : String,
        timestamp    : { type: Date, default: Date.now },
        creator      : String,
        errororigin  : String,
        errorcode    : Number,
        errormessage : String,
        errorstack   : [{ body: String }]
});

module.exports = mongoose.model('Tracks', TrackSchema);
