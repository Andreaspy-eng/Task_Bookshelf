class Book
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String

  belongs_to :section, class_name: 'Section', inverse_of: :books
end
