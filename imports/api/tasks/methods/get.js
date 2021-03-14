// TODO: tasks get method
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Tasks } from '../model/schema';


export const getTasks = new ValidatedMethod({
  name: 'tasks.get',
  validate: null,
  run() {
    return Tasks.find({ isPrivate: false }).fetch();
  }
})
