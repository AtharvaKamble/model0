import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Model0",
  description:
    "The official Model0 About page containing more information about the Model0 application.",
};

export default function About() {
  return (
    <section className="min-h-screen flex justify-center antialiased">
      <div className="mt-40 max-w-[500px] py-10">
        <h1 className="text-6xl font-light text-black">About Model0</h1>
        <p className="mt-10 text-stone-700">
          Model0 is a tool that makes integrating ML, GPT and LLM models into
          your projects - a breeze. It allows you to create, train, fine-tune
          and use these models into your project with an API interface.
        </p>
        <p className="mt-4 text-stone-700">
          Currently, it&apos;s under development and the first beta is going to
          be released on 1st July 2024.
        </p>

        <h3 className="font-semibold mt-10 text-black">How is it built?</h3>
        <p className="mt-4 text-stone-700">
          We use{" "}
          <Link
            className="text-sky-600"
            target="_blank"
            href="https://aws.amazon.com/sagemaker/"
          >
            AWS SageMaker
          </Link>{" "}
          to create and maintain all the user models. The authentication of the
          models with respect to the users and the fact that user A&apos;s
          training data would not affect user B&apos;s training data, is taken
          care of by the good people at AWS.
        </p>

        <p className="mt-4 text-stone-700">
          On the frontend, we are using Next.js, TailwindCSS and a combination
          of ShadCN and ChakraUI components.
        </p>

        <h3 className="font-semibold mt-10 text-black">Pricing?</h3>
        <p className="mt-4 text-stone-700">
          For time being, we offer the hobby plan which is and will always be
          free. Later this year, we are planning on releasing more plans based
          on our studies of user usage for larger teams and applications.
        </p>

        <h3 className="font-semibold mt-10 text-black">Questions?</h3>
        <p className="mt-4 text-stone-700">
          Feel free to direct any questions by opening an issue or a discussion
          on our GitHub at{" "}
          <Link
            href="https://github.com/AtharvaKamble/model0"
            className="text-sky-600"
          >
            github.com/AtharvaKamble/model0
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
