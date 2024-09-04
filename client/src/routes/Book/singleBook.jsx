import React, {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import { FaAngleDoubleLeft } from "react-icons/fa"
import { MdEdit } from "react-icons/md";

function singleBook() {
    const [data, setData] = useState([]);
    const urlSlug = useParams();
    const baseUrl = `http://localhost:8000/api/books/${urlSlug.slug}`; // kumpulan data books API berdasarkan params slug

    useEffect(() => {
        const fetchData = async() => {
          try {
              const response = await fetch(baseUrl); // ngambil data yang ada di baseUrl API
           if(!response.ok) {
              throw new ("Failed to fetch data.");
           }   
           // mengubah response menjadi json
           const jsonData = await response.json()
           setData(jsonData);
          } catch (error) {
              console.log(error)
          }
        }
        fetchData();
      },[]) // ini harus dikasih ,[] jika tidak maka ia akan terus mengambil data, dan makin byk permintaan
  
      function StarRating({numberofStars} ) {
        const stars = [];
        for (let i = 0; i < numberofStars; i++ ) {
            stars.push(<span key={i}>⭐</span>)
        }
        return <div>Rating: {stars}</div>
      }

  return (

<div>
    <Link to={"/books"}><FaAngleDoubleLeft />Back To Books</Link>    
    
    <div className="bookdetails">
        <div className="col-1">
    <img src={`http://localhost:8000/uploads/${data.thumbnail}`} alt={`${data.title}`}/>
    <Link to={`/editbook/${data.slug}`}><MdEdit />Edit</Link>
    </div>
        <div className="col-2">
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
        <StarRating numberofStars={data?.stars}/>
        <p>Category</p>
        <ul>
            {data?.category?.map((item, index) => (
                <li key = {index}>{item}</li>
            ))}
        </ul>
    </div>
        </div>

</div>



  )
}

export default singleBook