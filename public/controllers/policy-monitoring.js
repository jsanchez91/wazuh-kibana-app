// Require config
var app = require('ui/modules').get('app/wazuh', []);

app.controller('pmController', function ($scope, DataFactory, $mdDialog) {
    //Initialisation
    $scope.load = true;
    var objectsArray = [];
	var loadWatch;
	
    $scope.events = [];

    //Print Error
    var printError = function (error) {
        $mdToast.show({
            template: '<md-toast>' + error.html + '</md-toast>',
            position: 'bottom left',
            hideDelay: 5000,
        });
        if ($scope._eblocked) {
            $scope._eblocked = false;
        }
    }

    //Functions

    $scope.eventSearchFilter = function (search) {
        console.log(search);
        if (search) {
            DataFactory.filters.set(objectsArray['/rootcheck'], 'search', search);
        } else {
            DataFactory.filters.unset(objectsArray['/rootcheck'], 'search');
        }
    };

    $scope.eventsObj = {
        //Obj with methods for virtual scrolling
        getItemAtIndex: function (index) {
            if ($scope._eblocked) {
                return null;
            }
            var _pos = index - DataFactory.getOffset(objectsArray['/rootcheck']);
            if (DataFactory.filters.flag(objectsArray['/rootcheck'])) {
                $scope._eblocked = true;
                DataFactory.scrollTo(objectsArray['/rootcheck'], 200)
                    .then(function (data) {
                        $scope.events.length = 0;
                        $scope.events = data.data.items;
                        DataFactory.filters.unflag(objectsArray['/rootcheck']);
                        $scope._eblocked = false;
                    }, printError);
            } else if ((_pos > 150) || (_pos < 0)) {
                $scope._eblocked = true;
                DataFactory.scrollTo(objectsArray['/rootcheck'], index)
                    .then(function (data) {
                        $scope.events.length = 0;
                        $scope.events = data.data.items;
                        $scope._eblocked = false;
                    }, printError);
            } else {
                return $scope.events[_pos];
            }
        },
        getLength: function () {
            return DataFactory.getTotalItems(objectsArray['/rootcheck']);
        },
    };
	
	var createWatch = function () {
        loadWatch = $scope.$watch(function () {
            return $scope.$parent._agent;
        }, function () {
		DataFactory.initialize('get', '/rootcheck/' + $scope.$parent._agent.id, {}, 200, 0)
			.then(function (data) {
				DataFactory.clean(objectsArray['/rootcheck']);
				objectsArray['/rootcheck'] = data;
				DataFactory.get(objectsArray['/rootcheck'])
				.then(function (data) {
                    $scope.events.length = 0;
					$scope.events = data.data.items;
                    DataFactory.filters.register(objectsArray['/rootcheck'], 'search', 'string');
                    $scope.eventSearchFilter($scope._eventSearch);
				}, printError);
			}, printError);
        });
    };
	
    var load = function () {
		DataFactory.initialize('get', '/rootcheck/' + $scope.$parent._agent.id, {}, 200, 0)
			.then(function (data) {
				objectsArray['/rootcheck'] = data;
				DataFactory.get(objectsArray['/rootcheck'])
				.then(function (data) {
					$scope.events = data.data.items;
					DataFactory.filters.register(objectsArray['/rootcheck'], 'search', 'string');
					createWatch();
					$scope.load = false;
				}, printError);
			}, printError);
    };

    //Load
    load();

    //Destroy
    $scope.$on("$destroy", function () {
        angular.forEach(objectsArray, function (value) {
            DataFactory.clean(value)
        });
        $scope.events.length = 0;
        loadWatch();
    });

})
