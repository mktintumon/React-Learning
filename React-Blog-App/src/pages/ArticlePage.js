import React from 'react'
import { useParams } from 'react-router-dom'
import contents from './contents'
import NotFoundPage from './NotFoundPage';

function ArticlePage() {

  const { id } = useParams();
  const article = contents.find(article => article.name === id);

  if(!article){
    return <NotFoundPage/>
  }

  return (
    <>
       <h1>{article.title}</h1>
        {article.content.map((paragraph , idx)=>(
            <p key={idx}>{paragraph}</p>
        ))}
    </>
  )
}

export default ArticlePage