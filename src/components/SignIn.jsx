import { useState } from "react";
import auth from "../Utilitis/Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

    const [emaile, setEmail] = useState('');
    const [passworde, setPassword] = useState('');

    const handleSignIn = e => {
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);

        createUserWithEmailAndPassword(auth, emaile, passworde)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {

                console.log(error.message);

            });


    }



    return (
        <div className="flex items-center justify-center bg-blue-gray-500">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSignIn} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">

                            </div>
                            <input type="submit" name="submit" id="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-green-700" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignIn;