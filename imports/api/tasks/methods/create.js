// TODO: tasks create method
import SimpleSchema from 'simpl-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Tasks } from '../model/schema'

export const getTasks = new ValidatedMethod({
  name: 'tasks.create',
  validate: new SimpleSchema({
    title: { type: String, },
    dueDate: {
      type: Date,
      optional: true
    },
    status: { type: String, optional: true, defaultValue: 'incomplete' },
    color: { type: String, optional: true },
    customFields: {
      type: Array,
      optional: true
    },
    'customFields.$': Object,
    'customFields.$.id': String,
    'customFields.$.value': String
  }).validator(),
  run({ title, dueDate, status, color, customFields }) {
    return Tasks.insert({ title, dueDate, status, color, customFields });
  }
})
