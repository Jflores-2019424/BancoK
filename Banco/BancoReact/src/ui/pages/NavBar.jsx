import { Link, NavLink, useNavigate } from 'react-router-dom';



export const NavBar = () => {


    const navigate = useNavigate();

    const onLogout = () =>{
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark nav bg-gradient p-2">
             <Link 
                    to="/"
                >
                <img src='src\assets\image\LogoBanco.png' 
                width="100" 
                height="100" 
                className="border border-5 border-dark rounded-circle bg-dark mx-2 rotate"
                />
            </Link>
        <div className='navbar container-fluid navbar-expand-sm bg-dark px-5 border border-dark text-center'>            
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/banco"
                    >
                        Menu
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/bancoProfile"
                    >
                        Perfil
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/favoritos"
                    >
                        Favoritos
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/transacciones"
                    >
                        Transacciones
                    </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                    <button className='nav-item nav-link btn'
                        onClick={ onLogout }
                        >
                            Cerrar sesion
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}