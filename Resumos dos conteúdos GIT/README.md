# Meus Comandos para decoreba:

# Iniciando projeto:

Criamos um repositório que não terá a working tree, ou seja, não conterá uma cópia dos nossos arquivos. Como o repositório servirá apenas como servidor, para que outros membros da equipe sincronizem seus trabalhos.
```sh
git init --bare 
```

Inciciando projeto.
```sh
git init 
```

Adicionar url remota no projeto.
```sh
git remote add origin "url"
```

# Conferindo atividades

Git log mais arquivos modificados (detalhado).
```sh
git log --stat 
```

Git log mais arquivos modificados (não detalhado).
```sh
git log --shortstat 
```

Para listar em uma linha o numero de comits desejados. 
```sh
git log --oneline -Number 
```
Para listar todas as modificações de cada commit.
```sh
git log -p 
```

# Salvando

Adicionando na área de staged.
```sh
git add . 
```
realizar o commit.
```sh
git commit -am "mensagem" 
```
Para alterar uma mensagem do commit.
```sh
git commit --amend -m "message" 
```
Para acrescentar um arquivo modificado no commit.
```sh
git commit --amend --no-edit 
```
# Configurações padrões

Configurar o ambiente para edição de texto padrão do git.
```sh
git config --global core.editor "code --wait" 
```

# Limpeza

Limpar o histórico de arquivos (não rastreados).
```sh
git clean -f 
```
Limpar todo o histórico de modificações para a versão atual. (rastreados)
```sh
git checkout . 
```
Voltar para a versão anterior do arquivo que foi modificado. (rastreados)
```sh
git checkout "arquivo"
```
Deletar todos os arquivos na área de preparação e arquivos rastreados.
```sh
git reset --hard 
```

# Desfazer mudanças:

Limpar o histórico de arquivos (não rastreados).
```sh
git clean -f 
```
Limpar todo o histórico de modificações para a versão atual. (rastreados)
```sh
git checkout .
```
Voltar para a versão anterior do arquivo que foi modificado. (rastreados)
```sh
git checkout "arquivo"
```
Deletar todos os arquivos na área de preparação e arquivos rastreados
```sh
git reset --hard
```
Quando arquivo estiver na área de preparação se o repositório tiver ou não um commit (preparado)
```sh
git rm --cached "arquivo"
```
Utilizando quando o repositório tiver pelo menos 1 commit.
```sh
git restore --staged "arquivo"
```
# Comandos de verificação:
Verificar o Status de modificações locais.
```sh
git status 
```

# Salvar
Salvar modificações no repositório remoto.
```sh
git push origin main
```

# Manipulação de estados de arquivos
Quando arquivo estiver na área de preparação se o repositório tiver ou não um commit (preparado)
```sh
git rm --cached "arquivo" 
```
Utilizado quando o repositório tiver pelo menos 1 commit.
```sh
git restore --staged (arquivo) 
```

# .gitignore
Ocultar arquivo modificado.
```sh
git update-index --skip-worktree 
```
Aparecer arquivo modificado.
```sh
git update-index --no-skip-worktree
```

# Comandos de conexão com Github
Apontar para um repositório externo.
```sh
git remote add "REFERENCIA" "URL"  
```
Verificar todos os repositórios existentes.
```sh
git remote -v  
```
Apontar para um novo repositório externo.
```sh
git remote set-url (referencia) "URL" 
```

# SSH:
Criar chave SSH.
```sh
ssh-keygen  
```
Acionar um agente para se conectar com uma chave SSH.
```sh
eval $(ssh-agent) 
```
Adiciona a chave SSH para o arquivo pub.
```sh
ssh-add "diretorio pub"
```

# Tudo sobre Branchs:
Verifica qual branch está atualmente.
```sh
git branch  
```
Criar uma nova branch a partir da principal.
```sh
git branch "nome_branch" 
```
Alterar para a branch desejada.
```sh
git checkout "nome_branch" 
```
Criar uma nova branch e faz a alteração.
```sh
git checkout -b "nome_branch"  
```
Mesma funcionalidade do checkout.
```sh
git switch "nome_branch"
```
Navegar entre a primeira e segunda branch selecionada. 
```sh
git switch -  
```
Mesma funcionalidade do checkout -b.
```sh
git switch -c "nome_branch"  
```
Linkar a branch local para o servidor github.
```sh
git push -u origin "nome_branch"  
```
Apagar uma branch.
 ```sh
git branch -D "nome_branch"  
```
Apagar uma branch do servidor do github.
```sh
git push --delete "nome_referencia" -> "nome_branch" 
```
Criar novo nome para a branch atual.
```sh
git branch -m "novo_nome"  
```
Altera o nome de qualquer branch para outro nome independente de qual branch atual estiver.
```sh
git branch -m "nome_branch" -> "novo_nome"  
```
Acessar todos os commits de cada branch.
```sh
git log "nome_branch" --oneline  
```

