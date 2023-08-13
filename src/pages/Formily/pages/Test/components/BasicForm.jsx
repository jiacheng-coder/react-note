import { Input } from 'antd'
import { useState, useMemo } from 'react'
export default function Form() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const errors = useMemo(() => {
    if ((password !== '' || confirmPassword !== '') && confirmPassword !== password) {
      return true
    } else {
      return false
    }
  }, [password, confirmPassword])
  console.log('errors', errors)
  console.log('password', password)
  console.log('confirmPassword', confirmPassword)
  return (
    <>
      <section>
        <label>Name</label>
        <Input
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
      </section>

      <section>
        <label>Password</label>
        <Input
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
        <span style={{ color: 'red' }}>{errors && '两次输入不一致'}</span>
      </section>

      <section>
        <label>ConfirmPassword</label>
        <Input
          value={confirmPassword}
          onChange={e => {
            setConfirmPassword(e.target.value)
          }}
        />
        <span style={{ color: 'red' }}>{errors && '两次输入不一致'}</span>
      </section>
    </>
  )
}
