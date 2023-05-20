import { Inter } from 'next/font/google'
import { Card, Input, message } from 'antd'
import { useState } from 'react'
import { push, ref } from 'firebase/database'
import { db } from '../src/firebase/firebaseConfig'
import ConversationContent from '@/src/components/ConversationContent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')

  // Send message to database
  const handleSendMessage = () => {
    if (!username || !content) {
      message.error('Vui lòng nhập tên của bạn và nội dung cần gửi')
    }

    const data = {
      content,
      from: username,
      to: 'uid to',
      createdAt: Date.now(),
      user1: username,
      user2: 'uid',
    }

    push(ref(db, 'conversations'), data).then(() => {
      setContent('')
      console.log('OK')
    })
  }

  return (
    <div className="container mt-4">
      <div className="col-8 offset-2">
        <Card
          title={
            <Input
              placeholder="Username"
              value={username}
              onChange={(val) => setUsername(val.target.value)}
              style={{
                width: 250,
              }}
              allowClear
            />
          }
          actions={[
            <div style={{ padding: 12 }}>
              <Input
                onPressEnter={handleSendMessage}
                size="large"
                placeholder="Message"
                value={content}
                onChange={(val) => setContent(val.target.value)}
                maxLength={100}
                allowClear
              />
            </div>,
          ]}
        >
          <ConversationContent username={username} />
        </Card>
      </div>
    </div>
  )
}
