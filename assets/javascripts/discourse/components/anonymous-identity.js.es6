import { default as computed } from "ember-addons/ember-computed-decorators";
import { userPath } from "discourse/lib/url";

export default Ember.Component.extend({
  @computed("user.master_user")
  masterUser(master_user) {
    return master_user;
  },

  @computed("masterUser")
  username(master_user) {
    return master_user && master_user.username;
  },

  @computed("username")
  link(username) {
    return userPath(username);
  },

  @computed("username")
  shouldDisplay(username) {
    return this.get("siteSettings.reveal_anonymous_enabled") && this.get("currentUser.staff") && username;
  },

  @computed("username")
  dataUserCard(username) {
    return username;
  }
});
