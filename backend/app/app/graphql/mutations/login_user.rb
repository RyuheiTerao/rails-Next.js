module Mutations
  class LoginUser < BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true

    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    def resolve(email:, password:)
      user = User.find_by(email: email)
      if user &.authenticate(password)
        # reset_session
        context[:session][:user_id] = user.id
        {
          user: user,
          errors: []
        }
      else
        {
          user: nil,
          errors: 'user.errors.full_messages'
        }
      end
    end
  end
end
