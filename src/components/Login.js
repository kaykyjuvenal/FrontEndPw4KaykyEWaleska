import { useState } from "react";

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();  // Previne o comportamento padrão do formulário

        try {
            // Faz a requisição POST para o endpoint /login na porta 3000
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, password }),  // Envia user e password como JSON
            });

            const data = await response.json();  // Faz o parsing da resposta JSON

            if (response.ok) {
                // Redireciona o usuário para a página apropriada com base no tipoDeAcesso
                window.location.href = data.redirectTo;  // Redireciona usando window.location
            } else {
                // Exibe mensagem de erro se as credenciais forem inválidas
                alert(data.message);
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao tentar fazer login. Tente novamente.');
        }
    }

    return (
        <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleLogin}>
                <input
                    type='text'
                    name='user'
                    placeholder='User'
                    required
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='btn-login'>Login</button>
            </form>
        </div>
    );
}

export default Login;