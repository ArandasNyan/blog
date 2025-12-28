import { Mark } from "@/components/ui/mark";
import { ReturnButton } from "@/components/ui/return-button";

export default function About() {
  return (
    <main className="min-h-[calc(100vh-182px)] flex flex-col items-center justify-center">
      <ReturnButton />
      <section className="prose prose-neutral dark:prose-invert sm:prose-sm md:prose-lg lg:prose-xl pb-12 px-6">
        <p>
          My name is <Mark>Emmanoel Vieira</Mark>, but you can call me{" "}
          <Mark>Arandas</Mark>. I am a{" "}
          <Mark>Software Engineer in training</Mark>, passionate about{" "}
          <Mark>Technology</Mark> and the <Mark>Cosmos</Mark>. The main purpose
          of this blog is to consolidate all the knowledge i have been acquiring
          throughout my journey, both on an <Mark>interpersonal</Mark> and{" "}
          <Mark>professional</Mark> level.
        </p>
        <p>
          In general, this blog exists to help me better understand how things
          work — how and why everything happens. One of the best ways for me to
          learn is by explaining a topic clearly to someone else (or even to my
          future self — it doesn’t matter). In addition, I use this space to
          work on areas where I still struggle, which may eventually impact my
          professional life. I strongly recommend this practice to anyone who is
          a programmer.
        </p>
        <p>
          Do not assume that everything written here is 100% correct. As I have
          already made clear: <Mark>I am learning</Mark>. For that reason, over
          time I will review and improve theses, posts, and references. Being
          able to identify something I wrote in the past, realize it was
          incorrect, and then correct it is, for me, a clear sign of real
          learning. From that point on, I can also understand which topics I can
          set aside and which personal or professional skills I still need to
          develop — especially as a person.
        </p>
        <p>
          I don't intend to explore topics outside the field of technology, as
          this is an area that truly attracts me. Perhaps, in a distant future,
          I may adapt the blog to include different subjects, but do not expect
          that anytime soon.
        </p>
        <p>
          With all that said, I hope you enjoy the content I share here. If, in
          any way, it helps you overcome learning difficulties or professional
          challenges, then it will have been worth it. I enjoy helping people,
          but before anything else, I need to help myself. The most efficient
          way I have found to do both at the same time is precisely through this
          blog.
        </p>
        <p>With that, I sincerely hope to help you — whoever you may be.</p>
      </section>
    </main>
  );
}
