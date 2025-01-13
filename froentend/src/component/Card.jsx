// import React from 'react'

export default function Card({item}) {
  const { name, title, category} = item;
  return (
    <div className="dark:bg-slate-900text-white bg-white hover:scale-105 ">
      <div className="dark:bg-slate-900text-white card  w-96 shadow-xl pd-0 bg-whitee">
  <figure >
    <img
      src="https://scholarlykitchen.sspnet.org/wp-content/uploads/2018/07/iStock-506432952.jpg"
      alt="Shoes" />
  </figure>
  <div className="dark:bg-slate-900 dark:text-white card-body">
    <h2 className="card-title">
      {name}
      <div className="badge dark:bg-slate-900text-white badge-secondary">{category}</div>
    </h2>
    <p>{title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Start</div>
      <div className="badge badge-outline">Review</div>
    </div>
  </div>
</div>
    </div>
  )
}
