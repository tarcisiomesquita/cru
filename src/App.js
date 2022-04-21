import { useState, useEffect } from 'react'
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

function App() {
  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({id: 0})  
  
  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) :
    setIndex(Math.max.apply(Math, atividades.map((item) => item.id)) + 1)
  }, [atividades])

  function addAtividade(ativ) {
    setAtividades([...atividades, 
      {...ativ, id: index}]
    )
  }

  function cancelarAtividade() {
    setAtividade({id: 0})
  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map((item) => item.id === ativ.id ? ativ : item))
    setAtividade({id: 0})
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter((atividade) => atividade.id !== id)
    setAtividades([...atividadesFiltradas])
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id)
    setAtividade(atividade[0])
  }

  return (
    <>
      <AtividadeForm 
        addAtividade={addAtividade}  
        cancelarAtividade={cancelarAtividade}
        atualizarAtividade={atualizarAtividade}
        atividades={atividades}
        atividadeSelecionada={atividade}
      />
      {atividades.length !== 0 ? 
        <AtividadeLista
          atividades={atividades}
          deletarAtividade={deletarAtividade}
          pegarAtividade={pegarAtividade}
       />
        :
        <h1 className="text-center text-muted border mt-3">Sem atividades no momento</h1>
      }
    </>
  );
}

export default App;
