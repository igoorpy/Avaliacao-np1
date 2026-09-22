import { useState } from "react";

function Nome() {
  // 1. criar as useState para cada campo do formulário


  // criar um estado user para armazenar os dados do formulário e mostrar em tela


  // criar a função handleRegister para capturar os dados do formulário e setar no estado user
  

    alert("Cadastro realizado com sucesso!");
  
  return (
    <div>
      <h1>Formulário de cadastro</h1>
     
      <form >
        <label>Nome</label>
        <br />
      
        <input
          placeholder="Digite seu nome"
        />
        <br />

        <label>Sobrenome</label>
        <br />
        <input
          placeholder="Digite seu sobrenome"
         
        />
        <br />

        <label>Idade</label>
        <br />
        <input
          placeholder="Digite sua idade"
        
        />
        <br />

        <label>Telefone</label>
        <br />
        <input
          placeholder="Digite seu telefone"
       
        />
        <br />

        <label>Cidade</label>
        <br />
        <input
          placeholder="Digite sua cidade"
        
        />
        <br />

        <label>Estado</label>
        <br />
        <input
          placeholder="Digite seu estado"
         
        />
        <br />

        <label>Rua</label>
        <br />
        <input
          placeholder="Digite sua rua"
         
        />
        <br />

        <label>CEP</label>
        <br />
        <input
          placeholder="Digite seu CEP"
         
        />
        <br />

        <label>Email</label>
        <br />
        <input
          placeholder="Digite seu email"
         
        />
        <br />

        <label>Senha</label>
        <br />
        <input
          placeholder="Digite sua senha"
         
        />
        <br />

        <button type="submit">Entrar</button>
      </form>

      <br />


      <div>
        <span>Bem vindo: </span>
        <br />
        <span>Idade: </span>
        <br />
        <span>Telefone: </span>
        <br />
        <span>Cidade: </span>
        <br />
        <span>Estado: </span>
        <br />
        <span>Rua: </span>
        <br />
        <span>CEP:</span>
        <br />
        <span>Email: </span>
        <br />
        <span>Senha: </span>
        <br />
      </div>
    </div>
  );

}

export default Nome;