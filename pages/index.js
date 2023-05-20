import { Inter } from 'next/font/google'
import { Card, Input, Space } from 'antd'
import { push, ref } from 'firebase/database'
import { useState } from 'react'
import { db } from '@/src/firebase/firebaseConfig'
import MessageContent from '@/src/components/MessageContent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')

  const handleSendMessage = () => {
    const data = {
      content,
      user1: username,
      user2: 'user2',
      createdBy: username,
      date: Date.now(),
    }

    push(ref(db, `conversations`), data).then(() => {
      console.log('OK')
      setContent('')
    })
  }

  return (
    <div className="container mt-4">
      <div className="col-8 offset-2">
        <Card
          title={
            <Input
              width={250}
              placeholder="Customer"
              value={username}
              allowClear
              onChange={(val) => setUsername(val.target.value)}
            />
          }
          actions={[
            <div style={{ padding: '0 10px' }}>
              <Input
                onPressEnter={() => handleSendMessage()}
                style={{ padding: 10 }}
                placeholder="Message"
                value={content}
                onChange={(val) => setContent(val.target.value)}
              />
            </div>,
          ]}
        >
          <MessageContent username={username} />
        </Card>
      </div>
    </div>
  )
}
