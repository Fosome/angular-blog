App.factory('Comments', ['$resource', function($resource) {
  return $resource(
    '/comments/:id',
    { id: '@id' },
    {
      create:   { method: 'POST' }
    });
}]);
