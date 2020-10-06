import React from "react";


export default () => {

    return (
        <>
            <div>
                <form style={{display: "inline-flex"}}>
                    <div className="form-group">
                        <input type="search" id="formSearch" placeholder="Search a book" style={{marginTop: "5px", width: "500px"}} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginLeft: "15px", marginBottom: "15px"}}>Submit</button>
                </form>
            </div>
        </>
    )
}