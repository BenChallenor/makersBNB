feature 'create listing' do
  scenario 'can fill in the form' do
    visit '/'
    expect(page).to have_selector(:link_or_button, 'Add Property')
  end
end
