require 'pg'
if ENV['RACK_ENV'] != 'production'
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new :spec

  task default: [:spec]
end

task :test_database_setup do
  p 'Setting up test database...'
  connection = PG.connect(dbname: 'makersBNB_test')
  connection.exec("TRUNCATE spaces")
  connection.exec("INSERT INTO spaces VALUES(1, 'Ocean view villa', '50 Commercial Street, London', 'Clean open space with nice view, pretty expensive though', '550');")
end

task :setup do
  p "Creating databases..."
  ["makersBNB", "makersBNB_test"].each do |database|
    connection = PG.connect
    connection.exec("CREATE DATABASE #{database}")
    connection = PG.connect(dbname: "#{database}")
    connection.exec("CREATE TABLE spaces(id SERIAL PRIMARY KEY, text VARCHAR(50), text VARCHAR(100), text VARCHAR(500), text INT(10));")
  end
end

task :teardown do
  p "Tearing down databases..."

  ["makersBNB", "makersBNB_test"].each do |database|
    connection = PG.connect
    connection.exec("DROP DATABASE #{ database };")
  end
end
