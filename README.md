# MarvelSearchAPI

![Simple Google Chart](https://i.ibb.co/RTvhmgX/chrome-z-RL7-OFb-FQi.png)

Aplicação em Angular que interage com a [API da Marvel Comics] (http://developer.marvel.com/) e fornece um mecanismo de busca sobre o banco de dados de personagens e quadrinhos.
Permite encontrar personagens e visualizar informações como detalhes e suas respectivas informações como um wiki (sobre) do personagem completo.


# Funcionalidades
- [x] Consumindo API da Marvel
- [X] Detalhes dos Personagens
- [X] Wiki dos Personagens
- [X] Comics dos Personagens
- [X] Listagem com o Link para as HQ's
- [X] Engine de busca dos personagem
- [X] Multi requisições para listagem dos personagens
- [ ] Login (Criar uma conta para salvar as comics prediletas)
- [ ] Carrinho (Adicionar Comic Cart e poder comprar com descontos)


## Instalação

Clone este repositório e dê um `npm install` para instalar todas a dependências.

## OBS
 
A API's estão na pasta `src/environments` `apiKey` 

`src/environment.ts`
```
export const environment = {
  ...
  apiEndpoint: '//gateway.marvel.com/v1/public/',
  apiKey: '<Sua chave public aqui>'
};
```
você pode cadastrar sua **public** key aqui > [Marvel Developer Portal](http://developer.marvel.com/)


Execute o comando `ng serve` para startar a aplicação. Você será redirecionado para http://localhost:4200


## Dependencias
rxjs, nodejs, express, material design

##
Desafio feito para o processo seletivo da <b>CRMALL</b><br />
Tempo de entrega: <b>20/11 até o dia 23/11, às 17h00.</b>
