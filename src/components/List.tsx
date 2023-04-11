import arr from '../../poems.json'

export default function List () {
    return <ul className = 'grid grid-cols-1 mt-3'>
    {arr.map((item, i) => {
      return <li className = 'bg-red-300 my-1' key = {i}>
        <div>
          <div>{item.title}</div>
          <div>{item.synopsis}</div>
        </div>
      </li>
    })}
  </ul>
}