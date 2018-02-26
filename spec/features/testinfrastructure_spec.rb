require 'capybara/rspec'
require_relative '../../app'

Capybara.app = MakersBNB

feature 'File structure working' do
  scenario 'should have home page' do
    visit '/'
    expect(page).to have_content 'Hello from MakersBNB'
  end
end
