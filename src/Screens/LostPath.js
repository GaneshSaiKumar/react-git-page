import React from 'react';
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

export const LostPath = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        style={{
          fontSize: '10vvh',
          width: '100%',
          textAlign: 'center',
          paddingTop: '5%',
          fontWeight: 'bold'
        }}
      >
        404
        </div>
      <div
        style={{
          fontSize: '5vmin',
          width: '80%',
          margin: '5% 10% 5% 10%',
          textAlign: 'center',
        }}
      >
        You seem to be lost.
        </div>
      <Link to="/home">
        <button
          style={{
            backgroundColor: 'red',
            height: '10px',
            width: '80%',
            margin: '5% 10% 5% 10%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0,
            fontOpticalSizing: 'initial',
            fontSize: '5vmin',
          }}
        >Go Home</button>
      </Link>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, the server is wrong."
        extra={<Button type="primary">Back Home</Button>}
      />,
    </div>
  )
}
