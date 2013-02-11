class CommentsController < ApplicationController

  respond_to :json

  def create
    @comment = Comment.create(params[:comment])
    respond_with @comment
  end
end
