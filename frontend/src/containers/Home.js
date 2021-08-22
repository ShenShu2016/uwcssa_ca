import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from '../components/card/Card'

const Home = () => (
    <>
      <h1 className="home">Home</h1>
      <Card 
      apiAddress='http://127.0.0.1:8000/news/article_list/'
      index='0'
      />
      <Card 
      apiAddress='http://127.0.0.1:8000/news/article_list/'
      index='1'
      />
    </>
);

export default Home;
