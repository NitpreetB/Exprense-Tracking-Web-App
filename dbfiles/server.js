const express = require('express'),
    dbOperation = require('./dbOperation')

  



dbOperation.getTransaction().then(res => {
    console.log(res);
})