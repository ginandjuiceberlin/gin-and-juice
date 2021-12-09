import clsx from "clsx";
import { ChangeEventHandler, useCallback, useState } from "react";
import {
  root,
  label,
  input,
  submitAction,
  disabled,
} from "./newsletter-form.module.css";
import addToMailchimp from "gatsby-plugin-mailchimp";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    { type: "success" | "error"; message: string } | undefined
  >();

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus(undefined);
      setSubmitting(true);
      try {
        const mailchimpResponse = await addToMailchimp(email, {}, undefined);

        setStatus({
          type: mailchimpResponse.result,
          message: mailchimpResponse.msg,
        });
        setSubmitting(false);
      } catch (e) {
        setStatus({
          type: "error",
          message: "There was some error, try again later!",
        });
        setSubmitting(false);
      }
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
      {!status && (
        <>
          <label className={label}>Enter Email For Updates</label>
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
              Submit
            </button>
          )}
        </>
      )}
      {submitting && <p>Submitting</p>}
      {status && <p dangerouslySetInnerHTML={{ __html: status.message }}></p>}
    </form>
  );
};

export default NewsletterForm;
