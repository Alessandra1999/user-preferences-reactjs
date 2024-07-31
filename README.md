<h1>Reforçando - UseContext e ContextAPI</h1>

### Exercício opcional proposto pelo professor Jaques durante o Módulo de ReactJS do curso de dev full stack da +PraTi

<hr/>

### Exercício 5: Contexto de Preferências do Usuário

Objetivo: Criar um contexto para gerenciar as preferências do usuário, como o modo de exibição (lista ou grade).

Instruções:

- Crie o Contexto: Crie um novo arquivo UserPreferencesContext.jsx e defina um contexto chamado UserPreferencesContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor UserPreferencesContext.Provider e forneça um estado para as preferências do usuário.
- Consuma o Contexto: Crie um componente ViewModeSwitcher.jsx que consuma o contexto UserPreferencesContext e permita ao usuário alternar entre os modos de exibição (lista ou grade).

- Exiba os Itens: Crie um componente ItemList.jsx que consuma o contexto UserPreferencesContext e exiba os itens no modo de exibição selecionado pelo usuário.
