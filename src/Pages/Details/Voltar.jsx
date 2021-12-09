import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import './Voltar.css';

const Voltar = () => {
  const navigation = useNavigate();

  return (
    <Button onClick={() => navigation('../')}>
      <Link to="./"> Voltar </Link>
    </Button>
  );
};

export default Voltar;
