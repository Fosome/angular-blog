App.factory('Comments', ['$resource', function($resource) {
  return $resource(
    '/posts/:post_id/comments/:id',
	{
	  id: '@id',
      post_id: '@post_id'
	},
    {
      index:    { method: 'GET', isArray: true },
      show:     { method: 'GET' },
      create:   { method: 'POST' }
    });
}]);
