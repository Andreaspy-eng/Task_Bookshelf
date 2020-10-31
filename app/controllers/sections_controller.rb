class SectionsController < ApplicationController
  def index
    @sections = Section.all 
  end

  def create_sections
    name = params[:title]

    @section = Sections.new
    @section.name = title
    @section.save

    section = Section.find(params[:section_id])
  end

  def edit_sections
    section = Section.find(params[:id])

    section.name = params[:name]
    section.save
  end

  def delete_sections
    section = Section.find(params[:id])
    section.destroy
  end
end
