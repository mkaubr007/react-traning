const Sidebar = () => {
    return (
        <div className="card" style={{width: "30rem", height: "65rem"}}>
        <img src="https://media.istockphoto.com/id/677612532/photo/smiling-man.jpg?s=612x612&w=0&k=20&c=nhaghWCrm-DTFnAGIXCeahfzOX7bUT_cJxoKKUJ50yU=" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Description</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Youtuber</li>
          <li className="list-group-item">Coder</li>
          <li className="list-group-item">Social-Worker</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">LinkedIn link</a>
          <a href="#" className="card-link">Facebook link</a>
        </div>
      </div>
    )
}
export default Sidebar;