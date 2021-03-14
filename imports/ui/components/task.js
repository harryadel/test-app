import React from 'react';

export default function ({ name, hasDescription, commentsCount, highest, filesCount, timer, completed }) {
  return (
    <div className="task">
      <a
        className="task-link"
        href="#"
      >
        <div className="task-link-head">
          <div className="task-checkbox">
            <label className="checkbox">
              <input type="checkbox" defaultChecked={completed} />
              <span className="checkbox-toggle">
                <i className="checkbox-icon icon-check" />
              </span>
            </label>
          </div>
          <div className="task-title">
            <p>{name}</p>
          </div>
        </div>
        <div className="task-link-body">
          <div className="indicators">
            {hasDescription &&
              (
                <span className="icon-indicator">
                  <i className="icon-description" />
                </span>
              )
            }
            {commentsCount &&
              (
                <span className="icon-indicator">
                  <i className="icon-chat" />
                </span>
              )
            }
            {filesCount &&
              (
                <span className="icon-indicator">
                  <i className="icon-attach" />
                </span>
              )
            }
            {timer &&
              (
                <span className="icon-indicator">
                  <i className="icon-timer" />
                </span>
              )
            }
          </div>
          {highest && (
            <div className="custom-fields">
              <div className="custom-field custom-field-single">
                <p className="color-light has-color-tag">
                  <span className="field-background" />
                  <span className="field-title">Highest</span>
                </p>
              </div>
            </div>
          )
          }
        </div>
      </a>
    </div>
  )
}