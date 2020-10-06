import React from 'react';

export default (props) => {


    return(
        <>
            <div className='book-card'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h5>{props.title}</h5>
                        <p>Written by {props.authors}</p>
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-style' bookid={props.id} onClick={props.btn1Click}>{props.btn1Text}</button>
                        
                         <button className='btn btn-style' bookid={props.id} onClick={props.btn2Click}>{props.btn2Text}</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <img className='bookImage' alt={props.title} src={props.image} />
                    </div>
                    <div className='col-md-9'>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}