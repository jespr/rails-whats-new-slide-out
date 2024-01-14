json.extract! announcement, :id, :title, :body, :announcement_type, :created_at, :updated_at
json.url announcement_url(announcement, format: :json)
json.body announcement.body.to_s
