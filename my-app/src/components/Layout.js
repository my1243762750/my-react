import '../styles/layout.css'

export function Layout(ctx) {
    console.log('ctx', ctx)
    return (
        <div className='container'>
            <div className='header'>
                header
            </div>
            <div className='body'>
                { ctx.children }
            </div>
            <div className='footer'>
                footer
            </div>
        </div>
    );
}
