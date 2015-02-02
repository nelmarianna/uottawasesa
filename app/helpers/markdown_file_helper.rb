require 'fileutils'

module MarkdownFileHelper

  DIRECTORY_NAME = "public/blogs/"

  def update_file(filename, content)
    File.open(filename, 'w') do |new_file|
      new_file.puts(content)
    end
  end

  def load_file(filename)
    contents = ""    

    File.open(filename, 'r') do |loaded|
      contents = loaded.read
    end

    return contents
  end

  def directory
    dirname = "#{Rails.root}/#{DIRECTORY_NAME}"
    unless File.directory?(dirname)
      FileUtils.mkdir_p(dirname)
    end

    return dirname
  end 

  def generate_filename
    while(true)
      i = 1
      filename = "#{directory}blog_post_#{i}.md"
      return filename unless File.exists?(filename)
      i += 1
    end
  end
end