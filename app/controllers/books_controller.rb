class BooksController < ApplicationController
  def index
    @books = Book.all 
  end

  def create
    section = Section.find(params[:section_id])
    name = params[:title]

    @book = section.books.create!(name: name, section_id: section.id)
    # @book.name = name
    # @book.section_id = section.id
    # @book.save!

    render partial: 'create_books', formats: [:js]
  end

  def edit
    book = Book.find(params[:id])

    book.name = params[:name]
    book.save
  end

  def destroy
    book = Book.find(params[:id])
    book.destroy
  end
end
