import React, { Component } from 'react';

function Book(props) {
  return React.createElement (
    'div',
    null,
    [
      React.createElement(
        'h1',
        null,
        `책 이름 : ${props.name} `
      ),
      React.createElement(
        'h1',
        null,
        `총 ${props.numOfPage}페이지`
      )
    ]
  )
}

export default Book;