import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';

import {routing} from './school.routing';
import {School} from './school.component';
import {EstadoComponent} from "./locations/estado/estado.component";
import {CustomFormComponent} from "../../components/custom-form/custom-form.component";
import {PaisComponent} from "./locations/pais/pais.component";
import {CidadeComponent} from "./locations/cidade/cidade.component";
import {ProfessorComponent} from "./pessoa/professor/professor.component";
import {TableComponent} from "../../components/table/table.component";
import {CustomComboComponent} from "../../components/custom-combo/custom-combo.component";
import {PessoaComponent} from './pessoa/pessoa/pessoa.component';
import {EnderecoComponent} from './pessoa/endereco/endereco.component';
import {UsuarioComponent} from './pessoa/usuario/usuario.component';
import {TelefoneComponent} from './pessoa/telefone/telefone.component';
import {SmartTables} from "../tables/components/smartTables/smartTables.component";
import {LocalDataSource, Ng2SmartTableModule} from "ng2-smart-table";
import {SmartTablesService} from "../tables/components/smartTables/smartTables.service";
import {FuncionarioComponent} from './pessoa/funcionario/funcionario.component';
import {FuncaoComponent} from './basicos/funcao/funcao.component';
import {ComboCidadeComponent} from './locations/cidade/combo-cidade/combo-cidade.component';
import {SalaComponent} from './instituicao/sala/sala.component';
import {AnoLetivoComponent} from './instituicao/ano-letivo/ano-letivo.component';
import {SeparadorComponent} from './instituicao/separador/separador.component';
import {CompleterCmp, Ng2CompleterModule} from "ng2-completer";
import {DataTablesService} from "./basicos/dataTables/dataTables.service";
import {DataTableModule} from "angular2-datatable";
import {DataTables} from "./basicos/dataTables/dataTables.component";
import {DataFilterPipe} from "./basicos/dataTables/data-filter.pipe";
import {NgbActiveModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {Modals} from "../../components/modals/modals.component";
import {DefaultModal} from "../../components/modals/default-modal/default-modal.component";
import {FormacaoComponent} from './basicos/formacao/formacao.component';
import {CustomRComponent} from "./pessoa/endereco/custom.r.component";
import {MateriaComponent} from './escolar/materia/materia.component';
import {BaseListComponent} from './escolar/base-list/base-list.component';
import {MateriaRComponent} from "./escolar/materia/materia.r.component";
import {FuncaoListComponent} from './basicos/funcao/funcao-list/funcao-list.component';
import {FuncaoRComponent} from "./basicos/funcao/funcao-list/funcao.r.component";
import {AlunoComponent} from './pessoa/aluno/aluno.component';
import {FormacaoListComponent} from './basicos/formacao/formacao-list/formacao-list.component';
import {FormacaoRComponent} from "./basicos/formacao/formacao-list/formacao.r.component";
import {CustomSmartTableComponent} from './custom/custom-smart-table/custom-smart-table.component';
import {RequisicaoComponent} from './basicos/requisicao/requisicao.component';
import {TurmaComponent} from './escolar/turma/turma.component';
import {CustomDateComponent} from "./instituicao/ano-letivo/custom.date.component";
import {HoraAulaComponent} from './escolar/turma/hora-aula/hora-aula.component';
import {CustomAulaComponent} from "./escolar/turma/hora-aula/custom.aula.component";
import {CustomHoraComponent} from "./escolar/turma/hora-aula/custom.hora.component";
import {CustomBimComponent} from "./escolar/turma/hora-aula/custom.bim.component";
import { NotaComponent } from './escolar/nota/nota.component';
import { PresencaComponent } from './escolar/presenca/presenca.component';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing,
    Ng2CompleterModule,
    NgbModalModule
  ],
  declarations: [
    School,
    EstadoComponent,
    CustomFormComponent,
    PaisComponent,
    CidadeComponent,
    ProfessorComponent,
    TableComponent,
    CustomComboComponent,
    PessoaComponent,
    EnderecoComponent,
    UsuarioComponent,
    TelefoneComponent,
    SmartTables,
    FuncionarioComponent,
    FuncaoComponent,
    ComboCidadeComponent,
    SalaComponent,
    AnoLetivoComponent,
    DataFilterPipe,
    DataTables,
    SeparadorComponent,
    Modals,
    DefaultModal,
    FormacaoComponent,
    CustomRComponent,
    CustomDateComponent,
    MateriaRComponent,
    FuncaoRComponent,
    MateriaComponent,
    BaseListComponent,
    FuncaoListComponent,
    AlunoComponent,
    FormacaoRComponent,
    FormacaoListComponent,
    CustomSmartTableComponent,
    RequisicaoComponent,
    TurmaComponent,
    HoraAulaComponent,
    CustomBimComponent,
    CustomAulaComponent,
    CustomHoraComponent,
    NotaComponent,
    PresencaComponent,

  ],
  entryComponents: [
    DefaultModal,
    MateriaRComponent,
    FormacaoRComponent,
    FuncaoRComponent,
    CustomAulaComponent,
    CustomHoraComponent,
    CustomRComponent,
    CustomBimComponent,
    CustomDateComponent

  ],
  providers: [
    SmartTablesService,
    DataTablesService,
    NgbActiveModal
  ]
})
export class SchoolModule {
}
