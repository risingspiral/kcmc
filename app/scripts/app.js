(function(global) {

    var App = function() {
        var $ = global.exports.jQuery;
        var albums = global.exports.albums;
        var grid = new global.exports.Grid();

        (function init() {
            setupGrid();
            setupFilter();
            setupColumnChooser();
        }());

        function setupGrid() {
            grid.setColumns({
                'title' : {
                    'label': 'Album Title',
                    'formatter' : function() {
                        return '<td><a href="<%= wiki_link %>" target="_full"><%= title %></a></td>'
                    }
                },
                'group' : {'label': 'Artist Name'},
                'release_date': {'label': 'Release Date'},
                'no_of_discs': {'label': 'Number of Discs'},
                'recording_date': {'label': 'Recording Date'},
                'personnel' : {'label': 'Personnel'}
            });

            grid.populate(albums);
            $('div.container').html(grid.get$());
        }

        function setupFilter() {

        }

        function setupColumnChooser() {

        }

    };

    global.exports['App'] = App;

}(window));