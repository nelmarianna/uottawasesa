class BlogPostsController < ApplicationController
  def new
    @blog_post = BlogPost.new
  end

  def create
    return if params[:discard] #TODO redirect somewhere

    @blog_post = BlogPost.new(blog_params)
    #TODO add author

    if params[:save]
      @blog_post.is_published = false

    elsif params[:publish]
      @blog_post.is_published = true
      @blog_post.published_on = Date.today
    end

    @blog_post.save
  end

  def index
    @is_blogger = user_is_blogger
    @draft_posts = BlogPost.where("is_published = ?", false)
    @published_posts = BlogPost.where("is_published = ?", true)
  end

  def show
    @blog_post = BlogPost.find(params[:id])

    if !user_is_author
      #redirect away
    end    
  end

  def edit
    @blog_post = BlogPost.find(params[:id])
    render :action => 'new'
  end

  def update
    
  end

  def destroy

  end

  private
  def blog_params
    params.require(:blog_post).permit(:title)
  end

  def user_is_blogger
    return true #TODO user role checking
  end

  def user_is_author
    return true #TODO user role checking
  end
end
