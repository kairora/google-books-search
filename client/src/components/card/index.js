import React from "react";


export default (props) => {

  return (
    <>
      <div className="card" style={{ height: "100vh" }}>
        <div className="card-body">
          {props.children}
        </div>
      </div>
    </>
  )
}

