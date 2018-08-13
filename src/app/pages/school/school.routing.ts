import {Routes, RouterModule} from '@angular/router';

import {School} from './school.component';
import {EstadoComponent} from "./locations/estado/estado.component";
import {PaisComponent} from "./locations/pais/pais.component";
import {CidadeComponent} from "./locations/cidade/cidade.component";
import {ProfessorComponent} from "./pessoa/professor/professor.component";
import {FuncaoComponent} from "./basicos/funcao/funcao.component";
import {DataTables} from "./basicos/dataTables/dataTables.component";
import {FormacaoComponent} from "./basicos/formacao/formacao.component";
import {MateriaComponent} from "./escolar/materia/materia.component";
import {FuncionarioComponent} from "./pessoa/funcionario/funcionario.component";
import {AlunoComponent} from "./pessoa/aluno/aluno.component";
import {RequisicaoComponent} from "./basicos/requisicao/requisicao.component";
import {SalaComponent} from "./instituicao/sala/sala.component";
import {AnoLetivoComponent} from "./instituicao/ano-letivo/ano-letivo.component";
import {SeparadorComponent} from "./instituicao/separador/separador.component";
import {TurmaComponent} from "./escolar/turma/turma.component";
import {NotaComponent} from "./escolar/nota/nota.component";
import {PresencaComponent} from "./escolar/presenca/presenca.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: School,
    children: [
      {path: 'pais', component: PaisComponent},
      {path: 'estado', component: EstadoComponent},
      {path: 'cidade', component: CidadeComponent},
      {path: 'professor', component: ProfessorComponent},
      {path: 'funcionario', component: FuncionarioComponent},
      {path: 'funcao', component: FuncaoComponent},
      {path: 'formacao', component: FormacaoComponent},
      {path: 'datatables', component: DataTables},
      {path: 'materia', component: MateriaComponent},
      {path: 'aluno', component: AlunoComponent},
      {path: 'requisicao', component: RequisicaoComponent},
      {path: 'sala', component: SalaComponent},
      {path: 'anoletivo', component: AnoLetivoComponent},
      {path: 'separador', component: SeparadorComponent},
      {path: 'turma', component: TurmaComponent},
      {path: 'nota', component: NotaComponent},
      {path: 'presenca', component: PresencaComponent},

    ]
  }
];

export const routing = RouterModule.forChild(routes);
