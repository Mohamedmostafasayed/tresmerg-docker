const express =require('express');
const mongoose =require('mongoose');
const redis = require('redis');
const { Client } = require('pg')
//init app
const PORT = process.env.PORT || 4000;
const app =express();




//connect db (mongo)
//conect to postgres
const DB_USER ='root';
const DB_PASSWORD = 'example';
const DB_PORT = 5432;
const DB_HOST = 'postgres';
const URI =`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

const client = new Client({
    connectionString:URI,
  })
  client
  .connect()
 
    .connect(URI)
    .then(() =>console.log('connected to POSTGRES DB'))
    .catch((error) => console.log('faild to connect to POSTGRES DB:',error));


//connect to rediس
//const REDIS_PORT = 6379;//
//const REDIS_HOST = 'redis'
//const redisClient = redis.createClient({
    //url: `redis://${REDIS_HOST}:${REDIS_PORT}`
//});
//client.on('error', (err) => console.log('Redis Client Error', err));//
//client.on('connect', () => console.log('connected to redis' ));//
//redisClient.connect();//


//const URI =`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
//mongoose
    //.connect(URI)
    //.then(() =>console.log('connected to DB'))
    //.catch((error) => console.log('faild to connect:',error));
 app.get ('/',(_req, res) => res.send ('<h1>Hello mohamed mostafa sayed mm  <h1>'))
 app.listen (PORT , ()=>console.log(`app is up and running on port ${PORT}`))
 