import { useEffect, useState } from "react";
import { Form } from "react-bootstrap"
import { resetJson, setIsDirty, setJson, useJsonEdit } from "./slice";
import store from "../../store/store";


export const JsonEdit = () => {
  const { json } = useJsonEdit();

  const [currentJson, setCurrentJson] = useState(json || '{}');
  const [data, setData] = useState(JSON.parse(currentJson));

  useEffect(() => {
    setCurrentJson(json || '{}');
  }, [json]);

  useEffect(() => {
    let parsedJson;
    try {
      parsedJson = JSON.parse(currentJson);
    } catch (err) {
      throw new Error('Invalid JSON');
    }
    if (currentJson !== '{}' && currentJson !== json) {
      store.dispatch(setIsDirty(true));
      store.dispatch(setJson(currentJson));
    }

    console.log('parsedJson', parsedJson)
    setData(parsedJson);
  }, [currentJson]);

  const onInputChange = (e: any) => {
    const { id, value } = e.target;
    const newData = { ...data, [id]: value };
    const newJson = JSON.stringify(newData);
    if (newJson !== currentJson) {
      setCurrentJson(newJson);
    }
  }

  const onReset = () => {
    store.dispatch(resetJson(""));
  }

  return (
    <Form>
      {Object.keys(data).map((key) => {
        return (
          <Form.Group key={key} className="mb-3">
            <Form.Label>{key}</Form.Label>
            <Form.Control type="text" id={key} defaultValue={data[key]} onChange={onInputChange} />
          </Form.Group>
        )
      })}
      {Object.keys(data).length ? <Form.Control type="reset" onClick={onReset} /> : null}
    </Form>
  )
}