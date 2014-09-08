(function(global) {

    var EventManager = function() {

        var eventMap = {};
        var _ = global.exports.underscore;

        this.on = function(evt, callback) {
            if (eventMap[evt]) {
                eventMap[evt].push(callback);
            } else {
                eventMap[evt] = [callback];
            }
        };
        this.trigger = function(evt, passthru) {
            var data = passthru || {};
            if (eventMap[evt]) {
                _.each(eventMap[evt], function(callee) {
                    callee(passthru);
                });
            }
        }
    };

    global.exports.EventManager = EventManager;

}(window));