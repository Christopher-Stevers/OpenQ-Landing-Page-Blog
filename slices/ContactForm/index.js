import { Bounded } from "../../components/Bounded";
import {tw} from 'twind'
import { useState } from "react";

const Field = ({ label, children }) => {
  return (
    <label>
      <span className={tw(`text-sm text-slate-500`)}>{label}</span>
      {children}
    </label>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={tw(`w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400`)}
      />
    </Field>
  );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className={tw(`h-40 w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400`)}
      />
    </Field>
  );
};

const ContactForm = () => {
const [messageSent, setMessageSent] = useState()
const contact = async (e) => {
const form = e.target
e.preventDefault()
console.log()
		try {
			const formData = {
[form[0].name]:form[0].value,

[form[1].name]:form[1].value,
message:form[2].value,
}
console.log(formData)
			const response = await fetch('/api/contact', {
				method: "POST",
				body: JSON.stringify(formData)
			});
			const subscribeJson = await response.json();
			if (subscribeJson) {
				form[0].value=""
        form[1].value=""
        form[2].value=""
        setMessageSent(true)
			}
		}
		catch (err) {
			console.error(err)

		}
	};
  return (
    <Bounded as="section" size="small">
      <form
      onSubmit ={contact}
        action="/api/contact"
        method="post"
        className={tw(`grid grid-cols-1 gap-6`)}
      >
        <InputField label="Name" name="name" placeholder="Jane Doe" />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane.doe@example.com"
        />
        <TextareaField
          label="Message"
          name="message"
          placeholder="Write your message here…"
        />
        <button
          type="submit"
          className={tw(`ml-auto inline-flex items-center gap-2`)}
        >
          {messageSent? "Message sent":"Send message"}
          <div aria-hidden={true} className={tw(`text-xl`)}>
            {!messageSent ? '\u2192':<div className="w-6"></div>}
          </div>
        </button>
      </form>
    </Bounded>
  );
};

export default ContactForm;
