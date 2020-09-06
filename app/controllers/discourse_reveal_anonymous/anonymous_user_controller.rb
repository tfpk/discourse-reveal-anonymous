# frozen_string_literal: true

class AnonymousUserController < ::ApplicationController
  before_action :ensure_logged_in
  def deanonymize
    user = fetch_user_from_params(include_inactive: true)

    master_user = AnonymousShadowCreator.get_master(user)
    if master_user
      render json: master_user, serializer: UserCardSerializer
    else
      render json: failed_json
    end
  end
end