# Mergeando Branchs:
Para  juntar na branch atual os commits que foram realizados de outra branch.
```sh
git merge "nome_branch"
```
Verificar quais foram as branchs que não foram mergeadas.
```sh
git branch --no-merged  
```
Verificar quais foram as branchs que foram mergeadas.
```sh
git branch --merged  
```

# Tags

- Anotated - A mensagem definida da tag pelo autor.
- lightweight - A mesma mensagem do commit.

Criar uma nova tag (lightweight).
```sh
git tag "nome_tag"  
```
Cria uma tag (anotated).
```sh
git tag -a -m  "mensagem" -> "nome_tag"  
```
Mostrar todas a tags.
```sh
git show "nome_tag"  
```
Mostrar todas as tags e descrições.
```sh
git tag -n 
```
# Stash

Salvar modificações para um local temporário.
```sh
git stash 
```
Lista das modificações temporárias.
```sh
git stash list  
```
Aplica a modificação feita.
```sh
git stash apply 
```
Aplica a modificação feita de algum stash.
```sh
git stash apply stash@{'valor'} 
```
Para pegar o ultimo stash e remover do local temporário.
```sh
git stash pop  
```
Remover o stash mais recente sem aplicar.
```sh
git stash drop  
```
Criar uma nova branch com a primera opção de stash.
```sh
git stash branch feature-1  
```
# Revertendo Commits
Reverter commits desejados.
```sh
git revert "nome_commit"
```
Reverter o primeiro commit.
```sh
git revert HEAD  
```
Reverter o que foi revertido após atualização do commit.
```sh
git revert HEAD --no-edit  
```
# Resetando os Commits
Desfaz o commit inteiro
```sh
git reset --hard HEAD~1  
```
Desfaz o commit e deixa mudanças para modificar na área de trabalho.
```sh
git reset --mixed HEAD~1  
```
Desfaz o commit e deixa mudanças na preparação
```sh
git reset --soft HEAD~1  
```
# Rebase:
Fará com que mova todos os commits feitos em uma branch para outro ponto da branch, sobscrevendo.
```sh
git rebase "nome_branch"
```
Para abortar a operação de rebase na branch atual.
```sh
git rebase --abort  
```
Para continuar a operação de rebase na branch atual.
```sh
git rebase --continue 
```
Para pegar todas as alterações do servidor do github e ao mesmo tempo realizar o commit de alteração feito localmente. 
```sh
git pull --rebase  
```
# Fetch:
Para trazer informações de uma branch que não existe para o diretório local. (Atualizações)
```sh
git fetch origin "nome_branch" 
```
# Squash:
Para fazer o rebase de forma interativa e ativar o modo squash para juntar todos os commits feitos.
```sh
git rebase -i  (HEAD~'number') 
```

# Cherry-Pick:
Para trazer um commit específico de outra branch para outra branch.
```sh
git cherry-pick (hash) 
```

# Bisect (busca binária):
Para iniciar o bisect.
```sh
git bisect start 
```
Para inserir o commit que a alteração feita estava funcionando.
```sh
git bisect good (hash) 
```
Para inserir o commit que a alteração feita não estava funcionando.
```sh
git bisect bad (hash) 
```
Para parar a investigação.
```sh
git bisect reset  
```

# Alias Personalizado:
Comando abreviado.
```sh
git config --global alias."abv" -> "comando"
```
Comando com outras opções de forma abreviada.
```sh
git config --global alias."abv" -> "comando"  
```
Excluir comando abreviado. 
```sh
git config --global --unset alias."abv"  
```
# Grep filtro: 
Para filtrar e encontrar um campo desejado.
```sh
git "comando" | grep 'filtro_desejado'  
```
# Comandos para casos de urgencia:
força para sobscrever todos os commits no repo remoto
```sh
git push --force 
```
força para sobscrever todos os commits somente se não for causar alterações no repo remoto.
```sh
git push --force-with-lease 
```
