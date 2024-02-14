import React from 'react'
import styles from './styles.module.css'
async function getPost(id){
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    return response.json()
}


async function Page({params}) {

    const {id, title, body} = await getPost(params.id)

  return (
    <div className={styles.post}>
        <h1>{title}</h1>
        <p>{body}</p>
        
    </div>
  )
}

export default Page