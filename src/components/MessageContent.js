import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { Avatar, List, Space, Tag } from 'antd'

function MessageContent({ username }) {
  const [messageContent, setMessageContent] = useState([])

  useEffect(() => {
    onValue(ref(db, `conversations`), (snap) => {
      if (snap.val()) {
        const items = []
        snap.forEach((item) => {
          items.push({
            key: item.key,
            ...item.val(),
          })
        })

        setMessageContent(items)
      }
    })
  }, [])

  const renderMessageItem = (item) => (
    <div style={{ padding: '10px 0' }}>
      {item.createdBy === username ? (
        <div>
          <Space>
            <Avatar>{item.createdBy.substring(0, 1)}</Avatar>
            <Tag>{item.content}</Tag>
          </Space>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Space>
            <Tag>{item.content}</Tag>
            <Avatar>{item.createdBy.substring(0, 1)}</Avatar>
          </Space>
        </div>
      )}
    </div>
  )

  return (
    <div style={{ height: 400, overflow: 'scroll' }}>
      {messageContent.length > 0
        ? messageContent.map((item) => renderMessageItem(item))
        : null}
    </div>
  )
}

export default MessageContent
