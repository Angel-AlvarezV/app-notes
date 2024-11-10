class NotesController < ApplicationController
  before_action :set_note, only: %i[ show edit update destroy ]

  def index
    @notes = Note.all
    filters = params[:filters].present? ? params[:filters].to_unsafe_h.symbolize_keys : {}
    if filters && filters[:title].present?
      @notes = @notes.search_by_title_and_body(filters[:title])
    end

    order = filters[:order] || 'newest_to_oldest'

    case order
    when 'newest_to_oldest'
      @notes = @notes.order(created_at: :desc)
    when 'oldest_to_newest'
      @notes = @notes.order(created_at: :asc)
    when 'alphabetical_az'
      @notes = @notes.order(:title)
    when 'alphabetical_za'
      @notes = @notes.order(title: :desc)
    end
      

    # Agrupar las notas por mes
    @notes_by_month = @notes.group_by { |note| note.created_at.strftime("%B") }

    month_order = Date::MONTHNAMES.compact.reverse

    @notes_by_month = @notes_by_month.sort_by { |month, _| month_order.index(month) }.to_h
    
     # Ordenar las notas dentro de cada mes según el criterio
     @notes_by_month.each do |month, notes|
      case order
      when 'newest_to_oldest'
        @notes_by_month[month] = notes.sort_by { |note| note.created_at }.reverse
      when 'oldest_to_newest'
        @notes_by_month[month] = notes.sort_by { |note| note.created_at }
      when 'alphabetical_az'
        @notes_by_month[month] = notes.sort_by { |note| note.title.downcase }
      when 'alphabetical_za'
        @notes_by_month[month] = notes.sort_by { |note| note.title.downcase }.reverse
      end
    end
  end

  def show
  end

  def new
    @note = Note.new
  end

  def edit
  end

  def create
    @note = Note.new(note_params)

    respond_to do |format|
      if @note.save
        format.html { redirect_to notes_url(@note), notice: "Note was successfully created." } #Se cambia note_url a notes_url para redirecccionar al usuario al indice de notas
        format.json { render :show, status: :created, location: @note }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @note.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to note_url(@note), notice: "Note was successfully updated." }
        format.json { render :show, status: :ok, location: @note }
      else
        puts @note.errors.full_messages
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @note.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @note.destroy
    respond_to do |format|
      format.html { redirect_to notes_url, notice: "Note was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :body)
  end
end
