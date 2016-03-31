source 'https://rubygems.org'
ruby '2.3.0'

require 'rbconfig'

gem 'wdm', '>=0.1.0' if RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i

gem 'rails', '5.0.0.beta3'
gem 'pg'
gem 'foundation-rails'
gem 'sass-rails', '~> 5.0'
gem 'puma'
gem 'font-awesome-rails'
gem 'sprockets', '>=2.11.0'
gem 'aws-sdk'
gem 'uglifier', '>=2.1.1'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'turbolinks', '>=1.1.1'
gem 'jbuilder', '>=1.0.2'
gem 'actionview-encoded_mail_to'
gem 'devise', github: 'plataformatec/devise'
gem 'react-rails', '~> 1.6', '>= 1.6.2'
gem 'rack-attack'

group :development do
	gem 'pry'
  gem 'listen', '~> 3.0', '>= 3.0.6'
end

group :production do
  gem 'rails_12factor', '>=0.0.2'
end
