import { FormWrapper } from "./FormWrapper"

type AccountData = {
  email: string
  password: string
}

type AccountDataProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountDataProps) {
  return (
    <FormWrapper title="Accont Creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  )
}
