class Tour < ApplicationRecord


    geocoded_by :address
    #after_validation :geocode, if: address_changed?

    validates :name, presence: true
    validates :price, presence: true
    validates :description, presence: true
    has_many_attached :images






    def address
        [street, city, state, country].compact.join(', ')
      end

end
