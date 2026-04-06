import { Product } from "@/app/types/product"
import { ProductCard } from "./product-card"

type ProductGridProps = {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f68b1f]">
            Products
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Product Portfolio
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Explore our anti-drone software products, modules, and operational access systems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}