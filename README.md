# Aprova — ENEM & UEL

Plataforma estática e responsiva para organizar 90 dias de estudos, aprender conteúdos-chave, assistir videoaulas, responder quizzes e acompanhar a evolução para o ENEM e o Vestibular da UEL.

## Funcionalidades

- Dashboard diário com progresso, sequência, revisões e habit tracker
- Plano equilibrado de 90 dias e calendário visual
- 7 conteúdos completos iniciais, um por disciplina prioritária
- Videoaula incorporada e quiz de exatamente 7 questões em cada conteúdo
- Simulados por área ou mistos, seção de redação e Foco UEL
- Busca instantânea e filtros por matéria, dificuldade e prova
- Modo claro/escuro e navegação adaptada para celular
- Persistência integral no `localStorage`, sem backend

## Tecnologias

React 19, TypeScript, Vinext/Vite, CSS moderno e Lucide Icons. O resultado do build é estático e pode ser publicado no GitHub Pages.

## Estrutura

```text
app/                 página, layout e estilos globais
components/          interface e fluxos reutilizáveis
data/topics.ts       matérias, aulas, vídeos, quizzes e plano
services/            camada exclusiva de persistência
public/              ícones e imagem social
.github/workflows/   publicação automática
```

## Instalação e execução

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build

```bash
npm run build
```

Os arquivos públicos são gerados em `dist/client`.

## Publicação no GitHub Pages

### GitHub Actions (recomendado)

1. Envie o projeto para um repositório GitHub com a branch `main`.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**.
3. Faça um push. O workflow `.github/workflows/deploy.yml` publicará o site.

### Publicação manual

```bash
npm run deploy
```

O script cria o build e envia `dist/client` para a branch `gh-pages`.

## Como evoluir o conteúdo

Todos os dados ficam centralizados em `data/topics.ts`.

- **Adicionar matéria:** inclua o nome em `subjects` e crie um tópico associado.
- **Adicionar conteúdo:** acrescente um objeto em `topics` seguindo o tipo `Topic`.
- **Adicionar quiz:** preencha `quiz` com exatamente 7 itens — 4 fáceis, 2 médios e 1 desafio.
- **Alterar vídeo:** troque apenas `videoId`; informe o ID do YouTube, não a URL completa.
- **Alterar o plano:** ajuste a geração de `studyPlan` ou os `topicIds` de cada dia.

## Persistência local

`services/storageService.ts` concentra leitura, escrita e limpeza do `localStorage`. A chave `aprova-progress-v1` guarda conteúdos concluídos, respostas, notas, revisões, dias estudados, simulados, tema e nome. Nenhum componente acessa o armazenamento diretamente.

Os dados ficam apenas no navegador da estudante. Limpar os dados do site ou usar o botão “Recomeçar” no perfil apaga o progresso local.
