class BlogPost < ActiveRecord::Base
  attr_accessor :temp_body

  belongs_to :user

  has_attached_file :body
  validates_attachment_content_type :body, content_type: /.*\.md/

  #TODO validations

  def create_server_file(content)

  end

  def get_author_name

  end

  def get_author_email

  end

  def get_author_id

  end
end
