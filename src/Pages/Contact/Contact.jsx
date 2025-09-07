import React, { useState } from 'react'

const Contact = () => {

    const [firstName, setFirstname] = useState('')
    const [lastName, setlastName] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(firstName,lastName)

        setFirstname('');
        setlastName('')
    }

    return (
        <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent text-white">
            <form

            onSubmit={(e)=>{
                submitHandler(e)
                console.log("Form Submitted Successfully")
            }}
                className="bg-white m-auto h-fit w-full max-w-sm overflow-hidden rounded-lg border shadow-md shadow-zinc-950/5 dark:bg-zinc-900">

                <div className="bg-card -m-px rounded-lg border p-8 pb-6">
                    <div className="text-center">
                        <a href="/" aria-label="go home" className="mx-auto block w-fit">
                            <div className="w-10 h-10 bg-zinc-300 rounded-full mx-auto"></div>
                        </a>
                        <h1 className="mb-1 mt-4 text-xl font-semibold">Create a Tailark Account</h1>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Welcome! Create an account to get started
                        </p>
                    </div>

                    <div className="mt-6 space-y-6">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <label for="firstname" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Firstname
                                </label>
                                <input type="text" id="firstname" name="firstname" required

                                value={firstName}
                                onChange={(e)=>{
                                    setFirstname(e.target.value)
                                }}
                                    className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" />
                            </div>
                            <div className="space-y-2">
                                <label for="lastname" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Lastname
                                </label>
                                <input type="text" id="lastname" name="lastname" required

                                value={lastName}
                                onChange={(e)=>{
                                    setlastName(e.target.value)
                                }}
                                    className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label for="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                Email
                            </label>
                            <input type="email" id="email" name="email" required
                                className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" />
                        </div>

                        <div className="space-y-0.5">
                            <div className="flex items-center justify-between">
                                <label for="pwd" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Password
                                </label>
                                <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot your password?</a>
                            </div>
                            <input type="password" id="pwd" name="pwd" required
                                className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" />
                        </div>

                        <button type="submit"
                            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Sign In
                        </button>
                    </div>

                    <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                        <hr className="border-dashed" />
                        <span className="text-xs text-zinc-500">Or continue with</span>
                        <hr className="border-dashed" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button type="button"
                            className="flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 262">
                                <path fill="#4285f4"
                                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                                <path fill="#34a853"
                                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                                <path fill="#fbbc05"
                                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                                <path fill="#eb4335"
                                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                            </svg>
                            Google
                        </button>
                        <button type="button"
                            className="flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256">
                                <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z" />
                                <path fill="#80cc28" d="M256 121.666H134.335V0H256z" />
                                <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z" />
                                <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z" />
                            </svg>
                            Microsoft
                        </button>
                    </div>
                </div>

                <div className="p-3">
                    <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
                        Have an account?
                        <a href="#" className="ml-1 text-indigo-600 hover:underline">Sign In</a>
                    </p>
                </div>
            </form>
        </section>

    )
}

export default Contact