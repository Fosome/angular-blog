App.factory('Posts', ['$resource', function($resource) {
  return $resource(
    '/posts/:id',
    { id: '@id' },
    {
      index:    { method: 'GET', isArray: true },
      show:     { method: 'GET' },
      create:   { method: 'POST' },
      update:   { method: 'PUT' },
      destroy:  { method: 'DELETE' }
    });
}]);

App.factory('Comments', ['$resource', function($resource) {
  return $resource(
    '/comments/:id',
    { id: '@id' },
    {
      create:   { method: 'POST' }
    });
}]);
