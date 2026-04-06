import { Product } from "@/app/types/product"

type ProductSpecsProps = {
  product: Product
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f68b1f]">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Product Details
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            {product.overview}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f68b1f]">
              Specifications
            </p>

            <div className="mt-6 divide-y divide-slate-200">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <span className="text-sm font-medium text-slate-500">
                    {spec.label}
                  </span>
                  <span className="text-right text-sm font-semibold text-slate-900">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}