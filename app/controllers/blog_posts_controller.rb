class BlogPostsController < ApplicationController
  def new
    @post = BlogPost.new
  end

  def create
    puts params
    if params[:name] == "publish"

    elsif params[:name] == "save"

    end
  end

  private
  def blog_params
    params.require(:post).permit(:title)
  end
end
