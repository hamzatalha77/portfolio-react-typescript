import React from 'react'

interface Props {
  children: JSX.Element
  width?: 'fit-content' | '100%'
}
const Reveal = ({ children, width = 'fit-content' }: Props) => {
  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }}>
      <div>{children}</div>
    </div>
  )
}

export default Reveal
