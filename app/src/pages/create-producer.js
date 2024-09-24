import React from "react";
import Button from "@mui/material/Button";
import "./styles.scss"; 
import { Input, Select } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function CreateProducers() {
    const navigate = useNavigate();
  return (
    <div className="form-producers container-geral">
      <div className="container-form">
        <Button className="button-item" onClick={() => navigate('/')}>Voltar</Button>
        <h1>Novo produtor</h1>
      </div>
      <div className="form-create">
        <label>CPF ou CNPJ</label>
        <Input placeholder="Digite o CPF ou CNPJ" />
        <label>Nome do produtor</label>
        <Input placeholder="Digite o o nome do produtor" />
        <label>Nome da Fazenda</label>
        <Input placeholder="Digite o nome da fazenda" />
        <label>Estado</label>
        <Select/>
        <label>Cidade</label> 
        <Select/>
        <label>Área total em hectares da fazenda</label>
        <Input placeholder="Digite a área total" /> 
        <label>Área agricultável em hectares</label>
        <Input placeholder="Digite a área vegetável" /> 
        <label>Área de vegetação em hectares</label>
        <Input placeholder="Digite a área de vegetação" /> 
        <label>Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)</label>
        <Select/>
        <Button className="button-item" style={{ width: "50%", marginTop: "15px"}}>Cadastrar</Button>
      </div>
    </div>
  );
}

export default CreateProducers;