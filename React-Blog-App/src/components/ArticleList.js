import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList({contents}) {
  return (
    <>
      {
        contents.map(article=>(
          <Link key={article.name} className='article-list-item' to={`/lists/${article.name}`}>
              <h4>{article.title}</h4>
              <p>{article.content[0].substring(0,150)}...</p>
          </Link>
        ))
      }
    </>
  )
}

export default ArticleList