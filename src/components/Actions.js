import React from "react"

class Actions extends React.Component {
  render() {
    return (
        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
    )
  }
}

export default Actions