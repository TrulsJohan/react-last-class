import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';

export function RenderLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <form
                action={''}
                className="flex flex-col gap-1"
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}>
                <label htmlFor="email">Email:</label>
                <input
                    className="border p-1 rounded"
                    type="text"
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /noroff\.no$/,
                            message: 'Email must include @noroff.no',
                        },
                    })}
                />
                {errors.email &&
                    (errors.email.message ? (
                        <p className="text-red-600">{errors.email.message}</p>
                    ) : (
                        <p className="text-red-600">Unexpected error</p>
                    ))}

                <label htmlFor="password">Password:</label>
                <input
                    className="border p-1 rounded"
                    type="password"
                    {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message:'Password must contain a upper and lower case letter!',
                        },
                    })}
                />
                {errors.password && <p className="text-red-600">Error</p>}

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </>
    );
}
