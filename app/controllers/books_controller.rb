class BooksController < ApplicationController
  def create_books
    section = Section.find(params[:section_id])
    name = params[:title]

    @books = Books.new
    @books.name = title
    @books.save

    section.books << book
    section.save

    render partial: 'create_books', formats: [:js]
  end

  def edit_books
    book = Book.find(params[:id])

    book.name = params[:name]
    book.save
  end

  def delete_books
    book = Book.find(params[:id])
    book.destroy
  end
end
