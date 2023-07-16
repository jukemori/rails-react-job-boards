puts "cleaning db..."

Board.destroy_all

board = Board.create!(
  name: "June 2023"
)

board2 = Board.create!(
  name: "July 2023"
)

puts "created #{Board.count} board"

jobs = ActiveSupport::JSON.decode(File.read('db/seeds/jobs.json'))

jobs.each do |job|
  board.jobs.create!(job)
end

jobs2 = jobs.dup

jobs2.each do |job|
  board2.jobs.create!(job)
end

puts "created #{Job.count} jobs"
