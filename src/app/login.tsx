import { signIn } from "next-auth/react";

export default function login(){
return(
<div>
    <h1>Login</h1>
    <form method="POST">
        <label>Nome:</label>
        <input type="text" />
    </form>
    
<button
  onClick={() => signIn("google")}
>
  Continuar com Google
</button>


<button
  onClick={() => signIn("github")}
>
  Continuar com GitHub
</button>
</div>
);
};