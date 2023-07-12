import{useState}from 'react';
import { useNavigate } from 'react-router-dom';// me permite navegar entre rutas
import "./Styles.css"




export function Landing(){//Publica
    return(
        <h3>Promocion</h3>
    )
}
export function Auth({changeIng}) {

    const [username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();

        const u='Juansb@gma.com';
        const c='29092021'

        if (username===u && password===c) {
            console.log('-- Bienvenido -- Ingreso correctamente');
            
            changeIng(true);

            navigate("/home");

        }else{
            alert('Usuario o contraseña incorrectos');
        }
       // console.log(`usuario: ${username}, contraseña: ${password}`)
    }
          
    function handleUsername(e){ 
        const vr=e.target.value;
        setUsername(vr);
    }

    function handlePass(e){
        setPassword(e.target.value);
    }
    return (
        <main role="main" class="container my-auto">
            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                col-12">
                    <h2 class="text-center" id="title">HOW CALORIES DO YOU WANT?</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        //src="../img/comi.jpg"
                        src="https://cdn.pixabay.com/photo/2013/04/01/21/31/fast-food-99179_1280.png" alt='IMGComida' />
                        <br></br>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="correo">Correo</label>
                            <input id="correo" name="correo"
                                class="form-control" type="email"
                                placeholder="Correo electrónico" 
                                onChange={handleUsername}/>
                        </div>
                        <div class="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                class="form-control" type="password"
                                placeholder="Contraseña" 
                                onChange={handlePass} />
                        </div>
                        <br></br>
                        <div class="text-center">
                        <button type="submit" class="btn btn-primary mb-2" >
                            Iniciar Sesión
                        </button>
                        </div>
                        <br></br>
                        
                    </form>
                </div>
            </div>
        </main>
    )

}