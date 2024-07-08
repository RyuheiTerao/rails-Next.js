module Mutations
  class DeleteUser < BaseMutation
    argument :id, ID, required: true

    field :id, ID, null: true
    field :errors, [String], null: false

    def resolve(id:)
      user = User.find_by(id: id)
      if user&.destroy
        {
          id: id,
          errors: []
        }
      else
        {
          id: nil,
          errors: user ? user.errors.full_messages : ["User not found"]
        }
      end
    end
  end
end
