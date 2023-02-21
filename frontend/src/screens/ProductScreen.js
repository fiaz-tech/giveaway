import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

import { listProductDetails,
         createProductClaimer,
       } from '../actions/productAction'

import { PRODUCT_CREATE_CLAIMER_RESET } from '../constants/productConstants';
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = () => {

  const{ id } = useParams();
  
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  const productClaimerCreate = useSelector((state) => state.productClaimerCreate)
  const {
    success: successProductClaimer,
    loading: loadingProductClaimer,
    error: errorProductClaimer,
  } = productClaimerCreate


  useEffect(() => {
    if (userInfo) {
      console.log('user')
    }
    if (!product._id || product._id !== id) {
      dispatch(listProductDetails(id))
      dispatch({ type: PRODUCT_CREATE_CLAIMER_RESET })
    }
  }, [dispatch, successProductClaimer, product._id, id, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductClaimer(id)
    )
  }

  


  return (
    <>
      <Link to='/products' className='btn btn-light my-3' >
        Go Back
      </Link>

      {loading ? (
      <Loader/> 
      ): error ? ( 
      <Message variant= 'danger'>{error}</Message> 
      ): (
        <> 
        <Row>
          
          <Col md={6} >
            <Image src={product.image} alt={product.name} fluid />
</Col>

<Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
               Brand: {product.brand}
              </ListGroup.Item>

              <ListGroup.Item>
               Category: {product.category}
              </ListGroup.Item>

              <ListGroup.Item>
                Sponsor: {product.sponsor}
              </ListGroup.Item>

              <ListGroup.Item>
                <h3>Product details</h3>
                <p>{product.description}</p>
              </ListGroup.Item>

              <ListGroup.Item>
                Claimers: {product.claimers}
              </ListGroup.Item>
              
        </ListGroup>
      </Col>
    </Row>

    <Row>
      <Col md={6}>

      <h2>Claimers</h2>
             
              <ListGroup variant='flush'>
                
                <ListGroup.Item>
                  <h2>Click the button to claim the Gift</h2>
                  {successProductClaimer && (
                    <Message variant='success'>
                      Claim submitted successfully
                    </Message>
                  )}
                  {loadingProductClaimer && <Loader />}
                  {errorProductClaimer && (
                    <Message variant='danger'>{errorProductClaimer}</Message>
                  )}

                  {userInfo ? (
                    <Button onClick={submitHandler}>
                          Claim it
                    </Button>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>


      </Col>

    </Row>

    </>
      )

    }
    </>
  )
}

export default ProductScreen

