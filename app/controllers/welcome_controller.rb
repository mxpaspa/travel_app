class WelcomeController < ApplicationController
  def index
    @homeland = 'United States'
    @images = ['Croatia.jpg', 'Canada.jpg', 'Mexico.jpg', 'Germany.jpg']
  end

  def about
    @color = params[:color]
  end


  def contact
  end
end
