class AddPublishingInfoToBlogPost < ActiveRecord::Migration
  def change
    add_column :blog_posts, :is_published, :boolean
    add_column :blog_posts, :published_on, :date
  end
end
