import React from 'react'

export default function AuthForm() {
const submitHelper = (e) => {
e.preventDefault()
}

    return (
    <div>
        <form onSubmit={submitHelper}></form>
    </div>
  )
}
