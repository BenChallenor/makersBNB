require 'sinatra/base'

class MakersBNB < Sinatra::Base
  get '/' do
    erb :index
  end
end
