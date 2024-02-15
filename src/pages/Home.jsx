import Header from "../components/Header";

export default function Home(){
    return (
        <>
            <Header />
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3em'}}>
                    <div>
                        <img src="https://i.blogs.es/c2ee2b/oig.bv0/1366_2000.jpeg" alt="Imagen 1" style={{ width: '500px', height: '630px', objectFit: 'cover',  borderRadius: '50px'}} />
                        <h2 style={{marginTop: '20px', marginBottom: '20px', fontSize: '30px'}}>Tranquilidad</h2>
                        <button style={{ backgroundColor: '#3842E8', color: 'white' }} className="btn"  onClick={() => window.location.href = '/about'}>Conócenos</button>
                    </div>
                    <div>
                        <img src="https://images4.alphacoders.com/207/20724.jpg" alt="Imagen 2" style={{ width: '500px', height: '630px', objectFit: 'cover',  borderRadius: '50px' }} />
                        <h2 style={{marginTop: '20px', marginBottom: '20px', fontSize: '30px'}}>Innovación</h2>
                        <button style={{ backgroundColor: '#3842E8', color: 'white' }} className="btn" onClick={() => window.location.href = '/servicios'}>Servicios</button>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/fotos-premium/candado-ciberseguridad-bloqueo-digital-tecnologia-fondo-proteccion-datos-red_717440-2451.jpg" alt="Imagen 3" style={{ width: '500px', height: '630px', objectFit: 'cover',  borderRadius: '50px' }} />
                        <h2  style={{marginTop: '20px', marginBottom: '20px', fontSize: '30px'}}>Seguridad</h2>
                        <button style={{ backgroundColor: '#3842E8', color: 'white' }} className="btn"  onClick={() => window.location.href = '/productos'}>Nuestros Productos</button>
                    </div>
                </div>
                <br />
                <hr style={{ width: '1500px', marginLeft: '-90px' }} />
            </div>
        </>
    );
}