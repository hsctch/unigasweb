var app = angular.module("ResApp", []);

app.controller("AniversarioTarapotoController", function($scope, $http) {
  $http.get('data/aniversario-tarapoto.json').
    success(function(data, status, headers, config) {
      $scope.photos = data;
    }).
    error(function(data, status, headers, config) {
      console.log(data);
    });
});

app.controller("MissMoralesController", function($scope, $http) {
  $http.get('data/miss-morales.json').
    success(function(data, status, headers, config) {
      $scope.photos = data;
    }).
    error(function(data, status, headers, config) {
      console.log(data);
    });
});

app.controller("FeriaGastronomicaController", function($scope, $http) {
  $http.get('data/feria-gastronomica.json').
    success(function(data, status, headers, config) {
      $scope.photos = data;
    }).
    error(function(data, status, headers, config) {
      console.log(data);
    });
});

app.controller("MissTarapotoController", function($scope, $http) {
  $http.get('data/miss-tarapoto.json').
    success(function(data, status, headers, config) {
      $scope.photos = data;
    }).
    error(function(data, status, headers, config) {
      console.log(data);
    });
});

app.controller("ResponsabilidadSocialController", function($scope, $http) {
  $http.get('data/responsabilidad-social.json').
    success(function(data, status, headers, config) {
      $scope.icons = data;
    }).
    error(function(data, status, headers, config) {
      console.log(data);
    });

  $scope.quantity = 7;
});