feature 'create listing' do
  scenario 'can fill in the form' do
    visit '/'
    expect(page).to have_selector(:link_or_button, 'Add Property!')
  end

  scenario 'has forms to fill' do
    visit '/'
    fill_in 'Name', with: 'Test Name'
    fill_in 'Phone', with: '078901234567'
    fill_in 'City', with: 'Chicago'
    fill_in 'Price_per_night', with: '30£'
    fill_in 'Description', with: 'cosy, sunny, lots of shops around, good transport'
    click_button 'Add Property!'
    expect(page).to have_content 'Chicago'
  end
end
