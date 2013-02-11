class Comment < ActiveRecord::Base
  attr_accessible :body, :post_id

  belongs_to :post, :inverse_of => :comments

  validates :post, :presence => true

  def as_json(options = {})
    {
      :id         => id,
      :body       => body,
      :post_id    => post_id,
      :created_at => created_at,
      :updated_at => updated_at
    }
  end
end
