import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { Avatar, List } from 'antd'

function ConversationContent({ username }) {
  const [conversations, setconversations] = useState([])

  useEffect(() => {
    onValue(ref(db, 'conversations'), (snap) => {
      if (snap.val()) {
        const items = []

        snap.forEach((item) => {
          items.push({
            key: item.key,
            ...item.val(),
          })
        })

        setconversations(items)
      }
    })
  }, [])

  const renderConversationItem = (item) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar>{item.from.substring(0, 1)}</Avatar>}
        title={item.content}
      />
    </List.Item>
  )

  return (
    <div>
      {conversations.length > 0 ? (
        <>
          <List
            dataSource={conversations}
            renderItem={(item) => renderConversationItem(item)}
          />
        </>
      ) : null}
    </div>
  )
}

export default ConversationContent
