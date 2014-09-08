(function(global) {

    var _ = global.exports.underscore;
    var $ = global.exports.jQuery;

    var Grid = function() {

        var self = this;
        var rowData = [];
        var columns = {};

        var table$ = $('<div><table class="table"><thead></thead><tbody></tbody><tfoot></tfoot></table></div>');

        this.populate = populate;
        this.setColumns = setColumns;
        this.get$ = get$;

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
            table$.find('tbody').html(getBodyHtml());
        }

        function getHeaderHtml() {
            var thGen = _.template('<th><%= label %></th>');
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