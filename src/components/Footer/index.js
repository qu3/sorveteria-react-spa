import './style.css';

export default function Footer() {
    return (
        <footer>
            <div className="limitar-secao informacoes-rodape">
                <img src="assets/logo.png" alt="Logo Sorveteria" title="Logo Sorveteria" />
                <div className='card-informaçoes-rodape'>
                    <h2>ENDEREÇO</h2>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className='card-informaçoes-rodape'>
                    <h2>CONTATO</h2>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className='card-informaçoes-rodape'>
                    <h2>HORÁRIOS</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="limitar-secao direito-autoral">
                <p>Gelateria. Desenvolvido por Vitor Zaffari</p>
            </div>
        </footer>
    )
}
