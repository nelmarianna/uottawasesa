class AddUserAndBodyToBlog < ActiveRecord::Migration
  def change
    add_reference :blog_posts, :user, index: true
    add_column :blog_posts, :body_file_name
    add_column :users, :username, :string, :null => false 
  end
end
