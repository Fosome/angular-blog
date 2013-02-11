class Post < ActiveRecord::Base
  attr_accessible :title, :author, :body

  has_many :comments, :dependent => :destroy, :inverse_of => :post

  validates :title,   :presence => true
  validates :author,  :presence => true
  validates :body,    :presence => true

  def as_json(options = {})
    {
      :id         => id,
      :title      => title,
      :author     => author,
      :body       => body,
      :comments   => comments,
      :created_at => created_at,
      :updated_at => updated_at
    }
  end
end
