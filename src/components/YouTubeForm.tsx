import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  username: string
  email: string
  channel: string
}

export const YouTubeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('username'))

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' {...register('username', { required: true })} />
        {errors.username && <span>This field is required</span>}

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' {...register('channel', { required: true })} />
        {errors.channel && <span>This field is required</span>}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
