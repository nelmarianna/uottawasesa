class AddDefaultsToBlogPosts < ActiveRecord::Migration
  def change
    change_column :blog_posts, :is_published, :boolean, :default => false
    change_column :blog_posts, :title, :string, :null => false
  end
end
