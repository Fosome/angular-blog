function CommentsCtrl($scope, $routeParams, Comments, CommentBus) {
  $scope.comments = Comments.index({post_id : $routeParams.id});

  $scope.$on('showComment', function() {
    $scope.comments.push(CommentBus.comment);
  });
}

function NewCommentCtrl($scope, $routeParams, $location, Comments, Posts, CommentBus) {
  $scope.comment = new Comments();

  $scope.createComment = function() {
    $scope.comment.$create({post_id : $routeParams.id},
      $scope.reload,
      function() {
        alert("Invalid comment...");
      }
    );
  };

  $scope.reload = function() {
	$scope.addComment($scope.comment);
	$scope.comment = new Comments();
  };

  $scope.addComment = function(comment) {
	  CommentBus.addComment(comment);
  };
}

App.factory('CommentBus', function($rootScope) {
  var bus = {};
  bus.comment = null;

  bus.addComment = function(comment) {
    this.comment = comment;
    $rootScope.$broadcast('showComment');
  };

  return bus;
});
