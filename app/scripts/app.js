(function(global) {

    var App = function() {
        var $ = global.exports.jQuery;
        var albums = global.exports.albums;
        var filteredData = [];
        var grid;
        var filter;

        // This initializes the app
        (function init() {

            setupGrid();
            setupFilter();
            setupColumnChooser();
        }());

        function setupGrid() {
            grid = new global.exports.Grid();

            grid.setColumns({
                'title' : {
                    'id': 'title',
                    'label': 'Album Title',
                    'sortable': true,
                    'formatter' : function() {
                        return '<td><a href="<%= wiki_link %>" target="_full"><%= title %></a></td>'
                    }
                },
                'group' : {
                     'id': 'group',
                     'sortable': true,
                     'label': 'Artist Name'
                },
                'release_date': {
                    'id': 'release_date',
                    'sortable': true,
                    'label': 'Release Date'
                },
                'no_of_discs': {
                    'id': 'no_of_discs',
                    'label': 'Number of Discs',
                    'sortable': true
                },
                'recording_date': {
                    'id' : 'recording_Date',
                    'label': 'Recording Date',
                    'sortable': true
                },
                'personnel' : {
                    'id': 'personnel',
                    'label': 'Personnel',
                    'formatter' : function() {
                        return '<td><% for (var i=0; i<personnel.length; i++) { print(personnel[i].given_name + " " + personnel[i].surname + " <br />"); } %></td>'
                    }
                }
            });

            grid.populate(albums);
            $('div.container').html(grid.get$());
        }

        function setupFilter() {
            filter = new global.exports.Filter();
            $('div.container').prepend(filter.get$());

            filter.on('FILTER_APPLIED', function(o) {
                // TODO finish this up
                filteredData = _.filter(albums, function(album) {
                    return album.title.toLowerCase().indexOf(o.text.toLowerCase()) > -1;
                });
                grid.populate(filteredData);
            });

            filter.on('FILTER_RESET', function(o) {
                grid.populate(albums);
            });
        }

        function setupColumnChooser() {
            // TODO
        }

    };

    global.exports['App'] = App;

}(window));