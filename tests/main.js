
import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';

import { Tasks } from '/imports/api/tasks/model/schema';

if (Meteor.isServer) {
  describe('tasks', function () {
    const privateTask = {
      "_id": "Xt2dD4mwv2ookDqDE",
      "title": "Task1",
      "hasDescription": true,
      "commentsCount": 2,
      "color": "#4e42c3",
      "status": "incomplete",
      "createdAt": "2021-03-14T11:35:33.395Z",
      "isPrivate": true,
      "totalTimeTracked": 0,
      "filesCount": 0,
      "repeat": {},
      "customFields": []
    }

    const nonPrivateTask = {
      "_id": "HoK5ZmaKuqgGxYd3e",
      "title": "Task7",
      "status": "completed",
      "isPrivate": false,
      "createdAt": "2021-03-14T11:35:33.461Z",
      "totalTimeTracked": 0,
      "commentsCount": 0,
      "filesCount": 0,
      "hasDescription": false,
      "repeat": {},
      "customFields": []
    }

    beforeEach(function () {
      Tasks.remove({});
      Tasks.insert(privateTask);
      Tasks.insert(nonPrivateTask);
    });

    it('should insert new task', function () {
      let title = 'new task'
      const _id = Meteor.server.method_handlers['tasks.create'].apply({}, [{ title }]);

      expect(Tasks.findOne({ _id, title })).to.not.be.empty;
    });


    it('should return tasks', function () {
      const tasks = Meteor.server.method_handlers['tasks.get'].apply({});

      expect(tasks.length).to.equal(1);
      expect(tasks[0]).to.eql(nonPrivateTask);
    });

  });
}