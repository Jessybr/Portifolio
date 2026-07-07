import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

interface ProjectsProps {
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
}

function Projects({ setDisplayProjectForm }: ProjectsProps) {
    const [verMaisButton, setVerMaisButton] = useState(false)
    const [projAboutVisible, setProjAboutVisible] = useState(false)

    return (
        <>
        <div id="proje" className="cont_proj">
            <FontAwesomeIcon icon={faPenToSquare} className="faPenToSquareProject" onClick={() => setDisplayProjectForm(true)}/>
                <h3 className="topic_title">Projetos</h3>
            <div className="projs">


                <div id="proj" className={projAboutVisible ? "proj dispNone" : "proj"} onMouseEnter={() => setVerMaisButton(true)} onMouseLeave={() => setVerMaisButton(false)}>
                    <div id="proj_img1" className="img_carro">
                        <h4>Amor de Casquinha</h4>
                        <img src="images/amor-de-carquinha.png" alt="amor de casquinha site"/>
                    </div>
                    <div id="ver_mais1" className={verMaisButton ? "ver_mais exibir" : "ver_mais"} onClick={() => setProjAboutVisible(true)}>
                        <button>Ver mais</button>
                    </div>
                </div>

                <div id="proj_about" className={projAboutVisible ? "proj_about ver_cont" : "proj_about"} >
                    <div className="head_proj">
                        <button id="close_about1" className="close_about" onClick={() => setProjAboutVisible(false)}>Fechar aba</button>
                        <div className="title_proj">
                            <video src="images/videoAmordeCasquinha.mp4" controls></video>
                            <h4>Amor de Casquinha</h4>
                            
                        </div>
                        <div className="icon_proj">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filetype-html" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filetype-css" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filetype-js" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filetype-sql" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252c.284.09.411.091.665.091q.507 0 .858-.158.355-.159.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.187-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.325q0 .165-.085.29A.56.56 0 0 1 2 15.31q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zm6.878 1.489-.507-.739q.264-.243.401-.6.138-.358.138-.806v-.501q0-.556-.208-.967a1.5 1.5 0 0 0-.589-.636q-.383-.225-.917-.225-.527 0-.914.225-.384.223-.592.636a2.14 2.14 0 0 0-.205.967v.5q0 .554.205.965.208.41.592.636a1.8 1.8 0 0 0 .914.222 1.8 1.8 0 0 0 .6-.1l.294.422h.788ZM4.262 14.2v-.522q0-.369.114-.63a.9.9 0 0 1 .325-.398.9.9 0 0 1 .495-.138q.288 0 .495.138a.9.9 0 0 1 .325.398q.115.261.115.63v.522q0 .246-.053.445-.053.196-.155.34l-.106-.14-.105-.147h-.733l.451.65a.6.6 0 0 1-.251.047.87.87 0 0 1-.487-.147.9.9 0 0 1-.32-.404 1.7 1.7 0 0 1-.11-.644m3.986 1.057h1.696v.674H7.457v-3.999h.79z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filetype-php" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.182.185.522m4.48 2.666V11.85h-.79v1.626H4.153V11.85h-.79v3.999h.79v-1.714h1.682v1.714zm.703-3.999h1.6q.433 0 .732.179.3.175.46.477.158.302.158.677t-.161.677q-.159.299-.463.474a1.45 1.45 0 0 1-.733.173H8.12v1.342h-.791zm2.06 1.714a.8.8 0 0 0 .084-.381q0-.34-.184-.521-.184-.182-.513-.182h-.66v1.406h.66a.8.8 0 0 0 .375-.082.57.57 0 0 0 .237-.24Z"/>
                              </svg>
                        </div>
                        <div>
                            <button><a href="https://github.com/gabrieIbarboza/ifsp-fullstack-amor-de-casquinha/tree/main" target="_blank">Repositório</a></button>
                        </div>
                    </div>
                        <div className="sobre">
                            <p>Amor de Casquinha é uma sorveteria fictícia desenvolvida pelo grupo composto por mim e Caroliny Sampaio. </p>
                                <p>O site em questão é um sistema de comércio eletrônico baseado em PHP POO e MySQL. Ele possui funcionalidades específicas para funcionários e clientes, proporcionando uma experiência de compra e gerenciamento eficiente. Algumas características principais incluem:</p>
                                <ul>
                                    <li>
                                        Acessibilidade e Design Responsivo:
                                        <ul>
                                            <li>O site foi projetado para oferecer uma experiência acessível em telas grandes e pequenas.O design prioriza a legibilidade, garantindo uma navegação fácil e agradável.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Autenticação Segura:
                            
                                        <ul>
                                            <li>O site oferece autenticação segura para funcionários e clientes.Os clientes podem criar uma conta e fazer login para acessar recursos personalizados.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Carrinho de Compras Persistente:
                            
                                        <ul><li>Mesmo que um cliente não logado adicione produtos ao carrinho de compras, esses itens permanecerão quando o cliente fizer login, facilitando a conclusão da compra.</li></ul>
                                    </li>
                                    <li>
                                        Gestão de Pedidos:
                            
                                        <ul>
                                            <li>Após a conclusão da compra, é gerada uma "nota fiscal" contendo detalhes dos pedidos, dados do cliente e o valor total.Os funcionários têm acesso aos pedidos feitos por clientes para gerenciar eficientemente as transações.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Gerenciamento de Produtos:
                            
                                        <ul>
                                            <li>Funcionários comuns têm a capacidade de criar, editar e excluir produtos, incluindo suas variações.Isso permite manter atualizado o catálogo de produtos disponíveis para os clientes.</li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                                <p>
                                    Essas funcionalidades combinadas oferecem uma solução abrangente para a gestão de vendas online, permitindo que clientes realizem compras de maneira eficaz, enquanto os funcionários têm ferramentas poderosas para gerenciar produtos, pedidos e usuários.
                                </p>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects