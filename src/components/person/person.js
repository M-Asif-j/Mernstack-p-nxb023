import "./person.css";

export default function Person() {
  return (
    <div  className="maindiv">
        <div className="title">Language Loge Test for Programmers
        </div>

        <div>

                <img  src="logo512.png" alt="react" class="logo"/>        
        </div>
        <div className="question">   <h1>Which type of language logo is ?</h1>
        </div>
        <div className="button" >            
                <button type="button" className="btn btn-primary">python </button>
                <button type="button" class="btn btn-secondary">react.js</button>
                <button type="button" class="btn btn-success">html</button>
        </div>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar w-75"></div>
        </div>
        
 
</div>




      




  );}
