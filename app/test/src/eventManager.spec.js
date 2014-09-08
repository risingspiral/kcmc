describe('Event', function() {

    var evt = new window.exports.EventManager;
    var _ = window.exports.underscore;

    it('can trigger an event, pass it data, and have something happen', function(done) {
        evt.on('some_event', function(o) {
            assert.equal(o.type, 'some_event', 'The event did not fire.');
            done();
        });
        evt.trigger('some_event', {type: 'some_event'});
    });

    it('can be mixed in with other objects', function(done) {
        var otherObject = {};
        _.extend(otherObject, new window.exports.EventManager);
        evt.on('myevent', function(o) {
            assert.ok(false, 'This callback should NOT get called.');
        });
        otherObject.on('myevent', function(o) {
            assert.equal(o.type, 'myevent', 'The event did not fire.');
            done();
        });
        otherObject.trigger('myevent', {type:'myevent'});
    });

});