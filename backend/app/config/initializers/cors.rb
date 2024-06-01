Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # すべてのオリジンからのアクセスを許可する
    # origins 'https://example.com' # 特定のオリジンからのアクセスを許可する
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
  end
end
