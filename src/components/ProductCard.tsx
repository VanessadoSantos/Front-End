type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};

const ProductCard = ({ id, name, price, imageUrl, category }: ProductCardProps) => {
  return (
    <article
      key={id}
      className="group max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden bg-slate-50">
        <img
          src={imageUrl}
          alt={name}
          className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-pink-500/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-pink-500/20">
          {category}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
          <p className="text-sm text-slate-500">Uma escolha elegante para a sua coleção íntima.</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-slate-900">R$ {price.toFixed(2).replace('.', ',')}</span>
          <button
            type="button"
            aria-label={`Adicionar ${name} ao carrinho`}
            className="rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 focus:ring-offset-2"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
