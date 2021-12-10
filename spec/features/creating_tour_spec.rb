require 'rails_helper'

RSpec.describe "Creating a Tour", type: :feature do
  
  scenario "Valid inputs" do
    visit new_tour_path
    fill_in "Name", with: "Dennis"
    fill_in "Price", with: "2000"
    fill_in "Description", with: "This is a description"
    click_on "Post Tour"
    visit tours_path
    expect(page).to have_content("Dennis")
    expect(page).to have_content("2000")
    expect(page).to have_content("This is a description")
    expect(Tour.count).to eq(1)
  end
  

  
end
