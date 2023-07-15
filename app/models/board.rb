class Board < ApplicationRecord
  has_many :jobs, dependent: :destroy
end
