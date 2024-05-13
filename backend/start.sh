#!/bin/sh

# RAILS_ENV 環境変数が定義されている場合のみ、条件分岐を実行する
if [ -n "${RAILS_ENV}" ] && [ "${RAILS_ENV}" = "production" ]; then
    bundle exec rails assets:precompile
    bundle exec rails assets:clean
    bundle exec rails db:migrate:reset
    bundle exec rails db:seed
fi

bundle exec rails s -p ${PORT:-3000} -b 0.0.0.0
