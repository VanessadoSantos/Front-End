type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  wholesalePrice: number;
  imageUrl: string;
  category: string;
  subcategory: string;
  description: string;
};

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const ProductCard = ({
  name,
  price,
  wholesalePrice,
  imageUrl,
  category,
  subcategory,
  description,
}: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden bg-slate-50">
        <img
          src={imageUrl}
          alt={name}
          className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          <span className="rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-fuchsia-500/20">
            {category}
          </span>
          <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-900/10">
            {subcategory}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
          <p className="text-sm leading-6 text-slate-600">{description}</p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Varejo</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">R$ {formatCurrency(price)}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Atacado</p>
              <p className="mt-2 text-2xl font-semibold text-fuchsia-600">R$ {formatCurrency(wholesalePrice)}</p>
            </div>
          </div>

          <button
            type="button"
            aria-label={`Adicionar ${name} ao carrinho`}
            className="w-full rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 focus:ring-offset-2"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
