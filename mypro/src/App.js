import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import me from "./me.jpg"
import video from "./lions.mp4"


function App() {
  return (
    <div style={{border:"solid 1px black",maxWidth:"100vw"}} >
<h1 className="title red">jacem</h1>

<br >
</br>

<img className="img" src={me}/>

<br >
</br>

<img className="img" src="/mes.jpg" />



<video width="320" height="240" controls >

<source src={video} type="video/mp4" ></source>
</video>
</div>
  
  
  ); 
}


export default App;
