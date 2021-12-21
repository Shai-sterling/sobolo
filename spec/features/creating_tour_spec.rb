require 'rails_helper'

RSpec.describe "Creating a Tour", type: :system do
  
  scenario "Valid inputs" do
    visit new_tour_path
    fill_in "Name", with: "Dennis"
    fill_in "Price", with: "200"
    fill_in "Description", with: "This is a description"
    click_on "Post Tour"
    visit tours_path
    expect(page).to have_content("Dennis")
    expect(page).to have_content("200.0")
    #expect(page).to have_content("This is a description")
    expect(Tour.count).to eq(1)
  end
  

  scenario "Invalid inputs" do
    visit new_tour_path
    click_on "Post Tour"
    expect(page).to have_content("Name can't be blank")
    expect(page).to have_content("Price can't be blank")
    expect(Tour.count).to eq(0)

  end







  
end
