class Section
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  
  belongs_to :parent_section, class_name: 'Section', inverse_of: :child_sections, optional: true
  has_many :child_sections, class_name: 'Section', inverse_of: :parent_section

  has_many :books, class_name: 'Book', inverse_of: :section
end
