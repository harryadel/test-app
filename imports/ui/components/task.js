import React from 'react';

export default function ({ title, hasDescription, commentsCount, customFields, filesCount, timer, status }) {
  return (
    <div className="task">
      <a
        className="task-link"
        href="#"
      >
        <div className="task-link-head">
          <div className="task-checkbox">
            <label className="checkbox">
              <input type="checkbox" defaultChecked={status} />
              <span className="checkbox-toggle">
                <i className="checkbox-icon icon-check" />
              </span>
            </label>
          </div>
          <div className="task-title">
            <p>{title}</p>
          </div>
        </div>
        <div className="task-link-body">
          <div className="indicators">
            {!!hasDescription &&
              (
                <span className="icon-indicator">
                  <i className="icon-description" />
                </span>
              )
            }
            {!!commentsCount &&
              (
                <span className="icon-indicator">
                  <i className="icon-chat" />
                </span>
              )
            }
            {!!filesCount &&
              (
                <span className="icon-indicator">
                  <i className="icon-attach" />
                </span>
              )
            }
            {!!timer &&
              (
                <span className="icon-indicator">
                  <i className="icon-timer" />
                </span>
              )
            }
          </div>
          <div className="custom-fields">
            {customFields && customFields.map(({ _id, value }) => (
              <div key={_id} className="custom-field custom-field-single">
                <p className="color-light has-color-tag">
                  <span className="field-background" />
                  <span className="field-title">{value}</span>
                </p>
              </div>
            ))
            }
          </div>
        </div>
      </a>
    </div>
  )
}