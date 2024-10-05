import { FaHeart } from 'react-icons/fa';

export default function Displaymovies ({addToFavouraite,favouraite}) {
    return (
        <div className="container-sm">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Genre</th>
              <th scope="col">Bookmark</th>
            </tr>
          </thead>
          <tbody>
            {
              favouraite.map((e,index) => {
                  return (
                    <tr key={e.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{e.movie}</td>
                    <td>{e.genre}</td>
                    <td><FaHeart style={{color:e.isFavouraite?'red':'grey',cursor:'pointer'}} onClick={() => addToFavouraite(e.id)}/></td>
                    </tr>
                  )
              })
            }
          </tbody>
        </table>
        </div>
    )
}