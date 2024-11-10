require 'faker'

# Borrar todas las notas existentes para evitar duplicados en los seeds
Note.destroy_all

# Crea 200 notas con títulos únicos y contenido variado
200.times do
  begin

    # Genera entre 1 y 5 párrafos con entre 3 y 7 oraciones cada uno
    body_content = Array.new(rand(1..5)) { Faker::Lorem.paragraph(sentence_count: rand(3..7)) }.join("\n\n")
    title = Faker::Lorem.words(number: 3).join(" ").capitalize

    # Intenta crear una nota con un título único
    Note.create!(
      title: title,
      body: body_content  # Cuerpo dinamico
    )
  rescue ActiveRecord::RecordInvalid => e
    puts "Error al crear la nota: #{e.message}"
  end
end

puts "200 notas con títulos únicos y contenido dinámico han sido creadas!"
