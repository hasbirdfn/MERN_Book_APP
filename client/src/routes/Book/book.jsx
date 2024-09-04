import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { IoMdAddCircleOutline } from "react-icons/io";
function Book() {
    const baseUrl = "http://localhost:8000/api/books"; // kumpulan data books API
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // melakukan loading sebelum data diambil / ditampikan
    const [error, setError] = useState(null); // menampilkan pesan error apabila ada kesalahan pada Url API
    const [selectedCategory, setSelectedCategory] = useState("");


    
    useEffect(() => {
      const fetchData = async() => {
        try {
            let url = baseUrl;
            if(selectedCategory) {
              url += `?category=${selectedCategory}`
            }
            const response = await fetch(url); // ngambil data yang ada di baseUrl API

         if(!response.ok) {
            throw new ("Failed to fetch data.");
         }   
         // mengubah response menjadi json
         const jsonData = await response.json()
         setData(jsonData);
         setIsLoading(false);
        } catch (error) {
            console.log(error)
            setIsLoading(false);
            setError("Error fetching data. Please try again later.")
        }
      }
      fetchData();
    },[selectedCategory]) // ini harus dikasih ,[] jika tidak maka ia akan terus mengambil data, dan makin byk permintaan

  return (
    <div>
        <h1>Books</h1>
        <p>This is where we useNodeJs, Express & MongoDB to grab some data. The data below is pulled from a MongoDB database.</p>

        <Link to="/createbook"><IoMdAddCircleOutline />Add New Book</Link>

        <h2>Fetch Example</h2>
    {/*<pre>{JSON.stringify(data,null,2)}</pre>*/}
    

    <div className="filters">
      <label>Categories</label>
      <select onChange={(e) =>setSelectedCategory(e.target.value)}>
        <option value="">All</option>
        <option value="romance">Romance</option>
        <option value="science">Science</option>
        <option value="crime">Crime</option>
        <option value="food">Food</option>
        <option value="adventure">Adventure</option>
        <option value="thriller">Thriller</option>
        <option value="fiction">Fiction</option>
        <option value="other">Other</option>
      </select>
    </div>



    {isLoading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
    <ul className="books">
        {data.map((item) =>(
            <li key={item._id}>
               <Link to={`/books/${item.slug}`}>
               <img src={`http://localhost:8000/uploads/${item.thumbnail}`} alt={item.title}/>
               <h3>{item.title}</h3>
               </Link>
            </li>   
        ))}
    </ul>
  )}

    </div>
  )
}

export default Book