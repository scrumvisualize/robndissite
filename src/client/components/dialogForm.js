import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios'

const appUrl = process.env.REACT_APP_URL;

const DialogForm = ({ isOpen, onClose }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();
  const [sendEmail, setSendEmail] = useState({ _id: '', email: '', mobile: '', comments: '' });
  const [helperText, setHelperText] = useState('');

  const closeDialog = () => {
    onClose();
  };

  const onSubmit = (data) => {

    const fetchData = async () => {
      try {

        // Make a POST request to the server 
        const res = await axios.post(`${appUrl}/service/emailtransfer`, data);
        // Close the dialog form after successful submission
        closeDialog(); 
        // Handle success (optional)
        if (res.data.success) {
          setHelperText(res.data.message);
        }
        else {
          console.log(res.data.message);
          setHelperText(res.data.message);
        }
      } catch (e) {
        setHelperText(e.response.data.message);
        console.log(e);
      }
    }
    fetchData();
    reset();
  };

  return (
    <>

      {
        isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="fixed bg-white p-8 rounded-lg shadow-lg w-[350px] md:w-[390px] mt-4 mb-6 z-9999">
              <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <label htmlFor="email" className="block font-bold mb-2">
                    Your email:
                  </label>
                  <Controller
                    id='email'
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        onChange={(e) => {
                          field.onChange(e);
                          let val = e.target.value;
                          setSendEmail((previous) => ({
                            ...previous,
                            email: val,
                          }));
                        }}
                      />
                    )}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="mobile" className="block font-bold mb-2">
                    Mobile:
                  </label>
                  <Controller
                    id='mobile'
                    name="mobile"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[0-9]*$/, // Regular expression to match numbers only
                        message: 'Please enter a valid mobile number',
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="mobile"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        onChange={(e) => {
                          field.onChange(e);
                          let val = e.target.value;
                          setSendEmail((previous) => ({
                            ...previous,
                            mobile: val,
                          }));
                        }}
                      />
                    )}
                  />
                  {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="comments" className="block font-bold mb-2">
                    Comments:
                  </label>
                  <Controller
                    id='comments'
                    name="comments"
                    control={control}
                    rules={{
                      required: 'Comments are required',
                      minLength: {
                        value: 25,
                        message: 'Message must be at least 25 characters',
                      },
                      maxLength: {
                        value: 250,
                        message: 'Comments must not exceed 250 characters',
                      },
                      pattern: {
                        value: /^[^~()^*#&;:<>`]*$/,
                        message: 'Special characters ~()^*#&;:<>` are not allowed',
                      },
                    }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        id="comments"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        rows="4"
                        onChange={(e) => {
                          field.onChange(e);
                          let val = e.target.value;
                          setSendEmail((previous) => ({
                            ...previous,
                            comments: val,
                          }));
                        }}
                      />
                    )}
                  />
                  {errors.comments && <p className="text-red-500">{errors.comments.message}</p>}
                </div>
                <label>
                  <span className="text-red-200">{helperText}</span>
                </label>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-4 text-gray-600 font-bold"
                    onClick={closeDialog}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </>
  );
};

export default DialogForm;

