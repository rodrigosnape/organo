import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {

    const css = {
        backgroundColor: props.corSecundaria
    }

    return (
        //Se for true ele retorna o que está depois do &&
        // ou poderia ser um ternário com ? (no lugar do &&) e  :'' (depois de </section>)
        (props.colaboradores.length > 0)  && <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time