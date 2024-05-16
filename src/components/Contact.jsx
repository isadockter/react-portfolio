import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxs4xZfi8K7nCrMtuGLxGze9x2eNIMB7fcA1--w2gR3h9R034e7DlN0FZ2C9CoR6wLh/exec';
        fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
            .then(response => {
                setFormData({ name: '', email: '', message: '' });
                alert("Success!");
            })
            .catch(error => console.error('Error!', error.message));
    };

    return (
        <section className="mb-20 md:mx-auto flex justify-center" id="contact">
            <form name="contact-form" className="max-w-md m-5 max-w-400" onSubmit={handleSubmit}>
                <h2 className="md:text-4xl text-3xl mb-5">Let's Get in Touch!</h2>
                <div className="grid md:grid-cols-1 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-2 border-indigo-600 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                            placeholder=" " required />
                        <label htmlFor="name"
                            className="peer-focus:font-medium absolute text-sm text-indigo-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-indigo-950 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                        placeholder=" " required />
                    <label htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-indigo-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                        address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea type="text" cols="3" name="message" id="message" value={formData.message} onChange={handleChange}
                        className=" block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-indigo-950 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                        placeholder=" " required></textarea>
                    <label htmlFor="message"
                        className="peer-focus:font-medium absolute text-sm text-indigo-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                </div>
                <button type="submit" className="button m-2">Send</button>
            </form>
        </section>
    );
}

export default Contact;
