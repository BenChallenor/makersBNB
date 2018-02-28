require 'sinatra/base'

class MakersBNB < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  post '/' do
    session[:name] = params[:Name]
    session[:phone] = params[:Phone]
    session[:city] = params[:City]
    session[:price_per_night] = params[:Price_per_night]
    session[:description] = params[:Description]
    redirect '/'
  end
end
