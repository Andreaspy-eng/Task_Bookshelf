Rails.application.routes.draw do
  root 'sections#index', as: 'home'

  resources :sections
  resources :books
  #post '/sections', to: 'sections#create_sections'
  #post '/books', to: 'books#create_books'
  post '/showCreateBooksPopup', to: 'books#create'
  post '/showCreateSectionsPopup', to: 'sections#create'
  post '/showDeleteSections', to: 'sections#delete'
  post '/showDeleteBooks', to: 'books#delete'
  post '/showEditSectionsPopup', to: 'sections#edit'
  

  
end
