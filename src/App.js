
import './App.css';
import {useGetAllPostQuery, useGetPostByIdQuery} from './Service/UserPost'
function App() {
 
    //const postdata= useGetAllPostQuery()
    const postbyid= useGetPostByIdQuery(5)

    // if (postdata.isLoading) return <div>Loading....</div>
    // if (postdata.isError) return <h1>An error occured {postdata.error.error}</h1>
    console.log(postbyid)
    if (postbyid.isLoading) return <div>Loading....</div>
  return (
    <div className="App">
     
      {/* {
      postdata.data.map((post,i) =>
        <div  key={i}>
        <h5>{post.id} {post.title}</h5>
        <hr/>
        </div>
       )
     } 
     */}

<h2>{postbyid.data.id} {postbyid.data.title}</h2>     
    </div>
  );
}

export default App;
