(function(global) {

    var _ = global.exports.underscore;
    var $ = global.exports.jQuery;

    var Grid = function() {

        var self = this;
        var rowData = [];
        var columns = {};

        var table$ = $('<div><table class="table table-striped"><thead></thead><tbody></tbody><tfoot></tfoot></table></div>');

        this.populate = populate;
        this.setColumns = setColumns;
        this.get$ = get$;
        this.sort = sort;

        (function init() {
            _.extend(self, new global.exports.EventManager());
        }());

        function populate(data) {
            rowData = data;

            // Adding in some default string if a record is missing an expected field
            _.each(rowData, function(record, key) {
                var difference = _.difference(_.keys(columns), _.keys(record));
                _.each(difference, function(missingKey) {
                    rowData[key][missingKey] = '--';
                });
            });

            draw();
        }

        function setColumns(cols) {
            columns = cols;
            this.trigger('COLUMNS_SET');
        }

        function draw() {
            table$.find('thead').html(getHeaderHtml());
            table$.find('thead th img.sort-up-icon').on('click', handleUpSort);
            table$.find('thead th img.sort-down-icon').on('click', handleDownSort);
            table$.find('tbody').html(getBodyHtml());
        }

        function sort(column, direction) {
            rowData.sort(columns.sortFn || function(a, b) {
                if (direction === 'desc') {
                    return a[column] == b[column] ? 0 : +(a[column] < b[column]) || -1;
                } else {
                    return a[column] == b[column] ? 0 : +(a[column] > b[column]) || -1;
                }
            });
            draw();
        }

        function handleUpSort(e) {
            sort($(e.target).closest('th').attr('attr-column'), 'asc');
        }

        function handleDownSort(e) {
            sort($(e.target).closest('th').attr('attr-column'), 'desc');
        }

        function getHeaderHtml() {
            // TODO make this template line more readable
            var thGen = _.template('<th attr-direction="asc" attr-column="<%= id %>"><%= label %><% if (typeof sortable !== "undefined") { print ("<a href=\'javascript:void(0);\'><img class=\'sort-up-icon\' src=\'images/sort-up.png\' /></a><a href=\'javascript:void(0);\'><img class=\'sort-down-icon\' src=\'images/sort-down.png\' /></a>"); } %></th>');
            var html = '';
            _.each(columns, function(column) {
                html += thGen(column);
            });
            return '<tr>' + html + '</tr>';
        }

        function getBodyHtml() {
            var rowTemplate = getRowTemplate();
            var html = '';
            _.each(rowData, function(record) {
                html += rowTemplate(record);
            });
            return html;
        }

        function getRowTemplate() {
            var html = '';
            _.each(columns, function(column, key) {
                if (column.formatter) {
                    html += column.formatter();
                } else {
                    html += '<td><%= '+key+' %></td>';
                }
            });
            return _.template('<tr>'+html+'</tr>');
        }

        function get$() {
            return table$;
        }
    };

    global.exports.Grid = Grid;

}(window));