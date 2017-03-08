class AddCoordinatesToDestinations < ActiveRecord::Migration[5.0]
  def change
    add_column :destinations, :latitude, :float
    add_column :destinations, :longitude, :float
    add_column :destinations, :address, :string
  end
end
