import { Form } from "react-bootstrap"
import { useJsonEdit } from "./slice"

export const JsonEdit = () => {
  const { json, isDirty, fileName, reset } = useJsonEdit();

  return (
    <Form>

    </Form>
  )
}