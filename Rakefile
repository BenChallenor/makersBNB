require 'pg'
if ENV['RACK_ENV'] != 'production'
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new :spec

  task default: [:spec]
end

task :test_database_setup do
  p 'Setting up test database...'
  connection = PG.connect(dbname: 'makers_bnb_test')
  connection.exec("TRUNCATE spaces")
  connection.exec("INSERT INTO spaces VALUES(1, 'Ocean view villa', '50 Commercial Street, London', 'Clean open space with nice view, pretty expensive though', '550');")
end

task :setup do
  p "Creating databases..."
  ["makers_bnb", "makers_bnb_test"].each do |database|
    connection = PG.connect
    connection.exec("CREATE DATABASE #{database}")
    connection = PG.connect(dbname: "#{database}")
    connection.exec("CREATE TABLE spaces (id SERIAL PRIMARY KEY, name VARCHAR(50), address VARCHAR(100), description VARCHAR(500), price VARCHAR(10) );")
  end
end

task :teardown do
  p "Tearing down databases..."

  ["makers_bnb", "makers_bnb_test"].each do |database|
    connection = PG.connect
    connection.exec("DROP DATABASE #{ database };")
  end
end
