import React from "react";
import "./Main2.css"

const List = () =>{
    return (
        <div className="box2">
            <i class="fa-regular fa-lightbulb"></i>
            <h1>6 Suggestions</h1>
            <a href="#" className="a1"><span>Sort by:</span>
            <span className="span1">Most Upvotes</span>
            <i class="fa-solid fa-caret-up"></i></a>
            <div className="box3">+ Add Feedback</div>
        </div>
    )
}

export default List