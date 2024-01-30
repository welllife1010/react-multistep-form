import { FormWrapper } from "./FormWrapper"

export function AccountForm() {
  return (
    <FormWrapper title="Accont Creation">
      <label>Email</label>
      <input autoFocus required type="text" />
      <label>Password</label>
      <input required type="password" />
    </FormWrapper>
  )
}
