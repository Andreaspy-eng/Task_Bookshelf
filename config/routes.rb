Rails.application.routes.draw do
  root 'sections#index', as: 'home'

  resources :books
  resources :sections
  post '/sections', to: 'sections#create_sections'
  post '/books', to: 'books#create_books'
  post '/showCreateBooksPopup', to: 'books#create_books'
  #get 'sections/index'
  #get 'books/index'
  #get "/books", to: "books#create_books"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
