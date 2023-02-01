import { Container } from '@components/Container';
import { PageWrapper } from '@components/PageWrapper';
import { ProductsImage } from '@components/ProductsImage';

export default function Home() {
  return (
    <PageWrapper className="overflow-hidden">
      <Container className="flex">
        <div className="flex w-[320px] min-w-[320px] flex-col border-r border-black py-12 pr-4">
          <h1 className="mb-4 text-6xl uppercase">Foldy</h1>
          <p className="mb-1 text-xl">$3,390</p>
          <p>It is a steal! I know you want it!</p>

          <div className="mt-auto">
            <h2 className="text-xl">Description</h2>
            <p className="mt-auto">
              The Foldy chair is our latest master piece combining all assets
              nature brings. Bamboo for keeping your cheeks happy, some other
              wood for the durability and a nice towel for the hot days.
            </p>
          </div>
        </div>
        <div className="[&_img]:mr-4 h-screenHeightWithoutHeader flex">
          <ProductsImage />
          <ProductsImage />
          <ProductsImage />
        </div>
      </Container>
    </PageWrapper>
  );
}
