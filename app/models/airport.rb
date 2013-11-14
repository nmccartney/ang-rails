class Airport < ActiveRecord::Base

	has_many :airport_joins, dependent: :destroy
	has_many :destinations, through: :airport_joins, source: :destination

  	attr_accessible :city, :code, :destinations, :name, :airport_joins_ids
end
