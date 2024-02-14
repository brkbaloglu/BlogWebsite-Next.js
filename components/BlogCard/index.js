import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

function BlogCard({ id, title, body }) {
  return (
    <Link href={`/${id}`} className={styles.blogCardLink}>
        <div > 
          <h3 className={styles.blogCardTitle}>{title}</h3>
          <p className={styles.blogCardBody}>{body}</p>
        </div>
    </Link>
  )
}

export default BlogCard