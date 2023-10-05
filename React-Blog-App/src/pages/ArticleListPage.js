import React from 'react'
import contents from './contents'
import ArticleList from '../components/ArticleList'

function ArticleListPage() {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList contents={contents}/>
    </>
  )
}

export default ArticleListPage