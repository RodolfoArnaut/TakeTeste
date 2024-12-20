# Documentação da API


## **Overview**
Esta API foi desenvolvida para facilitar a integração com o sistema. Abaixo, você encontrará informações sobre os endpoints disponíveis, os métodos suportados, e exemplos de requisições e respostas.

---

## **Base URL**
```
http://<seu-dominio-ou-ip>:4000/api
```

---

## **Endpoints**

### **1. Rota: Listar Repositórios do GitHub**

- **Descrição:** Obtém a lista de repositórios públicos de um usuário do GitHub.
- **URL:** `/github/repositories`
- **Método:** `GET`
- **Parâmetros de Query:**
  | Nome        | Tipo   | Obrigatório | Descrição                     |
  |-------------|--------|-------------|--------------------------------|
  | `username`  | String | Sim         | Nome de usuário no GitHub.    |

#### Exemplo de Requisição
```bash
GET /api/github/repositories?username=rodolfoarnaut
```

#### Exemplo de Resposta (200 OK)
```json
[
  {
    "id": 12345,
    "name": "meu-repositorio",
    "url": "https://github.com/rodolfoarnaut/meu-repositorio",
    "description": "Descrição do repositório."
  },
  {
    "id": 67890,
    "name": "outro-repositorio",
    "url": "https://github.com/rodolfoarnaut/outro-repositorio",
    "description": "Outro repositório público."
  }
]
```

#### Possíveis Erros
| Código | Mensagem                              |
|--------|---------------------------------------|
| 400    | "O parâmetro 'username' é obrigatório." |
| 404    | "Usuário não encontrado."             |

---

### **2. Rota: Criar Novo Repositório**

- **Descrição:** Cria um novo repositório público no GitHub para o usuário autenticado.
- **URL:** `/github/repositories`
- **Método:** `POST`
- **Cabeçalhos:**
  | Nome          | Tipo   | Obrigatório | Descrição                       |
  |---------------|--------|-------------|----------------------------------|
  | `Authorization` | String | Sim         | Token de acesso do GitHub (Bearer). |

- **Body da Requisição:**
```json
{
  "name": "novo-repositorio",
  "description": "Meu novo repositório via API",
  "private": false
}
```

#### Exemplo de Resposta (201 Created)
```json
{
  "id": 54321,
  "name": "novo-repositorio",
  "url": "https://github.com/rodolfoarnaut/novo-repositorio",
  "description": "Meu novo repositório via API"
}
```

#### Possíveis Erros
| Código | Mensagem                             |
|--------|--------------------------------------|
| 401    | "Token de autenticação inválido."    |
| 422    | "Nome do repositório já existe."     |

---

## **Códigos de Status Comuns**

| Código | Significado                        |
|--------|------------------------------------|
| 200    | Requisição bem-sucedida.           |
| 201    | Recurso criado com sucesso.        |
| 400    | Requisição inválida.               |
| 401    | Não autorizado.                    |
| 404    | Recurso não encontrado.            |
| 500    | Erro interno do servidor.          |

---

## **Como Rodar a API Localmente**

1. Clone este repositório:
   ```bash
   git clone https://github.com/RodolfoArnaut/TakeTeste.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd TakeTeste
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. A API estará disponível em:
   ```
   http://localhost:4000/api

   Ou

   https://taketeste-5zfo.onrender.com
