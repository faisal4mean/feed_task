import React from 'react';
import profileImage from "../assets/pizza.jpeg";


const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
  
    <ul>
         
         <div className="explore_header" style={{backgroundImage: 'linear-gradient(to left, rgb(16, 47, 34) 0%, rgb(30, 154, 100) 50%, rgb(39, 144, 99) 100%), url("https://sadaqahmail.s3.us-east-2.amazonaws.com/assets/Pages/Explore/triangles.png")'}}>
    <p className="explore_title">Campaigns Updates</p>
    <p className="explore_subtitle">Donate Now - Help Today</p>
  </div>
      {repos.map((repo) => {
        return (
          // <li key={repo.id} className='list'>
          //   <span className='repo-text'>{repo.name} </span>
          //   <span className='repo-description'>{repo.description}</span>
          // </li>
         
          <div className="row">
            <div className="col-xl-6 m-auto">
              <div className="card">
                <div className="card-header">
                  <p className="h5">
                    300+ <span className="text-muted">likes this</span>
                  </p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 text-right">
                      <img
                        src={profileImage}
                        className="rounded-circle img-fluid"
                        height="400px"
                        width="400px"
                        alt=""
                      />
                    </div>
                    <div className="col md-4 float-left">
                      <p className="h5">
                        Food Compaign 1. <span className="text-muted">30+ donated</span>
                      </p>
                      <p className="text-muted small">Qurbani Udhiyah for Orphans, Widows and Needy in Africa</p>
                      <p className="text-muted  globe">
                       30 min .{" "}
                        <span>
                          <i className="fa fa-globe"></i>
                        </span>
                      </p>
                      <div>
                        <img src={profileImage} alt="" className="img-fluid h-50 w-100" />
                      </div>
                      <p className="lead">
                      Give the gift of Sacrifice and put a smile on the faces of orphans, widows and the needy in Africa.
                      </p>
                      <div className="mt-4">
                        <span>
                          <i className="fas fa-thumbs-up fa-2x text-primary"></i>
                          <i className="fas fa-fist-raised fa-2x text-success m-3"></i>
                          <i className="fas fa-heart fa-2x text-danger"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <span className="ml-2">
                    <i className="fas fa-thumbs-up fa-2x text-primary"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
   
        );
      })}
    </ul>
  );
};
export default List;
