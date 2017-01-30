var app = require('ui/modules').get('app/wazuh', []);

app.controller('overviewGeneralController', function ($scope, DataFactory, genericReq, $mdToast, errlog) {

    $scope.load = true;
	$scope.defaultManager = $scope.$parent.state.getDefaultManager().name;

});

app.controller('overviewFimController', function ($scope, DataFactory, genericReq, $mdToast, errlog) {

    $scope.load = true;
	$scope.defaultManager = $scope.$parent.state.getDefaultManager().name;

});

app.controller('overviewPMController', function ($scope, DataFactory, genericReq, $mdToast, errlog) {

    $scope.load = true;
    $scope.$parent.state.setOverviewState('pm');
	$scope.defaultManager = $scope.$parent.state.getDefaultManager().name;

});

app.controller('overviewOSCAPController', function ($scope, DataFactory, genericReq, $mdToast, errlog) {

    $scope.load = true;
    $scope.$parent.state.setOverviewState('oscap');
	$scope.defaultManager = $scope.$parent.state.getDefaultManager().name;

});

app.controller('overviewAuditController', function ($scope, DataFactory, genericReq, $mdToast, errlog) {

    $scope.load = true;
    $scope.$parent.state.setOverviewState('audit');
	$scope.defaultManager = $scope.$parent.state.getDefaultManager().name;

});

app.controller('overviewPCIController', function ($scope, $compile, DataFactory, genericReq, $mdToast, errlog) {

    $scope.load = true;
    $scope.$parent.state.setOverviewState('pci');
	$scope.defaultManager = $scope.$parent.state.getDefaultManager().name;
	var tabs = [];
	genericReq.request('GET', '/api/wazuh-api/pci/all').then(function (data) {
		angular.forEach(data, function(value, key) {
			tabs.push({"title": key, "content": value});
		});
		
	});
    
	$scope.tabs = tabs;
    $scope.selectedIndex = 0;
	
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
	
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };

});