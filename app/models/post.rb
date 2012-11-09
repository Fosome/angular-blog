class Post < ActiveRecord::Base
  attr_accessible :title, :author, :body

  validates :title,   :presence => true
  validates :author,  :presence => true
  validates :body,    :presence => true
end
