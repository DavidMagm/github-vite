import { useState } from 'react'
import { TableRepository } from './TableRepository'
import './App.css'

function App() {

  const [textSearch, setTextSearch] = useState("");
  const [dataReposUser, setDataReposUser] = useState([]);
  const [filterRepository, setFilterRepository] = useState("");
  const [error, setError] = useState(false);

  async function infoUser() {
    const rolName = document.querySelector(".rol-name")

    if(textSearch == "") {
      return alert("Pon un valor")
    }

    const res = await fetch(`https://api.github.com/users/${textSearch}/repos`)
    if(res.status === 200) {
      const data = await res.json()
      setError(false)
      setDataReposUser(data) 
      rolName.textContent = textSearch 
    } else {
      setError(true)
      setDataReposUser([])
      rolName.textContent = 'El nombre no existe'
    }
    
  };
  
  let filterNameRepository = dataReposUser.filter(data => {
    let nameRepository = data.name.toLowerCase() 
    let searchNameRepository = filterRepository.toLowerCase()
    return nameRepository.includes(searchNameRepository)
  } 
  )  

  return (
    <>
     <section className='container-section user-name'>
      <div className='container-rol-name'>
        <h2 className='rol-name'></h2>
      </div>
      <div className='form-search-user'>
        <input className='value-name' type="text" onChange={(e) => setTextSearch(e.target.value)}/>
        <button onClick={infoUser}>Search</button>
      </div>
     </section>
     <section className='container-section filter-repository'>
      <div className='search-filter'>
        <input className='value-search-repository' type="text" onChange={(e) => setFilterRepository(e.target.value)}/>
      </div>
     </section>
     <section className='container-table-repository'>
      {error && <p>El nombre no existe</p>}
        <div className='table-repository'>
          {filterNameRepository.map((data, index) => (
          <TableRepository key={index} nameRepository={data.name} descriptionRepository={data.description} languageRepository={data.language}></TableRepository>
          ))}
        </div>
     </section>
    </>
  )
}

export default App
