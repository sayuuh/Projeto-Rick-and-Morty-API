import React from 'react'

const Footer = () => {
  const year = new Date()
  return (
    <footer><strong>by Sayumi Hashimoto, {year.getFullYear()}</strong></footer>
  )
}

export default Footer