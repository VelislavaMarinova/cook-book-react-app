import useFetch from "../hooks/useFetch";

const Home = () => {
const url = 'http://localhost:3200/recipes?_limit=3&_sort=id&_order=desc'
   const{data}= useFetch(url);
   console.log(data);
    return (
        <div >
            <h1 >Latest added recipes...</h1>
            <ul>{data.map(r=><li key={r.id}>{r.title}</li>)}</ul>
        </div>
    )
}

export default Home;