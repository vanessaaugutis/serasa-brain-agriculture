import React from "react";
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './styles.scss'; 
import { useNavigate } from 'react-router-dom';

function ListProducers() {
  const navigate = useNavigate();

  const changeCreate = () => {
    navigate('/create');
  };

  return (
    <div className="list-producers container-geral">
      <div className="container-list">
        <Drawer sx={{
          '& .MuiDrawer-paper': {
            bgcolor: '#378a48', 
            color: '#ffffff',
            cursor: 'pointer'
          },
        }}
        anchor="left" 
        variant='permanent'>
          <List>
            <ListItem button onClick={() => navigate('/')}>
              <ListItemText primary="Produtores" />
            </ListItem>
            <ListItem button onClick={() => navigate('/dashboard')}>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </Drawer>
        <h1>Lista de Produtores Rurais</h1>
        <Button className="button-item" onClick={changeCreate}>Novo Produtor</Button>
      </div>
    </div>
  );
}

export default ListProducers;
