# frozen_string_literal: true

class VotesController < ApplicationController
  before_action :check_user_logged_in

  private

  def check_user_logged_in
    return if user_signed_in?

    redirect_to new_user_session_path
  end
end
