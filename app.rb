$LOAD_PATH.push File.dirname(__FILE__)

require 'sinatra/base'

class App < Sinatra::Base
    
  set :root, File.dirname( __FILE__)
  
  set :public_folder, "#{root}/public"

  get "/" do
    send_file File.join(settings.public_folder, "index.html")
  end

end
