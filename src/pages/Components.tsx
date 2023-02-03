import BigButton from '@/components/BigButton'
import React from 'react'

const Components = () => {
  return (
    <div style={{
      display: 'flex',
      width: "100%",
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column'
    }}>
      <BigButton />
      <button>TEST</button>
    </div>
  )
}

export default Components