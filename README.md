# Site para minha namorada

## Descrição

Este site é uma plataforma pessoal interativa que combina elementos de uma página de login, conteúdo de mídia, blog e galeria, projetada para criar uma experiência personalizada e envolvente. Ele inclui uma página de boas-vindas com um sistema de autenticação básico, uma barra lateral para navegação, seções de conteúdo como playlists do Spotify, letras de músicas, um blog pessoal e uma galeria de imagens e vídeos.

## Estrutura do Projeto

### Arquivos e Pastas

- `index.html`: Página de login com uma autenticação básica.
- `page2.html`: Página principal após o login bem-sucedido.
- `login.css`: Estilo específico para a página de login.
- `styles.css`: Estilo principal para a página após o login.
- `login.js`: Script para funcionalidades da página de login.
- `script.js`: Script para funcionalidades da página principal.
- `icons/`: Pasta contendo ícones utilizados na barra lateral.
- `galeria/`: Pasta contendo imagens e vídeos para a galeria.

### Funcionalidades

#### Página de Login
- **Autenticação:** Acesso protegido com uma "chave" específica. Caso a chave esteja correta (`0208`), o usuário é redirecionado para a página principal (`page2.html`). Caso contrário, uma mensagem de erro é exibida.
- **Transições:** Animações suaves para a transição entre a página de login e a página principal.
- **Armazenamento:** O estado de login é salvo no `localStorage` para garantir que o usuário não precise fazer login novamente até que a sessão seja encerrada.

#### Página Principal
- **Barra Lateral:** Menu de navegação com links para diferentes seções do site, incluindo Spotify, letras de músicas, blog e galeria.
- **Spotify Playlist:** Integração com o Spotify para exibir uma playlist incorporada.
- **Letras das Músicas:** Seção com letras de músicas e links para ouvir no Spotify.
- **Blog:** Artigos pessoais com datas e descrições de eventos especiais.
- **Galeria:** Imagens e vídeos com uma funcionalidade de lightbox para visualização ampliada.

#### Lightbox
- **Exibição de Mídia:** Permite visualizar imagens e vídeos em um modal sobreposto com um botão de fechar.

#### Funcionalidades Adicionais
- **Desconexão:** Um botão de logout na barra lateral para encerrar a sessão e redirecionar para a página de login.

## Instalação

1. Clone o repositório:
   ```bash
   git clone [<URL-do-repositório>](https://github.com/younk5/site)
2. Navegue até o diretório do projeto:
   ```bash
   cd <diretório-do-projeto>
3. Abra o arquivo index.html em um navegador para visualizar o site.

## Uso

- **Acesse a Página de Login:** Entre com a chave 0208 para acessar a página principal.
- **Navegue pelo Site:** Use a barra lateral para acessar diferentes seções como Spotify, letras de músicas, blog e galeria.
- **Visualize Mídia:** Clique em imagens ou vídeos na galeria para visualizá-los em tamanho maior usando o lightbox.

## Contribuição
Se desejar contribuir para o projeto, por favor, faça um fork do repositório, faça suas alterações e envie um pull request com uma descrição clara das mudanças.

## Me

Feito por [Younk] (https://github.com/younk5)
