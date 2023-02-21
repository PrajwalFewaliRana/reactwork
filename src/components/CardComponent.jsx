import React from 'react'

const CardComponent = (props) => {
  return (
    <article>
    <figure>
      <img src={props.imgUrl} alt="" />
    </figure>
    <div className="info mt-5">
      <h3 className="title text-2xl font-bold">
        {props.title.length > 25 ? `${props.title.slice(0,25)}...` : `${props.title}`}
      </h3>
      <h3 className='meta'>
        Posted by {props.userId ===1 ? 'Ram' : ''}
        {props.userId ===2 ? 'Sita' : ''}
        {props.userId ===3 ? 'Haeri' : ''}
        {props.userId ===4 ? 'Gita' : ''}
        </h3>
      <p className="text text-slate-500 my-5">
        {props.text.length>110 ? `${props.text.slice(0,110)}...`: `${props.title}`}
      </p>
      <a href={props.link}>
        <button className="bg-white px-5 shadow py-2 rounded">
          {props.btnText}
        </button>
      </a>
    </div>
  </article>
  )
}

export default CardComponent