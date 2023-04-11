import arr from '../../poems.json'

export default function List () {
    return <ul className = 'grid grid-cols-1 md:grid-cols-2 mt-3 md:mt-6 lg:mt-9 xl:mt-12'>
    {arr.map((item, i) => {
      return <li className = 'bg-red-300 mb-1 cursor-pointer md:mb-2 md:mr-2 mr-1 hover:scale-105 transition duration-700 text-white' key = {i}>
        <div className = 'flex flex-col'>
          <div className = 'text-2xl md:text-3xl font-bold ml-5 md:ml-7 mt-5 md:mt-7'>{item.title}</div>
          <div className = 'text-xs md:text-sm lg:text-md px-5 md:px-7 ml-6 pb-10 pt-6'>  {item.synopsis}</div>
        </div>
      </li>
    })}
  </ul>
}