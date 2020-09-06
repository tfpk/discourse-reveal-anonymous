# frozen_string_literal: true

# name: discourse-reveal-anonymous
# about: Allows moderators to identify who anonymous posters are.
# version: 1.0
# authors: Tom Kunc
# url: https://github.com/discourse/discourse-anonymous-moderators

enabled_site_setting :reveal_anonymous_enabled

register_asset 'stylesheets/anonymous-users.scss'
after_initialize do
 load File.expand_path('../app/controllers/discourse_reveal_anonymous/anonymous_user_controller.rb', __FILE__)
 Discourse::Application.routes.append do
   get '/admin/users/:username/deanonymize.json' => 'anonymous_user#deanonymize', constraints: {username: USERNAME_ROUTE_FORMAT}
 end
  add_to_class(:user, :_become_anonymous_moderator) do
    return DiscourseAnonymousModerators::Manager.acceptable_parent?(self)
  end

  add_to_serializer(:current_user, :is_anonymous_moderator) do
    object.is_anonymous_moderator
  end

end
