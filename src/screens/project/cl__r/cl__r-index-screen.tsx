import React from "react";
import { Sidenav } from "../components/sidenav";
import Image from "next/image";

const routes = [
    {
        name: "Getting Started",
        pages: [
            {
                name: "Introduction",
                route: "#introduction",
            },
            {
                name: "Main Features",
                route: "#features",
            },
            {
                name: "Forms & Form Builder",
                route: "#forms-&-form-builder",
            },
            {
                name: "Tech-Stack",
                route: "#tech-stack",
            },
            {
                name: "Know More",
                route: "#know-more",
            },
        ],
    }];


export const Cl__rIndexScreen = () => {

    return (
        <div className="flex flex-row ">
            <Sidenav routes={routes} />
            <div className="px-4 lg:px-20 py-8 w-full flex flex-col justify-start items-start max-w-5xl  ">
                <h2 className="text-blue-gray-500 text-4xl font-bold">Cl__r Medical insurance system</h2>

                <div className=" relative mt-10  rounded-lg overflow-hidden ">
                    <Image
                        alt="insurance"
                        src={"/image/insurance.png"}
                        width={768}
                        height={768}
                        className=" object-cover"
                    />
                    <div className=" absolute top-0 bottom-0 right-0  left-0 from-black to-blue-gray-900 bg-gradient-to-t opacity-5 " />
                </div>

                <div className="mt-10">
                    <a id="introduction" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Introduction#</h2>
                    <p className="text-blue-gray-500 mt-2">
                        In general it's a medical insurance system that help patient and clinic to manage their business and make it easy to manage the insurance process.
                        This app will help with managing the bills the users the doctors everything about the clinic, patient and insurance company.
                    </p>
                </div>

                <div className="mt-10">
                    <a id="features" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Main Features#</h2>
                    <p className="text-blue-gray-500 mt-2">
                        According to my NDA I can't share the features of the app.
                        Instead I'll be talking about the dev challenges that I can share.
                    </p>
                </div>

                <div className="mt-10 flex flex-col w-full  ">
                    <a id="forms-&-form-builder" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Forms & Form Builder#</h2>

                    <p className="text-blue-gray-500 mt-4 font-medium text-xl">
                        Problem:
                    </p>
                    <p className="text-blue-gray-500">
                        The app has a lot of forms that require a lot of fields and validation.
                        <br />
                        Some of the forms are dynamic and can be changed by the user.
                    </p>

                    <p className="text-blue-gray-500 mt-4 font-medium text-xl">
                        Solution:
                    </p>
                    <p className="text-blue-gray-500">
                        Creating a form require multiple steps the first one is
                        <ol className=" list-decimal ml-4 ">
                            <li>
                                defined the validation scheme
                            </li>
                            <li>
                                then create the form fields
                            </li>
                            <li>
                                then create the form + do the styling
                            </li>
                        </ol>

                        <br />
                        So We created a form builder that will help me create the form in a dynamic way.
                        The form builder will take the validation scheme and will generate the form.
                        <br />

                    </p>


                    <p className="text-blue-gray-500 mt-4 font-medium text-xl">
                        Example:
                    </p>


                    <p className="text-blue-gray-500">
                        Usually that's what we have to do when creating a form with validation using <span className="font-bold"> react-hook-form</span> and <span className="font-bold">yup</span>
                    </p>

                    <pre className="language-javaScript mt-4 !text-sm ">
                        <code>
                            {`import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  )
}`}
                        </code>
                    </pre>

                    <p className="text-blue-gray-500 mt-4">
                        But with the form builder we can do it like this
                    </p>

                    <pre className="language-javaScript mt-4 !text-sm ">
                        <code>
                            {`import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    firstName: yup.string().required().renderInput(FormBuilderInput.TEXT,{}),
    age: yup.number().positive().integer().required().renderInput(FormBuilderInput.TEXT,{}),
  })
  .required()

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
      <FormBuilder
        header={<button onClick={() => methods.handleSubmit(submit)()} />}
        methods={methods}
        formSchema={schema}
      />
  )
}`}
                        </code>
                    </pre>

                    <p className="text-blue-gray-500 mt-4 font-medium text-xl">
                        Render Input:
                    </p>


                    <p className="text-blue-gray-500 mt-4">
                        Specify the type of input that you want to render
                    </p>

                    <pre className="language-javaScript mt-4 !text-sm ">
                        <code>
                            {`const schema = yup
  .object({
    firstName: yup.string().required().renderInput(FormBuilderInput.TEXT,{}),
    dob: yup.date().required().renderInput(FormBuilderInput.DATE,{}),
    gender: yup.date().required().renderInput(FormBuilderInput.AUTOCOMPLETE,{
    inputProps: { options: []}})
    })
  .required()`}
                        </code>
                    </pre>

                    <p className="text-blue-gray-500 mt-4">
                        you can also pass the props to the input and no need to add label for each input it will be added automatically fron the schema label
                    </p>

                    <pre className="language-javaScript mt-4 !text-sm ">
                        <code>
                            {`const schema = yup
  .object({
    firstName: yup.string().required().label("First Name").renderInput(FormBuilderInput.TEXT,{
    inputProps: { style: { color: "red" }}}),
    })
  .required()`}
                        </code>
                    </pre>


                    <p className="text-blue-gray-500 mt-4 font-medium text-xl">
                        Render Custom:
                    </p>
                    <p className="text-blue-gray-500 mt-4">
                        didn't like the default input? you can create your own input and pass it to the form builder
                    </p>

                    <pre className="language-javaScript mt-4 !text-sm ">
                        <code>
                            {`const schema = yup
  .object({
    firstName: yup.string().required().label("First Name")
    .renderCustom(param => (<MyCustomField {...param}  />)
 }).required()`}
                        </code>
                    </pre>
                    <p className="text-blue-gray-500 mt-4">
                        renderCustom params
                    </p>

                    <pre className="language-javaScript mt-4 !text-sm ">
                        <code>
                            {`
renderCustom(({ field: { onChange, onBlur, value, ref } }) => (
<ReactDatePicker
onChange={onChange} // send value to hook form
onBlur={onBlur} // notify when input is touched/blur
selected={value}
/>
))
                            
                            `}
                        </code>
                    </pre>

                    <p className="text-blue-gray-500 mt-4">
                        all the feature of <span className="font-bold"> react-hook-form</span> are accessible by form Builder. <br />
                        Read More About Controller Props <a className="underline text-blue-800" href="https://react-hook-form.com/docs/usecontroller/controller" target="_blank">react-hook-form Controller</a>
                    </p>



                    <p className="text-blue-gray-500 mt-4 font-medium text-xl">
                        Form Builder Has more:
                    </p>
                    <p className="text-blue-gray-500 mt-4">
                        There is many other features that I can explain but it'll take a lot of time it's a very large library

                        You can have nested forms, overwrite the header and footer, overwrite the form sections and style, add extra sections and more
                    </p>


                </div>

                <div className="mt-10">
                    <a id="tech-stack" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Tech-Stack</h2>
                    <ul className="text-blue-gray-500 mt-2">
                        <li>React native</li>
                        <li>React native web</li>
                        <li>Next.js</li>
                        <li>AWS</li>
                        <li>SST</li>
                        <li>Lerna mono repo</li>
                    </ul>
                </div>

                <div className="mt-10">
                    <a id="know-more" className=" relative -top-24 invisible"></a>
                    <h2 className="text-blue-gray-500 text-2xl font-bold" >Know More</h2>
                    <a href="#" className="underline text-blue-800">Visit Website</a>
                </div>
            </div>
        </div >
    );
}
