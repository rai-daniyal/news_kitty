# frozen_string_literal: true

module Mutations
  class VoteMutation < Mutations::BaseMutation
    argument :post_id, String, required: true

    field :status, Boolean, null: false
    field :errors, String, null: true

    def resolve(post_id:)
      require_current_user!

      vote = Vote.find_by(post_id: post_id, user_id: context[:current_user].id)
      if vote&.destroy!
        { status: false }
      else
        Vote.create!(post_id: post_id, user_id: context[:current_user].id)
        { status: true }
      end
    rescue StandardError => e
      { status: false, errors: e.full_messages.to_sentence }
    end
  end
end
