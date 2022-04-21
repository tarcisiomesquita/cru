import {useState, useEffect} from 'react'

const atividadeInicial = {
  id: 0,
  titulo: '',
  prioridade: '0',
  descricao: '',
  data: ''
}

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual())

  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0) {
      setAtividade(props.atividadeSelecionada)
    }
  }, [props.atividadeSelecionada])
  
  const inputTextHandler = (e) => {
    const {name, value} = e.target

    setAtividade({ ...atividade, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (props.atividadeSelecionada.id !== 0) {
      props.atualizarAtividade(atividade)
    }
    else {
      props.addAtividade(atividade)
    }

    setAtividade(atividadeInicial)
  }

  const handleCancelar = (e) => {
    e.preventDefault()

    props.cancelarAtividade()

    setAtividade(atividadeInicial)
  }

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0) {
      return props.atividadeSelecionada
    } 
    else {
      return atividadeInicial
    }
  }

  return (
    <>
    <h1>Atividade {atividade.id !== 0 ? atividade.id : ''} </h1>
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input 
          type="text" 
          className="form-control" 
          name="titulo"
          placeholder="titulo" 
          onChange={inputTextHandler}
          value={atividade.titulo}
          required
          maxLength="40"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select 
          className="form-select"
          name="prioridade"
          onChange={inputTextHandler}
          value={atividade.prioridade}
          required
        >
          <option value="">Selecione...</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
  
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">Descrição</label>
        <textarea
          className="form-control" 
          name="descricao"
          placeholder="descrição" 
          onChange={inputTextHandler}
          value={atividade.descricao}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Data de entrega</label>
        <input 
          type="date"
          name="data"
          className="form-control" 
          onChange={inputTextHandler}
          value={atividade.data}
          required
          max="9999-12-31"
        />
      </div>
      <hr />

      <div className="col-12 mt-0">
        {atividade.id === 0 ?
          <button 
            className="btn btn-outline-secondary" type="submit"
          >
            <i className="fa fa-plus me-2"></i>
            Atividade
          </button>
          :
          <>
          <button 
            className="btn btn-outline-success me-2" type="submit"
          >
            <i className="fa fa-plus me-2"></i>
            Salvar
          </button>
          <button 
            className="btn btn-outline-warning" 
            onClick={handleCancelar}
          >            
            <i className="fa fa-plus me-2"></i>
            Cancelar
          </button>
          </>
        }
      </div>
    </form>
    </>
  )
}