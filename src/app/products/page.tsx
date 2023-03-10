import { Container } from '@components/Container';
import { PageWrapper } from '@components/PageWrapper';
import { ProductsDropdown } from '@components/ProductsDropdown';
import { ProductsImage } from '@components/ProductsImage';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const productInfo = [
  {
    title: 'Description',
    description:
      'The Foldy chair is our latest master piece combining all assets nature brings. Bamboo for keeping your cheeks happy, some other wood for the durability and a nice towel for the hot days.',
  },
  { title: 'Materials', description: 'Bamboo, wood, towel' },
  { title: 'Dimensions', description: 'H: 80cm, W: 50cm, D: 50cm' },
  { title: 'Options', description: 'Custom colors' },
];

export default function Home() {
  return (
    <PageWrapper className="overflow-hidden">
      <Container className="flex">
        <div className="flex w-[320px] min-w-[320px] flex-col border-r border-black py-12 pr-4">
          <span className="mb-10 text-xs">Products / Chairs</span>:
          <h1 className="mb-4 text-6xl uppercase">Foldy</h1>
          <p className="mb-3 text-xl">From $2,975 - $3,390</p>
          <p className="text-xs">
            Depending on size, timber and finishing options.
          </p>
          <div className="mt-auto space-y-6">
            {productInfo.map((info) => (
              <ProductsDropdown
                title={info.title}
                description={info.description}
              />
            ))}
          </div>
          <div className="flex gap-3 w-full pr-4 mt-14">
            <button
              type="button"
              className="border border-black px-4 py-4 basis-4/5"
            >
              Download Fact Sheet
            </button>
            <button
              type="button"
              className="bg-black text-white px-5 py-5 basis-1/5"
            >
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
        <div className="flex h-screenHeightWithoutHeader [&_img]:mr-4">
          <ProductsImage />
          <ProductsImage />
          <ProductsImage />
        </div>
      </Container>
    </PageWrapper>
  );
}
