import { default as computed } from "ember-addons/ember-computed-decorators";
import { userPath } from "discourse/lib/url";

export default Ember.Component.extend({
  realUsername(username) {
    return ajax(`/admin/users/${this.username}/`, { type: "GET" }).then((topic_json) =>
      this.updateFromJson(topic_json)
    );
  }
});
