class Note < ApplicationRecord
  validates :body, presence: true
  # Validación para evitar títulos duplicados
  validates :title, presence: true, uniqueness: { message: "A note with this title already exists." }

  def self.search_by_title_and_body(keywords)
    keywords.split.reduce(self) do |acc, word|
      acc.where("title LIKE ? ESCAPE '\\' OR body LIKE ? ESCAPE '\\'", 
      "%#{escape_sql_pattern(word)}%", "%#{escape_sql_pattern(word)}%")#Busqueda por título y cuerpo
    end
  end

  private

  def self.escape_sql_pattern(pattern)
    pattern.gsub(/[%_\\]/, '\\\\\\&')
  end
end
