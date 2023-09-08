import { Form } from "react-bootstrap";
import { useJsonEdit } from "./slice";
export const UploadForm = () => {
  const { json, isDirty, fileName, reset } = useJsonEdit();

  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload JSON File</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  )
}