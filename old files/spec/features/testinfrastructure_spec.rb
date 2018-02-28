feature 'File structure working' do
  scenario 'should have home page' do
    visit '/'
    expect(page).to have_content 'Hello from MakersBNB'
  end
end
