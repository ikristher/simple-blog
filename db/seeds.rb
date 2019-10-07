# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Article.delete_all
10.times do
  Article.create!(
      {
          title: Faker::ChuckNorris.fact,
          content: Faker::Lorem.paragraph(sentence_count: 20)
      }
  )

end