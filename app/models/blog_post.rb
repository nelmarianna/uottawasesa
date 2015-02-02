class BlogPost < ActiveRecord::Base
  include MarkdownFileHelper

  before_validation :get_blog_file_name
  after_save :save_blog_file
  
  attr_accessor :body_field
  belongs_to :user

  #TODO validations

  def get_blog_file_name
    self.body_file_name = generate_filename
  end

  def save_blog_file
    update_file(self.body_file_name, @body_field)
  end

  def get_author_name
    #TODO
  end

  def get_author_email
    #TODO
  end

  def get_author_id
    #TODO
  end
end
