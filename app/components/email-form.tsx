'use-client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { ReactNode, useRef, useState } from 'react'
import styles from '../page.module.css'
import { useToast } from './use-toast'
import { Cross2Icon } from '@radix-ui/react-icons'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Required' }).max(70),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Required' }).max(3000),
})
export type formSchemaType = z.infer<typeof formSchema>

export const FormContainer = ({
  handleClose,
  children,
}: {
  handleClose: () => void
  children: ReactNode
}) => {
  return (
    <div className={styles.containerRoot}>
      <Cross2Icon className={styles.crossIcon} onClick={handleClose} />
      {children}
    </div>
  )
}

export const EmailForm = ({ handleSuccess }: { handleSuccess: () => void }) => {
  const form = useRef<HTMLFormElement | null>(null)
  const { toast } = useToast()
  const [isSending, setIsSending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: any) => {
    setIsSending(true)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const res = await response.json()

      if (!res || res.error) {
        toast({
          title: 'Something went wrong.',
          description:
            'There was a problem with your request, please try again later.',
        })
      } else {
        reset()
        handleSuccess()
      }
    } catch (error) {
      toast({
        title: 'Something went wrong.',
        description:
          'There was a problem with your request, please try again later.',
      })
      console.error('Failed to send:', error)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formRoot}
    >
      <fieldset className={styles.fieldset}>
        <label htmlFor='full-name' className={styles.fieldsetLabel}>
          Full Name
        </label>
        <input
          id='full-name'
          type='text'
          className={styles.fieldsetInput}
          data-valid={!errors?.name}
          placeholder='First and Last'
          {...register('name', { required: true, maxLength: 70 })}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor='email-address' className={styles.fieldsetLabel}>
          Email Address
        </label>
        <input
          id='email-address'
          type='email'
          className={styles.fieldsetInput}
          data-valid={!errors?.email}
          placeholder='email@domain.tld'
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor='message' className={styles.fieldsetLabelTextArea}>
          Message
        </label>
        <textarea
          id='message'
          data-valid={!errors?.message}
          className={styles.fieldsetInputTextArea}
          placeholder='Your message...'
          {...register('message', { required: true, maxLength: 3000 })}
        />
      </fieldset>
      <input
        type='submit'
        value='Send'
        className={styles.submitButton}
        disabled={isSending}
      />
    </form>
  )
}
