import React from 'react'
import styled from 'styled-components';
import data from './data';

const Cards = () => {
  return (
    <>
    <Card>
    <div className="card-container">
        <div className="single-card">
            {data.map((user)=>(
                <div className="user">                    
                    <p className='title'>{user.title}</p>
                    <p className='description'>{user.description}</p>
                    <img src={user.image} alt='pic' className='image'></img>
                </div>
                
                
            ))}
        </div>
    </div>
    </Card>
    </>
  )
}
const Card= styled.section`
    .image{
        margin-top: 10px;
        height: 130px;
        width:auto;
        border-radius: 0px 0px 10px 10px;
    }
    .user{
        background-color: #ffff;
        border: 1px transparent;
        border-radius: 10px;
        margin-left: 40px;
        margin-top: 20px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);


        
    }
    .user:hover {
  box-shadow: 0 4px 8px 0 rgba(97, 79, 79, 0.22), 0 6px 20px 0 rgba(150, 120, 120, 0.119);
  transform: scale(1.03,1.03);
}
    .single-card{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .title{
        text-align: center;
        
    }
    .description{
        text-align: center;
    }
`;

export default Cards;