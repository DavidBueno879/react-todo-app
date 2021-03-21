import React from "react"

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "300",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#248fe6",
          //textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        To Do List
      </h1>
    </header>
  )
}

export default Header