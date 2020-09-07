import property from 'ember-addons/ember-computed-decorators';
import User from 'discourse/models/user';
import discourseComputed from "discourse-common/utils/decorators";

export default {
  name: 'extend-users-for-anonymous',
  before: 'inject-discourse-objects',
  initialize() {

    User.reopen({

      @discourseComputed('user.master_user')
      masterUser(master_user) {
        return User.create(master_user);
      }

    });
  }
};
