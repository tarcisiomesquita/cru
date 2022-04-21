import Atividade from './Atividade'

export default function AtividadeLista(props) {
    return (
      <div className="mt-3">
        <ul className="list-group list-unstyled">
          {props.atividades.map((atividade) => 
            <Atividade
              key={atividade.id}
              atividade={atividade}
              deletarAtividade={props.deletarAtividade}
              pegarAtividade={props.pegarAtividade}
            />
          )}
        </ul>
      </div>
    )
}