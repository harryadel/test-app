import React, { useEffect, useState } from 'react';
import Task from './components/task'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Meteor.call('tasks.get', (err, retrievedTasks) => {
      setTasks(retrievedTasks);
    })
  }, [])

  return (
    <>
      <div className="app-mainmenu">
        <div className="container">
          <div className="menu-list">
            <a className="list-item active" href="#">
              <i className="item-icon icon-check" />
              <p>Tasks</p>
            </a>
            <a className="list-item" href="#">
              <i className="item-icon icon-toolkit" />
              <p>Projects</p>
            </a>
            <a className="list-item" href="#">
              <i className="item-icon icon-user" />
              <p>People</p>
            </a>
            <a className="list-item" href="#">
              <i className="item-icon icon-calendar" />
              <p>Calendar</p>
            </a>
            <a className="list-item" href="#">
              <i className="item-icon icon-inbox" />
              <p>Inbox</p>
            </a>
            <a className="list-item" href="#">
              <i className="item-icon icon-timer" />
              <p>Timesheets</p>
            </a>
            <hr />
            <a className="list-item" href="#">
              <i className="item-icon icon-settings" />
              <p>Settings</p>
            </a>
            <a className="list-item" onClick={() => console.log('support')}>
              <i className="item-icon icon-question-mark" />
              <p>Support</p>
            </a>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page-header">
          <div className="content has-back-button">
            <div className="back-button">
              <a>
                <i className="icon-chevron-left" />
              </a>
            </div>
            <div className="content-block">
              <div className="page-title">
                <h1>Tasks</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="main-tasks-page content list-view">
          <form className="add-task" noValidate="" onSubmit={(e) => {
            e.preventDefault();
            Meteor.call('tasks.create', ({ title: e.target[0].value }), () => {
              Meteor.call('tasks.get', (err, retrievedTasks) => {
                setTasks(retrievedTasks);
              })
            })
          }}>
            <div>
              <div className="fieldset add-task-input fieldset-stripped">
                <div className="fieldset-content">
                  <label className="fieldset-label">
                    <span className="fieldset-label-content has-icon">
                      <i className="icon-plus" />
                    </span>
                    <input
                      name="title"
                      placeholder="Add new task"
                      type="text"
                      autoComplete="off"

                    />
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div className="groups-wrapper">
            <div className="group-container open">
              <div className="group-head">
                <p>Incomplete</p>
              </div>
              <div className="group-content">
                {tasks && tasks.filter(task => task.status === 'incomplete').map(({ _id, title, hasDescription, commentsCount, filesCount, customFields }) => {
                  return <Task key={_id} title={title} hasDescription={hasDescription} commentsCount={commentsCount} filesCount={filesCount} customFields={customFields} />
                })}
              </div>
            </div>
            <div className="group-container open">
              <div className="group-head">
                <p>Completed</p>
              </div>
              <div className="group-content">
                {tasks && tasks.filter(task => task.status === 'completed').map(({ _id, title, hasDescription, commentsCount, filesCount, customFields, status }) => {
                  return <Task key={_id} title={title} hasDescription={hasDescription} commentsCount={commentsCount} filesCount={filesCount} status customFields={customFields} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
