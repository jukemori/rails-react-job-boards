puts "cleaning db..."

Board.destroy_all

board = Board.create!(
  name: "June 2023"
)

puts "created #{Board.count} board"

jobs = ActiveSupport::JSON.decode(File.read('db/seeds/jobs.json'))

jobs.each do |job|
  board.jobs.create!(job)
end

puts "created #{Job.count} jobs"
