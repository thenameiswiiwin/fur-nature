import { Container } from '@components/Container';
import { PageWrapper } from '@components/PageWrapper';
import Link from 'next/link';

export default function Home() {
  return (
    <PageWrapper className="h-screenHeightWithoutHeader bg-[url(../assets/chair.jpg)] bg-cover bg-center">
      <Container className="flex h-full flex-col pt-24 text-center text-2xl">
        <h1 className="mb-8 text-8xl font-bold">Welcome to Fur Nature</h1>
        <p className="mx-auto max-w-xl">
          We craft furniture by utilising what mother earth gave us. And we
          build websites on the side ;).
        </p>

        <Link
          href="/products"
          className="mx-auto mt-12 rounded-full bg-black p-4 text-beige transition-colors hover:bg-[#333] focus:bg-[#333]"
        >
          More about Foldly
        </Link>
      </Container>
    </PageWrapper>
  );
}
