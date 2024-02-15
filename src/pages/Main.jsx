import '../App.css'

export default function Main() {
    return (
        <>
        
        <div id="main-content" style={{ marginTop: '15%' }}>
            <div>
                <a href="home">
                    <img style={{margin: '0 auto', width: '400px', height: 'auto'}} src="https://i.pinimg.com/originals/f4/38/f3/f438f3600d2690018f981c66e7935b49.png" className="logo" alt="logo" />
                </a>
            </div>
            <div id="main-content">
                <h1 style={{fontSize: '100px'}}>TitanShield</h1>
                <div className="card">
                    <h3 style={{fontSize: '25px', fontStyle: 'italic'}}>Seguridad para ti y para todos</h3>
                </div>
            </div>
        </div>
        </>
    );
}

