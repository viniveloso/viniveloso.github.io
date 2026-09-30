# Meu portfólio

Sou Vinicius Veloso, desenvolvedor .NET com foco em backend. Este é meu site pessoal, onde reúno minha experiência, as tecnologias com que trabalho e algumas situações que enfrentei em projetos.

Usei HTML, CSS e JavaScript puro. Como o conteúdo é estático, não precisei de um framework nem de uma etapa de build. O JavaScript cuida do filtro de competências, da troca de tema e do ano no rodapé.

## Rodar localmente

Abra o `index.html` no navegador ou inicie um servidor na pasta do projeto:

```sh
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura

```text
index.html               Conteúdo da página
styles.css               Estilos e layout responsivo
script.js                Competências, filtros e tema
assets/curriculo.pdf      Meu currículo
.github/workflows/        Publicação no GitHub Pages
```

## Publicação

O workflow publica o site a cada push na branch `main`. No repositório, é necessário selecionar **GitHub Actions** em **Settings → Pages → Source**.

Os cards resumem experiências profissionais. Os sistemas e códigos dos clientes não fazem parte deste repositório.
