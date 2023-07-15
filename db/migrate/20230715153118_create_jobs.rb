class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :title
      t.text :url
      t.text :note
      t.references :board, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
