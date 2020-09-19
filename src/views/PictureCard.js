import React from 'react'
import {Link} from 'react-router-dom'

function PictureCard(props) {
    return (
        <div>
            <div className="mb-3 "  >
            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={props.pic.avatar} alt={props.pic.name}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.pic.name}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <Link to={`/pic/${props.pic.id}`}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View Picture
</button></Link>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
  </div>
  </div>
        </div>
    )
}

export default PictureCard
