FROM ruby:3.0.1-buster

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update -y && \
    apt-get install -y nodejs

RUN npm install --global yarn

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

RUN rails webpacker:install

RUN chmod -R 777 /app/tmp /app/public/assets

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
