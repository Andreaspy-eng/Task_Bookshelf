class SectionsController < ApplicationController
  def index
    @sections = Section.all 
  end

  def create
    name = params[:title]
    # @dest_section = Section.find(params[:section_id])

    @new_section = Section.new
    @new_section.name = name
    @new_section.save

    # @dest_section.child_sections << @new_section
  end

  def edit
    section = Section.find(params[:id])

  end

  def update
    section = Section.find(params[:id])
    name = params[:title]
    render json: { ok: false } unless section && name
    
    section.name = name
    section.save

    render json: { ok: true }
  end

  def destroy
    section = Section.find(params[:id])
    section.destroy
  end

  def show_books
    section = Section.find(params[:section_id])
    @books = section.books

    render partial: 'books', formats: [:js]
  end
end
