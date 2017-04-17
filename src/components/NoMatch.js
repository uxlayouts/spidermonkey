import React from 'react'

const NoMatch = ({ location }) => (
  <div className="container-fluid padding-top-3 padding-bottom-3">
    <h3>Sorry, we could not find: <code>{location.pathname}</code></h3>
  </div>
)

export default NoMatch
