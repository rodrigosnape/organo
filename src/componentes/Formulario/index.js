import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [
       'Programação',
       'Front-End',
       "Data Science",
       'Devops',
       'UX e Design',
       "Mobile",
       "Inovação e Gestão" 
    ]

    const [nome, setNome] = useState('Rodrigo Veiga')
    const [cargo, setCargo] = useState('Desenvolvedor')
    const [imagem, setImagem] = useState('FOTO')
    const [time, setTime] = useState('Programação')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            //Jeito tradicional
            'nome': nome,
            //Jeito "novo"
            cargo,
            imagem,
            time
        })
    }

    return(
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                {/*Isso passa como prop.children para a função*/}
                Criar Card
            </Botao>
        </form>
    </section>
    )
}

export default Formulario