myApp.factory('emloyeeService', function () {
        var employeeData;

        function set(data) {
        	employeeData = data;
        }
        function get() {
            return employeeData;
        }

        return {
            set: set,
            get: get
        };
    });