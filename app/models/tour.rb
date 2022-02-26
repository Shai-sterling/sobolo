class Tour < ApplicationRecord
  
    validates :name, presence: true
    validates :price, presence: true
    validates :description, presence: true
    has_one_attached :image

    belongs_to :user

    has_many :sites, dependent: :destroy
    
end
