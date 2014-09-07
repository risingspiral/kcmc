(function(global) {

    var App = function() {
        console.log('We have a new app');
    }

    global.exports['App'] = App;

}(window));