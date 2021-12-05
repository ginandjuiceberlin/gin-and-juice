import clsx from "clsx";
import { ChangeEventHandler, useCallback, useState } from "react";
import {
  root,
  label,
  input,
  submitAction,
  disabled,
} from "./newsletter-form.module.css";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    { type: "success" | "error"; message: string } | undefined
  >();

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      //TODO: implement mailchimp
    },
    [email]
  );

  const handleInput = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setEmail(event.target.value);
    },
    []
  );

  return (
    <form className={root} onSubmit={submitHandler}>
      <label className={label}>ENTER EMAIL FOR UPDATES</label>
      <input
        type="email"
        className={clsx(input, { [disabled]: submitting })}
        onChange={handleInput}
      />
      {!submitting && (
        <button
          type="submit"
          className={clsx(submitAction, { [disabled]: submitting })}
        >
          SUBMIT
        </button>
      )}
      {submitting && <p>SUBMITTING</p>}
      {status && <p>{status.message}</p>}
    </form>
  );
};

export default NewsletterForm;
