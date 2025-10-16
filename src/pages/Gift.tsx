import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

interface GiftFormInputs {
    giftType: 'item' | 'money';
    itemName?: string;
    amount?: number;
    message: string;
    email: string;
}

const Gift = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<GiftFormInputs>({
        defaultValues: {
            giftType: 'item',
            message: '',
            email: ''
        }
    });

    const giftType = watch('giftType');

    const onSubmit: SubmitHandler<GiftFormInputs> = (data) => {
        // Here you would typically send this to your backend
        console.log('Gift submission:', data);
        alert(`Thank you for your ${data.giftType === 'item' ? 'gift: ' + data.itemName : 'monetary gift: $' + data.amount}`);
        reset();
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Gift the Couple</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow">
                <div className="mb-4">
                    <label className="mr-4">
                        <input
                            type="radio"
                            value="item"
                            {...register('giftType')}
                        /> Item
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="money"
                            {...register('giftType')}
                        /> Money
                    </label>
                </div>
                {giftType === 'item' ? (
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Gift item (e.g., blender)"
                            {...register('itemName', { required: giftType === 'item' })}
                            className="w-full border px-3 py-2 mb-2 rounded"
                        />
                        {errors.itemName && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                ) : (
                    <div className="mb-4">
                        <input
                            type="number"
                            placeholder="Amount (USD)"
                            {...register('amount', {
                                required: giftType === 'money',
                                min: { value: 1, message: 'Amount must be greater than 0' }
                            })}
                            className="w-full border px-3 py-2 mb-2 rounded"
                        />
                        {errors.amount && <span className="text-red-500 text-sm">{errors.amount.message}</span>}
                    </div>
                )}
                <div className="mb-4">
                    <textarea
                        placeholder="Leave a message for the couple"
                        {...register('message', { required: 'Please leave a message' })}
                        className="w-full border px-3 py-2 mb-2 rounded"
                        rows={3}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Your email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        className="w-full border px-3 py-2 mb-2 rounded"
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full transition-colors"
                >
                    Send Gift
                </button>
            </form>
        </div>
    );
};

export default Gift;
