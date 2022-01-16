require 'rails_helper'



RSpec.describe "Creating a Tour", type: :feature do
  
  scenario "Valid inputs" do
    visit discover_path
    expect(page).to have_content("Our favourite things to do in Ghana")
  end
end