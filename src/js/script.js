//Limpesa e validação

const email="           email@email.com";
//trim remove os espaços inicio e fim
const emailLimpo= email.trim();
console.log(emailLimpo);

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("email valido")
}else{
    console.log("Email invalido")
} 

//transformaçao de texto

const tituloArtigo="Como aprender JAVA RAIZ";
//metodo upper(maisculo) e low(minusculo)
const texto1 =tituloArtigo.toUpperCase();
console.log(texto1)
//split - transforma o texto em array
const texto2 =tituloArtigo.split(" ");
console.log(texto2)
//join - junta tudo em uma unica string
const texto3 = texto2.join(" ");
console.log(texto3)
//metodo toFixad


const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal=precoProduto * (1-desconto);
console.log(precoFinal);
//`` - template string - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);


//DOM (DOCUMENT OBJECT MODEL)

const Titulo=document.getElementById("titulo")

Titulo.innerText= "O DOM Mudou o texto";

Titulo.style.color="blue";

/* CRIANDO O APP*/
const produtos =[
    {nome:"Teclado Mêcanico", preco:300,emPromocao:true},
    {nome:"Mouse Gamer", preco:150,emPromocao:false},
    {nome:"Monitor Gamer", preco:1300,emPromocao:true},
    {nome:"Mouse Pad XL", preco:400,emPromocao:false},
];

const container =document.getElementById("listar-produtos");
const mostrarTotal = document.getElementById("resultado-total")

//map: transforma o arrat de objetos em um arry de strings htlm e css

function todosProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos = lista.map(item =>`
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promocao</span>':''}
        </div>
        
        `).join('');//transforma o arry em uma unica string

        container.innerHTML=htmlProdutos;   
}

//FILTER - cria uma nova lista apenas com o que selecionou

function filtrarPromocoes(){
    const promocionais=produtos.filter(item => item.emPromocao);
    todosProdutos(promocionais);
}

//REDUCE -Reduz o array a um unico valor(soma dos preços)

function calcularTotal(){
    const total =produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText= `Valor Total R$ ${total}`;
}
