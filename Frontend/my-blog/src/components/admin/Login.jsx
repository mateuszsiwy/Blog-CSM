import React from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("https://localhost:7027/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            })
            console.log(response);  

            if(response.ok){
                console.log("Zalogowano");
                const {token} = await response.json();
                console.log(token);
                localStorage.setItem("token", token);
                navigate("/admin/dashboard");
            }
            else{
                alert("Niepoprawne dane logowania");
            }

        } catch (error) {
            console.error("Blad logowania: ", error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center">Panel Administracyjny</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Login"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Hasło"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Zaloguj
              </button>
            </form>
          </div>
        </div>
      );

}
export default Login;