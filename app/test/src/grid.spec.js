describe('A grid', function() {

    var grid;
    var albums;

    var columnDefs = {
        'title' : {'id': 'title', 'label': 'Album Title'},
        'group' : {'id': 'group', 'label': 'Artist Name'}
    };

    beforeEach(function() {
        grid = new window.exports.Grid();
        albums = window.exports.albums;
    });

    it('can set defined columns', function(done) {
        grid.on('COLUMNS_SET', function() {
            done();
        });
        grid.setColumns(columnDefs);
    });

    it('can be populated', function(){
        grid.setColumns(columnDefs);
        grid.populate(albums.slice(0,2));
        assert.include(grid.get$().html(), columnDefs.title.label, 'The first label is missing.');
        assert.include(grid.get$().html(), albums[0].title, 'The first album title is missing from the grid.');
    });

    it('can format a field', function() {
        var columnDefsCopy = JSON.parse(JSON.stringify(columnDefs));
        columnDefsCopy.group.formatter = function(record) {
            return '<td><div class="something-extra"><%= group =></div></td>'
        }
        grid.setColumns(columnDefsCopy);
        grid.populate(albums.slice(0,2));
        assert.include(grid.get$().html(), 'something-extra', 'A custom formatter was not applied.');
    });

    it('shows a message when no data can be found', function(){
        assert.ok(false);
    });

    it('can have its data reset', function(){
        grid.setColumns(columnDefs);
        grid.populate(albums.slice(0,2));
        assert.include(grid.get$().html(), albums[0].title, 'The first album title is missing from the grid.');

        grid.populate(albums.slice(2,4));
        assert.notInclude(grid.get$().html(), albums[0].title, 'The first album is still present in the grid.');
    });

    it('can sort a field', function(){
        grid.setColumns(columnDefs);
        grid.populate(albums.slice(0,2));
        grid.sort('title', 'desc');
        assert.include(grid.get$().find('tr td').first().html(), albums[1].title);

        grid.sort('title');
        assert.include(grid.get$().find('tr td').first().html(), albums[0].title);
    });
});