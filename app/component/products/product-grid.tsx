import Image from "next/image"
import { Link } from "@/navigation"
import { Product } from "@/app/types/product"


type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={product.cardImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#f68b1f]">
          {product.category}
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {product.excerpt}
        </p>

        <div className="mt-6 text-sm font-semibold text-slate-900">
          View details
        </div>
      </div>
    </Link>
  )
}