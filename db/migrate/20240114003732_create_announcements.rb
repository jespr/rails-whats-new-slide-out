class CreateAnnouncements < ActiveRecord::Migration[7.1]
  def change
    create_table :announcements do |t|
      t.string :title
      t.string :announcement_type

      t.timestamps
    end
  end
end
