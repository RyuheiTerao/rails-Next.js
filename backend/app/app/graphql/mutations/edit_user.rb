module Mutations
  class EditUser < BaseMutation
    argument :id, ID, required: true
    argument :name, String, required: true
    argument :email, String, required: true

    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    def resolve(id:, name:, email:)
      user = User.find_by(id: id)
      if user&.update(name: name, email: email)
        {
          user: user,
          errors: []
        }
      else
        {
          user: nil,
          errors: user ? user.errors.full_messages : ["User not found"]
        }
      end
    end
  end
end
