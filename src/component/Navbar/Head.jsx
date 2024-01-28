import React from "react";
import "./Navbar.css"

const Head = () => {
    return(
        <>
           <section className="head">
                <div className="container_head d-flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label>+88121 342 5443</label>

                        <i className="fa fa-envelope"></i>
                        <label>youremail@.com</label>
                    </div>
                    <div className="right row RText">
                        <label>Theme FAQ's</label>
                        <label>Need Helps</label>
                        <span>📃</span>
                        <label>ENG</label>
                        <span>👩‍💻</span>
                        <label>USD</label>

                    </div>
                </div>
            </section> 
        </>
    )
}
export default Head;