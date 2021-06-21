import React from "react";
import profileImage from "../assets/pizza.jpg";

let Feed = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-xl-6 m-auto">
            <div className="card">
              <div className="card-header">
                <p className="h5">
                  Akshaya Sundarajan <span className="text-muted">likes this</span>
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
                      Akhil Rawat . <span className="text-muted">3rd+</span>
                    </p>
                    <p className="text-muted small">Senior Test Engineer at Alternative Path</p>
                    <p className="text-muted  globe">
                      4d .{" "}
                      <span>
                        <i className="fa fa-globe"></i>
                      </span>
                    </p>
                    <div>
                      <img src={profileImage} alt="" className="img-fluid h-50 w-100" />
                    </div>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perspiciatis
                      rem libero deleniti? Inventore at fuga magni quas tempora consequuntur!
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
      </div>
    </React.Fragment>
  );
};
export default Feed;
