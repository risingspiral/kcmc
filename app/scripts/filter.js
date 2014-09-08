(function(global) {
    var _ = global.exports.underscore;
    var $ = global.exports.jQuery;

    var Filter = function() {

        var self = this;
        var filter$ = $('<div><input class="filter-input" type="text" /><input type="button" class="filter-submit" value="Filter" /><input type="button" class="filter-reset" value="reset" /></div>');

        this.get$ = get$;

        (function init() {
            _.extend(self, new global.exports.EventManager());

            initListeners();
        }());

        function initListeners() {
            filter$.find('.filter-submit').on('click', function(e) {
                self.trigger('FILTER_APPLIED', {'text' : filter$.find('.filter-input')[0].value});
            });

            filter$.find('.filter-reset').on('click', function(e) {
                self.trigger('FILTER_RESET', {});
                filter$.find('.filter-input')[0].value = '';
            });
        }

        function get$() {
            return filter$;
        }
    };

    global.exports.Filter = Filter;
}(window));