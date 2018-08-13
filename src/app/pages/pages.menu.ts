export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      // {
      //   path: 'dashboard',
      //   data: {
      //     menu: {
      //       title: 'general.menu.dashboard',
      //       icon: 'ion-android-home',
      //       selected: false,
      //       expanded: false,
      //       order: 0
      //     }
      //   }
      // },
      {
        path: 'school',
        data: {
          menu: {
            title: 'Básicos',
            icon: 'ion-gear-b',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'funcao',
            data: {
              menu: {
                title: 'Funções',
              }
            }
          },
          {
            path: 'formacao',
            data: {
              menu: {
                title: 'Formação',
              }
            }
          },
          // {
          //   path: 'requisicao',
          //   data: {
          //     menu: {
          //       title: 'Requisição',
          //     }
          //   }
          // },
        ]
      },
      {
        path: 'school',
        data: {
          menu: {
            title: 'Localidades',
            icon: 'ion-ios-location',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'pais',
            data: {
              menu: {
                title: 'Pais',
              }
            }
          },
          {
            path: 'estado',
            data: {
              menu: {
                title: 'Estados',
              }
            }
          }, {
            path: 'cidade',
            data: {
              menu: {
                title: 'Cidades',
              }
            }
          }
        ]
      }, {
        path: 'school',
        data: {
          menu: {
            title: 'Pessoas',
            icon: 'ion-filing',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'funcionario',
            data: {
              menu: {
                title: 'Funcionário',
              }
            }
          },
          {
            path: 'professor',
            data: {
              menu: {
                title: 'Professores',
              }
            }
          },
          {
            path: 'aluno',
            data: {
              menu: {
                title: 'Alunos',
              }
            }
          },
        ]
      },
      {
        path: 'school',
        data: {
          menu: {
            title: 'Instituição',
            icon: 'ion-home',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'sala',
            data: {
              menu: {
                title: 'Salas',
              }
            }
          },
          {
            path: 'anoletivo',
            data: {
              menu: {
                title: 'Ano Letivo',
              }
            }
          }, {
            path: 'separador',
            data: {
              menu: {
                title: 'Separadores',
              }
            }
          }
        ]
      },
      {
        path: 'school',
        data: {
          menu: {
            title: 'Escolar',
            icon: 'ion-clipboard',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'materia',
            data: {
              menu: {
                title: 'Matérias',
              }
            }
          }, {
            path: 'turma',
            data: {
              menu: {
                title: 'Turmas',
              }
            }
          }, {
            path: 'nota',
            data: {
              menu: {
                title: 'Notas',
              }
            }
          }, {
            path: 'presenca',
            data: {
              menu: {
                title: 'Presenças',
              }
            }
          }
        ]
      }
    ]
  }
];
