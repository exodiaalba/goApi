import React from 'react'
import {Card} from "react-bootstrap"
function cardo({users}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/10096083/pexels-photo-10096083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
  <Card.Body>
    <Card.Title>{users.id} {users.name}{users.street} {users.email}{users.suite} {users.city} {users.zipcode} </Card.Title>
    <Card.Text>
     
    </Card.Text>
   
  </Card.Body>


</Card>
    </div>
  )
}

export default cardo
